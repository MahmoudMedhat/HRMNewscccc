
namespace HRM.AttendanceSheet.Endpoints
{
    using HRM.Administration.Entities;
    using HRM.AttendanceSheet.Entities;
    using HRM.Modules.AttendanceSheet.AttendanceSheet;
    using MoreLinq;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using System.Linq;
    using System.Web.Mvc;
    using MyRepository = Repositories.AttendanceSheetRepository;
    using MyRow = Entities.AttendanceSheetRow;
    using Newtonsoft.Json;

    using System.Globalization;

    using HRM.Employees.Entities;

    using HRM.Modules.Administration.User;
    using HRM.Modules.Administration.OfficialHolidays;
    using HRM.Methods;

    [RoutePrefix("Services/AttendanceSheet/AttendanceSheet"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class AttendanceSheetController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {

            var AttendanceSheet_compare = new List<AttendanceSheetRow>();
            var AttendanceSheet = uow.Connection.List<AttendanceSheetRow>().ToList();



            #region Variables
            double ALL_FROM_TO_HOLIDAYS_policy = 0;
            List<LeaveRow> LeaveList = new List<LeaveRow>();
            var LeaveRowList = uow.Connection.List<LeaveRow>().ToList();
            var ActiveUserID = new List<int>();
            var result = from Emp in LeaveRowList group Emp by Emp.Date into egroup orderby egroup.Key select egroup;
            var LastSatus = uow.Connection.List<EmploeesStatusRow>().OrderByDescending(x => x.Id).DistinctBy(x => x.UserId).Where(x => x.EmploymentStatusID == 1).ToList();
            foreach (var item in LastSatus)
            {
                ActiveUserID.Add(item.UserId.Value);
            }
            AttendanceSheetRow Absenses_Users = new AttendanceSheetRow();
            var Active_User_FingerPrintCode = uow.Connection.List<UserRow>().Where(x => ActiveUserID.Contains(x.UserId.Value)).Select(x => x.FingerPrintCode).ToList(); // FingerPrint for All User Active
            var OfficialHolidaysRow = uow.Connection.List<OfficialHolidaysRow>().ToList();

            #endregion

            #region Assign Value to AttendanceSheet

            foreach (var item in LeaveRowList)
            {
                AttendanceSheetRow attendance = new AttendanceSheetRow();

                attendance.AttendanceDate = item.Date.Value;
                var UserList = uow.Connection.List<UserRow>().FirstOrDefault(x => x.FingerPrintCode.ToLower().Equals(item.FingerPrint.ToLower()));
                attendance.Email = UserList.Email;
                attendance.EmployeeName = UserList.DisplayName;

                #region User_AttendanceDate

                var User_AttendanceDate_Hour = UserList.AttendanceDate.Value.Hour;
                var User_AttendanceDate_Minute = UserList.AttendanceDate.Value.Minute;
                var User_AttendanceDate_Second = UserList.AttendanceDate.Value.Second;

                TimeSpan User_AttendanceDate = new TimeSpan(User_AttendanceDate_Hour, User_AttendanceDate_Minute, User_AttendanceDate_Second);

                #endregion

                #region CheckIn

                var CheckIn_Hour = item.CheckIn.Value.Hour;
                var CheckIn_Minut = item.CheckIn.Value.Minute;
                var ChecIn_Secound = item.CheckIn.Value.Second;

                TimeSpan CheckIn = new TimeSpan(CheckIn_Hour, CheckIn_Minut, ChecIn_Secound);

                #endregion

                #region Departuredate

                var Departuredate_Hour = UserList.Departuredate.Value.Hour;
                var Departuredate_Minute = UserList.Departuredate.Value.Minute;
                var Departuredate_Second = UserList.Departuredate.Value.Second;

                TimeSpan Departuredate = new TimeSpan(Departuredate_Hour, Departuredate_Minute, Departuredate_Second);

                #endregion

                #region CheckOut

                var CheckOut_Hour = item.CheckOut.Value.Hour;
                var CheckOut_Minute = item.CheckOut.Value.Minute;
                var CheckOut_Secound = item.CheckOut.Value.Second;

                TimeSpan CheckOut = new TimeSpan(CheckOut_Hour, CheckOut_Minute, CheckOut_Secound);

                #endregion


                if (User_AttendanceDate.Ticks == CheckIn.Ticks)
                {
                    attendance.Status_In = LeavingStatusEnum.Present;
                    attendance.Remarks = "Good";
                }

                else if (User_AttendanceDate.Ticks < CheckIn.Ticks)
                {
                    attendance.Status_In = LeavingStatusEnum.Late;
                    var Late = User_AttendanceDate.Minutes - CheckIn.Minutes;
                    attendance.Remarks = Late.ToString() + " min late";
                }

                else if (User_AttendanceDate.Ticks > CheckIn.Ticks)
                {
                    var Early = User_AttendanceDate - CheckIn;
                    attendance.Remarks = Early.ToString() + " min early";
                    attendance.Status_In = LeavingStatusEnum.early;
                }

                if (Departuredate.Ticks == CheckOut.Ticks)
                {
                    attendance.Remark_Out = "Good";
                    attendance.Status_Out = LeavingStatusEnum.Present;
                }
                else if (Departuredate.Ticks > CheckOut.Ticks)
                {
                    attendance.Status_Out = LeavingStatusEnum.early;
                    var Early = Departuredate - CheckOut;
                    attendance.Remark_Out = Early.ToString() + " min early";
                }

                else if (Departuredate.Ticks < CheckOut.Ticks)
                {
                    var Late = CheckOut - Departuredate;
                    attendance.Remark_Out = Late.ToString() + " min late";
                    attendance.Status_Out = LeavingStatusEnum.Late;
                }

                //AttendanceSheet_compare.Add(attendance);

                if (AttendanceSheet.Count != 0)
                {
                    var IfExixstance = AttendanceSheet.Any(x => x.AttendanceDate.Value.Ticks == attendance.AttendanceDate.Value.Ticks
                                  && x.Email == attendance.Email && x.EmployeeName == attendance.EmployeeName && x.Remarks == attendance.Remarks &&
                                  x.Remark_Out == attendance.Remark_Out && x.Status_In == attendance.Status_In && x.Status_Out == attendance.Status_Out);

                    if (!IfExixstance)
                    {
                        uow.Connection.Insert<MyRow>(attendance);
                    }

                }
                else
                {
                    uow.Connection.Insert<MyRow>(attendance);
                }




            }

            #endregion

            #region Absense
            foreach (var group in result)
            {
                foreach (var Finger in Active_User_FingerPrintCode)
                {
                    var FingerPrintGroup = group.Select(x => x.FingerPrint).ToList();
                    var IfExsistance = FingerPrintGroup.Contains(Finger);
                    if (IfExsistance == false)
                    {
                        var UserRow = uow.Connection.List<UserRow>().FirstOrDefault(x => x.FingerPrintCode == Finger);
                        var LeaveRow = uow.Connection.List<LeaveRow>().FirstOrDefault(x => x.FingerPrint == Finger);
                        if (UserRow != null)
                        {

                            #region Leaving request
                            var VacancyRequest = uow.Connection.List<VacancyRequestsRow>().Where(x => x.UserId == UserRow.UserId && x.StatusId == 1 && x.IsAcceptedbyHr == Employees.AcceptedHREnum.Approved).ToList();
                            if (VacancyRequest.Count != 0)
                            {
                                foreach (var item in VacancyRequest)
                                {
                                    var VacacncyFrom = item.DateFrom.Value;
                                    var VacacnyTo = item.Dateto.Value;
                                    if (group.Key.Value.Ticks >= VacacncyFrom.Ticks && group.Key.Value.Ticks <= VacacnyTo.Ticks)
                                    {
                                        Absenses_Users.Remarks = "Vacation approved";
                                        Absenses_Users.Remark_Out = "Vacation approved";
                                    }
                                    else
                                    {
                                        Absenses_Users.Remark_Out = "Unkown";
                                        Absenses_Users.Remarks = "Unkown";
                                    }
                                }
                            }

                            else
                            {
                                Absenses_Users.Remarks = "Unkown";
                                Absenses_Users.Remark_Out = "Unkown";
                            }
                            #endregion

                            #region Offical Holidays

                            foreach (var item in OfficialHolidaysRow)
                            {


                                if (item.weekdays != WeekDaysEnum.Null)
                                {
                                    var Date = (int)group.Key.Value.DayOfWeek;

                                    if (item.Religion == Religion_Offical_Enum.AllofThem)
                                    {

                                        var weekdays = (int)item.weekdays.Value;
                                        if (Date == weekdays)
                                        {
                                            Absenses_Users.Remarks = item.TheReasonOfHoliday;
                                            Absenses_Users.Remark_Out = item.TheReasonOfHoliday;
                                        }
                                    }

                                    if (item.Religion == Religion_Offical_Enum.Muslim)
                                    {
                                        if (UserRow.Religion == ReligionEnum.Muslim)
                                        {
                                            var weekdays = (int)item.weekdays.Value;
                                            if (Date == weekdays)
                                            {
                                                Absenses_Users.Remarks = item.TheReasonOfHoliday;
                                                Absenses_Users.Remark_Out = item.TheReasonOfHoliday;
                                            }
                                        }

                                    }

                                    if (item.Religion == Religion_Offical_Enum.Christian)
                                    {
                                        if (UserRow.Religion == ReligionEnum.Christian)
                                        {
                                            var weekdays = (int)item.weekdays.Value;
                                            if (Date == weekdays)
                                            {
                                                Absenses_Users.Remarks = item.TheReasonOfHoliday;
                                                Absenses_Users.Remark_Out = item.TheReasonOfHoliday;
                                            }
                                        }
                                    }
                                }

                                else if (item.weekdays == WeekDaysEnum.Null && item.FromHoliday != null && item.ToHoliday != null)
                                {
                                    var FromHoliday = item.FromHoliday.Value;
                                    var ToHoliday = item.ToHoliday.Value;
                                    if (item.Religion == Religion_Offical_Enum.AllofThem)
                                    {
                                        if (group.Key.Value.Ticks >= FromHoliday.Ticks && group.Key.Value.Ticks <= ToHoliday.Ticks)
                                        {
                                            Absenses_Users.Remarks = item.TheReasonOfHoliday;
                                            Absenses_Users.Remark_Out = item.TheReasonOfHoliday;
                                        }
                                    }

                                    else if (item.Religion == Religion_Offical_Enum.Christian)
                                    {
                                        if (UserRow.Religion == ReligionEnum.Christian)
                                        {
                                            if (group.Key.Value.Ticks >= FromHoliday.Ticks && group.Key.Value.Ticks <= ToHoliday.Ticks)
                                            {
                                                Absenses_Users.Remarks = item.TheReasonOfHoliday;
                                                Absenses_Users.Remark_Out = item.TheReasonOfHoliday;
                                            }
                                        }

                                    }

                                    else if (item.Religion == Religion_Offical_Enum.Muslim)
                                    {
                                        if (UserRow.Religion == ReligionEnum.Muslim)
                                        {
                                            if (group.Key.Value.Ticks >= FromHoliday.Ticks && group.Key.Value.Ticks <= ToHoliday.Ticks)
                                            {
                                                Absenses_Users.Remarks = item.TheReasonOfHoliday;
                                                Absenses_Users.Remark_Out = item.TheReasonOfHoliday;
                                            }
                                        }
                                    }

                                }
                            }

                            #endregion

                            Absenses_Users.Status_In = LeavingStatusEnum.Absence;
                            Absenses_Users.Status_Out = LeavingStatusEnum.Absence;
                            Absenses_Users.EmployeeName = UserRow.DisplayName;
                            Absenses_Users.Email = UserRow.Email;
                            Absenses_Users.AttendanceDate = group.Key;
                            AttendanceSheet_compare.Add(Absenses_Users);

                            if (AttendanceSheet.Count != 0)
                            {
                                var IfExixstance_absence = AttendanceSheet.Any(x => x.AttendanceDate.Value.Ticks == Absenses_Users.AttendanceDate.Value.Ticks
                                  && x.Email == Absenses_Users.Email && x.EmployeeName == Absenses_Users.EmployeeName && x.Remarks == Absenses_Users.Remarks &&
                                  x.Remark_Out == Absenses_Users.Remark_Out && x.Status_In == Absenses_Users.Status_In && x.Status_Out == Absenses_Users.Status_Out);

                                if (!IfExixstance_absence)
                                {
                                    uow.Connection.Insert<MyRow>(Absenses_Users);
                                }
                            }

                            else
                            {
                                uow.Connection.Insert<MyRow>(Absenses_Users);
                            }


                        }
                    }
                }
            }
            #endregion


            return new SaveResponse();


        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Update(uow, request);
        }

        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyRepository().Delete(uow, request);
        }

        [HttpPost]
        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRepository().Retrieve(connection, request);
        }

        [HttpPost]
        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyRepository().List(connection, request);
        }
    }
}
