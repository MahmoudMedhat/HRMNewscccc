var HRM;
(function (HRM) {
    var Administration;
    (function (Administration) {
        var AllowancesForm = /** @class */ (function (_super) {
            __extends(AllowancesForm, _super);
            function AllowancesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!AllowancesForm.init) {
                    AllowancesForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DecimalEditor;
                    var w2 = s.DateEditor;
                    var w3 = Administration.UserEditor;
                    Q.initFormType(AllowancesForm, [
                        'AllowancesDescriptions', w0,
                        'Allowance', w1,
                        'AllowanceDate', w2,
                        'UserId', w3
                    ]);
                }
                return _this;
            }
            AllowancesForm.formKey = 'Administration.Allowances';
            return AllowancesForm;
        }(Serenity.PrefixedContext));
        Administration.AllowancesForm = AllowancesForm;
    })(Administration = HRM.Administration || (HRM.Administration = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Administration;
    (function (Administration) {
        var AllowancesRow;
        (function (AllowancesRow) {
            AllowancesRow.idProperty = 'Id';
            AllowancesRow.nameProperty = 'AllowancesDescriptions';
            AllowancesRow.localTextPrefix = 'Administration.Allowances';
            AllowancesRow.deletePermission = 'Administration:General';
            AllowancesRow.insertPermission = 'Administration:General';
            AllowancesRow.readPermission = 'Administration:General';
            AllowancesRow.updatePermission = 'Administration:General';
        })(AllowancesRow = Administration.AllowancesRow || (Administration.AllowancesRow = {}));
    })(Administration = HRM.Administration || (HRM.Administration = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Administration;
    (function (Administration) {
        var AllowancesService;
        (function (AllowancesService) {
            AllowancesService.baseUrl = 'Administration/Allowances';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                AllowancesService[x] = function (r, s, o) {
                    return Q.serviceRequest(AllowancesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(AllowancesService = Administration.AllowancesService || (Administration.AllowancesService = {}));
    })(Administration = HRM.Administration || (HRM.Administration = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Administration;
    (function (Administration) {
        var BalanceAccountForm = /** @class */ (function (_super) {
            __extends(BalanceAccountForm, _super);
            function BalanceAccountForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!BalanceAccountForm.init) {
                    BalanceAccountForm.init = true;
                    var s = Serenity;
                    var w0 = s.DateEditor;
                    Q.initFormType(BalanceAccountForm, [
                        'DateBeginn', w0,
                        'DateEnd', w0
                    ]);
                }
                return _this;
            }
            BalanceAccountForm.formKey = 'Administration.BalanceAccount';
            return BalanceAccountForm;
        }(Serenity.PrefixedContext));
        Administration.BalanceAccountForm = BalanceAccountForm;
    })(Administration = HRM.Administration || (HRM.Administration = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Administration;
    (function (Administration) {
        var BalanceAccountRow;
        (function (BalanceAccountRow) {
            BalanceAccountRow.idProperty = 'Id';
            BalanceAccountRow.localTextPrefix = 'Administration.BalanceAccount';
            BalanceAccountRow.deletePermission = 'Administration:General';
            BalanceAccountRow.insertPermission = 'Administration:General';
            BalanceAccountRow.readPermission = 'Administration:General';
            BalanceAccountRow.updatePermission = 'Administration:General';
        })(BalanceAccountRow = Administration.BalanceAccountRow || (Administration.BalanceAccountRow = {}));
    })(Administration = HRM.Administration || (HRM.Administration = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Administration;
    (function (Administration) {
        var BalanceAccountService;
        (function (BalanceAccountService) {
            BalanceAccountService.baseUrl = 'Administration/BalanceAccount';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                BalanceAccountService[x] = function (r, s, o) {
                    return Q.serviceRequest(BalanceAccountService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(BalanceAccountService = Administration.BalanceAccountService || (Administration.BalanceAccountService = {}));
    })(Administration = HRM.Administration || (HRM.Administration = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Administration;
    (function (Administration) {
        var BasicInsurancesForm = /** @class */ (function (_super) {
            __extends(BasicInsurancesForm, _super);
            function BasicInsurancesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!BasicInsurancesForm.init) {
                    BasicInsurancesForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DecimalEditor;
                    var w2 = s.DateEditor;
                    var w3 = Administration.FilterUserEditor;
                    Q.initFormType(BasicInsurancesForm, [
                        'Insurance', w0,
                        'InsurancesQ', w1,
                        'InsuranceDate', w2,
                        'UserId', w3
                    ]);
                }
                return _this;
            }
            BasicInsurancesForm.formKey = 'Administration.BasicInsurances';
            return BasicInsurancesForm;
        }(Serenity.PrefixedContext));
        Administration.BasicInsurancesForm = BasicInsurancesForm;
    })(Administration = HRM.Administration || (HRM.Administration = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Administration;
    (function (Administration) {
        var BasicInsurancesRow;
        (function (BasicInsurancesRow) {
            BasicInsurancesRow.idProperty = 'Id';
            BasicInsurancesRow.nameProperty = 'Insurance';
            BasicInsurancesRow.localTextPrefix = 'Administration.BasicInsurances';
            BasicInsurancesRow.deletePermission = 'Administration:General';
            BasicInsurancesRow.insertPermission = 'Administration:General';
            BasicInsurancesRow.readPermission = 'Administration:General';
            BasicInsurancesRow.updatePermission = 'Administration:General';
        })(BasicInsurancesRow = Administration.BasicInsurancesRow || (Administration.BasicInsurancesRow = {}));
    })(Administration = HRM.Administration || (HRM.Administration = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Administration;
    (function (Administration) {
        var BasicInsurancesService;
        (function (BasicInsurancesService) {
            BasicInsurancesService.baseUrl = 'Administration/BasicInsurances';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                BasicInsurancesService[x] = function (r, s, o) {
                    return Q.serviceRequest(BasicInsurancesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(BasicInsurancesService = Administration.BasicInsurancesService || (Administration.BasicInsurancesService = {}));
    })(Administration = HRM.Administration || (HRM.Administration = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Administration;
    (function (Administration) {
        var EmploeesStatusForm = /** @class */ (function (_super) {
            __extends(EmploeesStatusForm, _super);
            function EmploeesStatusForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!EmploeesStatusForm.init) {
                    EmploeesStatusForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.DateEditor;
                    Q.initFormType(EmploeesStatusForm, [
                        'UserId', w0,
                        'EmpSDate', w1,
                        'EmploymentStatusID', w0
                    ]);
                }
                return _this;
            }
            EmploeesStatusForm.formKey = 'Administration.EmploeesStatus';
            return EmploeesStatusForm;
        }(Serenity.PrefixedContext));
        Administration.EmploeesStatusForm = EmploeesStatusForm;
    })(Administration = HRM.Administration || (HRM.Administration = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Administration;
    (function (Administration) {
        var EmploeesStatusRow;
        (function (EmploeesStatusRow) {
            EmploeesStatusRow.idProperty = 'Id';
            EmploeesStatusRow.localTextPrefix = 'Administration.EmploeesStatus';
            EmploeesStatusRow.deletePermission = 'Administration:General';
            EmploeesStatusRow.insertPermission = 'Administration:General';
            EmploeesStatusRow.readPermission = 'Administration:General';
            EmploeesStatusRow.updatePermission = 'Administration:General';
        })(EmploeesStatusRow = Administration.EmploeesStatusRow || (Administration.EmploeesStatusRow = {}));
    })(Administration = HRM.Administration || (HRM.Administration = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Administration;
    (function (Administration) {
        var EmploeesStatusService;
        (function (EmploeesStatusService) {
            EmploeesStatusService.baseUrl = 'Administration/EmploeesStatus';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                EmploeesStatusService[x] = function (r, s, o) {
                    return Q.serviceRequest(EmploeesStatusService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(EmploeesStatusService = Administration.EmploeesStatusService || (Administration.EmploeesStatusService = {}));
    })(Administration = HRM.Administration || (HRM.Administration = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Administration;
    (function (Administration) {
        var FinancialyearForm = /** @class */ (function (_super) {
            __extends(FinancialyearForm, _super);
            function FinancialyearForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!FinancialyearForm.init) {
                    FinancialyearForm.init = true;
                    var s = Serenity;
                    var w0 = s.DateEditor;
                    var w1 = s.BooleanEditor;
                    Q.initFormType(FinancialyearForm, [
                        'DateFrom', w0,
                        'DateTo', w0,
                        'Status', w1
                    ]);
                }
                return _this;
            }
            FinancialyearForm.formKey = 'Administration.Financialyear';
            return FinancialyearForm;
        }(Serenity.PrefixedContext));
        Administration.FinancialyearForm = FinancialyearForm;
    })(Administration = HRM.Administration || (HRM.Administration = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Administration;
    (function (Administration) {
        var FinancialyearRow;
        (function (FinancialyearRow) {
            FinancialyearRow.idProperty = 'Id';
            FinancialyearRow.localTextPrefix = 'Administration.Financialyear';
            FinancialyearRow.deletePermission = 'Administration:General';
            FinancialyearRow.insertPermission = 'Administration:General';
            FinancialyearRow.readPermission = 'Administration:General';
            FinancialyearRow.updatePermission = 'Administration:General';
        })(FinancialyearRow = Administration.FinancialyearRow || (Administration.FinancialyearRow = {}));
    })(Administration = HRM.Administration || (HRM.Administration = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Administration;
    (function (Administration) {
        var FinancialyearService;
        (function (FinancialyearService) {
            FinancialyearService.baseUrl = 'Administration/Financialyear';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                FinancialyearService[x] = function (r, s, o) {
                    return Q.serviceRequest(FinancialyearService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(FinancialyearService = Administration.FinancialyearService || (Administration.FinancialyearService = {}));
    })(Administration = HRM.Administration || (HRM.Administration = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Administration;
    (function (Administration) {
        var LanguageForm = /** @class */ (function (_super) {
            __extends(LanguageForm, _super);
            function LanguageForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LanguageForm.init) {
                    LanguageForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(LanguageForm, [
                        'LanguageId', w0,
                        'LanguageName', w0
                    ]);
                }
                return _this;
            }
            LanguageForm.formKey = 'Administration.Language';
            return LanguageForm;
        }(Serenity.PrefixedContext));
        Administration.LanguageForm = LanguageForm;
    })(Administration = HRM.Administration || (HRM.Administration = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Administration;
    (function (Administration) {
        var LanguageRow;
        (function (LanguageRow) {
            LanguageRow.idProperty = 'Id';
            LanguageRow.nameProperty = 'LanguageName';
            LanguageRow.localTextPrefix = 'Administration.Language';
            LanguageRow.lookupKey = 'Administration.Language';
            function getLookup() {
                return Q.getLookup('Administration.Language');
            }
            LanguageRow.getLookup = getLookup;
            LanguageRow.deletePermission = 'Administration:Translation';
            LanguageRow.insertPermission = 'Administration:Translation';
            LanguageRow.readPermission = 'Administration:Translation';
            LanguageRow.updatePermission = 'Administration:Translation';
        })(LanguageRow = Administration.LanguageRow || (Administration.LanguageRow = {}));
    })(Administration = HRM.Administration || (HRM.Administration = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Administration;
    (function (Administration) {
        var LanguageService;
        (function (LanguageService) {
            LanguageService.baseUrl = 'Administration/Language';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LanguageService[x] = function (r, s, o) {
                    return Q.serviceRequest(LanguageService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LanguageService = Administration.LanguageService || (Administration.LanguageService = {}));
    })(Administration = HRM.Administration || (HRM.Administration = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Administration;
    (function (Administration) {
        var OfficialHolidaysForm = /** @class */ (function (_super) {
            __extends(OfficialHolidaysForm, _super);
            function OfficialHolidaysForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!OfficialHolidaysForm.init) {
                    OfficialHolidaysForm.init = true;
                    var s = Serenity;
                    var w0 = s.DateEditor;
                    var w1 = s.TextAreaEditor;
                    var w2 = s.EnumEditor;
                    Q.initFormType(OfficialHolidaysForm, [
                        'FromHoliday', w0,
                        'ToHoliday', w0,
                        'TheReasonOfHoliday', w1,
                        'weekdays', w2,
                        'Religion', w2
                    ]);
                }
                return _this;
            }
            OfficialHolidaysForm.formKey = 'Administration.OfficialHolidays';
            return OfficialHolidaysForm;
        }(Serenity.PrefixedContext));
        Administration.OfficialHolidaysForm = OfficialHolidaysForm;
    })(Administration = HRM.Administration || (HRM.Administration = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Administration;
    (function (Administration) {
        var OfficialHolidaysRow;
        (function (OfficialHolidaysRow) {
            OfficialHolidaysRow.idProperty = 'Id';
            OfficialHolidaysRow.nameProperty = 'TheReasonOfHoliday';
            OfficialHolidaysRow.localTextPrefix = 'Administration.OfficialHolidays';
            OfficialHolidaysRow.deletePermission = 'Administration:General';
            OfficialHolidaysRow.insertPermission = 'Administration:General';
            OfficialHolidaysRow.readPermission = 'Administration:General';
            OfficialHolidaysRow.updatePermission = 'Administration:General';
        })(OfficialHolidaysRow = Administration.OfficialHolidaysRow || (Administration.OfficialHolidaysRow = {}));
    })(Administration = HRM.Administration || (HRM.Administration = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Administration;
    (function (Administration) {
        var OfficialHolidaysService;
        (function (OfficialHolidaysService) {
            OfficialHolidaysService.baseUrl = 'Administration/OfficialHolidays';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                OfficialHolidaysService[x] = function (r, s, o) {
                    return Q.serviceRequest(OfficialHolidaysService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(OfficialHolidaysService = Administration.OfficialHolidaysService || (Administration.OfficialHolidaysService = {}));
    })(Administration = HRM.Administration || (HRM.Administration = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Administration;
    (function (Administration) {
    })(Administration = HRM.Administration || (HRM.Administration = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Administration;
    (function (Administration) {
        var RoleForm = /** @class */ (function (_super) {
            __extends(RoleForm, _super);
            function RoleForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!RoleForm.init) {
                    RoleForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(RoleForm, [
                        'RoleName', w0
                    ]);
                }
                return _this;
            }
            RoleForm.formKey = 'Administration.Role';
            return RoleForm;
        }(Serenity.PrefixedContext));
        Administration.RoleForm = RoleForm;
    })(Administration = HRM.Administration || (HRM.Administration = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Administration;
    (function (Administration) {
        var RolePermissionRow;
        (function (RolePermissionRow) {
            RolePermissionRow.idProperty = 'RolePermissionId';
            RolePermissionRow.nameProperty = 'PermissionKey';
            RolePermissionRow.localTextPrefix = 'Administration.RolePermission';
            RolePermissionRow.deletePermission = 'Administration:Security';
            RolePermissionRow.insertPermission = 'Administration:Security';
            RolePermissionRow.readPermission = 'Administration:Security';
            RolePermissionRow.updatePermission = 'Administration:Security';
        })(RolePermissionRow = Administration.RolePermissionRow || (Administration.RolePermissionRow = {}));
    })(Administration = HRM.Administration || (HRM.Administration = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Administration;
    (function (Administration) {
        var RolePermissionService;
        (function (RolePermissionService) {
            RolePermissionService.baseUrl = 'Administration/RolePermission';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                RolePermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(RolePermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RolePermissionService = Administration.RolePermissionService || (Administration.RolePermissionService = {}));
    })(Administration = HRM.Administration || (HRM.Administration = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Administration;
    (function (Administration) {
        var RoleRow;
        (function (RoleRow) {
            RoleRow.idProperty = 'RoleId';
            RoleRow.nameProperty = 'RoleName';
            RoleRow.localTextPrefix = 'Administration.Role';
            RoleRow.lookupKey = 'Administration.Role';
            function getLookup() {
                return Q.getLookup('Administration.Role');
            }
            RoleRow.getLookup = getLookup;
            RoleRow.deletePermission = 'Administration:Security';
            RoleRow.insertPermission = 'Administration:Security';
            RoleRow.readPermission = 'Administration:Security';
            RoleRow.updatePermission = 'Administration:Security';
        })(RoleRow = Administration.RoleRow || (Administration.RoleRow = {}));
    })(Administration = HRM.Administration || (HRM.Administration = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Administration;
    (function (Administration) {
        var RoleService;
        (function (RoleService) {
            RoleService.baseUrl = 'Administration/Role';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                RoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(RoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RoleService = Administration.RoleService || (Administration.RoleService = {}));
    })(Administration = HRM.Administration || (HRM.Administration = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Administration;
    (function (Administration) {
        var TranslationService;
        (function (TranslationService) {
            TranslationService.baseUrl = 'Administration/Translation';
            [
                'List',
                'Update'
            ].forEach(function (x) {
                TranslationService[x] = function (r, s, o) {
                    return Q.serviceRequest(TranslationService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TranslationService = Administration.TranslationService || (Administration.TranslationService = {}));
    })(Administration = HRM.Administration || (HRM.Administration = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Administration;
    (function (Administration) {
        var UserForm = /** @class */ (function (_super) {
            __extends(UserForm, _super);
            function UserForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!UserForm.init) {
                    UserForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.EmailEditor;
                    var w3 = s.ImageUploadEditor;
                    var w4 = s.PasswordEditor;
                    var w5 = s.DateEditor;
                    var w6 = s.EnumEditor;
                    var w7 = Administration.FilterUserEditor;
                    var w8 = s.LookupEditor;
                    var w9 = s.DecimalEditor;
                    var w10 = s.DateTimeEditor;
                    var w11 = Administration.UserVanciesLimitEditor;
                    var w12 = Administration.AllowancesEditor;
                    var w13 = Administration.BasicInsuranceEditor;
                    Q.initFormType(UserForm, [
                        'UserId', w0,
                        'Username', w1,
                        'DisplayName', w1,
                        'FingerPrintCode', w1,
                        'Email', w2,
                        'UserImage', w3,
                        'Password', w4,
                        'PasswordConfirm', w4,
                        'EducationalQualification', w1,
                        'GraduationYears', w5,
                        'MilitaryStatus', w1,
                        'Birthdate', w5,
                        'Personalidentification', w0,
                        'Religion', w6,
                        'PersonalPhoneNumber', w0,
                        'Address', w1,
                        'Source', w1,
                        'HireDate', w5,
                        'MangerID', w7,
                        'JobID', w8,
                        'Balance', w9,
                        'Status', w8,
                        'IsActive', w0,
                        'AttendanceDate', w10,
                        'Departuredate', w10,
                        'UserVacanciesLimit', w11,
                        'AlowancesList', w12,
                        'InsuranceList', w13
                    ]);
                }
                return _this;
            }
            UserForm.formKey = 'Administration.User';
            return UserForm;
        }(Serenity.PrefixedContext));
        Administration.UserForm = UserForm;
    })(Administration = HRM.Administration || (HRM.Administration = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Administration;
    (function (Administration) {
        var UserPermissionRow;
        (function (UserPermissionRow) {
            UserPermissionRow.idProperty = 'UserPermissionId';
            UserPermissionRow.nameProperty = 'PermissionKey';
            UserPermissionRow.localTextPrefix = 'Administration.UserPermission';
            UserPermissionRow.deletePermission = 'Administration:Security';
            UserPermissionRow.insertPermission = 'Administration:Security';
            UserPermissionRow.readPermission = 'Administration:Security';
            UserPermissionRow.updatePermission = 'Administration:Security';
        })(UserPermissionRow = Administration.UserPermissionRow || (Administration.UserPermissionRow = {}));
    })(Administration = HRM.Administration || (HRM.Administration = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Administration;
    (function (Administration) {
        var UserPermissionService;
        (function (UserPermissionService) {
            UserPermissionService.baseUrl = 'Administration/UserPermission';
            [
                'Update',
                'List',
                'ListRolePermissions',
                'ListPermissionKeys'
            ].forEach(function (x) {
                UserPermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPermissionService = Administration.UserPermissionService || (Administration.UserPermissionService = {}));
    })(Administration = HRM.Administration || (HRM.Administration = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Administration;
    (function (Administration) {
        var UserRoleRow;
        (function (UserRoleRow) {
            UserRoleRow.idProperty = 'UserRoleId';
            UserRoleRow.localTextPrefix = 'Administration.UserRole';
            UserRoleRow.deletePermission = 'Administration:Security';
            UserRoleRow.insertPermission = 'Administration:Security';
            UserRoleRow.readPermission = 'Administration:Security';
            UserRoleRow.updatePermission = 'Administration:Security';
        })(UserRoleRow = Administration.UserRoleRow || (Administration.UserRoleRow = {}));
    })(Administration = HRM.Administration || (HRM.Administration = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Administration;
    (function (Administration) {
        var UserRoleService;
        (function (UserRoleService) {
            UserRoleService.baseUrl = 'Administration/UserRole';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                UserRoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserRoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserRoleService = Administration.UserRoleService || (Administration.UserRoleService = {}));
    })(Administration = HRM.Administration || (HRM.Administration = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Administration;
    (function (Administration) {
        var UserRow;
        (function (UserRow) {
            UserRow.idProperty = 'UserId';
            UserRow.isActiveProperty = 'IsActive';
            UserRow.nameProperty = 'Username';
            UserRow.localTextPrefix = 'Administration.User';
            UserRow.lookupKey = 'Administration.User';
            function getLookup() {
                return Q.getLookup('Administration.User');
            }
            UserRow.getLookup = getLookup;
            UserRow.deletePermission = 'Administration:Security';
            UserRow.insertPermission = 'Administration:Security';
            UserRow.readPermission = 'Administration:Security';
            UserRow.updatePermission = 'Administration:Security';
        })(UserRow = Administration.UserRow || (Administration.UserRow = {}));
    })(Administration = HRM.Administration || (HRM.Administration = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Administration;
    (function (Administration) {
        var UserService;
        (function (UserService) {
            UserService.baseUrl = 'Administration/User';
            [
                'Create',
                'Update',
                'Delete',
                'Undelete',
                'Retrieve'
            ].forEach(function (x) {
                UserService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserService = Administration.UserService || (Administration.UserService = {}));
    })(Administration = HRM.Administration || (HRM.Administration = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Administration;
    (function (Administration) {
        var UserStatusEnum;
        (function (UserStatusEnum) {
            UserStatusEnum[UserStatusEnum["Employee"] = 1] = "Employee";
            UserStatusEnum[UserStatusEnum["Resignation"] = 2] = "Resignation";
            UserStatusEnum[UserStatusEnum["Died"] = 3] = "Died";
        })(UserStatusEnum = Administration.UserStatusEnum || (Administration.UserStatusEnum = {}));
        Serenity.Decorators.registerEnumType(UserStatusEnum, 'HRM.Administration.UserStatusEnum', 'Administration.UserStatusEnum');
    })(Administration = HRM.Administration || (HRM.Administration = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Administration;
    (function (Administration) {
        var UserVacanciesLimitForm = /** @class */ (function (_super) {
            __extends(UserVacanciesLimitForm, _super);
            function UserVacanciesLimitForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!UserVacanciesLimitForm.init) {
                    UserVacanciesLimitForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.IntegerEditor;
                    Q.initFormType(UserVacanciesLimitForm, [
                        'VacancyId', w0,
                        'Limit', w1
                    ]);
                }
                return _this;
            }
            UserVacanciesLimitForm.formKey = 'Administration.UserVacanciesLimit';
            return UserVacanciesLimitForm;
        }(Serenity.PrefixedContext));
        Administration.UserVacanciesLimitForm = UserVacanciesLimitForm;
    })(Administration = HRM.Administration || (HRM.Administration = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Administration;
    (function (Administration) {
        var UserVacanciesLimitRow;
        (function (UserVacanciesLimitRow) {
            UserVacanciesLimitRow.idProperty = 'Id';
            UserVacanciesLimitRow.localTextPrefix = 'Administration.UserVacanciesLimit';
            UserVacanciesLimitRow.deletePermission = 'Administration:General';
            UserVacanciesLimitRow.insertPermission = 'Administration:General';
            UserVacanciesLimitRow.readPermission = 'Administration:General';
            UserVacanciesLimitRow.updatePermission = 'Administration:General';
        })(UserVacanciesLimitRow = Administration.UserVacanciesLimitRow || (Administration.UserVacanciesLimitRow = {}));
    })(Administration = HRM.Administration || (HRM.Administration = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Administration;
    (function (Administration) {
        var UserVacanciesLimitService;
        (function (UserVacanciesLimitService) {
            UserVacanciesLimitService.baseUrl = 'Administration/UserVacanciesLimit';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                UserVacanciesLimitService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserVacanciesLimitService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserVacanciesLimitService = Administration.UserVacanciesLimitService || (Administration.UserVacanciesLimitService = {}));
    })(Administration = HRM.Administration || (HRM.Administration = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var AttendanceSheet;
    (function (AttendanceSheet) {
        var AttendanceSheetForm = /** @class */ (function (_super) {
            __extends(AttendanceSheetForm, _super);
            function AttendanceSheetForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!AttendanceSheetForm.init) {
                    AttendanceSheetForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EnumEditor;
                    var w2 = s.DateEditor;
                    Q.initFormType(AttendanceSheetForm, [
                        'EmployeeName', w0,
                        'Email', w0,
                        'Status_Out', w1,
                        'Remark_Out', w0,
                        'Status_In', w1,
                        'Remarks', w0,
                        'AttendanceDate', w2,
                        'Reason', w0
                    ]);
                }
                return _this;
            }
            AttendanceSheetForm.formKey = 'AttendanceSheet.AttendanceSheet';
            return AttendanceSheetForm;
        }(Serenity.PrefixedContext));
        AttendanceSheet.AttendanceSheetForm = AttendanceSheetForm;
    })(AttendanceSheet = HRM.AttendanceSheet || (HRM.AttendanceSheet = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var AttendanceSheet;
    (function (AttendanceSheet) {
        var AttendanceSheetRow;
        (function (AttendanceSheetRow) {
            AttendanceSheetRow.idProperty = 'Id';
            AttendanceSheetRow.nameProperty = 'EmployeeName';
            AttendanceSheetRow.localTextPrefix = 'AttendanceSheet.AttendanceSheet';
            AttendanceSheetRow.deletePermission = 'Administration:General';
            AttendanceSheetRow.insertPermission = 'Administration:General';
            AttendanceSheetRow.readPermission = 'Administration:General';
            AttendanceSheetRow.updatePermission = 'Administration:General';
        })(AttendanceSheetRow = AttendanceSheet.AttendanceSheetRow || (AttendanceSheet.AttendanceSheetRow = {}));
    })(AttendanceSheet = HRM.AttendanceSheet || (HRM.AttendanceSheet = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var AttendanceSheet;
    (function (AttendanceSheet) {
        var AttendanceSheetService;
        (function (AttendanceSheetService) {
            AttendanceSheetService.baseUrl = 'AttendanceSheet/AttendanceSheet';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                AttendanceSheetService[x] = function (r, s, o) {
                    return Q.serviceRequest(AttendanceSheetService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(AttendanceSheetService = AttendanceSheet.AttendanceSheetService || (AttendanceSheet.AttendanceSheetService = {}));
    })(AttendanceSheet = HRM.AttendanceSheet || (HRM.AttendanceSheet = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var AttendanceSheet;
    (function (AttendanceSheet) {
        var LeaveForm = /** @class */ (function (_super) {
            __extends(LeaveForm, _super);
            function LeaveForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LeaveForm.init) {
                    LeaveForm.init = true;
                    var s = Serenity;
                    var w0 = s.DateEditor;
                    var w1 = s.StringEditor;
                    Q.initFormType(LeaveForm, [
                        'Date', w0,
                        'FingerPrint', w1,
                        'CheckIn', w0,
                        'CheckOut', w0,
                        'IpAddress', w1,
                        'Device', w1
                    ]);
                }
                return _this;
            }
            LeaveForm.formKey = 'AttendanceSheet.Leave';
            return LeaveForm;
        }(Serenity.PrefixedContext));
        AttendanceSheet.LeaveForm = LeaveForm;
    })(AttendanceSheet = HRM.AttendanceSheet || (HRM.AttendanceSheet = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var AttendanceSheet;
    (function (AttendanceSheet) {
        var LeaveRow;
        (function (LeaveRow) {
            LeaveRow.idProperty = 'Id';
            LeaveRow.nameProperty = 'FingerPrint';
            LeaveRow.localTextPrefix = 'AttendanceSheet.Leave';
            LeaveRow.deletePermission = 'Administration:General';
            LeaveRow.insertPermission = 'Administration:General';
            LeaveRow.readPermission = 'Administration:General';
            LeaveRow.updatePermission = 'Administration:General';
        })(LeaveRow = AttendanceSheet.LeaveRow || (AttendanceSheet.LeaveRow = {}));
    })(AttendanceSheet = HRM.AttendanceSheet || (HRM.AttendanceSheet = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var AttendanceSheet;
    (function (AttendanceSheet) {
        var LeaveService;
        (function (LeaveService) {
            LeaveService.baseUrl = 'AttendanceSheet/Leave';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LeaveService[x] = function (r, s, o) {
                    return Q.serviceRequest(LeaveService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LeaveService = AttendanceSheet.LeaveService || (AttendanceSheet.LeaveService = {}));
    })(AttendanceSheet = HRM.AttendanceSheet || (HRM.AttendanceSheet = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Common;
    (function (Common) {
        var UserPreferenceRow;
        (function (UserPreferenceRow) {
            UserPreferenceRow.idProperty = 'UserPreferenceId';
            UserPreferenceRow.nameProperty = 'Name';
            UserPreferenceRow.localTextPrefix = 'Common.UserPreference';
            UserPreferenceRow.deletePermission = '';
            UserPreferenceRow.insertPermission = '';
            UserPreferenceRow.readPermission = '';
            UserPreferenceRow.updatePermission = '';
        })(UserPreferenceRow = Common.UserPreferenceRow || (Common.UserPreferenceRow = {}));
    })(Common = HRM.Common || (HRM.Common = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Common;
    (function (Common) {
        var UserPreferenceService;
        (function (UserPreferenceService) {
            UserPreferenceService.baseUrl = 'Common/UserPreference';
            [
                'Update',
                'Retrieve'
            ].forEach(function (x) {
                UserPreferenceService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPreferenceService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPreferenceService = Common.UserPreferenceService || (Common.UserPreferenceService = {}));
    })(Common = HRM.Common || (HRM.Common = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Default;
    (function (Default) {
        var EmploymentStatusForm = /** @class */ (function (_super) {
            __extends(EmploymentStatusForm, _super);
            function EmploymentStatusForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!EmploymentStatusForm.init) {
                    EmploymentStatusForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(EmploymentStatusForm, [
                        'Status', w0
                    ]);
                }
                return _this;
            }
            EmploymentStatusForm.formKey = 'Default.EmploymentStatus';
            return EmploymentStatusForm;
        }(Serenity.PrefixedContext));
        Default.EmploymentStatusForm = EmploymentStatusForm;
    })(Default = HRM.Default || (HRM.Default = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Default;
    (function (Default) {
        var EmploymentStatusRow;
        (function (EmploymentStatusRow) {
            EmploymentStatusRow.idProperty = 'Id';
            EmploymentStatusRow.nameProperty = 'Status';
            EmploymentStatusRow.localTextPrefix = 'Default.EmploymentStatus';
            EmploymentStatusRow.lookupKey = 'Default.EmploymentStatus';
            function getLookup() {
                return Q.getLookup('Default.EmploymentStatus');
            }
            EmploymentStatusRow.getLookup = getLookup;
            EmploymentStatusRow.deletePermission = 'Administration:General';
            EmploymentStatusRow.insertPermission = 'Administration:General';
            EmploymentStatusRow.readPermission = 'Administration:General';
            EmploymentStatusRow.updatePermission = 'Administration:General';
        })(EmploymentStatusRow = Default.EmploymentStatusRow || (Default.EmploymentStatusRow = {}));
    })(Default = HRM.Default || (HRM.Default = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Default;
    (function (Default) {
        var EmploymentStatusService;
        (function (EmploymentStatusService) {
            EmploymentStatusService.baseUrl = 'Default/EmploymentStatus';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                EmploymentStatusService[x] = function (r, s, o) {
                    return Q.serviceRequest(EmploymentStatusService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(EmploymentStatusService = Default.EmploymentStatusService || (Default.EmploymentStatusService = {}));
    })(Default = HRM.Default || (HRM.Default = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Employees;
    (function (Employees) {
        var AcceptedHREnum;
        (function (AcceptedHREnum) {
            AcceptedHREnum[AcceptedHREnum["pending"] = 0] = "pending";
            AcceptedHREnum[AcceptedHREnum["Approved"] = 1] = "Approved";
            AcceptedHREnum[AcceptedHREnum["refused"] = 2] = "refused";
        })(AcceptedHREnum = Employees.AcceptedHREnum || (Employees.AcceptedHREnum = {}));
        Serenity.Decorators.registerEnumType(AcceptedHREnum, 'HRM.Employees.AcceptedHREnum', 'Employees.AcceptedHREnum');
    })(Employees = HRM.Employees || (HRM.Employees = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Employees;
    (function (Employees) {
        var DeparetementsForm = /** @class */ (function (_super) {
            __extends(DeparetementsForm, _super);
            function DeparetementsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!DeparetementsForm.init) {
                    DeparetementsForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(DeparetementsForm, [
                        'Departement', w0
                    ]);
                }
                return _this;
            }
            DeparetementsForm.formKey = 'Employees.Deparetements';
            return DeparetementsForm;
        }(Serenity.PrefixedContext));
        Employees.DeparetementsForm = DeparetementsForm;
    })(Employees = HRM.Employees || (HRM.Employees = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Employees;
    (function (Employees) {
        var DeparetementsRow;
        (function (DeparetementsRow) {
            DeparetementsRow.idProperty = 'Id';
            DeparetementsRow.nameProperty = 'Departement';
            DeparetementsRow.localTextPrefix = 'Employees.Deparetements';
            DeparetementsRow.deletePermission = 'Administration:General';
            DeparetementsRow.insertPermission = 'Administration:General';
            DeparetementsRow.readPermission = 'Administration:General';
            DeparetementsRow.updatePermission = 'Administration:General';
        })(DeparetementsRow = Employees.DeparetementsRow || (Employees.DeparetementsRow = {}));
    })(Employees = HRM.Employees || (HRM.Employees = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Employees;
    (function (Employees) {
        var DeparetementsService;
        (function (DeparetementsService) {
            DeparetementsService.baseUrl = 'Employees/Deparetements';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                DeparetementsService[x] = function (r, s, o) {
                    return Q.serviceRequest(DeparetementsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(DeparetementsService = Employees.DeparetementsService || (Employees.DeparetementsService = {}));
    })(Employees = HRM.Employees || (HRM.Employees = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Employees;
    (function (Employees) {
        var Duration;
        (function (Duration) {
            Duration[Duration["Monthly"] = 0] = "Monthly";
            Duration[Duration["yearly"] = 1] = "yearly";
        })(Duration = Employees.Duration || (Employees.Duration = {}));
        Serenity.Decorators.registerEnumType(Duration, 'HRM.Employees.Duration', 'Employees.VacancyEnum');
    })(Employees = HRM.Employees || (HRM.Employees = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Employees;
    (function (Employees_1) {
    })(Employees = HRM.Employees || (HRM.Employees = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Employees;
    (function (Employees) {
        var JobsForm = /** @class */ (function (_super) {
            __extends(JobsForm, _super);
            function JobsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!JobsForm.init) {
                    JobsForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.IntegerEditor;
                    Q.initFormType(JobsForm, [
                        'Jobtitle', w0,
                        'DepartementId', w1
                    ]);
                }
                return _this;
            }
            JobsForm.formKey = 'Employees.Jobs';
            return JobsForm;
        }(Serenity.PrefixedContext));
        Employees.JobsForm = JobsForm;
    })(Employees = HRM.Employees || (HRM.Employees = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Employees;
    (function (Employees) {
        var JobsRow;
        (function (JobsRow) {
            JobsRow.idProperty = 'Id';
            JobsRow.nameProperty = 'Jobtitle';
            JobsRow.localTextPrefix = 'Employees.Jobs';
            JobsRow.lookupKey = 'Employees.Jobs';
            function getLookup() {
                return Q.getLookup('Employees.Jobs');
            }
            JobsRow.getLookup = getLookup;
            JobsRow.deletePermission = 'Employees:Jobs';
            JobsRow.insertPermission = 'Employees:Jobs';
            JobsRow.readPermission = 'Employees:Jobs';
            JobsRow.updatePermission = 'Employees:Jobs';
        })(JobsRow = Employees.JobsRow || (Employees.JobsRow = {}));
    })(Employees = HRM.Employees || (HRM.Employees = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Employees;
    (function (Employees) {
        var JobsService;
        (function (JobsService) {
            JobsService.baseUrl = 'Employees/Jobs';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                JobsService[x] = function (r, s, o) {
                    return Q.serviceRequest(JobsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(JobsService = Employees.JobsService || (Employees.JobsService = {}));
    })(Employees = HRM.Employees || (HRM.Employees = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Employees;
    (function (Employees) {
        var PermissionRequestsForm = /** @class */ (function (_super) {
            __extends(PermissionRequestsForm, _super);
            function PermissionRequestsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!PermissionRequestsForm.init) {
                    PermissionRequestsForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.LookupEditor;
                    var w2 = s.DateEditor;
                    var w3 = s.DateTimeEditor;
                    Q.initFormType(PermissionRequestsForm, [
                        'UserId', w0,
                        'PermissionId', w1,
                        'StatusId', w0,
                        'IsAcceptedbyHr', w0,
                        'Date', w2,
                        'DateFrom', w3,
                        'Dateto', w3
                    ]);
                }
                return _this;
            }
            PermissionRequestsForm.formKey = 'Employees.PermissionRequests';
            return PermissionRequestsForm;
        }(Serenity.PrefixedContext));
        Employees.PermissionRequestsForm = PermissionRequestsForm;
    })(Employees = HRM.Employees || (HRM.Employees = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Employees;
    (function (Employees) {
        var PermissionRequestsRow;
        (function (PermissionRequestsRow) {
            PermissionRequestsRow.idProperty = 'Id';
            PermissionRequestsRow.localTextPrefix = 'Employees.PermissionRequests';
            PermissionRequestsRow.deletePermission = 'Administration:General';
            PermissionRequestsRow.insertPermission = 'Administration:General';
            PermissionRequestsRow.readPermission = 'Administration:General';
            PermissionRequestsRow.updatePermission = 'Administration:General';
        })(PermissionRequestsRow = Employees.PermissionRequestsRow || (Employees.PermissionRequestsRow = {}));
    })(Employees = HRM.Employees || (HRM.Employees = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Employees;
    (function (Employees) {
        var PermissionRequestsService;
        (function (PermissionRequestsService) {
            PermissionRequestsService.baseUrl = 'Employees/PermissionRequests';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                PermissionRequestsService[x] = function (r, s, o) {
                    return Q.serviceRequest(PermissionRequestsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(PermissionRequestsService = Employees.PermissionRequestsService || (Employees.PermissionRequestsService = {}));
    })(Employees = HRM.Employees || (HRM.Employees = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Employees;
    (function (Employees) {
        var Sending;
        (function (Sending) {
            Sending[Sending["Norelay"] = 0] = "Norelay";
            Sending[Sending["relay"] = 1] = "relay";
        })(Sending = Employees.Sending || (Employees.Sending = {}));
        Serenity.Decorators.registerEnumType(Sending, 'HRM.Employees.Sending', 'Employees.Sending');
    })(Employees = HRM.Employees || (HRM.Employees = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Employees;
    (function (Employees) {
        var StatusForm = /** @class */ (function (_super) {
            __extends(StatusForm, _super);
            function StatusForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!StatusForm.init) {
                    StatusForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(StatusForm, [
                        'StatusName', w0
                    ]);
                }
                return _this;
            }
            StatusForm.formKey = 'Employees.Status';
            return StatusForm;
        }(Serenity.PrefixedContext));
        Employees.StatusForm = StatusForm;
    })(Employees = HRM.Employees || (HRM.Employees = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Employees;
    (function (Employees) {
        var StatusRow;
        (function (StatusRow) {
            StatusRow.idProperty = 'Id';
            StatusRow.nameProperty = 'StatusName';
            StatusRow.localTextPrefix = 'Employees.Status';
            StatusRow.lookupKey = 'Employees.Status';
            function getLookup() {
                return Q.getLookup('Employees.Status');
            }
            StatusRow.getLookup = getLookup;
            StatusRow.deletePermission = 'Administration:General';
            StatusRow.insertPermission = 'Administration:General';
            StatusRow.readPermission = 'Administration:General';
            StatusRow.updatePermission = 'Administration:General';
        })(StatusRow = Employees.StatusRow || (Employees.StatusRow = {}));
    })(Employees = HRM.Employees || (HRM.Employees = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Employees;
    (function (Employees) {
        var StatusService;
        (function (StatusService) {
            StatusService.baseUrl = 'Employees/Status';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                StatusService[x] = function (r, s, o) {
                    return Q.serviceRequest(StatusService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(StatusService = Employees.StatusService || (Employees.StatusService = {}));
    })(Employees = HRM.Employees || (HRM.Employees = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Employees;
    (function (Employees) {
        var UsersForm = /** @class */ (function (_super) {
            __extends(UsersForm, _super);
            function UsersForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!UsersForm.init) {
                    UsersForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailEditor;
                    var w2 = s.ImageUploadEditor;
                    var w3 = s.PasswordEditor;
                    var w4 = s.DateEditor;
                    var w5 = s.IntegerEditor;
                    var w6 = s.LookupEditor;
                    var w7 = s.DecimalEditor;
                    Q.initFormType(UsersForm, [
                        'Username', w0,
                        'DisplayName', w0,
                        'Email', w1,
                        'UserImage', w2,
                        'Password', w3,
                        'PasswordConfirm', w3,
                        'EducationalQualification', w0,
                        'GraduationYears', w4,
                        'MilitaryStatus', w0,
                        'Birthdate', w4,
                        'Personalidentification', w5,
                        'PersonalPhoneNumber', w5,
                        'Address', w0,
                        'Source', w0,
                        'FingerPrintCode', w0,
                        'HireDate', w4,
                        'MangerID', w6,
                        'JobId', w6,
                        'BaseSalary', w7,
                        'AllowanceDescriptions', w0,
                        'Allowance', w7,
                        'Insurance', w0,
                        'insurancesQ', w7,
                        'AttendanceDate', w4,
                        'Departuredate', w4,
                        'CasualVacancy', w5,
                        'Regularvacation', w5,
                        'AnnualLeave', w5
                    ]);
                }
                return _this;
            }
            UsersForm.formKey = 'Employees.Users';
            return UsersForm;
        }(Serenity.PrefixedContext));
        Employees.UsersForm = UsersForm;
    })(Employees = HRM.Employees || (HRM.Employees = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Employees;
    (function (Employees) {
        var UsersRow;
        (function (UsersRow) {
            UsersRow.idProperty = 'UserId';
            UsersRow.nameProperty = 'Username';
            UsersRow.localTextPrefix = 'Employees.Users';
            UsersRow.lookupKey = 'Users';
            function getLookup() {
                return Q.getLookup('Users');
            }
            UsersRow.getLookup = getLookup;
            UsersRow.deletePermission = 'Employees:Users:Modify';
            UsersRow.insertPermission = 'Employees:Users:Modify';
            UsersRow.readPermission = 'Employees:Users:Modify';
            UsersRow.updatePermission = 'Employees:Users:Modify';
        })(UsersRow = Employees.UsersRow || (Employees.UsersRow = {}));
    })(Employees = HRM.Employees || (HRM.Employees = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Employees;
    (function (Employees) {
        var UsersService;
        (function (UsersService) {
            UsersService.baseUrl = 'Employees/Users';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                UsersService[x] = function (r, s, o) {
                    return Q.serviceRequest(UsersService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UsersService = Employees.UsersService || (Employees.UsersService = {}));
    })(Employees = HRM.Employees || (HRM.Employees = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Employees;
    (function (Employees) {
        var VacanciesForm = /** @class */ (function (_super) {
            __extends(VacanciesForm, _super);
            function VacanciesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!VacanciesForm.init) {
                    VacanciesForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(VacanciesForm, [
                        'Vacancy', w0
                    ]);
                }
                return _this;
            }
            VacanciesForm.formKey = 'Employees.Vacancies';
            return VacanciesForm;
        }(Serenity.PrefixedContext));
        Employees.VacanciesForm = VacanciesForm;
    })(Employees = HRM.Employees || (HRM.Employees = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Employees;
    (function (Employees) {
        var VacanciesRow;
        (function (VacanciesRow) {
            VacanciesRow.idProperty = 'Id';
            VacanciesRow.nameProperty = 'Vacancy';
            VacanciesRow.localTextPrefix = 'Employees.Vacancies';
            VacanciesRow.lookupKey = 'Employees.Vacancies';
            function getLookup() {
                return Q.getLookup('Employees.Vacancies');
            }
            VacanciesRow.getLookup = getLookup;
            VacanciesRow.deletePermission = 'Administration:General';
            VacanciesRow.insertPermission = 'Administration:General';
            VacanciesRow.readPermission = 'Administration:General';
            VacanciesRow.updatePermission = 'Administration:General';
        })(VacanciesRow = Employees.VacanciesRow || (Employees.VacanciesRow = {}));
    })(Employees = HRM.Employees || (HRM.Employees = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Employees;
    (function (Employees) {
        var VacanciesService;
        (function (VacanciesService) {
            VacanciesService.baseUrl = 'Employees/Vacancies';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                VacanciesService[x] = function (r, s, o) {
                    return Q.serviceRequest(VacanciesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(VacanciesService = Employees.VacanciesService || (Employees.VacanciesService = {}));
    })(Employees = HRM.Employees || (HRM.Employees = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Employees;
    (function (Employees) {
        var VacancyPolicyForm = /** @class */ (function (_super) {
            __extends(VacancyPolicyForm, _super);
            function VacancyPolicyForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!VacancyPolicyForm.init) {
                    VacancyPolicyForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.EnumEditor;
                    var w2 = s.IntegerEditor;
                    var w3 = s.DecimalEditor;
                    Q.initFormType(VacancyPolicyForm, [
                        'VacancyId', w0,
                        'Duration', w1,
                        'Limit', w2,
                        'Sending', w1,
                        'FromYears', w3,
                        'ToYears', w3
                    ]);
                }
                return _this;
            }
            VacancyPolicyForm.formKey = 'Employees.VacancyPolicy';
            return VacancyPolicyForm;
        }(Serenity.PrefixedContext));
        Employees.VacancyPolicyForm = VacancyPolicyForm;
    })(Employees = HRM.Employees || (HRM.Employees = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Employees;
    (function (Employees) {
        var VacancyPolicyRow;
        (function (VacancyPolicyRow) {
            VacancyPolicyRow.idProperty = 'Id';
            VacancyPolicyRow.localTextPrefix = 'Employees.VacancyPolicy';
            VacancyPolicyRow.deletePermission = 'Administration:General';
            VacancyPolicyRow.insertPermission = 'Administration:General';
            VacancyPolicyRow.readPermission = 'Administration:General';
            VacancyPolicyRow.updatePermission = 'Administration:General';
        })(VacancyPolicyRow = Employees.VacancyPolicyRow || (Employees.VacancyPolicyRow = {}));
    })(Employees = HRM.Employees || (HRM.Employees = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Employees;
    (function (Employees) {
        var VacancyPolicyService;
        (function (VacancyPolicyService) {
            VacancyPolicyService.baseUrl = 'Employees/VacancyPolicy';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                VacancyPolicyService[x] = function (r, s, o) {
                    return Q.serviceRequest(VacancyPolicyService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(VacancyPolicyService = Employees.VacancyPolicyService || (Employees.VacancyPolicyService = {}));
    })(Employees = HRM.Employees || (HRM.Employees = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Employees;
    (function (Employees) {
        var VacancyRequestsForm = /** @class */ (function (_super) {
            __extends(VacancyRequestsForm, _super);
            function VacancyRequestsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!VacancyRequestsForm.init) {
                    VacancyRequestsForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.LookupEditor;
                    var w2 = s.DateEditor;
                    var w3 = s.TextAreaEditor;
                    var w4 = s.EnumEditor;
                    Q.initFormType(VacancyRequestsForm, [
                        'Id', w0,
                        'UserId', w0,
                        'VacancyId', w1,
                        'Date', w2,
                        'DateFrom', w2,
                        'Dateto', w2,
                        'Total', w0,
                        'UserComment', w3,
                        'StatusId', w1,
                        'IsAcceptedbyHr', w4,
                        'Limit_in_Inser', w0,
                        'TotlaLimit_relay', w0,
                        'LeaveTaken', w0
                    ]);
                }
                return _this;
            }
            VacancyRequestsForm.formKey = 'Employees.VacancyRequests';
            return VacancyRequestsForm;
        }(Serenity.PrefixedContext));
        Employees.VacancyRequestsForm = VacancyRequestsForm;
    })(Employees = HRM.Employees || (HRM.Employees = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Employees;
    (function (Employees) {
        var VacancyRequestsRow;
        (function (VacancyRequestsRow) {
            VacancyRequestsRow.idProperty = 'Id';
            VacancyRequestsRow.localTextPrefix = 'Employees.VacancyRequests';
            VacancyRequestsRow.deletePermission = 'Administration:General';
            VacancyRequestsRow.insertPermission = 'Administration:General';
            VacancyRequestsRow.readPermission = 'Administration:General';
            VacancyRequestsRow.updatePermission = 'Administration:General';
        })(VacancyRequestsRow = Employees.VacancyRequestsRow || (Employees.VacancyRequestsRow = {}));
    })(Employees = HRM.Employees || (HRM.Employees = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Employees;
    (function (Employees) {
        var VacancyRequestsService;
        (function (VacancyRequestsService) {
            VacancyRequestsService.baseUrl = 'Employees/VacancyRequests';
            [
                'Total_Limits',
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                VacancyRequestsService[x] = function (r, s, o) {
                    return Q.serviceRequest(VacancyRequestsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(VacancyRequestsService = Employees.VacancyRequestsService || (Employees.VacancyRequestsService = {}));
    })(Employees = HRM.Employees || (HRM.Employees = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Membership;
    (function (Membership) {
        var ChangePasswordForm = /** @class */ (function (_super) {
            __extends(ChangePasswordForm, _super);
            function ChangePasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ChangePasswordForm.init) {
                    ChangePasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ChangePasswordForm, [
                        'OldPassword', w0,
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            ChangePasswordForm.formKey = 'Membership.ChangePassword';
            return ChangePasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ChangePasswordForm = ChangePasswordForm;
    })(Membership = HRM.Membership || (HRM.Membership = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordForm = /** @class */ (function (_super) {
            __extends(ForgotPasswordForm, _super);
            function ForgotPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ForgotPasswordForm.init) {
                    ForgotPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.EmailEditor;
                    Q.initFormType(ForgotPasswordForm, [
                        'Email', w0
                    ]);
                }
                return _this;
            }
            ForgotPasswordForm.formKey = 'Membership.ForgotPassword';
            return ForgotPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ForgotPasswordForm = ForgotPasswordForm;
    })(Membership = HRM.Membership || (HRM.Membership = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Membership;
    (function (Membership) {
        var LoginForm = /** @class */ (function (_super) {
            __extends(LoginForm, _super);
            function LoginForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LoginForm.init) {
                    LoginForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.PasswordEditor;
                    Q.initFormType(LoginForm, [
                        'Username', w0,
                        'Password', w1
                    ]);
                }
                return _this;
            }
            LoginForm.formKey = 'Membership.Login';
            return LoginForm;
        }(Serenity.PrefixedContext));
        Membership.LoginForm = LoginForm;
    })(Membership = HRM.Membership || (HRM.Membership = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Membership;
    (function (Membership) {
        var ResetPasswordForm = /** @class */ (function (_super) {
            __extends(ResetPasswordForm, _super);
            function ResetPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ResetPasswordForm.init) {
                    ResetPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ResetPasswordForm, [
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            ResetPasswordForm.formKey = 'Membership.ResetPassword';
            return ResetPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ResetPasswordForm = ResetPasswordForm;
    })(Membership = HRM.Membership || (HRM.Membership = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Membership;
    (function (Membership) {
        var SignUpForm = /** @class */ (function (_super) {
            __extends(SignUpForm, _super);
            function SignUpForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SignUpForm.init) {
                    SignUpForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailEditor;
                    var w2 = s.PasswordEditor;
                    Q.initFormType(SignUpForm, [
                        'DisplayName', w0,
                        'Email', w1,
                        'ConfirmEmail', w1,
                        'Password', w2,
                        'ConfirmPassword', w2
                    ]);
                }
                return _this;
            }
            SignUpForm.formKey = 'Membership.SignUp';
            return SignUpForm;
        }(Serenity.PrefixedContext));
        Membership.SignUpForm = SignUpForm;
    })(Membership = HRM.Membership || (HRM.Membership = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Modules;
    (function (Modules) {
        var Administration;
        (function (Administration) {
            var OfficialHolidays;
            (function (OfficialHolidays) {
                var WeekDaysEnum;
                (function (WeekDaysEnum) {
                    WeekDaysEnum[WeekDaysEnum["Sunday"] = 0] = "Sunday";
                    WeekDaysEnum[WeekDaysEnum["Monday"] = 1] = "Monday";
                    WeekDaysEnum[WeekDaysEnum["Tuesday"] = 2] = "Tuesday";
                    WeekDaysEnum[WeekDaysEnum["Wednesday"] = 3] = "Wednesday";
                    WeekDaysEnum[WeekDaysEnum["Thursday"] = 4] = "Thursday";
                    WeekDaysEnum[WeekDaysEnum["Friday"] = 5] = "Friday";
                    WeekDaysEnum[WeekDaysEnum["Saturday"] = 6] = "Saturday";
                    WeekDaysEnum[WeekDaysEnum["Null"] = 7] = "Null";
                })(WeekDaysEnum = OfficialHolidays.WeekDaysEnum || (OfficialHolidays.WeekDaysEnum = {}));
                Serenity.Decorators.registerEnumType(WeekDaysEnum, 'HRM.Modules.Administration.OfficialHolidays.WeekDaysEnum', 'Administration.WeekDaysEnum');
            })(OfficialHolidays = Administration.OfficialHolidays || (Administration.OfficialHolidays = {}));
        })(Administration = Modules.Administration || (Modules.Administration = {}));
    })(Modules = HRM.Modules || (HRM.Modules = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Modules;
    (function (Modules) {
        var Administration;
        (function (Administration) {
            var User;
            (function (User) {
                var ReligionEnum;
                (function (ReligionEnum) {
                    ReligionEnum[ReligionEnum["Muslim"] = 1] = "Muslim";
                    ReligionEnum[ReligionEnum["Christian"] = 2] = "Christian";
                })(ReligionEnum = User.ReligionEnum || (User.ReligionEnum = {}));
                Serenity.Decorators.registerEnumType(ReligionEnum, 'HRM.Modules.Administration.User.ReligionEnum', 'Administration.ReligionEnum');
            })(User = Administration.User || (Administration.User = {}));
        })(Administration = Modules.Administration || (Modules.Administration = {}));
    })(Modules = HRM.Modules || (HRM.Modules = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Modules;
    (function (Modules) {
        var Administration;
        (function (Administration) {
            var User;
            (function (User) {
                var Religion_Offical_Enum;
                (function (Religion_Offical_Enum) {
                    Religion_Offical_Enum[Religion_Offical_Enum["Muslim"] = 1] = "Muslim";
                    Religion_Offical_Enum[Religion_Offical_Enum["Christian"] = 2] = "Christian";
                    Religion_Offical_Enum[Religion_Offical_Enum["AllofThem"] = 3] = "AllofThem";
                })(Religion_Offical_Enum = User.Religion_Offical_Enum || (User.Religion_Offical_Enum = {}));
                Serenity.Decorators.registerEnumType(Religion_Offical_Enum, 'HRM.Modules.Administration.User.Religion_Offical_Enum', 'Administration.Religion_Offical_Enum');
            })(User = Administration.User || (Administration.User = {}));
        })(Administration = Modules.Administration || (Modules.Administration = {}));
    })(Modules = HRM.Modules || (HRM.Modules = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Modules;
    (function (Modules) {
        var AttendanceSheet;
        (function (AttendanceSheet_1) {
            var AttendanceSheet;
            (function (AttendanceSheet) {
                var LeavingStatusEnum;
                (function (LeavingStatusEnum) {
                    LeavingStatusEnum[LeavingStatusEnum["Absence"] = 0] = "Absence";
                    LeavingStatusEnum[LeavingStatusEnum["Present"] = 1] = "Present";
                    LeavingStatusEnum[LeavingStatusEnum["Late"] = 2] = "Late";
                    LeavingStatusEnum[LeavingStatusEnum["early"] = 3] = "early";
                })(LeavingStatusEnum = AttendanceSheet.LeavingStatusEnum || (AttendanceSheet.LeavingStatusEnum = {}));
                Serenity.Decorators.registerEnumType(LeavingStatusEnum, 'HRM.Modules.AttendanceSheet.AttendanceSheet.LeavingStatusEnum', 'AttendanceSheet.LeavingStatusEnum');
            })(AttendanceSheet = AttendanceSheet_1.AttendanceSheet || (AttendanceSheet_1.AttendanceSheet = {}));
        })(AttendanceSheet = Modules.AttendanceSheet || (Modules.AttendanceSheet = {}));
    })(Modules = HRM.Modules || (HRM.Modules = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Modules;
    (function (Modules) {
        var RequestsStatus;
        (function (RequestsStatus) {
            var EmpLoans;
            (function (EmpLoans) {
                var IsAcceptedEnum;
                (function (IsAcceptedEnum) {
                    IsAcceptedEnum[IsAcceptedEnum["NotAccepted"] = 0] = "NotAccepted";
                    IsAcceptedEnum[IsAcceptedEnum["Accepted"] = 1] = "Accepted";
                    IsAcceptedEnum[IsAcceptedEnum["Pending"] = 2] = "Pending";
                })(IsAcceptedEnum = EmpLoans.IsAcceptedEnum || (EmpLoans.IsAcceptedEnum = {}));
                Serenity.Decorators.registerEnumType(IsAcceptedEnum, 'HRM.Modules.RequestsStatus.EmpLoans.IsAcceptedEnum', 'RequestsStatus.IsAccepted');
            })(EmpLoans = RequestsStatus.EmpLoans || (RequestsStatus.EmpLoans = {}));
        })(RequestsStatus = Modules.RequestsStatus || (Modules.RequestsStatus = {}));
    })(Modules = HRM.Modules || (HRM.Modules = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var RequestsStatus;
    (function (RequestsStatus) {
        var EmpLoansForm = /** @class */ (function (_super) {
            __extends(EmpLoansForm, _super);
            function EmpLoansForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!EmpLoansForm.init) {
                    EmpLoansForm.init = true;
                    var s = Serenity;
                    var w0 = s.DecimalEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.EnumEditor;
                    var w3 = RequestsStatus.InstallmentsRequestEditor;
                    Q.initFormType(EmpLoansForm, [
                        'Loan', w0,
                        'UserId', w1,
                        'Id', w1,
                        'IsAccepted', w2,
                        'InstallmentsList', w3
                    ]);
                }
                return _this;
            }
            EmpLoansForm.formKey = 'RequestsStatus.EmpLoans';
            return EmpLoansForm;
        }(Serenity.PrefixedContext));
        RequestsStatus.EmpLoansForm = EmpLoansForm;
    })(RequestsStatus = HRM.RequestsStatus || (HRM.RequestsStatus = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var RequestsStatus;
    (function (RequestsStatus) {
        var EmpLoansRow;
        (function (EmpLoansRow) {
            EmpLoansRow.idProperty = 'Id';
            EmpLoansRow.nameProperty = 'AdvancReason';
            EmpLoansRow.localTextPrefix = 'RequestsStatus.EmpLoans';
            EmpLoansRow.deletePermission = 'Administration:General';
            EmpLoansRow.insertPermission = 'Administration:General';
            EmpLoansRow.readPermission = 'Administration:General';
            EmpLoansRow.updatePermission = 'Administration:General';
        })(EmpLoansRow = RequestsStatus.EmpLoansRow || (RequestsStatus.EmpLoansRow = {}));
    })(RequestsStatus = HRM.RequestsStatus || (HRM.RequestsStatus = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var RequestsStatus;
    (function (RequestsStatus) {
        var EmpLoansService;
        (function (EmpLoansService) {
            EmpLoansService.baseUrl = 'RequestsStatus/EmpLoans';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                EmpLoansService[x] = function (r, s, o) {
                    return Q.serviceRequest(EmpLoansService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(EmpLoansService = RequestsStatus.EmpLoansService || (RequestsStatus.EmpLoansService = {}));
    })(RequestsStatus = HRM.RequestsStatus || (HRM.RequestsStatus = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var RequestsStatus;
    (function (RequestsStatus) {
        var InstallmentsForm = /** @class */ (function (_super) {
            __extends(InstallmentsForm, _super);
            function InstallmentsForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            InstallmentsForm.formKey = 'RequestsStatus.Installments';
            return InstallmentsForm;
        }(Serenity.PrefixedContext));
        RequestsStatus.InstallmentsForm = InstallmentsForm;
    })(RequestsStatus = HRM.RequestsStatus || (HRM.RequestsStatus = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var RequestsStatus;
    (function (RequestsStatus) {
        var InstallmentsRow;
        (function (InstallmentsRow) {
            InstallmentsRow.idProperty = 'Id';
            InstallmentsRow.localTextPrefix = 'RequestsStatus.Installments';
            InstallmentsRow.deletePermission = 'Administration:General';
            InstallmentsRow.insertPermission = 'Administration:General';
            InstallmentsRow.readPermission = 'Administration:General';
            InstallmentsRow.updatePermission = 'Administration:General';
        })(InstallmentsRow = RequestsStatus.InstallmentsRow || (RequestsStatus.InstallmentsRow = {}));
    })(RequestsStatus = HRM.RequestsStatus || (HRM.RequestsStatus = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var RequestsStatus;
    (function (RequestsStatus) {
        var InstallmentsService;
        (function (InstallmentsService) {
            InstallmentsService.baseUrl = 'RequestsStatus/Installments';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                InstallmentsService[x] = function (r, s, o) {
                    return Q.serviceRequest(InstallmentsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(InstallmentsService = RequestsStatus.InstallmentsService || (RequestsStatus.InstallmentsService = {}));
    })(RequestsStatus = HRM.RequestsStatus || (HRM.RequestsStatus = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var RequestsStatus;
    (function (RequestsStatus) {
        var PermissionRequestsForm = /** @class */ (function (_super) {
            __extends(PermissionRequestsForm, _super);
            function PermissionRequestsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!PermissionRequestsForm.init) {
                    PermissionRequestsForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.LookupEditor;
                    var w2 = s.DateEditor;
                    var w3 = s.DateTimeEditor;
                    Q.initFormType(PermissionRequestsForm, [
                        'UserId', w0,
                        'PermissionId', w1,
                        'StatusId', w1,
                        'IsAcceptedbyHr', w0,
                        'Date', w2,
                        'DateFrom', w3,
                        'Dateto', w3
                    ]);
                }
                return _this;
            }
            PermissionRequestsForm.formKey = 'RequestsStatus.PermissionRequests';
            return PermissionRequestsForm;
        }(Serenity.PrefixedContext));
        RequestsStatus.PermissionRequestsForm = PermissionRequestsForm;
    })(RequestsStatus = HRM.RequestsStatus || (HRM.RequestsStatus = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var RequestsStatus;
    (function (RequestsStatus) {
        var PermissionRequestsRow;
        (function (PermissionRequestsRow) {
            PermissionRequestsRow.idProperty = 'Id';
            PermissionRequestsRow.localTextPrefix = 'RequestsStatus.PermissionRequests';
            PermissionRequestsRow.deletePermission = 'Administration:General';
            PermissionRequestsRow.insertPermission = 'Administration:General';
            PermissionRequestsRow.readPermission = 'Administration:General';
            PermissionRequestsRow.updatePermission = 'Administration:General';
        })(PermissionRequestsRow = RequestsStatus.PermissionRequestsRow || (RequestsStatus.PermissionRequestsRow = {}));
    })(RequestsStatus = HRM.RequestsStatus || (HRM.RequestsStatus = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var RequestsStatus;
    (function (RequestsStatus) {
        var PermissionRequestsService;
        (function (PermissionRequestsService) {
            PermissionRequestsService.baseUrl = 'RequestsStatus/PermissionRequests';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                PermissionRequestsService[x] = function (r, s, o) {
                    return Q.serviceRequest(PermissionRequestsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(PermissionRequestsService = RequestsStatus.PermissionRequestsService || (RequestsStatus.PermissionRequestsService = {}));
    })(RequestsStatus = HRM.RequestsStatus || (HRM.RequestsStatus = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var RequestsStatus;
    (function (RequestsStatus) {
        var PermissionStatusForm = /** @class */ (function (_super) {
            __extends(PermissionStatusForm, _super);
            function PermissionStatusForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!PermissionStatusForm.init) {
                    PermissionStatusForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(PermissionStatusForm, [
                        'Permissiontype', w0
                    ]);
                }
                return _this;
            }
            PermissionStatusForm.formKey = 'RequestsStatus.PermissionStatus';
            return PermissionStatusForm;
        }(Serenity.PrefixedContext));
        RequestsStatus.PermissionStatusForm = PermissionStatusForm;
    })(RequestsStatus = HRM.RequestsStatus || (HRM.RequestsStatus = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var RequestsStatus;
    (function (RequestsStatus) {
        var PermissionStatusRow;
        (function (PermissionStatusRow) {
            PermissionStatusRow.idProperty = 'Id';
            PermissionStatusRow.nameProperty = 'Permissiontype';
            PermissionStatusRow.localTextPrefix = 'RequestsStatus.PermissionStatus';
            PermissionStatusRow.lookupKey = 'RequestsStatus.PermissionStatus';
            function getLookup() {
                return Q.getLookup('RequestsStatus.PermissionStatus');
            }
            PermissionStatusRow.getLookup = getLookup;
            PermissionStatusRow.deletePermission = 'Administration:General';
            PermissionStatusRow.insertPermission = 'Administration:General';
            PermissionStatusRow.readPermission = 'Administration:General';
            PermissionStatusRow.updatePermission = 'Administration:General';
        })(PermissionStatusRow = RequestsStatus.PermissionStatusRow || (RequestsStatus.PermissionStatusRow = {}));
    })(RequestsStatus = HRM.RequestsStatus || (HRM.RequestsStatus = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var RequestsStatus;
    (function (RequestsStatus) {
        var PermissionStatusService;
        (function (PermissionStatusService) {
            PermissionStatusService.baseUrl = 'RequestsStatus/PermissionStatus';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                PermissionStatusService[x] = function (r, s, o) {
                    return Q.serviceRequest(PermissionStatusService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(PermissionStatusService = RequestsStatus.PermissionStatusService || (RequestsStatus.PermissionStatusService = {}));
    })(RequestsStatus = HRM.RequestsStatus || (HRM.RequestsStatus = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var RequestsStatus;
    (function (RequestsStatus) {
        var VacancyRequestsForm = /** @class */ (function (_super) {
            __extends(VacancyRequestsForm, _super);
            function VacancyRequestsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!VacancyRequestsForm.init) {
                    VacancyRequestsForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.LookupEditor;
                    var w2 = s.DateEditor;
                    var w3 = s.TextAreaEditor;
                    Q.initFormType(VacancyRequestsForm, [
                        'UserId', w0,
                        'VacancyId', w1,
                        'StatusId', w1,
                        'IsAcceptedbyHr', w0,
                        'Date', w2,
                        'DateFrom', w2,
                        'Dateto', w2,
                        'MangerComment', w3
                    ]);
                }
                return _this;
            }
            VacancyRequestsForm.formKey = 'RequestsStatus.VacancyRequests';
            return VacancyRequestsForm;
        }(Serenity.PrefixedContext));
        RequestsStatus.VacancyRequestsForm = VacancyRequestsForm;
    })(RequestsStatus = HRM.RequestsStatus || (HRM.RequestsStatus = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var RequestsStatus;
    (function (RequestsStatus) {
        var VacancyRequestsRow;
        (function (VacancyRequestsRow) {
            VacancyRequestsRow.idProperty = 'Id';
            VacancyRequestsRow.localTextPrefix = 'RequestsStatus.VacancyRequests';
            VacancyRequestsRow.deletePermission = 'Administration:General';
            VacancyRequestsRow.insertPermission = 'Administration:General';
            VacancyRequestsRow.readPermission = 'Administration:General';
            VacancyRequestsRow.updatePermission = 'Administration:General';
        })(VacancyRequestsRow = RequestsStatus.VacancyRequestsRow || (RequestsStatus.VacancyRequestsRow = {}));
    })(RequestsStatus = HRM.RequestsStatus || (HRM.RequestsStatus = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var RequestsStatus;
    (function (RequestsStatus) {
        var VacancyRequestsService;
        (function (VacancyRequestsService) {
            VacancyRequestsService.baseUrl = 'RequestsStatus/VacancyRequests';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                VacancyRequestsService[x] = function (r, s, o) {
                    return Q.serviceRequest(VacancyRequestsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(VacancyRequestsService = RequestsStatus.VacancyRequestsService || (RequestsStatus.VacancyRequestsService = {}));
    })(RequestsStatus = HRM.RequestsStatus || (HRM.RequestsStatus = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var SalaryDetails;
    (function (SalaryDetails) {
        var DeductionsForm = /** @class */ (function (_super) {
            __extends(DeductionsForm, _super);
            function DeductionsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!DeductionsForm.init) {
                    DeductionsForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DecimalEditor;
                    var w2 = s.DateEditor;
                    var w3 = HRM.Administration.FilterUserEditor;
                    Q.initFormType(DeductionsForm, [
                        'DeductionsReason', w0,
                        'Deduction', w1,
                        'DeductionsDate', w2,
                        'UserIdList', w3,
                        'UserId', w3
                    ]);
                }
                return _this;
            }
            DeductionsForm.formKey = 'SalaryDetails.Deductions';
            return DeductionsForm;
        }(Serenity.PrefixedContext));
        SalaryDetails.DeductionsForm = DeductionsForm;
    })(SalaryDetails = HRM.SalaryDetails || (HRM.SalaryDetails = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var SalaryDetails;
    (function (SalaryDetails) {
        var DeductionsRow;
        (function (DeductionsRow) {
            DeductionsRow.idProperty = 'Id';
            DeductionsRow.nameProperty = 'DeductionsReason';
            DeductionsRow.localTextPrefix = 'SalaryDetails.Deductions';
            DeductionsRow.deletePermission = 'Administration:General';
            DeductionsRow.insertPermission = 'Administration:General';
            DeductionsRow.readPermission = 'Administration:General';
            DeductionsRow.updatePermission = 'Administration:General';
        })(DeductionsRow = SalaryDetails.DeductionsRow || (SalaryDetails.DeductionsRow = {}));
    })(SalaryDetails = HRM.SalaryDetails || (HRM.SalaryDetails = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var SalaryDetails;
    (function (SalaryDetails) {
        var DeductionsService;
        (function (DeductionsService) {
            DeductionsService.baseUrl = 'SalaryDetails/Deductions';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                DeductionsService[x] = function (r, s, o) {
                    return Q.serviceRequest(DeductionsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(DeductionsService = SalaryDetails.DeductionsService || (SalaryDetails.DeductionsService = {}));
    })(SalaryDetails = HRM.SalaryDetails || (HRM.SalaryDetails = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var SalaryDetails;
    (function (SalaryDetails) {
        var EmpLoansForm = /** @class */ (function (_super) {
            __extends(EmpLoansForm, _super);
            function EmpLoansForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!EmpLoansForm.init) {
                    EmpLoansForm.init = true;
                    var s = Serenity;
                    var w0 = HRM.Administration.FilterUserEditor;
                    var w1 = s.DecimalEditor;
                    var w2 = s.StringEditor;
                    var w3 = SalaryDetails.InstallmentsEditors;
                    Q.initFormType(EmpLoansForm, [
                        'UserId', w0,
                        'Loan', w1,
                        'AdvancReason', w2,
                        'InstallmentsList', w3
                    ]);
                }
                return _this;
            }
            EmpLoansForm.formKey = 'SalaryDetails.EmpLoans';
            return EmpLoansForm;
        }(Serenity.PrefixedContext));
        SalaryDetails.EmpLoansForm = EmpLoansForm;
    })(SalaryDetails = HRM.SalaryDetails || (HRM.SalaryDetails = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var SalaryDetails;
    (function (SalaryDetails) {
        var EmpLoansRow;
        (function (EmpLoansRow) {
            EmpLoansRow.idProperty = 'Id';
            EmpLoansRow.nameProperty = 'AdvancReason';
            EmpLoansRow.localTextPrefix = 'SalaryDetails.EmpLoans';
            EmpLoansRow.deletePermission = 'Administration:General';
            EmpLoansRow.insertPermission = 'Administration:General';
            EmpLoansRow.readPermission = 'Administration:General';
            EmpLoansRow.updatePermission = 'Administration:General';
        })(EmpLoansRow = SalaryDetails.EmpLoansRow || (SalaryDetails.EmpLoansRow = {}));
    })(SalaryDetails = HRM.SalaryDetails || (HRM.SalaryDetails = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var SalaryDetails;
    (function (SalaryDetails) {
        var EmpLoansService;
        (function (EmpLoansService) {
            EmpLoansService.baseUrl = 'SalaryDetails/EmpLoans';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                EmpLoansService[x] = function (r, s, o) {
                    return Q.serviceRequest(EmpLoansService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(EmpLoansService = SalaryDetails.EmpLoansService || (SalaryDetails.EmpLoansService = {}));
    })(SalaryDetails = HRM.SalaryDetails || (HRM.SalaryDetails = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var SalaryDetails;
    (function (SalaryDetails) {
        var EntitlementsForm = /** @class */ (function (_super) {
            __extends(EntitlementsForm, _super);
            function EntitlementsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!EntitlementsForm.init) {
                    EntitlementsForm.init = true;
                    var s = Serenity;
                    var w0 = HRM.Administration.FilterUserEditor;
                    var w1 = s.DecimalEditor;
                    var w2 = s.DateEditor;
                    var w3 = s.StringEditor;
                    Q.initFormType(EntitlementsForm, [
                        'UserId', w0,
                        'UserIdList', w0,
                        'Entitlement', w1,
                        'EntitlementsDate', w2,
                        'EntitlementReason', w3
                    ]);
                }
                return _this;
            }
            EntitlementsForm.formKey = 'SalaryDetails.Entitlements';
            return EntitlementsForm;
        }(Serenity.PrefixedContext));
        SalaryDetails.EntitlementsForm = EntitlementsForm;
    })(SalaryDetails = HRM.SalaryDetails || (HRM.SalaryDetails = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var SalaryDetails;
    (function (SalaryDetails) {
        var EntitlementsRow;
        (function (EntitlementsRow) {
            EntitlementsRow.idProperty = 'Id';
            EntitlementsRow.nameProperty = 'EntitlementReason';
            EntitlementsRow.localTextPrefix = 'SalaryDetails.Entitlements';
            EntitlementsRow.deletePermission = 'Administration:General';
            EntitlementsRow.insertPermission = 'Administration:General';
            EntitlementsRow.readPermission = 'Administration:General';
            EntitlementsRow.updatePermission = 'Administration:General';
        })(EntitlementsRow = SalaryDetails.EntitlementsRow || (SalaryDetails.EntitlementsRow = {}));
    })(SalaryDetails = HRM.SalaryDetails || (HRM.SalaryDetails = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var SalaryDetails;
    (function (SalaryDetails) {
        var EntitlementsService;
        (function (EntitlementsService) {
            EntitlementsService.baseUrl = 'SalaryDetails/Entitlements';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                EntitlementsService[x] = function (r, s, o) {
                    return Q.serviceRequest(EntitlementsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(EntitlementsService = SalaryDetails.EntitlementsService || (SalaryDetails.EntitlementsService = {}));
    })(SalaryDetails = HRM.SalaryDetails || (HRM.SalaryDetails = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var SalaryDetails;
    (function (SalaryDetails) {
        var InstallmentsForm = /** @class */ (function (_super) {
            __extends(InstallmentsForm, _super);
            function InstallmentsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!InstallmentsForm.init) {
                    InstallmentsForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.DecimalEditor;
                    var w2 = s.DateEditor;
                    Q.initFormType(InstallmentsForm, [
                        'UserId', w0,
                        'Loanid', w0,
                        'InstallmentValues', w1,
                        'InstallmentDate', w2
                    ]);
                }
                return _this;
            }
            InstallmentsForm.formKey = 'SalaryDetails.Installments';
            return InstallmentsForm;
        }(Serenity.PrefixedContext));
        SalaryDetails.InstallmentsForm = InstallmentsForm;
    })(SalaryDetails = HRM.SalaryDetails || (HRM.SalaryDetails = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var SalaryDetails;
    (function (SalaryDetails) {
        var InstallmentsRow;
        (function (InstallmentsRow) {
            InstallmentsRow.idProperty = 'Id';
            InstallmentsRow.localTextPrefix = 'SalaryDetails.Installments';
            InstallmentsRow.deletePermission = 'Administration:General';
            InstallmentsRow.insertPermission = 'Administration:General';
            InstallmentsRow.readPermission = 'Administration:General';
            InstallmentsRow.updatePermission = 'Administration:General';
        })(InstallmentsRow = SalaryDetails.InstallmentsRow || (SalaryDetails.InstallmentsRow = {}));
    })(SalaryDetails = HRM.SalaryDetails || (HRM.SalaryDetails = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var SalaryDetails;
    (function (SalaryDetails) {
        var InstallmentsService;
        (function (InstallmentsService) {
            InstallmentsService.baseUrl = 'SalaryDetails/Installments';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                InstallmentsService[x] = function (r, s, o) {
                    return Q.serviceRequest(InstallmentsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(InstallmentsService = SalaryDetails.InstallmentsService || (SalaryDetails.InstallmentsService = {}));
    })(SalaryDetails = HRM.SalaryDetails || (HRM.SalaryDetails = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var SalaryDetails;
    (function (SalaryDetails) {
        var PremiumsForm = /** @class */ (function (_super) {
            __extends(PremiumsForm, _super);
            function PremiumsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!PremiumsForm.init) {
                    PremiumsForm.init = true;
                    var s = Serenity;
                    var w0 = HRM.Administration.FilterUserEditor;
                    var w1 = s.DecimalEditor;
                    var w2 = s.DateEditor;
                    var w3 = s.LookupEditor;
                    Q.initFormType(PremiumsForm, [
                        'UserIdList', w0,
                        'UserId', w0,
                        'PremiumQuantity', w1,
                        'PremiumDate', w2,
                        'premiumType', w3
                    ]);
                }
                return _this;
            }
            PremiumsForm.formKey = 'SalaryDetails.Premiums';
            return PremiumsForm;
        }(Serenity.PrefixedContext));
        SalaryDetails.PremiumsForm = PremiumsForm;
    })(SalaryDetails = HRM.SalaryDetails || (HRM.SalaryDetails = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var SalaryDetails;
    (function (SalaryDetails) {
        var PremiumsRow;
        (function (PremiumsRow) {
            PremiumsRow.idProperty = 'Id';
            PremiumsRow.localTextPrefix = 'SalaryDetails.Premiums';
            PremiumsRow.deletePermission = 'Administration:General';
            PremiumsRow.insertPermission = 'Administration:General';
            PremiumsRow.readPermission = 'Administration:General';
            PremiumsRow.updatePermission = 'Administration:General';
        })(PremiumsRow = SalaryDetails.PremiumsRow || (SalaryDetails.PremiumsRow = {}));
    })(SalaryDetails = HRM.SalaryDetails || (HRM.SalaryDetails = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var SalaryDetails;
    (function (SalaryDetails) {
        var PremiumsService;
        (function (PremiumsService) {
            PremiumsService.baseUrl = 'SalaryDetails/Premiums';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                PremiumsService[x] = function (r, s, o) {
                    return Q.serviceRequest(PremiumsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(PremiumsService = SalaryDetails.PremiumsService || (SalaryDetails.PremiumsService = {}));
    })(SalaryDetails = HRM.SalaryDetails || (HRM.SalaryDetails = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var SalaryDetails;
    (function (SalaryDetails) {
        var PremiumstypeForm = /** @class */ (function (_super) {
            __extends(PremiumstypeForm, _super);
            function PremiumstypeForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!PremiumstypeForm.init) {
                    PremiumstypeForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(PremiumstypeForm, [
                        'Premium', w0
                    ]);
                }
                return _this;
            }
            PremiumstypeForm.formKey = 'SalaryDetails.Premiumstype';
            return PremiumstypeForm;
        }(Serenity.PrefixedContext));
        SalaryDetails.PremiumstypeForm = PremiumstypeForm;
    })(SalaryDetails = HRM.SalaryDetails || (HRM.SalaryDetails = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var SalaryDetails;
    (function (SalaryDetails) {
        var PremiumstypeRow;
        (function (PremiumstypeRow) {
            PremiumstypeRow.idProperty = 'Id';
            PremiumstypeRow.nameProperty = 'Premium';
            PremiumstypeRow.localTextPrefix = 'SalaryDetails.Premiumstype';
            PremiumstypeRow.lookupKey = 'SalaryDetails.Premiumstype';
            function getLookup() {
                return Q.getLookup('SalaryDetails.Premiumstype');
            }
            PremiumstypeRow.getLookup = getLookup;
            PremiumstypeRow.deletePermission = 'Administration:General';
            PremiumstypeRow.insertPermission = 'Administration:General';
            PremiumstypeRow.readPermission = 'Administration:General';
            PremiumstypeRow.updatePermission = 'Administration:General';
        })(PremiumstypeRow = SalaryDetails.PremiumstypeRow || (SalaryDetails.PremiumstypeRow = {}));
    })(SalaryDetails = HRM.SalaryDetails || (HRM.SalaryDetails = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var SalaryDetails;
    (function (SalaryDetails) {
        var PremiumstypeService;
        (function (PremiumstypeService) {
            PremiumstypeService.baseUrl = 'SalaryDetails/Premiumstype';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                PremiumstypeService[x] = function (r, s, o) {
                    return Q.serviceRequest(PremiumstypeService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(PremiumstypeService = SalaryDetails.PremiumstypeService || (SalaryDetails.PremiumstypeService = {}));
    })(SalaryDetails = HRM.SalaryDetails || (HRM.SalaryDetails = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Texts;
    (function (Texts) {
        HRM['Texts'] = Q.proxyTexts(Texts, '', { Db: { Administration: { Allowances: { Allowance: 1, AllowanceDate: 1, AllowancesDescriptions: 1, Id: 1, UserAddress: 1, UserAnnualLeave: 1, UserAttendanceDate: 1, UserBirthdate: 1, UserCasualVacancy: 1, UserDeparturedate: 1, UserDisplayName: 1, UserEducationalQualification: 1, UserEmail: 1, UserEmployeeStatus: 1, UserFingerPrintCode: 1, UserGraduationYears: 1, UserHireDate: 1, UserId: 1, UserInsertDate: 1, UserInsertUserId: 1, UserIsActive: 1, UserJobId: 1, UserLastDirectoryUpdate: 1, UserMangerId: 1, UserMilitaryStatus: 1, UserPasswordHash: 1, UserPasswordSalt: 1, UserPersonalPhoneNumber: 1, UserPersonalidentification: 1, UserRegularvacation: 1, UserSource: 1, UserUpdateDate: 1, UserUpdateUserId: 1, UserUserImage: 1, UserUsername: 1 }, BalanceAccount: { BaseSalary: 1, DateBeginn: 1, DateEnd: 1, GrossSalary: 1, Id: 1, NetIncome: 1, UserAddress: 1, UserAnnualLeave: 1, UserAttendanceDate: 1, UserBirthdate: 1, UserCasualVacancy: 1, UserDeparturedate: 1, UserDisplayName: 1, UserEducationalQualification: 1, UserEmail: 1, UserEmployeeStatus: 1, UserFingerPrintCode: 1, UserGraduationYears: 1, UserHireDate: 1, UserInsertDate: 1, UserInsertUserId: 1, UserIsActive: 1, UserJobId: 1, UserLastDirectoryUpdate: 1, UserMangerId: 1, UserMilitaryStatus: 1, UserPasswordHash: 1, UserPasswordSalt: 1, UserPersonalPhoneNumber: 1, UserPersonalidentification: 1, UserRegularvacation: 1, UserSource: 1, UserUpdateDate: 1, UserUpdateUserId: 1, UserUserImage: 1, UserUsername: 1, User_ID: 1 }, BasicInsurances: { Id: 1, Insurance: 1, InsuranceDate: 1, InsurancesQ: 1, UserAddress: 1, UserAnnualLeave: 1, UserAttendanceDate: 1, UserBirthdate: 1, UserCasualVacancy: 1, UserDeparturedate: 1, UserDisplayName: 1, UserEducationalQualification: 1, UserEmail: 1, UserEmployeeStatus: 1, UserFingerPrintCode: 1, UserGraduationYears: 1, UserHireDate: 1, UserId: 1, UserInsertDate: 1, UserInsertUserId: 1, UserIsActive: 1, UserJobId: 1, UserLastDirectoryUpdate: 1, UserMangerId: 1, UserMilitaryStatus: 1, UserPasswordHash: 1, UserPasswordSalt: 1, UserPersonalPhoneNumber: 1, UserPersonalidentification: 1, UserRegularvacation: 1, UserSource: 1, UserUpdateDate: 1, UserUpdateUserId: 1, UserUserImage: 1, UserUsername: 1 }, EmploeesStatus: { EmpSDate: 1, EmploymentStatusID: 1, Id: 1, Status: 1, UserAddress: 1, UserAnnualLeave: 1, UserAttendanceDate: 1, UserBirthdate: 1, UserCasualVacancy: 1, UserDeparturedate: 1, UserDisplayName: 1, UserEducationalQualification: 1, UserEmail: 1, UserEmployeeStatus: 1, UserFingerPrintCode: 1, UserGraduationYears: 1, UserHireDate: 1, UserId: 1, UserInsertDate: 1, UserInsertUserId: 1, UserIsActive: 1, UserJobId: 1, UserLastDirectoryUpdate: 1, UserMangerId: 1, UserMilitaryStatus: 1, UserPasswordHash: 1, UserPasswordSalt: 1, UserPersonalPhoneNumber: 1, UserPersonalidentification: 1, UserRegularvacation: 1, UserSource: 1, UserUpdateDate: 1, UserUpdateUserId: 1, UserUserImage: 1, UserUsername: 1 }, Financialyear: { DateFrom: 1, DateTo: 1, Id: 1, Status: 1 }, Language: { Id: 1, LanguageId: 1, LanguageName: 1 }, OfficialHolidays: { FromHoliday: 1, Id: 1, Religion: 1, TheReasonOfHoliday: 1, ToHoliday: 1, weekdays: 1 }, Role: { RoleId: 1, RoleName: 1 }, RolePermission: { PermissionKey: 1, RoleId: 1, RolePermissionId: 1, RoleRoleName: 1 }, Translation: { CustomText: 1, EntityPlural: 1, Key: 1, OverrideConfirmation: 1, SaveChangesButton: 1, SourceLanguage: 1, SourceText: 1, TargetLanguage: 1, TargetText: 1 }, User: { Address: 1, Allowance: 1, AllowanceDescriptions: 1, AlowancesList: 1, AnnualLeave: 1, AttendanceDate: 1, Balance: 1, Birthdate: 1, CasualVacancy: 1, Departuredate: 1, DisplayName: 1, EducationalQualification: 1, Email: 1, EmployeeStatus: 1, FingerPrintCode: 1, GraduationYears: 1, HireDate: 1, InsertDate: 1, InsertUserId: 1, Insurance: 1, InsuranceList: 1, IsActive: 1, JobID: 1, Jobtype: 1, LastDirectoryUpdate: 1, MangerAddress: 1, MangerAnnualLeave: 1, MangerAttendanceDate: 1, MangerBirthdate: 1, MangerCasualVacancy: 1, MangerDeparturedate: 1, MangerDisplayName: 1, MangerEducationalQualification: 1, MangerEmail: 1, MangerEmployeeStatus: 1, MangerFingerPrintCode: 1, MangerGraduationYears: 1, MangerHireDate: 1, MangerID: 1, MangerInsertDate: 1, MangerInsertUserId: 1, MangerLastDirectoryUpdate: 1, MangerMangerId: 1, MangerMilitaryStatus: 1, MangerPasswordHash: 1, MangerPasswordSalt: 1, MangerPersonalPhoneNumber: 1, MangerPersonalidentification: 1, MangerRegularvacation: 1, MangerSource: 1, MangerUpdateDate: 1, MangerUpdateUserId: 1, MangerUserImage: 1, MangerUsername: 1, MilitaryStatus: 1, Password: 1, PasswordConfirm: 1, PasswordHash: 1, PasswordSalt: 1, PersonalPhoneNumber: 1, Personalidentification: 1, Regularvacation: 1, Religion: 1, Source: 1, Status: 1, UpdateDate: 1, UpdateUserId: 1, UserId: 1, UserImage: 1, UserVacanciesLimit: 1, Username: 1, insurancesQ: 1 }, UserPermission: { Granted: 1, PermissionKey: 1, User: 1, UserId: 1, UserPermissionId: 1, Username: 1 }, UserRole: { RoleId: 1, User: 1, UserId: 1, UserRoleId: 1, Username: 1 }, UserVacanciesLimit: { Id: 1, Limit: 1, UserAddress: 1, UserAnnualLeave: 1, UserAttendanceDate: 1, UserBalances: 1, UserBirthdate: 1, UserCasualVacancy: 1, UserDeparturedate: 1, UserDisplayName: 1, UserEducationalQualification: 1, UserEmail: 1, UserEmployeeStatus: 1, UserFingerPrintCode: 1, UserGraduationYears: 1, UserHireDate: 1, UserId: 1, UserInsertDate: 1, UserInsertUserId: 1, UserIsActive: 1, UserJobId: 1, UserLastDirectoryUpdate: 1, UserMangerId: 1, UserMilitaryStatus: 1, UserPasswordHash: 1, UserPasswordSalt: 1, UserPersonalPhoneNumber: 1, UserPersonalidentification: 1, UserRegularvacation: 1, UserSource: 1, UserStatus: 1, UserStatusName: 1, UserUpdateDate: 1, UserUpdateUserId: 1, UserUserImage: 1, UserUsername: 1, Vacancy: 1, VacancyId: 1 } }, AttendanceSheet: { AttendanceSheet: { AttendanceDate: 1, Email: 1, EmployeeName: 1, Id: 1, Reason: 1, Remark_Out: 1, Remarks: 1, Status_In: 1, Status_Out: 1 }, Leave: { CheckIn: 1, CheckOut: 1, Date: 1, Device: 1, FingerPrint: 1, Id: 1, IpAddress: 1 } }, Common: { UserPreference: { Name: 1, PreferenceType: 1, UserId: 1, UserPreferenceId: 1, Value: 1 } }, Default: { EmploymentStatus: { Id: 1, Status: 1 } }, Employees: { Deparetements: { Departement: 1, Id: 1 }, Jobs: { Departement: 1, DepartementId: 1, Id: 1, Jobtitle: 1 }, PermissionRequests: { Date: 1, DateFrom: 1, Dateto: 1, Id: 1, IsAcceptedbyHr: 1, PermissionId: 1, PermissionPermissiontype: 1, StatusId: 1, StatusStatusName: 1, UserAddress: 1, UserAnnualLeave: 1, UserAttendanceDate: 1, UserBirthdate: 1, UserCasualVacancy: 1, UserDeparturedate: 1, UserDisplayName: 1, UserEducationalQualification: 1, UserEmail: 1, UserEmployeeStatus: 1, UserFingerPrintCode: 1, UserGraduationYears: 1, UserHireDate: 1, UserId: 1, UserInsertDate: 1, UserInsertUserId: 1, UserIsActive: 1, UserJobId: 1, UserLastDirectoryUpdate: 1, UserMangerId: 1, UserMilitaryStatus: 1, UserPasswordHash: 1, UserPasswordSalt: 1, UserPersonalPhoneNumber: 1, UserPersonalidentification: 1, UserRegularvacation: 1, UserSource: 1, UserUpdateDate: 1, UserUpdateUserId: 1, UserUserImage: 1, UserUsername: 1 }, Status: { Id: 1, StatusName: 1 }, Users: { Address: 1, Allowance: 1, AllowanceDescriptions: 1, AnnualLeave: 1, AttendanceDate: 1, BaseSalary: 1, Birthdate: 1, CasualVacancy: 1, Departuredate: 1, DisplayName: 1, EducationalQualification: 1, Email: 1, EmployeeStatus: 1, FingerPrintCode: 1, GraduationYears: 1, HireDate: 1, InsertDate: 1, InsertUserId: 1, Insurance: 1, IsActive: 1, JobDepartementId: 1, JobId: 1, JobJobtitle: 1, LastDirectoryUpdate: 1, MangerAddress: 1, MangerAnnualLeave: 1, MangerAttendanceDate: 1, MangerBirthdate: 1, MangerCasualVacancy: 1, MangerDeparturedate: 1, MangerDisplayName: 1, MangerEducationalQualification: 1, MangerEmail: 1, MangerEmployeeStatus: 1, MangerFingerPrintCode: 1, MangerGraduationYears: 1, MangerHireDate: 1, MangerID: 1, MangerInsertDate: 1, MangerInsertUserId: 1, MangerIsActive: 1, MangerJobId: 1, MangerLastDirectoryUpdate: 1, MangerManagerId: 1, MangerMangerId: 1, MangerMilitaryStatus: 1, MangerPasswordHash: 1, MangerPasswordSalt: 1, MangerPersonalPhoneNumber: 1, MangerPersonalidentification: 1, MangerRegularvacation: 1, MangerSource: 1, MangerUpdateDate: 1, MangerUpdateUserId: 1, MangerUserImage: 1, MangerUsername: 1, MilitaryStatus: 1, Password: 1, PasswordConfirm: 1, PasswordHash: 1, PasswordSalt: 1, PersonalPhoneNumber: 1, Personalidentification: 1, Regularvacation: 1, Source: 1, UpdateDate: 1, UpdateUserId: 1, UserId: 1, UserImage: 1, Username: 1, insurancesQ: 1 }, Vacancies: { Id: 1, Vacancy: 1 }, VacancyPolicy: { Duration: 1, FromYears: 1, Id: 1, Limit: 1, Sending: 1, ToYears: 1, Vacancy: 1, VacancyId: 1 }, VacancyRequests: { Balance: 1, Date: 1, DateFrom: 1, Dateto: 1, Id: 1, IsAcceptedbyHr: 1, LeaveTaken: 1, Limit_in_Inser: 1, StatusId: 1, StatusStatusName: 1, Total: 1, TotlaLimit_relay: 1, UserAddress: 1, UserAnnualLeave: 1, UserAttendanceDate: 1, UserBirthdate: 1, UserCasualVacancy: 1, UserComment: 1, UserDeparturedate: 1, UserDisplayName: 1, UserEducationalQualification: 1, UserEmail: 1, UserEmployeeStatus: 1, UserFingerPrintCode: 1, UserGraduationYears: 1, UserHireDate: 1, UserId: 1, UserInsertDate: 1, UserInsertUserId: 1, UserIsActive: 1, UserJobId: 1, UserLastDirectoryUpdate: 1, UserMangerId: 1, UserMilitaryStatus: 1, UserPasswordHash: 1, UserPasswordSalt: 1, UserPersonalPhoneNumber: 1, UserPersonalidentification: 1, UserRegularvacation: 1, UserSource: 1, UserUpdateDate: 1, UserUpdateUserId: 1, UserUserImage: 1, UserUsername: 1, Vacancy: 1, VacancyId: 1 } }, RequestsStatus: { EmpLoans: { AdvancReason: 1, Date: 1, Id: 1, InstallmentValues: 1, InstallmentsList: 1, IsAccepted: 1, Loan: 1, UserAddress: 1, UserAnnualLeave: 1, UserAttendanceDate: 1, UserBalances: 1, UserBirthdate: 1, UserCasualVacancy: 1, UserDeparturedate: 1, UserDisplayName: 1, UserEducationalQualification: 1, UserEmail: 1, UserEmployeeStatus: 1, UserFingerPrintCode: 1, UserGraduationYears: 1, UserHireDate: 1, UserId: 1, UserInsertDate: 1, UserInsertUserId: 1, UserIsActive: 1, UserJobId: 1, UserLastDirectoryUpdate: 1, UserMangerId: 1, UserMilitaryStatus: 1, UserPasswordHash: 1, UserPasswordSalt: 1, UserPersonalPhoneNumber: 1, UserPersonalidentification: 1, UserRegularvacation: 1, UserSource: 1, UserUpdateDate: 1, UserUpdateUserId: 1, UserUserImage: 1, UserUsername: 1 }, Installments: { DateEmpLoan: 1, Id: 1, InstallmentDate: 1, InstallmentValues: 1, IsAccepted: 1, Loanid: 1, LoanidAdvancReason: 1, LoanidDate: 1, LoanidIsAccepted: 1, LoanidLoan: 1, LoanidUserId: 1, UserAddress: 1, UserAnnualLeave: 1, UserAttendanceDate: 1, UserBalances: 1, UserBirthdate: 1, UserCasualVacancy: 1, UserDeparturedate: 1, UserDisplayName: 1, UserEducationalQualification: 1, UserEmail: 1, UserEmployeeStatus: 1, UserFingerPrintCode: 1, UserGraduationYears: 1, UserHireDate: 1, UserId: 1, UserInsertDate: 1, UserInsertUserId: 1, UserIsActive: 1, UserJobId: 1, UserLastDirectoryUpdate: 1, UserMangerId: 1, UserMilitaryStatus: 1, UserPasswordHash: 1, UserPasswordSalt: 1, UserPersonalPhoneNumber: 1, UserPersonalidentification: 1, UserRegularvacation: 1, UserSource: 1, UserUpdateDate: 1, UserUpdateUserId: 1, UserUserImage: 1, UserUsername: 1 }, PermissionRequests: { Date: 1, DateFrom: 1, Dateto: 1, Id: 1, IsAcceptedbyHr: 1, PermissionId: 1, PermissionPermissiontype: 1, StatusId: 1, StatusStatusName: 1, UserAddress: 1, UserAnnualLeave: 1, UserAttendanceDate: 1, UserBirthdate: 1, UserCasualVacancy: 1, UserDeparturedate: 1, UserDisplayName: 1, UserEducationalQualification: 1, UserEmail: 1, UserEmployeeStatus: 1, UserFingerPrintCode: 1, UserGraduationYears: 1, UserHireDate: 1, UserId: 1, UserInsertDate: 1, UserInsertUserId: 1, UserIsActive: 1, UserJobId: 1, UserLastDirectoryUpdate: 1, UserMangerId: 1, UserMilitaryStatus: 1, UserPasswordHash: 1, UserPasswordSalt: 1, UserPersonalPhoneNumber: 1, UserPersonalidentification: 1, UserRegularvacation: 1, UserSource: 1, UserUpdateDate: 1, UserUpdateUserId: 1, UserUserImage: 1, UserUsername: 1 }, PermissionStatus: { Id: 1, Permissiontype: 1 }, VacancyRequests: { Date: 1, DateFrom: 1, Dateto: 1, Id: 1, IsAcceptedbyHr: 1, MangerComment: 1, StatusId: 1, StatusStatusName: 1, UserAddress: 1, UserAnnualLeave: 1, UserAttendanceDate: 1, UserBirthdate: 1, UserCasualVacancy: 1, UserDeparturedate: 1, UserDisplayName: 1, UserEducationalQualification: 1, UserEmail: 1, UserEmployeeStatus: 1, UserFingerPrintCode: 1, UserGraduationYears: 1, UserHireDate: 1, UserId: 1, UserInsertDate: 1, UserInsertUserId: 1, UserIsActive: 1, UserJobId: 1, UserLastDirectoryUpdate: 1, UserManagerId: 1, UserMangerId: 1, UserMilitaryStatus: 1, UserPasswordHash: 1, UserPasswordSalt: 1, UserPersonalPhoneNumber: 1, UserPersonalidentification: 1, UserRegularvacation: 1, UserSource: 1, UserUpdateDate: 1, UserUpdateUserId: 1, UserUserImage: 1, UserUsername: 1, Vacancy: 1, VacancyId: 1 } }, SalaryDetails: { Deductions: { Deduction: 1, DeductionsDate: 1, DeductionsReason: 1, Id: 1, UserAddress: 1, UserAnnualLeave: 1, UserAttendanceDate: 1, UserBirthdate: 1, UserCasualVacancy: 1, UserDeparturedate: 1, UserDisplayName: 1, UserEducationalQualification: 1, UserEmail: 1, UserEmployeeStatus: 1, UserFingerPrintCode: 1, UserGraduationYears: 1, UserHireDate: 1, UserId: 1, UserIdList: 1, UserInsertDate: 1, UserInsertUserId: 1, UserIsActive: 1, UserJobId: 1, UserLastDirectoryUpdate: 1, UserMangerId: 1, UserMilitaryStatus: 1, UserPasswordHash: 1, UserPasswordSalt: 1, UserPersonalPhoneNumber: 1, UserPersonalidentification: 1, UserRegularvacation: 1, UserSource: 1, UserUpdateDate: 1, UserUpdateUserId: 1, UserUserImage: 1, UserUsername: 1 }, EmpLoans: { AdvancReason: 1, Date: 1, Id: 1, InstallmentsList: 1, IsAccepted: 1, Loan: 1, UserAddress: 1, UserAnnualLeave: 1, UserAttendanceDate: 1, UserBirthdate: 1, UserCasualVacancy: 1, UserDeparturedate: 1, UserDisplayName: 1, UserEducationalQualification: 1, UserEmail: 1, UserEmployeeStatus: 1, UserFingerPrintCode: 1, UserGraduationYears: 1, UserHireDate: 1, UserId: 1, UserInsertDate: 1, UserInsertUserId: 1, UserIsActive: 1, UserJobId: 1, UserLastDirectoryUpdate: 1, UserMangerId: 1, UserMilitaryStatus: 1, UserPasswordHash: 1, UserPasswordSalt: 1, UserPersonalPhoneNumber: 1, UserPersonalidentification: 1, UserRegularvacation: 1, UserSource: 1, UserUpdateDate: 1, UserUpdateUserId: 1, UserUserImage: 1, UserUsername: 1 }, Entitlements: { Entitlement: 1, EntitlementReason: 1, EntitlementsDate: 1, Id: 1, UserAddress: 1, UserAnnualLeave: 1, UserAttendanceDate: 1, UserBirthdate: 1, UserCasualVacancy: 1, UserDeparturedate: 1, UserDisplayName: 1, UserEducationalQualification: 1, UserEmail: 1, UserEmployeeStatus: 1, UserFingerPrintCode: 1, UserGraduationYears: 1, UserHireDate: 1, UserId: 1, UserIdList: 1, UserInsertDate: 1, UserInsertUserId: 1, UserIsActive: 1, UserJobId: 1, UserLastDirectoryUpdate: 1, UserMangerId: 1, UserMilitaryStatus: 1, UserPasswordHash: 1, UserPasswordSalt: 1, UserPersonalPhoneNumber: 1, UserPersonalidentification: 1, UserRegularvacation: 1, UserSource: 1, UserUpdateDate: 1, UserUpdateUserId: 1, UserUserImage: 1, UserUsername: 1 }, Installments: { DateEmpLoan: 1, Id: 1, InstallmentDate: 1, InstallmentValues: 1, IsAccepted: 1, Loanid: 1, LoanidAdvancReason: 1, LoanidDate: 1, LoanidIsAccepted: 1, LoanidLoan: 1, LoanidUserId: 1, UserAddress: 1, UserAnnualLeave: 1, UserAttendanceDate: 1, UserBirthdate: 1, UserCasualVacancy: 1, UserDeparturedate: 1, UserDisplayName: 1, UserEducationalQualification: 1, UserEmail: 1, UserEmployeeStatus: 1, UserFingerPrintCode: 1, UserGraduationYears: 1, UserHireDate: 1, UserId: 1, UserInsertDate: 1, UserInsertUserId: 1, UserIsActive: 1, UserJobId: 1, UserLastDirectoryUpdate: 1, UserMangerId: 1, UserMilitaryStatus: 1, UserPasswordHash: 1, UserPasswordSalt: 1, UserPersonalPhoneNumber: 1, UserPersonalidentification: 1, UserRegularvacation: 1, UserSource: 1, UserUpdateDate: 1, UserUpdateUserId: 1, UserUserImage: 1, UserUsername: 1 }, Premiums: { Id: 1, Pname: 1, PremiumDate: 1, PremiumQuantity: 1, UserAddress: 1, UserAnnualLeave: 1, UserAttendanceDate: 1, UserBirthdate: 1, UserCasualVacancy: 1, UserDeparturedate: 1, UserDisplayName: 1, UserEducationalQualification: 1, UserEmail: 1, UserEmployeeStatus: 1, UserFingerPrintCode: 1, UserGraduationYears: 1, UserHireDate: 1, UserId: 1, UserIdList: 1, UserInsertDate: 1, UserInsertUserId: 1, UserIsActive: 1, UserJobId: 1, UserLastDirectoryUpdate: 1, UserMangerId: 1, UserMilitaryStatus: 1, UserPasswordHash: 1, UserPasswordSalt: 1, UserPersonalPhoneNumber: 1, UserPersonalidentification: 1, UserRegularvacation: 1, UserSource: 1, UserUpdateDate: 1, UserUpdateUserId: 1, UserUserImage: 1, UserUsername: 1, premiumType: 1 }, Premiumstype: { Id: 1, Premium: 1 } } }, Forms: { Membership: { ChangePassword: { FormTitle: 1, SubmitButton: 1, Success: 1 }, ForgotPassword: { BackToLogin: 1, FormInfo: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, Login: { FacebookButton: 1, ForgotPassword: 1, FormTitle: 1, GoogleButton: 1, OR: 1, RememberMe: 1, SignInButton: 1, SignUpButton: 1 }, ResetPassword: { BackToLogin: 1, EmailSubject: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, SignUp: { AcceptTerms: 1, ActivateEmailSubject: 1, ActivationCompleteMessage: 1, BackToLogin: 1, ConfirmEmail: 1, ConfirmPassword: 1, DisplayName: 1, Email: 1, FormInfo: 1, FormTitle: 1, Password: 1, SubmitButton: 1, Success: 1 } } }, Site: { AccessDenied: { ClickToChangeUser: 1, ClickToLogin: 1, LackPermissions: 1, NotLoggedIn: 1, PageTitle: 1 }, BasicProgressDialog: { CancelTitle: 1, PleaseWait: 1 }, BulkServiceAction: { AllHadErrorsFormat: 1, AllSuccessFormat: 1, ConfirmationFormat: 1, ErrorCount: 1, NothingToProcess: 1, SomeHadErrorsFormat: 1, SuccessCount: 1 }, Dashboard: { ContentDescription: 1 }, Layout: { FooterCopyright: 1, FooterInfo: 1, FooterRights: 1, GeneralSettings: 1, Language: 1, Theme: 1, ThemeBlack: 1, ThemeBlackLight: 1, ThemeBlue: 1, ThemeBlueLight: 1, ThemeGreen: 1, ThemeGreenLight: 1, ThemePurple: 1, ThemePurpleLight: 1, ThemeRed: 1, ThemeRedLight: 1, ThemeYellow: 1, ThemeYellowLight: 1 }, RolePermissionDialog: { DialogTitle: 1, EditButton: 1, SaveSuccess: 1 }, UserDialog: { EditPermissionsButton: 1, EditRolesButton: 1 }, UserPermissionDialog: { DialogTitle: 1, Grant: 1, Permission: 1, Revoke: 1, SaveSuccess: 1 }, UserRoleDialog: { DialogTitle: 1, SaveSuccess: 1 }, ValidationError: { Title: 1 } }, Validation: { AuthenticationError: 1, CantFindUserWithEmail: 1, CurrentPasswordMismatch: 1, DeleteForeignKeyError: 1, EmailConfirm: 1, EmailInUse: 1, InvalidActivateToken: 1, InvalidResetToken: 1, MinRequiredPasswordLength: 1, SavePrimaryKeyError: 1 } });
    })(Texts = HRM.Texts || (HRM.Texts = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Common;
    (function (Common) {
        var GridEditorDialog = /** @class */ (function (_super) {
            __extends(GridEditorDialog, _super);
            function GridEditorDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GridEditorDialog.prototype.getIdProperty = function () { return "__id"; };
            GridEditorDialog.prototype.destroy = function () {
                this.onSave = null;
                this.onDelete = null;
                _super.prototype.destroy.call(this);
            };
            GridEditorDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                // apply changes button doesn't work properly with in-memory grids yet
                if (this.applyChangesButton) {
                    this.applyChangesButton.hide();
                }
            };
            GridEditorDialog.prototype.saveHandler = function (options, callback) {
                this.onSave && this.onSave(options, callback);
            };
            GridEditorDialog.prototype.deleteHandler = function (options, callback) {
                this.onDelete && this.onDelete(options, callback);
            };
            GridEditorDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], GridEditorDialog);
            return GridEditorDialog;
        }(Serenity.EntityDialog));
        Common.GridEditorDialog = GridEditorDialog;
    })(Common = HRM.Common || (HRM.Common = {}));
})(HRM || (HRM = {}));
/// <reference path="../../common/helpers/grideditordialog.ts" />
var HRM;
(function (HRM) {
    var Administration;
    (function (Administration) {
        var AllowancesDialog = /** @class */ (function (_super) {
            __extends(AllowancesDialog, _super);
            function AllowancesDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Administration.AllowancesForm(_this.idPrefix);
                return _this;
            }
            AllowancesDialog.prototype.getFormKey = function () { return Administration.AllowancesForm.formKey; };
            //protected getIdProperty() { return AllowancesRow.idProperty; }
            AllowancesDialog.prototype.getLocalTextPrefix = function () { return Administration.AllowancesRow.localTextPrefix; };
            AllowancesDialog.prototype.getNameProperty = function () { return Administration.AllowancesRow.nameProperty; };
            AllowancesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], AllowancesDialog);
            return AllowancesDialog;
        }(HRM.Common.GridEditorDialog));
        Administration.AllowancesDialog = AllowancesDialog;
    })(Administration = HRM.Administration || (HRM.Administration = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Common;
    (function (Common) {
        var GridEditorBase = /** @class */ (function (_super) {
            __extends(GridEditorBase, _super);
            function GridEditorBase(container) {
                var _this = _super.call(this, container) || this;
                _this.nextId = 1;
                return _this;
            }
            GridEditorBase.prototype.getIdProperty = function () { return "__id"; };
            GridEditorBase.prototype.id = function (entity) {
                return entity[this.getIdProperty()];
            };
            GridEditorBase.prototype.getNextId = function () {
                return "`" + this.nextId++;
            };
            GridEditorBase.prototype.setNewId = function (entity) {
                entity[this.getIdProperty()] = this.getNextId();
            };
            GridEditorBase.prototype.save = function (opt, callback) {
                var _this = this;
                var request = opt.request;
                var row = Q.deepClone(request.Entity);
                var id = this.id(row);
                if (id == null) {
                    row[this.getIdProperty()] = this.getNextId();
                }
                if (!this.validateEntity(row, id)) {
                    return;
                }
                var items = this.view.getItems().slice();
                if (id == null) {
                    items.push(row);
                }
                else {
                    var index = Q.indexOf(items, function (x) { return _this.id(x) === id; });
                    items[index] = Q.deepClone({}, items[index], row);
                }
                this.setEntities(items);
                callback({});
            };
            GridEditorBase.prototype.deleteEntity = function (id) {
                this.view.deleteItem(id);
                return true;
            };
            GridEditorBase.prototype.validateEntity = function (row, id) {
                return true;
            };
            GridEditorBase.prototype.setEntities = function (items) {
                this.view.setItems(items, true);
            };
            GridEditorBase.prototype.getNewEntity = function () {
                return {};
            };
            GridEditorBase.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: this.getAddButtonCaption(),
                        cssClass: 'add-button',
                        onClick: function () {
                            _this.createEntityDialog(_this.getItemType(), function (dlg) {
                                var dialog = dlg;
                                dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                                dialog.loadEntityAndOpenDialog(_this.getNewEntity());
                            });
                        }
                    }];
            };
            GridEditorBase.prototype.editItem = function (entityOrId) {
                var _this = this;
                var id = entityOrId;
                var item = this.view.getItemById(id);
                this.createEntityDialog(this.getItemType(), function (dlg) {
                    var dialog = dlg;
                    dialog.onDelete = function (opt, callback) {
                        if (!_this.deleteEntity(id)) {
                            return;
                        }
                        callback({});
                    };
                    dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                    dialog.loadEntityAndOpenDialog(item);
                });
                ;
            };
            GridEditorBase.prototype.getEditValue = function (property, target) {
                target[property.name] = this.value;
            };
            GridEditorBase.prototype.setEditValue = function (source, property) {
                this.value = source[property.name];
            };
            Object.defineProperty(GridEditorBase.prototype, "value", {
                get: function () {
                    var p = this.getIdProperty();
                    return this.view.getItems().map(function (x) {
                        var y = Q.deepClone(x);
                        var id = y[p];
                        if (id && id.toString().charAt(0) == '`')
                            delete y[p];
                        return y;
                    });
                },
                set: function (value) {
                    var _this = this;
                    var p = this.getIdProperty();
                    this.view.setItems((value || []).map(function (x) {
                        var y = Q.deepClone(x);
                        if (y[p] == null)
                            y[p] = "`" + _this.getNextId();
                        return y;
                    }), true);
                },
                enumerable: true,
                configurable: true
            });
            GridEditorBase.prototype.getGridCanLoad = function () {
                return false;
            };
            GridEditorBase.prototype.usePager = function () {
                return false;
            };
            GridEditorBase.prototype.getInitialTitle = function () {
                return null;
            };
            GridEditorBase.prototype.createQuickSearchInput = function () {
            };
            GridEditorBase.prototype.enableDeleteColumn = function () {
                return false;
            };
            GridEditorBase.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                if (this.enableDeleteColumn()) {
                    columns.unshift({
                        field: 'Delete Row',
                        name: '',
                        format: function (ctx) { return '<a class="inline-action delete-row" title="delete">' +
                            '<i class="fa fa-trash-o text-red"></i></a>'; },
                        width: 24,
                        minWidth: 24,
                        maxWidth: 24
                    });
                }
                return columns;
            };
            GridEditorBase.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented())
                    return;
                var item = this.itemAt(row);
                var target = $(e.target);
                // if user clicks "i" element, e.g. icon
                if (target.parent().hasClass('inline-action'))
                    target = target.parent();
                if (target.hasClass('inline-action')) {
                    e.preventDefault();
                    if (this.enableDeleteColumn()) {
                        if (target.hasClass('delete-row')) {
                            Q.confirm(Q.text('Controls.EntityDialog.DeleteConfirmation'), function () {
                                _this.deleteEntity(item[_this.getIdProperty()]);
                            });
                        }
                    }
                }
            };
            GridEditorBase = __decorate([
                Serenity.Decorators.registerClass([Serenity.IGetEditValue, Serenity.ISetEditValue]),
                Serenity.Decorators.editor(),
                Serenity.Decorators.element("<div/>")
            ], GridEditorBase);
            return GridEditorBase;
        }(Serenity.EntityGrid));
        Common.GridEditorBase = GridEditorBase;
    })(Common = HRM.Common || (HRM.Common = {}));
})(HRM || (HRM = {}));
/// <reference path="../../common/helpers/grideditorbase.ts" />
var HRM;
(function (HRM) {
    var Administration;
    (function (Administration) {
        var AllowancesEditor = /** @class */ (function (_super) {
            __extends(AllowancesEditor, _super);
            function AllowancesEditor(container) {
                return _super.call(this, container) || this;
            }
            AllowancesEditor.prototype.getColumnsKey = function () { return "Administration.Allowances"; };
            AllowancesEditor.prototype.getDialogType = function () { return Administration.AllowancesDialog; };
            //protected getIdProperty() { return AllowancesRow.idProperty; }
            AllowancesEditor.prototype.getLocalTextPrefix = function () { return Administration.AllowancesRow.localTextPrefix; };
            AllowancesEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], AllowancesEditor);
            return AllowancesEditor;
        }(HRM.Common.GridEditorBase));
        Administration.AllowancesEditor = AllowancesEditor;
    })(Administration = HRM.Administration || (HRM.Administration = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Administration;
    (function (Administration) {
        var AllowancesGrid = /** @class */ (function (_super) {
            __extends(AllowancesGrid, _super);
            function AllowancesGrid(container) {
                return _super.call(this, container) || this;
            }
            AllowancesGrid.prototype.getColumnsKey = function () { return 'Administration.Allowances'; };
            AllowancesGrid.prototype.getDialogType = function () { return Administration.AllowancesDialog; };
            AllowancesGrid.prototype.getIdProperty = function () { return Administration.AllowancesRow.idProperty; };
            AllowancesGrid.prototype.getInsertPermission = function () { return Administration.AllowancesRow.insertPermission; };
            AllowancesGrid.prototype.getLocalTextPrefix = function () { return Administration.AllowancesRow.localTextPrefix; };
            AllowancesGrid.prototype.getService = function () { return Administration.AllowancesService.baseUrl; };
            AllowancesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AllowancesGrid);
            return AllowancesGrid;
        }(Serenity.EntityGrid));
        Administration.AllowancesGrid = AllowancesGrid;
    })(Administration = HRM.Administration || (HRM.Administration = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Administration;
    (function (Administration) {
        var BalanceAccountDialog = /** @class */ (function (_super) {
            __extends(BalanceAccountDialog, _super);
            function BalanceAccountDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.BalanceAccountForm(_this.idPrefix);
                return _this;
            }
            BalanceAccountDialog.prototype.getFormKey = function () { return Administration.BalanceAccountForm.formKey; };
            BalanceAccountDialog.prototype.getIdProperty = function () { return Administration.BalanceAccountRow.idProperty; };
            BalanceAccountDialog.prototype.getLocalTextPrefix = function () { return Administration.BalanceAccountRow.localTextPrefix; };
            BalanceAccountDialog.prototype.getService = function () { return Administration.BalanceAccountService.baseUrl; };
            BalanceAccountDialog.prototype.getDeletePermission = function () { return Administration.BalanceAccountRow.deletePermission; };
            BalanceAccountDialog.prototype.getInsertPermission = function () { return Administration.BalanceAccountRow.insertPermission; };
            BalanceAccountDialog.prototype.getUpdatePermission = function () { return Administration.BalanceAccountRow.updatePermission; };
            BalanceAccountDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], BalanceAccountDialog);
            return BalanceAccountDialog;
        }(Serenity.EntityDialog));
        Administration.BalanceAccountDialog = BalanceAccountDialog;
    })(Administration = HRM.Administration || (HRM.Administration = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Administration;
    (function (Administration) {
        var BalanceAccountGrid = /** @class */ (function (_super) {
            __extends(BalanceAccountGrid, _super);
            function BalanceAccountGrid(container) {
                return _super.call(this, container) || this;
            }
            BalanceAccountGrid.prototype.getColumnsKey = function () { return 'Administration.BalanceAccount'; };
            BalanceAccountGrid.prototype.getDialogType = function () { return Administration.BalanceAccountDialog; };
            BalanceAccountGrid.prototype.getIdProperty = function () { return Administration.BalanceAccountRow.idProperty; };
            BalanceAccountGrid.prototype.getInsertPermission = function () { return Administration.BalanceAccountRow.insertPermission; };
            BalanceAccountGrid.prototype.getLocalTextPrefix = function () { return Administration.BalanceAccountRow.localTextPrefix; };
            BalanceAccountGrid.prototype.getService = function () { return Administration.BalanceAccountService.baseUrl; };
            //getButtons() {
            //    var buttons = super.getButtons();
            //    //buttons.splice(Q.indexOf(buttons, x => x.cssClass == "add-button"), 1);
            //    //buttons.push(
            //    //    {
            //    //        title: Q.text("Close the Budget"),	// *** Get button text from translation
            //    //        cssClass: 'stampe',
            //    //        icon: 'fa-print',
            //    //        onClick: () => {
            //    //            BalanceAccountService.CreateAll({ // Adding button and  adding table with End Balance
            //    //                Entity: {
            //    //                }
            //    //            }, response => {
            //    //                this.refresh();
            //    //                Q.notifySuccess("Success");
            //    //            })
            //    //        },
            //    //    },
            //    );
            //    return buttons;
            //}
            BalanceAccountGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                return columns;
            };
            /**
             * This method is called for all rows
             * @param item Data item for current row
             * @param index Index of the row in grid
             */
            BalanceAccountGrid.prototype.getItemCssClass = function (item, index) {
                var klass = "";
                var Month = new Date(item.DateEnd);
                var MonthNow = (new Date().getUTCMonth()) + 1;
                ;
                var MonthTable = (parseInt(Month.getUTCMonth().toString())) + 1;
                if (MonthNow < MonthTable) { //4ahr Lsa mgash
                    klass += "Next-month";
                }
                else if (MonthNow > MonthTable) {
                    klass += "Last-month";
                }
                else {
                    klass += "Current-month ";
                }
                return Q.trimToNull(klass);
            };
            BalanceAccountGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], BalanceAccountGrid);
            return BalanceAccountGrid;
        }(Serenity.EntityGrid));
        Administration.BalanceAccountGrid = BalanceAccountGrid;
    })(Administration = HRM.Administration || (HRM.Administration = {}));
})(HRM || (HRM = {}));
/// <reference path="../../common/helpers/grideditorbase.ts" />
var HRM;
(function (HRM) {
    var Administration;
    (function (Administration) {
        var BasicInsuranceEditor = /** @class */ (function (_super) {
            __extends(BasicInsuranceEditor, _super);
            function BasicInsuranceEditor(container) {
                return _super.call(this, container) || this;
            }
            BasicInsuranceEditor.prototype.getColumnsKey = function () { return "Administration.BasicInsurances"; };
            BasicInsuranceEditor.prototype.getDialogType = function () { return Administration.SubBasicIsuranceDialog; };
            //protected getIdProperty() { return AllowancesRow.idProperty; }
            BasicInsuranceEditor.prototype.getLocalTextPrefix = function () { return Administration.BasicInsurancesRow.localTextPrefix; };
            BasicInsuranceEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], BasicInsuranceEditor);
            return BasicInsuranceEditor;
        }(HRM.Common.GridEditorBase));
        Administration.BasicInsuranceEditor = BasicInsuranceEditor;
    })(Administration = HRM.Administration || (HRM.Administration = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Administration;
    (function (Administration) {
        var BasicInsurancesDialog = /** @class */ (function (_super) {
            __extends(BasicInsurancesDialog, _super);
            function BasicInsurancesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.BasicInsurancesForm(_this.idPrefix);
                return _this;
            }
            BasicInsurancesDialog.prototype.getFormKey = function () { return Administration.BasicInsurancesForm.formKey; };
            BasicInsurancesDialog.prototype.getIdProperty = function () { return Administration.BasicInsurancesRow.idProperty; };
            BasicInsurancesDialog.prototype.getLocalTextPrefix = function () { return Administration.BasicInsurancesRow.localTextPrefix; };
            BasicInsurancesDialog.prototype.getNameProperty = function () { return Administration.BasicInsurancesRow.nameProperty; };
            BasicInsurancesDialog.prototype.getService = function () { return Administration.BasicInsurancesService.baseUrl; };
            BasicInsurancesDialog.prototype.getDeletePermission = function () { return Administration.BasicInsurancesRow.deletePermission; };
            BasicInsurancesDialog.prototype.getInsertPermission = function () { return Administration.BasicInsurancesRow.insertPermission; };
            BasicInsurancesDialog.prototype.getUpdatePermission = function () { return Administration.BasicInsurancesRow.updatePermission; };
            BasicInsurancesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], BasicInsurancesDialog);
            return BasicInsurancesDialog;
        }(Serenity.EntityDialog));
        Administration.BasicInsurancesDialog = BasicInsurancesDialog;
    })(Administration = HRM.Administration || (HRM.Administration = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Administration;
    (function (Administration) {
        var BasicInsurancesGrid = /** @class */ (function (_super) {
            __extends(BasicInsurancesGrid, _super);
            function BasicInsurancesGrid(container) {
                return _super.call(this, container) || this;
            }
            BasicInsurancesGrid.prototype.getColumnsKey = function () { return 'Administration.BasicInsurances'; };
            BasicInsurancesGrid.prototype.getDialogType = function () { return Administration.BasicInsurancesDialog; };
            BasicInsurancesGrid.prototype.getIdProperty = function () { return Administration.BasicInsurancesRow.idProperty; };
            BasicInsurancesGrid.prototype.getInsertPermission = function () { return Administration.BasicInsurancesRow.insertPermission; };
            BasicInsurancesGrid.prototype.getLocalTextPrefix = function () { return Administration.BasicInsurancesRow.localTextPrefix; };
            BasicInsurancesGrid.prototype.getService = function () { return Administration.BasicInsurancesService.baseUrl; };
            BasicInsurancesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], BasicInsurancesGrid);
            return BasicInsurancesGrid;
        }(Serenity.EntityGrid));
        Administration.BasicInsurancesGrid = BasicInsurancesGrid;
    })(Administration = HRM.Administration || (HRM.Administration = {}));
})(HRM || (HRM = {}));
/// <reference path="../../common/helpers/grideditordialog.ts" />
var HRM;
(function (HRM) {
    var Administration;
    (function (Administration) {
        var SubBasicIsuranceDialog = /** @class */ (function (_super) {
            __extends(SubBasicIsuranceDialog, _super);
            function SubBasicIsuranceDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Administration.BasicInsurancesForm(_this.idPrefix);
                return _this;
            }
            SubBasicIsuranceDialog.prototype.getFormKey = function () { return Administration.BasicInsurancesForm.formKey; };
            //protected getIdProperty() { return AllowancesRow.idProperty; }
            SubBasicIsuranceDialog.prototype.getLocalTextPrefix = function () { return Administration.BasicInsurancesRow.localTextPrefix; };
            SubBasicIsuranceDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], SubBasicIsuranceDialog);
            return SubBasicIsuranceDialog;
        }(HRM.Common.GridEditorDialog));
        Administration.SubBasicIsuranceDialog = SubBasicIsuranceDialog;
    })(Administration = HRM.Administration || (HRM.Administration = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Administration;
    (function (Administration) {
        var EmploeesStatusDialog = /** @class */ (function (_super) {
            __extends(EmploeesStatusDialog, _super);
            function EmploeesStatusDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.EmploeesStatusForm(_this.idPrefix);
                return _this;
            }
            EmploeesStatusDialog.prototype.getFormKey = function () { return Administration.EmploeesStatusForm.formKey; };
            EmploeesStatusDialog.prototype.getIdProperty = function () { return Administration.EmploeesStatusRow.idProperty; };
            EmploeesStatusDialog.prototype.getLocalTextPrefix = function () { return Administration.EmploeesStatusRow.localTextPrefix; };
            EmploeesStatusDialog.prototype.getService = function () { return Administration.EmploeesStatusService.baseUrl; };
            EmploeesStatusDialog.prototype.getDeletePermission = function () { return Administration.EmploeesStatusRow.deletePermission; };
            EmploeesStatusDialog.prototype.getInsertPermission = function () { return Administration.EmploeesStatusRow.insertPermission; };
            EmploeesStatusDialog.prototype.getUpdatePermission = function () { return Administration.EmploeesStatusRow.updatePermission; };
            EmploeesStatusDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], EmploeesStatusDialog);
            return EmploeesStatusDialog;
        }(Serenity.EntityDialog));
        Administration.EmploeesStatusDialog = EmploeesStatusDialog;
    })(Administration = HRM.Administration || (HRM.Administration = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Administration;
    (function (Administration) {
        var EmploeesStatusGrid = /** @class */ (function (_super) {
            __extends(EmploeesStatusGrid, _super);
            function EmploeesStatusGrid(container) {
                return _super.call(this, container) || this;
            }
            EmploeesStatusGrid.prototype.getColumnsKey = function () { return 'Administration.EmploeesStatus'; };
            EmploeesStatusGrid.prototype.getDialogType = function () { return Administration.EmploeesStatusDialog; };
            EmploeesStatusGrid.prototype.getIdProperty = function () { return Administration.EmploeesStatusRow.idProperty; };
            EmploeesStatusGrid.prototype.getInsertPermission = function () { return Administration.EmploeesStatusRow.insertPermission; };
            EmploeesStatusGrid.prototype.getLocalTextPrefix = function () { return Administration.EmploeesStatusRow.localTextPrefix; };
            EmploeesStatusGrid.prototype.getService = function () { return Administration.EmploeesStatusService.baseUrl; };
            EmploeesStatusGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], EmploeesStatusGrid);
            return EmploeesStatusGrid;
        }(Serenity.EntityGrid));
        Administration.EmploeesStatusGrid = EmploeesStatusGrid;
    })(Administration = HRM.Administration || (HRM.Administration = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Administration;
    (function (Administration) {
        var FinancialyearDialog = /** @class */ (function (_super) {
            __extends(FinancialyearDialog, _super);
            function FinancialyearDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.FinancialyearForm(_this.idPrefix);
                return _this;
                //protected onDialogOpen() {
                //    $(".ui-dialog-titlebar-maximize").click();
                //    super.onDialogOpen();
                //}
            }
            FinancialyearDialog.prototype.getFormKey = function () { return Administration.FinancialyearForm.formKey; };
            FinancialyearDialog.prototype.getIdProperty = function () { return Administration.FinancialyearRow.idProperty; };
            FinancialyearDialog.prototype.getLocalTextPrefix = function () { return Administration.FinancialyearRow.localTextPrefix; };
            FinancialyearDialog.prototype.getService = function () { return Administration.FinancialyearService.baseUrl; };
            FinancialyearDialog.prototype.getDeletePermission = function () { return Administration.FinancialyearRow.deletePermission; };
            FinancialyearDialog.prototype.getInsertPermission = function () { return Administration.FinancialyearRow.insertPermission; };
            FinancialyearDialog.prototype.getUpdatePermission = function () { return Administration.FinancialyearRow.updatePermission; };
            FinancialyearDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.maximizable()
            ], FinancialyearDialog);
            return FinancialyearDialog;
        }(Serenity.EntityDialog));
        Administration.FinancialyearDialog = FinancialyearDialog;
    })(Administration = HRM.Administration || (HRM.Administration = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Administration;
    (function (Administration) {
        var FinancialyearGrid = /** @class */ (function (_super) {
            __extends(FinancialyearGrid, _super);
            function FinancialyearGrid(container) {
                return _super.call(this, container) || this;
            }
            FinancialyearGrid.prototype.getColumnsKey = function () { return 'Administration.Financialyear'; };
            FinancialyearGrid.prototype.getDialogType = function () { return Administration.FinancialyearDialog; };
            FinancialyearGrid.prototype.getIdProperty = function () { return Administration.FinancialyearRow.idProperty; };
            FinancialyearGrid.prototype.getInsertPermission = function () { return Administration.FinancialyearRow.insertPermission; };
            FinancialyearGrid.prototype.getLocalTextPrefix = function () { return Administration.FinancialyearRow.localTextPrefix; };
            FinancialyearGrid.prototype.getService = function () { return Administration.FinancialyearService.baseUrl; };
            FinancialyearGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], FinancialyearGrid);
            return FinancialyearGrid;
        }(Serenity.EntityGrid));
        Administration.FinancialyearGrid = FinancialyearGrid;
    })(Administration = HRM.Administration || (HRM.Administration = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Administration;
    (function (Administration) {
        var LanguageDialog = /** @class */ (function (_super) {
            __extends(LanguageDialog, _super);
            function LanguageDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.LanguageForm(_this.idPrefix);
                return _this;
            }
            LanguageDialog.prototype.getFormKey = function () { return Administration.LanguageForm.formKey; };
            LanguageDialog.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageDialog.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageDialog.prototype.getNameProperty = function () { return Administration.LanguageRow.nameProperty; };
            LanguageDialog.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageDialog);
            return LanguageDialog;
        }(Serenity.EntityDialog));
        Administration.LanguageDialog = LanguageDialog;
    })(Administration = HRM.Administration || (HRM.Administration = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Administration;
    (function (Administration) {
        var LanguageGrid = /** @class */ (function (_super) {
            __extends(LanguageGrid, _super);
            function LanguageGrid(container) {
                return _super.call(this, container) || this;
            }
            LanguageGrid.prototype.getColumnsKey = function () { return "Administration.Language"; };
            LanguageGrid.prototype.getDialogType = function () { return Administration.LanguageDialog; };
            LanguageGrid.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageGrid.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageGrid.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageGrid.prototype.getDefaultSortBy = function () {
                return ["LanguageName" /* LanguageName */];
            };
            LanguageGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageGrid);
            return LanguageGrid;
        }(Serenity.EntityGrid));
        Administration.LanguageGrid = LanguageGrid;
    })(Administration = HRM.Administration || (HRM.Administration = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Administration;
    (function (Administration) {
        var OfficialHolidaysDialog = /** @class */ (function (_super) {
            __extends(OfficialHolidaysDialog, _super);
            function OfficialHolidaysDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Administration.OfficialHolidaysForm(_this.idPrefix);
                _this.form.weekdays.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.FromHoliday.value != null || _this.form.ToHoliday.value != null)
                        return "Remove this value !";
                });
                _this.form.FromHoliday.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.weekdays.value != "")
                        return "Remove this value !";
                });
                _this.form.ToHoliday.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.weekdays.value != "")
                        return "Remove this value !";
                });
                return _this;
            }
            OfficialHolidaysDialog.prototype.getFormKey = function () { return Administration.OfficialHolidaysForm.formKey; };
            OfficialHolidaysDialog.prototype.getIdProperty = function () { return Administration.OfficialHolidaysRow.idProperty; };
            OfficialHolidaysDialog.prototype.getLocalTextPrefix = function () { return Administration.OfficialHolidaysRow.localTextPrefix; };
            OfficialHolidaysDialog.prototype.getNameProperty = function () { return Administration.OfficialHolidaysRow.nameProperty; };
            OfficialHolidaysDialog.prototype.getService = function () { return Administration.OfficialHolidaysService.baseUrl; };
            OfficialHolidaysDialog.prototype.getDeletePermission = function () { return Administration.OfficialHolidaysRow.deletePermission; };
            OfficialHolidaysDialog.prototype.getInsertPermission = function () { return Administration.OfficialHolidaysRow.insertPermission; };
            OfficialHolidaysDialog.prototype.getUpdatePermission = function () { return Administration.OfficialHolidaysRow.updatePermission; };
            OfficialHolidaysDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var IsClick;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    icon: Q.text("fa fa-adjust"),
                    cssClass: Q.text("Weekdays"),
                    onClick: function () {
                        if (IsClick == false) {
                            IsClick = true;
                            _this.form.FromHoliday.getGridField().toggle(true);
                            _this.form.ToHoliday.getGridField().toggle(true);
                            _this.form.weekdays.getGridField().toggle(false);
                        }
                        else {
                            IsClick = false;
                            _this.form.FromHoliday.getGridField().toggle(false);
                            _this.form.ToHoliday.getGridField().toggle(false);
                            _this.form.weekdays.getGridField().toggle(true);
                        }
                    }
                });
                return buttons;
            };
            OfficialHolidaysDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                if (this.form.FromHoliday.value != null || this.form.ToHoliday.value != null) {
                    this.form.FromHoliday.getGridField().toggle(true);
                    this.form.ToHoliday.getGridField().toggle(true);
                    this.form.weekdays.getGridField().toggle(false);
                }
                else if (this.form.weekdays.value != "") {
                    this.form.FromHoliday.getGridField().toggle(false);
                    this.form.ToHoliday.getGridField().toggle(false);
                    this.form.weekdays.getGridField().toggle(true);
                }
            };
            OfficialHolidaysDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], OfficialHolidaysDialog);
            return OfficialHolidaysDialog;
        }(Serenity.EntityDialog));
        Administration.OfficialHolidaysDialog = OfficialHolidaysDialog;
    })(Administration = HRM.Administration || (HRM.Administration = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Administration;
    (function (Administration) {
        var OfficialHolidaysGrid = /** @class */ (function (_super) {
            __extends(OfficialHolidaysGrid, _super);
            function OfficialHolidaysGrid(container) {
                return _super.call(this, container) || this;
            }
            OfficialHolidaysGrid.prototype.getColumnsKey = function () { return 'Administration.OfficialHolidays'; };
            OfficialHolidaysGrid.prototype.getDialogType = function () { return Administration.OfficialHolidaysDialog; };
            OfficialHolidaysGrid.prototype.getIdProperty = function () { return Administration.OfficialHolidaysRow.idProperty; };
            OfficialHolidaysGrid.prototype.getInsertPermission = function () { return Administration.OfficialHolidaysRow.insertPermission; };
            OfficialHolidaysGrid.prototype.getLocalTextPrefix = function () { return Administration.OfficialHolidaysRow.localTextPrefix; };
            OfficialHolidaysGrid.prototype.getService = function () { return Administration.OfficialHolidaysService.baseUrl; };
            OfficialHolidaysGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], OfficialHolidaysGrid);
            return OfficialHolidaysGrid;
        }(Serenity.EntityGrid));
        Administration.OfficialHolidaysGrid = OfficialHolidaysGrid;
    })(Administration = HRM.Administration || (HRM.Administration = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Administration;
    (function (Administration) {
        var RoleDialog = /** @class */ (function (_super) {
            __extends(RoleDialog, _super);
            function RoleDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.RoleForm(_this.idPrefix);
                return _this;
            }
            RoleDialog.prototype.getFormKey = function () { return Administration.RoleForm.formKey; };
            RoleDialog.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleDialog.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleDialog.prototype.getNameProperty = function () { return Administration.RoleRow.nameProperty; };
            RoleDialog.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.RolePermissionDialog.EditButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.RolePermissionDialog({
                            roleID: _this.entity.RoleId,
                            title: _this.entity.RoleName
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            RoleDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            RoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleDialog);
            return RoleDialog;
        }(Serenity.EntityDialog));
        Administration.RoleDialog = RoleDialog;
    })(Administration = HRM.Administration || (HRM.Administration = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Administration;
    (function (Administration) {
        var RoleGrid = /** @class */ (function (_super) {
            __extends(RoleGrid, _super);
            function RoleGrid(container) {
                return _super.call(this, container) || this;
            }
            RoleGrid.prototype.getColumnsKey = function () { return "Administration.Role"; };
            RoleGrid.prototype.getDialogType = function () { return Administration.RoleDialog; };
            RoleGrid.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleGrid.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleGrid.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleGrid.prototype.getDefaultSortBy = function () {
                return ["RoleName" /* RoleName */];
            };
            RoleGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleGrid);
            return RoleGrid;
        }(Serenity.EntityGrid));
        Administration.RoleGrid = RoleGrid;
    })(Administration = HRM.Administration || (HRM.Administration = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Administration;
    (function (Administration) {
        var RolePermissionDialog = /** @class */ (function (_super) {
            __extends(RolePermissionDialog, _super);
            function RolePermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: false
                });
                Administration.RolePermissionService.List({
                    RoleID: _this.options.roleID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return ({ PermissionKey: x }); });
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            RolePermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.RolePermissionService.Update({
                                RoleID: _this.options.roleID,
                                Permissions: _this.permissions.value.map(function (x) { return x.PermissionKey; }),
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.RolePermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.RolePermissionDialog.DialogTitle'), this.options.title);
                return opt;
            };
            RolePermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            RolePermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RolePermissionDialog);
            return RolePermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.RolePermissionDialog = RolePermissionDialog;
    })(Administration = HRM.Administration || (HRM.Administration = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Administration;
    (function (Administration) {
        var TranslationGrid = /** @class */ (function (_super) {
            __extends(TranslationGrid, _super);
            function TranslationGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.element.on('keyup.' + _this.uniqueName + ' change.' + _this.uniqueName, 'input.custom-text', function (e) {
                    var value = Q.trimToNull($(e.target).val());
                    if (value === '') {
                        value = null;
                    }
                    _this.view.getItemById($(e.target).data('key')).CustomText = value;
                    _this.hasChanges = true;
                });
                return _this;
            }
            TranslationGrid.prototype.getIdProperty = function () { return "Key"; };
            TranslationGrid.prototype.getLocalTextPrefix = function () { return "Administration.Translation"; };
            TranslationGrid.prototype.getService = function () { return Administration.TranslationService.baseUrl; };
            TranslationGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented()) {
                    return;
                }
                var item = this.itemAt(row);
                var done;
                if ($(e.target).hasClass('source-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.SourceText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.SourceText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
                if ($(e.target).hasClass('target-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.TargetText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.TargetText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
            };
            TranslationGrid.prototype.getColumns = function () {
                var columns = [];
                columns.push({ field: 'Key', width: 300, sortable: false });
                columns.push({
                    field: 'SourceText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) {
                        return Q.outerHtml($('<a/>')
                            .addClass('source-text')
                            .text(ctx.value || ''));
                    }
                });
                columns.push({
                    field: 'CustomText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<input/>')
                        .addClass('custom-text')
                        .attr('value', ctx.value)
                        .attr('type', 'text')
                        .attr('data-key', ctx.item.Key)); }
                });
                columns.push({
                    field: 'TargetText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<a/>')
                        .addClass('target-text')
                        .text(ctx.value || '')); }
                });
                return columns;
            };
            TranslationGrid.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                var opt = {
                    lookupKey: 'Administration.Language'
                };
                this.sourceLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.SourceLanguage') + ' ---'); },
                    options: opt
                });
                this.sourceLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
                this.targetLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.TargetLanguage') + ' ---'); },
                    options: opt
                });
                this.targetLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
            };
            TranslationGrid.prototype.saveChanges = function (language) {
                var _this = this;
                var translations = {};
                for (var _i = 0, _a = this.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    translations[item.Key] = item.CustomText;
                }
                return Promise.resolve(Administration.TranslationService.Update({
                    TargetLanguageID: language,
                    Translations: translations
                })).then(function () {
                    _this.hasChanges = false;
                    language = Q.trimToNull(language) || 'invariant';
                    Q.notifySuccess('User translations in "' + language +
                        '" language are saved to "user.texts.' +
                        language + '.json" ' + 'file under "~/App_Data/texts/"', '');
                });
            };
            TranslationGrid.prototype.onViewSubmit = function () {
                var request = this.view.params;
                request.SourceLanguageID = this.sourceLanguage.value;
                this.targetLanguageKey = this.targetLanguage.value || '';
                request.TargetLanguageID = this.targetLanguageKey;
                this.hasChanges = false;
                return _super.prototype.onViewSubmit.call(this);
            };
            TranslationGrid.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: Q.text('Db.Administration.Translation.SaveChangesButton'),
                        onClick: function (e) { return _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); }); },
                        cssClass: 'apply-changes-button'
                    }];
            };
            TranslationGrid.prototype.createQuickSearchInput = function () {
                var _this = this;
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, searchText) {
                    _this.searchText = searchText;
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            TranslationGrid.prototype.onViewFilter = function (item) {
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!this.searchText) {
                    return true;
                }
                var sd = Select2.util.stripDiacritics;
                var searching = sd(this.searchText).toLowerCase();
                function match(str) {
                    if (!str)
                        return false;
                    return str.toLowerCase().indexOf(searching) >= 0;
                }
                return Q.isEmptyOrNull(searching) || match(item.Key) || match(item.SourceText) ||
                    match(item.TargetText) || match(item.CustomText);
            };
            TranslationGrid.prototype.usePager = function () {
                return false;
            };
            TranslationGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TranslationGrid);
            return TranslationGrid;
        }(Serenity.EntityGrid));
        Administration.TranslationGrid = TranslationGrid;
    })(Administration = HRM.Administration || (HRM.Administration = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Administration;
    (function (Administration) {
        var FilterUserEditor = /** @class */ (function (_super) {
            __extends(FilterUserEditor, _super);
            function FilterUserEditor(hidden, opt) {
                return _super.call(this, hidden, opt) || this;
            }
            FilterUserEditor.prototype.getItems = function (lookup) {
                return _super.prototype.getItems.call(this, lookup).filter(function (x) { return x.UserId != 1 && x.Status == 1; });
            };
            FilterUserEditor.prototype.getLookupKey = function () {
                return Administration.UserRow.lookupKey;
            };
            FilterUserEditor.prototype.getItemText = function (item, lookup) {
                return _super.prototype.getItemText.call(this, item, lookup) + ' [' + item.Jobtype + ']';
            };
            FilterUserEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], FilterUserEditor);
            return FilterUserEditor;
        }(Serenity.LookupEditorBase));
        Administration.FilterUserEditor = FilterUserEditor;
    })(Administration = HRM.Administration || (HRM.Administration = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Administration;
    (function (Administration) {
        var UserDialog = /** @class */ (function (_super) {
            __extends(UserDialog, _super);
            function UserDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Administration.UserForm(_this.idPrefix);
                //this.AllowancesGrid = new UserAllowancesGrid(this.byId("AllowancesGrid"));
                //this.tabs.on('tabsactivate', (e, i) => {
                //    this.arrange();
                //});
                _this.form.Password.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value.length < 7)
                        return "Password must be at least 7 characters!";
                });
                _this.form.PasswordConfirm.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value != _this.form.PasswordConfirm.value)
                        return "The passwords entered doesn't match!";
                });
                return _this;
            }
            UserDialog.prototype.getFormKey = function () { return Administration.UserForm.formKey; };
            UserDialog.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserDialog.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserDialog.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserDialog.prototype.getNameProperty = function () { return Administration.UserRow.nameProperty; };
            UserDialog.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserDialog.prototype.onDialogOpen = function () {
                $('input[name="AttendanceDate"]').hide();
                $('input[name="Departuredate"]').hide();
                $('.AttendanceDate > img.ui-datepicker-trigger').hide();
                $('.Departuredate > img.ui-datepicker-trigger').hide();
            };
            UserDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.UserDialog.EditRolesButton'),
                    cssClass: 'edit-roles-button',
                    icon: 'fa-users text-blue',
                    onClick: function () {
                        new Administration.UserRoleDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                buttons.push({
                    title: Q.text('Site.UserDialog.EditPermissionsButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.UserPermissionDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            UserDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton('edit-roles-button').toggleClass('disabled', this.isNewOrDeleted());
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            UserDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                // these fields are only required in new record mode
                this.form.Password.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
                this.form.PasswordConfirm.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
            };
            UserDialog = __decorate([
                Serenity.Decorators.panel(),
                Serenity.Decorators.registerClass()
            ], UserDialog);
            return UserDialog;
        }(Serenity.EntityDialog));
        Administration.UserDialog = UserDialog;
    })(Administration = HRM.Administration || (HRM.Administration = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Administration;
    (function (Administration) {
        var UserEditor = /** @class */ (function (_super) {
            __extends(UserEditor, _super);
            function UserEditor(hidden, opt) {
                return _super.call(this, hidden, opt) || this;
                //this.addItem({ id: "CreditCard", text: "Credit Card" });
                //this.addItem({ id: "Check", text: "Check" });
                //this.addItem({ id: "Cash", text: "Cash" });
                //this.addItem({ id: "CreditCardPos", text: "Credit Card (POS)" });
            }
            UserEditor.prototype.getLookupKey = function () {
                return Administration.UserRow.lookupKey;
            };
            UserEditor.prototype.getItemText = function (item, lookup) {
                return _super.prototype.getItemText.call(this, item, lookup) + ' [' + item.Jobtype + ']';
            };
            UserEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], UserEditor);
            return UserEditor;
        }(Serenity.LookupEditorBase));
        Administration.UserEditor = UserEditor;
    })(Administration = HRM.Administration || (HRM.Administration = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Administration;
    (function (Administration) {
        var UserGrid = /** @class */ (function (_super) {
            __extends(UserGrid, _super);
            function UserGrid(container) {
                //UserService.Create({ Entity: {user} })
                var _this = _super.call(this, container) || this;
                _super.prototype.rowCount.call(_this);
                return _this;
            }
            UserGrid.prototype.getColumnsKey = function () { return "Administration.User"; };
            UserGrid.prototype.getDialogType = function () { return Administration.UserDialog; };
            UserGrid.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserGrid.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserGrid.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserGrid.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserGrid.prototype.getQuickFilters = function () {
                // get quick filter list from base class
                var filters = _super.prototype.getQuickFilters.call(this);
                Q.first(filters, function (x) { return x.field == "Status" /* Status */; }).init = function (w) {
                    // enum editor has a string value, so need to call toString()
                    w.value = Administration.UserStatusEnum.Employee.toString();
                };
                return filters;
            };
            //protected createQuickFilters(): void {
            //    // let base class to create quick filters first
            //    super.createQuickFilters();
            //    // find a quick filter widget by its field name
            //    this.findQuickFilter(Serenity.LookupEditor, fld.Status).values = ["1", "2","3"];
            //}
            UserGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                columns[14].format = function (ctx) { return Q.formatDate(ctx.value, "HH:MM:ss"); };
                columns[15].format = function (ctx) { return Q.formatDate(ctx.value, "HH:MM:ss"); };
                return columns;
            };
            UserGrid.prototype.getDefaultSortBy = function () {
                return ["Username" /* Username */];
            };
            UserGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], UserGrid);
            return UserGrid;
        }(Serenity.EntityGrid));
        Administration.UserGrid = UserGrid;
    })(Administration = HRM.Administration || (HRM.Administration = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Authorization;
    (function (Authorization) {
        Object.defineProperty(Authorization, 'userDefinition', {
            get: function () {
                return Q.getRemoteData('UserData');
            }
        });
        function hasPermission(permissionKey) {
            var ud = Authorization.userDefinition;
            return ud.Username === 'admin' || !!ud.Permissions[permissionKey];
        }
        Authorization.hasPermission = hasPermission;
    })(Authorization = HRM.Authorization || (HRM.Authorization = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Administration;
    (function (Administration) {
        var PermissionCheckEditor = /** @class */ (function (_super) {
            __extends(PermissionCheckEditor, _super);
            function PermissionCheckEditor(container, opt) {
                var _this = _super.call(this, container, opt) || this;
                _this._rolePermissions = {};
                _this._implicitPermissions = {};
                var titleByKey = {};
                var permissionKeys = _this.getSortedGroupAndPermissionKeys(titleByKey);
                var items = permissionKeys.map(function (key) { return ({
                    Key: key,
                    ParentKey: _this.getParentKey(key),
                    Title: titleByKey[key],
                    GrantRevoke: null,
                    IsGroup: key.charAt(key.length - 1) === ':'
                }); });
                _this.byParentKey = Q.toGrouping(items, function (x) { return x.ParentKey; });
                _this.setItems(items);
                return _this;
            }
            PermissionCheckEditor.prototype.getIdProperty = function () { return "Key"; };
            PermissionCheckEditor.prototype.getItemGrantRevokeClass = function (item, grant) {
                if (!item.IsGroup) {
                    return ((item.GrantRevoke === grant) ? ' checked' : '');
                }
                var desc = this.getDescendants(item, true);
                var granted = desc.filter(function (x) { return x.GrantRevoke === grant; });
                if (!granted.length) {
                    return '';
                }
                if (desc.length === granted.length) {
                    return 'checked';
                }
                return 'checked partial';
            };
            PermissionCheckEditor.prototype.roleOrImplicit = function (key) {
                if (this._rolePermissions[key])
                    return true;
                for (var _i = 0, _a = Object.keys(this._rolePermissions); _i < _a.length; _i++) {
                    var k = _a[_i];
                    var d = this._implicitPermissions[k];
                    if (d && d[key])
                        return true;
                }
                for (var _b = 0, _c = Object.keys(this._implicitPermissions); _b < _c.length; _b++) {
                    var i = _c[_b];
                    var item = this.view.getItemById(i);
                    if (item && item.GrantRevoke == true) {
                        var d = this._implicitPermissions[i];
                        if (d && d[key])
                            return true;
                    }
                }
            };
            PermissionCheckEditor.prototype.getItemEffectiveClass = function (item) {
                var _this = this;
                if (item.IsGroup) {
                    var desc = this.getDescendants(item, true);
                    var grantCount = Q.count(desc, function (x) { return x.GrantRevoke === true ||
                        (x.GrantRevoke == null && _this.roleOrImplicit(x.Key)); });
                    if (grantCount === desc.length || desc.length === 0) {
                        return 'allow';
                    }
                    if (grantCount === 0) {
                        return 'deny';
                    }
                    return 'partial';
                }
                var granted = item.GrantRevoke === true ||
                    (item.GrantRevoke == null && this.roleOrImplicit(item.Key));
                return (granted ? ' allow' : ' deny');
            };
            PermissionCheckEditor.prototype.getColumns = function () {
                var _this = this;
                var columns = [{
                        name: Q.text('Site.UserPermissionDialog.Permission'),
                        field: 'Title',
                        format: Serenity.SlickFormatting.treeToggle(function () { return _this.view; }, function (x) { return x.Key; }, function (ctx) {
                            var item = ctx.item;
                            var klass = _this.getItemEffectiveClass(item);
                            return '<span class="effective-permission ' + klass + '">' + Q.htmlEncode(ctx.value) + '</span>';
                        }),
                        width: 495,
                        sortable: false
                    }, {
                        name: Q.text('Site.UserPermissionDialog.Grant'), field: 'Grant',
                        format: function (ctx) {
                            var item1 = ctx.item;
                            var klass1 = _this.getItemGrantRevokeClass(item1, true);
                            return "<span class='check-box grant no-float " + klass1 + "'></span>";
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    }];
                if (this.options.showRevoke) {
                    columns.push({
                        name: Q.text('Site.UserPermissionDialog.Revoke'), field: 'Revoke',
                        format: function (ctx) {
                            var item2 = ctx.item;
                            var klass2 = _this.getItemGrantRevokeClass(item2, false);
                            return '<span class="check-box revoke no-float ' + klass2 + '"></span>';
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    });
                }
                return columns;
            };
            PermissionCheckEditor.prototype.setItems = function (items) {
                Serenity.SlickTreeHelper.setIndents(items, function (x) { return x.Key; }, function (x) { return x.ParentKey; }, false);
                this.view.setItems(items, true);
            };
            PermissionCheckEditor.prototype.onViewSubmit = function () {
                return false;
            };
            PermissionCheckEditor.prototype.onViewFilter = function (item) {
                var _this = this;
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!Serenity.SlickTreeHelper.filterById(item, this.view, function (x) { return x.ParentKey; }))
                    return false;
                if (this.searchText) {
                    return this.matchContains(item) || item.IsGroup && Q.any(this.getDescendants(item, false), function (x) { return _this.matchContains(x); });
                }
                return true;
            };
            PermissionCheckEditor.prototype.matchContains = function (item) {
                return Select2.util.stripDiacritics(item.Title || '').toLowerCase().indexOf(this.searchText) >= 0;
            };
            PermissionCheckEditor.prototype.getDescendants = function (item, excludeGroups) {
                var result = [];
                var stack = [item];
                while (stack.length > 0) {
                    var i = stack.pop();
                    var children = this.byParentKey[i.Key];
                    if (!children)
                        continue;
                    for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                        var child = children_1[_i];
                        if (!excludeGroups || !child.IsGroup) {
                            result.push(child);
                        }
                        stack.push(child);
                    }
                }
                return result;
            };
            PermissionCheckEditor.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (!e.isDefaultPrevented()) {
                    Serenity.SlickTreeHelper.toggleClick(e, row, cell, this.view, function (x) { return x.Key; });
                }
                if (e.isDefaultPrevented()) {
                    return;
                }
                var target = $(e.target);
                var grant = target.hasClass('grant');
                if (grant || target.hasClass('revoke')) {
                    e.preventDefault();
                    var item = this.itemAt(row);
                    var checkedOrPartial = target.hasClass('checked') || target.hasClass('partial');
                    if (checkedOrPartial) {
                        grant = null;
                    }
                    else {
                        grant = grant !== checkedOrPartial;
                    }
                    if (item.IsGroup) {
                        for (var _i = 0, _a = this.getDescendants(item, true); _i < _a.length; _i++) {
                            var d = _a[_i];
                            d.GrantRevoke = grant;
                        }
                    }
                    else
                        item.GrantRevoke = grant;
                    this.slickGrid.invalidate();
                }
            };
            PermissionCheckEditor.prototype.getParentKey = function (key) {
                if (key.charAt(key.length - 1) === ':') {
                    key = key.substr(0, key.length - 1);
                }
                var idx = key.lastIndexOf(':');
                if (idx >= 0) {
                    return key.substr(0, idx + 1);
                }
                return null;
            };
            PermissionCheckEditor.prototype.getButtons = function () {
                return [];
            };
            PermissionCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(Q.trimToNull(text) || '').toLowerCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            PermissionCheckEditor.prototype.getSortedGroupAndPermissionKeys = function (titleByKey) {
                var keys = Q.getRemoteData('Administration.PermissionKeys').Entities;
                var titleWithGroup = {};
                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                    var k = keys_1[_i];
                    var s = k;
                    if (!s) {
                        continue;
                    }
                    if (s.charAt(s.length - 1) == ':') {
                        s = s.substr(0, s.length - 1);
                        if (s.length === 0) {
                            continue;
                        }
                    }
                    if (titleByKey[s]) {
                        continue;
                    }
                    titleByKey[s] = Q.coalesce(Q.tryGetText('Permission.' + s), s);
                    var parts = s.split(':');
                    var group = '';
                    var groupTitle = '';
                    for (var i = 0; i < parts.length - 1; i++) {
                        group = group + parts[i] + ':';
                        var txt = Q.tryGetText('Permission.' + group);
                        if (txt == null) {
                            txt = parts[i];
                        }
                        titleByKey[group] = txt;
                        groupTitle = groupTitle + titleByKey[group] + ':';
                        titleWithGroup[group] = groupTitle;
                    }
                    titleWithGroup[s] = groupTitle + titleByKey[s];
                }
                keys = Object.keys(titleByKey);
                keys = keys.sort(function (x, y) { return Q.turkishLocaleCompare(titleWithGroup[x], titleWithGroup[y]); });
                return keys;
            };
            Object.defineProperty(PermissionCheckEditor.prototype, "value", {
                get: function () {
                    var result = [];
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        if (item.GrantRevoke != null && item.Key.charAt(item.Key.length - 1) != ':') {
                            result.push({ PermissionKey: item.Key, Granted: item.GrantRevoke });
                        }
                    }
                    return result;
                },
                set: function (value) {
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        item.GrantRevoke = null;
                    }
                    if (value != null) {
                        for (var _b = 0, value_1 = value; _b < value_1.length; _b++) {
                            var row = value_1[_b];
                            var r = this.view.getItemById(row.PermissionKey);
                            if (r) {
                                r.GrantRevoke = Q.coalesce(row.Granted, true);
                            }
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "rolePermissions", {
                get: function () {
                    return Object.keys(this._rolePermissions);
                },
                set: function (value) {
                    this._rolePermissions = {};
                    if (value) {
                        for (var _i = 0, value_2 = value; _i < value_2.length; _i++) {
                            var k = value_2[_i];
                            this._rolePermissions[k] = true;
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "implicitPermissions", {
                set: function (value) {
                    this._implicitPermissions = {};
                    if (value) {
                        for (var _i = 0, _a = Object.keys(value); _i < _a.length; _i++) {
                            var k = _a[_i];
                            this._implicitPermissions[k] = this._implicitPermissions[k] || {};
                            var l = value[k];
                            if (l) {
                                for (var _b = 0, l_1 = l; _b < l_1.length; _b++) {
                                    var s = l_1[_b];
                                    this._implicitPermissions[k][s] = true;
                                }
                            }
                        }
                    }
                },
                enumerable: true,
                configurable: true
            });
            PermissionCheckEditor = __decorate([
                Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue])
            ], PermissionCheckEditor);
            return PermissionCheckEditor;
        }(Serenity.DataGrid));
        Administration.PermissionCheckEditor = PermissionCheckEditor;
    })(Administration = HRM.Administration || (HRM.Administration = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Administration;
    (function (Administration) {
        var UserPermissionDialog = /** @class */ (function (_super) {
            __extends(UserPermissionDialog, _super);
            function UserPermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: true
                });
                Administration.UserPermissionService.List({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities;
                });
                Administration.UserPermissionService.ListRolePermissions({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null,
                }, function (response) {
                    _this.permissions.rolePermissions = response.Entities;
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            UserPermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.UserPermissionService.Update({
                                UserID: _this.options.userID,
                                Permissions: _this.permissions.value,
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.UserPermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.UserPermissionDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserPermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            UserPermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserPermissionDialog);
            return UserPermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserPermissionDialog = UserPermissionDialog;
    })(Administration = HRM.Administration || (HRM.Administration = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Administration;
    (function (Administration) {
        var RoleCheckEditor = /** @class */ (function (_super) {
            __extends(RoleCheckEditor, _super);
            function RoleCheckEditor(div) {
                return _super.call(this, div) || this;
            }
            RoleCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(text || '').toUpperCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            RoleCheckEditor.prototype.getButtons = function () {
                return [];
            };
            RoleCheckEditor.prototype.getTreeItems = function () {
                return Administration.RoleRow.getLookup().items.map(function (role) { return ({
                    id: role.RoleId.toString(),
                    text: role.RoleName
                }); });
            };
            RoleCheckEditor.prototype.onViewFilter = function (item) {
                return _super.prototype.onViewFilter.call(this, item) &&
                    (Q.isEmptyOrNull(this.searchText) ||
                        Select2.util.stripDiacritics(item.text || '')
                            .toUpperCase().indexOf(this.searchText) >= 0);
            };
            RoleCheckEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], RoleCheckEditor);
            return RoleCheckEditor;
        }(Serenity.CheckTreeEditor));
        Administration.RoleCheckEditor = RoleCheckEditor;
    })(Administration = HRM.Administration || (HRM.Administration = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Administration;
    (function (Administration) {
        var UserRoleDialog = /** @class */ (function (_super) {
            __extends(UserRoleDialog, _super);
            function UserRoleDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.RoleCheckEditor(_this.byId('Roles'));
                Administration.UserRoleService.List({
                    UserID: _this.options.userID
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return x.toString(); });
                });
                return _this;
            }
            UserRoleDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [{
                        text: Q.text('Dialogs.OkButton'),
                        click: function () {
                            Q.serviceRequest('Administration/UserRole/Update', {
                                UserID: _this.options.userID,
                                Roles: _this.permissions.value.map(function (x) { return parseInt(x, 10); })
                            }, function (response) {
                                _this.dialogClose();
                                Q.notifySuccess(Q.text('Site.UserRoleDialog.SaveSuccess'));
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }];
                opt.title = Q.format(Q.text('Site.UserRoleDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserRoleDialog.prototype.getTemplate = function () {
                return "<div id='~_Roles'></div>";
            };
            UserRoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserRoleDialog);
            return UserRoleDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserRoleDialog = UserRoleDialog;
    })(Administration = HRM.Administration || (HRM.Administration = {}));
})(HRM || (HRM = {}));
/// <reference path="../../common/helpers/grideditordialog.ts" />
var HRM;
(function (HRM) {
    var Administration;
    (function (Administration) {
        var SubUserVanciesLimitDialog = /** @class */ (function (_super) {
            __extends(SubUserVanciesLimitDialog, _super);
            function SubUserVanciesLimitDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Administration.UserVacanciesLimitForm(_this.idPrefix);
                return _this;
            }
            SubUserVanciesLimitDialog.prototype.getFormKey = function () { return Administration.UserVacanciesLimitForm.formKey; };
            //protected getIdProperty() { return AllowancesRow.idProperty; }
            SubUserVanciesLimitDialog.prototype.getLocalTextPrefix = function () { return Administration.UserVacanciesLimitRow.localTextPrefix; };
            SubUserVanciesLimitDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], SubUserVanciesLimitDialog);
            return SubUserVanciesLimitDialog;
        }(HRM.Common.GridEditorDialog));
        Administration.SubUserVanciesLimitDialog = SubUserVanciesLimitDialog;
    })(Administration = HRM.Administration || (HRM.Administration = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Administration;
    (function (Administration) {
        var UserVacanciesLimitDialog = /** @class */ (function (_super) {
            __extends(UserVacanciesLimitDialog, _super);
            function UserVacanciesLimitDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.UserVacanciesLimitForm(_this.idPrefix);
                return _this;
            }
            UserVacanciesLimitDialog.prototype.getFormKey = function () { return Administration.UserVacanciesLimitForm.formKey; };
            UserVacanciesLimitDialog.prototype.getIdProperty = function () { return Administration.UserVacanciesLimitRow.idProperty; };
            UserVacanciesLimitDialog.prototype.getLocalTextPrefix = function () { return Administration.UserVacanciesLimitRow.localTextPrefix; };
            UserVacanciesLimitDialog.prototype.getService = function () { return Administration.UserVacanciesLimitService.baseUrl; };
            UserVacanciesLimitDialog.prototype.getDeletePermission = function () { return Administration.UserVacanciesLimitRow.deletePermission; };
            UserVacanciesLimitDialog.prototype.getInsertPermission = function () { return Administration.UserVacanciesLimitRow.insertPermission; };
            UserVacanciesLimitDialog.prototype.getUpdatePermission = function () { return Administration.UserVacanciesLimitRow.updatePermission; };
            UserVacanciesLimitDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserVacanciesLimitDialog);
            return UserVacanciesLimitDialog;
        }(Serenity.EntityDialog));
        Administration.UserVacanciesLimitDialog = UserVacanciesLimitDialog;
    })(Administration = HRM.Administration || (HRM.Administration = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Administration;
    (function (Administration) {
        var UserVacanciesLimitGrid = /** @class */ (function (_super) {
            __extends(UserVacanciesLimitGrid, _super);
            function UserVacanciesLimitGrid(container) {
                return _super.call(this, container) || this;
            }
            UserVacanciesLimitGrid.prototype.getColumnsKey = function () { return 'Administration.UserVacanciesLimit'; };
            UserVacanciesLimitGrid.prototype.getDialogType = function () { return Administration.UserVacanciesLimitDialog; };
            UserVacanciesLimitGrid.prototype.getIdProperty = function () { return Administration.UserVacanciesLimitRow.idProperty; };
            UserVacanciesLimitGrid.prototype.getInsertPermission = function () { return Administration.UserVacanciesLimitRow.insertPermission; };
            UserVacanciesLimitGrid.prototype.getLocalTextPrefix = function () { return Administration.UserVacanciesLimitRow.localTextPrefix; };
            UserVacanciesLimitGrid.prototype.getService = function () { return Administration.UserVacanciesLimitService.baseUrl; };
            UserVacanciesLimitGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], UserVacanciesLimitGrid);
            return UserVacanciesLimitGrid;
        }(Serenity.EntityGrid));
        Administration.UserVacanciesLimitGrid = UserVacanciesLimitGrid;
    })(Administration = HRM.Administration || (HRM.Administration = {}));
})(HRM || (HRM = {}));
/// <reference path="../../common/helpers/grideditorbase.ts" />
var HRM;
(function (HRM) {
    var Administration;
    (function (Administration) {
        var UserVanciesLimitEditor = /** @class */ (function (_super) {
            __extends(UserVanciesLimitEditor, _super);
            function UserVanciesLimitEditor(container) {
                return _super.call(this, container) || this;
            }
            UserVanciesLimitEditor.prototype.getColumnsKey = function () { return "Administration.UserVacanciesLimit"; };
            UserVanciesLimitEditor.prototype.getDialogType = function () { return Administration.SubUserVanciesLimitDialog; };
            //protected getIdProperty() { return AllowancesRow.idProperty; }
            UserVanciesLimitEditor.prototype.getLocalTextPrefix = function () { return Administration.UserVacanciesLimitRow.localTextPrefix; };
            UserVanciesLimitEditor.prototype.validateEntity = function (row, id) {
                row.VacancyId = Q.toId(row.VacancyId);
                //row.UserId = Q.toId(row.UserId);
                row.Vacancy = HRM.Employees.VacanciesRow.getLookup().itemById[row.VacancyId].Vacancy;
                //row.UserUsername = HRM.Administration.UserRow.getLookup().itemById[row.UserId].Username;
                return true;
            };
            UserVanciesLimitEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], UserVanciesLimitEditor);
            return UserVanciesLimitEditor;
        }(HRM.Common.GridEditorBase));
        Administration.UserVanciesLimitEditor = UserVanciesLimitEditor;
    })(Administration = HRM.Administration || (HRM.Administration = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var AttendanceSheet;
    (function (AttendanceSheet) {
        var AttendanceSheetDialog = /** @class */ (function (_super) {
            __extends(AttendanceSheetDialog, _super);
            function AttendanceSheetDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new AttendanceSheet.AttendanceSheetForm(_this.idPrefix);
                return _this;
            }
            AttendanceSheetDialog.prototype.getFormKey = function () { return AttendanceSheet.AttendanceSheetForm.formKey; };
            AttendanceSheetDialog.prototype.getIdProperty = function () { return AttendanceSheet.AttendanceSheetRow.idProperty; };
            AttendanceSheetDialog.prototype.getLocalTextPrefix = function () { return AttendanceSheet.AttendanceSheetRow.localTextPrefix; };
            AttendanceSheetDialog.prototype.getNameProperty = function () { return AttendanceSheet.AttendanceSheetRow.nameProperty; };
            AttendanceSheetDialog.prototype.getService = function () { return AttendanceSheet.AttendanceSheetService.baseUrl; };
            AttendanceSheetDialog.prototype.getDeletePermission = function () { return AttendanceSheet.AttendanceSheetRow.deletePermission; };
            AttendanceSheetDialog.prototype.getInsertPermission = function () { return AttendanceSheet.AttendanceSheetRow.insertPermission; };
            AttendanceSheetDialog.prototype.getUpdatePermission = function () { return AttendanceSheet.AttendanceSheetRow.updatePermission; };
            AttendanceSheetDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], AttendanceSheetDialog);
            return AttendanceSheetDialog;
        }(Serenity.EntityDialog));
        AttendanceSheet.AttendanceSheetDialog = AttendanceSheetDialog;
    })(AttendanceSheet = HRM.AttendanceSheet || (HRM.AttendanceSheet = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var AttendanceSheet;
    (function (AttendanceSheet) {
        var AttendanceSheetGrid = /** @class */ (function (_super) {
            __extends(AttendanceSheetGrid, _super);
            function AttendanceSheetGrid(container) {
                var _this = _super.call(this, container) || this;
                AttendanceSheet.AttendanceSheetService.Create({}, function (response) {
                });
                return _this;
            }
            AttendanceSheetGrid.prototype.getColumnsKey = function () { return 'AttendanceSheet.AttendanceSheet'; };
            AttendanceSheetGrid.prototype.getDialogType = function () { return AttendanceSheet.AttendanceSheetDialog; };
            AttendanceSheetGrid.prototype.getIdProperty = function () { return AttendanceSheet.AttendanceSheetRow.idProperty; };
            AttendanceSheetGrid.prototype.getInsertPermission = function () { return AttendanceSheet.AttendanceSheetRow.insertPermission; };
            AttendanceSheetGrid.prototype.getLocalTextPrefix = function () { return AttendanceSheet.AttendanceSheetRow.localTextPrefix; };
            AttendanceSheetGrid.prototype.getService = function () { return AttendanceSheet.AttendanceSheetService.baseUrl; };
            AttendanceSheetGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AttendanceSheetGrid);
            return AttendanceSheetGrid;
        }(Serenity.EntityGrid));
        AttendanceSheet.AttendanceSheetGrid = AttendanceSheetGrid;
    })(AttendanceSheet = HRM.AttendanceSheet || (HRM.AttendanceSheet = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var AttendanceSheet;
    (function (AttendanceSheet) {
        var LeaveDialog = /** @class */ (function (_super) {
            __extends(LeaveDialog, _super);
            function LeaveDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new AttendanceSheet.LeaveForm(_this.idPrefix);
                return _this;
            }
            LeaveDialog.prototype.getFormKey = function () { return AttendanceSheet.LeaveForm.formKey; };
            LeaveDialog.prototype.getIdProperty = function () { return AttendanceSheet.LeaveRow.idProperty; };
            LeaveDialog.prototype.getLocalTextPrefix = function () { return AttendanceSheet.LeaveRow.localTextPrefix; };
            LeaveDialog.prototype.getNameProperty = function () { return AttendanceSheet.LeaveRow.nameProperty; };
            LeaveDialog.prototype.getService = function () { return AttendanceSheet.LeaveService.baseUrl; };
            LeaveDialog.prototype.getDeletePermission = function () { return AttendanceSheet.LeaveRow.deletePermission; };
            LeaveDialog.prototype.getInsertPermission = function () { return AttendanceSheet.LeaveRow.insertPermission; };
            LeaveDialog.prototype.getUpdatePermission = function () { return AttendanceSheet.LeaveRow.updatePermission; };
            LeaveDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LeaveDialog);
            return LeaveDialog;
        }(Serenity.EntityDialog));
        AttendanceSheet.LeaveDialog = LeaveDialog;
    })(AttendanceSheet = HRM.AttendanceSheet || (HRM.AttendanceSheet = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var AttendanceSheet;
    (function (AttendanceSheet) {
        var LeaveGrid = /** @class */ (function (_super) {
            __extends(LeaveGrid, _super);
            function LeaveGrid(container) {
                return _super.call(this, container) || this;
            }
            LeaveGrid.prototype.getColumnsKey = function () { return 'AttendanceSheet.Leave'; };
            LeaveGrid.prototype.getDialogType = function () { return AttendanceSheet.LeaveDialog; };
            LeaveGrid.prototype.getIdProperty = function () { return AttendanceSheet.LeaveRow.idProperty; };
            LeaveGrid.prototype.getInsertPermission = function () { return AttendanceSheet.LeaveRow.insertPermission; };
            LeaveGrid.prototype.getLocalTextPrefix = function () { return AttendanceSheet.LeaveRow.localTextPrefix; };
            LeaveGrid.prototype.getService = function () { return AttendanceSheet.LeaveService.baseUrl; };
            LeaveGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LeaveGrid);
            return LeaveGrid;
        }(Serenity.EntityGrid));
        AttendanceSheet.LeaveGrid = LeaveGrid;
    })(AttendanceSheet = HRM.AttendanceSheet || (HRM.AttendanceSheet = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var LanguageList;
    (function (LanguageList) {
        function getValue() {
            var result = [];
            for (var _i = 0, _a = HRM.Administration.LanguageRow.getLookup().items; _i < _a.length; _i++) {
                var k = _a[_i];
                if (k.LanguageId !== 'en') {
                    result.push([k.Id.toString(), k.LanguageName]);
                }
            }
            return result;
        }
        LanguageList.getValue = getValue;
    })(LanguageList = HRM.LanguageList || (HRM.LanguageList = {}));
})(HRM || (HRM = {}));
/// <reference path="../Common/Helpers/LanguageList.ts" />
var HRM;
(function (HRM) {
    var ScriptInitialization;
    (function (ScriptInitialization) {
        Q.Config.responsiveDialogs = true;
        Q.Config.rootNamespaces.push('HRM');
        Serenity.EntityDialog.defaultLanguageList = HRM.LanguageList.getValue;
        if ($.fn['colorbox']) {
            $.fn['colorbox'].settings.maxWidth = "95%";
            $.fn['colorbox'].settings.maxHeight = "95%";
        }
        window.onerror = Q.ErrorHandling.runtimeErrorHandler;
    })(ScriptInitialization = HRM.ScriptInitialization || (HRM.ScriptInitialization = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var BasicProgressDialog = /** @class */ (function (_super) {
        __extends(BasicProgressDialog, _super);
        function BasicProgressDialog() {
            var _this = _super.call(this) || this;
            _this.byId('ProgressBar').progressbar({
                max: 100,
                value: 0,
                change: function (e, v) {
                    _this.byId('ProgressLabel').text(_this.value + ' / ' + _this.max);
                }
            });
            return _this;
        }
        Object.defineProperty(BasicProgressDialog.prototype, "max", {
            get: function () {
                return this.byId('ProgressBar').progressbar().progressbar('option', 'max');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('option', 'max', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "value", {
            get: function () {
                return this.byId('ProgressBar').progressbar('value');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('value', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "title", {
            get: function () {
                return this.element.dialog().dialog('option', 'title');
            },
            set: function (value) {
                this.element.dialog().dialog('option', 'title', value);
            },
            enumerable: true,
            configurable: true
        });
        BasicProgressDialog.prototype.getDialogOptions = function () {
            var _this = this;
            var opt = _super.prototype.getDialogOptions.call(this);
            opt.title = Q.text('Site.BasicProgressDialog.PleaseWait');
            opt.width = 600;
            opt.buttons = [{
                    text: Q.text('Dialogs.CancelButton'),
                    click: function () {
                        _this.cancelled = true;
                        _this.element.closest('.ui-dialog')
                            .find('.ui-dialog-buttonpane .ui-button')
                            .attr('disabled', 'disabled')
                            .css('opacity', '0.5');
                        _this.element.dialog('option', 'title', Q.trimToNull(_this.cancelTitle) ||
                            Q.text('Site.BasicProgressDialog.CancelTitle'));
                    }
                }];
            return opt;
        };
        BasicProgressDialog.prototype.initDialog = function () {
            _super.prototype.initDialog.call(this);
            this.element.closest('.ui-dialog').find('.ui-dialog-titlebar-close').hide();
        };
        BasicProgressDialog.prototype.getTemplate = function () {
            return ("<div class='s-DialogContent s-BasicProgressDialogContent'>" +
                "<div id='~_StatusText' class='status-text' ></div>" +
                "<div id='~_ProgressBar' class='progress-bar'>" +
                "<div id='~_ProgressLabel' class='progress-label' ></div>" +
                "</div>" +
                "</div>");
        };
        return BasicProgressDialog;
    }(Serenity.TemplatedDialog));
    HRM.BasicProgressDialog = BasicProgressDialog;
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Common;
    (function (Common) {
        var BulkServiceAction = /** @class */ (function () {
            function BulkServiceAction() {
            }
            BulkServiceAction.prototype.createProgressDialog = function () {
                this.progressDialog = new HRM.BasicProgressDialog();
                this.progressDialog.dialogOpen();
                this.progressDialog.max = this.keys.length;
                this.progressDialog.value = 0;
            };
            BulkServiceAction.prototype.getConfirmationFormat = function () {
                return Q.text('Site.BulkServiceAction.ConfirmationFormat');
            };
            BulkServiceAction.prototype.getConfirmationMessage = function (targetCount) {
                return Q.format(this.getConfirmationFormat(), targetCount);
            };
            BulkServiceAction.prototype.confirm = function (targetCount, action) {
                Q.confirm(this.getConfirmationMessage(targetCount), action);
            };
            BulkServiceAction.prototype.getNothingToProcessMessage = function () {
                return Q.text('Site.BulkServiceAction.NothingToProcess');
            };
            BulkServiceAction.prototype.nothingToProcess = function () {
                Q.notifyError(this.getNothingToProcessMessage());
            };
            BulkServiceAction.prototype.getParallelRequests = function () {
                return 1;
            };
            BulkServiceAction.prototype.getBatchSize = function () {
                return 1;
            };
            BulkServiceAction.prototype.startParallelExecution = function () {
                this.createProgressDialog();
                this.successCount = 0;
                this.errorCount = 0;
                this.pendingRequests = 0;
                this.completedRequests = 0;
                this.errorCount = 0;
                this.errorByKey = {};
                this.queue = this.keys.slice();
                this.queueIndex = 0;
                var parallelRequests = this.getParallelRequests();
                while (parallelRequests-- > 0) {
                    this.executeNextBatch();
                }
            };
            BulkServiceAction.prototype.serviceCallCleanup = function () {
                this.pendingRequests--;
                this.completedRequests++;
                var title = Q.text((this.progressDialog.cancelled ?
                    'Site.BasicProgressDialog.CancelTitle' : 'Site.BasicProgressDialog.PleaseWait'));
                title += ' (';
                if (this.successCount > 0) {
                    title += Q.format(Q.text('Site.BulkServiceAction.SuccessCount'), this.successCount);
                }
                if (this.errorCount > 0) {
                    if (this.successCount > 0) {
                        title += ', ';
                    }
                    title += Q.format(Q.text('Site.BulkServiceAction.ErrorCount'), this.errorCount);
                }
                this.progressDialog.title = title + ')';
                this.progressDialog.value = this.successCount + this.errorCount;
                if (!this.progressDialog.cancelled && this.progressDialog.value < this.keys.length) {
                    this.executeNextBatch();
                }
                else if (this.pendingRequests === 0) {
                    this.progressDialog.dialogClose();
                    this.showResults();
                    if (this.done) {
                        this.done();
                        this.done = null;
                    }
                }
            };
            BulkServiceAction.prototype.executeForBatch = function (batch) {
            };
            BulkServiceAction.prototype.executeNextBatch = function () {
                var batchSize = this.getBatchSize();
                var batch = [];
                while (true) {
                    if (batch.length >= batchSize) {
                        break;
                    }
                    if (this.queueIndex >= this.queue.length) {
                        break;
                    }
                    batch.push(this.queue[this.queueIndex++]);
                }
                if (batch.length > 0) {
                    this.pendingRequests++;
                    this.executeForBatch(batch);
                }
            };
            BulkServiceAction.prototype.getAllHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.AllHadErrorsFormat');
            };
            BulkServiceAction.prototype.showAllHadErrors = function () {
                Q.notifyError(Q.format(this.getAllHadErrorsFormat(), this.errorCount));
            };
            BulkServiceAction.prototype.getSomeHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.SomeHadErrorsFormat');
            };
            BulkServiceAction.prototype.showSomeHadErrors = function () {
                Q.notifyWarning(Q.format(this.getSomeHadErrorsFormat(), this.successCount, this.errorCount));
            };
            BulkServiceAction.prototype.getAllSuccessFormat = function () {
                return Q.text('Site.BulkServiceAction.AllSuccessFormat');
            };
            BulkServiceAction.prototype.showAllSuccess = function () {
                Q.notifySuccess(Q.format(this.getAllSuccessFormat(), this.successCount));
            };
            BulkServiceAction.prototype.showResults = function () {
                if (this.errorCount === 0 && this.successCount === 0) {
                    this.nothingToProcess();
                    return;
                }
                if (this.errorCount > 0 && this.successCount === 0) {
                    this.showAllHadErrors();
                    return;
                }
                if (this.errorCount > 0) {
                    this.showSomeHadErrors();
                    return;
                }
                this.showAllSuccess();
            };
            BulkServiceAction.prototype.execute = function (keys) {
                var _this = this;
                this.keys = keys;
                if (this.keys.length === 0) {
                    this.nothingToProcess();
                    return;
                }
                this.confirm(this.keys.length, function () { return _this.startParallelExecution(); });
            };
            BulkServiceAction.prototype.get_successCount = function () {
                return this.successCount;
            };
            BulkServiceAction.prototype.set_successCount = function (value) {
                this.successCount = value;
            };
            BulkServiceAction.prototype.get_errorCount = function () {
                return this.errorCount;
            };
            BulkServiceAction.prototype.set_errorCount = function (value) {
                this.errorCount = value;
            };
            return BulkServiceAction;
        }());
        Common.BulkServiceAction = BulkServiceAction;
    })(Common = HRM.Common || (HRM.Common = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var DialogUtils;
    (function (DialogUtils) {
        function pendingChangesConfirmation(element, hasPendingChanges) {
            element.on('dialogbeforeclose panelbeforeclose', function (e) {
                if (!Serenity.WX.hasOriginalEvent(e) || !hasPendingChanges()) {
                    return;
                }
                e.preventDefault();
                Q.confirm('You have pending changes. Save them?', function () { return element.find('div.save-and-close-button').click(); }, {
                    onNo: function () {
                        if (element.hasClass('ui-dialog-content'))
                            element.dialog('close');
                        else if (element.hasClass('s-Panel'))
                            Serenity.TemplatedDialog.closePanel(element);
                    }
                });
            });
        }
        DialogUtils.pendingChangesConfirmation = pendingChangesConfirmation;
    })(DialogUtils = HRM.DialogUtils || (HRM.DialogUtils = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Common;
    (function (Common) {
        var EnumSelectFormatter = /** @class */ (function () {
            function EnumSelectFormatter() {
                this.allowClear = true;
            }
            EnumSelectFormatter.prototype.format = function (ctx) {
                var enumType = Serenity.EnumTypeRegistry.get(this.enumKey);
                var sb = "<select>";
                if (this.allowClear) {
                    sb += '<option value="">';
                    sb += Q.htmlEncode(this.emptyItemText || Q.text("Controls.SelectEditor.EmptyItemText"));
                    sb += '</option>';
                }
                for (var _i = 0, _a = Object.keys(enumType).filter(function (v) { return !isNaN(parseInt(v, 10)); }); _i < _a.length; _i++) {
                    var x = _a[_i];
                    sb += '<option value="' + Q.attrEncode(x) + '"';
                    if (x == ctx.value)
                        sb += " selected";
                    var name = enumType[x];
                    sb += ">";
                    sb += Q.htmlEncode(Q.tryGetText("Enums." + this.enumKey + "." + name) || name);
                    sb += "</option>";
                }
                sb += "</select>";
                return sb;
            };
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "enumKey", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "allowClear", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "emptyItemText", void 0);
            EnumSelectFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], EnumSelectFormatter);
            return EnumSelectFormatter;
        }());
        Common.EnumSelectFormatter = EnumSelectFormatter;
    })(Common = HRM.Common || (HRM.Common = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Common;
    (function (Common) {
        var ExcelExportHelper;
        (function (ExcelExportHelper) {
            function createToolButton(options) {
                return {
                    hint: Q.coalesce(options.hint, 'Excel'),
                    title: Q.coalesce(options.title, ''),
                    cssClass: 'export-xlsx-button',
                    onClick: function () {
                        if (!options.onViewSubmit()) {
                            return;
                        }
                        var grid = options.grid;
                        var request = Q.deepClone(grid.getView().params);
                        request.Take = 0;
                        request.Skip = 0;
                        var sortBy = grid.getView().sortBy;
                        if (sortBy) {
                            request.Sort = sortBy;
                        }
                        request.IncludeColumns = [];
                        var columns = grid.getGrid().getColumns();
                        for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
                            var column = columns_1[_i];
                            request.IncludeColumns.push(column.id || column.field);
                        }
                        Q.postToService({ service: options.service, request: request, target: '_blank' });
                    },
                    separator: options.separator
                };
            }
            ExcelExportHelper.createToolButton = createToolButton;
        })(ExcelExportHelper = Common.ExcelExportHelper || (Common.ExcelExportHelper = {}));
    })(Common = HRM.Common || (HRM.Common = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    var StaticTextBlock = /** @class */ (function (_super) {
        __extends(StaticTextBlock, _super);
        function StaticTextBlock(container, options) {
            var _this = _super.call(this, container, options) || this;
            // hide the caption label for this editor if in a form. ugly hack
            if (_this.options.hideLabel)
                _this.element.closest('.field').find('.caption').hide();
            _this.updateElementContent();
            return _this;
        }
        StaticTextBlock.prototype.updateElementContent = function () {
            var text = Q.coalesce(this.options.text, this.value);
            // if isLocalText is set, text is actually a local text key
            if (this.options.isLocalText)
                text = Q.text(text);
            // don't html encode if isHtml option is true
            if (this.options.isHtml)
                this.element.html(text);
            else
                this.element.text(text);
        };
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        StaticTextBlock.prototype.setEditValue = function (source, property) {
            if (this.options.text == null) {
                this.value = Q.coalesce(this.options.text, source[property.name]);
                this.updateElementContent();
            }
        };
        StaticTextBlock = __decorate([
            Serenity.Decorators.element("<div/>"),
            Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
        ], StaticTextBlock);
        return StaticTextBlock;
    }(Serenity.Widget));
    HRM.StaticTextBlock = StaticTextBlock;
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Common;
    (function (Common) {
        var LanguageSelection = /** @class */ (function (_super) {
            __extends(LanguageSelection, _super);
            function LanguageSelection(select, currentLanguage) {
                var _this = _super.call(this, select) || this;
                currentLanguage = Q.coalesce(currentLanguage, 'en');
                _this.change(function (e) {
                    $.cookie('LanguagePreference', select.val(), {
                        path: Q.Config.applicationPath,
                        expires: 365
                    });
                    window.location.reload(true);
                });
                Q.getLookupAsync('Administration.Language').then(function (x) {
                    if (!Q.any(x.items, function (z) { return z.LanguageId === currentLanguage; })) {
                        var idx = currentLanguage.lastIndexOf('-');
                        if (idx >= 0) {
                            currentLanguage = currentLanguage.substr(0, idx);
                            if (!Q.any(x.items, function (y) { return y.LanguageId === currentLanguage; })) {
                                currentLanguage = 'en';
                            }
                        }
                        else {
                            currentLanguage = 'en';
                        }
                    }
                    for (var _i = 0, _a = x.items; _i < _a.length; _i++) {
                        var l = _a[_i];
                        Q.addOption(select, l.LanguageId, l.LanguageName);
                    }
                    select.val(currentLanguage);
                });
                return _this;
            }
            return LanguageSelection;
        }(Serenity.Widget));
        Common.LanguageSelection = LanguageSelection;
    })(Common = HRM.Common || (HRM.Common = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Common;
    (function (Common) {
        var SidebarSearch = /** @class */ (function (_super) {
            __extends(SidebarSearch, _super);
            function SidebarSearch(input, menuUL) {
                var _this = _super.call(this, input) || this;
                new Serenity.QuickSearchInput(input, {
                    onSearch: function (field, text, success) {
                        _this.updateMatchFlags(text);
                        success(true);
                    }
                });
                _this.menuUL = menuUL;
                return _this;
            }
            SidebarSearch.prototype.updateMatchFlags = function (text) {
                var liList = this.menuUL.find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (text == null) {
                    liList.show();
                    liList.removeClass('expanded');
                    return;
                }
                var parts = text.replace(',', ' ').split(' ').filter(function (x) { return !Q.isTrimmedEmpty(x); });
                for (var i = 0; i < parts.length; i++) {
                    parts[i] = Q.trimToNull(Select2.util.stripDiacritics(parts[i]).toUpperCase());
                }
                var items = liList;
                items.each(function (idx, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
                        var p = parts_1[_i];
                        if (p != null && !(title.indexOf(p) !== -1)) {
                            x.addClass('non-match');
                            break;
                        }
                    }
                });
                var matchingItems = items.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                liList.addClass('expanded');
            };
            return SidebarSearch;
        }(Serenity.Widget));
        Common.SidebarSearch = SidebarSearch;
    })(Common = HRM.Common || (HRM.Common = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Common;
    (function (Common) {
        var ThemeSelection = /** @class */ (function (_super) {
            __extends(ThemeSelection, _super);
            function ThemeSelection(select) {
                var _this = _super.call(this, select) || this;
                _this.change(function (e) {
                    var path = Q.Config.applicationPath;
                    if (path && path != '/' && Q.endsWith(path, '/'))
                        path = path.substr(0, path.length - 1);
                    $.cookie('ThemePreference', select.val(), {
                        path: path,
                        expires: 365
                    });
                    var theme = select.val() || '';
                    var darkSidebar = theme.indexOf('light') < 0;
                    $('body').removeClass('skin-' + _this.getCurrentTheme());
                    $('body').addClass('skin-' + theme)
                        .toggleClass('dark-sidebar', darkSidebar)
                        .toggleClass('light-sidebar', !darkSidebar);
                });
                Q.addOption(select, 'blue', Q.text('Site.Layout.ThemeBlue'));
                Q.addOption(select, 'blue-light', Q.text('Site.Layout.ThemeBlueLight'));
                Q.addOption(select, 'purple', Q.text('Site.Layout.ThemePurple'));
                Q.addOption(select, 'purple-light', Q.text('Site.Layout.ThemePurpleLight'));
                Q.addOption(select, 'red', Q.text('Site.Layout.ThemeRed'));
                Q.addOption(select, 'red-light', Q.text('Site.Layout.ThemeRedLight'));
                Q.addOption(select, 'green', Q.text('Site.Layout.ThemeGreen'));
                Q.addOption(select, 'green-light', Q.text('Site.Layout.ThemeGreenLight'));
                Q.addOption(select, 'yellow', Q.text('Site.Layout.ThemeYellow'));
                Q.addOption(select, 'yellow-light', Q.text('Site.Layout.ThemeYellowLight'));
                Q.addOption(select, 'black', Q.text('Site.Layout.ThemeBlack'));
                Q.addOption(select, 'black-light', Q.text('Site.Layout.ThemeBlackLight'));
                select.val(_this.getCurrentTheme());
                return _this;
            }
            ThemeSelection.prototype.getCurrentTheme = function () {
                var skinClass = Q.first(($('body').attr('class') || '').split(' '), function (x) { return Q.startsWith(x, 'skin-'); });
                if (skinClass) {
                    return skinClass.substr(5);
                }
                return 'blue';
            };
            return ThemeSelection;
        }(Serenity.Widget));
        Common.ThemeSelection = ThemeSelection;
    })(Common = HRM.Common || (HRM.Common = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Common;
    (function (Common) {
        var PdfExportHelper;
        (function (PdfExportHelper) {
            function toAutoTableColumns(srcColumns, columnStyles, columnTitles) {
                return srcColumns.map(function (src) {
                    var col = {
                        dataKey: src.id || src.field,
                        title: src.name || ''
                    };
                    if (columnTitles && columnTitles[col.dataKey] != null)
                        col.title = columnTitles[col.dataKey];
                    var style = {};
                    if ((src.cssClass || '').indexOf("align-right") >= 0)
                        style.halign = 'right';
                    else if ((src.cssClass || '').indexOf("align-center") >= 0)
                        style.halign = 'center';
                    columnStyles[col.dataKey] = style;
                    return col;
                });
            }
            function toAutoTableData(entities, keys, srcColumns) {
                var el = document.createElement('span');
                var row = 0;
                return entities.map(function (item) {
                    var dst = {};
                    for (var cell = 0; cell < srcColumns.length; cell++) {
                        var src = srcColumns[cell];
                        var fld = src.field || '';
                        var key = keys[cell];
                        var txt = void 0;
                        var html = void 0;
                        if (src.formatter) {
                            html = src.formatter(row, cell, item[fld], src, item);
                        }
                        else if (src.format) {
                            html = src.format({ row: row, cell: cell, item: item, value: item[fld] });
                        }
                        else {
                            dst[key] = item[fld];
                            continue;
                        }
                        if (!html || (html.indexOf('<') < 0 && html.indexOf('&') < 0))
                            dst[key] = html;
                        else {
                            el.innerHTML = html;
                            if (el.children.length == 1 &&
                                $(el.children[0]).is(":input")) {
                                dst[key] = $(el.children[0]).val();
                            }
                            else if (el.children.length == 1 &&
                                $(el.children).is('.check-box')) {
                                dst[key] = $(el.children).hasClass("checked") ? "X" : "";
                            }
                            else
                                dst[key] = el.textContent || '';
                        }
                    }
                    row++;
                    return dst;
                });
            }
            function exportToPdf(options) {
                var g = options.grid;
                if (!options.onViewSubmit())
                    return;
                includeAutoTable();
                var request = Q.deepClone(g.view.params);
                request.Take = 0;
                request.Skip = 0;
                var sortBy = g.view.sortBy;
                if (sortBy != null)
                    request.Sort = sortBy;
                var gridColumns = g.slickGrid.getColumns();
                gridColumns = gridColumns.filter(function (x) { return x.id !== "__select__"; });
                request.IncludeColumns = [];
                for (var _i = 0, gridColumns_1 = gridColumns; _i < gridColumns_1.length; _i++) {
                    var column = gridColumns_1[_i];
                    request.IncludeColumns.push(column.id || column.field);
                }
                Q.serviceCall({
                    url: g.view.url,
                    request: request,
                    onSuccess: function (response) {
                        var doc = new jsPDF('l', 'pt');
                        var srcColumns = gridColumns;
                        var columnStyles = {};
                        var columns = toAutoTableColumns(srcColumns, columnStyles, options.columnTitles);
                        var keys = columns.map(function (x) { return x.dataKey; });
                        var entities = response.Entities || [];
                        var data = toAutoTableData(entities, keys, srcColumns);
                        doc.setFontSize(options.titleFontSize || 10);
                        doc.setFontStyle('bold');
                        var reportTitle = options.reportTitle || g.getTitle() || "Report";
                        doc.autoTableText(reportTitle, doc.internal.pageSize.width / 2, options.titleTop || 25, { halign: 'center' });
                        var totalPagesExp = "{{T}}";
                        var pageNumbers = options.pageNumbers == null || options.pageNumbers;
                        var autoOptions = $.extend({
                            margin: { top: 25, left: 25, right: 25, bottom: pageNumbers ? 25 : 30 },
                            startY: 60,
                            styles: {
                                fontSize: 8,
                                overflow: 'linebreak',
                                cellPadding: 2,
                                valign: 'middle'
                            },
                            columnStyles: columnStyles
                        }, options.tableOptions);
                        if (pageNumbers) {
                            var footer = function (data) {
                                var str = data.pageCount;
                                // Total page number plugin only available in jspdf v1.0+
                                if (typeof doc.putTotalPages === 'function') {
                                    str = str + " / " + totalPagesExp;
                                }
                                doc.autoTableText(str, doc.internal.pageSize.width / 2, doc.internal.pageSize.height - autoOptions.margin.bottom, {
                                    halign: 'center'
                                });
                            };
                            autoOptions.afterPageContent = footer;
                        }
                        // Print header of page
                        if (options.printDateTimeHeader == null || options.printDateTimeHeader) {
                            var beforePage = function (data) {
                                doc.setFontStyle('normal');
                                doc.setFontSize(8);
                                // Date and time of the report
                                doc.autoTableText(Q.formatDate(new Date(), "dd-MM-yyyy HH:mm"), doc.internal.pageSize.width - autoOptions.margin.right, 13, {
                                    halign: 'right'
                                });
                            };
                            autoOptions.beforePageContent = beforePage;
                        }
                        doc.autoTable(columns, data, autoOptions);
                        if (typeof doc.putTotalPages === 'function') {
                            doc.putTotalPages(totalPagesExp);
                        }
                        if (!options.output || options.output == "file") {
                            var fileName = options.fileName || options.reportTitle || "{0}_{1}.pdf";
                            fileName = Q.format(fileName, g.getTitle() || "report", Q.formatDate(new Date(), "yyyyMMdd_HHmm"));
                            doc.save(fileName);
                            return;
                        }
                        if (options.autoPrint)
                            doc.autoPrint();
                        var output = options.output;
                        if (output == 'newwindow' || '_blank')
                            output = 'dataurlnewwindow';
                        else if (output == 'window')
                            output = 'datauri';
                        if (output == 'datauri')
                            doc.output(output);
                        else {
                            var tmpOut = doc.output('datauristring');
                            if (output == 'dataurlnewwindow') {
                                var fileTmpName = options.reportTitle || g.getTitle();
                                var url_with_name = tmpOut.replace("data:application/pdf;", "data:application/pdf;name=" + fileTmpName + ".pdf;");
                                var html = '<html>' +
                                    '<style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style>' +
                                    '<body>' +
                                    '<p></p>' +
                                    '<iframe type="application/pdf" src="' + url_with_name + '"></iframe>' +
                                    '</body></html>';
                                var a = window.open("about:blank", "_blank");
                                a.document.write(html);
                                a.document.close();
                            }
                        }
                    }
                });
            }
            PdfExportHelper.exportToPdf = exportToPdf;
            function createToolButton(options) {
                return {
                    title: options.title || '',
                    hint: options.hint || 'PDF',
                    cssClass: 'export-pdf-button',
                    onClick: function () { return exportToPdf(options); },
                    separator: options.separator
                };
            }
            PdfExportHelper.createToolButton = createToolButton;
            function includeJsPDF() {
                if (typeof jsPDF !== "undefined")
                    return;
                var script = $("jsPDFScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.min.js"))
                    .appendTo(document.head);
            }
            function includeAutoTable() {
                includeJsPDF();
                if (typeof jsPDF === "undefined" ||
                    typeof jsPDF.API == "undefined" ||
                    typeof jsPDF.API.autoTable !== "undefined")
                    return;
                var script = $("jsPDFAutoTableScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFAutoTableScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.plugin.autotable.min.js"))
                    .appendTo(document.head);
            }
        })(PdfExportHelper = Common.PdfExportHelper || (Common.PdfExportHelper = {}));
    })(Common = HRM.Common || (HRM.Common = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Common;
    (function (Common) {
        var ReportDialog = /** @class */ (function (_super) {
            __extends(ReportDialog, _super);
            function ReportDialog(options) {
                var _this = _super.call(this, options) || this;
                _this.updateInterface();
                _this.loadReport(_this.options.reportKey);
                return _this;
            }
            ReportDialog.prototype.getDialogButtons = function () {
                return null;
            };
            ReportDialog.prototype.createPropertyGrid = function () {
                this.propertyGrid && this.byId('PropertyGrid').html('').attr('class', '');
                this.propertyGrid = new Serenity.PropertyGrid(this.byId('PropertyGrid'), {
                    idPrefix: this.idPrefix,
                    useCategories: true,
                    items: this.report.Properties
                }).init(null);
            };
            ReportDialog.prototype.loadReport = function (reportKey) {
                var _this = this;
                Q.serviceCall({
                    url: Q.resolveUrl('~/Report/Retrieve'),
                    request: {
                        ReportKey: reportKey
                    },
                    onSuccess: function (response) {
                        _this.report = response;
                        _this.element.dialog().dialog('option', 'title', _this.report.Title);
                        _this.createPropertyGrid();
                        _this.propertyGrid.load(_this.report.InitialSettings || {});
                        _this.updateInterface();
                        _this.dialogOpen();
                    }
                });
            };
            ReportDialog.prototype.updateInterface = function () {
                this.toolbar.findButton('print-preview-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-pdf-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-xlsx-button')
                    .toggle(this.report && this.report.IsDataOnlyReport);
            };
            ReportDialog.prototype.executeReport = function (target, ext, download) {
                if (!this.validateForm()) {
                    return;
                }
                var opt = {};
                this.propertyGrid.save(opt);
                Common.ReportHelper.execute({
                    download: download,
                    reportKey: this.report.ReportKey,
                    extension: ext,
                    target: target,
                    params: opt
                });
            };
            ReportDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                return [
                    {
                        title: 'Preview',
                        cssClass: 'print-preview-button',
                        onClick: function () { return _this.executeReport('_blank', null, false); }
                    },
                    {
                        title: 'PDF',
                        cssClass: 'export-pdf-button',
                        onClick: function () { return _this.executeReport('_blank', 'pdf', true); }
                    },
                    {
                        title: 'Excel',
                        cssClass: 'export-xlsx-button',
                        onClick: function () { return _this.executeReport('_blank', 'xlsx', true); }
                    }
                ];
            };
            return ReportDialog;
        }(Serenity.TemplatedDialog));
        Common.ReportDialog = ReportDialog;
    })(Common = HRM.Common || (HRM.Common = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Common;
    (function (Common) {
        var ReportHelper;
        (function (ReportHelper) {
            function createToolButton(options) {
                return {
                    title: Q.coalesce(options.title, 'Report'),
                    cssClass: Q.coalesce(options.cssClass, 'print-button'),
                    icon: options.icon,
                    onClick: function () {
                        ReportHelper.execute(options);
                    }
                };
            }
            ReportHelper.createToolButton = createToolButton;
            function execute(options) {
                var opt = options.getParams ? options.getParams() : options.params;
                Q.postToUrl({
                    url: '~/Report/' + (options.download ? 'Download' : 'Render'),
                    params: {
                        key: options.reportKey,
                        ext: Q.coalesce(options.extension, 'pdf'),
                        opt: opt ? $.toJSON(opt) : ''
                    },
                    target: Q.coalesce(options.target, '_blank')
                });
            }
            ReportHelper.execute = execute;
        })(ReportHelper = Common.ReportHelper || (Common.ReportHelper = {}));
    })(Common = HRM.Common || (HRM.Common = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Common;
    (function (Common) {
        var ReportPage = /** @class */ (function (_super) {
            __extends(ReportPage, _super);
            function ReportPage(element) {
                var _this = _super.call(this, element) || this;
                $('.report-link', element).click(function (e) { return _this.reportLinkClick(e); });
                $('div.line', element).click(function (e) { return _this.categoryClick(e); });
                new Serenity.QuickSearchInput($('.s-QuickSearchBar input', element), {
                    onSearch: function (field, text, done) {
                        _this.updateMatchFlags(text);
                        done(true);
                    }
                });
                return _this;
            }
            ReportPage.prototype.updateMatchFlags = function (text) {
                var liList = $('.report-list', this.element).find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (!text) {
                    liList.children('ul').hide();
                    liList.show().removeClass('expanded');
                    return;
                }
                text = Select2.util.stripDiacritics(text).toUpperCase();
                var reportItems = liList.filter('.report-item');
                reportItems.each(function (ix, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    if (title.indexOf(text) < 0) {
                        x.addClass('non-match');
                    }
                });
                var matchingItems = reportItems.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                if (visibles.length <= 100) {
                    liList.children('ul').show();
                    liList.addClass('expanded');
                }
            };
            ReportPage.prototype.categoryClick = function (e) {
                var li = $(e.target).closest('li');
                if (li.hasClass('expanded')) {
                    li.find('ul').hide('fast');
                    li.removeClass('expanded');
                    li.find('li').removeClass('expanded');
                }
                else {
                    li.addClass('expanded');
                    li.children('ul').show('fast');
                    if (li.children('ul').children('li').length === 1 && !li.children('ul').children('li').hasClass('expanded')) {
                        li.children('ul').children('li').children('.line').click();
                    }
                }
            };
            ReportPage.prototype.reportLinkClick = function (e) {
                e.preventDefault();
                new Common.ReportDialog({
                    reportKey: $(e.target).data('key')
                }).dialogOpen();
            };
            return ReportPage;
        }(Serenity.Widget));
        Common.ReportPage = ReportPage;
    })(Common = HRM.Common || (HRM.Common = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Common;
    (function (Common) {
        var UserPreferenceStorage = /** @class */ (function () {
            function UserPreferenceStorage() {
            }
            UserPreferenceStorage.prototype.getItem = function (key) {
                var value;
                Common.UserPreferenceService.Retrieve({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key
                }, function (response) { return value = response.Value; }, {
                    async: false
                });
                return value;
            };
            UserPreferenceStorage.prototype.setItem = function (key, data) {
                Common.UserPreferenceService.Update({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key,
                    Value: data
                });
            };
            return UserPreferenceStorage;
        }());
        Common.UserPreferenceStorage = UserPreferenceStorage;
    })(Common = HRM.Common || (HRM.Common = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Default;
    (function (Default) {
        var EmploymentStatusDialog = /** @class */ (function (_super) {
            __extends(EmploymentStatusDialog, _super);
            function EmploymentStatusDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.EmploymentStatusForm(_this.idPrefix);
                return _this;
            }
            EmploymentStatusDialog.prototype.getFormKey = function () { return Default.EmploymentStatusForm.formKey; };
            EmploymentStatusDialog.prototype.getIdProperty = function () { return Default.EmploymentStatusRow.idProperty; };
            EmploymentStatusDialog.prototype.getLocalTextPrefix = function () { return Default.EmploymentStatusRow.localTextPrefix; };
            EmploymentStatusDialog.prototype.getNameProperty = function () { return Default.EmploymentStatusRow.nameProperty; };
            EmploymentStatusDialog.prototype.getService = function () { return Default.EmploymentStatusService.baseUrl; };
            EmploymentStatusDialog.prototype.getDeletePermission = function () { return Default.EmploymentStatusRow.deletePermission; };
            EmploymentStatusDialog.prototype.getInsertPermission = function () { return Default.EmploymentStatusRow.insertPermission; };
            EmploymentStatusDialog.prototype.getUpdatePermission = function () { return Default.EmploymentStatusRow.updatePermission; };
            EmploymentStatusDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], EmploymentStatusDialog);
            return EmploymentStatusDialog;
        }(Serenity.EntityDialog));
        Default.EmploymentStatusDialog = EmploymentStatusDialog;
    })(Default = HRM.Default || (HRM.Default = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Default;
    (function (Default) {
        var EmploymentStatusGrid = /** @class */ (function (_super) {
            __extends(EmploymentStatusGrid, _super);
            function EmploymentStatusGrid(container) {
                return _super.call(this, container) || this;
            }
            EmploymentStatusGrid.prototype.getColumnsKey = function () { return 'Default.EmploymentStatus'; };
            EmploymentStatusGrid.prototype.getDialogType = function () { return Default.EmploymentStatusDialog; };
            EmploymentStatusGrid.prototype.getIdProperty = function () { return Default.EmploymentStatusRow.idProperty; };
            EmploymentStatusGrid.prototype.getInsertPermission = function () { return Default.EmploymentStatusRow.insertPermission; };
            EmploymentStatusGrid.prototype.getLocalTextPrefix = function () { return Default.EmploymentStatusRow.localTextPrefix; };
            EmploymentStatusGrid.prototype.getService = function () { return Default.EmploymentStatusService.baseUrl; };
            EmploymentStatusGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], EmploymentStatusGrid);
            return EmploymentStatusGrid;
        }(Serenity.EntityGrid));
        Default.EmploymentStatusGrid = EmploymentStatusGrid;
    })(Default = HRM.Default || (HRM.Default = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Employees;
    (function (Employees) {
        var DeparetementsDialog = /** @class */ (function (_super) {
            __extends(DeparetementsDialog, _super);
            function DeparetementsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Employees.DeparetementsForm(_this.idPrefix);
                return _this;
            }
            DeparetementsDialog.prototype.getFormKey = function () { return Employees.DeparetementsForm.formKey; };
            DeparetementsDialog.prototype.getIdProperty = function () { return Employees.DeparetementsRow.idProperty; };
            DeparetementsDialog.prototype.getLocalTextPrefix = function () { return Employees.DeparetementsRow.localTextPrefix; };
            DeparetementsDialog.prototype.getNameProperty = function () { return Employees.DeparetementsRow.nameProperty; };
            DeparetementsDialog.prototype.getService = function () { return Employees.DeparetementsService.baseUrl; };
            DeparetementsDialog.prototype.getDeletePermission = function () { return Employees.DeparetementsRow.deletePermission; };
            DeparetementsDialog.prototype.getInsertPermission = function () { return Employees.DeparetementsRow.insertPermission; };
            DeparetementsDialog.prototype.getUpdatePermission = function () { return Employees.DeparetementsRow.updatePermission; };
            DeparetementsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], DeparetementsDialog);
            return DeparetementsDialog;
        }(Serenity.EntityDialog));
        Employees.DeparetementsDialog = DeparetementsDialog;
    })(Employees = HRM.Employees || (HRM.Employees = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Employees;
    (function (Employees) {
        var DeparetementsGrid = /** @class */ (function (_super) {
            __extends(DeparetementsGrid, _super);
            function DeparetementsGrid(container) {
                return _super.call(this, container) || this;
            }
            DeparetementsGrid.prototype.getColumnsKey = function () { return 'Employees.Deparetements'; };
            DeparetementsGrid.prototype.getDialogType = function () { return Employees.DeparetementsDialog; };
            DeparetementsGrid.prototype.getIdProperty = function () { return Employees.DeparetementsRow.idProperty; };
            DeparetementsGrid.prototype.getInsertPermission = function () { return Employees.DeparetementsRow.insertPermission; };
            DeparetementsGrid.prototype.getLocalTextPrefix = function () { return Employees.DeparetementsRow.localTextPrefix; };
            DeparetementsGrid.prototype.getService = function () { return Employees.DeparetementsService.baseUrl; };
            DeparetementsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], DeparetementsGrid);
            return DeparetementsGrid;
        }(Serenity.EntityGrid));
        Employees.DeparetementsGrid = DeparetementsGrid;
    })(Employees = HRM.Employees || (HRM.Employees = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Employees;
    (function (Employees) {
        var JobsDialog = /** @class */ (function (_super) {
            __extends(JobsDialog, _super);
            function JobsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Employees.JobsForm(_this.idPrefix);
                return _this;
            }
            JobsDialog.prototype.getFormKey = function () { return Employees.JobsForm.formKey; };
            JobsDialog.prototype.getIdProperty = function () { return Employees.JobsRow.idProperty; };
            JobsDialog.prototype.getLocalTextPrefix = function () { return Employees.JobsRow.localTextPrefix; };
            JobsDialog.prototype.getNameProperty = function () { return Employees.JobsRow.nameProperty; };
            JobsDialog.prototype.getService = function () { return Employees.JobsService.baseUrl; };
            JobsDialog.prototype.getDeletePermission = function () { return Employees.JobsRow.deletePermission; };
            JobsDialog.prototype.getInsertPermission = function () { return Employees.JobsRow.insertPermission; };
            JobsDialog.prototype.getUpdatePermission = function () { return Employees.JobsRow.updatePermission; };
            JobsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], JobsDialog);
            return JobsDialog;
        }(Serenity.EntityDialog));
        Employees.JobsDialog = JobsDialog;
    })(Employees = HRM.Employees || (HRM.Employees = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Employees;
    (function (Employees) {
        var JobsGrid = /** @class */ (function (_super) {
            __extends(JobsGrid, _super);
            function JobsGrid(container) {
                return _super.call(this, container) || this;
            }
            JobsGrid.prototype.getColumnsKey = function () { return 'Employees.Jobs'; };
            JobsGrid.prototype.getDialogType = function () { return Employees.JobsDialog; };
            JobsGrid.prototype.getIdProperty = function () { return Employees.JobsRow.idProperty; };
            JobsGrid.prototype.getInsertPermission = function () { return Employees.JobsRow.insertPermission; };
            JobsGrid.prototype.getLocalTextPrefix = function () { return Employees.JobsRow.localTextPrefix; };
            JobsGrid.prototype.getService = function () { return Employees.JobsService.baseUrl; };
            JobsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], JobsGrid);
            return JobsGrid;
        }(Serenity.EntityGrid));
        Employees.JobsGrid = JobsGrid;
    })(Employees = HRM.Employees || (HRM.Employees = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Employees;
    (function (Employees) {
        var PermissionRequestsDialog = /** @class */ (function (_super) {
            __extends(PermissionRequestsDialog, _super);
            function PermissionRequestsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Employees.PermissionRequestsForm(_this.idPrefix);
                return _this;
            }
            PermissionRequestsDialog.prototype.getFormKey = function () { return Employees.PermissionRequestsForm.formKey; };
            PermissionRequestsDialog.prototype.getIdProperty = function () { return Employees.PermissionRequestsRow.idProperty; };
            PermissionRequestsDialog.prototype.getLocalTextPrefix = function () { return Employees.PermissionRequestsRow.localTextPrefix; };
            PermissionRequestsDialog.prototype.getService = function () { return Employees.PermissionRequestsService.baseUrl; };
            PermissionRequestsDialog.prototype.getDeletePermission = function () { return Employees.PermissionRequestsRow.deletePermission; };
            PermissionRequestsDialog.prototype.getInsertPermission = function () { return Employees.PermissionRequestsRow.insertPermission; };
            PermissionRequestsDialog.prototype.getUpdatePermission = function () { return Employees.PermissionRequestsRow.updatePermission; };
            PermissionRequestsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], PermissionRequestsDialog);
            return PermissionRequestsDialog;
        }(Serenity.EntityDialog));
        Employees.PermissionRequestsDialog = PermissionRequestsDialog;
    })(Employees = HRM.Employees || (HRM.Employees = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Employees;
    (function (Employees) {
        var PermissionRequestsGrid = /** @class */ (function (_super) {
            __extends(PermissionRequestsGrid, _super);
            function PermissionRequestsGrid(container) {
                return _super.call(this, container) || this;
            }
            PermissionRequestsGrid.prototype.getColumnsKey = function () { return 'Employees.PermissionRequests'; };
            PermissionRequestsGrid.prototype.getDialogType = function () { return Employees.PermissionRequestsDialog; };
            PermissionRequestsGrid.prototype.getIdProperty = function () { return Employees.PermissionRequestsRow.idProperty; };
            PermissionRequestsGrid.prototype.getInsertPermission = function () { return Employees.PermissionRequestsRow.insertPermission; };
            PermissionRequestsGrid.prototype.getLocalTextPrefix = function () { return Employees.PermissionRequestsRow.localTextPrefix; };
            PermissionRequestsGrid.prototype.getService = function () { return Employees.PermissionRequestsService.baseUrl; };
            PermissionRequestsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PermissionRequestsGrid);
            return PermissionRequestsGrid;
        }(Serenity.EntityGrid));
        Employees.PermissionRequestsGrid = PermissionRequestsGrid;
    })(Employees = HRM.Employees || (HRM.Employees = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Employees;
    (function (Employees) {
        var StatusDialog = /** @class */ (function (_super) {
            __extends(StatusDialog, _super);
            function StatusDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Employees.StatusForm(_this.idPrefix);
                return _this;
            }
            StatusDialog.prototype.getFormKey = function () { return Employees.StatusForm.formKey; };
            StatusDialog.prototype.getIdProperty = function () { return Employees.StatusRow.idProperty; };
            StatusDialog.prototype.getLocalTextPrefix = function () { return Employees.StatusRow.localTextPrefix; };
            StatusDialog.prototype.getNameProperty = function () { return Employees.StatusRow.nameProperty; };
            StatusDialog.prototype.getService = function () { return Employees.StatusService.baseUrl; };
            StatusDialog.prototype.getDeletePermission = function () { return Employees.StatusRow.deletePermission; };
            StatusDialog.prototype.getInsertPermission = function () { return Employees.StatusRow.insertPermission; };
            StatusDialog.prototype.getUpdatePermission = function () { return Employees.StatusRow.updatePermission; };
            StatusDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], StatusDialog);
            return StatusDialog;
        }(Serenity.EntityDialog));
        Employees.StatusDialog = StatusDialog;
    })(Employees = HRM.Employees || (HRM.Employees = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Employees;
    (function (Employees) {
        var StatusGrid = /** @class */ (function (_super) {
            __extends(StatusGrid, _super);
            function StatusGrid(container) {
                return _super.call(this, container) || this;
            }
            StatusGrid.prototype.getColumnsKey = function () { return 'Employees.Status'; };
            StatusGrid.prototype.getDialogType = function () { return Employees.StatusDialog; };
            StatusGrid.prototype.getIdProperty = function () { return Employees.StatusRow.idProperty; };
            StatusGrid.prototype.getInsertPermission = function () { return Employees.StatusRow.insertPermission; };
            StatusGrid.prototype.getLocalTextPrefix = function () { return Employees.StatusRow.localTextPrefix; };
            StatusGrid.prototype.getService = function () { return Employees.StatusService.baseUrl; };
            StatusGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], StatusGrid);
            return StatusGrid;
        }(Serenity.EntityGrid));
        Employees.StatusGrid = StatusGrid;
    })(Employees = HRM.Employees || (HRM.Employees = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Employees;
    (function (Employees) {
        var UsersDialog = /** @class */ (function (_super) {
            __extends(UsersDialog, _super);
            //protected getToolbarButtons() {
            //    var buttons = super.getToolbarButtons();
            //    if (!Authorization.hasPermission("Review:Audit:Modify"))
            //    { buttons = buttons.slice(2); }
            //    if (!Authorization.hasPermission("Review:Audit:Delete"))
            //    { buttons = buttons.slice(1); } return buttons;
            //}
            function UsersDialog(options) {
                var _this = _super.call(this, options) || this;
                //protected getUpdatePermission() { return UsersRow.updatePermission; }
                _this.form = new Employees.UsersForm(_this.idPrefix);
                if (!_this.options.canDelete) {
                    _this.toolbar.findButton(".delete-button").remove();
                }
                return _this;
            }
            UsersDialog.prototype.getFormKey = function () { return Employees.UsersForm.formKey; };
            UsersDialog.prototype.getIdProperty = function () { return Employees.UsersRow.idProperty; };
            UsersDialog.prototype.getLocalTextPrefix = function () { return Employees.UsersRow.localTextPrefix; };
            UsersDialog.prototype.getNameProperty = function () { return Employees.UsersRow.nameProperty; };
            UsersDialog.prototype.getService = function () { return Employees.UsersService.baseUrl; };
            //protected getDeletePermission() { return UsersRow.deletePermission; }
            UsersDialog.prototype.getInsertPermission = function () { return Employees.UsersRow.insertPermission; };
            UsersDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], UsersDialog);
            return UsersDialog;
        }(Serenity.EntityDialog));
        Employees.UsersDialog = UsersDialog;
    })(Employees = HRM.Employees || (HRM.Employees = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Employees;
    (function (Employees) {
        var UsersGrid = /** @class */ (function (_super) {
            __extends(UsersGrid, _super);
            function UsersGrid(container) {
                return _super.call(this, container) || this;
            }
            UsersGrid.prototype.getColumnsKey = function () { return 'Employees.Users'; };
            UsersGrid.prototype.getDialogType = function () { return Employees.UsersDialog; };
            UsersGrid.prototype.getIdProperty = function () { return Employees.UsersRow.idProperty; };
            UsersGrid.prototype.getInsertPermission = function () { return Employees.UsersRow.insertPermission; };
            UsersGrid.prototype.getLocalTextPrefix = function () { return Employees.UsersRow.localTextPrefix; };
            UsersGrid.prototype.getService = function () { return Employees.UsersService.baseUrl; };
            /**
             * This method is called to get list of buttons to be created.
             */
            UsersGrid.prototype.getButtons = function () {
                // call base method to get list of buttons
                // by default, base entity grid adds a few buttons, 
                // add, refresh, column selection in order.
                var buttons = _super.prototype.getButtons.call(this);
                // here is several methods to remove add button
                // only one is enabled, others are commented
                // METHOD 1
                // we would be able to simply return an empty button list,
                // but this would also remove all other buttons
                // return [];
                // METHOD 2
                // remove by splicing (something like delete by index)
                // here we hard code add button index (not nice!)
                // buttons.splice(0, 1);
                // METHOD 3 - recommended
                // remove by splicing, but this time find button index
                // by its css class. it is the best and safer method
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                return buttons;
            };
            UsersGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], UsersGrid);
            return UsersGrid;
        }(Serenity.EntityGrid));
        Employees.UsersGrid = UsersGrid;
    })(Employees = HRM.Employees || (HRM.Employees = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Employees;
    (function (Employees) {
        var VacanciesDialog = /** @class */ (function (_super) {
            __extends(VacanciesDialog, _super);
            function VacanciesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Employees.VacanciesForm(_this.idPrefix);
                return _this;
            }
            VacanciesDialog.prototype.getFormKey = function () { return Employees.VacanciesForm.formKey; };
            VacanciesDialog.prototype.getIdProperty = function () { return Employees.VacanciesRow.idProperty; };
            VacanciesDialog.prototype.getLocalTextPrefix = function () { return Employees.VacanciesRow.localTextPrefix; };
            VacanciesDialog.prototype.getNameProperty = function () { return Employees.VacanciesRow.nameProperty; };
            VacanciesDialog.prototype.getService = function () { return Employees.VacanciesService.baseUrl; };
            VacanciesDialog.prototype.getDeletePermission = function () { return Employees.VacanciesRow.deletePermission; };
            VacanciesDialog.prototype.getInsertPermission = function () { return Employees.VacanciesRow.insertPermission; };
            VacanciesDialog.prototype.getUpdatePermission = function () { return Employees.VacanciesRow.updatePermission; };
            VacanciesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], VacanciesDialog);
            return VacanciesDialog;
        }(Serenity.EntityDialog));
        Employees.VacanciesDialog = VacanciesDialog;
    })(Employees = HRM.Employees || (HRM.Employees = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Employees;
    (function (Employees) {
        var VacanciesGrid = /** @class */ (function (_super) {
            __extends(VacanciesGrid, _super);
            function VacanciesGrid(container) {
                return _super.call(this, container) || this;
            }
            VacanciesGrid.prototype.getColumnsKey = function () { return 'Employees.Vacancies'; };
            VacanciesGrid.prototype.getDialogType = function () { return Employees.VacanciesDialog; };
            VacanciesGrid.prototype.getIdProperty = function () { return Employees.VacanciesRow.idProperty; };
            VacanciesGrid.prototype.getInsertPermission = function () { return Employees.VacanciesRow.insertPermission; };
            VacanciesGrid.prototype.getLocalTextPrefix = function () { return Employees.VacanciesRow.localTextPrefix; };
            VacanciesGrid.prototype.getService = function () { return Employees.VacanciesService.baseUrl; };
            VacanciesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], VacanciesGrid);
            return VacanciesGrid;
        }(Serenity.EntityGrid));
        Employees.VacanciesGrid = VacanciesGrid;
    })(Employees = HRM.Employees || (HRM.Employees = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Employees;
    (function (Employees) {
        var VacancyPolicyDialog = /** @class */ (function (_super) {
            __extends(VacancyPolicyDialog, _super);
            function VacancyPolicyDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Employees.VacancyPolicyForm(_this.idPrefix);
                return _this;
            }
            VacancyPolicyDialog.prototype.getFormKey = function () { return Employees.VacancyPolicyForm.formKey; };
            VacancyPolicyDialog.prototype.getIdProperty = function () { return Employees.VacancyPolicyRow.idProperty; };
            VacancyPolicyDialog.prototype.getLocalTextPrefix = function () { return Employees.VacancyPolicyRow.localTextPrefix; };
            VacancyPolicyDialog.prototype.getService = function () { return Employees.VacancyPolicyService.baseUrl; };
            VacancyPolicyDialog.prototype.getDeletePermission = function () { return Employees.VacancyPolicyRow.deletePermission; };
            VacancyPolicyDialog.prototype.getInsertPermission = function () { return Employees.VacancyPolicyRow.insertPermission; };
            VacancyPolicyDialog.prototype.getUpdatePermission = function () { return Employees.VacancyPolicyRow.updatePermission; };
            VacancyPolicyDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], VacancyPolicyDialog);
            return VacancyPolicyDialog;
        }(Serenity.EntityDialog));
        Employees.VacancyPolicyDialog = VacancyPolicyDialog;
    })(Employees = HRM.Employees || (HRM.Employees = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Employees;
    (function (Employees) {
        var VacancyPolicyGrid = /** @class */ (function (_super) {
            __extends(VacancyPolicyGrid, _super);
            function VacancyPolicyGrid(container) {
                return _super.call(this, container) || this;
            }
            VacancyPolicyGrid.prototype.getColumnsKey = function () { return 'Employees.VacancyPolicy'; };
            VacancyPolicyGrid.prototype.getDialogType = function () { return Employees.VacancyPolicyDialog; };
            VacancyPolicyGrid.prototype.getIdProperty = function () { return Employees.VacancyPolicyRow.idProperty; };
            VacancyPolicyGrid.prototype.getInsertPermission = function () { return Employees.VacancyPolicyRow.insertPermission; };
            VacancyPolicyGrid.prototype.getLocalTextPrefix = function () { return Employees.VacancyPolicyRow.localTextPrefix; };
            VacancyPolicyGrid.prototype.getService = function () { return Employees.VacancyPolicyService.baseUrl; };
            VacancyPolicyGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], VacancyPolicyGrid);
            return VacancyPolicyGrid;
        }(Serenity.EntityGrid));
        Employees.VacancyPolicyGrid = VacancyPolicyGrid;
    })(Employees = HRM.Employees || (HRM.Employees = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Employees;
    (function (Employees) {
        var VacancyRequestsDialog = /** @class */ (function (_super) {
            __extends(VacancyRequestsDialog, _super);
            function VacancyRequestsDialog(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Employees.VacancyRequestsForm(_this.idPrefix);
                return _this;
            }
            VacancyRequestsDialog.prototype.getFormKey = function () { return Employees.VacancyRequestsForm.formKey; };
            VacancyRequestsDialog.prototype.getIdProperty = function () { return Employees.VacancyRequestsRow.idProperty; };
            VacancyRequestsDialog.prototype.getLocalTextPrefix = function () { return Employees.VacancyRequestsRow.localTextPrefix; };
            VacancyRequestsDialog.prototype.getService = function () { return Employees.VacancyRequestsService.baseUrl; };
            VacancyRequestsDialog.prototype.getDeletePermission = function () { return Employees.VacancyRequestsRow.deletePermission; };
            VacancyRequestsDialog.prototype.getInsertPermission = function () { return Employees.VacancyRequestsRow.insertPermission; };
            VacancyRequestsDialog.prototype.getUpdatePermission = function () { return Employees.VacancyRequestsRow.updatePermission; };
            VacancyRequestsDialog.prototype.onDialogOpen = function () {
                var _this = this;
                Employees.VacancyRequestsService.Total_Limits({
                    Entity: {
                        VacancyId: parseInt(this.form.VacancyId.value),
                        DateFrom: this.form.DateFrom.value,
                        Dateto: this.form.Dateto.value
                    }
                }, function (response) {
                    _this.form.Total.value = response.YourVacancyRequest;
                });
                $('input[name=DateFrom],input[name=Dateto]').on('change', function () {
                    //var DateFrom = $('input[name=DateFrom]').val();
                    //var Dateto = $('input[name=Dateto]').val();
                    var _this = this;
                    //var start: any = new Date(DateFrom);
                    //var end: any = new Date(Dateto);
                    //var diffDate = (end - start) / (1000 * 60 * 60 * 24);
                    //var days = Math.round(diffDate);
                    //$('input[name=Total]').val(days);
                    Employees.VacancyRequestsService.Total_Limits({
                        Entity: {
                            VacancyId: parseInt(this.form.VacancyId.value),
                            DateFrom: this.form.DateFrom.value,
                            Dateto: this.form.Dateto.value
                        }
                    }, function (response) {
                        _this.form.Total.value = response.YourVacancyRequest;
                    });
                });
            };
            VacancyRequestsDialog.prototype.afterLoadEntity = function () {
                var _this = this;
                _super.prototype.afterLoadEntity.call(this);
                if (this.form.TotlaLimit_relay.value == null || this.form.TotlaLimit_relay.value == 0) {
                    this.form.TotlaLimit_relay.getGridField().toggle(false);
                }
                this.form.VacancyId.changeSelect2(function (e) {
                    if (_this.form.VacancyId.value != null && _this.form.DateFrom.value != null
                        && _this.form.Dateto.value != null) {
                        Employees.VacancyRequestsService.Total_Limits({
                            Entity: {
                                VacancyId: parseInt(_this.form.VacancyId.value),
                                DateFrom: _this.form.DateFrom.value,
                                Dateto: _this.form.Dateto.value
                            }
                        }, function (response) {
                            _this.form.TotlaLimit_relay.value = response.TotalSum;
                            _this.form.LeaveTaken.value = response.AllVactions;
                            _this.form.Limit_in_Inser.value = response.Limit;
                            if (_this.form.TotlaLimit_relay.value != 0) {
                                _this.form.TotlaLimit_relay.getGridField().toggle(true);
                            }
                            else if (_this.form.TotlaLimit_relay.value == 0) {
                                _this.form.TotlaLimit_relay.getGridField().toggle(false);
                            }
                            if (_this.form.LeaveTaken.value != null) {
                                _this.form.LeaveTaken.getGridField().toggle(true);
                            }
                            else if (_this.form.LeaveTaken.value == null) {
                                _this.form.LeaveTaken.getGridField().toggle(false);
                            }
                            if (_this.form.Limit_in_Inser.value != null) {
                                _this.form.Limit_in_Inser.getGridField().toggle(true);
                            }
                            else if (_this.form.Limit_in_Inser.value == null) {
                                _this.form.Limit_in_Inser.getGridField().toggle(false);
                            }
                        });
                    }
                });
                this.form.DateFrom.changeSelect2(function (e) {
                    if (_this.form.VacancyId.value != null && _this.form.DateFrom.value != null
                        && _this.form.Dateto.value != null) {
                        Employees.VacancyRequestsService.Total_Limits({
                            Entity: {
                                VacancyId: parseInt(_this.form.VacancyId.value),
                                DateFrom: _this.form.DateFrom.value,
                                Dateto: _this.form.Dateto.value
                            }
                        }, function (response) {
                            _this.form.TotlaLimit_relay.value = response.TotalSum;
                            _this.form.LeaveTaken.value = response.AllVactions;
                            _this.form.Limit_in_Inser.value = response.Limit;
                            if (_this.form.TotlaLimit_relay.value != 0) {
                                _this.form.TotlaLimit_relay.getGridField().toggle(true);
                            }
                            else if (_this.form.TotlaLimit_relay.value == 0) {
                                _this.form.TotlaLimit_relay.getGridField().toggle(false);
                            }
                            if (_this.form.LeaveTaken.value != null) {
                                _this.form.LeaveTaken.getGridField().toggle(true);
                            }
                            else if (_this.form.LeaveTaken.value == null) {
                                _this.form.LeaveTaken.getGridField().toggle(false);
                            }
                            if (_this.form.Limit_in_Inser.value != null) {
                                _this.form.Limit_in_Inser.getGridField().toggle(true);
                                //this.form.LimitNotRelay.getGridField().toggle(false);
                            }
                            else if (_this.form.Limit_in_Inser.value == null) {
                                _this.form.Limit_in_Inser.getGridField().toggle(false);
                                //this.form.LimitNotRelay.getGridField().toggle(true);
                            }
                        });
                    }
                });
                this.form.Dateto.changeSelect2(function (e) {
                    if (_this.form.VacancyId.value != null && _this.form.DateFrom.value != null
                        && _this.form.Dateto.value != null) {
                        Employees.VacancyRequestsService.Total_Limits({
                            Entity: {
                                VacancyId: parseInt(_this.form.VacancyId.value),
                                DateFrom: _this.form.DateFrom.value,
                                Dateto: _this.form.Dateto.value
                            }
                        }, function (response) {
                            _this.form.TotlaLimit_relay.value = response.TotalSum;
                            _this.form.LeaveTaken.value = response.AllVactions;
                            _this.form.Limit_in_Inser.value = response.Limit;
                            if (_this.form.TotlaLimit_relay.value != 0) {
                                _this.form.TotlaLimit_relay.getGridField().toggle(true);
                            }
                            else if (_this.form.TotlaLimit_relay.value == 0) {
                                _this.form.TotlaLimit_relay.getGridField().toggle(false);
                            }
                            if (_this.form.LeaveTaken.value != null) {
                                _this.form.LeaveTaken.getGridField().toggle(true);
                            }
                            else if (_this.form.LeaveTaken.value == null) {
                                _this.form.LeaveTaken.getGridField().toggle(false);
                            }
                            if (_this.form.Limit_in_Inser.value != null) {
                                _this.form.Limit_in_Inser.getGridField().toggle(true);
                                //this.form.LimitNotRelay.getGridField().toggle(false);
                            }
                            else if (_this.form.Limit_in_Inser.value == null) {
                                _this.form.Limit_in_Inser.getGridField().toggle(false);
                                //this.form.LimitNotRelay.getGridField().toggle(true);
                            }
                        });
                    }
                });
                if (this.form.VacancyId.value != "") {
                    Employees.VacancyRequestsService.Total_Limits({
                        Entity: {
                            VacancyId: parseInt(this.form.VacancyId.value),
                            DateFrom: this.form.DateFrom.value,
                            Dateto: this.form.Dateto.value
                        }
                    }, function (response) {
                        _this.form.TotlaLimit_relay.value = response.TotalSum;
                        _this.form.LeaveTaken.value = response.AllVactions;
                        _this.form.Limit_in_Inser.value = response.Limit;
                        if (_this.form.TotlaLimit_relay.value != 0) {
                            _this.form.TotlaLimit_relay.getGridField().toggle(true);
                        }
                        else if (_this.form.TotlaLimit_relay.value == 0) {
                            _this.form.TotlaLimit_relay.getGridField().toggle(false);
                        }
                        if (_this.form.LeaveTaken.value != null) {
                            _this.form.LeaveTaken.getGridField().toggle(true);
                        }
                        else if (_this.form.LeaveTaken.value == null) {
                            _this.form.LeaveTaken.getGridField().toggle(false);
                        }
                        if (_this.form.Limit_in_Inser.value != null) {
                            _this.form.Limit_in_Inser.getGridField().toggle(true);
                            //this.form.LimitNotRelay.getGridField().toggle(false);
                        }
                        else if (_this.form.Limit_in_Inser.value == null) {
                            _this.form.Limit_in_Inser.getGridField().toggle(false);
                            //this.form.LimitNotRelay.getGridField().toggle(true);
                        }
                    });
                }
                //If Request are accepted Disapled Edite
                if (this.form.IsAcceptedbyHr.value == "1" || this.form.StatusId.value == "1" ||
                    this.form.IsAcceptedbyHr.value == "2" || this.form.StatusId.value == "2") {
                    Serenity.EditorUtils.setReadonly(this.element.find('.editor'), true);
                    this.element.find('sup').hide();
                    this.deleteButton.toggleClass('disabled', true);
                    this.applyChangesButton.toggleClass('disabled', true);
                    this.saveAndCloseButton.toggleClass('disabled', true);
                }
            };
            VacancyRequestsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], VacancyRequestsDialog);
            return VacancyRequestsDialog;
        }(Serenity.EntityDialog));
        Employees.VacancyRequestsDialog = VacancyRequestsDialog;
    })(Employees = HRM.Employees || (HRM.Employees = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Employees;
    (function (Employees) {
        var VacancyRequestsGrid = /** @class */ (function (_super) {
            __extends(VacancyRequestsGrid, _super);
            function VacancyRequestsGrid(container) {
                return _super.call(this, container) || this;
                // Method 1
            }
            VacancyRequestsGrid.prototype.getColumnsKey = function () { return 'Employees.VacancyRequests'; };
            VacancyRequestsGrid.prototype.getDialogType = function () { return Employees.VacancyRequestsDialog; };
            VacancyRequestsGrid.prototype.getIdProperty = function () { return Employees.VacancyRequestsRow.idProperty; };
            VacancyRequestsGrid.prototype.getInsertPermission = function () { return Employees.VacancyRequestsRow.insertPermission; };
            VacancyRequestsGrid.prototype.getLocalTextPrefix = function () { return Employees.VacancyRequestsRow.localTextPrefix; };
            VacancyRequestsGrid.prototype.getService = function () { return Employees.VacancyRequestsService.baseUrl; };
            VacancyRequestsGrid.prototype.GetMonthName = function (month) {
                switch (month) {
                    case 1:
                        return "January";
                    case 2:
                        return "February";
                    case 3:
                        return "March";
                    case 4:
                        return "April";
                    case 5:
                        return "May";
                    case 6:
                        return "June";
                    case 7:
                        return "July";
                    case 8:
                        return "August";
                    case 9:
                        return "September";
                    case 10:
                        return "October";
                    case 11:
                        return "November";
                    case 12:
                        return "December";
                    default:
                        return "";
                }
            };
            VacancyRequestsGrid.prototype.createSlickGrid = function () {
                var grid = _super.prototype.createSlickGrid.call(this);
                // need to register this plugin for grouping or you'll have errors
                grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());
                this.view.setSummaryOptions({
                    aggregators: [
                        new Slick.Aggregators.Sum("Total" /* Total */),
                    ]
                });
                return grid;
            };
            VacancyRequestsGrid.prototype.getColumns = function () {
                var _this = this;
                var columns = _super.prototype.getColumns.call(this);
                columns[8].format = function (ctx) { return _this.GetMonthName(parseInt(Q.formatDate(ctx.value, "MM"))); }; // Gives 01,02 etc.
                //Q.first(columns, x => x.field === fld.LimitRelay)
                //    .groupTotalsFormatter = (totals, col) =>
                //        (totals.max ? ('max: ' + Q.coalesce(totals.max[col.field], '')) : '');
                return columns;
            };
            VacancyRequestsGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.showFooterRow = true;
                return opt;
            };
            //protected usePager() {
            //    return false;
            //}
            VacancyRequestsGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push({
                    title: 'Group By Balance',
                    cssClass: 'expand-all-button',
                    onClick: function () { return _this.view.setGrouping([{
                            getter: "Balance" /* Balance */,
                            formatter: function (ctx) { return _this.GetMonthName(parseInt(Q.formatDate(ctx.value, "MM"))) + ' (' + ctx.count + ' items)'; }
                        }]); }
                });
                buttons.push({
                    title: 'No Balance',
                    cssClass: 'collapse-all-button',
                    onClick: function () { return _this.view.setGrouping([]); }
                });
                return buttons;
            };
            VacancyRequestsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], VacancyRequestsGrid);
            return VacancyRequestsGrid;
        }(Serenity.EntityGrid));
        Employees.VacancyRequestsGrid = VacancyRequestsGrid;
    })(Employees = HRM.Employees || (HRM.Employees = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Membership;
    (function (Membership) {
        var LoginPanel = /** @class */ (function (_super) {
            __extends(LoginPanel, _super);
            function LoginPanel(container) {
                var _this = _super.call(this, container) || this;
                $.fn['vegas'] && $('body')['vegas']({
                    delay: 30000,
                    cover: true,
                    overlay: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACAQMAAABIeJ9nAAAAA3NCSVQICAjb4U" +
                        "/gAAAABlBMVEX///8AAABVwtN+AAAAAnRSTlMA/1uRIrUAAAAJcEhZcwAAAsQAAALEAVuRnQsAAAAWdEVYdENyZWF0" +
                        "aW9uIFRpbWUAMDQvMTMvMTGrW0T6AAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M1cbXjNgAAAAxJREFUCJljaGBgAAABhACBrONIPgAAAABJRU5ErkJggg==",
                    slides: [
                        { src: Q.resolveUrl("~/Content/site/slides/slide1.jpg"), transition: 'fade' },
                        { src: Q.resolveUrl("~/Content/site/slides/slide2.jpg"), transition: 'zoomOut' },
                        { src: Q.resolveUrl("~/Content/site/slides/slide3.jpg"), transition: 'swirlLeft' }
                    ]
                });
                _this.byId('LoginButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/Login'),
                        request: request,
                        onSuccess: function (response) {
                            _this.redirectToReturnUrl();
                        },
                        onError: function (response) {
                            if (response != null && response.Error != null && response.Error.Code == "RedirectUserTo") {
                                window.location.href = response.Error.Arguments;
                                return;
                            }
                            if (response != null && response.Error != null && !Q.isEmptyOrNull(response.Error.Message)) {
                                Q.notifyError(response.Error.Message);
                                $('#Password').focus();
                                return;
                            }
                            Q.ErrorHandling.showServiceError(response.Error);
                        }
                    });
                });
                return _this;
            }
            LoginPanel.prototype.getFormKey = function () { return Membership.LoginForm.formKey; };
            LoginPanel.prototype.redirectToReturnUrl = function () {
                var q = Q.parseQueryString();
                var returnUrl = q['returnUrl'] || q['ReturnUrl'];
                if (returnUrl) {
                    var hash = window.location.hash;
                    if (hash != null && hash != '#')
                        returnUrl += hash;
                    window.location.href = returnUrl;
                }
                else {
                    window.location.href = Q.resolveUrl('~/');
                }
            };
            LoginPanel.prototype.getTemplate = function () {
                return "\n<div class=\"flex-layout\">\n    <div class=\"logo\"></div>\n    <h3>" + Q.text("Forms.Membership.Login.FormTitle") + "</h3>\n    <form id=\"~_Form\" action=\"\">\n        <div class=\"s-Form\">\n            <div class=\"fieldset ui-widget ui-widget-content ui-corner-all\">\n                <div id=\"~_PropertyGrid\"></div>\n                <div class=\"clear\"></div>\n            </div>\n            <div class=\"buttons\">\n                <button id=\"~_LoginButton\" type=\"submit\" class=\"btn btn-primary\">\n                    " + Q.text("Forms.Membership.Login.SignInButton") + "\n                </button>\n            </div>\n            <div class=\"actions\">\n                <a href=\"" + Q.resolveUrl('~/Account/ForgotPassword') + "\"><i class=\"fa fa-angle-right\"></i>&nbsp;" + Q.text("Forms.Membership.Login.ForgotPassword") + "</a>\n                <a href=\"" + Q.resolveUrl('~/Account/SignUp') + "\"><i class=\"fa fa-angle-right\"></i>&nbsp;" + Q.text("Forms.Membership.Login.SignUpButton") + "</a>\n                <div class=\"clear\"></div>\n            </div>\n        </div>\n    </form>\n</div>\n";
            };
            LoginPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], LoginPanel);
            return LoginPanel;
        }(Serenity.PropertyPanel));
        Membership.LoginPanel = LoginPanel;
    })(Membership = HRM.Membership || (HRM.Membership = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Membership;
    (function (Membership) {
        var ChangePasswordPanel = /** @class */ (function (_super) {
            __extends(ChangePasswordPanel, _super);
            function ChangePasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ChangePasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.w('NewPassword', Serenity.PasswordEditor).value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ChangePassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ChangePassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ChangePasswordPanel.prototype.getFormKey = function () { return Membership.ChangePasswordForm.formKey; };
            ChangePasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ChangePasswordPanel);
            return ChangePasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ChangePasswordPanel = ChangePasswordPanel;
    })(Membership = HRM.Membership || (HRM.Membership = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordPanel = /** @class */ (function (_super) {
            __extends(ForgotPasswordPanel, _super);
            function ForgotPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ForgotPasswordForm(_this.idPrefix);
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ForgotPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ForgotPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ForgotPasswordPanel.prototype.getFormKey = function () { return Membership.ForgotPasswordForm.formKey; };
            ForgotPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ForgotPasswordPanel);
            return ForgotPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ForgotPasswordPanel = ForgotPasswordPanel;
    })(Membership = HRM.Membership || (HRM.Membership = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Membership;
    (function (Membership) {
        var ResetPasswordPanel = /** @class */ (function (_super) {
            __extends(ResetPasswordPanel, _super);
            function ResetPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ResetPasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    request.Token = _this.byId('Token').val();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ResetPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ResetPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/Account/Login');
                            });
                        }
                    });
                });
                return _this;
            }
            ResetPasswordPanel.prototype.getFormKey = function () { return Membership.ResetPasswordForm.formKey; };
            ResetPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ResetPasswordPanel);
            return ResetPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ResetPasswordPanel = ResetPasswordPanel;
    })(Membership = HRM.Membership || (HRM.Membership = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var Membership;
    (function (Membership) {
        var SignUpPanel = /** @class */ (function (_super) {
            __extends(SignUpPanel, _super);
            function SignUpPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.SignUpForm(_this.idPrefix);
                _this.form.ConfirmEmail.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmEmail.value !== _this.form.Email.value) {
                        return Q.text('Validation.EmailConfirm');
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.Password.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/SignUp'),
                        request: {
                            DisplayName: _this.form.DisplayName.value,
                            Email: _this.form.Email.value,
                            Password: _this.form.Password.value
                        },
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.SignUp.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            SignUpPanel.prototype.getFormKey = function () { return Membership.SignUpForm.formKey; };
            SignUpPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], SignUpPanel);
            return SignUpPanel;
        }(Serenity.PropertyPanel));
        Membership.SignUpPanel = SignUpPanel;
    })(Membership = HRM.Membership || (HRM.Membership = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var RequestsStatus;
    (function (RequestsStatus) {
        var EmpLoansDialog = /** @class */ (function (_super) {
            __extends(EmpLoansDialog, _super);
            function EmpLoansDialog(options) {
                var _this = _super.call(this, options) || this;
                _this.form = new RequestsStatus.EmpLoansForm(_this.idPrefix);
                if (!_this.options.canDelete) {
                    _this.toolbar.findButton(".delete-button").remove();
                }
                return _this;
            }
            EmpLoansDialog.prototype.getFormKey = function () { return RequestsStatus.EmpLoansForm.formKey; };
            EmpLoansDialog.prototype.getIdProperty = function () { return RequestsStatus.EmpLoansRow.idProperty; };
            EmpLoansDialog.prototype.getLocalTextPrefix = function () { return RequestsStatus.EmpLoansRow.localTextPrefix; };
            EmpLoansDialog.prototype.getNameProperty = function () { return RequestsStatus.EmpLoansRow.nameProperty; };
            EmpLoansDialog.prototype.getService = function () { return RequestsStatus.EmpLoansService.baseUrl; };
            EmpLoansDialog.prototype.getDeletePermission = function () { return RequestsStatus.EmpLoansRow.deletePermission; };
            EmpLoansDialog.prototype.getInsertPermission = function () { return RequestsStatus.EmpLoansRow.insertPermission; };
            EmpLoansDialog.prototype.getUpdatePermission = function () { return RequestsStatus.EmpLoansRow.updatePermission; };
            EmpLoansDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var btns = _super.prototype.getToolbarButtons.call(this);
                var btnSave = Q.first(btns, function (x) { return x.cssClass == "save-and-close-button"; });
                var btnApply = Q.first(btns, function (x) { return x.cssClass == "apply-changes-button"; });
                var oldSaveClick = btnSave.onClick;
                var oldApplyClick = btnApply.onClick;
                btnSave.onClick = function (e) {
                    _this.confirmBeforeSave(oldSaveClick, e);
                };
                btnApply.onClick = function (e) {
                    _this.confirmBeforeSave(oldApplyClick, e);
                };
                return btns;
            };
            EmpLoansDialog.prototype.confirmBeforeSave = function (oldEvt, e) {
                Q.confirm("If Request are Refused or Accepted this mean that you cannot update it ?", function () {
                    oldEvt(e);
                });
            };
            EmpLoansDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], EmpLoansDialog);
            return EmpLoansDialog;
        }(Serenity.EntityDialog));
        RequestsStatus.EmpLoansDialog = EmpLoansDialog;
    })(RequestsStatus = HRM.RequestsStatus || (HRM.RequestsStatus = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var RequestsStatus;
    (function (RequestsStatus) {
        var EmpLoansGrid = /** @class */ (function (_super) {
            __extends(EmpLoansGrid, _super);
            function EmpLoansGrid(container) {
                return _super.call(this, container) || this;
            }
            EmpLoansGrid.prototype.getColumnsKey = function () { return 'RequestsStatus.EmpLoans'; };
            EmpLoansGrid.prototype.getDialogType = function () { return RequestsStatus.EmpLoansDialog; };
            EmpLoansGrid.prototype.getIdProperty = function () { return RequestsStatus.EmpLoansRow.idProperty; };
            EmpLoansGrid.prototype.getInsertPermission = function () { return RequestsStatus.EmpLoansRow.insertPermission; };
            EmpLoansGrid.prototype.getLocalTextPrefix = function () { return RequestsStatus.EmpLoansRow.localTextPrefix; };
            EmpLoansGrid.prototype.getService = function () { return RequestsStatus.EmpLoansService.baseUrl; };
            EmpLoansGrid.prototype.getButtons = function () {
                // call base method to get list of buttons
                // by default, base entity grid adds a few buttons, 
                // add, refresh, column selection in order.
                var buttons = _super.prototype.getButtons.call(this);
                // here is several methods to remove add button
                // only one is enabled, others are commented
                // METHOD 1
                // we would be able to simply return an empty button list,
                // but this would also remove all other buttons
                // return [];
                // METHOD 2
                // remove by splicing (something like delete by index)
                // here we hard code add button index (not nice!)
                // buttons.splice(0, 1);
                // METHOD 3 - recommended
                // remove by splicing, but this time find button index
                // by its css class. it is the best and safer method
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                return buttons;
            };
            EmpLoansGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], EmpLoansGrid);
            return EmpLoansGrid;
        }(Serenity.EntityGrid));
        RequestsStatus.EmpLoansGrid = EmpLoansGrid;
    })(RequestsStatus = HRM.RequestsStatus || (HRM.RequestsStatus = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var RequestsStatus;
    (function (RequestsStatus) {
        var InstallmentsDialog = /** @class */ (function (_super) {
            __extends(InstallmentsDialog, _super);
            function InstallmentsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new RequestsStatus.InstallmentsForm(_this.idPrefix);
                return _this;
            }
            InstallmentsDialog.prototype.getFormKey = function () { return RequestsStatus.InstallmentsForm.formKey; };
            InstallmentsDialog.prototype.getIdProperty = function () { return RequestsStatus.InstallmentsRow.idProperty; };
            InstallmentsDialog.prototype.getLocalTextPrefix = function () { return RequestsStatus.InstallmentsRow.localTextPrefix; };
            InstallmentsDialog.prototype.getService = function () { return RequestsStatus.InstallmentsService.baseUrl; };
            InstallmentsDialog.prototype.getDeletePermission = function () { return RequestsStatus.InstallmentsRow.deletePermission; };
            InstallmentsDialog.prototype.getInsertPermission = function () { return RequestsStatus.InstallmentsRow.insertPermission; };
            InstallmentsDialog.prototype.getUpdatePermission = function () { return RequestsStatus.InstallmentsRow.updatePermission; };
            InstallmentsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], InstallmentsDialog);
            return InstallmentsDialog;
        }(Serenity.EntityDialog));
        RequestsStatus.InstallmentsDialog = InstallmentsDialog;
    })(RequestsStatus = HRM.RequestsStatus || (HRM.RequestsStatus = {}));
})(HRM || (HRM = {}));
/// <reference path="../../common/helpers/grideditorbase.ts" />
var HRM;
(function (HRM) {
    var RequestsStatus;
    (function (RequestsStatus) {
        var InstallmentsEditors = /** @class */ (function (_super) {
            __extends(InstallmentsEditors, _super);
            function InstallmentsEditors(container) {
                return _super.call(this, container) || this;
            }
            InstallmentsEditors.prototype.getColumnsKey = function () { return "SalaryDetails.Installments"; };
            //protected getIdProperty() { return AllowancesRow.idProperty; }
            InstallmentsEditors.prototype.getLocalTextPrefix = function () { return RequestsStatus.InstallmentsRow.localTextPrefix; };
            InstallmentsEditors.prototype.getButtons = function () {
                var buttons = _super.prototype.getButtons.call(this);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                return buttons;
            };
            InstallmentsEditors = __decorate([
                Serenity.Decorators.registerClass()
            ], InstallmentsEditors);
            return InstallmentsEditors;
        }(HRM.Common.GridEditorBase));
        RequestsStatus.InstallmentsEditors = InstallmentsEditors;
    })(RequestsStatus = HRM.RequestsStatus || (HRM.RequestsStatus = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var RequestsStatus;
    (function (RequestsStatus) {
        var InstallmentsGrid = /** @class */ (function (_super) {
            __extends(InstallmentsGrid, _super);
            function InstallmentsGrid(container) {
                return _super.call(this, container) || this;
            }
            InstallmentsGrid.prototype.getColumnsKey = function () { return 'RequestsStatus.Installments'; };
            InstallmentsGrid.prototype.getDialogType = function () { return RequestsStatus.InstallmentsDialog; };
            InstallmentsGrid.prototype.getIdProperty = function () { return RequestsStatus.InstallmentsRow.idProperty; };
            InstallmentsGrid.prototype.getInsertPermission = function () { return RequestsStatus.InstallmentsRow.insertPermission; };
            InstallmentsGrid.prototype.getLocalTextPrefix = function () { return RequestsStatus.InstallmentsRow.localTextPrefix; };
            InstallmentsGrid.prototype.getService = function () { return RequestsStatus.InstallmentsService.baseUrl; };
            InstallmentsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], InstallmentsGrid);
            return InstallmentsGrid;
        }(Serenity.EntityGrid));
        RequestsStatus.InstallmentsGrid = InstallmentsGrid;
    })(RequestsStatus = HRM.RequestsStatus || (HRM.RequestsStatus = {}));
})(HRM || (HRM = {}));
/// <reference path="../../common/helpers/grideditorbase.ts" />
var HRM;
(function (HRM) {
    var RequestsStatus;
    (function (RequestsStatus) {
        var InstallmentsRequestEditor = /** @class */ (function (_super) {
            __extends(InstallmentsRequestEditor, _super);
            function InstallmentsRequestEditor(container) {
                return _super.call(this, container) || this;
            }
            InstallmentsRequestEditor.prototype.getColumnsKey = function () { return "RequestsStatus.Installments"; };
            //protected getDialogType() { return SubInstallmentsDialog; }
            //protected getIdProperty() { return AllowancesRow.idProperty; }
            InstallmentsRequestEditor.prototype.getLocalTextPrefix = function () { return RequestsStatus.InstallmentsRow.localTextPrefix; };
            InstallmentsRequestEditor.prototype.getButtons = function () {
                var buttons = _super.prototype.getButtons.call(this);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                return buttons;
            };
            InstallmentsRequestEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], InstallmentsRequestEditor);
            return InstallmentsRequestEditor;
        }(HRM.Common.GridEditorBase));
        RequestsStatus.InstallmentsRequestEditor = InstallmentsRequestEditor;
    })(RequestsStatus = HRM.RequestsStatus || (HRM.RequestsStatus = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var RequestsStatus;
    (function (RequestsStatus) {
        var PermissionRequestsDialog = /** @class */ (function (_super) {
            __extends(PermissionRequestsDialog, _super);
            function PermissionRequestsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new RequestsStatus.PermissionRequestsForm(_this.idPrefix);
                return _this;
            }
            PermissionRequestsDialog.prototype.getFormKey = function () { return RequestsStatus.PermissionRequestsForm.formKey; };
            PermissionRequestsDialog.prototype.getIdProperty = function () { return RequestsStatus.PermissionRequestsRow.idProperty; };
            PermissionRequestsDialog.prototype.getLocalTextPrefix = function () { return RequestsStatus.PermissionRequestsRow.localTextPrefix; };
            PermissionRequestsDialog.prototype.getService = function () { return RequestsStatus.PermissionRequestsService.baseUrl; };
            PermissionRequestsDialog.prototype.getDeletePermission = function () { return RequestsStatus.PermissionRequestsRow.deletePermission; };
            PermissionRequestsDialog.prototype.getInsertPermission = function () { return RequestsStatus.PermissionRequestsRow.insertPermission; };
            PermissionRequestsDialog.prototype.getUpdatePermission = function () { return RequestsStatus.PermissionRequestsRow.updatePermission; };
            PermissionRequestsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], PermissionRequestsDialog);
            return PermissionRequestsDialog;
        }(Serenity.EntityDialog));
        RequestsStatus.PermissionRequestsDialog = PermissionRequestsDialog;
    })(RequestsStatus = HRM.RequestsStatus || (HRM.RequestsStatus = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var RequestsStatus;
    (function (RequestsStatus) {
        var PermissionRequestsGrid = /** @class */ (function (_super) {
            __extends(PermissionRequestsGrid, _super);
            function PermissionRequestsGrid(container) {
                return _super.call(this, container) || this;
            }
            PermissionRequestsGrid.prototype.getColumnsKey = function () { return 'RequestsStatus.PermissionRequests'; };
            PermissionRequestsGrid.prototype.getDialogType = function () { return RequestsStatus.PermissionRequestsDialog; };
            PermissionRequestsGrid.prototype.getIdProperty = function () { return RequestsStatus.PermissionRequestsRow.idProperty; };
            PermissionRequestsGrid.prototype.getInsertPermission = function () { return RequestsStatus.PermissionRequestsRow.insertPermission; };
            PermissionRequestsGrid.prototype.getLocalTextPrefix = function () { return RequestsStatus.PermissionRequestsRow.localTextPrefix; };
            PermissionRequestsGrid.prototype.getService = function () { return RequestsStatus.PermissionRequestsService.baseUrl; };
            PermissionRequestsGrid.prototype.getButtons = function () {
                // call base method to get list of buttons
                // by default, base entity grid adds a few buttons, 
                // add, refresh, column selection in order.
                var buttons = _super.prototype.getButtons.call(this);
                // here is several methods to remove add button
                // only one is enabled, others are commented
                // METHOD 1
                // we would be able to simply return an empty button list,
                // but this would also remove all other buttons
                // return [];
                // METHOD 2
                // remove by splicing (something like delete by index)
                // here we hard code add button index (not nice!)
                // buttons.splice(0, 1);
                // METHOD 3 - recommended
                // remove by splicing, but this time find button index
                // by its css class. it is the best and safer method
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                return buttons;
            };
            PermissionRequestsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PermissionRequestsGrid);
            return PermissionRequestsGrid;
        }(Serenity.EntityGrid));
        RequestsStatus.PermissionRequestsGrid = PermissionRequestsGrid;
    })(RequestsStatus = HRM.RequestsStatus || (HRM.RequestsStatus = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var RequestsStatus;
    (function (RequestsStatus) {
        var PermissionStatusDialog = /** @class */ (function (_super) {
            __extends(PermissionStatusDialog, _super);
            function PermissionStatusDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new RequestsStatus.PermissionStatusForm(_this.idPrefix);
                return _this;
            }
            PermissionStatusDialog.prototype.getFormKey = function () { return RequestsStatus.PermissionStatusForm.formKey; };
            PermissionStatusDialog.prototype.getIdProperty = function () { return RequestsStatus.PermissionStatusRow.idProperty; };
            PermissionStatusDialog.prototype.getLocalTextPrefix = function () { return RequestsStatus.PermissionStatusRow.localTextPrefix; };
            PermissionStatusDialog.prototype.getNameProperty = function () { return RequestsStatus.PermissionStatusRow.nameProperty; };
            PermissionStatusDialog.prototype.getService = function () { return RequestsStatus.PermissionStatusService.baseUrl; };
            PermissionStatusDialog.prototype.getDeletePermission = function () { return RequestsStatus.PermissionStatusRow.deletePermission; };
            PermissionStatusDialog.prototype.getInsertPermission = function () { return RequestsStatus.PermissionStatusRow.insertPermission; };
            PermissionStatusDialog.prototype.getUpdatePermission = function () { return RequestsStatus.PermissionStatusRow.updatePermission; };
            PermissionStatusDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], PermissionStatusDialog);
            return PermissionStatusDialog;
        }(Serenity.EntityDialog));
        RequestsStatus.PermissionStatusDialog = PermissionStatusDialog;
    })(RequestsStatus = HRM.RequestsStatus || (HRM.RequestsStatus = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var RequestsStatus;
    (function (RequestsStatus) {
        var PermissionStatusGrid = /** @class */ (function (_super) {
            __extends(PermissionStatusGrid, _super);
            function PermissionStatusGrid(container) {
                return _super.call(this, container) || this;
            }
            PermissionStatusGrid.prototype.getColumnsKey = function () { return 'RequestsStatus.PermissionStatus'; };
            PermissionStatusGrid.prototype.getDialogType = function () { return RequestsStatus.PermissionStatusDialog; };
            PermissionStatusGrid.prototype.getIdProperty = function () { return RequestsStatus.PermissionStatusRow.idProperty; };
            PermissionStatusGrid.prototype.getInsertPermission = function () { return RequestsStatus.PermissionStatusRow.insertPermission; };
            PermissionStatusGrid.prototype.getLocalTextPrefix = function () { return RequestsStatus.PermissionStatusRow.localTextPrefix; };
            PermissionStatusGrid.prototype.getService = function () { return RequestsStatus.PermissionStatusService.baseUrl; };
            PermissionStatusGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PermissionStatusGrid);
            return PermissionStatusGrid;
        }(Serenity.EntityGrid));
        RequestsStatus.PermissionStatusGrid = PermissionStatusGrid;
    })(RequestsStatus = HRM.RequestsStatus || (HRM.RequestsStatus = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var RequestsStatus;
    (function (RequestsStatus) {
        var VacancyRequestsDialog = /** @class */ (function (_super) {
            __extends(VacancyRequestsDialog, _super);
            function VacancyRequestsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new RequestsStatus.VacancyRequestsForm(_this.idPrefix);
                return _this;
            }
            VacancyRequestsDialog.prototype.getFormKey = function () { return RequestsStatus.VacancyRequestsForm.formKey; };
            VacancyRequestsDialog.prototype.getIdProperty = function () { return RequestsStatus.VacancyRequestsRow.idProperty; };
            VacancyRequestsDialog.prototype.getLocalTextPrefix = function () { return RequestsStatus.VacancyRequestsRow.localTextPrefix; };
            VacancyRequestsDialog.prototype.getService = function () { return RequestsStatus.VacancyRequestsService.baseUrl; };
            VacancyRequestsDialog.prototype.getDeletePermission = function () { return RequestsStatus.VacancyRequestsRow.deletePermission; };
            VacancyRequestsDialog.prototype.getInsertPermission = function () { return RequestsStatus.VacancyRequestsRow.insertPermission; };
            VacancyRequestsDialog.prototype.getUpdatePermission = function () { return RequestsStatus.VacancyRequestsRow.updatePermission; };
            VacancyRequestsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], VacancyRequestsDialog);
            return VacancyRequestsDialog;
        }(Serenity.EntityDialog));
        RequestsStatus.VacancyRequestsDialog = VacancyRequestsDialog;
    })(RequestsStatus = HRM.RequestsStatus || (HRM.RequestsStatus = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var RequestsStatus;
    (function (RequestsStatus) {
        var VacancyRequestsGrid = /** @class */ (function (_super) {
            __extends(VacancyRequestsGrid, _super);
            function VacancyRequestsGrid(container) {
                return _super.call(this, container) || this;
            }
            VacancyRequestsGrid.prototype.getColumnsKey = function () { return 'RequestsStatus.VacancyRequests'; };
            VacancyRequestsGrid.prototype.getDialogType = function () { return RequestsStatus.VacancyRequestsDialog; };
            VacancyRequestsGrid.prototype.getIdProperty = function () { return RequestsStatus.VacancyRequestsRow.idProperty; };
            VacancyRequestsGrid.prototype.getInsertPermission = function () { return RequestsStatus.VacancyRequestsRow.insertPermission; };
            VacancyRequestsGrid.prototype.getLocalTextPrefix = function () { return RequestsStatus.VacancyRequestsRow.localTextPrefix; };
            VacancyRequestsGrid.prototype.getService = function () { return RequestsStatus.VacancyRequestsService.baseUrl; };
            /**
             * This method is called to get list of buttons to be created.
             */
            VacancyRequestsGrid.prototype.getButtons = function () {
                // call base method to get list of buttons
                // by default, base entity grid adds a few buttons, 
                // add, refresh, column selection in order.
                var buttons = _super.prototype.getButtons.call(this);
                // here is several methods to remove add button
                // only one is enabled, others are commented
                // METHOD 1
                // we would be able to simply return an empty button list,
                // but this would also remove all other buttons
                // return [];
                // METHOD 2
                // remove by splicing (something like delete by index)
                // here we hard code add button index (not nice!)
                // buttons.splice(0, 1);
                // METHOD 3 - recommended
                // remove by splicing, but this time find button index
                // by its css class. it is the best and safer method
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                return buttons;
            };
            VacancyRequestsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], VacancyRequestsGrid);
            return VacancyRequestsGrid;
        }(Serenity.EntityGrid));
        RequestsStatus.VacancyRequestsGrid = VacancyRequestsGrid;
    })(RequestsStatus = HRM.RequestsStatus || (HRM.RequestsStatus = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var SalaryDetails;
    (function (SalaryDetails) {
        var DeductionsDialog = /** @class */ (function (_super) {
            __extends(DeductionsDialog, _super);
            function DeductionsDialog(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new SalaryDetails.DeductionsForm(_this.idPrefix);
                _this.form.DeductionsDate.element.datepicker('option', 'minDate', '-0m');
                return _this;
            }
            DeductionsDialog.prototype.getFormKey = function () { return SalaryDetails.DeductionsForm.formKey; };
            DeductionsDialog.prototype.getIdProperty = function () { return SalaryDetails.DeductionsRow.idProperty; };
            DeductionsDialog.prototype.getLocalTextPrefix = function () { return SalaryDetails.DeductionsRow.localTextPrefix; };
            DeductionsDialog.prototype.getNameProperty = function () { return SalaryDetails.DeductionsRow.nameProperty; };
            DeductionsDialog.prototype.getService = function () { return SalaryDetails.DeductionsService.baseUrl; };
            DeductionsDialog.prototype.getDeletePermission = function () { return SalaryDetails.DeductionsRow.deletePermission; };
            DeductionsDialog.prototype.getInsertPermission = function () { return SalaryDetails.DeductionsRow.insertPermission; };
            DeductionsDialog.prototype.getUpdatePermission = function () { return SalaryDetails.DeductionsRow.updatePermission; };
            DeductionsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], DeductionsDialog);
            return DeductionsDialog;
        }(Serenity.EntityDialog));
        SalaryDetails.DeductionsDialog = DeductionsDialog;
    })(SalaryDetails = HRM.SalaryDetails || (HRM.SalaryDetails = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var SalaryDetails;
    (function (SalaryDetails) {
        var DeductionsGrid = /** @class */ (function (_super) {
            __extends(DeductionsGrid, _super);
            function DeductionsGrid(container) {
                return _super.call(this, container) || this;
            }
            DeductionsGrid.prototype.getColumnsKey = function () { return 'SalaryDetails.Deductions'; };
            DeductionsGrid.prototype.getDialogType = function () { return SalaryDetails.DeductionsDialog; };
            DeductionsGrid.prototype.getIdProperty = function () { return SalaryDetails.DeductionsRow.idProperty; };
            DeductionsGrid.prototype.getInsertPermission = function () { return SalaryDetails.DeductionsRow.insertPermission; };
            DeductionsGrid.prototype.getLocalTextPrefix = function () { return SalaryDetails.DeductionsRow.localTextPrefix; };
            DeductionsGrid.prototype.getService = function () { return SalaryDetails.DeductionsService.baseUrl; };
            DeductionsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], DeductionsGrid);
            return DeductionsGrid;
        }(Serenity.EntityGrid));
        SalaryDetails.DeductionsGrid = DeductionsGrid;
    })(SalaryDetails = HRM.SalaryDetails || (HRM.SalaryDetails = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var SalaryDetails;
    (function (SalaryDetails) {
        var EmpLoansDialog = /** @class */ (function (_super) {
            __extends(EmpLoansDialog, _super);
            function EmpLoansDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new SalaryDetails.EmpLoansForm(_this.idPrefix);
                return _this;
            }
            EmpLoansDialog.prototype.getFormKey = function () { return SalaryDetails.EmpLoansForm.formKey; };
            EmpLoansDialog.prototype.getIdProperty = function () { return SalaryDetails.EmpLoansRow.idProperty; };
            EmpLoansDialog.prototype.getLocalTextPrefix = function () { return SalaryDetails.EmpLoansRow.localTextPrefix; };
            EmpLoansDialog.prototype.getNameProperty = function () { return SalaryDetails.EmpLoansRow.nameProperty; };
            EmpLoansDialog.prototype.getService = function () { return SalaryDetails.EmpLoansService.baseUrl; };
            EmpLoansDialog.prototype.getDeletePermission = function () { return SalaryDetails.EmpLoansRow.deletePermission; };
            EmpLoansDialog.prototype.getInsertPermission = function () { return SalaryDetails.EmpLoansRow.insertPermission; };
            EmpLoansDialog.prototype.getUpdatePermission = function () { return SalaryDetails.EmpLoansRow.updatePermission; };
            EmpLoansDialog.prototype.getToolbarButtons = function () {
                var b = _super.prototype.getToolbarButtons.call(this);
                b.splice(Q.indexOf(b, function (x) { return x.cssClass == "apply-changes-button"; }), 1);
                return b;
            };
            EmpLoansDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], EmpLoansDialog);
            return EmpLoansDialog;
        }(Serenity.EntityDialog));
        SalaryDetails.EmpLoansDialog = EmpLoansDialog;
    })(SalaryDetails = HRM.SalaryDetails || (HRM.SalaryDetails = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var SalaryDetails;
    (function (SalaryDetails) {
        var EmpLoansGrid = /** @class */ (function (_super) {
            __extends(EmpLoansGrid, _super);
            function EmpLoansGrid(container) {
                return _super.call(this, container) || this;
            }
            EmpLoansGrid.prototype.getColumnsKey = function () { return 'SalaryDetails.EmpLoans'; };
            EmpLoansGrid.prototype.getDialogType = function () { return SalaryDetails.EmpLoansDialog; };
            EmpLoansGrid.prototype.getIdProperty = function () { return SalaryDetails.EmpLoansRow.idProperty; };
            EmpLoansGrid.prototype.getInsertPermission = function () { return SalaryDetails.EmpLoansRow.insertPermission; };
            EmpLoansGrid.prototype.getLocalTextPrefix = function () { return SalaryDetails.EmpLoansRow.localTextPrefix; };
            EmpLoansGrid.prototype.getService = function () { return SalaryDetails.EmpLoansService.baseUrl; };
            EmpLoansGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], EmpLoansGrid);
            return EmpLoansGrid;
        }(Serenity.EntityGrid));
        SalaryDetails.EmpLoansGrid = EmpLoansGrid;
    })(SalaryDetails = HRM.SalaryDetails || (HRM.SalaryDetails = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var SalaryDetails;
    (function (SalaryDetails) {
        var EntitlementsDialog = /** @class */ (function (_super) {
            __extends(EntitlementsDialog, _super);
            function EntitlementsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new SalaryDetails.EntitlementsForm(_this.idPrefix);
                return _this;
            }
            EntitlementsDialog.prototype.getFormKey = function () { return SalaryDetails.EntitlementsForm.formKey; };
            EntitlementsDialog.prototype.getIdProperty = function () { return SalaryDetails.EntitlementsRow.idProperty; };
            EntitlementsDialog.prototype.getLocalTextPrefix = function () { return SalaryDetails.EntitlementsRow.localTextPrefix; };
            EntitlementsDialog.prototype.getNameProperty = function () { return SalaryDetails.EntitlementsRow.nameProperty; };
            EntitlementsDialog.prototype.getService = function () { return SalaryDetails.EntitlementsService.baseUrl; };
            EntitlementsDialog.prototype.getDeletePermission = function () { return SalaryDetails.EntitlementsRow.deletePermission; };
            EntitlementsDialog.prototype.getInsertPermission = function () { return SalaryDetails.EntitlementsRow.insertPermission; };
            EntitlementsDialog.prototype.getUpdatePermission = function () { return SalaryDetails.EntitlementsRow.updatePermission; };
            EntitlementsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], EntitlementsDialog);
            return EntitlementsDialog;
        }(Serenity.EntityDialog));
        SalaryDetails.EntitlementsDialog = EntitlementsDialog;
    })(SalaryDetails = HRM.SalaryDetails || (HRM.SalaryDetails = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var SalaryDetails;
    (function (SalaryDetails) {
        var EntitlementsGrid = /** @class */ (function (_super) {
            __extends(EntitlementsGrid, _super);
            function EntitlementsGrid(container) {
                return _super.call(this, container) || this;
            }
            EntitlementsGrid.prototype.getColumnsKey = function () { return 'SalaryDetails.Entitlements'; };
            EntitlementsGrid.prototype.getDialogType = function () { return SalaryDetails.EntitlementsDialog; };
            EntitlementsGrid.prototype.getIdProperty = function () { return SalaryDetails.EntitlementsRow.idProperty; };
            EntitlementsGrid.prototype.getInsertPermission = function () { return SalaryDetails.EntitlementsRow.insertPermission; };
            EntitlementsGrid.prototype.getLocalTextPrefix = function () { return SalaryDetails.EntitlementsRow.localTextPrefix; };
            EntitlementsGrid.prototype.getService = function () { return SalaryDetails.EntitlementsService.baseUrl; };
            EntitlementsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], EntitlementsGrid);
            return EntitlementsGrid;
        }(Serenity.EntityGrid));
        SalaryDetails.EntitlementsGrid = EntitlementsGrid;
    })(SalaryDetails = HRM.SalaryDetails || (HRM.SalaryDetails = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var SalaryDetails;
    (function (SalaryDetails) {
        var InstallmentsDialog = /** @class */ (function (_super) {
            __extends(InstallmentsDialog, _super);
            function InstallmentsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new SalaryDetails.InstallmentsForm(_this.idPrefix);
                return _this;
            }
            InstallmentsDialog.prototype.getFormKey = function () { return SalaryDetails.InstallmentsForm.formKey; };
            InstallmentsDialog.prototype.getIdProperty = function () { return SalaryDetails.InstallmentsRow.idProperty; };
            InstallmentsDialog.prototype.getLocalTextPrefix = function () { return SalaryDetails.InstallmentsRow.localTextPrefix; };
            InstallmentsDialog.prototype.getService = function () { return SalaryDetails.InstallmentsService.baseUrl; };
            InstallmentsDialog.prototype.getDeletePermission = function () { return SalaryDetails.InstallmentsRow.deletePermission; };
            InstallmentsDialog.prototype.getInsertPermission = function () { return SalaryDetails.InstallmentsRow.insertPermission; };
            InstallmentsDialog.prototype.getUpdatePermission = function () { return SalaryDetails.InstallmentsRow.updatePermission; };
            InstallmentsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], InstallmentsDialog);
            return InstallmentsDialog;
        }(Serenity.EntityDialog));
        SalaryDetails.InstallmentsDialog = InstallmentsDialog;
    })(SalaryDetails = HRM.SalaryDetails || (HRM.SalaryDetails = {}));
})(HRM || (HRM = {}));
/// <reference path="../../common/helpers/grideditorbase.ts" />
var HRM;
(function (HRM) {
    var SalaryDetails;
    (function (SalaryDetails) {
        var InstallmentsEditor = /** @class */ (function (_super) {
            __extends(InstallmentsEditor, _super);
            function InstallmentsEditor(container) {
                return _super.call(this, container) || this;
            }
            InstallmentsEditor.prototype.getColumnsKey = function () { return "SalaryDetails.Installments"; };
            InstallmentsEditor.prototype.getDialogType = function () { return SalaryDetails.InstallmentsDialog; };
            InstallmentsEditor.prototype.getLocalTextPrefix = function () { return SalaryDetails.InstallmentsRow.localTextPrefix; };
            InstallmentsEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], InstallmentsEditor);
            return InstallmentsEditor;
        }(HRM.Common.GridEditorBase));
        SalaryDetails.InstallmentsEditor = InstallmentsEditor;
    })(SalaryDetails = HRM.SalaryDetails || (HRM.SalaryDetails = {}));
})(HRM || (HRM = {}));
/// <reference path="../../common/helpers/grideditorbase.ts" />
var HRM;
(function (HRM) {
    var SalaryDetails;
    (function (SalaryDetails) {
        var InstallmentsEditors = /** @class */ (function (_super) {
            __extends(InstallmentsEditors, _super);
            function InstallmentsEditors(container) {
                return _super.call(this, container) || this;
            }
            InstallmentsEditors.prototype.getColumnsKey = function () { return "SalaryDetails.Installments"; };
            InstallmentsEditors.prototype.getDialogType = function () { return SalaryDetails.SubInstallmentsDialog; };
            //protected getIdProperty() { return AllowancesRow.idProperty; }
            InstallmentsEditors.prototype.getLocalTextPrefix = function () { return SalaryDetails.InstallmentsRow.localTextPrefix; };
            InstallmentsEditors = __decorate([
                Serenity.Decorators.registerClass()
            ], InstallmentsEditors);
            return InstallmentsEditors;
        }(HRM.Common.GridEditorBase));
        SalaryDetails.InstallmentsEditors = InstallmentsEditors;
    })(SalaryDetails = HRM.SalaryDetails || (HRM.SalaryDetails = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var SalaryDetails;
    (function (SalaryDetails) {
        var InstallmentsGrid = /** @class */ (function (_super) {
            __extends(InstallmentsGrid, _super);
            function InstallmentsGrid(container) {
                return _super.call(this, container) || this;
            }
            InstallmentsGrid.prototype.getColumnsKey = function () { return 'SalaryDetails.Installments'; };
            InstallmentsGrid.prototype.getDialogType = function () { return SalaryDetails.InstallmentsDialog; };
            InstallmentsGrid.prototype.getIdProperty = function () { return SalaryDetails.InstallmentsRow.idProperty; };
            InstallmentsGrid.prototype.getInsertPermission = function () { return SalaryDetails.InstallmentsRow.insertPermission; };
            InstallmentsGrid.prototype.getLocalTextPrefix = function () { return SalaryDetails.InstallmentsRow.localTextPrefix; };
            InstallmentsGrid.prototype.getService = function () { return SalaryDetails.InstallmentsService.baseUrl; };
            InstallmentsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], InstallmentsGrid);
            return InstallmentsGrid;
        }(Serenity.EntityGrid));
        SalaryDetails.InstallmentsGrid = InstallmentsGrid;
    })(SalaryDetails = HRM.SalaryDetails || (HRM.SalaryDetails = {}));
})(HRM || (HRM = {}));
/// <reference path="../../common/helpers/grideditorbase.ts" />
///// <reference path="../../common/helpers/grideditorbase.ts" />
var HRM;
(function (HRM) {
    var SalaryDetails;
    (function (SalaryDetails) {
        var SubInstallmentsDialog = /** @class */ (function (_super) {
            __extends(SubInstallmentsDialog, _super);
            function SubInstallmentsDialog() {
                var _this = _super.call(this) || this;
                _this.form = new SalaryDetails.InstallmentsForm(_this.idPrefix);
                return _this;
            }
            SubInstallmentsDialog.prototype.getFormKey = function () { return SalaryDetails.InstallmentsForm.formKey; };
            SubInstallmentsDialog.prototype.getLocalTextPrefix = function () { return SalaryDetails.InstallmentsRow.localTextPrefix; };
            SubInstallmentsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], SubInstallmentsDialog);
            return SubInstallmentsDialog;
        }(HRM.Common.GridEditorDialog));
        SalaryDetails.SubInstallmentsDialog = SubInstallmentsDialog;
    })(SalaryDetails = HRM.SalaryDetails || (HRM.SalaryDetails = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var SalaryDetails;
    (function (SalaryDetails) {
        var PremiumsDialog = /** @class */ (function (_super) {
            __extends(PremiumsDialog, _super);
            function PremiumsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new SalaryDetails.PremiumsForm(_this.idPrefix);
                return _this;
            }
            PremiumsDialog.prototype.getFormKey = function () { return SalaryDetails.PremiumsForm.formKey; };
            PremiumsDialog.prototype.getIdProperty = function () { return SalaryDetails.PremiumsRow.idProperty; };
            PremiumsDialog.prototype.getLocalTextPrefix = function () { return SalaryDetails.PremiumsRow.localTextPrefix; };
            PremiumsDialog.prototype.getService = function () { return SalaryDetails.PremiumsService.baseUrl; };
            PremiumsDialog.prototype.getDeletePermission = function () { return SalaryDetails.PremiumsRow.deletePermission; };
            PremiumsDialog.prototype.getInsertPermission = function () { return SalaryDetails.PremiumsRow.insertPermission; };
            PremiumsDialog.prototype.getUpdatePermission = function () { return SalaryDetails.PremiumsRow.updatePermission; };
            PremiumsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], PremiumsDialog);
            return PremiumsDialog;
        }(Serenity.EntityDialog));
        SalaryDetails.PremiumsDialog = PremiumsDialog;
    })(SalaryDetails = HRM.SalaryDetails || (HRM.SalaryDetails = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var SalaryDetails;
    (function (SalaryDetails) {
        var PremiumsGrid = /** @class */ (function (_super) {
            __extends(PremiumsGrid, _super);
            function PremiumsGrid(container) {
                return _super.call(this, container) || this;
            }
            PremiumsGrid.prototype.getColumnsKey = function () { return 'SalaryDetails.Premiums'; };
            PremiumsGrid.prototype.getDialogType = function () { return SalaryDetails.PremiumsDialog; };
            PremiumsGrid.prototype.getIdProperty = function () { return SalaryDetails.PremiumsRow.idProperty; };
            PremiumsGrid.prototype.getInsertPermission = function () { return SalaryDetails.PremiumsRow.insertPermission; };
            PremiumsGrid.prototype.getLocalTextPrefix = function () { return SalaryDetails.PremiumsRow.localTextPrefix; };
            PremiumsGrid.prototype.getService = function () { return SalaryDetails.PremiumsService.baseUrl; };
            PremiumsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PremiumsGrid);
            return PremiumsGrid;
        }(Serenity.EntityGrid));
        SalaryDetails.PremiumsGrid = PremiumsGrid;
    })(SalaryDetails = HRM.SalaryDetails || (HRM.SalaryDetails = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var SalaryDetails;
    (function (SalaryDetails) {
        var PremiumstypeDialog = /** @class */ (function (_super) {
            __extends(PremiumstypeDialog, _super);
            function PremiumstypeDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new SalaryDetails.PremiumstypeForm(_this.idPrefix);
                return _this;
            }
            PremiumstypeDialog.prototype.getFormKey = function () { return SalaryDetails.PremiumstypeForm.formKey; };
            PremiumstypeDialog.prototype.getIdProperty = function () { return SalaryDetails.PremiumstypeRow.idProperty; };
            PremiumstypeDialog.prototype.getLocalTextPrefix = function () { return SalaryDetails.PremiumstypeRow.localTextPrefix; };
            PremiumstypeDialog.prototype.getNameProperty = function () { return SalaryDetails.PremiumstypeRow.nameProperty; };
            PremiumstypeDialog.prototype.getService = function () { return SalaryDetails.PremiumstypeService.baseUrl; };
            PremiumstypeDialog.prototype.getDeletePermission = function () { return SalaryDetails.PremiumstypeRow.deletePermission; };
            PremiumstypeDialog.prototype.getInsertPermission = function () { return SalaryDetails.PremiumstypeRow.insertPermission; };
            PremiumstypeDialog.prototype.getUpdatePermission = function () { return SalaryDetails.PremiumstypeRow.updatePermission; };
            PremiumstypeDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], PremiumstypeDialog);
            return PremiumstypeDialog;
        }(Serenity.EntityDialog));
        SalaryDetails.PremiumstypeDialog = PremiumstypeDialog;
    })(SalaryDetails = HRM.SalaryDetails || (HRM.SalaryDetails = {}));
})(HRM || (HRM = {}));
var HRM;
(function (HRM) {
    var SalaryDetails;
    (function (SalaryDetails) {
        var PremiumstypeGrid = /** @class */ (function (_super) {
            __extends(PremiumstypeGrid, _super);
            function PremiumstypeGrid(container) {
                return _super.call(this, container) || this;
            }
            PremiumstypeGrid.prototype.getColumnsKey = function () { return 'SalaryDetails.Premiumstype'; };
            PremiumstypeGrid.prototype.getDialogType = function () { return SalaryDetails.PremiumstypeDialog; };
            PremiumstypeGrid.prototype.getIdProperty = function () { return SalaryDetails.PremiumstypeRow.idProperty; };
            PremiumstypeGrid.prototype.getInsertPermission = function () { return SalaryDetails.PremiumstypeRow.insertPermission; };
            PremiumstypeGrid.prototype.getLocalTextPrefix = function () { return SalaryDetails.PremiumstypeRow.localTextPrefix; };
            PremiumstypeGrid.prototype.getService = function () { return SalaryDetails.PremiumstypeService.baseUrl; };
            PremiumstypeGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PremiumstypeGrid);
            return PremiumstypeGrid;
        }(Serenity.EntityGrid));
        SalaryDetails.PremiumstypeGrid = PremiumstypeGrid;
    })(SalaryDetails = HRM.SalaryDetails || (HRM.SalaryDetails = {}));
})(HRM || (HRM = {}));
//# sourceMappingURL=HRM.Web.js.map