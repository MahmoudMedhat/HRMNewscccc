using HRM.AttendanceSheet.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HRM.Methods
{
    public class IdComparer : IEqualityComparer<AttendanceSheetRow>
    {
        public int GetHashCode(AttendanceSheetRow co)
        {
            if (co == null)
            {
                return 0;
            }
            return co.Id.GetHashCode();
        }

        public bool Equals(AttendanceSheetRow x1, AttendanceSheetRow x2)
        {
            if (object.ReferenceEquals(x1, x2))
            {
                return true;
            }
            if (object.ReferenceEquals(x1, null) ||
                object.ReferenceEquals(x2, null))
            {
                return false;
            }
            return x1.Id == x2.Id;
        }
    }
}