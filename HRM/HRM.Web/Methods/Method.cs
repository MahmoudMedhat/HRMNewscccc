using HRM.Administration.Entities;
using HRM.Modules.Administration.OfficialHolidays;
using HRM.Modules.Administration.User;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HRM.Employees.Endpoints
{
    public partial class VacancyRequestsController
    {
        //A3ml el balance wi b3d kda zat el vr kois
        public static double CalculateYourVacancies_days(DateTime to, DateTime from)
        {
            TimeSpan diff = to - from;
            return diff.TotalDays /*+ 1*/;
        }



        public static IEnumerable<int> DaysBetween(DateTime DateFrom, DateTime DateTo)
        {
            for (var dateTime = DateFrom; dateTime < DateTo; dateTime = dateTime.AddDays(1))
            {
                int datetimeweeknum = (int)dateTime.DayOfWeek;
                yield return datetimeweeknum;
            }
        }



        public static double CalculateHireDateYears(DateTime Now, DateTime HireDate)
        {
            TimeSpan diff = Now - HireDate;
            double diffbyyears = diff.TotalDays / 365;
            return diffbyyears;
        }

        public static double CalculateHireDateMonth(DateTime Now, DateTime HireDate)
        {

            TimeSpan diff = Now - HireDate;
            double TotalDays = diff.TotalDays;
            return TotalDays / 30;

        }



        public static void OfficialHoldays(List<OfficialHolidaysRow> OfficialHolidaysRow, DateTime DateFromR, DateTime DatetoR, ref double ALL_FROM_TO_HOLIDAYS, ReligionEnum UserReligion, DateTime? DateFrom_month = null)
        {
            #region officialHolidays
            foreach (var officialHolidays in OfficialHolidaysRow)
            {
                if (officialHolidays.weekdays == WeekDaysEnum.Null && officialHolidays.FromHoliday != null && officialHolidays.ToHoliday != null)

                {

                    if (officialHolidays.Religion == Religion_Offical_Enum.AllofThem)
                    {
                        var FromOffial = officialHolidays.FromHoliday.Value;
                        var Toofficial = officialHolidays.ToHoliday.Value;

                        #region Check Frome Request

                        //All bothe from DateFromR and DatetoR are inside the FromOffial and Toofficial
                        if (DateFromR.Ticks >= FromOffial.Ticks && DateFromR.Ticks <= Toofficial.Ticks && DatetoR.Ticks >= FromOffial.Ticks && DatetoR.Ticks <= Toofficial.Ticks)
                        {
                            var All_Holidays_Round = CalculateYourVacancies_days(Toofficial, FromOffial);
                            ALL_FROM_TO_HOLIDAYS += All_Holidays_Round; // Agmaly 3dd Ayam el agaza 2lly hstfad biha

                            foreach (var item in OfficialHolidaysRow)
                            {
                                if (item.weekdays != WeekDaysEnum.Null)
                                {

                                    if (item.Religion == Religion_Offical_Enum.AllofThem)
                                    {
                                        var weekdays = (int)item.weekdays.Value;
                                        var AllDaysBetween = DaysBetween(FromOffial, Toofficial);

                                        foreach (var Days in AllDaysBetween)
                                        {
                                            if (Days == weekdays)
                                            {
                                                ALL_FROM_TO_HOLIDAYS -= 1;
                                            }
                                        }
                                    }

                                }
                            }

                        }
                        //Hf 23/7 to 26/7      Rf 23/7  t 27/7
                        else if (DateFromR.Ticks >= FromOffial.Ticks && DateFromR.Ticks <= Toofficial.Ticks && DatetoR.Ticks > FromOffial.Ticks && DatetoR.Ticks > Toofficial.Ticks)
                        {
                            //var RemaindDays_afterHolidays = CalculateYourVacancies_days(DatetoR, Toofficial);
                            //4                                            -    1
                            ALL_FROM_TO_HOLIDAYS += CalculateYourVacancies_days(Toofficial, FromOffial) /*- RemaindDays_afterHolidays*/;

                            foreach (var item in OfficialHolidaysRow)
                            {
                                if (item.weekdays != WeekDaysEnum.Null)
                                {

                                    if (item.Religion == Religion_Offical_Enum.AllofThem)
                                    {
                                        var weekdays = (int)item.weekdays.Value;
                                        var AllDaysBetween = DaysBetween(FromOffial, Toofficial);
                                        foreach (var Days in AllDaysBetween)
                                        {
                                            if (Days == weekdays)
                                            {
                                                ALL_FROM_TO_HOLIDAYS -= 1;
                                            }
                                        }
                                    }

                                }
                            }



                        }

                        else if (DateFromR.Ticks < FromOffial.Ticks && DateFromR.Ticks < Toofficial.Ticks && DatetoR.Ticks > FromOffial.Ticks && DatetoR.Ticks > Toofficial.Ticks)
                        {
                            ALL_FROM_TO_HOLIDAYS += CalculateYourVacancies_days(Toofficial, FromOffial);


                            foreach (var item in OfficialHolidaysRow)
                            {
                                if (item.weekdays != WeekDaysEnum.Null)
                                {

                                    if (item.Religion == Religion_Offical_Enum.AllofThem)
                                    {
                                        var weekdays = (int)item.weekdays.Value;
                                        var AllDaysBetween = DaysBetween(FromOffial, Toofficial);
                                        foreach (var Days in AllDaysBetween)
                                        {
                                            if (Days == weekdays)
                                            {
                                                ALL_FROM_TO_HOLIDAYS -= 1;
                                            }
                                        }
                                    }

                                }
                            }


                        }


                        else
                        {

                            ALL_FROM_TO_HOLIDAYS += 0;
                        }


                        #endregion


                    }

                    else if (officialHolidays.Religion == Religion_Offical_Enum.Muslim)
                    {
                        if (UserReligion == ReligionEnum.Muslim)
                        {
                            var FromOffial = officialHolidays.FromHoliday.Value;
                            var Toofficial = officialHolidays.ToHoliday.Value;


                            #region Check Frome Request

                            //All bothe from DateFromR and DatetoR are inside the FromOffial and Toofficial
                            if (DateFromR.Ticks >= FromOffial.Ticks && DateFromR.Ticks <= Toofficial.Ticks && DatetoR.Ticks >= FromOffial.Ticks && DatetoR.Ticks <= Toofficial.Ticks)
                            {

                                var All_Holidays_Round = CalculateYourVacancies_days(Toofficial, FromOffial);
                                ALL_FROM_TO_HOLIDAYS += All_Holidays_Round; // Agmaly 3dd Ayam el agaza 2lly hstfad biha

                                foreach (var item in OfficialHolidaysRow)
                                {
                                    if (item.weekdays != WeekDaysEnum.Null)
                                    {

                                        if (item.Religion == Religion_Offical_Enum.Muslim)
                                        {
                                            if (UserReligion == ReligionEnum.Muslim)
                                            {
                                                var weekdays = (int)item.weekdays.Value;
                                                var AllDaysBetween = DaysBetween(FromOffial, Toofficial);
                                                foreach (var Days in AllDaysBetween)
                                                {
                                                    if (Days == weekdays)
                                                    {
                                                        ALL_FROM_TO_HOLIDAYS -= 1;
                                                    }
                                                }
                                            }

                                        }

                                    }
                                }

                                //ALL_FROM_TO_HOLIDAYS += 1;

                            }
                            //Hf 23/7 to 26/7      Rf 23/7  t 27/7
                            else if (DateFromR.Ticks >= FromOffial.Ticks && DateFromR.Ticks <= Toofficial.Ticks && DatetoR.Ticks > FromOffial.Ticks && DatetoR.Ticks > Toofficial.Ticks)
                            {
                                var RemaindDays_afterHolidays = CalculateYourVacancies_days(DatetoR, Toofficial);
                                //4                                            -    1
                                ALL_FROM_TO_HOLIDAYS += CalculateYourVacancies_days(DatetoR, DateFromR) - RemaindDays_afterHolidays;

                                foreach (var item in OfficialHolidaysRow)
                                {
                                    if (item.weekdays != WeekDaysEnum.Null)
                                    {

                                        if (item.Religion == Religion_Offical_Enum.Muslim)
                                        {
                                            if (UserReligion == ReligionEnum.Muslim)
                                            {
                                                var weekdays = (int)item.weekdays.Value;
                                                var AllDaysBetween = DaysBetween(FromOffial, Toofficial);
                                                foreach (var Days in AllDaysBetween)
                                                {
                                                    if (Days == weekdays)
                                                    {
                                                        ALL_FROM_TO_HOLIDAYS -= 1;
                                                    }
                                                }
                                            }

                                        }

                                    }
                                }


                                //ALL_FROM_TO_HOLIDAYS += 1;
                            }

                            else if (DateFromR.Ticks < FromOffial.Ticks && DateFromR.Ticks < Toofficial.Ticks && DatetoR.Ticks > FromOffial.Ticks && DatetoR.Ticks > Toofficial.Ticks)
                            {
                                ALL_FROM_TO_HOLIDAYS += CalculateYourVacancies_days(Toofficial, FromOffial);

                                foreach (var item in OfficialHolidaysRow)
                                {
                                    if (item.weekdays != WeekDaysEnum.Null)
                                    {

                                        if (item.Religion == Religion_Offical_Enum.Muslim)
                                        {
                                            if (UserReligion == ReligionEnum.Muslim)
                                            {
                                                var weekdays = (int)item.weekdays.Value;
                                                var AllDaysBetween = DaysBetween(FromOffial, Toofficial);
                                                foreach (var Days in AllDaysBetween)
                                                {
                                                    if (Days == weekdays)
                                                    {
                                                        ALL_FROM_TO_HOLIDAYS -= 1;
                                                    }
                                                }
                                            }

                                        }

                                    }
                                }
                                //ALL_FROM_TO_HOLIDAYS += 1;


                            }


                            else
                            {

                                ALL_FROM_TO_HOLIDAYS += 0;
                            }


                            #endregion

                        }
                    }

                    else if (officialHolidays.Religion == Religion_Offical_Enum.Christian)
                    {
                        if (UserReligion == ReligionEnum.Christian)
                        {
                            var FromOffial = officialHolidays.FromHoliday.Value;
                            var Toofficial = officialHolidays.ToHoliday.Value;

                            #region Check Frome Request

                            //All bothe from DateFromR and DatetoR are inside the FromOffial and Toofficial
                            if (DateFromR.Ticks >= FromOffial.Ticks && DateFromR.Ticks <= Toofficial.Ticks && DatetoR.Ticks >= FromOffial.Ticks && DatetoR.Ticks <= Toofficial.Ticks)
                            {

                                var All_Holidays_Round = CalculateYourVacancies_days(Toofficial, FromOffial);
                                ALL_FROM_TO_HOLIDAYS += All_Holidays_Round; // Agmaly 3dd Ayam el agaza 2lly hstfad biha

                                foreach (var item in OfficialHolidaysRow)
                                {
                                    if (item.weekdays != WeekDaysEnum.Null)
                                    {

                                        if (item.Religion == Religion_Offical_Enum.Christian)
                                        {
                                            if (UserReligion == ReligionEnum.Christian)
                                            {
                                                var weekdays = (int)item.weekdays.Value;
                                                var AllDaysBetween = DaysBetween(FromOffial, Toofficial);
                                                foreach (var Days in AllDaysBetween)
                                                {
                                                    if (Days == weekdays)
                                                    {
                                                        ALL_FROM_TO_HOLIDAYS -= 1;
                                                    }
                                                }
                                            }

                                        }

                                    }
                                }

                                //ALL_FROM_TO_HOLIDAYS += 1;

                            }
                            //Hf 23/7 to 26/7      Rf 23/7  t 27/7
                            else if (DateFromR.Ticks >= FromOffial.Ticks && DateFromR.Ticks <= Toofficial.Ticks && DatetoR.Ticks > FromOffial.Ticks && DatetoR.Ticks > Toofficial.Ticks)
                            {
                                var RemaindDays_afterHolidays = CalculateYourVacancies_days(DatetoR, Toofficial);
                                //4                                            -    1
                                ALL_FROM_TO_HOLIDAYS += CalculateYourVacancies_days(DatetoR, DateFromR) - RemaindDays_afterHolidays;

                                foreach (var item in OfficialHolidaysRow)
                                {
                                    if (item.weekdays != WeekDaysEnum.Null)
                                    {

                                        if (item.Religion == Religion_Offical_Enum.Christian)
                                        {
                                            if (UserReligion == ReligionEnum.Christian)
                                            {
                                                var weekdays = (int)item.weekdays.Value;
                                                var AllDaysBetween = DaysBetween(FromOffial, Toofficial);
                                                foreach (var Days in AllDaysBetween)
                                                {
                                                    if (Days == weekdays)
                                                    {
                                                        ALL_FROM_TO_HOLIDAYS -= 1;
                                                    }
                                                }
                                            }

                                        }

                                    }
                                }


                                //ALL_FROM_TO_HOLIDAYS += 1;
                            }

                            else if (DateFromR.Ticks < FromOffial.Ticks && DateFromR.Ticks < Toofficial.Ticks && DatetoR.Ticks > FromOffial.Ticks && DatetoR.Ticks > Toofficial.Ticks)
                            {
                                ALL_FROM_TO_HOLIDAYS += CalculateYourVacancies_days(Toofficial, FromOffial);

                                foreach (var item in OfficialHolidaysRow)
                                {
                                    if (item.weekdays != WeekDaysEnum.Null)
                                    {

                                        if (item.Religion == Religion_Offical_Enum.Christian)
                                        {
                                            if (UserReligion == ReligionEnum.Christian)
                                            {
                                                var weekdays = (int)item.weekdays.Value;
                                                var AllDaysBetween = DaysBetween(FromOffial, Toofficial);
                                                foreach (var Days in AllDaysBetween)
                                                {
                                                    if (Days == weekdays)
                                                    {
                                                        ALL_FROM_TO_HOLIDAYS -= 1;
                                                    }
                                                }
                                            }

                                        }

                                    }
                                }
                                //ALL_FROM_TO_HOLIDAYS += 1;


                            }

                            else
                            {

                                ALL_FROM_TO_HOLIDAYS += 0;
                            }


                            #endregion

                        }
                    }

                }

                else if (officialHolidays.weekdays != WeekDaysEnum.Null)
                {
                    if (officialHolidays.Religion == Religion_Offical_Enum.AllofThem)
                    {
                        var officialHolidays_weekdays = (int)officialHolidays.weekdays.Value;



                        #region Check Frome Request


                        var AllDaysweekbetweenR = DaysBetween(DateFromR, DatetoR);
                        foreach (var item in AllDaysweekbetweenR)
                        { // شيك لو صادف ان يوم من الي يساوي اجازة الجمعه او السبت مايزودش اليوم
                            if (item == officialHolidays_weekdays)
                            {
                                ALL_FROM_TO_HOLIDAYS += 1;

                            }
                        }



                        #endregion

                    }
                    else if (officialHolidays.Religion == Religion_Offical_Enum.Muslim)
                    {
                        if (UserReligion == ReligionEnum.Muslim)
                        {
                            var officialHolidays_weekdays = (int)officialHolidays.weekdays.Value;



                            #region Check Frome Request


                            var AllDaysweekbetweenR = DaysBetween(DateFromR, DatetoR);
                            foreach (var item in AllDaysweekbetweenR)
                            { // شيك لو صادف ان يوم من الي يساوي اجازة الجمعه او السبت مايزودش اليوم
                                if (item == officialHolidays_weekdays)
                                {
                                    ALL_FROM_TO_HOLIDAYS += 1;

                                }
                            }



                            #endregion
                        }
                    }

                    else if (officialHolidays.Religion == Religion_Offical_Enum.Christian)
                    {
                        if (UserReligion == ReligionEnum.Christian)
                        {
                            var officialHolidays_weekdays = (int)officialHolidays.weekdays.Value;


                            #region Check Frome Request


                            var AllDaysweekbetweenR = DaysBetween(DateFromR, DatetoR);
                            foreach (var item in AllDaysweekbetweenR)
                            { // شيك لو صادف ان يوم من الي يساوي اجازة الجمعه او السبت مايزودش اليوم
                                if (item == officialHolidays_weekdays)
                                {
                                    ALL_FROM_TO_HOLIDAYS += 1;

                                }
                            }



                            #endregion
                        }
                    }
                    //Vacancy_days_requet -= 1;
                }

            }
            #endregion
        }

    }

  
}