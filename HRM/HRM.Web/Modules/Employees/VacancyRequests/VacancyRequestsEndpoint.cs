
namespace HRM.Employees.Endpoints
{
    using HRM.Administration.Entities;
    using HRM.Employees.Entities;
    using HRM.Employees;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using System.Linq;
    using System.Web.Mvc;
    using MyRepository = Repositories.VacancyRequestsRepository;
    using MyRow = Entities.VacancyRequestsRow;
    using HRM.Modules.Administration.User;
    using HRM.Modules.Administration.OfficialHolidays;
    

    [RoutePrefix("Services/Employees/VacancyRequests"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public partial class VacancyRequestsController : ServiceEndpoint
    {     
        [Route("Total_Limits")]
        public LimitSummResponcs Total_Limits(IDbConnection connection, SaveRequest<MyRow> request)
        {
            #region Variables


            int year = DateTime.Now.Year;

            int UserID = int.Parse(Authorization.UserId);
            DateTime? HireDateNullabl = connection.TryById<UsersRow>(UserID).HireDate;
            DateTime HireDate = HireDateNullabl.Value;
            var Years_of_work = (decimal)CalculateHireDateYears(DateTime.Now, HireDate);
            double HireDatePerMonth = CalculateHireDateMonth(DateTime.Now, HireDate);
            Dictionary<DateTime, double> Vacations_during_financial = new Dictionary<DateTime, double>();
            double allvacation_in_DB = 0;
            var VacancyIdR = request.Entity.VacancyId;
            var FinancialyearRow = connection.List<FinancialyearRow>().FirstOrDefault(x => x.Status == true);
            List<VacancyRequestsRow> vacancies = connection.List<VacancyRequestsRow>().Where(x => x.UserId == UserID &&
                   x.IsAcceptedbyHr == AcceptedHREnum.Approved && x.StatusId == 1 && x.VacancyId == VacancyIdR).ToList();
            var CurrentFinanicalYear_DateFrom = FinancialyearRow.DateFrom.Value;
            var CurrentFinanicalYear_DateTo = FinancialyearRow.DateTo.Value;
            if (FinancialyearRow == null)
            {
                throw new Exception("Please review your Financial Year");
            }
            var VacancyPolicyRow = connection.List<VacancyPolicyRow>().Where(x => x.VacancyId == VacancyIdR).ToList();
            double? Vacancieslimt = 0;
            double? VacanciesLimit_after_relay = 0;

            var OfficialHolidaysRow = connection.List<OfficialHolidaysRow>().ToList();


            var UserReligion = connection.List<UserRow>().FirstOrDefault(x => x.UserId == UserID).Religion;

            double ALL_FROM_TO_HOLIDAYS = 0;
            double ALL_FROM_TO_HOLIDAYS_policy = 0;
            double Vacancy_days_requet = 0;
            bool WeekExistance = false;
            #endregion

            //w2f el loop lw el condion  mtl2a4 fi el policy
            //w2f el loop lw el condiotion matl2a4 fi el balance

            if (request.Entity.DateFrom != null && request.Entity.Dateto != null && VacancyIdR != null)
            {
                var DateFromR = request.Entity.DateFrom.Value;
                var DatetoR = request.Entity.Dateto.Value;

                #region Vacancy_days_requet

                OfficialHoldays(OfficialHolidaysRow, DateFromR, DatetoR, ref ALL_FROM_TO_HOLIDAYS, UserReligion.Value);
                Vacancy_days_requet = CalculateYourVacancies_days(DatetoR, DateFromR);
                if (Vacancy_days_requet < ALL_FROM_TO_HOLIDAYS)
                {
                    Vacancy_days_requet = 0;
                }

                else
                {
                    Vacancy_days_requet -= ALL_FROM_TO_HOLIDAYS;
                }
                #endregion

                #region The Leave token

                foreach (var policyRow in VacancyPolicyRow)
                {
                    var BalanceAccountListRow = connection.List<BalanceAccountRow>().Where(x => x.User_ID == UserID).ToList();

                    var UserVacanciesLimit_ifExistance = connection.List<UserVacanciesLimitRow>().Any(x => x.UserId == UserID && x.VacancyId == VacancyIdR);

                    if (UserVacanciesLimit_ifExistance)
                    {
                        var UserVacanciesLimitRow = connection.List<UserVacanciesLimitRow>().FirstOrDefault(x => x.UserId == UserID && x.VacancyId == VacancyIdR);

                        var Limit = UserVacanciesLimitRow.Limit;

                        if (policyRow.Duration == Duration.yearly && policyRow.Sending == Sending.Norelay) // Annual Or Casual الاجازات اللي بتنتهي مع نهاية السنه
                        {
                            var FromYears = policyRow.FromYears;
                            var ToYears = policyRow.ToYears;

                            //Existanceinpolicy = true;
                            Vacancieslimt = Limit;
                            foreach (var item in vacancies)
                            {
                                var DateFromVacancy = item.DateFrom.Value;
                                var DatetoVacancy = item.Dateto.Value;

                                if (DateFromVacancy.Ticks >= CurrentFinanicalYear_DateFrom.Ticks && DateFromVacancy.Ticks <= CurrentFinanicalYear_DateTo.Ticks
                                   && DatetoVacancy.Ticks >= CurrentFinanicalYear_DateFrom.Ticks && DatetoVacancy.Ticks <= CurrentFinanicalYear_DateTo.Ticks)
                                {
                                    allvacation_in_DB += CalculateYourVacancies_days(DatetoVacancy, DateFromVacancy);
                                    //if Leav taken are Negative
                                    if (allvacation_in_DB <= 0)
                                    {
                                        allvacation_in_DB = 0;
                                    }

                                    else
                                    {
                                        //Reset
                                        if (ALL_FROM_TO_HOLIDAYS_policy != 0)
                                        {
                                            ALL_FROM_TO_HOLIDAYS_policy = 0;
                                        }
                                        OfficialHoldays(OfficialHolidaysRow, DateFromVacancy, DatetoVacancy, ref ALL_FROM_TO_HOLIDAYS_policy, UserReligion.Value);

                                        allvacation_in_DB -= ALL_FROM_TO_HOLIDAYS_policy;


                                    }
                                }
                                
                            }

                            return new LimitSummResponcs()
                            {
                                AllVactions = allvacation_in_DB,
                                Limit = Vacancieslimt.Value,
                                YourVacancyRequest = Vacancy_days_requet
                                //TotalSum = 0
                            };




                        }

                        else if (policyRow.Duration == Duration.Monthly && policyRow.Sending == Sending.Norelay)
                        {
                            //Existanceinpolicy = true;

                            foreach (var balance in BalanceAccountListRow)
                            {
                                DateTime DateEnd = balance.DateEnd.Value;
                                DateTime DateBeginn = balance.DateBeginn.Value;

                                //Check if datefrom and dateto in balance
                                //Check 3la kol el vacancies date 2lly mogodin fi el balanca 34an a3rf el limit 2lly fi el db


                                if (DateFromR.Ticks >= DateBeginn.Ticks && DateFromR.Ticks <= DateEnd.Ticks
                                    && DatetoR.Ticks >= DateBeginn.Ticks && DatetoR.Ticks <= DateEnd.Ticks)
                                {
                                    //List<VacancyRequestsRow> vacancies = uow.Connection.List<VacancyRequestsRow>().Where(x => x.UserId == UserID &&
                                    //x.IsAcceptedbyHr == 1 && x.VacancyId == VacancyIdR).ToList();

                                    foreach (var vacancy in vacancies)
                                    {
                                        var DateFromVacancy = vacancy.DateFrom.Value;
                                        var DatetoVacancy = vacancy.Dateto.Value;
                                        //Check if Date from and to that in db  inside balance. for calculation Summation of Leaving
                                        if (DateFromVacancy.Ticks >= DateBeginn.Ticks && DateFromVacancy.Ticks <= DateEnd.Ticks
                                            && DatetoVacancy.Ticks >= DateBeginn.Ticks && DatetoVacancy.Ticks <= DateEnd.Ticks)
                                        {
                                            allvacation_in_DB += CalculateYourVacancies_days(DatetoVacancy, DateFromVacancy);
                                            //if Leav taken are Negative
                                            if (allvacation_in_DB <= 0)
                                            {
                                                allvacation_in_DB = 0;
                                            }

                                            else
                                            {
                                                //Reset
                                                if (ALL_FROM_TO_HOLIDAYS_policy != 0)
                                                {
                                                    ALL_FROM_TO_HOLIDAYS_policy = 0;
                                                }
                                                OfficialHoldays(OfficialHolidaysRow, DateFromVacancy, DatetoVacancy, ref ALL_FROM_TO_HOLIDAYS_policy, UserReligion.Value);

                                                allvacation_in_DB -= ALL_FROM_TO_HOLIDAYS_policy;


                                            }
                                        }
                                       

                                    }


                                    Vacancieslimt = Limit;


                                    return new LimitSummResponcs()
                                    {
                                        AllVactions = allvacation_in_DB,
                                        Limit = Vacancieslimt.Value,
                                        YourVacancyRequest = Vacancy_days_requet
                                        //TotalSum = 0
                                    };

                                }
                            }
                        }

                        else if (policyRow.Duration == Duration.Monthly && policyRow.Sending == Sending.relay)
                        {
                            //Existanceinpolicy = true;
                            if (DateFromR.Ticks >= CurrentFinanicalYear_DateFrom.Ticks && DateFromR.Ticks <= CurrentFinanicalYear_DateTo.Ticks
                               && DatetoR.Ticks >= CurrentFinanicalYear_DateFrom.Ticks && DatetoR.Ticks <= CurrentFinanicalYear_DateTo.Ticks)
                            {
                                foreach (var balance in BalanceAccountListRow)
                                {
                                    DateTime Balance_DateEnd = balance.DateEnd.Value;
                                    DateTime Balance_DateBeginn = balance.DateBeginn.Value;


                                    #region Calculation the Relay for previous months


                                    if (Balance_DateBeginn.Ticks >= CurrentFinanicalYear_DateFrom.Ticks && Balance_DateBeginn.Ticks <= CurrentFinanicalYear_DateTo.Ticks
                                     && Balance_DateEnd.Ticks >= CurrentFinanicalYear_DateFrom.Ticks && Balance_DateEnd.Ticks <= CurrentFinanicalYear_DateTo.Ticks)
                                    {
                                        if (DateFromR.Ticks >= Balance_DateBeginn.Ticks && DateFromR.Ticks <= Balance_DateEnd.Ticks
                                           && DatetoR.Ticks >= Balance_DateBeginn.Ticks && DatetoR.Ticks <= Balance_DateEnd.Ticks)
                                        {
                                            foreach (var item in BalanceAccountListRow)
                                            {
                                                // relays for Previous months
                                                if (Balance_DateBeginn.Ticks > item.DateBeginn.Value.Ticks && Balance_DateEnd.Ticks > item.DateEnd.Value.Ticks)
                                                {
                                                    var DateBeginn = item.DateBeginn.Value;
                                                    var DateEnd = item.DateEnd.Value;
                                                    double AllVacancy_During_Balance = 0;
                                                    DateTime DateFrom_month = new DateTime();

                                                    //DateTime DateFrom_relay = new DateTime();
                                                    //DateTime DateTo_relay = new DateTime();

                                                    foreach (var vacancy in vacancies)
                                                    {
                                                        var DateFrom = vacancy.DateFrom.Value;
                                                        var Dateto = vacancy.Dateto.Value;
                                                        //DateFrom_relay = DateFrom;
                                                        //DateTo_relay = Dateto;
                                                        var DateFromVacancy = vacancy.DateFrom.Value;
                                                        var DatetoVacancy = vacancy.Dateto.Value;

                                                        if (DateFrom.Ticks >= DateBeginn.Ticks && DateFrom.Ticks <= DateEnd.Ticks
                                                            && Dateto.Ticks >= DateBeginn.Ticks && Dateto.Ticks <= DateEnd.Ticks)
                                                        {


                                                            AllVacancy_During_Balance += CalculateYourVacancies_days(DatetoVacancy, DateFromVacancy);
                                                            DateFrom_month = DateFromVacancy;
                                                            if (AllVacancy_During_Balance <= 0)
                                                            {
                                                                AllVacancy_During_Balance = 0;
                                                            }
                                                            else
                                                            {
                                                                //Reset
                                                                if (ALL_FROM_TO_HOLIDAYS_policy != 0)
                                                                {
                                                                    ALL_FROM_TO_HOLIDAYS_policy = 0;
                                                                }
                                                               
                                                                    OfficialHoldays(OfficialHolidaysRow, DateFromVacancy, DatetoVacancy, ref ALL_FROM_TO_HOLIDAYS_policy, UserReligion.Value);

                                                                    AllVacancy_During_Balance -= ALL_FROM_TO_HOLIDAYS_policy;

                                                                
                                                            }

                                                        }
                                                       



                                                    }

                                                    Vacations_during_financial.Add(DateFrom_month, AllVacancy_During_Balance);

                                                }
                                            }

                                        }


                                    }

                                    #endregion


                                    if (DateFromR.Ticks >= Balance_DateBeginn.Ticks && DateFromR.Ticks <= Balance_DateEnd.Ticks
                                    && DatetoR.Ticks >= Balance_DateBeginn.Ticks && DatetoR.Ticks <= Balance_DateEnd.Ticks)
                                    {
                                        var FromYears = policyRow.FromYears;
                                        var ToYears = policyRow.ToYears;


                                        Vacancieslimt = Limit;
                                        foreach (KeyValuePair<DateTime, double> item in Vacations_during_financial)
                                        {
                                            double? RemaindDays = Vacancieslimt - item.Value;
                                            VacanciesLimit_after_relay += RemaindDays;
                                        }
                                        //request.Entity.LimitNotRelay = (short)Vacancieslimt;
                                        //ViewBag.Dates = AllRelayVac;

                                        foreach (var vacancy in vacancies)
                                        {
                                            var DateFrom = vacancy.DateFrom.Value;
                                            var Dateto = vacancy.Dateto.Value;

                                            //Calculation Relay vacation
                                            if (DateFrom.Ticks >= CurrentFinanicalYear_DateFrom.Ticks && DateFrom.Ticks <= CurrentFinanicalYear_DateTo.Ticks
                                            && Dateto.Ticks >= CurrentFinanicalYear_DateFrom.Ticks && Dateto.Ticks <= CurrentFinanicalYear_DateTo.Ticks)
                                            {
                                                var DateFromVacancy = vacancy.DateFrom.Value;
                                                var DatetoVacancy = vacancy.Dateto.Value;

                                                //Check if Date from and to that in db  inside balance. for calculation Summation of Leaving
                                                if (DateFrom.Ticks >= Balance_DateBeginn.Ticks && DateFrom.Ticks <= Balance_DateEnd.Ticks
                                                    && Dateto.Ticks >= Balance_DateBeginn.Ticks && Dateto.Ticks <= Balance_DateEnd.Ticks)
                                                {


                                                    allvacation_in_DB += CalculateYourVacancies_days(DatetoVacancy, DateFromVacancy);
                                                    //if Leav taken are Negative
                                                    if (allvacation_in_DB <= 0)
                                                    {
                                                        allvacation_in_DB = 0;
                                                    }

                                                    else
                                                    {
                                                        //Reset
                                                        if (ALL_FROM_TO_HOLIDAYS_policy != 0)
                                                        {
                                                            ALL_FROM_TO_HOLIDAYS_policy = 0;
                                                        }
                                                        OfficialHoldays(OfficialHolidaysRow, DateFromVacancy, DatetoVacancy, ref ALL_FROM_TO_HOLIDAYS_policy, UserReligion.Value);

                                                        allvacation_in_DB -= ALL_FROM_TO_HOLIDAYS_policy;


                                                    }
                                                }
                                              


                                            }
                                        }

                                    }
                                }
                            }
                            return new LimitSummResponcs()
                            {
                                AllVactions = allvacation_in_DB,
                                Limit = Vacancieslimt.Value,
                                TotalSum = VacanciesLimit_after_relay.Value + Vacancieslimt.Value,
                                YourVacancyRequest = Vacancy_days_requet
                            };
                        }

                    }


                    else if (policyRow.Duration == Duration.yearly && policyRow.Sending == Sending.Norelay) // Annual Or Casual الاجازات اللي بتنتهي مع نهاية السنه
                    {
                        var FromYears = policyRow.FromYears;
                        var ToYears = policyRow.ToYears;

                        if (Years_of_work > FromYears && Years_of_work < ToYears)
                        {
                            //Existanceinpolicy = true;
                            Vacancieslimt = policyRow.Limit;
                            foreach (var item in vacancies)
                            {
                                var DateFromVacancy = item.DateFrom.Value;
                                var DatetoVacancy = item.Dateto.Value;

                                if (DateFromVacancy.Ticks >= CurrentFinanicalYear_DateFrom.Ticks && DateFromVacancy.Ticks <= CurrentFinanicalYear_DateTo.Ticks
                                   && DatetoVacancy.Ticks >= CurrentFinanicalYear_DateFrom.Ticks && DatetoVacancy.Ticks <= CurrentFinanicalYear_DateTo.Ticks)
                                {
                                    allvacation_in_DB += CalculateYourVacancies_days(DatetoVacancy, DateFromVacancy);
                                    //if Leav taken are Negative
                                    if (allvacation_in_DB <= 0)
                                    {
                                        allvacation_in_DB = 0;
                                    }

                                    else
                                    {
                                        //Reset
                                        if (ALL_FROM_TO_HOLIDAYS_policy != 0)
                                        {
                                            ALL_FROM_TO_HOLIDAYS_policy = 0;
                                        }
                                        OfficialHoldays(OfficialHolidaysRow, DateFromVacancy, DatetoVacancy, ref ALL_FROM_TO_HOLIDAYS_policy, UserReligion.Value);

                                        allvacation_in_DB -= ALL_FROM_TO_HOLIDAYS_policy;


                                    }

                                }


                            }

                            return new LimitSummResponcs()
                            {
                                AllVactions = allvacation_in_DB,
                                Limit = Vacancieslimt.Value,
                                YourVacancyRequest = Vacancy_days_requet
                                //TotalSum = 0
                            };
                        }



                    }

                    else if (policyRow.Duration == Duration.Monthly && policyRow.Sending == Sending.Norelay)
                    {

                        foreach (var balance in BalanceAccountListRow)
                        {
                            DateTime DateEnd = balance.DateEnd.Value;
                            DateTime DateBeginn = balance.DateBeginn.Value;

                            //Check if datefrom and dateto in balance
                            //Check 3la kol el vacancies date 2lly mogodin fi el balanca 34an a3rf el limit 2lly fi el db


                            if (DateFromR.Ticks >= DateBeginn.Ticks && DateFromR.Ticks <= DateEnd.Ticks
                                && DatetoR.Ticks >= DateBeginn.Ticks && DatetoR.Ticks <= DateEnd.Ticks)
                            {
                                foreach (var vacancy in vacancies)
                                {
                                    var DateFromVacancy = vacancy.DateFrom.Value;
                                    var DatetoVacancy = vacancy.Dateto.Value;
                                    //Check if Date from and to that in db  inside balance. for calculation Summation of Leaving
                                    if (DateFromVacancy.Ticks >= DateBeginn.Ticks && DateFromVacancy.Ticks <= DateEnd.Ticks
                                        && DatetoVacancy.Ticks >= DateBeginn.Ticks && DatetoVacancy.Ticks <= DateEnd.Ticks)
                                    {
                                        allvacation_in_DB += CalculateYourVacancies_days(DatetoVacancy, DateFromVacancy);
                                        //if Leav taken are Negative
                                        if (allvacation_in_DB <= 0)
                                        {
                                            allvacation_in_DB = 0;
                                        }

                                        else
                                        {
                                            //Reset
                                            if (ALL_FROM_TO_HOLIDAYS_policy != 0)
                                            {
                                                ALL_FROM_TO_HOLIDAYS_policy = 0;
                                            }
                                            OfficialHoldays(OfficialHolidaysRow, DateFromVacancy, DatetoVacancy, ref ALL_FROM_TO_HOLIDAYS_policy, UserReligion.Value);

                                            allvacation_in_DB -= ALL_FROM_TO_HOLIDAYS_policy;


                                        }
                                    }

                                    
                                }
                                var FromYears = policyRow.FromYears;
                                var ToYears = policyRow.ToYears;

                                if (Years_of_work >= FromYears && Years_of_work <= ToYears) //Check if Hire date inside range
                                {
                                    //Existanceinpolicy = true;
                                    Vacancieslimt = policyRow.Limit;
                                }

                                return new LimitSummResponcs()
                                {
                                    AllVactions = allvacation_in_DB,
                                    Limit = Vacancieslimt.Value,
                                    YourVacancyRequest = Vacancy_days_requet
                                    //TotalSum = 0
                                };

                            }
                        }
                    }

                    else if (policyRow.Duration == Duration.Monthly && policyRow.Sending == Sending.relay)
                    {

                        if (DateFromR.Ticks >= CurrentFinanicalYear_DateFrom.Ticks && DateFromR.Ticks <= CurrentFinanicalYear_DateTo.Ticks
                           && DatetoR.Ticks >= CurrentFinanicalYear_DateFrom.Ticks && DatetoR.Ticks <= CurrentFinanicalYear_DateTo.Ticks)
                        {
                            foreach (var balance in BalanceAccountListRow)
                            {
                                DateTime Balance_DateEnd = balance.DateEnd.Value;
                                DateTime Balance_DateBeginn = balance.DateBeginn.Value;


                                #region Calculation the Relay for previous months


                                if (Balance_DateBeginn.Ticks >= CurrentFinanicalYear_DateFrom.Ticks && Balance_DateBeginn.Ticks <= CurrentFinanicalYear_DateTo.Ticks
                                 && Balance_DateEnd.Ticks >= CurrentFinanicalYear_DateFrom.Ticks && Balance_DateEnd.Ticks <= CurrentFinanicalYear_DateTo.Ticks)
                                {
                                    if (DateFromR.Ticks >= Balance_DateBeginn.Ticks && DateFromR.Ticks <= Balance_DateEnd.Ticks
                                       && DatetoR.Ticks >= Balance_DateBeginn.Ticks && DatetoR.Ticks <= Balance_DateEnd.Ticks)
                                    {
                                        foreach (var item in BalanceAccountListRow)
                                        {
                                            // relays for Previous months
                                            if (Balance_DateBeginn.Ticks > item.DateBeginn.Value.Ticks && Balance_DateEnd.Ticks > item.DateEnd.Value.Ticks)
                                            {
                                                var DateBeginn = item.DateBeginn.Value;
                                                var DateEnd = item.DateEnd.Value;
                                                double AllVacancy_During_Balance = 0;
                                                DateTime DateFrom_month = new DateTime();

                                                DateTime DateFrom_relay = new DateTime();
                                                DateTime DateTo_relay = new DateTime();

                                                foreach (var vacancy in vacancies)
                                                {
                                                    var DateFromVacancy = vacancy.DateFrom.Value;
                                                    var DatetoVacancy = vacancy.Dateto.Value;
                                                    DateFrom_relay = DateFromVacancy;
                                                    DateTo_relay = DatetoVacancy;

                                                    if (DateFromVacancy.Ticks >= DateBeginn.Ticks && DateFromVacancy.Ticks <= DateEnd.Ticks
                                                        && DatetoVacancy.Ticks >= DateBeginn.Ticks && DatetoVacancy.Ticks <= DateEnd.Ticks)
                                                    {


                                                        AllVacancy_During_Balance += CalculateYourVacancies_days(DatetoVacancy, DateFromVacancy);

                                                        DateFrom_month = DateFromVacancy;
                                                        //AllVacancy_During_Balance += CalculateYourVacancies_days(Dateto, DateFrom);
                                                        if (AllVacancy_During_Balance <= 0)
                                                        {
                                                            AllVacancy_During_Balance = 0;
                                                        }
                                                        else
                                                        {
                                                            //Reset
                                                            if (ALL_FROM_TO_HOLIDAYS_policy != 0)
                                                            {
                                                                ALL_FROM_TO_HOLIDAYS_policy = 0;
                                                            }

                                                            OfficialHoldays(OfficialHolidaysRow, DateFromVacancy, DatetoVacancy, ref ALL_FROM_TO_HOLIDAYS_policy, UserReligion.Value);

                                                            AllVacancy_During_Balance -= ALL_FROM_TO_HOLIDAYS_policy;

                                                        }



                                                    }




                                                }

                                                Vacations_during_financial.Add(DateFrom_month, AllVacancy_During_Balance);

                                            }
                                        }

                                    }


                                }

                                #endregion


                                if (DateFromR.Ticks >= Balance_DateBeginn.Ticks && DateFromR.Ticks <= Balance_DateEnd.Ticks
                                && DatetoR.Ticks >= Balance_DateBeginn.Ticks && DatetoR.Ticks <= Balance_DateEnd.Ticks)
                                {
                                    var FromYears = policyRow.FromYears;
                                    var ToYears = policyRow.ToYears;
                                    if (Years_of_work >= FromYears && Years_of_work <= ToYears) //Check if Hire date inside range
                                    {
                                        //Existanceinpolicy = true;
                                        Vacancieslimt = policyRow.Limit;
                                        foreach (KeyValuePair<DateTime, double> item in Vacations_during_financial)
                                        {
                                            double? RemaindDays = Vacancieslimt - item.Value;
                                            VacanciesLimit_after_relay += RemaindDays;
                                        }
                                        //request.Entity.LimitNotRelay = (short)Vacancieslimt;
                                        //ViewBag.Dates = AllRelayVac;
                                    }
                                    foreach (var vacancy in vacancies)
                                    {
                                        var DateFrom = vacancy.DateFrom.Value;
                                        var Dateto = vacancy.Dateto.Value;

                                        //Calculation Relay vacation
                                        if (DateFrom.Ticks >= CurrentFinanicalYear_DateFrom.Ticks && DateFrom.Ticks <= CurrentFinanicalYear_DateTo.Ticks
                                        && Dateto.Ticks >= CurrentFinanicalYear_DateFrom.Ticks && Dateto.Ticks <= CurrentFinanicalYear_DateTo.Ticks)
                                        {
                                            var DateFromVacancy = vacancy.DateFrom.Value;
                                            var DatetoVacancy = vacancy.Dateto.Value;
                                            //Check if Date from and to that in db  inside balance. for calculation Summation of Leaving
                                            if (DateFrom.Ticks >= Balance_DateBeginn.Ticks && DateFrom.Ticks <= Balance_DateEnd.Ticks
                                                && Dateto.Ticks >= Balance_DateBeginn.Ticks && Dateto.Ticks <= Balance_DateEnd.Ticks)
                                            {

                                                allvacation_in_DB += CalculateYourVacancies_days(DatetoVacancy, DateFromVacancy);


                                                //if Leav taken are Negative
                                                if (allvacation_in_DB <= 0)
                                                {
                                                    allvacation_in_DB = 0;
                                                }

                                                else
                                                {
                                                    //Reset
                                                    if (ALL_FROM_TO_HOLIDAYS_policy != 0)
                                                    {
                                                        ALL_FROM_TO_HOLIDAYS_policy = 0;
                                                    }
                                                    OfficialHoldays(OfficialHolidaysRow, DateFromVacancy, DatetoVacancy, ref ALL_FROM_TO_HOLIDAYS_policy, UserReligion.Value);

                                                    allvacation_in_DB -= ALL_FROM_TO_HOLIDAYS_policy;


                                                }

                                            }



                                        }
                                    }

                                }
                            }
                        }
                        return new LimitSummResponcs()
                        {
                            AllVactions = allvacation_in_DB,
                            Limit = Vacancieslimt.Value,
                            TotalSum = VacanciesLimit_after_relay.Value + Vacancieslimt.Value,
                            YourVacancyRequest = Vacancy_days_requet
                        };
                    }

                }
                // if not found in policy
                if (VacancyPolicyRow.Count == 0)
                {
                    foreach (var item in vacancies)
                    {
                        var DateFromVacancy = item.DateFrom.Value;
                        var DatetoVacancy = item.Dateto.Value;
                        OfficialHoldays(OfficialHolidaysRow, DateFromVacancy, DatetoVacancy, ref ALL_FROM_TO_HOLIDAYS_policy, UserReligion.Value);
                        allvacation_in_DB += CalculateYourVacancies_days(DatetoVacancy, DateFromVacancy);
                        if (allvacation_in_DB <= 0)
                        {
                            allvacation_in_DB = 0;
                        }

                        else
                        {
                            allvacation_in_DB -= ALL_FROM_TO_HOLIDAYS_policy;
                        }

                    }
                    return new LimitSummResponcs()
                    {
                        AllVactions = allvacation_in_DB,
                        Limit = Vacancieslimt.Value,
                        YourVacancyRequest = Vacancy_days_requet
                        //TotalSum = 0
                    };
                }
                #endregion

            }

            return new LimitSummResponcs()
            {
                AllVactions = 0,
                Limit = 0,
                TotalSum = 0,
                YourVacancyRequest = 0
            };

        }

        public class LimitSummResponcs : ServiceResponse
        {
            public double Limit;
            public double TotalSum;
            public double AllVactions;
            public double YourVacancyRequest;

        }


        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {

            #region Variables

            bool Existanceinpolicy = false;
            double ALL_FROM_TO_HOLIDAYS_policy = 0;
            double ALL_FROM_TO_HOLIDAYS = 0;
            
            int year = DateTime.Now.Year;
            var DateFromR = request.Entity.DateFrom;
            var DatetoR = request.Entity.Dateto;
            int UserID = int.Parse(Authorization.UserId);
            DateTime? HireDateNullabl = uow.Connection.TryById<UsersRow>(UserID).HireDate;
            DateTime HireDate = HireDateNullabl.Value;
            var Years_of_work = (decimal)CalculateHireDateYears(DateTime.Now, HireDate);
            double HireDatePerMonth = CalculateHireDateMonth(DateTime.Now, HireDate);
            Dictionary<DateTime, double> Vacations_during_financial = new Dictionary<DateTime, double>();
            double allvacation_in_DB = 0;
            var VacancyIdR = request.Entity.VacancyId;
            var FinancialyearRow = uow.Connection.List<FinancialyearRow>().FirstOrDefault(x => x.Status == true);
            List<VacancyRequestsRow> vacancies = uow.Connection.List<VacancyRequestsRow>().Where(x => x.UserId == UserID &&
                   x.IsAcceptedbyHr == AcceptedHREnum.Approved && x.VacancyId == VacancyIdR).ToList();
            var CurrentFinanicalYear_DateFrom = FinancialyearRow.DateFrom.Value;
            var CurrentFinanicalYear_DateTo = FinancialyearRow.DateTo.Value;
            if (FinancialyearRow == null)
            {
                throw new Exception("Please review your Financial Year");
            }
            var VacancyPolicyRow = uow.Connection.List<VacancyPolicyRow>().Where(x => x.VacancyId == VacancyIdR).ToList();
            double? Vacancieslimt = 0;
            var OfficialHolidaysRow = uow.Connection.List<OfficialHolidaysRow>().ToList();
            var UserReligion = uow.Connection.List<UserRow>().FirstOrDefault(x => x.UserId == UserID).Religion;

            double Vacancy_days_requet = 0;
            
            #endregion

            #region Vacancy_days_requet

            OfficialHoldays(OfficialHolidaysRow, DateFromR.Value, DatetoR.Value, ref ALL_FROM_TO_HOLIDAYS, UserReligion.Value);
            Vacancy_days_requet = CalculateYourVacancies_days(DatetoR.Value, DateFromR.Value);
            if (Vacancy_days_requet < ALL_FROM_TO_HOLIDAYS)
            {
                Vacancy_days_requet = 0;
            }

            else
            {
                Vacancy_days_requet -= ALL_FROM_TO_HOLIDAYS;
            }
            #endregion

            #region Automatic Assignment
            // zbt from to fi el aga  1/1/2020 1/1/2020
            request.Entity.StatusId = 3; // pending
            request.Entity.UserId = UserID;
            request.Entity.IsAcceptedbyHr = 0; // False
            request.Entity.Date = DateTime.Now;
            #endregion

            //w2f el loop lw el condion  mtl2a4 fi el policy
            //w2f el loop lw el condiotion matl2a4 fi el balance


            foreach (var policyRow in VacancyPolicyRow)
            {
                var BalanceAccountListRow = uow.Connection.List<BalanceAccountRow>().Where(x => x.User_ID == UserID).ToList();
                var UserVacanciesLimit_ifExistance = uow.Connection.List<UserVacanciesLimitRow>().Any(x => x.UserId == UserID && x.VacancyId == VacancyIdR);

                if (UserVacanciesLimit_ifExistance)
                {
                    Existanceinpolicy = true;
                    var UserVacanciesLimitRow = uow.Connection.List<UserVacanciesLimitRow>().FirstOrDefault(x => x.UserId == UserID && x.VacancyId == VacancyIdR);

                    var Limit = UserVacanciesLimitRow.Limit;

                    if (policyRow.Duration == Duration.yearly && policyRow.Sending == Sending.Norelay) // Annual Or Casual الاجازات اللي بتنتهي مع نهاية السنه
                    {
                        var FromYears = policyRow.FromYears;
                        var ToYears = policyRow.ToYears;

                        Existanceinpolicy = true;
                        Vacancieslimt = Limit;
                        foreach (var item in vacancies)
                        {
                            var DateFromVacancy = item.DateFrom.Value;
                            var DatetoVacancy = item.Dateto.Value;

                            if (DateFromVacancy.Ticks >= CurrentFinanicalYear_DateFrom.Ticks && DateFromVacancy.Ticks <= CurrentFinanicalYear_DateTo.Ticks
                               && DatetoVacancy.Ticks >= CurrentFinanicalYear_DateFrom.Ticks && DatetoVacancy.Ticks <= CurrentFinanicalYear_DateTo.Ticks)
                            {
                                allvacation_in_DB += CalculateYourVacancies_days(DatetoVacancy, DateFromVacancy);
                                //if Leav taken are Negative
                                if (allvacation_in_DB <= 0)
                                {
                                    allvacation_in_DB = 0;
                                }

                                else
                                {
                                    //Reset
                                    if (ALL_FROM_TO_HOLIDAYS_policy != 0)
                                    {
                                        ALL_FROM_TO_HOLIDAYS_policy = 0;
                                    }
                                    OfficialHoldays(OfficialHolidaysRow, DateFromVacancy, DatetoVacancy, ref ALL_FROM_TO_HOLIDAYS_policy, UserReligion.Value);

                                    allvacation_in_DB -= ALL_FROM_TO_HOLIDAYS_policy;


                                }
                            }

                            

                        }






                        if (Vacancieslimt != 0)
                        {
                            if (Vacancy_days_requet <= Vacancieslimt) //  10=<10
                            {
                                if ((allvacation_in_DB + Vacancy_days_requet) <= Vacancieslimt)   // 9 < 10
                                {
                                    return new MyRepository().Create(uow, request);
                                }
                                else if (allvacation_in_DB == 0 && (allvacation_in_DB + Vacancy_days_requet) <= Vacancieslimt)
                                {
                                    // 3l4an lw maa5d4 ay agaza fi elsana
                                    return new MyRepository().Create(uow, request);
                                }
                                else
                                {
                                    throw new Exception("You have exceeded the allowed limit");
                                }

                            }
                            else
                            {
                                throw new Exception("Your Casual Vacancy Request are more than Your limit");
                            }

                        }
                        else
                        {
                            throw new Exception("Please Enter Your CasualVacancy Limit");

                        }
                    }

                    else if (policyRow.Duration == Duration.Monthly && policyRow.Sending == Sending.Norelay)
                    {

                        foreach (var balance in BalanceAccountListRow)
                        {
                            DateTime DateEnd = balance.DateEnd.Value;
                            DateTime DateBeginn = balance.DateBeginn.Value;

                            //Check if datefrom and dateto in balance
                            //Check 3la kol el vacancies date 2lly mogodin fi el balanca 34an a3rf el limit 2lly fi el db


                            if (DateFromR.Value.Ticks >= DateBeginn.Ticks && DateFromR.Value.Ticks <= DateEnd.Ticks
                                && DatetoR.Value.Ticks >= DateBeginn.Ticks && DatetoR.Value.Ticks <= DateEnd.Ticks)
                            {
                                //List<VacancyRequestsRow> vacancies = uow.Connection.List<VacancyRequestsRow>().Where(x => x.UserId == UserID &&
                                //x.IsAcceptedbyHr == 1 && x.VacancyId == VacancyIdR).ToList();

                                foreach (var vacancy in vacancies)
                                {
                                    var DateFrom = vacancy.DateFrom.Value;
                                    var Dateto = vacancy.Dateto.Value;
                                    //Check if Date from and to that in db  inside balance. for calculation Summation of Leaving
                                    if (DateFrom.Ticks >= DateBeginn.Ticks && DateFrom.Ticks <= DateEnd.Ticks
                                        && Dateto.Ticks >= DateBeginn.Ticks && Dateto.Ticks <= DateEnd.Ticks)
                                    {
                                        var DateFromVacancy = vacancy.DateFrom.Value;
                                        var DatetoVacancy = vacancy.Dateto.Value;


                                        allvacation_in_DB += CalculateYourVacancies_days(Dateto, DateFrom);
                                        //if Leav taken are Negative
                                        if (allvacation_in_DB <= 0)
                                        {
                                            allvacation_in_DB = 0;
                                        }

                                        else
                                        {
                                            //Reset
                                            if (ALL_FROM_TO_HOLIDAYS_policy != 0)
                                            {
                                                ALL_FROM_TO_HOLIDAYS_policy = 0;
                                            }
                                            OfficialHoldays(OfficialHolidaysRow, DateFrom, Dateto, ref ALL_FROM_TO_HOLIDAYS_policy, UserReligion.Value);

                                            allvacation_in_DB -= ALL_FROM_TO_HOLIDAYS_policy;


                                        }

                                    }



                                }
                                var FromYears = policyRow.FromYears;
                                var ToYears = policyRow.ToYears;


                                Existanceinpolicy = true;
                                Vacancieslimt = Limit;




                                if (Vacancieslimt != null)
                                {
                                    if (Vacancy_days_requet <= Vacancieslimt) //  10=<10
                                    {

                                        if ((allvacation_in_DB + Vacancy_days_requet) <= Vacancieslimt)   // 9 < 10
                                        {
                                            return new MyRepository().Create(uow, request);
                                        }
                                        else if (allvacation_in_DB == 0 && (allvacation_in_DB + Vacancy_days_requet) <= Vacancieslimt)
                                        {
                                            // 3l4an lw maa5d4 ay agaza fi elsana
                                            return new MyRepository().Create(uow, request);
                                        }
                                        else
                                        {
                                            throw new Exception("You have exceeded the limit for the current month");
                                        }
                                    }
                                    else
                                    {
                                        throw new Exception("Your Regularvacation Leave Request are more than Your limit");
                                    }
                                }
                                else
                                {
                                    throw new Exception("Please Enter your Regularvacation Limit");
                                }
                            }
                        }
                    }

                    else if (policyRow.Duration == Duration.Monthly && policyRow.Sending == Sending.relay)
                    {

                        if (DateFromR.Value.Ticks >= CurrentFinanicalYear_DateFrom.Ticks && DateFromR.Value.Ticks <= CurrentFinanicalYear_DateTo.Ticks
                           && DatetoR.Value.Ticks >= CurrentFinanicalYear_DateFrom.Ticks && DatetoR.Value.Ticks <= CurrentFinanicalYear_DateTo.Ticks)
                        {
                            foreach (var balance in BalanceAccountListRow)
                            {
                                DateTime Balance_DateEnd = balance.DateEnd.Value;
                                DateTime Balance_DateBeginn = balance.DateBeginn.Value;


                                #region Calculation the Relay for previous months


                                if (Balance_DateBeginn.Ticks >= CurrentFinanicalYear_DateFrom.Ticks && Balance_DateBeginn.Ticks <= CurrentFinanicalYear_DateTo.Ticks
                                 && Balance_DateEnd.Ticks >= CurrentFinanicalYear_DateFrom.Ticks && Balance_DateEnd.Ticks <= CurrentFinanicalYear_DateTo.Ticks)
                                {
                                    if (DateFromR.Value.Ticks >= Balance_DateBeginn.Ticks && DateFromR.Value.Ticks <= Balance_DateEnd.Ticks
                                       && DatetoR.Value.Ticks >= Balance_DateBeginn.Ticks && DatetoR.Value.Ticks <= Balance_DateEnd.Ticks)
                                    {
                                        foreach (var item in BalanceAccountListRow)
                                        {
                                            // relays for Previous months
                                            if (Balance_DateBeginn.Ticks > item.DateBeginn.Value.Ticks && Balance_DateEnd.Ticks > item.DateEnd.Value.Ticks)
                                            {
                                                var DateBeginn = item.DateBeginn.Value;
                                                var DateEnd = item.DateEnd.Value;
                                                double AllVacancy_During_Balance = 0;
                                                DateTime DateFrom_month = new DateTime();

                                                DateTime DateFrom_relay = new DateTime();
                                                DateTime DateTo_relay = new DateTime();

                                                foreach (var vacancy in vacancies)
                                                {
                                                    var DateFrom = vacancy.DateFrom.Value;
                                                    var Dateto = vacancy.Dateto.Value;
                                                    DateFrom_relay = DateFrom;
                                                    DateTo_relay = Dateto;

                                                    if (DateFrom.Ticks >= DateBeginn.Ticks && DateFrom.Ticks <= DateEnd.Ticks
                                                        && Dateto.Ticks >= DateBeginn.Ticks && Dateto.Ticks <= DateEnd.Ticks)
                                                    {
                                                        var DateFromVacancy = vacancy.DateFrom.Value;
                                                        var DatetoVacancy = vacancy.Dateto.Value;

                                                        AllVacancy_During_Balance += CalculateYourVacancies_days(DatetoVacancy, DateFromVacancy);
                                                        DateFrom_month = DateFromVacancy;
                                                        if (AllVacancy_During_Balance <= 0)
                                                        {
                                                            AllVacancy_During_Balance = 0;
                                                        }
                                                        else
                                                        {
                                                            //Reset
                                                            if (ALL_FROM_TO_HOLIDAYS_policy != 0)
                                                            {
                                                                ALL_FROM_TO_HOLIDAYS_policy = 0;
                                                            }
                                                           
                                                                OfficialHoldays(OfficialHolidaysRow, DateFrom, Dateto, ref ALL_FROM_TO_HOLIDAYS_policy, UserReligion.Value);

                                                                AllVacancy_During_Balance -= ALL_FROM_TO_HOLIDAYS_policy;

                                                        }

                                                    }


                                                }

                                                Vacations_during_financial.Add(DateFrom_month, AllVacancy_During_Balance);

                                            }
                                        }

                                    }


                                }

                                #endregion


                                if (DateFromR.Value.Ticks >= Balance_DateBeginn.Ticks && DateFromR.Value.Ticks <= Balance_DateEnd.Ticks
                                && DatetoR.Value.Ticks >= Balance_DateBeginn.Ticks && DatetoR.Value.Ticks <= Balance_DateEnd.Ticks)
                                {
                                    var FromYears = policyRow.FromYears;
                                    var ToYears = policyRow.ToYears;

                                    Existanceinpolicy = true;
                                    Vacancieslimt = Limit;
                                    foreach (KeyValuePair<DateTime, double> item in Vacations_during_financial)
                                    {
                                        double? RemaindDays = Vacancieslimt - item.Value;
                                        Vacancieslimt += RemaindDays;
                                    }
                                    //request.Entity.LimitNotRelay = (short)Vacancieslimt;
                                    //ViewBag.Dates = AllRelayVac;

                                    foreach (var vacancy in vacancies)
                                    {
                                        var DateFrom = vacancy.DateFrom.Value;
                                        var Dateto = vacancy.Dateto.Value;

                                        //Calculation Relay vacation
                                        if (DateFrom.Ticks >= CurrentFinanicalYear_DateFrom.Ticks && DateFrom.Ticks <= CurrentFinanicalYear_DateTo.Ticks
                                        && Dateto.Ticks >= CurrentFinanicalYear_DateFrom.Ticks && Dateto.Ticks <= CurrentFinanicalYear_DateTo.Ticks)
                                        {
                                            //Check if Date from and to that in db  inside balance. for calculation Summation of Leaving
                                            if (DateFrom.Ticks >= Balance_DateBeginn.Ticks && DateFrom.Ticks <= Balance_DateEnd.Ticks
                                                && Dateto.Ticks >= Balance_DateBeginn.Ticks && Dateto.Ticks <= Balance_DateEnd.Ticks)
                                            {
                                                allvacation_in_DB += CalculateYourVacancies_days(Dateto,DateFrom);
                                                //if Leav taken are Negative
                                                if (allvacation_in_DB <= 0)
                                                {
                                                    allvacation_in_DB = 0;
                                                }

                                                else
                                                {
                                                    //Reset
                                                    if (ALL_FROM_TO_HOLIDAYS_policy != 0)
                                                    {
                                                        ALL_FROM_TO_HOLIDAYS_policy = 0;
                                                    }
                                                    OfficialHoldays(OfficialHolidaysRow, DateFrom, Dateto, ref ALL_FROM_TO_HOLIDAYS_policy, UserReligion.Value);

                                                    allvacation_in_DB -= ALL_FROM_TO_HOLIDAYS_policy;


                                                }

                                            }
                                           

                                        }
                                    }


                                    if (Vacancieslimt != null)
                                    {
                                        if (Vacancy_days_requet <= Vacancieslimt) //  10=<10
                                        {
                                            if ((allvacation_in_DB + Vacancy_days_requet) <= Vacancieslimt)   // 9 < 10
                                            {
                                                return new MyRepository().Create(uow, request);
                                            }
                                            else if (allvacation_in_DB == 0 && (allvacation_in_DB + Vacancy_days_requet) <= Vacancieslimt)
                                            {
                                                // 3l4an lw maa5d4 ay agaza fi elsana
                                                return new MyRepository().Create(uow, request);
                                            }
                                            else
                                            {
                                                throw new Exception("You have exceeded the limit for the current month");
                                            }
                                        }
                                        else
                                        {
                                            throw new Exception("Your Regularvacation Leave Request are more than Your limit");
                                        }
                                    }
                                    else
                                    {
                                        throw new Exception("Please Enter your Regularvacation Limit");
                                    }
                                }
                            }
                        }
                    }

                }

                else if (policyRow.Duration == Duration.yearly && policyRow.Sending == Sending.Norelay) // Annual Or Casual الاجازات اللي بتنتهي مع نهاية السنه
                {
                    var FromYears = policyRow.FromYears;
                    var ToYears = policyRow.ToYears;

                    if (Years_of_work > FromYears && Years_of_work < ToYears)
                    {
                        Existanceinpolicy = true;
                        Vacancieslimt = policyRow.Limit;
                        foreach (var item in vacancies)
                        {
                            var DateFromVacancy = item.DateFrom.Value;
                            var DatetoVacancy = item.Dateto.Value;

                            if (DateFromVacancy.Ticks >= CurrentFinanicalYear_DateFrom.Ticks && DateFromVacancy.Ticks <= CurrentFinanicalYear_DateTo.Ticks
                               && DatetoVacancy.Ticks >= CurrentFinanicalYear_DateFrom.Ticks && DatetoVacancy.Ticks <= CurrentFinanicalYear_DateTo.Ticks)
                            {
                                allvacation_in_DB += CalculateYourVacancies_days(DatetoVacancy, DateFromVacancy);
                                //if Leav taken are Negative
                                if (allvacation_in_DB <= 0)
                                {
                                    allvacation_in_DB = 0;
                                }

                                else
                                {
                                    //Reset
                                    if (ALL_FROM_TO_HOLIDAYS_policy != 0)
                                    {
                                        ALL_FROM_TO_HOLIDAYS_policy = 0;
                                    }
                                    OfficialHoldays(OfficialHolidaysRow, DateFromVacancy, DatetoVacancy, ref ALL_FROM_TO_HOLIDAYS_policy, UserReligion.Value);

                                    allvacation_in_DB -= ALL_FROM_TO_HOLIDAYS_policy;


                                }

                            }
                            


                        }


                        if (Vacancieslimt != 0)
                        {
                            if (Vacancy_days_requet <= Vacancieslimt) //  10=<10
                            {
                                if ((allvacation_in_DB + Vacancy_days_requet) <= Vacancieslimt)   // 9 < 10
                                {
                                    return new MyRepository().Create(uow, request);
                                }
                                else if (allvacation_in_DB == 0 && (allvacation_in_DB + Vacancy_days_requet) <= Vacancieslimt)
                                {
                                    // 3l4an lw maa5d4 ay agaza fi elsana
                                    return new MyRepository().Create(uow, request);
                                }
                                else
                                {
                                    throw new Exception("You have exceeded the allowed limit");
                                }

                            }
                            else
                            {
                                throw new Exception("Your Casual Vacancy Request are more than Your limit");
                            }

                        }
                        else
                        {
                            throw new Exception("Please Enter Your CasualVacancy Limit");

                        }
                    }



                }

                else if (policyRow.Duration == Duration.Monthly && policyRow.Sending == Sending.Norelay)
                {

                    foreach (var balance in BalanceAccountListRow)
                    {
                        DateTime DateEnd = balance.DateEnd.Value;
                        DateTime DateBeginn = balance.DateBeginn.Value;

                        //Check if datefrom and dateto in balance
                        //Check 3la kol el vacancies date 2lly mogodin fi el balanca 34an a3rf el limit 2lly fi el db


                        if (DateFromR.Value.Ticks >= DateBeginn.Ticks && DateFromR.Value.Ticks <= DateEnd.Ticks
                            && DatetoR.Value.Ticks >= DateBeginn.Ticks && DatetoR.Value.Ticks <= DateEnd.Ticks)
                        {
                            //List<VacancyRequestsRow> vacancies = uow.Connection.List<VacancyRequestsRow>().Where(x => x.UserId == UserID &&
                            //x.IsAcceptedbyHr == 1 && x.VacancyId == VacancyIdR).ToList();

                            foreach (var vacancy in vacancies)
                            {
                                var DateFrom = vacancy.DateFrom.Value;
                                var Dateto = vacancy.Dateto.Value;
                                //Check if Date from and to that in db  inside balance. for calculation Summation of Leaving
                                if (DateFrom.Ticks >= DateBeginn.Ticks && DateFrom.Ticks <= DateEnd.Ticks
                                    && Dateto.Ticks >= DateBeginn.Ticks && Dateto.Ticks <= DateEnd.Ticks)
                                {
                                    allvacation_in_DB += CalculateYourVacancies_days(vacancy.Dateto.Value, vacancy.DateFrom.Value);

                                    //if Leav taken are Negative
                                    if (allvacation_in_DB <= 0)
                                    {
                                        allvacation_in_DB = 0;
                                    }

                                    else
                                    {
                                        //Reset
                                        if (ALL_FROM_TO_HOLIDAYS_policy != 0)
                                        {
                                            ALL_FROM_TO_HOLIDAYS_policy = 0;
                                        }
                                        OfficialHoldays(OfficialHolidaysRow, DateFrom, Dateto, ref ALL_FROM_TO_HOLIDAYS_policy, UserReligion.Value);

                                        allvacation_in_DB -= ALL_FROM_TO_HOLIDAYS_policy;


                                    }
                                }
                                


                            }
                            var FromYears = policyRow.FromYears;
                            var ToYears = policyRow.ToYears;

                            if (Years_of_work >= FromYears && Years_of_work <= ToYears) //Check if Hire date inside range
                            {
                                Existanceinpolicy = true;
                                Vacancieslimt = policyRow.Limit;
                            }


                            if (Vacancieslimt != null)
                            {
                                if (Vacancy_days_requet <= Vacancieslimt) //  10=<10
                                {

                                    if ((allvacation_in_DB + Vacancy_days_requet) <= Vacancieslimt)   // 9 < 10
                                    {
                                        return new MyRepository().Create(uow, request);
                                    }
                                    else if (allvacation_in_DB == 0 && (allvacation_in_DB + Vacancy_days_requet) <= Vacancieslimt)
                                    {
                                        // 3l4an lw maa5d4 ay agaza fi elsana
                                        return new MyRepository().Create(uow, request);
                                    }
                                    else
                                    {
                                        throw new Exception("You have exceeded the limit for the current month");
                                    }
                                }
                                else
                                {
                                    throw new Exception("Your Regularvacation Leave Request are more than Your limit");
                                }
                            }
                            else
                            {
                                throw new Exception("Please Enter your Regularvacation Limit");
                            }
                        }
                    }
                }

                else if (policyRow.Duration == Duration.Monthly && policyRow.Sending == Sending.relay)
                {

                    if (DateFromR.Value.Ticks >= CurrentFinanicalYear_DateFrom.Ticks && DateFromR.Value.Ticks <= CurrentFinanicalYear_DateTo.Ticks
                       && DatetoR.Value.Ticks >= CurrentFinanicalYear_DateFrom.Ticks && DatetoR.Value.Ticks <= CurrentFinanicalYear_DateTo.Ticks)
                    {
                        foreach (var balance in BalanceAccountListRow)
                        {
                            DateTime Balance_DateEnd = balance.DateEnd.Value;
                            DateTime Balance_DateBeginn = balance.DateBeginn.Value;


                            #region Calculation the Relay for previous months


                            if (Balance_DateBeginn.Ticks >= CurrentFinanicalYear_DateFrom.Ticks && Balance_DateBeginn.Ticks <= CurrentFinanicalYear_DateTo.Ticks
                             && Balance_DateEnd.Ticks >= CurrentFinanicalYear_DateFrom.Ticks && Balance_DateEnd.Ticks <= CurrentFinanicalYear_DateTo.Ticks)
                            {
                                if (DateFromR.Value.Ticks >= Balance_DateBeginn.Ticks && DateFromR.Value.Ticks <= Balance_DateEnd.Ticks
                                   && DatetoR.Value.Ticks >= Balance_DateBeginn.Ticks && DatetoR.Value.Ticks <= Balance_DateEnd.Ticks)
                                {
                                    foreach (var item in BalanceAccountListRow)
                                    {
                                        // relays for Previous months
                                        if (Balance_DateBeginn.Ticks > item.DateBeginn.Value.Ticks && Balance_DateEnd.Ticks > item.DateEnd.Value.Ticks)
                                        {
                                            var DateBeginn = item.DateBeginn.Value;
                                            var DateEnd = item.DateEnd.Value;
                                            double AllVacancy_During_Balance = 0;
                                            DateTime DateFrom_month = new DateTime();

                                            DateTime DateFrom_relay = new DateTime();
                                            DateTime DateTo_relay = new DateTime();

                                            foreach (var vacancy in vacancies)
                                            {
                                                var DateFrom = vacancy.DateFrom.Value;
                                                var Dateto = vacancy.Dateto.Value;
                                                DateFrom_relay = DateFrom;
                                                DateTo_relay = Dateto;

                                                if (DateFrom.Ticks >= DateBeginn.Ticks && DateFrom.Ticks <= DateEnd.Ticks
                                                    && Dateto.Ticks >= DateBeginn.Ticks && Dateto.Ticks <= DateEnd.Ticks)
                                                {

                                                    AllVacancy_During_Balance += CalculateYourVacancies_days(Dateto, DateFrom);
                                                    DateFrom_month = DateFrom;
                                                    if (AllVacancy_During_Balance <= 0)
                                                    {
                                                        AllVacancy_During_Balance = 0;
                                                    }
                                                    else
                                                    {
                                                        //Reset
                                                        if (ALL_FROM_TO_HOLIDAYS_policy != 0)
                                                        {
                                                            ALL_FROM_TO_HOLIDAYS_policy = 0;
                                                        }
                                                        
                                                            OfficialHoldays(OfficialHolidaysRow, DateFrom, Dateto, ref ALL_FROM_TO_HOLIDAYS_policy, UserReligion.Value);

                                                            AllVacancy_During_Balance -= ALL_FROM_TO_HOLIDAYS_policy;

                                                        
                                                    }

                                                }

                                            }

                                            Vacations_during_financial.Add(DateFrom_month, AllVacancy_During_Balance);

                                        }
                                    }

                                }


                            }

                            #endregion


                            if (DateFromR.Value.Ticks >= Balance_DateBeginn.Ticks && DateFromR.Value.Ticks <= Balance_DateEnd.Ticks
                            && DatetoR.Value.Ticks >= Balance_DateBeginn.Ticks && DatetoR.Value.Ticks <= Balance_DateEnd.Ticks)
                            {
                                var FromYears = policyRow.FromYears;
                                var ToYears = policyRow.ToYears;
                                if (Years_of_work >= FromYears && Years_of_work <= ToYears) //Check if Hire date inside range
                                {
                                    Existanceinpolicy = true;
                                    Vacancieslimt = policyRow.Limit;
                                    foreach (KeyValuePair<DateTime, double> item in Vacations_during_financial)
                                    {
                                        double? RemaindDays = Vacancieslimt - item.Value;
                                        Vacancieslimt += RemaindDays;
                                    }
                                    //request.Entity.LimitNotRelay = (short)Vacancieslimt;
                                    //ViewBag.Dates = AllRelayVac;
                                }
                                foreach (var vacancy in vacancies)
                                {
                                    var DateFromVacancy = vacancy.DateFrom.Value;
                                    var DatetoVacancy = vacancy.Dateto.Value;

                                    //Calculation Relay vacation
                                    if (DateFromVacancy.Ticks >= CurrentFinanicalYear_DateFrom.Ticks && DateFromVacancy.Ticks <= CurrentFinanicalYear_DateTo.Ticks
                                    && DatetoVacancy.Ticks >= CurrentFinanicalYear_DateFrom.Ticks && DatetoVacancy.Ticks <= CurrentFinanicalYear_DateTo.Ticks)
                                    {
                                        //Check if Date from and to that in db  inside balance. for calculation Summation of Leaving
                                        if (DateFromVacancy.Ticks >= Balance_DateBeginn.Ticks && DateFromVacancy.Ticks <= Balance_DateEnd.Ticks
                                            && DatetoVacancy.Ticks >= Balance_DateBeginn.Ticks && DatetoVacancy.Ticks <= Balance_DateEnd.Ticks)
                                        {
                                            allvacation_in_DB += CalculateYourVacancies_days(vacancy.Dateto.Value, vacancy.DateFrom.Value);
                                            //if Leav taken are Negative
                                            if (allvacation_in_DB <= 0)
                                            {
                                                allvacation_in_DB = 0;
                                            }

                                            else
                                            {
                                                //Reset
                                                if (ALL_FROM_TO_HOLIDAYS_policy != 0)
                                                {
                                                    ALL_FROM_TO_HOLIDAYS_policy = 0;
                                                }
                                                OfficialHoldays(OfficialHolidaysRow, DateFromVacancy, DatetoVacancy, ref ALL_FROM_TO_HOLIDAYS_policy, UserReligion.Value);

                                                allvacation_in_DB -= ALL_FROM_TO_HOLIDAYS_policy;


                                            }

                                        }

                                    }
                                }

                                if (Vacancieslimt != null)
                                {
                                    if (Vacancy_days_requet <= Vacancieslimt) //  10=<10
                                    {
                                        if ((allvacation_in_DB + Vacancy_days_requet) <= Vacancieslimt)   // 9 < 10
                                        {
                                            return new MyRepository().Create(uow, request);
                                        }
                                        else if (allvacation_in_DB == 0 && (allvacation_in_DB + Vacancy_days_requet) <= Vacancieslimt)
                                        {
                                            // 3l4an lw maa5d4 ay agaza fi elsana
                                            return new MyRepository().Create(uow, request);
                                        }
                                        else
                                        {
                                            throw new Exception("You have exceeded the limit for the current month");
                                        }
                                    }
                                    else
                                    {
                                        throw new Exception("Your Regularvacation Leave Request are more than Your limit");
                                    }
                                }
                                else
                                {
                                    throw new Exception("Please Enter your Regularvacation Limit");
                                }
                            }
                        }
                    }
                }

            }

            //if (Existanceinpolicy == false)
            //{
            //    throw new Exception("Please fix from and to in Vacancy policy !");
            //}

            return new MyRepository().Create(uow, request);
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {


            #region Variables
            bool Existanceinpolicy = false;
            double ALL_FROM_TO_HOLIDAYS_policy = 0;
            int year = DateTime.Now.Year;
            var DateFromR = request.Entity.DateFrom;
            var DatetoR = request.Entity.Dateto;
            int UserID = int.Parse(Authorization.UserId);
            DateTime? HireDateNullabl = uow.Connection.TryById<UsersRow>(UserID).HireDate;
            DateTime HireDate = HireDateNullabl.Value;
            var Years_of_work = (decimal)CalculateHireDateYears(DateTime.Now, HireDate);
            double HireDatePerMonth = CalculateHireDateMonth(DateTime.Now, HireDate);
            Dictionary<DateTime, double> Vacations_during_financial = new Dictionary<DateTime, double>();
            double allvacation_in_DB = 0;
            var VacancyIdR = request.Entity.VacancyId;
            var FinancialyearRow = uow.Connection.List<FinancialyearRow>().FirstOrDefault(x => x.Status == true);
            List<VacancyRequestsRow> vacancies = uow.Connection.List<VacancyRequestsRow>().Where(x => x.UserId == UserID &&
                   x.IsAcceptedbyHr == AcceptedHREnum.Approved && x.VacancyId == VacancyIdR).ToList();
            var CurrentFinanicalYear_DateFrom = FinancialyearRow.DateFrom.Value;
            var CurrentFinanicalYear_DateTo = FinancialyearRow.DateTo.Value;
            if (FinancialyearRow == null)
            {
                throw new Exception("Please review your Financial Year");
            }
            var VacancyPolicyRow = uow.Connection.List<VacancyPolicyRow>().Where(x => x.VacancyId == VacancyIdR).ToList();
            double? Vacancieslimt = 0;
            var VacancyRequestId = request.Entity.Id;
            var OldVacancyRequest = uow.Connection.List<MyRow>().FirstOrDefault(x => x.Id == VacancyRequestId);
            var OldDateFrom = OldVacancyRequest.DateFrom.Value;
            var OldDateTo = OldVacancyRequest.Dateto.Value;
            var OldYourVacancyDays = CalculateYourVacancies_days(OldDateTo, OldDateFrom);

            if (OldVacancyRequest.IsAcceptedbyHr == AcceptedHREnum.Approved || OldVacancyRequest.StatusId == 1
                || OldVacancyRequest.IsAcceptedbyHr == AcceptedHREnum.refused || OldVacancyRequest.StatusId == 2)
            {
                throw new Exception("Sorry you cannot modify this request");
            }
            var OfficialHolidaysRow = uow.Connection.List<OfficialHolidaysRow>().ToList();

            double Vacancy_days_requet = 0;
          
            var UserReligion = uow.Connection.List<UserRow>().FirstOrDefault(x => x.UserId == UserID).Religion;

            #endregion

            #region Automatic Assignment


            request.Entity.StatusId = 3; // pending
            request.Entity.UserId = UserID;
            request.Entity.IsAcceptedbyHr = 0; // False
            request.Entity.Date = DateTime.Now;

            #endregion

            #region Vacancy_days_requet

            OfficialHoldays(OfficialHolidaysRow, DateFromR.Value, DatetoR.Value, ref ALL_FROM_TO_HOLIDAYS_policy, UserReligion.Value);
            Vacancy_days_requet = CalculateYourVacancies_days(DatetoR.Value, DateFromR.Value);
            if (Vacancy_days_requet < ALL_FROM_TO_HOLIDAYS_policy)
            {
                Vacancy_days_requet = 0;
            }

            else
            {
                Vacancy_days_requet -= ALL_FROM_TO_HOLIDAYS_policy;
            }
            #endregion

           
           
            //w2f el loop lw el condion  mtl2a4 fi el policy
            //w2f el loop lw el condiotion matl2a4 fi el balance

            if (Vacancy_days_requet != OldYourVacancyDays)
            {
                foreach (var policyRow in VacancyPolicyRow)
                {
                    var BalanceAccountListRow = uow.Connection.List<BalanceAccountRow>().Where(x => x.User_ID == UserID).ToList();
                    var UserVacanciesLimit_ifExistance = uow.Connection.List<UserVacanciesLimitRow>().Any(x => x.UserId == UserID && x.VacancyId == VacancyIdR);

                    if (UserVacanciesLimit_ifExistance)
                    {
                        Existanceinpolicy = true;
                        var UserVacanciesLimitRow = uow.Connection.List<UserVacanciesLimitRow>().FirstOrDefault(x => x.UserId == UserID && x.VacancyId == VacancyIdR);

                        var Limit = UserVacanciesLimitRow.Limit;

                        if (policyRow.Duration == Duration.yearly && policyRow.Sending == Sending.Norelay) // Annual Or Casual الاجازات اللي بتنتهي مع نهاية السنه
                        {
                            var FromYears = policyRow.FromYears;
                            var ToYears = policyRow.ToYears;

                            Existanceinpolicy = true;
                            Vacancieslimt = Limit;
                            foreach (var item in vacancies)
                            {
                                var DateFromVacancy = item.DateFrom.Value;
                                var DatetoVacancy = item.Dateto.Value;

                                if (DateFromVacancy.Ticks >= CurrentFinanicalYear_DateFrom.Ticks && DateFromVacancy.Ticks <= CurrentFinanicalYear_DateTo.Ticks
                                   && DatetoVacancy.Ticks >= CurrentFinanicalYear_DateFrom.Ticks && DatetoVacancy.Ticks <= CurrentFinanicalYear_DateTo.Ticks)
                                {

                                    allvacation_in_DB += CalculateYourVacancies_days(DatetoVacancy, DateFromVacancy);
                                    //if Leav taken are Negative
                                    if (allvacation_in_DB <= 0)
                                    {
                                        allvacation_in_DB = 0;
                                    }

                                    else
                                    {
                                        //Reset
                                        if (ALL_FROM_TO_HOLIDAYS_policy != 0)
                                        {
                                            ALL_FROM_TO_HOLIDAYS_policy = 0;
                                        }
                                        OfficialHoldays(OfficialHolidaysRow, DateFromVacancy, DatetoVacancy, ref ALL_FROM_TO_HOLIDAYS_policy, UserReligion.Value);

                                        allvacation_in_DB -= ALL_FROM_TO_HOLIDAYS_policy;


                                    }

                                }


                            }

                            //Vacancy_days_requet -= OldYourVacancyDays;

                            if (Vacancieslimt != 0)
                            {
                                if (Vacancy_days_requet <= Vacancieslimt) //  10=<10
                                {
                                    if ((allvacation_in_DB + Vacancy_days_requet) <= Vacancieslimt)   // 9 < 10
                                    {
                                        return new MyRepository().Update(uow, request);
                                    }
                                    else if (allvacation_in_DB == 0 && (allvacation_in_DB + Vacancy_days_requet) <= Vacancieslimt)
                                    {
                                        // 3l4an lw maa5d4 ay agaza fi elsana
                                        return new MyRepository().Update(uow, request);
                                    }
                                    else
                                    {
                                        throw new Exception("You have exceeded the allowed limit");
                                    }

                                }
                                else
                                {
                                    throw new Exception("Your Casual Vacancy Request are more than Your limit");
                                }

                            }
                            else
                            {
                                throw new Exception("Please Enter Your CasualVacancy Limit");

                            }
                        }

                        else if (policyRow.Duration == Duration.Monthly && policyRow.Sending == Sending.Norelay)
                        {

                            foreach (var balance in BalanceAccountListRow)
                            {
                                DateTime DateEnd = balance.DateEnd.Value;
                                DateTime DateBeginn = balance.DateBeginn.Value;

                                //Check if datefrom and dateto in balance
                                //Check 3la kol el vacancies date 2lly mogodin fi el balanca 34an a3rf el limit 2lly fi el db


                                if (DateFromR.Value.Ticks >= DateBeginn.Ticks && DateFromR.Value.Ticks <= DateEnd.Ticks
                                    && DatetoR.Value.Ticks >= DateBeginn.Ticks && DatetoR.Value.Ticks <= DateEnd.Ticks)
                                {
                                    //List<VacancyRequestsRow> vacancies = uow.Connection.List<VacancyRequestsRow>().Where(x => x.UserId == UserID &&
                                    //x.IsAcceptedbyHr == 1 && x.VacancyId == VacancyIdR).ToList();

                                    foreach (var vacancy in vacancies)
                                    {
                                        var DateFrom = vacancy.DateFrom.Value;
                                        var Dateto = vacancy.Dateto.Value;
                                        //Check if Date from and to that in db  inside balance. for calculation Summation of Leaving
                                        if (DateFrom.Ticks >= DateBeginn.Ticks && DateFrom.Ticks <= DateEnd.Ticks
                                            && Dateto.Ticks >= DateBeginn.Ticks && Dateto.Ticks <= DateEnd.Ticks)
                                        {
                                            var DateFromVacancy = vacancy.DateFrom.Value;
                                            var DatetoVacancy = vacancy.Dateto.Value;


                                            allvacation_in_DB += CalculateYourVacancies_days(Dateto, DateFrom);
                                            //if Leav taken are Negative
                                            if (allvacation_in_DB <= 0)
                                            {
                                                allvacation_in_DB = 0;
                                            }

                                            else
                                            {
                                                //Reset
                                                if (ALL_FROM_TO_HOLIDAYS_policy != 0)
                                                {
                                                    ALL_FROM_TO_HOLIDAYS_policy = 0;
                                                }
                                                OfficialHoldays(OfficialHolidaysRow, DateFrom, Dateto, ref ALL_FROM_TO_HOLIDAYS_policy, UserReligion.Value);

                                                allvacation_in_DB -= ALL_FROM_TO_HOLIDAYS_policy;


                                            }
                                        }
                                       



                                    }
                                    var FromYears = policyRow.FromYears;
                                    var ToYears = policyRow.ToYears;


                                    Existanceinpolicy = true;
                                    Vacancieslimt = Limit;



                                    //Vacancy_days_requet -= OldYourVacancyDays;
                                    if (Vacancieslimt != null)
                                    {
                                        if (Vacancy_days_requet <= Vacancieslimt) //  10=<10
                                        {

                                            if ((allvacation_in_DB + Vacancy_days_requet) <= Vacancieslimt)   // 9 < 10
                                            {
                                                return new MyRepository().Update(uow, request);
                                            }
                                            else if (allvacation_in_DB == 0 && (allvacation_in_DB + Vacancy_days_requet) <= Vacancieslimt)
                                            {
                                                // 3l4an lw maa5d4 ay agaza fi elsana
                                                return new MyRepository().Update(uow, request);
                                            }
                                            else
                                            {
                                                throw new Exception("You have exceeded the limit for the current month");
                                            }
                                        }
                                        else
                                        {
                                            throw new Exception("Your Regularvacation Leave Request are more than Your limit");
                                        }
                                    }
                                    else
                                    {
                                        throw new Exception("Please Enter your Regularvacation Limit");
                                    }
                                }
                            }
                        }

                        else if (policyRow.Duration == Duration.Monthly && policyRow.Sending == Sending.relay)
                        {

                            if (DateFromR.Value.Ticks >= CurrentFinanicalYear_DateFrom.Ticks && DateFromR.Value.Ticks <= CurrentFinanicalYear_DateTo.Ticks
                               && DatetoR.Value.Ticks >= CurrentFinanicalYear_DateFrom.Ticks && DatetoR.Value.Ticks <= CurrentFinanicalYear_DateTo.Ticks)
                            {
                                foreach (var balance in BalanceAccountListRow)
                                {
                                    DateTime Balance_DateEnd = balance.DateEnd.Value;
                                    DateTime Balance_DateBeginn = balance.DateBeginn.Value;


                                    #region Calculation the Relay for previous months


                                    if (Balance_DateBeginn.Ticks >= CurrentFinanicalYear_DateFrom.Ticks && Balance_DateBeginn.Ticks <= CurrentFinanicalYear_DateTo.Ticks
                                     && Balance_DateEnd.Ticks >= CurrentFinanicalYear_DateFrom.Ticks && Balance_DateEnd.Ticks <= CurrentFinanicalYear_DateTo.Ticks)
                                    {
                                        if (DateFromR.Value.Ticks >= Balance_DateBeginn.Ticks && DateFromR.Value.Ticks <= Balance_DateEnd.Ticks
                                           && DatetoR.Value.Ticks >= Balance_DateBeginn.Ticks && DatetoR.Value.Ticks <= Balance_DateEnd.Ticks)
                                        {
                                            foreach (var item in BalanceAccountListRow)
                                            {
                                                // relays for Previous months
                                                if (Balance_DateBeginn.Ticks > item.DateBeginn.Value.Ticks && Balance_DateEnd.Ticks > item.DateEnd.Value.Ticks)
                                                {
                                                    var DateBeginn = item.DateBeginn.Value;
                                                    var DateEnd = item.DateEnd.Value;
                                                    double AllVacancy_During_Balance = 0;
                                                    DateTime DateFrom_month = new DateTime();

                                                    DateTime DateFrom_relay = new DateTime();
                                                    DateTime DateTo_relay = new DateTime();

                                                    foreach (var vacancy in vacancies)
                                                    {
                                                        var DateFrom = vacancy.DateFrom.Value;
                                                        var Dateto = vacancy.Dateto.Value;
                                                        DateFrom_relay = DateFrom;
                                                        DateTo_relay = Dateto;

                                                        if (DateFrom.Ticks >= DateBeginn.Ticks && DateFrom.Ticks <= DateEnd.Ticks
                                                            && Dateto.Ticks >= DateBeginn.Ticks && Dateto.Ticks <= DateEnd.Ticks)
                                                        {
                                                            var DateFromVacancy = vacancy.DateFrom.Value;
                                                            var DatetoVacancy = vacancy.Dateto.Value;

                                                            AllVacancy_During_Balance += CalculateYourVacancies_days(DatetoVacancy, DateFromVacancy);
                                                            DateFrom_month = DateFromVacancy;
                                                            if (AllVacancy_During_Balance <= 0)
                                                            {
                                                                AllVacancy_During_Balance = 0;
                                                            }
                                                            else
                                                            {
                                                                //Reset
                                                                if (ALL_FROM_TO_HOLIDAYS_policy != 0)
                                                                {
                                                                    ALL_FROM_TO_HOLIDAYS_policy = 0;
                                                                }
                                                               
                                                                    OfficialHoldays(OfficialHolidaysRow, DateFrom, Dateto, ref ALL_FROM_TO_HOLIDAYS_policy, UserReligion.Value);

                                                                    AllVacancy_During_Balance -= ALL_FROM_TO_HOLIDAYS_policy;

                                                                
                                                            }


                                                        }


                                                    }

                                                    Vacations_during_financial.Add(DateFrom_month, AllVacancy_During_Balance);

                                                }
                                            }

                                        }


                                    }

                                    #endregion


                                    if (DateFromR.Value.Ticks >= Balance_DateBeginn.Ticks && DateFromR.Value.Ticks <= Balance_DateEnd.Ticks
                                    && DatetoR.Value.Ticks >= Balance_DateBeginn.Ticks && DatetoR.Value.Ticks <= Balance_DateEnd.Ticks)
                                    {
                                        var FromYears = policyRow.FromYears;
                                        var ToYears = policyRow.ToYears;

                                        Existanceinpolicy = true;
                                        Vacancieslimt = Limit;
                                        foreach (KeyValuePair<DateTime, double> item in Vacations_during_financial)
                                        {
                                            double? RemaindDays = Vacancieslimt - item.Value;
                                            Vacancieslimt += RemaindDays;
                                        }
                                        //request.Entity.LimitNotRelay = (short)Vacancieslimt;
                                        //ViewBag.Dates = AllRelayVac;

                                        foreach (var vacancy in vacancies)
                                        {
                                            var DateFrom = vacancy.DateFrom.Value;
                                            var Dateto = vacancy.Dateto.Value;

                                            //Calculation Relay vacation
                                            if (DateFrom.Ticks >= CurrentFinanicalYear_DateFrom.Ticks && DateFrom.Ticks <= CurrentFinanicalYear_DateTo.Ticks
                                            && Dateto.Ticks >= CurrentFinanicalYear_DateFrom.Ticks && Dateto.Ticks <= CurrentFinanicalYear_DateTo.Ticks)
                                            {
                                                //Check if Date from and to that in db  inside balance. for calculation Summation of Leaving
                                                if (DateFrom.Ticks >= Balance_DateBeginn.Ticks && DateFrom.Ticks <= Balance_DateEnd.Ticks
                                                    && Dateto.Ticks >= Balance_DateBeginn.Ticks && Dateto.Ticks <= Balance_DateEnd.Ticks)
                                                {
                                                    allvacation_in_DB += CalculateYourVacancies_days(Dateto, DateFrom);
                                                    //if Leav taken are Negative
                                                    if (allvacation_in_DB <= 0)
                                                    {
                                                        allvacation_in_DB = 0;
                                                    }

                                                    else
                                                    {
                                                        //Reset
                                                        if (ALL_FROM_TO_HOLIDAYS_policy != 0)
                                                        {
                                                            ALL_FROM_TO_HOLIDAYS_policy = 0;
                                                        }
                                                        OfficialHoldays(OfficialHolidaysRow, DateFrom, Dateto, ref ALL_FROM_TO_HOLIDAYS_policy, UserReligion.Value);

                                                        allvacation_in_DB -= ALL_FROM_TO_HOLIDAYS_policy;


                                                    }

                                                }

                                            }
                                        }

                                        //Vacancy_days_requet -= OldYourVacancyDays;
                                        if (Vacancieslimt != null)
                                        {
                                            if (Vacancy_days_requet <= Vacancieslimt) //  10=<10
                                            {
                                                if ((allvacation_in_DB + Vacancy_days_requet) <= Vacancieslimt)   // 9 < 10
                                                {
                                                    return new MyRepository().Update(uow, request);
                                                }
                                                else if (allvacation_in_DB == 0 && (allvacation_in_DB + Vacancy_days_requet) <= Vacancieslimt)
                                                {
                                                    // 3l4an lw maa5d4 ay agaza fi elsana
                                                    return new MyRepository().Update(uow, request);
                                                }
                                                else
                                                {
                                                    throw new Exception("You have exceeded the limit for the current month");
                                                }
                                            }
                                            else
                                            {
                                                throw new Exception("Your Regularvacation Leave Request are more than Your limit");
                                            }
                                        }
                                        else
                                        {
                                            throw new Exception("Please Enter your Regularvacation Limit");
                                        }
                                    }
                                }
                            }
                        }

                    }

                    else if (policyRow.Duration == Duration.yearly && policyRow.Sending == Sending.Norelay) // Annual Or Casual الاجازات اللي بتنتهي مع نهاية السنه
                    {
                        var FromYears = policyRow.FromYears;
                        var ToYears = policyRow.ToYears;

                        if (Years_of_work > FromYears && Years_of_work < ToYears)
                        {
                            Existanceinpolicy = true;
                            Vacancieslimt = policyRow.Limit;
                            foreach (var item in vacancies)
                            {
                                var DateFromVacancy = item.DateFrom.Value;
                                var DatetoVacancy = item.Dateto.Value;

                                if (DateFromVacancy.Ticks >= CurrentFinanicalYear_DateFrom.Ticks && DateFromVacancy.Ticks <= CurrentFinanicalYear_DateTo.Ticks
                                   && DatetoVacancy.Ticks >= CurrentFinanicalYear_DateFrom.Ticks && DatetoVacancy.Ticks <= CurrentFinanicalYear_DateTo.Ticks)
                                {
                                    allvacation_in_DB += CalculateYourVacancies_days(DatetoVacancy, DateFromVacancy);

                                    //if Leav taken are Negative
                                    if (allvacation_in_DB <= 0)
                                    {
                                        allvacation_in_DB = 0;
                                    }

                                    else
                                    {
                                        //Reset
                                        if (ALL_FROM_TO_HOLIDAYS_policy != 0)
                                        {
                                            ALL_FROM_TO_HOLIDAYS_policy = 0;
                                        }
                                        OfficialHoldays(OfficialHolidaysRow, DateFromVacancy, DatetoVacancy, ref ALL_FROM_TO_HOLIDAYS_policy, UserReligion.Value);

                                        allvacation_in_DB -= ALL_FROM_TO_HOLIDAYS_policy;


                                    }
                                }
                                


                            }

                            //Vacancy_days_requet -= OldYourVacancyDays;
                            if (Vacancieslimt != 0)
                            {
                                if (Vacancy_days_requet <= Vacancieslimt) //  10=<10
                                {
                                    if ((allvacation_in_DB + Vacancy_days_requet) <= Vacancieslimt)   // 9 < 10
                                    {
                                        return new MyRepository().Update(uow, request);
                                    }
                                    else if (allvacation_in_DB == 0 && (allvacation_in_DB + Vacancy_days_requet) <= Vacancieslimt)
                                    {
                                        // 3l4an lw maa5d4 ay agaza fi elsana
                                        return new MyRepository().Update(uow, request);
                                    }
                                    else
                                    {
                                        throw new Exception("You have exceeded the allowed limit");
                                    }

                                }
                                else
                                {
                                    throw new Exception("Your Casual Vacancy Request are more than Your limit");
                                }

                            }
                            else
                            {
                                throw new Exception("Please Enter Your CasualVacancy Limit");

                            }
                        }



                    }

                    else if (policyRow.Duration == Duration.Monthly && policyRow.Sending == Sending.Norelay)
                    {

                        foreach (var balance in BalanceAccountListRow)
                        {
                            DateTime DateEnd = balance.DateEnd.Value;
                            DateTime DateBeginn = balance.DateBeginn.Value;

                            //Check if datefrom and dateto in balance
                            //Check 3la kol el vacancies date 2lly mogodin fi el balanca 34an a3rf el limit 2lly fi el db


                            if (DateFromR.Value.Ticks >= DateBeginn.Ticks && DateFromR.Value.Ticks <= DateEnd.Ticks
                                && DatetoR.Value.Ticks >= DateBeginn.Ticks && DatetoR.Value.Ticks <= DateEnd.Ticks)
                            {
                                //List<VacancyRequestsRow> vacancies = uow.Connection.List<VacancyRequestsRow>().Where(x => x.UserId == UserID &&
                                //x.IsAcceptedbyHr == 1 && x.VacancyId == VacancyIdR).ToList();

                                foreach (var vacancy in vacancies)
                                {
                                    var DateFrom = vacancy.DateFrom.Value;
                                    var Dateto = vacancy.Dateto.Value;
                                    //Check if Date from and to that in db  inside balance. for calculation Summation of Leaving
                                    if (DateFrom.Ticks >= DateBeginn.Ticks && DateFrom.Ticks <= DateEnd.Ticks
                                        && Dateto.Ticks >= DateBeginn.Ticks && Dateto.Ticks <= DateEnd.Ticks)
                                    {
                                        allvacation_in_DB += CalculateYourVacancies_days(vacancy.Dateto.Value, vacancy.DateFrom.Value);

                                        //if Leav taken are Negative
                                        if (allvacation_in_DB <= 0)
                                        {
                                            allvacation_in_DB = 0;
                                        }

                                        else
                                        {
                                            //Reset
                                            if (ALL_FROM_TO_HOLIDAYS_policy != 0)
                                            {
                                                ALL_FROM_TO_HOLIDAYS_policy = 0;
                                            }
                                            OfficialHoldays(OfficialHolidaysRow, DateFrom, Dateto, ref ALL_FROM_TO_HOLIDAYS_policy, UserReligion.Value);

                                            allvacation_in_DB -= ALL_FROM_TO_HOLIDAYS_policy;


                                        }

                                    }


                                }
                                var FromYears = policyRow.FromYears;
                                var ToYears = policyRow.ToYears;

                                if (Years_of_work >= FromYears && Years_of_work <= ToYears) //Check if Hire date inside range
                                {
                                    Existanceinpolicy = true;
                                    Vacancieslimt = policyRow.Limit;
                                }

                                //Vacancy_days_requet -= OldYourVacancyDays;
                                if (Vacancieslimt != null)
                                {
                                    if (Vacancy_days_requet <= Vacancieslimt) //  10=<10
                                    {

                                        if ((allvacation_in_DB + Vacancy_days_requet) <= Vacancieslimt)   // 9 < 10
                                        {
                                            return new MyRepository().Update(uow, request);
                                        }
                                        else if (allvacation_in_DB == 0 && (allvacation_in_DB + Vacancy_days_requet) <= Vacancieslimt)
                                        {
                                            // 3l4an lw maa5d4 ay agaza fi elsana
                                            return new MyRepository().Update(uow, request);
                                        }
                                        else
                                        {
                                            throw new Exception("You have exceeded the limit for the current month");
                                        }
                                    }
                                    else
                                    {
                                        throw new Exception("Your Regularvacation Leave Request are more than Your limit");
                                    }
                                }
                                else
                                {
                                    throw new Exception("Please Enter your Regularvacation Limit");
                                }
                            }
                        }
                    }

                    else if (policyRow.Duration == Duration.Monthly && policyRow.Sending == Sending.relay)
                    {

                        if (DateFromR.Value.Ticks >= CurrentFinanicalYear_DateFrom.Ticks && DateFromR.Value.Ticks <= CurrentFinanicalYear_DateTo.Ticks
                           && DatetoR.Value.Ticks >= CurrentFinanicalYear_DateFrom.Ticks && DatetoR.Value.Ticks <= CurrentFinanicalYear_DateTo.Ticks)
                        {
                            foreach (var balance in BalanceAccountListRow)
                            {
                                DateTime Balance_DateEnd = balance.DateEnd.Value;
                                DateTime Balance_DateBeginn = balance.DateBeginn.Value;


                                #region Calculation the Relay for previous months


                                if (Balance_DateBeginn.Ticks >= CurrentFinanicalYear_DateFrom.Ticks && Balance_DateBeginn.Ticks <= CurrentFinanicalYear_DateTo.Ticks
                                 && Balance_DateEnd.Ticks >= CurrentFinanicalYear_DateFrom.Ticks && Balance_DateEnd.Ticks <= CurrentFinanicalYear_DateTo.Ticks)
                                {
                                    if (DateFromR.Value.Ticks >= Balance_DateBeginn.Ticks && DateFromR.Value.Ticks <= Balance_DateEnd.Ticks
                                       && DatetoR.Value.Ticks >= Balance_DateBeginn.Ticks && DatetoR.Value.Ticks <= Balance_DateEnd.Ticks)
                                    {
                                        foreach (var item in BalanceAccountListRow)
                                        {
                                            // relays for Previous months
                                            if (Balance_DateBeginn.Ticks > item.DateBeginn.Value.Ticks && Balance_DateEnd.Ticks > item.DateEnd.Value.Ticks)
                                            {
                                                var DateBeginn = item.DateBeginn.Value;
                                                var DateEnd = item.DateEnd.Value;
                                                double AllVacancy_During_Balance = 0;
                                                DateTime DateFrom_month = new DateTime();

                                                DateTime DateFrom_relay = new DateTime();
                                                DateTime DateTo_relay = new DateTime();

                                                foreach (var vacancy in vacancies)
                                                {
                                                    var DateFrom = vacancy.DateFrom.Value;
                                                    var Dateto = vacancy.Dateto.Value;
                                                    DateFrom_relay = DateFrom;
                                                    DateTo_relay = Dateto;

                                                    if (DateFrom.Ticks >= DateBeginn.Ticks && DateFrom.Ticks <= DateEnd.Ticks
                                                        && Dateto.Ticks >= DateBeginn.Ticks && Dateto.Ticks <= DateEnd.Ticks)
                                                    {

                                                        AllVacancy_During_Balance += CalculateYourVacancies_days(Dateto, DateFrom);
                                                        DateFrom_month = DateFrom;
                                                        if (AllVacancy_During_Balance <= 0)
                                                        {
                                                            AllVacancy_During_Balance = 0;
                                                        }
                                                        else
                                                        {
                                                            //Reset
                                                            if (ALL_FROM_TO_HOLIDAYS_policy != 0)
                                                            {
                                                                ALL_FROM_TO_HOLIDAYS_policy = 0;
                                                            }
                                                            
                                                                OfficialHoldays(OfficialHolidaysRow, DateFrom, Dateto, ref ALL_FROM_TO_HOLIDAYS_policy, UserReligion.Value);

                                                                AllVacancy_During_Balance -= ALL_FROM_TO_HOLIDAYS_policy;

                                                            
                                                        }

                                                    }

                                                }

                                                Vacations_during_financial.Add(DateFrom_month, AllVacancy_During_Balance);

                                            }
                                        }

                                    }


                                }

                                #endregion


                                if (DateFromR.Value.Ticks >= Balance_DateBeginn.Ticks && DateFromR.Value.Ticks <= Balance_DateEnd.Ticks
                                && DatetoR.Value.Ticks >= Balance_DateBeginn.Ticks && DatetoR.Value.Ticks <= Balance_DateEnd.Ticks)
                                {
                                    var FromYears = policyRow.FromYears;
                                    var ToYears = policyRow.ToYears;
                                    if (Years_of_work >= FromYears && Years_of_work <= ToYears) //Check if Hire date inside range
                                    {
                                        Existanceinpolicy = true;
                                        Vacancieslimt = policyRow.Limit;
                                        foreach (KeyValuePair<DateTime, double> item in Vacations_during_financial)
                                        {
                                            double? RemaindDays = Vacancieslimt - item.Value;
                                            Vacancieslimt += RemaindDays;
                                        }
                                        //request.Entity.LimitNotRelay = (short)Vacancieslimt;
                                        //ViewBag.Dates = AllRelayVac;
                                    }
                                    foreach (var vacancy in vacancies)
                                    {
                                        var DateFromVacancy = vacancy.DateFrom.Value;
                                        var DatetoVacancy = vacancy.Dateto.Value;

                                        //Calculation Relay vacation
                                        if (DateFromVacancy.Ticks >= CurrentFinanicalYear_DateFrom.Ticks && DateFromVacancy.Ticks <= CurrentFinanicalYear_DateTo.Ticks
                                        && DatetoVacancy.Ticks >= CurrentFinanicalYear_DateFrom.Ticks && DatetoVacancy.Ticks <= CurrentFinanicalYear_DateTo.Ticks)
                                        {
                                            //Check if Date from and to that in db  inside balance. for calculation Summation of Leaving
                                            if (DateFromVacancy.Ticks >= Balance_DateBeginn.Ticks && DateFromVacancy.Ticks <= Balance_DateEnd.Ticks
                                                && DatetoVacancy.Ticks >= Balance_DateBeginn.Ticks && DatetoVacancy.Ticks <= Balance_DateEnd.Ticks)
                                            {
                                                allvacation_in_DB += CalculateYourVacancies_days(vacancy.Dateto.Value, vacancy.DateFrom.Value);
                                                //if Leav taken are Negative
                                                if (allvacation_in_DB <= 0)
                                                {
                                                    allvacation_in_DB = 0;
                                                }

                                                else
                                                {
                                                    //Reset
                                                    if (ALL_FROM_TO_HOLIDAYS_policy != 0)
                                                    {
                                                        ALL_FROM_TO_HOLIDAYS_policy = 0;
                                                    }
                                                    OfficialHoldays(OfficialHolidaysRow, DateFromVacancy, DatetoVacancy, ref ALL_FROM_TO_HOLIDAYS_policy, UserReligion.Value);
                                                    allvacation_in_DB -= ALL_FROM_TO_HOLIDAYS_policy;
                                                }

                                            }

                                        }
                                    }
                                    //Vacancy_days_requet -= OldYourVacancyDays;
                                    if (Vacancieslimt != null)
                                    {
                                        if (Vacancy_days_requet <= Vacancieslimt) //  10=<10
                                        {
                                            if ((allvacation_in_DB + Vacancy_days_requet) <= Vacancieslimt)   // 9 < 10
                                            {
                                                return new MyRepository().Update(uow, request);
                                            }
                                            else if (allvacation_in_DB == 0 && (allvacation_in_DB + Vacancy_days_requet) <= Vacancieslimt)
                                            {
                                                // 3l4an lw maa5d4 ay agaza fi elsana
                                                return new MyRepository().Update(uow, request);
                                            }
                                            else
                                            {
                                                throw new Exception("You have exceeded the limit for the current month");
                                            }
                                        }
                                        else
                                        {
                                            throw new Exception("Your Regularvacation Leave Request are more than Your limit");
                                        }
                                    }
                                    else
                                    {
                                        throw new Exception("Please Enter your Regularvacation Limit");
                                    }
                                }
                            }
                        }
                    }

                }

            }


            return new MyRepository().Update(uow, request);
        }

        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            int ID = int.Parse(request.EntityId.ToString());

            var OldVacancyRequest = uow.Connection.List<MyRow>().FirstOrDefault(x => x.Id == ID);
            var OldDateFrom = OldVacancyRequest.DateFrom.Value;
            var OldDateTo = OldVacancyRequest.Dateto.Value;
            var OldYourVacancyDays = CalculateYourVacancies_days(OldDateTo, OldDateFrom);

            if (OldVacancyRequest.IsAcceptedbyHr == AcceptedHREnum.Approved || OldVacancyRequest.StatusId == 1
                || OldVacancyRequest.IsAcceptedbyHr == AcceptedHREnum.refused || OldVacancyRequest.StatusId == 2)
            {
                throw new Exception("Sorry you cannot Edit this request");
            }


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
