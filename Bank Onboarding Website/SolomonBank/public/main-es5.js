(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/SSN/SSN.component.html": 
        /*!******************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/SSN/SSN.component.html ***!
          \******************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid content-holder\">\r\n  <div class=\"main-content row d-flex\">\r\n    <div class=\"col-md-3 hidden-sm hidden-xs side_outer\">\r\n      <div style=\"    padding: 20% 10% 20% 13%;\">\r\n        <div>\r\n          <img src=\"./assets/images/SSN-icon.png\" style=\"width:90px;\" alt=\"\">\r\n        </div>\r\n        <div class=\"sidepanel_text\">\r\n          <label for=\"\">SSN</label>\r\n          <br>\r\n          <label style=\"color: #f37021;\" for=\"\">Verification</label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-9  col-sm-12  col-xs-12\">\r\n      <div class=\"col-md-12 forcedPadding\">\r\n        <app-nav></app-nav>\r\n    </div>\r\n      <form id=\"formSSN\" novalidate [formGroup]=\"myForm\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"mainContent row \">\r\n            <div class=\"col-md-12 space-left-0\">\r\n              <label class=\"au_orange auLabel col-md-12\" for=\"\">SSN</label>\r\n            </div>\r\n            <div class=\"col-md-12 inputSection  space-left-0\">\r\n              <div class=\"col-md-6\">\r\n\r\n                <span class=\"group\">\r\n\r\n                  <input type=\"tel\" formControlName=\"SSN_number\" [(ngModel)]=\"SSNValue\" OnlyNumber=\"true\"\r\n                    #SSN appAutofocus [autofocus]=\"true\" (ngModelChange)=\"getOtpSSN(SSN,'SSN')\"\r\n                    class=\"inputBox\" placeholder=\"Enter SSN\"\r\n                    maxlength=\"14\" [readonly]=\"isReadOnly\">\r\n                  <span class=\"bar\"></span>\r\n                  <!-- (keydown)='space(SSN,4)' (keyup)='space(SSN,4)' -->\r\n                </span>\r\n              </div>\r\n              <div class=\"col-md-6\" *ngIf=\"myForm.controls['SSN_number'].errors &&  (myForm.controls['SSN_number'].dirty || myForm.controls['SSN_number'].touched)\">\r\n                <div class=\"error_color error_block\" *ngIf=\"myForm.controls['SSN_number'].errors.required \">\r\n                  <span>\r\n\r\n                  </span> {{SSNErrObj.required}}\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-6 space-right-0 pad-left-0\" *ngIf=\"SSNBridgeFailure\">\r\n                <span class=\"float-left\">\r\n\r\n                </span>\r\n                <span class=\"error_color error_block float-left txt-indent\">\r\n                  {{SSNErrObj.failure}}\r\n                </span>\r\n              </div>\r\n              <div class=\"col-md-12 helpingSection helpingSection-ui-fix-SSN\" style=\"margin: 1% 0;\">\r\n                <label class=\"\" for=\"\">{{SSNObj}}</label>\r\n              </div>\r\n            </div>\r\n            <!-- By adity starts here -->\r\n            <div *ngIf=\"otp_loader\" class=\"mobile_loader\" style=\"\">\r\n              <div>\r\n                <img width=\"160px;\" src=\"./assets/images/test.gif\" alt=\"\">\r\n              </div>\r\n              <div style=\"    font-family: Nunito-Regular;     font-size: 20px;\">\r\n                <span>{{mobile_loader_msg}}</span>\r\n                <br>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div [ngClass]=\"{ hideOtp:!otp_show, 'showOtp':otp_show }\" class=\"col-md-12\" style=\"margin-top: 1%;\"\r\n            class=\"mainContent row \">\r\n            <div class=\"col-md-12\">\r\n              <label class=\"au_orange auLabel col-md-12\" for=\"\">One Time Password (OTP)</label>\r\n            </div>\r\n            <div class=\"col-md-12 inputSection\">\r\n              <div class=\"col-md-6\">\r\n                <span class=\"group\">\r\n                  <input type=\"tel\" [(ngModel)]=\"verify_otp\" #otp formControlName=\"SSN_otp\" autofocus OnlyNumber=\"true\"\r\n                    class=\"inputBox\" placeholder=\"Enter 6-digit OTP\" minlength=\"6\" maxlength=\"6\" required>\r\n                  <span class=\"bar\"></span>\r\n                </span>\r\n              </div>\r\n              <div class=\"col-md-6 pos-error\" *ngIf=\"myForm.controls['SSN_otp'].errors &&  (myForm.controls['SSN_otp'].dirty || myForm.controls['SSN_otp'].touched)\">\r\n                <div class=\"error_color otp_error col-md-12 space-left-0\" *ngIf=\"myForm.controls['SSN_otp'].errors.required\">\r\n\r\n                  <!-- <span class=\"error_text\">{{otp_required_msg}}</span> -->\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-12 label-styling\" style=\"padding-top:5px;\">\r\n                <div class=\"col-md-6 helpingSection mobile-alignment-uifix\" style=\"padding-left:0;\">\r\n                  <span style=\"text-align: left;\">\r\n                    {{otp_bottom_msg}}\r\n                  </span><br>\r\n                  <span style=\"text-align: left;\">\r\n                    {{otp_bottom_msgEmail}}\r\n                  </span>\r\n                  <span *ngIf=\"!resend_display\" style=\"float: right;width: 30px;\" class=\"pos-realtive\">\r\n                    00:{{countDown | async}}\r\n                  </span>\r\n                  <!--Akansha-->\r\n                  <span >\r\n                    <img src=\"./assets/images/page4.png\" alt=\"loading...\" class=\"pos-realtive\" style=\"margin-right:5px; float:right;position:relative;\">\r\n                  </span>\r\n                  <span style=\"float: right;\" class=\"pos-realtive\">\r\n                    <span class=\"resend\" href=\"\" (click)=\"getOtpSSN(SSN,'resend_button')\"> Resend OTP</span>\r\n                  </span>\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- Submit Ends here -->\r\n          </div>\r\n          <div>\r\n            <!-- Check box Starts here -->\r\n            <div class=\"col-md-10 inputSection space-left-0 space-left-0-media margin-left-style\" >\r\n              <div class=\"\">\r\n                <div class=\"col-md-12 col-xs-12 col-sm-12 \">\r\n\r\n                  <label style=\"font-size: 12px;\" class=\"container-checbox\">\r\n                    <input type=\"checkbox\" #checkbox formControlName=\"nominee_no_checkbox\" id=\"chek\" required>\r\n                    <span class=\"checkmark\"></span>\r\n                    <label for=\"chek\" class=\"chek-label label-styling-title\">I consent Solomon Bank to do my\r\n                      eKYC.</label>\r\n                  </label>\r\n                </div>\r\n\r\n              </div>\r\n            </div>\r\n            <!-- Check box Ends here -->\r\n            <!-- Submit Starts here -->\r\n            <div class=\"col-md-12\" >\r\n              <div style=\"\" class=\"button-align space-left-0\">\r\n                <input type=\"button\" [ngClass]=\"{ disabledBtn:!myForm.valid, 'activeBtn':myForm.valid }\" value=\"NEXT\"\r\n                  (click)=\"validateOtp()\" [disabled]=\"!myForm.valid\" class=\"SSNBtn\">\r\n              </div>\r\n            </div>\r\n            <!-- Submit Ends here -->\r\n          </div>\r\n\r\n        </div>\r\n      </form>\r\n\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/account-summary/account-summary.component.html": 
        /*!******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account-summary/account-summary.component.html ***!
          \******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-div-account\"\r\n    style=\"position: absolute;width:  100%;height: -webkit-calc(100% - 130px);height: calc(100% - 130px);top: 65px;\">\r\n    <div class=\"col-md-3 hidden-sm hidden-xs side_outer\" style=\"position:  absolute;height: 100%;\">\r\n        <div style=\"padding: 20% 10% 20% 13%;\">\r\n            <div>\r\n                <img src=\"./assets/images/accountSumary.png\" style=\"width:90px;\" alt=\"\">\r\n            </div>\r\n            <div class=\"sidepanel_text\">\r\n                <label for=\"\">Account</label><br>\r\n                <label style=\"color: #f37021;\" for=\"\">Summary</label>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-9 margin-pad-0 account-main-div\"\r\n        style=\"height:100%;right:0;overflow-x:hidden;overflow-y:auto;position:absolute;\">\r\n        <div class=\"col-md-12 hidden-sm hidden-xs forcedPadding\">\r\n            <app-nav></app-nav>\r\n        </div>\r\n        <div class=\"mainContent row mainContent-acnt-cstm margin-pad-0\" style=\"\r\n        position: absolute;\r\n        z-index: 10000;\r\n    \">\r\n            <form id=\"accountSummaryDetails\" novalidate [formGroup]=\"accountSummaryDetails\"\r\n                class=\"accountSummaryDetails-cstm\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"row rectangle-3\" style=\"\r\n                    position: relative;\r\n                    top: 26px;\r\n                    left: -50px;\r\n                \">>\r\n                        <div class=\"col-md-6\">\r\n                            <div style=\"position:relative; width: 80%; left: 250px\" class=\"card\">\r\n                                <img src=\"./assets/images/credit-card-template_v2.1.png\" alt=\"loading...\"\r\n                                    class=\"debitCard\" style=\"\r\n                                height: 200px;\r\n                            \">\r\n                                <img style=\"cursor: pointer\" title=\"Copy Details\" src=\"./assets/images/copy-card-no.png\"\r\n                                    alt=\"loading...\" (click)=\"copyToClipborad()\" class=\"copy\">\r\n                            </div>\r\n                            <div style=\"position:absolute\" class=\"details\">\r\n                                <!-- <label>\r\n                                    <input type=\"text\" disabled \r\n                                    formControlName = \"cardHolderName\"\r\n                                    name=\"cardHolderName\"\r\n                                    class=\"cardDetailsInput\" style=\"visibility: hidden !important;\"><br>\r\n                                    \r\n                                    <input type=\"text\" disabled \r\n                                    formControlName = \"cardNum\"\r\n                                    name=\"cardNum\"\r\n                                    class=\"cardDetailsInput\" style=\"font-family: OCRAStd;font-weight: normal;\"><br>\r\n                                   \r\n                                </label> -->\r\n                                <!-- <label>\r\n                                        <span class=\"expires\">EXPIRES</span><br>\r\n                                       \r\n                                        <input type=\"text\" disabled \r\n                                        formControlName = \"expires\"\r\n                                        name=\"expires\"\r\n                                        class=\"e_date cardDetailsInput\">\r\n                                </label>\r\n                                <label>\r\n                                        <span class=\"cvv\">CVV</span><br>\r\n                                      \r\n                                        <input type=\"text\" disabled \r\n                                        formControlName = \"cvv\" \r\n                                        name=\"cvv\"\r\n                                        class=\"cvv_no cardDetailsInput\"><br>\r\n                                </label> -->\r\n                                <!-- <label class=\"card_display_name\">\r\n                                         <input type=\"text\" disabled \r\n                                    formControlName = \"cardHolderName\"\r\n                                    name=\"cardHolderName\"\r\n                                    class=\"cardDetailsInput\"><br>\r\n                                </label> -->\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6 option\" style=\"position:relative\">\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <!-- <div class=\"col-md-12\">\r\n                    <p class=\"crn family-book noteAccountSummary\">{{NoteAccountDetails}}</p>\r\n                </div> -->\r\n\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"col-md-6\">\r\n                        <label class=\"crn family-book\">Wire Transaction ID</label><br>\r\n                        <span class=\"group\">\r\n                            <input type=\"text\" [(ngModel)]=\"user.wireTransactionID\" formControlName=\"wireTransactionID\"\r\n                                name=\"wireTransactionID\" class=\"inputBox\">\r\n                            <span class=\"bar\"></span>\r\n                        </span><br>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <label class=\"account_no family-book\">Account Number</label><br>\r\n                        <span class=\"group\">\r\n                            <input type=\"text\" [disabled]=\"true\" [(ngModel)]=\"user.accountNumber\"\r\n                                formControlName=\"accountNumber\" name=\"accountNumber\" class=\"inputBox\">\r\n                            <span class=\"bar\"></span>\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"col-md-6\">\r\n                        <label class=\"ifsc family-book\">ACH Routing Number</label><br>\r\n                        <span class=\"group\">\r\n                            <input type=\"text\" [(ngModel)]=\"user.routingNumber\" formControlName=\"routingNumber\"\r\n                                name=\"routingNumber\" class=\"inputBox\">\r\n                            <span class=\"bar\"></span>\r\n                        </span>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <label class=\"branch family-book\">Card Number</label><br>\r\n                        <span class=\"group\">\r\n                            <input type=\"text\" [(ngModel)]=\"user.cardNumber\" formControlName=\"cardNumber\"\r\n                                name=\"cardNumber\" class=\"inputBox\">\r\n                            <span class=\"bar\"></span>\r\n                        </span>\r\n\r\n                    </div>\r\n\r\n                    <label *ngIf=\"hasBiometricDone\">Biometric KYC Completed</label>\r\n                    <label *ngIf=\"!hasBiometricDone\">Biometric KYC Pending</label>\r\n                </div>\r\n                <!--  <div class=\"col-md-12\" id=\"DBTshow\" *ngIf=\"showDbt\">-->\r\n                <!-- <div class=\"col-md-12\" id=\"DBTshow\">\r\n                    <div class=\"col-md-12\">\r\n                        <label class=\"dbt family-book\">DBT Benefits</label><br>\r\n\r\n                    </div>\r\n                    <div class=\"col-md-12\">\r\n\r\n                        <div style=\"  padding-left: 0;\" class=\"col-md-12 yes radio-ui-fix_dbt\">\r\n                            <input id=\"Yes1\" [checked]=\"this.accountSummaryDetails.controls['dbtRequirement'].value === 'true'\" type=\"radio\" value=\"true\" formControlName=\"dbtRequirement\"> <label for=\"Yes1\" class=\"label-styling-title-perspnal label_mobile_res\">{{Seeding_DBT_RB_001}}</label>\r\n                        </div>\r\n                        <div style=\"  padding-left: 0;\" class=\"col-md-12 no radio-ui-fix_dbt\">\r\n                            <input id=\"Yes2\" [checked]=\"this.accountSummaryDetails.controls['dbtRequirement'].value === 'false'\" type=\"radio\" value=\"false\" formControlName=\"dbtRequirement\"> <label for=\"Yes2\" class=\"label-styling-title-perspnal label_mobile_res\">{{Seeding_DBT_RB_002}}</label>\r\n                        </div>\r\n                    </div>\r\n                </div>-->\r\n                <div *ngIf=\"!hasAccount\" class=\"col-md-12\">\r\n                    <div class=\"col-md-3 button_aligned_mobile\" style=\"padding-top: 6%\">\r\n                        <input type=\"button\" class=\"col-md-7 cancel_btn\" (click)=\"DataSync()\" style=\"padding: 5% 0%\"\r\n                            value=\"NEXT\">\r\n                    </div>\r\n                </div>\r\n                <div *ngIf=\"hasAccount\" class=\"col-md-12\">\r\n                    <div class=\"col-md-3 button_aligned_mobile\" style=\"padding-top: 6%\">\r\n                        <input type=\"button\" class=\"col-md-7 deactivate_btn\" (click)=\"deactivateAccount()\" style=\"padding: 5% 0%\"\r\n                            value=\"DEACTIVATE ACCOUNT\">\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n<!-- popup for DBT  -->\r\n<!--\r\n<div *ngIf=\"dbt_popup_display\" class=\"uploadOverlay\" id=\"upload\">\r\n    <div class=\"col-md-8 uploadContainer\">\r\n        <div class=\"header\">\r\n            <div class=\"col-md-3 col-sm-6 col-xs-6\">\r\n                <label class=\"header_label\" for=\"\">CRN</label>\r\n                <br>\r\n                <span class=\"font_fam\">{{crnNumber_dbtform}}</span>\r\n            </div>\r\n            <div class=\"col-md-3 col-sm-6 col-xs-6\">\r\n                <label class=\"header_label\" for=\"\">Account Number</label>\r\n                <br>\r\n                <span class=\"font_fam\">{{accountNo_dbtform}}</span>\r\n            </div>\r\n            <div class=\"col-md-3 col-sm-6 col-xs-6\">\r\n                <label class=\"header_label\" for=\"\">SSN Number</label>\r\n                <br>\r\n                <span class=\"font_fam\">{{SSNNumber_dbtform}}</span>\r\n            </div>\r\n            <div class=\"col-md-3 col-sm-6 col-xs-6\">\r\n                <label class=\"header_label\" for=\"\">Mobile Number</label>\r\n                <br>\r\n                <span class=\"font_fam\">{{mobileNo_dtbform}}</span>\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"body\">\r\n            <form novalidate [formGroup]=\"DBTForm\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"col-md-12 yes pad_radio radio radio-ui-fix_dbt\">\r\n                        <input id=\"Yes3\" type=\"radio\" value=\"radio1\" formControlName=\"dbtRequirement_Tab\">\r\n                        <label for=\"Yes3\" class=\"label-styling-title-perspnal label-styling-title-account\">{{Seeding_DBT_RB_003}}</label>\r\n\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"col-md-12 yes pad_radio  radio radio-ui-fix_dbt\">\r\n                        <input id=\"Yes4\" type=\"radio\" value=\"radio2\" formControlName=\"dbtRequirement_Tab\">\r\n                        <label for=\"Yes4\" class=\"label-styling-title-perspnal label-styling-title-account\">{{Seeding_DBT_RB_004}}</label>\r\n\r\n\r\n                    </div>\r\n                    <div *ngIf=\"dbt_radio2_display\" class=\"col-md-12 pad-mobile\">\r\n                        <label class=\"font_fam\" for=\"\">EXISTING BANK DETAILS:</label>\r\n                        <div class=\"col-md-12 pad-left\">\r\n                            <div class=\"col-md-6 pad-left\">\r\n                                <div class=\"col-md-12 pad-left\">\r\n                                    <label class=\"au_orange auLabel\" for=\"\">BANK NAME</label>\r\n                                </div>\r\n                                <div class=\"col-md-12 inputSection pad-left\" style=\"\">\r\n                                    <div class=\"\">\r\n\r\n                                        <input style=\"padding: 15px;     border: 1px solid #a6a0a0;\" #searchBox placeholder=\"Search Bank\" id=\"search-box\" formControlName=\"radio2_bankName\" (keyup)=\"search(searchBox.value)\" />\r\n\r\n                                        <ul *ngIf=\"searchList_hide\" class=\"search-result\">\r\n                                            <li (click)=\"selectedbank_option1(hero)\" *ngFor=\"let hero of heroes$ | async\">\r\n                                                {{hero.BANK_NAME}}\r\n                                            </li>\r\n                                        </ul>\r\n                                    </div>\r\n\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-6 margin-pad-0 pad-right pad-mobile\">\r\n                                <div class=\"col-md-12 margin-pad-0\">\r\n                                    <label class=\"au_orange auLabel col-md-12 margin-pad-0\" for=\"\">IIN NUMBER</label>\r\n                                </div>\r\n                                <div class=\"col-md-12 inputSection margin-pad-0\" style=\"margin:10px;margin-left: 11px;\">\r\n                                    <div class=\"\">\r\n                                        <div style=\"padding-left: 0;\" class=\"col-md-12 select_box\">\r\n                                            <input type=\"text\" style=\"    border: none; border-bottom: 1px solid #888080;\" disabled [value]=\"iin_selected\">\r\n\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"col-md-12 yes pad_radio radio radio-ui-fix_dbt\">\r\n                        <input type=\"radio\" id=\"Yes5\" value=\"radio3\" formControlName=\"dbtRequirement_Tab\">\r\n                        <label for=\"Yes5\" class=\"label-styling-title-perspnal label-styling-title-account\">{{Seeding_DBT_RB_005}}</label>\r\n\r\n\r\n                    </div>\r\n                    <div *ngIf=\"dbt_radio3_display\" class=\"col-md-12 pad-mobile \">\r\n                        <label class=\"font_fam\" for=\"\">EXISTING BANK DETAILS:</label>\r\n                        <div class=\"col-md-12 pad-left\">\r\n                            <div class=\"col-md-6 pad-left\">\r\n                                <div class=\"col-md-12 pad-left\">\r\n                                    <label class=\"au_orange auLabel\" for=\"\">BANK NAME</label>\r\n                                </div>\r\n                                <div class=\"col-md-12 inputSection pad-left\" style=\"\">\r\n                                    <div class=\"\">\r\n\r\n                                        <input style=\"padding:15px;     border: 1px solid #a6a0a0;\" #searchBox placeholder=\"Search Bank\" id=\"search-box\" formControlName=\"radio3_bankName\" (keyup)=\"search(searchBox.value)\" />\r\n\r\n                                        <ul *ngIf=\"searchList_hide\" class=\"search-result\">\r\n                                            <li (click)=\"selectedbank(hero)\" *ngFor=\"let hero of heroes$ | async\">\r\n                                                {{hero.BANK_NAME}}\r\n                                            </li>\r\n                                        </ul>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-6 margin-pad-0 pad-right pad-mobile\">\r\n                                <div class=\"col-md-12 margin-pad-0\">\r\n                                    <label class=\"au_orange auLabel col-md-12 margin-pad-0\" for=\"\">IIN NUMBER</label>\r\n                                </div>\r\n                                <div class=\"col-md-12 inputSection margin-pad-0\" style=\"margin:10px;margin-left: 11px;\">\r\n                                    <div class=\"\">\r\n                                        <div style=\"padding-left: 0;\" class=\"col-md-12 select_box\">\r\n                                            <input type=\"text\" style=\"    border: none; border-bottom: 1px solid #888080;\" disabled [value]=\"iin_selected\">\r\n\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div style=\"padding-left:0; padding-right:0;     padding-top: 20px;\" class=\"col-md-12 radio-align-media\">\r\n\r\n                    <div class=\"col-md-12 col-xs-12 col-sm-12 pad0\">\r\n                        <label class=\"container-checbox\">\r\n                            <input type=\"checkbox\" formControlName=\"fatca\" id=\"Yes6\">\r\n                            <span class=\"checkmark\"></span>\r\n                            <label for=\"Yes6\" class=\"chek-label label-styling-title\">{{Seeding_DBT_Declaration}}</label>\r\n                        </label>\r\n                    </div>\r\n\r\n\r\n                </div>\r\n                <div class=\"col-md-6 col-md-offset-3 button_style_mobile12\">\r\n                    <div class=\"col-md-6 col-sm-6 col-xs-6\" style=\"padding-top: 6%\">\r\n\r\n                        <input type=\"button\" class=\"col-md-7 cancel_btn\" (click)=\"DBTCancel()\" value=\"CANCEL\">\r\n                    </div>\r\n                    <div class=\"col-md-6 col-sm-6 col-xs-6 \" style=\"padding-top: 6%\">\r\n\r\n                        <input type=\"button\" class=\"col-md-7\" (click)=\"NextDBT()\" style=\"padding: 5% 0%\" [ngClass]=\"{ disabledBtn:!DBTForm.valid, 'cancel_btn':DBTForm.valid }\" [disabled]=\"!DBTForm.valid\" value=\"NEXT\">\r\n                    </div>\r\n                </div>\r\n\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>-->");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n\n\n\n<app-loader></app-loader>\n\n<app-header>\n</app-header>\n<app-dialogue></app-dialogue>\n<router-outlet></router-outlet>\n<app-footer></app-footer> \n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/biometric-kyc/biometric-kyc.component.html": 
        /*!**************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/biometric-kyc/biometric-kyc.component.html ***!
          \**************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div style=\"height:100%\">\r\n    <div class=\"col-md-3 side_outer hidden-sm hidden-xs\">\r\n        <div style=\"    padding: 20% 10% 20% 13%;\">\r\n            <div>\r\n                <img src=\"./assets/images/biometric.png\" style=\"width:90px;\" alt=\"\">\r\n            </div>\r\n            <div class=\"sidepanel_text\">\r\n                <label for=\"\">Schedule</label><br>\r\n                <label style=\"color: #f37021;\" for=\"\">Appointment</label>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-9 margin-pad-0\">\r\n        <div class=\"col-md-12 forcedPadding\">\r\n            <app-nav></app-nav>\r\n        </div>\r\n        <form id=\"biometricObj\" novalidate [formGroup]=\"biometricObj\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"mainContent row\">\r\n                    <div class=\"col-md-12 heading cutm-heading-biometric\">\r\n                        A bank representative is available for<br> Biometric KYC on:\r\n                    </div>\r\n                    <!-- <div class=\"col-md-12 inputSection margin_top_resp\">\r\n                        <div class=\"col-md-6 pad0 col-sm-12 col-xs-12\" style=\"position:relative;\">\r\n                            <span class=\"group\">                            \r\n                            <select \r\n                            class=\"col-md-12 col-sm-12 col-xs-12 select_box select-date-bio\" \r\n                            formControlName ='appointmentDate'\r\n                             >\r\n                          <option disabled   [selected]='true' value=\"\">Select Date</option>\r\n                          <option *ngFor = \"let date of appointmentDates\" [value] = \"date['appointment_date']\">{{date['appointment_date']}}</option>\r\n                          </select>\r\n                            <span class=\"bar\"></span>\r\n                            </span>\r\n                        </div>\r\n                    </div> -->\r\n                    <div class=\"form-group\">\r\n                        <input id=\"appointmentDate\" name=\"date\" [(ngModel)]=\"appointmentDate\"\r\n                        formControlName=\"appointmentDate\"  type=\"date\" class=\"form-control\" />\r\n                      </div>\r\n                   \r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-12 choice\">\r\n                            <div class=\"col-md-4\">\r\n                                <!-- <button (click)=\"appointmentClick()\" class=\"appointment\" [ngClass]=\"{ disabledBtn:!biometricObj.valid, 'activeBtn':biometricObj.valid }\" [disabled]=\"!biometricObj.valid\">SCHEDULE APPOINTMENT</button> -->\r\n                                <input type=\"button\" (click)=\"appointmentClick()\" class=\"appointment\" [ngClass]=\"{ disabledBtn:!biometricObj.valid, 'activeBtn':biometricObj.valid }\" [disabled]=\"!biometricObj.valid\" value=\"SCHEDULE APPOINTMENT\" > \r\n                            </div>\r\n                        <div class=\"col-md-12 \">\r\n                                <div class=\"col-md-3 t-center pad-left-0\">\r\n                                    <a (click)=\"skipClick()\">\r\n                                        <p class=\"skip-appnt\">Skip</p>\r\n                                    </a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/congratulations/congratulations.component.html": 
        /*!******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/congratulations/congratulations.component.html ***!
          \******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n    <div class=\"col-md-12\">\r\n        <div class=\"mainContent row\">\r\n            <form>\r\n                <div class=\"col-md-3\"></div>\r\n                <div class=\"col-md-6 main_screen col-sm-6 col-xs-12\">\r\n\r\n                    <div class=\"col-md-12 congo\"><img src=\"./assets/images/congratulations-icon.png\" alt=\"loading...\"></div>\r\n                    <div class=\"texts\">\r\n                        <div class=\"message \">\r\n                            <div class=\"main_heading family-medium\"><br><br> Congratulations !!</div>\r\n                            <div class=\"sub_heading family-book\"><br> {{messageData}}<br>{{defaultData}}\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-12 submit\">\r\n                            <button (click)=\"finish()\" class=\"finish\">FINISH</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-md-3\"></div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/deposit-money/deposit-money.component.html": 
        /*!**************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/deposit-money/deposit-money.component.html ***!
          \**************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- <head>\r\n  <script\r\n    src=\"https://www.paypal.com/sdk/js?client-id=AToZkNSm78y9IjmNKyP9uyEa3vr6UGxx6ow56lgDTb9c0IhUKAiQ8SPX_2eSXeQfbyFi200Dwq0cCK9l\"></script>\r\n  <script>paypal.Buttons().render('body');</script>\r\n</head> -->\r\n\r\n<body>\r\n  <div class=\"container-fluid content-holder overflow-hidden\">\r\n    <div class=\"main-content row d-flex\">\r\n      <div class=\"col-md-3 side_outer hidden-sm hidden-xs overflow-hidden\">\r\n        <div style=\"padding: 20% 10% 20% 13%;\">\r\n          <div>\r\n            <img src=\"./assets/images/depositMoney.png\" style=\"width:90px;\" alt=\"\">\r\n          </div>\r\n          <div class=\"sidepanel_text\">\r\n            <label for=\"\">Deposit</label><br>\r\n            <label style=\"color: #f37021;\" for=\"\">Money</label>\r\n\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"col-md-12 forcedPadding\">\r\n          <app-nav></app-nav>\r\n        </div>\r\n        <div class=\"col-md-12\">\r\n          <div class=\"mainContent row\">\r\n            <div class=\"col-md-12 pad0 family-book\">\r\n              <span class=\"heading\">Deposit Money in your SOLOMON account</span><br>\r\n              <span class=\"sub_heading sub_heading-deposit-cstm\">You can use a debit card or net banking.<br>You'll see\r\n                the money in your account on next working day.</span>\r\n            </div>\r\n            <form novalidate [formGroup]=\"depositMoneyDetails\">\r\n              <div class=\"col-md-12 inputContainer pad-mobile\">\r\n                <label class=\"au_orange auLabel block\" for=\"\">Amount (up to $10,000)</label>\r\n                <!-- <div>\r\n                  <div class=\"col-md-6 inputSection pad0\">\r\n                    <span class=\"group\">\r\n                      <input type=\"tel\" maxlength=\"5\" formControlName=\"amount\" OnlyNumber=\"true\" #deposit\r\n                        class=\"inputBox\" placeholder=\"Enter Amount\" (keyup)='Comma(deposit)' (keydown)='Comma(deposit)'>\r\n                      <span class=\"bar\"></span>\r\n                    </span>\r\n                  </div>\r\n                  <div class=\"col-md-6 margin-pad-0\"\r\n                    *ngIf=\"depositMoneyDetails.controls['amount'].errors &&  (depositMoneyDetails.controls['amount'].dirty || depositMoneyDetails.controls['amount'].touched)\">\r\n\r\n                    <div class=\"error_color error_block\" *ngIf=\"depositMoneyDetails.controls['amount'].errors.required\">\r\n                      <span><img src=\"./assets//images/error.png\" alt=\"\"></span> {{money_required}}\r\n                    </div>\r\n                  </div>\r\n                </div> -->\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12 choice mobile-center\">\r\n                  <!-- <div class=\"col-md-4 pad0\" style=\"padding-top: 4%\">\r\n                    <button type=\"button\" (click)=\"ipFunding()\" style=\"padding:3%\" class=\"col-md-7\"\r\n                      [ngClass]=\"{ disabledBtn:activeclass, 'activeBtn':!activeclass}\"\r\n                      [disabled]=\"activeclass || depositamountcheck\">\r\n                      MAKE PAYMENT\r\n                    </button>\r\n                  </div> -->\r\n\r\n                  \r\n\r\n                  <input type=\"number\" (change)=\"mychange($event)\" [(ngModel)]=\"finalAmount\" id=\"inputAmt\">\r\n\r\n                  \r\n                  \r\n                  \r\n\r\n                  <div id=\"paypal-checkout-btn\"></div>\r\n\r\n                \r\n                 \r\n                </div>\r\n\r\n\r\n              </div>\r\n            </form>\r\n            <form ngNoForm method=\"GET\" name=\"depositForm\"\r\n              action=\"https://au-uat.aubank.in/pwnew/CCAvenueRequestWebServlet\">\r\n              <input type=\"hidden\" id=\"tid\">\r\n              <input type=\"hidden\" name=\"merchant_id\" value=\"166139\">\r\n              <input type=\"hidden\" name=\"amount\">\r\n              <input type=\"hidden\" name=\"merchant_param2\">\r\n              <input type=\"hidden\" name=\"billing_tel\">\r\n              <input type=\"hidden\" name=\"billing_email\">\r\n              <input type=\"hidden\" name=\"order_id\">\r\n              <input type=\"hidden\" name=\"org_id\" value=\"ASTP\">\r\n              <input type=\"hidden\" name=\"app_id\" value=\"ABHIWEB\">\r\n              <input type=\"hidden\" name=\"login_id\">\r\n              <input type=\"hidden\" name=\"channel_name\" value=\"WEB\">\r\n              <input type=\"hidden\" name=\"merchant_param3\">\r\n\r\n\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</body>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-div-footer\">\r\n    <span (click)=\"openNav()\" class=\"hemberger\"><img style=\"    width: 22px;\" src=\"./assets/images/hamburger@3x.png\" alt=\"\"></span>\r\n    <div class=\"col-md-12 footer_outer\">\r\n        <p class=\"col-md-12 Version-number\" style=\"color: white;text-align: right;margin-top: 21px;margin-right: 12px;\">Version U 2.1.5</p>\r\n        <!-- <p class=\"col-md-12 Version-number\" style=\"color: white;text-align: right;margin-top: 21px;margin-right: 12px;\">Version S 2.1.4</p> -->\r\n        <div class=\"container-fluid footer-navbar\">\r\n            <p class=\"col-md-2\"><a href=\"../terms/termsAndCondition.html\" target=\"_blank\">FAQs</a></p>\r\n            <p class=\"col-md-2\"><a href=\"../terms/termsAndCondition.html\" target=\"_blank\">Terms & Conditions</a></p>\r\n            <p class=\"col-md-2\"><a href=\"../terms/termsAndCondition.html\" target=\"_blank\">Fee & Charge</a></p>\r\n\r\n            <!-- <p class=\"col-md-2\"><a href=\"https://au-uat.aubank.in/AU/faqs.html\" target=\"_blank\">FAQs</a></p>\r\n            <p class=\"col-md-2\"><a href=\"https://au-uat.aubank.in/AU/term_condition.html\" target=\"_blank\">Terms & Conditions</a></p>\r\n            <p class=\"col-md-2\"><a href=\"https://au-uat.aubank.in/AU/fee_charge.html\" target=\"_blank\">Fee & Charge</a></p> -->\r\n            <div class=\"footer-menu col-md-offset-2 col-md-6\">\r\n                <p class=\"col-md-12\" style=\"color: white;text-align: right;\">Version D 1.1.2</p>\r\n                <!-- <p class=\"col-md-12\" style=\"color: white;text-align: right;\">Version U 2.2.3</p> -->\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"menu-mobile\" id=\"MenuMobile\">\r\n        <div id=\"mySidenav\" class=\"sidenav\">\r\n            <a href=\"javascript:void(0)\" class=\"closebtn\" (click)=\"closeNav()\">&times;</a>\r\n            <a href=\"../terms/termsAndCondition.html\" target=\"_blank\" class=\"faqNall-list\">FAQs</a>\r\n            <a href=\"../terms/termsAndCondition.html\" target=\"_blank\">Terms & Conditions</a>\r\n            <a href= \"../terms/termsAndCondition.html\" target=\"_blank\">Fee & Charge</a>\r\n            <!-- <a href=\"#\">Contact</a> -->\r\n        </div>\r\n        <!-- <p class=\"Version\">Version U 2.2.3</p> -->\r\n        <p class=\"Version\">Version S 2.2.3</p>\r\n    </div>\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"\">\r\n    <div class=\"col-md-12 header_outer\">\r\n        <div class=\"col-xs-4 header-left\"><span class=\"helper\"></span>\r\n           \r\n            <img src=\"./assets/images/Bank_Stamp_v2.png\" alt=\"\">\r\n          \r\n        </div>\r\n        <div class=\"col-xs-offset-1 col-xs-8 col-sm-8 header-left-title\">\r\n         <p>{{headerName}}</p>\r\n        </div>\r\n        <div class=\"col-xs-3 col-sm-3 header-right header-right-banklogo\">\r\n            <img src=\"./assets/images/Bank_Stamp_v2.png\" alt=\"\">\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/mobile/mobile.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mobile/mobile.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid content-holder overflow-hidden\">\r\n  <div class=\"main-content row d-flex\">\r\n    <div class=\"col-md-3 hidden-sm hidden-xs overflow-hidden side_outer\">\r\n      <div style=\"padding: 20% 10% 20% 13%;\">\r\n        <div>\r\n          <img src=\"./assets/images/mobile-icon.png\" style=\"width:90px;\" alt=\"\">\r\n        </div>\r\n        <div class=\"sidepanel_text\" style=\"\">\r\n          <label for=\"\">Mobile</label>\r\n          <br>\r\n          <label style=\"color: #f37021;\" for=\"\">Verification</label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-9 col-sm-12  col-xs-12\">\r\n      <div class=\"col-md-12 hidden-sm  hidden-xs forcedPadding\">\r\n         <app-nav></app-nav> \r\n      </div>\r\n      <form novalidate [formGroup]=\"myForm\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"col-md-12\" class=\"mainContent row\">\r\n            <div class=\"col-md-12\">\r\n              <label class=\"au_orange auLabel col-md-12\" for=\"\">Mobile Number</label>\r\n            </div>\r\n            <div class=\"col-md-12 inputSection\">\r\n              <div class=\"\">\r\n                <div class=\"col-md-6 \">\r\n                  <span class=\"group\">\r\n                    <!-- <input type=\"tel\" formControlName=\"mobile_number\" #mobile (ngModelChange)=\"getOtp(mobile,'mobile',otp)\" -->\r\n                    <input type=\"tel\" formControlName=\"mobile_number\" #mobile (ngModelChange)=\"getOtp(mobile)\"\r\n                      OnlyNumber=\"true\" autofocus class=\"inputBox padding_left_style\" placeholder=\"9999999999\"\r\n                      maxlength=\"10\">\r\n                    <span class=\"bar\"></span>\r\n                  </span>\r\n                  <span class=\"family-medium mobile_first_style\">+1</span>\r\n                </div>\r\n                <!-- <div *ngIf=\"valid_number\"> -->\r\n                    <div>\r\n                  <div class=\"error_color  col-md-6\">\r\n                    <span class=\"error_text\">{{mobile_required_msg}}</span>\r\n                  </div>\r\n                </div>\r\n                <!-- <div *ngIf=\"myForm.controls['mobile_number'].errors &&  (myForm.controls['mobile_number'].dirty || myForm.controls['mobile_number'].touched) \"> -->\r\n                    <div >\r\n                  <div class=\"error_color  col-md-6\" >\r\n                      <!-- <div class=\"error_color  col-md-6\" *ngIf=\"myForm.controls['mobile_number'].errors.required\"> -->\r\n                    <span class=\"error_text\">{{mobile_required_msg}}</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-12 helpingSection mobile-alignment-uifix\">\r\n                <label style=\"    padding-top: 8px;\" class=\"\" for=\"\">{{mobile_bottom_msg}}</label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"mobile_loader\" >\r\n            <div>\r\n              <!-- <img width=\"160px;\" src=\"./assets/images/test.gif\" alt=\"\"> -->\r\n            </div>\r\n            <div style=\"    font-family: Nunito-Regular;     font-size: 20px;\">\r\n              <span>{{mobile_loader_msg}}</span>\r\n              <br>\r\n            </div>\r\n          </div>\r\n          <div [ngClass]=\"{ hideOtp:!otp_show, 'showOtp':otp_show }\" class=\"col-md-12\" class=\"mainContent  row\">\r\n            <div class=\"col-md-12\">\r\n              <label class=\"au_orange auLabel col-md-12\" for=\"\">One Time Password (OTP)</label>\r\n            </div>\r\n            <div class=\"col-md-12 inputSection\">\r\n              <div class=\"col-md-6\">\r\n                <span class=\"group\">\r\n                  <input type=\"tel\" [(ngModel)]=\"verify_otp\" (ngModelChange)=\"validateOtp(otp)\" #otp formControlName=\"mobile_otp\"\r\n                    autofocus OnlyNumber=\"true\" class=\"inputBox\" placeholder=\"Enter 6-digit OTP\" maxlength=\"6\"\r\n                    [readonly]=\"isReadOnly\">\r\n                  <span class=\"bar\"></span>\r\n                </span>\r\n              </div>\r\n              <div class=\"col-md-6\" *ngIf=\"myForm.controls['mobile_otp'].errors &&  (myForm.controls['mobile_otp'].dirty || myForm.controls['mobile_otp'].touched)\">\r\n                <div class=\"error_color otp_error col-md-12\" *ngIf=\"myForm.controls['mobile_otp'].errors.required\">\r\n\r\n                  <span class=\"error_text\">{{otp_required_msg}}</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-12\" style=\"padding-top:8px;\">\r\n                <div class=\"col-md-6 helpingSection mobile-alignment-uifix\" style=\"padding-left:0;\" [ngClass]=\"{valid_otp:count_down,invalid_otp:!count_down}\">\r\n                  <span style=\"text-align: left;\">\r\n                    {{otp_bottom_msg}}\r\n                  </span>\r\n\r\n                  <span *ngIf=\"!resend_display\" style=\"float: right;width: 35px;\" class=\"res-otp-timer pos-rel pos-rel-count txt-indent\">\r\n                    00:{{countDown | async}}\r\n                  </span>\r\n\r\n                  <span *ngIf=\"!resend_display\" class=\"res-otp-timer\">\r\n                    <img class=\"pos-rel\" src=\"./assets/images/page4.png\" alt=\"loading...\" style=\"margin-right:5px; float:right;position:relative;\">\r\n                  </span>\r\n                  <span *ngIf=\"resend_display\" style=\"float: right;\" class=\"res-otp-timer\">\r\n                    <span class=\"resend pos-rel pos-relative-new\" href=\"\" (click)=\"getOtp(mobile,'resend_button')\">\r\n                      Resend\r\n                      OTP</span>\r\n                  </span>\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-12 mobile_dbt\" id=\"DBTshow\" *ngIf=\"dbt_show\">\r\n              <div class=\"col-md-12\">\r\n                <label class=\"dbt family-book\">DBT Benefits</label><br>\r\n  \r\n              </div>\r\n              <div class=\"col-md-12\">\r\n  \r\n                <div style=\"  padding-left: 0;\" class=\"col-md-12 yes radio-ui-fix_dbt\">\r\n                  <input id=\"Yes1\" type=\"radio\" value=\"true\" [checked]=\"dbt_benef == 'YES'\" formControlName=\"dbtRequirement\"\r\n                    [(ngModel)]=\"dbt_benef\"> <label for=\"Yes1\" class=\"label-styling-title-perspnal label_mobile_res\">{{Seeding_DBT_RB_001}}</label>\r\n                </div>\r\n                <div style=\"  padding-left: 0;\" class=\"col-md-12 no radio-ui-fix_dbt\">\r\n                  <input id=\"Yes2\" type=\"radio\" value=\"false\" [checked]=\"dbt_benef == 'NO'\" formControlName=\"dbtRequirement\"\r\n                    [(ngModel)]=\"dbt_benef\"> <label for=\"Yes2\" class=\"label-styling-title-perspnal label_mobile_res\">{{Seeding_DBT_RB_002}}</label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-12\" >\r\n                <div class=\"col-md-3 button_aligned_mobile\" style=\"padding-top: 6%\">\r\n                  <input type=\"button\" class=\"col-md-7\" (click)=\"DataSync(false)\" style=\"padding: 5% 0%\"\r\n                    [ngClass]=\"{ disabledBtn:!myForm.valid, 'cancel_btn':myForm.valid }\" value=\"NEXT\">\r\n                </div>\r\n              </div>\r\n    \r\n          <div class=\"col-md-12\">\r\n            <div style=\"margin-left:6%\">\r\n\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"dbt_popup_display\" class=\"uploadOverlay\" id=\"upload\"> \r\n    <div class=\"uploadOverlay\" id=\"upload\">\r\n  <div class=\"uploadContainer dbt_new_popup\" style=\" width: 60% !important; margin: auto; box-shadow: 0px 0px 34px !important;background-color: #fff !important;\">\r\n    <div class=\"header\">\r\n\r\n    </div>\r\n    <div class=\"body\">\r\n      <form novalidate [formGroup]=\"DBTForm\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"col-md-12 yes pad_radio radio radio-ui-fix_dbt\">\r\n            <input id=\"Yes3\" type=\"radio\" value=\"radio1\" formControlName=\"dbtRequirement_Tab\" [(ngModel)]=\"dbt_choice\"\r\n              [checked]=\"dbt_Choice_var\">\r\n            <label for=\"Yes3\" class=\"label-styling-title-perspnal label-styling-title-account\">{{Seeding_DBT_RB_003}}</label>\r\n\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-12\">\r\n          <div class=\"col-md-12 yes pad_radio  radio radio-ui-fix_dbt\">\r\n            <input id=\"Yes4\" type=\"radio\" value=\"radio2\" formControlName=\"dbtRequirement_Tab\" [checked]=\"dbt_other_choice\">\r\n            <label for=\"Yes4\" class=\"label-styling-title-perspnal label-styling-title-account\">{{Seeding_DBT_RB_004}}</label>\r\n\r\n\r\n          </div>\r\n          <div *ngIf=\"dbt_radio2_display\" class=\"col-md-12 pad-mobile\">\r\n            <label class=\"font_fam\" for=\"\">EXISTING BANK DETAILS:</label>\r\n            <div class=\"col-md-12 pad-left\">\r\n              <div class=\"col-md-6 pad-left\">\r\n                <div class=\"col-md-12 pad-left\">\r\n                  <label class=\"au_orange auLabel\" for=\"\">BANK NAME</label>\r\n                </div>\r\n                <div class=\"col-md-12 inputSection pad-left\" style=\"\">\r\n                  <div class=\"\">\r\n\r\n                    <input style=\"padding: 15px;     border: 1px solid #a6a0a0;\" #searchBox placeholder=\"Search Bank\"\r\n                      id=\"search-box\" formControlName=\"radio2_bankName\" [(ngModel)]=\"bankName_selected\" (keyup)=\"search(searchBox.value)\" />\r\n\r\n                    <ul *ngIf=\"searchList_hide\" class=\"search-result\">\r\n                      <li (click)=\"selectedbank_option1(hero)\" *ngFor=\"let hero of heroes$ | async\">\r\n                        {{hero.BANK_NAME}}\r\n                      </li>\r\n                    </ul>\r\n                  </div>\r\n\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-6 margin-pad-0 pad-right pad-mobile\">\r\n                <div class=\"col-md-12 margin-pad-0\">\r\n                  <label class=\"au_orange auLabel col-md-12 margin-pad-0\" for=\"\">IIN NUMBER</label>\r\n                </div>\r\n                <div class=\"col-md-12 inputSection margin-pad-0\" style=\"margin:10px;margin-left: 11px;\">\r\n                  <div class=\"\">\r\n                    <!--<div [hidden]=\"previous_bank_iin\" style=\"color: #646464 !important;font-size: 18px;\">{{bank_iin_number_selected}}</div>-->\r\n                    <div style=\"padding-left: 0;\" class=\"col-md-12 select_box\">\r\n                      <input type=\"text\" style=\"    border: none; border-bottom: 1px solid #888080;\" disabled [value]=\"iin_selected\"\r\n                        [(ngModel)]=\"bank_iin_number_selected\">\r\n                    </div>\r\n                  </div>\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!--  <div class=\"col-md-12\">\r\n                        <div class=\"col-md-12 yes pad_radio radio radio-ui-fix_dbt\">\r\n                            <input type=\"radio\" id=\"Yes5\" value=\"radio3\" formControlName=\"dbtRequirement_Tab\">\r\n                            <label for=\"Yes5\" class=\"label-styling-title-perspnal label-styling-title-account\">{{Seeding_DBT_RB_005}}</label>\r\n    \r\n    \r\n                        </div>\r\n                        <div *ngIf=\"dbt_radio3_display\" class=\"col-md-12 pad-mobile \">\r\n                            <label class=\"font_fam\" for=\"\">EXISTING BANK DETAILS:</label>\r\n                            <div class=\"col-md-12 pad-left\">\r\n                                <div class=\"col-md-6 pad-left\">\r\n                                    <div class=\"col-md-12 pad-left\">\r\n                                        <label class=\"au_orange auLabel\" for=\"\">BANK NAME</label>\r\n                                    </div>\r\n                                    <div class=\"col-md-12 inputSection pad-left\" style=\"\">\r\n                                        <div class=\"\">\r\n    \r\n                                            <input style=\"padding:15px;     border: 1px solid #a6a0a0;\" #searchBox placeholder=\"Search Bank\" id=\"search-box\" formControlName=\"radio3_bankName\" (keyup)=\"search(searchBox.value)\" />\r\n    \r\n                                            <ul *ngIf=\"searchList_hide\" class=\"search-result\">\r\n                                                <li (click)=\"selectedbank(hero)\" *ngFor=\"let hero of heroes$ | async\">\r\n                                                    {{hero.BANK_NAME}}\r\n                                                </li>\r\n                                            </ul>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-6 margin-pad-0 pad-right pad-mobile\">\r\n                                    <div class=\"col-md-12 margin-pad-0\">\r\n                                        <label class=\"au_orange auLabel col-md-12 margin-pad-0\" for=\"\">IIN NUMBER</label>\r\n                                    </div>\r\n                                    <div class=\"col-md-12 inputSection margin-pad-0\" style=\"margin:10px;margin-left: 11px;\">\r\n                                        <div class=\"\">\r\n                                            <div style=\"padding-left: 0;\" class=\"col-md-12 select_box\">\r\n                                                <input type=\"text\" style=\"    border: none; border-bottom: 1px solid #888080;\" disabled [value]=\"iin_selected\">\r\n    \r\n                                            </div>\r\n                                        </div>\r\n    \r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>-->\r\n        <div style=\"padding-left:0; padding-right:0;     padding-top: 20px;\" class=\"col-md-12 radio-align-media\">\r\n\r\n          <div class=\"col-md-12 col-xs-12 col-sm-12 pad0\">\r\n            <label class=\"container-checbox\">\r\n              <input type=\"checkbox\" formControlName=\"fatca\" id=\"Yes6\">\r\n              <span class=\"checkmark\"></span>\r\n              <label for=\"Yes6\" class=\"chek-label label-styling-title\">{{Seeding_DBT_Declaration}}</label>\r\n            </label>\r\n          </div>\r\n\r\n\r\n        </div>\r\n        <div class=\"col-md-6 col-md-offset-3 button_style_mobile12\">\r\n          <div class=\"col-md-6 col-sm-6 col-xs-6\" style=\"padding-top: 6%\">\r\n\r\n            <input type=\"button\" class=\"col-md-7 cancel_btn\" (click)=\"DBTCancel()\" value=\"CANCEL\">\r\n          </div>\r\n          <div class=\"col-md-6 col-sm-6 col-xs-6 \" style=\"padding-top: 6%\">\r\n\r\n            <input type=\"button\" class=\"col-md-7\" (click)=\"NextDBT()\" style=\"padding: 5% 0%\" [ngClass]=\"{ disabledBtn:!DBTForm.valid, 'cancel_btn':DBTForm.valid }\"\r\n              [disabled]=\"!DBTForm.valid\" value=\"NEXT\">\r\n          </div>\r\n        </div>\r\n\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav/nav.component.html": 
        /*!******************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav/nav.component.html ***!
          \******************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row refreshbBackBtn\" *ngIf=\"showInfo.refreshLabel\">\r\n        <label class=\"col-md-9 please-txt\">Please do not use ‘Refresh’ or ‘Back’ button</label>\r\n        <label class=\"col-md-3 Ok-btn\" (click)=\"changeLabelVisibility()\">OK</label>\r\n    </div>\r\n    <div class=\"row hidden-sm hidden-xs\" style=\"padding: 0;margin-left: 50px;\">\r\n        <ul class=\"nav-tabs12 col-md-12\">\r\n           \r\n            <li class=\"col-md-3\">\r\n              \r\n                <div class=\"col-md-12 \" [ngClass]=\"{'isAcitve':screen1.user_registration_isactive === 'YES'}\">\r\n                    <label *ngIf=\"!screen1.user_registration_iscomplete\" class=\"col-md-3 moduleCardIcon\">1</label>\r\n                    <span *ngIf=\"screen1.user_registration_iscomplete\" class=\"col-md-3\"><img src=\"./assets/images/navigation_check.png\" alt=\"\"></span>\r\n                    <label class=\"col-md-9 text-label\">USER REGISTRATION</label>\r\n    \r\n                    <div style=\"padding: 0\" class=\"col-md-12\">\r\n                        <ngb-progressbar type=\"info\" [value]=\"screen1.user_reg_loaderWidth\" style=\"color: red\" height=\"3px\"></ngb-progressbar>\r\n                    </div>\r\n                </div>\r\n            </li>\r\n            <li class=\"col-md-3\">\r\n               \r\n                <div class=\"col-md-12 \" [ngClass]=\"{'isAcitve':screen2.user_registration_isactive === 'YES'}\">\r\n                    <label *ngIf=\"!screen2.user_registration_iscomplete\" class=\"col-md-3 moduleCardIcon\">2</label>\r\n                    <span *ngIf=\"screen2.user_registration_iscomplete\" class=\"col-md-3\"><img src=\"./assets/images/navigation_check.png\" alt=\"\"></span>\r\n                    <label class=\"col-md-9 text-label\">ACCOUNT SUMMARY</label>\r\n    \r\n                    <div style=\"padding: 0\" class=\"col-md-12\">\r\n                        <ngb-progressbar type=\"info\" [value]=\"screen2.user_reg_loaderWidth\" height=\"3px\"></ngb-progressbar>\r\n                    </div>\r\n                </div>\r\n            </li>\r\n            <li class=\"col-md-3\">\r\n              \r\n                <div class=\"col-md-12 \" [ngClass]=\"{'isAcitve':screen3.user_registration_isactive === 'YES'}\">\r\n                    <label *ngIf=\"!screen3.user_registration_iscomplete\" class=\"col-md-3 moduleCardIcon\">3</label>\r\n                    <span *ngIf=\"screen3.user_registration_iscomplete\" class=\"col-md-3\"><img src=\"./assets/images/navigation_check.png\" alt=\"\"></span>\r\n                    <label class=\"col-md-9 text-label\">DEPOSIT<br> MONEY</label>\r\n    \r\n                    <div style=\"padding: 0\" class=\"col-md-12\">\r\n                        <ngb-progressbar type=\"info\" [value]=\"screen3.user_reg_loaderWidth\" height=\"3px\"></ngb-progressbar>\r\n                    </div>\r\n                </div>\r\n            </li>\r\n            <li class=\"col-md-3\" style=\"width:21%\">\r\n             \r\n                <div class=\"col-md-12 \" [ngClass]=\"{'isAcitve':screen4.user_registration_isactive === 'YES'}\">\r\n                    <label *ngIf=\"!screen4.user_registration_iscomplete\" class=\"col-md-3 moduleCardIcon\">4</label>\r\n                    <span *ngIf=\"screen4.user_registration_iscomplete\" class=\"col-md-3\"><img src=\"./assets/images/navigation_check.png\" alt=\"\"></span>\r\n                    <label class=\"col-md-9 text-label\">SCHEDULE APPOINTMENT</label>\r\n    \r\n                    <div style=\"padding: 0 \" class=\"col-md-12\">\r\n                        <ngb-progressbar type=\"info\" [value]=\"screen4.user_reg_loaderWidth\" height=\"3px\"></ngb-progressbar>\r\n                    </div>\r\n                </div>\r\n            </li>\r\n        </ul>\r\n    </div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/nominee-details/nominee-details.component.html": 
        /*!******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nominee-details/nominee-details.component.html ***!
          \******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid content-holder overflow-hidden\">\r\n  <div class=\"main-content row d-flex\">\r\n        <div class=\"col-md-3 hidden-sm hidden-xs side_outer overflow-hidden\">\r\n            <div style=\"    padding: 20% 10% 20% 13%;\">\r\n                <div>\r\n                    <img src=\"./assets/images/personalInfo.png\" style=\"width:90px;\" alt=\"\">\r\n                </div>\r\n                <div class=\"sidepanel_text\" style= \"\">\r\n                    <label for=\"\">Nominee</label><br>\r\n                    <label style=\"color: #f37021;\" for=\"\">Details</label>\r\n                </div>\r\n    \r\n            </div>\r\n            <div class=\"clear-btn-prnt\">\r\n              \r\n            </div>\r\n    \r\n    \r\n        </div>\r\n        <div class=\"col-md-9 col-xs-12 col-sm-12 vertical-scroll mobile_responsive\">\r\n            <div class=\"col-md-12  hidden-sm hidden-xs forcedPadding\">\r\n                <app-nav></app-nav>\r\n            </div>\r\n            \r\n    \r\n            <div class=\"col-md-12\">\r\n                <form novalidate [formGroup]=\"nomineeDetailsForm\">\r\n    \r\n                    <!-- <div class=\"col-md-12\" class=\"mainContent row\" style=\"margin:5% 4% 0\">\r\n                        <div class=\"col-md-12\">\r\n                            <label class=\"au_orange auLabel col-md-12\" for=\"\">Do you wish to add a Nominee?</label>\r\n                        </div>\r\n                        <div class=\"col-md-12\">\r\n                            <div class=\"col-md-3 col-xs-6 col-sm-6 f-18 radio-ui-fix\">\r\n                                <input type=\"radio\" value=\"true\" formControlName=\"add_nominee\" checked id=\"test6\" [(ngModel)]=\"Nominee_Y_N\" [checked]=\"IsNominee_requrired=='YES'\">\r\n                                <label for=\"test6\" class=\"label-styling-title\">Yes</label>\r\n                            </div>\r\n                            <div class=\"col-md-3 col-xs-6 col-sm-6 f-18 radio-ui-fix\">\r\n                                <input type=\"radio\" value=\"false\" formControlName=\"add_nominee\" id=\"test7\" [(ngModel)]=\"Nominee_Y_N\" [checked]=\"IsNominee_requrired=='NO'\">\r\n                                <label for=\"test7\" class=\"label-styling-title\">No</label>\r\n                            </div>\r\n                        </div>\r\n    \r\n    \r\n                    </div> -->\r\n                    <!-- <div *ngIf=\"add_NO_Nominee_checked\">\r\n                           <div> \r\n                        <div class=\"col-md-12\" class=\"mainContent row\" style=\"margin:3% 4% 0\">\r\n                           \r\n                            <div class=\"col-md-12 inputSection\" style=\"margin:10px\">\r\n                                <div class=\"\">\r\n                                    <div class=\"col-md-12 col-xs-12 col-sm-12\" style=\"padding-left:5px;\">\r\n                                       \r\n                                        <label class=\"container-checbox\">\r\n                                <input type=\"checkbox\" formControlName=\"nominee_no_checkbox\" id=\"test2\">\r\n                                <span class=\"checkmark\"></span>\r\n                                <label for=\"test2\" class=\"chek-label label-styling-title width_laptop\">{{fataDeclaration}}</label>\r\n                                        </label>\r\n                                    </div>\r\n                                   \r\n                                </div>\r\n                            </div>\r\n    \r\n                        </div>\r\n                    </div> -->\r\n                    <div>\r\n                         <!-- <div *ngIf=\"addNominee_show\"> -->\r\n    \r\n                        <div class=\"col-md-12\" class=\"mainContent row\" style=\"margin:4% 4% 0\">\r\n                            <div class=\"col-md-12\">\r\n                                <label class=\"au_orange auLabel col-md-12\" for=\"\">Relation with <span style=\"font-family: Nunito-SemiBold;\r\n                                    font-size: Nunito-SemiBold;\r\n                                    font-size: 13px;\"><em>{{relation}}</em></span></label>\r\n                            </div>\r\n                            <div class=\"col-md-12\" style=\"padding-left:20px;\">\r\n                                <div class=\" inputSection\" style=\"margin:10px\">\r\n                                    <div class=\"\">\r\n                                        <select (change)=\"onChange($event.target.value)\" style=\"\" formControlName=\"relation\" class=\"col-md-6 select_box relation_select\" name=\"relation\" [(ngModel)]=\"Nominee_relation\">\r\n                                          <option disabled   [selected]='true' value=\"\">Select</option>\r\n                                          <!-- <option disabled   [selected]='true' value=\"\">Select</option> -->\r\n                                         \r\n                                          <option value = \"1\">Brother</option>\r\n                                          <option value = \"2\">Sister</option>\r\n                                          <option value = \"3\">Mother</option>\r\n                                          <option value = \"4\">Father</option>\r\n                                          <option value = \"5\">Uncle</option>\r\n                                      </select>\r\n                                    </div>\r\n                                    <div *ngIf=\"nomineeDetailsForm.controls['relation'].errors &&  (nomineeDetailsForm.controls['relation'].dirty || nomineeDetailsForm.controls['relation'].touched) \">\r\n    \r\n                                        <div class=\"error_color  col-md-6 padd01\" *ngIf=\"nomineeDetailsForm.controls['relation'].errors.required\">\r\n                                          \r\n                                            <span class=\"error_text\">{{relation_required}}</span>\r\n                                        </div>\r\n    \r\n                                    </div>\r\n    \r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-12\" class=\"mainContent row\" style=\"margin:4% 4% 0\">\r\n                            <div class=\"col-md-12\">\r\n                                <label class=\"au_orange auLabel col-md-12\" for=\"\">Nominee Name</label>\r\n                            </div>\r\n                            <div class=\"col-md-12\">\r\n                                <div class=\" inputSection\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <span class=\"group\">\r\n                                                        <input type=\"text\" class=\"inputBox\"  formControlName=\"nominee_name\"  placeholder=\"Enter Name\" maxlength=\"30\" [(ngModel)]=\"name_Nominee\">\r\n                                                        <span class=\"bar\"></span>\r\n                                        </span>\r\n                                    </div>\r\n                                    <div class=\"col-md-6 padd01\" *ngIf=\"nomineeDetailsForm.controls['nominee_name'].errors &&  (nomineeDetailsForm.controls['nominee_name'].dirty || nomineeDetailsForm.controls['nominee_name'].touched)\">\r\n    \r\n                                        <div class=\"error_color col-md-12\" *ngIf=\"nomineeDetailsForm.controls['nominee_name'].errors.required\">\r\n                                           \r\n    \r\n                                            <span class=\"error_text name_error\">{{name_required}}</span>\r\n                                        </div>\r\n                                    </div>\r\n    \r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-12\" class=\"mainContent row\" style=\"margin:4% 4% 0\">\r\n                            <div class=\"col-md-12\">\r\n                                <label class=\"au_orange auLabel col-md-12\" for=\"\">Date of Birth</label>\r\n                            </div>\r\n                            <div class=\"col-md-6 col-xs-12 col-sm-12 dob-sapce-fix\">\r\n                                <!-- <my-date-picker name=\"date\" [placeholder]=\"placeholder\" [options]=\"myDatePickerOptionsObj\" formControlName=\"date\" [(ngModel)]=\"nominee_dob\"></my-date-picker>\r\n                                -->\r\n                                <div class=\"form-group\">\r\n                                    <input id=\"dateOfBirth\" name=\"date\" [(ngModel)]=\"nominee_dob\"\r\n                                    formControlName=\"date\"  type=\"date\" class=\"form-control\" />\r\n                                  </div>\r\n                               \r\n                                <div *ngIf=\"nomineeDetailsForm.controls['date'].errors &&  (nomineeDetailsForm.controls['date'].dirty || nomineeDetailsForm.controls['date'].touched) \">\r\n    \r\n                                    <div class=\"error_color  col-md-6 padd01\" *ngIf=\"nomineeDetailsForm.controls['date'].errors.required\">\r\n                                        <span class=\"error_text\">{{date_required}}</span>\r\n                                    </div>\r\n    \r\n                                </div>\r\n    \r\n                            </div>\r\n    \r\n                        </div>\r\n                        <div class=\"col-md-12\" class=\"mainContent row\" style=\"margin:4% 4% 0\">\r\n                            <div class=\"col-md-12\">\r\n                                <label class=\"au_orange auLabel col-md-12\" for=\"\">Is nominee address same as any of your below addresses?</label>\r\n                            </div>\r\n                            <div class=\"col-md-12\">\r\n                                <div class=\"col-md-4 f-18 radio-ui-fix\">\r\n                                    <input id=\"test8\" type=\"radio\" value=\"permanent\" (change)=\"onSelectionChange('permanent')\" formControlName=\"nominee_address_option\" [(ngModel)]=\"nominee_address_new\" [checked]=\"nominee_address_new=='permanent'\">\r\n                                    <label for=\"test8\" class=\"label-styling-title\">Permanent/Other</label>\r\n                                </div>\r\n    \r\n    \r\n                                <div class=\"col-md-4 f-18 radio-ui-fix\">\r\n                                    <input id=\"test9\" type=\"radio\" value=\"none\" (change)=\"onSelectionChange('none')\" formControlName=\"nominee_address_option\" [(ngModel)]=\"nominee_address_new\" [checked]=\"nominee_address_new=='none'\">\r\n                                    <label for=\"test9\" class=\"label-styling-title\">None</label>\r\n                                </div>\r\n                            </div>\r\n                           <!-- <div class=\"col-md-12\" *ngIf=\"!address_same_as_show\">\r\n                                <div class=\"col-md-3 f-18 radio-ui-fix\">\r\n                                    <input id=\"test10\" type=\"radio\" value=\"permanent\" (change)=\"onSelectionChange('permanent')\" formControlName=\"nominee_address_option\">\r\n                                    <label for=\"test10\" class=\"label-styling-title\">Permanent</label>\r\n    \r\n                                </div>\r\n    \r\n                                <div class=\"col-md-3 f-18 radio-ui-fix\">\r\n                                    <input id=\"test11\" type=\"radio\" value=\"other\" (change)=\"onSelectionChange('other')\" formControlName=\"nominee_address_option\">\r\n                                    <label for=\"test11\" class=\"label-styling-title\">Other</label>\r\n                                </div>\r\n                                <div class=\"col-md-3 f-18 radio-ui-fix\">\r\n                                    <input id=\"test12\" type=\"radio\" value=\"none\" (change)=\"onSelectionChange('none')\" formControlName=\"nominee_address_option\">\r\n                                    <label for=\"test12\" class=\"label-styling-title\">None</label>\r\n                                </div>\r\n                            </div>-->\r\n    \r\n                        </div>\r\n    \r\n                        <div style=\"\" *ngIf=\"showOption\" class=\"overflow-hidden padd_responsive\">\r\n                             \r\n                            <div class=\"col-md-12  inputContainer overflow-hidden\" id=\"address1_scroll\">\r\n    \r\n    \r\n                                <div class=\"col-md-12 padd0\">\r\n                                    <div class=\"col-md-6 col-sm-12 col-xs-12 padd0 inputSection \">\r\n                                        <span class=\"group\">\r\n                                            <input type=\"text\"\r\n                                            formControlName=\"addressline1\"\r\n                                            maxlength = \"30\"\r\n                                           [(ngModel)]=\"nominee_address_1\"\r\n                                            class=\"inputBox\" placeholder=\"Enter Address Line 1 \">\r\n                                            <span class=\"bar\"></span>\r\n                                        </span>\r\n                                    </div>\r\n                                    <div class=\"col-md-6 padd01\" *ngIf=\"nomineeDetailsForm.controls['addressline1'].errors &&  (nomineeDetailsForm.controls['addressline1'].dirty || nomineeDetailsForm.controls['addressline1'].touched)\">\r\n                                       \r\n                                        <div class=\"error_color error_block\" *ngIf=\"nomineeDetailsForm.controls['addressline1'].errors.required\">\r\n                                            {{address1_required}}\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-12 inputContainer\">\r\n                                <div class=\"col-md-12 padd0\">\r\n                                    <div class=\"col-md-6 padd0 col-sm-12 col-xs-12 inputSection\">\r\n                                        <span class=\"group\">\r\n                                                <input type=\"text\"\r\n                                                formControlName=\"addressline2\"\r\n                                                maxlength = \"30\"\r\n                                                [(ngModel)]=\"nominee_address_2\"\r\n                                                class=\"inputBox\" placeholder=\"Enter Address Line 2\">\r\n                                                <span class=\"bar\"></span>\r\n                                        </span>\r\n                                    </div>\r\n                                    <div class=\"col-md-6 padd01\" *ngIf=\"nomineeDetailsForm.controls['addressline2'].errors &&  (nomineeDetailsForm.controls['addressline2'].dirty || nomineeDetailsForm.controls['addressline2'].touched)\">\r\n                                      \r\n                                        <div class=\"error_color error_block\" *ngIf=\"nomineeDetailsForm.controls['addressline2'].errors.required\">\r\n                                            {{address2_required}}\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n    \r\n                            <div class=\"col-md-12 inputContainer\">\r\n                                <div class=\"col-md-12 padd0\">\r\n                                    <div class=\"col-md-6 col-sm-12 col-xs-12 padd0 inputSection\">\r\n                                        <span class=\"group\">\r\n                                                        <input type=\"text\"\r\n                                                        formControlName=\"landmark\"\r\n                                                        [(ngModel)]=\"nominee_landmark\"\r\n                                                        class=\"inputBox\" placeholder=\"Enter Landmark(Optional)\">\r\n                                                        <span class=\"bar\"></span>\r\n                                        </span>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-12 inputContainer\" style=\"position: relative;\">\r\n                                <div class=\"col-md-12 padd0\">\r\n                                    <div class=\"col-md-3 col-sm-12 col-xs-12 padd0 inputSection \">\r\n                                        <span class=\"group\">\r\n                                                            <input type=\"text\"\r\n                                                            formControlName=\"pincode\"\r\n                                                            #pincode\r\n                                                            OnlyNumber = \"true\"\r\n                                                            maxlength=\"6\"\r\n                                                            [(ngModel)]=\"nominee_pincode\"\r\n                                                            (ngModelChange)=\"fetchStateCity(pincode)\" \r\n                                                            class=\"inputBox\" placeholder=\"PIN Code\">\r\n                                                            <span class=\"bar\"></span>\r\n                                        </span>\r\n                                    </div>\r\n                                    <div class=\"col-md-3 col-sm-12 col-xs-12 padd0 inputSection \">\r\n                                        <span class=\"group\">\r\n                                                                    <input type=\"text\"\r\n                                                                    formControlName=\"city\"\r\n                                                                    disabled\r\n                                                                    [(ngModel)]=\"city\"\r\n                                                                    class=\"inputBox\" placeholder=\"City\">\r\n                                                                    <span class=\"bar\"></span>\r\n                                        </span>\r\n                                    </div>\r\n                                    <div class=\"col-md-6 padd01\" *ngIf=\"nomineeDetailsForm.controls['pincode'].errors &&  (nomineeDetailsForm.controls['pincode'].dirty || nomineeDetailsForm.controls['pincode'].touched)\">\r\n                                      \r\n                                        <div class=\"error_color error_block\" *ngIf=\"nomineeDetailsForm.controls['pincode'].errors.required || nomineeDetailsForm.controls['pincode'].errors.minlength\">\r\n                                            {{pincode_required}}\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6 padd01\" *ngIf=\"pincode123.pincodeError\">\r\n    \r\n    \r\n                                        <div class=\"error_color error_block col-md-10\" style=\"margin-top:0\">\r\n                                            {{pincode123.pincodeErrorMsg}}\r\n                                        </div>\r\n                                    </div>\r\n                                    <div *ngIf=\"pincode_loader\" style=\"\" class=\"col-md-6 pincode_loader_css\">\r\n                                        <span>\r\n                                        <img width=\"60px;\" src=\"./assets/images/test.gif\" alt=\"\">\r\n                                    </span>\r\n                                        <div style=\" font-family: Nunito-Regular; font-size: 20px;\">\r\n                                            <span>\r\n                                            {{pincodeMsg}}    \r\n                                            </span><br>\r\n    \r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n    \r\n                            <div class=\"col-md-12  inputContainer\">\r\n                                <div class=\"col-md-12 padd0\">\r\n                                    <div class=\"col-md-6 col-sm-12 col-xs-12 padd0 inputSection\">\r\n                                        <span class=\"group\">\r\n                                                                    <input type=\"text\"\r\n                                                                    formControlName=\"state\"\r\n                                                                    disabled\r\n                                                                    [(ngModel)]=\"state\"\r\n                                                                    class=\"inputBox\" placeholder=\"State\">\r\n                                                                    <span class=\"bar\"></span>\r\n                                        </span>\r\n                                    </div>\r\n    \r\n                                </div>\r\n                            </div>\r\n    \r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-12 inputContainer align-button nomineedetail-nxt button_aligned_mobile\">\r\n                        <input type=\"button\" [ngClass]=\"{ disabledBtn:!nomineeDetailsForm.valid, 'activeBtn':nomineeDetailsForm.valid }\" (click)=\"submitForm()\" [disabled]=\"!nomineeDetailsForm.valid\" value=\"NEXT\">\r\n                    </div>\r\n                </form>\r\n    \r\n            </div>\r\n        </div>\r\n  </div>\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pan/pan.component.html": 
        /*!******************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pan/pan.component.html ***!
          \******************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"\" style=\"height:100%\">\r\n    <div class=\"col-md-3 hidden-sm hidden-xs side_outer\">\r\n        <div style=\"    padding: 20% 10% 20% 13%; height:900px\">\r\n            <div>\r\n                <img src=\"./assets/images/pan-icon.png\" style=\"width:90px;\" alt=\"\">\r\n            </div>\r\n            <div class=\"sidepanel_text\" style=\"\">\r\n                <label for=\"\">Income</label><br>\r\n                <label style=\"color: #f37021;\" for=\"\">Details</label>\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"clear-btn-prnt\">\r\n\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-9 col-xs-12 col-sm-112 vertical-scroll\">\r\n        <div class=\"col-md-12  hidden-sm hidden-xs forcedPadding\">\r\n            <app-nav></app-nav>\r\n        </div>\r\n        <form novalidate [formGroup]=\"myForm\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"col-md-12\" class=\"mainContent row\" style=\"margin:5% 4% 0\">\r\n                    <div class=\"col-md-12\">\r\n                        <label class=\"au_orange auLabel col-md-12\" for=\"\">TAXATION ID</label>\r\n                    </div>\r\n                    <div class=\"col-md-12 inputSection\">\r\n                        <div class=\"\">\r\n                            <div class=\"col-md-6\">\r\n                                <span class=\"group\">\r\n                                        <input type=\"text\" \r\n                                        [(ngModel)]=\"pan_num\"\r\n                                         (ngModelChange)=\"verifyPan(pan,'pan')\"\r\n                                          formControlName=\"panNumber\"\r\n                                           #pan \r\n                                           autofocus\r\n                                             class=\"inputBox\" \r\n                                             placeholder=\"Enter TAXATION ID\" \r\n                                             style=\" text-transform: uppercase;\"\r\n                                             maxlength=\"10\"\r\n                                             [UpperCase]=\"true\"\r\n                                             >\r\n                                        <span class=\"bar\"></span>\r\n                                </span>\r\n                                <span *ngIf=\"pan_loader\" style=\"position:absolute; right: 4%; bottom:30%;\">\r\n                               \r\n                                    <img width=\"20px;\" src=\"./assets/images/otp_loader.gif\" alt=\"\">\r\n                               \r\n                            </span>\r\n                                <span *ngIf=\"success_loader\" class=\"styling_error_pan\">\r\n                               \r\n                                <img width=\"20px;\" src=\"./assets/images/group.png\" alt=\"\">\r\n                               \r\n                            </span>\r\n                                <span *ngIf=\"error_loader\" (click)=\"clearPanData()\" class=\"styling_error_pan\">\r\n                                   \r\n                                <img width=\"20px;\" src=\"./assets/images/error_pan.png\" alt=\"\">\r\n                           \r\n                            </span>\r\n                                <span *ngIf=\"warning_laoder\" class=\"styling_error_pan\">\r\n                                   \r\n                                <img width=\"20px;\" src=\"./assets/images/warning.png\" alt=\"\">\r\n                           \r\n                            </span>\r\n                                <span *ngIf=\"name === ''? false: true\" [ngClass]=\"{ success_error: pan_response_type === 'I', error_pan:pan_response_type === 'E', warning_error : pan_response_type === 'W' }\" style=\"float: right;font-weight: bold;\">\r\n                              {{name}}\r\n                                </span>\r\n                            </div>\r\n\r\n                            <div *ngIf=\"myForm.controls['panNumber'].errors &&  (myForm.controls['panNumber'].dirty || myForm.controls['panNumber'].touched) \">\r\n\r\n                                <div class=\"error_color  col-md-6\" *ngIf=\"myForm.controls['panNumber'].errors.required\">\r\n\r\n                                    <span class=\"error_text\">{{pan_required}}</span>\r\n                                </div>\r\n\r\n                                <div class=\"error_color  col-md-6\" *ngIf=\"myForm.controls['panNumber'].errors.pattern\">\r\n\r\n                                    <span class=\"error_text\">{{pan_validated_msg}}</span>\r\n                                </div>\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n\r\n\r\n                    </div>\r\n\r\n                </div>\r\n                <div class=\"col-md-12\" class=\"mainContent row\" style=\"margin:4% 4% 0\">\r\n                    <div class=\"col-md-12\">\r\n                        <label class=\"au_orange auLabel col-md-12\" for=\"\">Occupation</label>\r\n                    </div>\r\n                    <div class=\"col-md-12 inputSection\" style=\"margin:10px;margin-left: 11px;\">\r\n                        <div class=\"\">\r\n                            <select style=\"\" formControlName=\"occupation\" class=\"col-md-6 select_box relation_select\" [(ngModel)]=\"selectedValue.occupation\" name=\"occupation\">\r\n                                  <option disabled   [selected]='true' value=\"\">Select</option>\r\n                                  <option value = \"1\">Student</option>\r\n                                  <option value = \"2\">Goverment</option>\r\n                                  <option value = \"3\">Private</option>\r\n                                  <option value = \"4\">Servicemen</option>\r\n                                  <option value = \"5\">Farming</option>\r\n                                 <!-- <option *ngFor=\"let c of occupation_sorted\"  [value]=\"c.value\">{{c.value}}</option> -->\r\n                              </select>\r\n                        </div>\r\n                        <div *ngIf=\"myForm.controls['occupation'].errors &&  (myForm.controls['occupation'].dirty || myForm.controls['occupation'].touched) \">\r\n\r\n                            <div class=\"error_color occupation_error col-md-6\" *ngIf=\"myForm.controls['occupation'].errors.required\">\r\n\r\n                                <span class=\"error_text\">{{occ_required}}</span>\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n\r\n                    </div>\r\n\r\n                </div>\r\n                <div class=\"col-md-12\" class=\"mainContent row\" style=\"margin:4% 4% 0\">\r\n                    <div class=\"col-md-12\">\r\n                        <label class=\"au_orange auLabel col-md-12\" for=\"\">Annual Income</label>\r\n                    </div>\r\n                    <div class=\"col-md-12 col-sm-12 col-xs-12 inputSection annual-slider\" style=\"\">\r\n                        <div class=\"\">\r\n                            <!-- <mat-slider class=\"example-margin\" formControlName=\"annual_income\" [disabled]=\"disabled\" invert min=\"1\" max=\"5\" step=\"0.5\" value=\"1.5\"thumbLabel tickInterval=\"1\" [(ngModel)]=\"value\" vertical>\r\n                            </mat-slider> -->\r\n                            <!-- <div class=\"slider_bottom\">\r\n                                <ul>\r\n                                    <li class=\"label1\" style=\"\">| <br> &lt; 25k</li>\r\n                                    <li class=\"label2\" style=\"\">| <br>50k</li>\r\n                                    <li class=\"label3\" style=\"\">| <br>100k</li>\r\n                                    <li class=\"label4\" style=\"\">| <br>200k</li>\r\n                                    <li class=\"label5\" style=\"\">| <br>> 500k</li>\r\n                                </ul>\r\n                            </div> -->\r\n                        \r\n                            \r\n                            <input [(ngModel)]=\"Income\" style=\"\r\n                            width: 48%;\r\n                            position: relative;\r\n                            top: 8px;\r\n                        \" formControlName=\"annual_income\" type = \"text\" rows = \"1\" cols = \"20\" (change) = getSalary(Value)/>\r\n                        </div>\r\n\r\n\r\n                    </div>\r\n\r\n                </div>\r\n                <div class=\"col-md-12\" class=\"mainContent row fatca_outer\" style=\"margin:7% 4% 0\">\r\n                    <div class=\"col-md-12\">\r\n                        <label class=\"au_orange auLabel col-md-12\" for=\"\">FICO Declaration</label>\r\n                    </div>\r\n                    <div class=\"col-md-12 inputSection fatca_inner\" style=\"  \">\r\n\r\n                        <div class=\"col-md-12 col-xs-12 col-sm-12 pad0 label-styling-title\">\r\n\r\n                            <label class=\"container-checbox\">\r\n                            <input type=\"checkbox\" formControlName=\"fatca\" id=\"test2\" [checked]=\"\" [(ngModel)]=\"fatca_desc\">\r\n                            <span class=\"checkmark\"></span>\r\n                            <label for=\"test2\" class=\"fatca-style\">FICO Declaration</label>\r\n                            </label>\r\n                        </div>\r\n\r\n\r\n                    </div>\r\n                    <div class=\"col-md-12 inputSection \" style=\"    margin: -3px;  margin-left: 14px;\">\r\n\r\n                        <div class=\"col-md-12  col-xs-12 col-sm-12 pad0 label-styling-title\">\r\n\r\n\r\n                            <label class=\"container-checbox\">\r\n                            <input type=\"checkbox\" formControlName=\"agree_check\" id=\"test3\" [(ngModel)]=\"agree_check\"> \r\n                            <span class=\"checkmark\"></span>\r\n                            <label for=\"test3\" class=\"fatca-style\">I agree to <a href=\"../terms/termsAndCondition.html\" target=\"_blank\">Terms & Conditions</a></label>\r\n                            </label>\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n                <div>\r\n                    <div class=\"next_button button_aligned_mobile\" style=\"margin:5% 7% 5%\">\r\n                        <button [ngClass]=\"{ disabledBtn:!myForm.valid, 'activeBtn':myForm.valid }\" (click)=\"submitForm()\" [disabled]=\"!myForm.valid\">NEXT</button>\r\n\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/personal-info/personal-info.component.html": 
        /*!**************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/personal-info/personal-info.component.html ***!
          \**************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid content-holder overflow-hidden\">\r\n    <div class=\"main-content row d-flex\">\r\n        <div class=\"col-md-3 overflow-hidden side_outer hidden-sm hidden-xs\">\r\n            <div style=\"    padding: 20% 10% 20% 13%;\">\r\n                <div>\r\n                    <img src=\"./assets/images/personalInfo.png\" style=\"width:90px;\" alt=\"loading...\">\r\n                </div>\r\n                <div class=\"sidepanel_text\">\r\n                    <label for=\"\">Personal</label>\r\n                    <br>\r\n                    <label style=\"color: #f37021;\" for=\"\">Details</label>\r\n                </div>\r\n            </div>\r\n            <div class=\"clear-btn-prnt\">\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-9 col-xs-12 col-sm-12 form-container-media\">\r\n            <div class=\"col-md-12 forcedPadding\">\r\n                <app-nav></app-nav>\r\n            </div>\r\n            <div class=\"col-md-12\">\r\n                <div class=\"mainContent row\">\r\n                    <div class=\"col-md-12 col-xs-12 picContainer\">\r\n                        <div _ngcontent-c5=\"\" class=\"col-md-12 SSN_label\" style=\"\">\r\n                            <label _ngcontent-c5=\"\" class=\"auLabel_purple SSN-section-info-ui-fix\" for=\"\">SSN\r\n                                Information</label>\r\n                        </div>\r\n                        <div class=\"col-md-2 col-xs-3\">\r\n                            <div class=\"picDiv\">\r\n                                <!-- <img src=\"data:image/png;base64,{{SSNObject.photograph}}\" alt=\"loading...\"> -->\r\n                                <!-- <img src=\"data:image/png;base64,{{SSNObject.photograph}}\" alt=\"loading...\"> -->\r\n                                <!-- <img src=\"../../../../images/movies/c7803ea3a98a810cbee75ebab4976730.jpeg\" alt=\"loading...\"> -->\r\n                                <!-- <img src=\"api/movie/img/{{SSNObject._id}}\" alt=\"loading...\"> -->\r\n                                <img src = \"../../assets/uploads/{{SSNObject.photo.filename}}\" alt=\"loading...\">\r\n\r\n                                <!-- <img src = \"../../assets/uploads/12ec2285de16a18bd04e41ce503d5cf3.jpeg\" alt=\"loading...\"> -->\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-10 col-xs-7 pad-left-xs\">\r\n\r\n                            <div class=\"col-md-12 infoContainer\">\r\n                                <label class=\"auLabel SSN-section-name-ui-fix\"\r\n                                    for=\"\"><strong>{{SSNObject.name}}</strong></label>\r\n                                <label class=\"auLabel_purple SSN-section-font-ui-fix\" for=\"\"><span><img width=\"13px\"\r\n                                            height=\"15px\" src=\"./assets/images/calendar.png\"\r\n                                            alt=\"\"></span>{{SSNObject.dob}}</label>\r\n                                <label class=\"auLabel_purple SSN-section-font-ui-fix\" for=\"\"><span><img width=\"13px\"\r\n                                            height=\"15px\" src=\"./assets/images/person.png\"\r\n                                            alt=\"\"></span>Male</label>\r\n                                <label class=\"auLabel_purple SSN-section-font-ui-fix\" for=\"\"><span\r\n                                        class=\"img_mobile\"><img width=\"13px\" height=\"15px\"\r\n                                            src=\"./assets/images/location.png\" alt=\"\"></span><span\r\n                                        class=\"label-location-mobile\">{{SSNObject.address}}</span></label>\r\n                            </div>\r\n\r\n                        </div>\r\n                        <div class=\"col-md-8\" style=\"margin-top:1%; margin-left: 2%;\">\r\n                            <label class=\"auLabel aulabel_mobile\" for=\"\">Note: Your SSN Address is captured as your\r\n                                <strong> Permanent Address </strong></label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-12\" style=\"padding: 3% 0 1%;\">\r\n                        <label class=\"auLabel\">Are you residing at the address mentioned above?</label>\r\n                    </div>\r\n                    <div class=\"infoInputContainer\">\r\n                        <form id=\"SSNPersonalDetails\" novalidate [formGroup]=\"SSNPersonalDetails\">\r\n                            <div class=\"col-md-2 pad0 radio-personal-ui-fix f-18 color-input col-sm-3 col-xs-4\">\r\n                                <input type=\"radio\" (change)=\"onSelectionChange()\" name=\"addressChoosen\"\r\n                                    formControlName=\"addressChoosen\" [(ngModel)]=\"SSNObject['addressChoosen']\"\r\n                                    [checked]=\"SSNObject['addressChoosen']=='yes' || SSNObject['addressChoosen']=='YES'\"\r\n                                    [value]=\"true\" id=\"Yes1\">\r\n                                <label for=\"Yes1\" class=\"label-styling-title-perspnal\">Yes</label>\r\n                            </div>\r\n                            <div class=\"col-md-6 radio-personal-ui-fix f-18 color-input col-sm-6 col-xs-8\">\r\n\r\n                                <input type=\"radio\" (change)=\"onSelectionChange()\" name=\"addressChoosen\"\r\n                                    formControlName=\"addressChoosen\" [(ngModel)]=\"SSNObject['addressChoosen']\"\r\n                                    [checked]=\"SSNObject['addressChoosen']=='no' || SSNObject['addressChoosen']=='NO' || SSNObject['addressChoosen']==false\"\r\n                                    [value]=\"false\" id=\"No1\">\r\n                                <label for=\"No1\" class=\"label-styling-title-perspnal\">No</label>\r\n                            </div>\r\n                            <div class=\"col-md-6 error-msg-media\"\r\n                                *ngIf=\"SSNPersonalDetails.controls['addressChoosen'].errors &&  (SSNPersonalDetails.controls['addressChoosen'].dirty || SSNPersonalDetails.controls['addressChoosen'].touched)\">\r\n                                <span><img src=\"./assets//images/error.png\" alt=\"\"></span>\r\n                                <div class=\"error_color error_block\"\r\n                                    *ngIf=\"SSNPersonalDetails.controls['addressChoosen'].errors.required\">\r\n                                    Required\r\n                                </div>\r\n                            </div>\r\n                            <div *ngIf=\"SSNObject['addressChoosen'] === false\" class=\"Personal-form-container\">\r\n                                <div\r\n                                    class=\"col-md-12 pad0 inputContainer inputContainer-ui-fix communication_style_mobile\">\r\n                                    <label class=\"au_orange block auLabel\" for=\"\">Other Address</label>\r\n                                    <div>\r\n                                        <div class=\"col-md-6 inputSection pad0\">\r\n                                            <span class=\"group\">\r\n                                                <input type=\"text\" formControlName=\"addressline1\" maxlength=\"30\"\r\n                                                    [(ngModel)]=\"SSNObject['addressline1']\" class=\"inputBox\"\r\n                                                    placeholder=\"Enter Address Line 1 \">\r\n                                                <span class=\"bar\"></span>\r\n                                            </span>\r\n                                        </div>\r\n                                        <div class=\"col-md-6 error-msg-media\"\r\n                                            *ngIf=\"SSNPersonalDetails.controls['addressline1'].errors &&  (SSNPersonalDetails.controls['addressline1'].dirty || SSNPersonalDetails.controls['addressline1'].touched)\">\r\n                                            <span><img src=\"./assets//images/error.png\" alt=\"\"></span>\r\n                                            <div class=\"error_color error_block\"\r\n                                                *ngIf=\"SSNPersonalDetails.controls['addressline1'].errors.required\">\r\n                                                {{personalDetailsErrObj.addressLine1}}\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-12 pad0 inputContainer\">\r\n                                    <div>\r\n                                        <div class=\"col-md-6 inputSection pad0\">\r\n                                            <span class=\"group\">\r\n                                                <input type=\"text\" formControlName=\"addressline2\" maxlength=\"30\"\r\n                                                    [(ngModel)]=\"SSNObject['addressline2']\" class=\"inputBox\"\r\n                                                    placeholder=\"Enter Address Line 2\">\r\n                                                <span class=\"bar\"></span>\r\n                                            </span>\r\n                                        </div>\r\n                                        <div class=\"col-md-6 error-msg-media\"\r\n                                            *ngIf=\"SSNPersonalDetails.controls['addressline2'].errors &&  (SSNPersonalDetails.controls['addressline2'].dirty || SSNPersonalDetails.controls['addressline2'].touched)\">\r\n                                            <span><img src=\"./assets//images/error.png\" alt=\"\"></span>\r\n                                            <div class=\"error_color error_block\"\r\n                                                *ngIf=\"SSNPersonalDetails.controls['addressline2'].errors.required\">\r\n                                                {{personalDetailsErrObj.addressLine2}}\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"col-md-12 pad0 inputContainer\">\r\n                                    <div>\r\n                                        <div class=\"col-md-6 inputSection pad0\">\r\n                                            <span class=\"group\">\r\n                                                <input type=\"text\" formControlName=\"landmark\"\r\n                                                    [(ngModel)]=\"SSNObject['landmark']\" class=\"inputBox\"\r\n                                                    placeholder=\"Enter Landmark\">\r\n                                                <span class=\"bar\"></span>\r\n                                            </span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-12 pad0 inputContainer\" style=\"position: relative;\">\r\n                                    <div>\r\n                                        <div class=\"col-md-6 inputSection pad0\">\r\n                                            <span class=\"group\">\r\n                                                <input type=\"text\" formControlName=\"pincode\"\r\n                                                    [(ngModel)]=\"SSNObject['pincode']\" OnlyNumber=\"true\"\r\n                                                    maxlength=\"6\" class=\"inputBox\"\r\n                                                    placeholder=\"PIN Code\">\r\n                                                <span class=\"bar\"></span>\r\n                                            </span>\r\n                                        </div>\r\n                                        <div class=\"col-md-6 error-msg-media\"\r\n                                            *ngIf=\"SSNPersonalDetails.controls['pincode'].errors &&  (SSNPersonalDetails.controls['pincode'].dirty || SSNPersonalDetails.controls['pincode'].touched)\">\r\n                                            <span><img src=\"./assets//images/error.png\" alt=\"\"></span>\r\n                                            <div class=\"error_color error_block\"\r\n                                                *ngIf=\"SSNPersonalDetails.controls['pincode'].errors.required || SSNPersonalDetails.controls['pincode'].errors.minlength\">\r\n                                                {{personalDetailsErrObj.pincode}}\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-6 error-msg-media\" >\r\n                                            <div class=\"col-md-2\">\r\n                                                <span><img src=\"./assets//images/error.png\" alt=\"\"></span>\r\n                                            </div>\r\n                                            <div class=\"error_color error_block col-md-10\" style=\"margin-top:0\">\r\n                                                {{pincode123.pincodeErrorMsg}}\r\n                                            </div>\r\n                                        </div>\r\n                                        <div style=\"text-align: left;text-align: left;\r\n                                        position: absolute;\r\n                                        right: 0px;\r\n                                        top: -5px;\" class=\"col-md-6\">\r\n                                            <span>\r\n                                                <img width=\"60px;\" src=\"./assets/images/test.gif\" alt=\"\">\r\n                                            </span>\r\n                                            <div style=\" font-family: Nunito-Regular; font-size: 20px;\">\r\n                                                <span>{{personalDetailsErrObj.getPincode}}</span>\r\n                                                <br>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-12 pad0 inputContainer\">\r\n                                    <div>\r\n                                        <div class=\"col-md-6 inputSection pad0\">\r\n                                            <span class=\"group\">\r\n                                                <input type=\"text\" formControlName=\"city\" \r\n                                                    [(ngModel)]=\"SSNObject['city']\" class=\"inputBox\"\r\n                                                    placeholder=\"City\">\r\n                                                <span class=\"bar\"></span>\r\n                                            </span>\r\n                                        </div>\r\n\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-12 pad0 inputContainer\">\r\n                                    <div>\r\n                                        <div class=\"col-md-6 inputSection pad0\">\r\n                                            <span class=\"group\">\r\n                                                <input type=\"text\" formControlName=\"state\" \r\n                                                    [(ngModel)]=\"SSNObject['state']\" class=\"inputBox\"\r\n                                                    placeholder=\"State\">\r\n                                                <span class=\"bar\"></span>\r\n                                            </span>\r\n                                        </div>\r\n\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div\r\n                                class=\"col-md-12 pad0 inputContainer inputContainer-ui-fix email-section email-mobile-text\">\r\n                                <label class=\"au_orange block auLabel\" for=\"\">Email</label>\r\n                                <div>\r\n                                    <div class=\"col-md-6 inputSection pad0\">\r\n                                        <span class=\"group\">\r\n                                            <input type=\"text\" formControlName=\"email\" maxlength=\"70\"\r\n                                                [(ngModel)]=\"SSNObject['email']\" class=\"inputBox email-personal-cstm\"\r\n                                                placeholder=\"Enter Email Address\">\r\n                                            <span class=\"bar\"></span>\r\n                                        </span>\r\n                                    </div>\r\n                                    <div class=\"col-md-6 error-msg-media\"\r\n                                        *ngIf=\"SSNPersonalDetails.controls['email'].errors &&  (SSNPersonalDetails.controls['email'].dirty || SSNPersonalDetails.controls['email'].touched)\">\r\n                                        <span><img src=\"./assets//images/error.png\" alt=\"\"></span>\r\n                                        <div class=\"error_color error_block\"\r\n                                            *ngIf=\"SSNPersonalDetails.controls['email'].errors.required\">\r\n                                            {{personalDetailsErrObj.emailId}}\r\n                                        </div>\r\n                                        <div class=\"error_color error_block\">\r\n                                            <errors [message]=\"personalDetailsErrObj.emailId\"\r\n                                                [control]=\"SSNPersonalDetails.controls.email\"></errors>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-12 pad0 inputContainer inputContainer-ui-fix\">\r\n                                <label class=\"au_orange auLabel block\" for=\"\">Mother’s Maiden Name</label>\r\n                                <div>\r\n                                    <div class=\"col-md-6 inputSection pad0\">\r\n                                        <span class=\"group\">\r\n                                            <input type=\"text\" formControlName=\"motherName\" maxlength=\"30\"\r\n                                                [(ngModel)]=\"SSNObject['motherMaidenName']\" class=\"inputBox\"\r\n                                                placeholder=\"Enter Mother’s Name\">\r\n                                            <span class=\"bar\"></span>\r\n                                        </span>\r\n                                    </div>\r\n                                    <div class=\"col-md-6 error-msg-media\"\r\n                                        *ngIf=\"SSNPersonalDetails.controls['motherName'].errors &&  (SSNPersonalDetails.controls['motherName'].dirty || SSNPersonalDetails.controls['motherName'].touched)\">\r\n                                        <span><img src=\"./assets//images/error.png\" alt=\"\"></span>\r\n                                        <div class=\"error_color error_block\"\r\n                                            *ngIf=\"SSNPersonalDetails.controls['motherName'].errors.required\">\r\n                                            {{personalDetailsErrObj.mname}}\r\n                                        </div>\r\n                                        <div class=\"error_color error_block\" *ngIf=\"SSNObject['motherName']\">\r\n                                            <errors [message]=\"personalDetailsErrObj.mname\"\r\n                                                [control]=\"SSNPersonalDetails.controls.motherName\"></errors>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-12  inputContainer inputContainer-ui-fix\">\r\n                                <label class=\"au_orange auLabel block\" for=\"\">Father’s Name</label>\r\n                                <div>\r\n\r\n                                    <div class=\"col-md-6 inputSection pad0\">\r\n                                        <span class=\"group\">\r\n                                            <input type=\"text\" formControlName=\"fathersName\"\r\n                                                [(ngModel)]=\"SSNObject['fathersName']\" maxlength=\"30\" class=\"inputBox\"\r\n                                                placeholder=\"Enter Father’s Name\"\r\n                                                [attr.disabled]=\"faNameFilled==true ? 'true' : null\"\r\n                                                [disabled]=\"faNameFilled\">\r\n                                            <!-- class=\"inputBox\" placeholder=\"Enter Father’s Name\" [attr.disabled] = \"SSNObject.fatherNameDisable==true ? 'disabled' : null\" [disabled]=\"faNameFilled\"> -->\r\n                                            <span class=\"bar\"></span>\r\n                                        </span>\r\n                                    </div>\r\n                                    <div class=\"col-md-6 error-msg-media\"\r\n                                        *ngIf=\"SSNPersonalDetails.controls['fathersName'].errors &&  (SSNPersonalDetails.controls['fathersName'].dirty || SSNPersonalDetails.controls['fathersName'].touched)\">\r\n                                        <span><img src=\"./assets//images/error.png\" alt=\"\"></span>\r\n                                        <div class=\"error_color error_block\"\r\n                                            *ngIf=\"SSNPersonalDetails.controls['fathersName'].errors.required\">\r\n                                            {{personalDetailsErrObj.fathersName}}\r\n                                        </div>\r\n                                        <div class=\"error_color error_block\" *ngIf=\"SSNObject['fathersName']\">\r\n                                            <errors [message]=\"personalDetailsErrObj.fathersName\"\r\n                                                [control]=\"SSNPersonalDetails.controls.fathersName\"></errors>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-12 pad0 inputContainer inputContainer-ui-fix\">\r\n                                <label class=\"au_orange auLabel block\" for=\"\">Name on Card</label>\r\n                                <div>\r\n                                    <div class=\"col-md-6 inputSection pad0\">\r\n                                        <span class=\"group\">\r\n                                            <input type=\"text\" formControlName=\"shortName\" maxlength=\"19\"\r\n                                                [(ngModel)]=\"SSNObject['nameOnCard']\" class=\"inputBox\"\r\n                                                placeholder=\"Enter Card Name\" (keydown)='HideError()'>\r\n                                            <span class=\"bar\"></span>\r\n                                        </span>\r\n                                    </div>\r\n                                    <div class=\"col-md-1 inputSection pad0 shortname-div\"><img _ngcontent-c7=\"\" alt=\"\"\r\n                                            height=\"15px\" src=\"./assets/images/info.png\" width=\"13px\"\r\n                                          >\r\n                                    </div>\r\n                                    <!-- <div class=\"col-md-5 error-msg-media\"\r\n                                        >\r\n                                        <span><img src=\"./assets//images/error.png\" alt=\"\"></span>\r\n                                        <div class=\"error_color error_block\"\r\n                                            >\r\n                                            {{personalDetailsErrObj.shortName}}\r\n                                        </div>\r\n\r\n                                    </div> -->\r\n                                    <!-- <div class=\"col-md-5 errorMsgShortname error-msg-media\"\r\n                                        >\r\n                                        <span class=\"col-md-1\"><img src=\"./assets//images/error.png\" alt=\"\"></span>\r\n                                        <div class=\"error_color error_block col-md-11 shortNameMismatch\">\r\n                                            {{personalDetailsErrObj.shortNameMismatch}}\r\n                                        </div>\r\n                                    </div> -->\r\n                                    <div class=\"col-md-12 pad0 auLabel errmsg-ui-fix\">\r\n                                        <label for=\"\">This name will appear on your debit card</label>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"col-md-12  inputContainer inputContainer-ui-fix\">\r\n                                <label class=\"au_orange auLabel col-md-12 pad0\" for=\"\">Marital Status</label>\r\n                                <div>\r\n\r\n                                    <div class=\"col-md-6 inputSection pad0\">\r\n                                        <span class=\"group\">\r\n                                            <select style=\"\" formControlName=\"marital_status\"\r\n                                                class=\"col-md-6 select_box relation_select\" style=\"width: 100%\"\r\n                                                [(ngModel)]=\"selectedValue.marital_status\" name=\"marital_status\">\r\n                                                <!-- <option disabled [selected]='true' value=\"\">Select</option> -->\r\n                                                <option *ngFor=\"let c of maritalStatus\" [value]=\"c\">\r\n                                                    {{c}}\r\n                                                </option>\r\n                                            </select>\r\n                                            <!-- class=\"inputBox\" placeholder=\"Enter Father’s Name\" [attr.disabled] = \"SSNObject.fatherNameDisable==true ? 'disabled' : null\" [disabled]=\"faNameFilled\"> -->\r\n                                            <span class=\"bar\"></span>\r\n                                        </span>\r\n                                    </div>\r\n                                    <div class=\"col-md-6 error-msg-media\"\r\n                                        >\r\n                                        <!-- <span><img src=\"./assets//images/error.png\" alt=\"\"></span> -->\r\n                                        <div class=\"error_color error_block\"\r\n                                            >\r\n                                            <span class=\"error_text\">{{occ_required}}</span>\r\n                                        </div>\r\n                                        <!-- <div class=\"error_color error_block\" *ngIf=\"SSNObject['marital_status']\">\r\n                                            <errors [message]=\"personalDetailsErrObj.marital_status\"\r\n                                                [control]=\"SSNPersonalDetails.controls.marital_status\"></errors>\r\n                                        </div> -->\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <!-- <div class=\"col-md-12\" class=\"mainContent row\" style=\"margin:4% 4% 0\">\r\n                                \r\n                                <div class=\"col-md-12 inputSection\" style=\"margin:10px;margin-left: 11px;\">\r\n                                    \r\n                                    <div\r\n                                        *ngIf=\"SSNPersonalDetails.controls['marital_status'].errors &&  (SSNPersonalDetails.controls['marital_status'].dirty || SSNPersonalDetails.controls['marital_status'].touched) \">\r\n\r\n                                        <div class=\"error_color marital_status_error col-md-6\"\r\n                                            *ngIf=\"SSNPersonalDetails.controls['marital_status'].errors.required\">\r\n\r\n                                            <span class=\"error_text\">{{occ_required}}</span>\r\n                                        </div>\r\n\r\n                                    </div>\r\n\r\n\r\n                                </div>\r\n\r\n                            </div> -->\r\n                            <div class=\"col-md-12 inputContainer button_aligned_mobile\">\r\n                                <button type=\"button\" [disabled]=\"!SSNPersonalDetails.valid\"\r\n                                    [class.activeBtn]=\"SSNPersonalDetails.valid\"\r\n                                    [class.disabledBtn]=\"!SSNPersonalDetails.valid\" (click)=\"submitForm()\"\r\n                                    value=\"NEXT\">NEXT</button>\r\n\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/dialogue/dialogue.component.html": 
        /*!***********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/dialogue/dialogue.component.html ***!
          \***********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"dmToastAnimated dmToast\" *ngIf=\"dialogueCtrls.isShown && dialogueCtrls.type.toLowerCase() == 'toast'\" [ngClass]=\"dialogueCtrls.isShown?'fadeInUp':'fadeOut'\" [ngStyle]=\"dialogueColor[dialogueCtrls.messageType]\" (mouseleave)=\"toastStartTimeout()\"\r\n    (mouseover)=\"toastleaveTimeout\">\r\n    <div class=\"dmDialogueToastIcon\" [ngStyle]=\"dialogueColorIcon[dialogueCtrls.messageType]\">\r\n        <em class=\"fa fa-exclamation-circle\" aria-hidden=\"true\" *ngIf=\"dialogueCtrls.messageType == 'error' ? true: false\"></em>\r\n        <em class=\"fa fa-check\" aria-hidden=\"true\" *ngIf=\"dialogueCtrls.messageType == 'success' ? true: false\"></em>\r\n        <em class=\"fa fa-exclamation-triangle\" aria-hidden=\"true\" *ngIf=\"dialogueCtrls.messageType == 'warning' ? true: false\"></em>\r\n    </div>\r\n    <div class=\"dmToastMessage\">\r\n        {{dialogueCtrls.message}}\r\n    </div>\r\n    <div class=\"dmTransition dmToastClose\" (click)=\"actionClick(0)\">\r\n        <span>&#9932;</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"dmAnimated cdk-overlay-container\" *ngIf=\"(dialogueCtrls.isShown && dialogueCtrls.type.toLowerCase() == 'alert') || (dialogueCtrls.isShown && dialogueCtrls.type.toLowerCase() == 'confirm')\" [ngClass]=\"dialogueCtrls.isShown?'fadeInUp':'fadeOut'\">\r\n\r\n    <div class=\"cdk-overlay-backdrop cdk-overlay-dark-backdrop cdk-overlay-backdrop-showing\"></div>\r\n    <div class=\"cdk-global-overlay-wrapper\" style=\"justify-content: center;align-items: center;\">\r\n        <div id=\"cdk-overlay-0\" class=\"cdk-overlay-pane width_styling\" dir=\"ltr\" style=\"max-width: 80vw;pointer-events: auto;width: 400px;position: static;\">\r\n            <div tabindex=\"0\" class=\"cdk-visually-hidden cdk-focus-trap-anchor\"></div>\r\n            <div class=\"mat-dialog-container\">\r\n                <div class=\"dmDialogueHeader\">\r\n                    <div class=\"dmDialogueClose\" (click)=\"actionClick(3)\">\r\n                        <span class=\"dmTransition\">\r\n                                    &#9932;\r\n                                </span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"dmDialogueBody\">\r\n                    <div>\r\n\r\n                    </div>\r\n                    <div class=\"dmDialogTitleBody\">\r\n                        <img *ngIf=\"dialogueCtrls.messageType == 'error' ? true: false\" alt=\"\" src=\"./assets/images/oh-snap.png\" style=\"width:70px;\">\r\n                        <img *ngIf=\"dialogueCtrls.messageType == 'success' ? true: false\" alt=\"\" src=\"./assets/images/are-you-sure.png\" style=\"width:70px;\">\r\n                        <img *ngIf=\"dialogueCtrls.messageType == 'Confirm' ? true: false\" alt=\"\" src=\"./assets/images/congratulations-icon.png\" style=\"width:70px;\">\r\n                        <div>\r\n                            <span class=\"dmDialogTitleHeading oh-snap\">{{dialogueCtrls.title}}</span>\r\n                            <p class=\"p-center-errpor\">{{dialogueCtrls.message}}</p>\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n                <div class=\"dmDialogueActions\" *ngIf=\"dialogueCtrls.messageType  == 'error' ? true: false\">\r\n\r\n                    <button *ngFor=\"let ctrl of dialogueCtrls.actionLabel ; let i = index \" [ngStyle]=\"dialogueColorAlert[dialogueCtrls.messageType]\" (click)=\"actionClick(i)\" ng-focus=\"dialogueCtrls.isShown && $index==0\" class=\"try-again\">OK</button>\r\n                </div>\r\n                <div class=\"dmDialogueActions\" *ngIf=\"dialogueCtrls.messageType == 'success' ? true: false\">\r\n                    <button *ngFor=\"let ctrl of dialogueCtrls.actionLabel ; let i = index \" [ngStyle]=\"dialogueColorAlert[dialogueCtrls.messageType]\" (click)=\"actionClick(i)\" ng-focus=\"dialogueCtrls.isShown && $index==0\" class=\"try-again\">Ok</button>\r\n                </div>\r\n                <div class=\"dmDialogueActions\" *ngIf=\"dialogueCtrls.messageType == 'Confirm' ? true: false\">\r\n                    <button *ngFor=\"let ctrl of dialogueCtrls.actionLabel ; let i = index \" [ngStyle]=\"dialogueColorAlert[dialogueCtrls.messageType]\" (click)=\"actionClick(i)\" ng-focus=\"dialogueCtrls.isShown && $index==0\" class=\"try-again\">{{ctrl}}</button>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/loader/loader.component.html": 
        /*!*******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/loader/loader.component.html ***!
          \*******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"loaderContainer\" *ngIf=\"showLoader\">\r\n    <div>\r\n        <div class=\"loader\" style=\"    margin-right: 45%;\">\r\n            <img style=\"width:100px;\" src=\"./assets/images/Rolling.svg \" alt=\" \">\r\n            \r\n        </div>\r\n        <div class=\"loadingMsg \">\r\n            <span>{{message}}</span>\r\n        </div>\r\n    </div>\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.component.html": 
        /*!**************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.component.html ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div style=\"height:100%\" class=\"background-image-welcome\">\r\n  <div class=\"mainContent row mainContent_responsive\" style=\"\r\n  z-index: 1000;\r\n  position: absolute;\r\n\">\r\n    <div class=\"col-md-12 hidden-sm hidden-xs\" style=\"\r\n    top: 40px;\r\n    width: 116%;\r\n    left: 15%;\r\n\">\r\n      <div class=\"welcome\"></div>\r\n      <div class=\"col-md-12\">\r\n        <div class=\"col-md-4 grids grid-1\">\r\n          <div class=\"img-div\"><img src=\"./assets/images/stopwatch.png\" alt=\"loading...\"></div>\r\n          <div class=\"label-heading pos-rel-1\">\r\n            Instant A/C Opening\r\n          </div>\r\n          <div class=\"label-content pos-rel-1\">Create bank account in no time!<br> All you need is your Taxation ID,\r\n            SSN<br> Card and a few minutes!\r\n          </div>\r\n        </div>\r\n        <!-- <div class=\"col-md-4 grids grid-2\">\r\n                    <div class=\"img-div\"><img src=\"./assets/images/interest-rate.png\" alt=\"loading...\"></div>\r\n                    <div class=\"pos-rel-2\">\r\n                        <div class=\"label-heading label-heading-2\">\r\n                            Higher Interest Rate\r\n                        </div>\r\n                        <div class=\"label-content\">\r\n                            Earn annualized interest of 6.96%*\r\n                        </div>\r\n                        <div class=\"label-content bold\">\r\n                            MONTHLY <br> INTEREST PAYOUT\r\n                        </div>\r\n                    </div>\r\n                </div> -->\r\n\r\n        <div class=\"col-md-4 grids grid-2\">\r\n          <div class=\"img-div\"><img src=\"./assets/images/interest-rate 2.png\" alt=\"loading...\"></div>\r\n          <div class=\"pos-rel-2\">\r\n            <div class=\"label-heading label-heading-2\">\r\n              Higher Interest Rate\r\n            </div>\r\n            <div class=\"label-content bold\" style=\"font-size: 17px\">\r\n              Earn annualized interest of 1.95%*\r\n            </div>\r\n            <div class=\"label-content\" style=\"font-size: 12px\">\r\n              WITH MONTHLY INTEREST PAYOUT\r\n            </div>\r\n            <div class=\"label-content\" style=\"font-size: 10px\">\r\n              *on balances over $100k & above\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-4 grids grid-3\">\r\n          <div class=\"img-div\"><img src=\"./assets/images/debit-card_welcome 2.png\" alt=\"loading...\"></div>\r\n          <div class=\"label-heading label-heading-3 pos-rel-3\">\r\n            Virtual Debit Card\r\n          </div>\r\n          <div class=\"label-content pos-rel-3\">\r\n            Virtual Debit Card to carry out<br> quick online transactions\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-12\" class=\"get-started-parent\">\r\n        <button class=\"get-started\" (click)=\"callMobile()\">GET STARTED</button>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-12 col-xs-12 hidden-md hidden-lg\" style=\"height:100% ;    padding-right: 0;\">\r\n      <ui-carousel [infinite]=\"true\" [fade]=\"false\" [speed]=\"2000\" height=\"70%\" width=\"100%\">\r\n        <ui-carousel-item>\r\n          <div class=\"img-div\" style=\"padding-top:10px;\"><img style=\"width:150px;\" src=\"./assets/images/stopwatch.png\" alt=\"loading...\"></div>\r\n          <div style=\"padding-top:15%;\" class=\"label-heading \">\r\n            WELCOME!\r\n          </div>\r\n          <div class=\"label-content \">Thank You for your interest in Solomon Bank.\r\n            <br> Open a Savings A/C instantly.\r\n          </div>\r\n          <div style=\"\">\r\n            <div class=\"product_style\">\r\n              a product of\r\n            </div>\r\n            <div class=\"img-div\" style=\"padding-left: 20px;\"><img src=\"./assets/images/Bank_Stamp_v2.png\" alt=\"loading...\"></div>\r\n          </div>\r\n        </ui-carousel-item>\r\n\r\n        <ui-carousel-item>\r\n          <div class=\"img-div\" style=\"padding-top: 10px;\"><img style=\"width:150px;\" src=\"./assets/images/Bank_Stamp_v2.png\"\r\n              alt=\"loading...\"></div>\r\n          <div class=\"img-div\" style=\"padding-right: 25px;\"><img src=\"./assets/images/interest-rate 2.png\" alt=\"loading...\"\r\n              style=\"width: 85px;\"></div>\r\n          <div style=\"\" class=\"label-heading_high \">\r\n            Higher Interest Rate\r\n          </div>\r\n          <div class=\"earn_style\" style=\"font-size: 15px;\">\r\n            Earn higher interest of up to 2.95% p.a with\r\n          </div>\r\n          <div class=\"label-content\" style=\"font-size: 12px;\">WITH MONTHLY INTEREST PAYOUT\r\n          </div>\r\n          <div class=\"label-content\" style=\"font-size: 10px\">\r\n            *on balances over $100k & above\r\n          </div>\r\n\r\n\r\n        </ui-carousel-item>\r\n\r\n        <ui-carousel-item>\r\n          <div class=\"img-div\" style=\"padding-top: 10px;\"><img style=\"width:150px;\" src=\"./assets/images/Bank_Stamp_v2.png\"\r\n              alt=\"loading...\"></div>\r\n          <div class=\"img-div\" style=\"padding-right: 25px;\"><img src=\"./assets/images/debit-card_welcome 2.png\" style=\"width: 200px;\"\r\n              alt=\"loading...\"></div>\r\n          <div style=\"\" class=\"label-heading_high \">\r\n            Virtual Debit Card\r\n          </div>\r\n          <div class=\"earn_style_page3\">\r\n            Virtual Debit Card to carry out<br> quick online transactions\r\n          </div>\r\n\r\n        </ui-carousel-item>\r\n\r\n\r\n      </ui-carousel>\r\n      <div class=\"col-xs-12\" class=\"get-started-parent-1\">\r\n        <button class=\"get-started\" (click)=\"callMobile()\">GET STARTED</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/SSN/SSN.component.css": 
        /*!***************************************!*\
          !*** ./src/app/SSN/SSN.component.css ***!
          \***************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".showOtp {\r\n    display: block;\r\n}\r\n\r\n.hideOtp {\r\n    display: none;\r\n    \r\n}\r\n\r\n.active {\r\n    width: 100%;\r\n    border-bottom: 2px solid #3879e8 !important;\r\n    margin: 2px;\r\n    height: 25px;\r\n    float: left;\r\n    color: #3879e8 !important;\r\n}\r\n\r\n.error_color.error_block {\r\n    margin-top: 6px;\r\n    font-size: 12px;\r\n    font-family: Nunito-Regular;\r\n}\r\n\r\n.helpingSection-ui-fix-SSN {\r\n    margin-top: -4px !important;\r\n}\r\n\r\n.SSNBtn {\r\n    font-size: 12px;\r\n    padding-top: 12px;\r\n    padding-bottom: 12px;\r\n    padding-right: 50px;\r\n    padding-left: 50px;\r\n    border-radius: 0;\r\n}\r\n\r\n.float-left {\r\n    float: left;\r\n}\r\n\r\n.space-right-0 {\r\n    padding-right: 0;\r\n    margin-right: 0;\r\n}\r\n\r\n.pad-left-0 {\r\n    padding-left: 0;\r\n}\r\n\r\n.txt-indent {\r\n    text-indent: 5px;\r\n}\r\n\r\n.button-align {\r\n    margin-left: 50px;\r\n    margin-top: 1%;\r\n}\r\n\r\n.margin-left-style {\r\n    margin-left: 4%;\r\n}\r\n\r\n@media screen and (max-width: 992px) {\r\n    .margin-left-style {\r\n        margin-left: initial !important;\r\n        padding: 0;\r\n    }\r\n    .button-align {\r\n        margin-left: initial;\r\n        margin-top: 35% !important;\r\n        text-align: center;\r\n    }\r\n    .mobile_loader {\r\n        margin-left: inherit !important;\r\n        width: inherit !important;\r\n    }\r\n    .tnclabel.mar-pad-left-0>.label-styling {\r\n        margin-left: 18px;\r\n        float: left;\r\n        margin-top: 0;\r\n        padding-top: 0;\r\n    }\r\n    .activeBtn,\r\n    .disabledBtn {\r\n        padding-top: 12px !important;\r\n        padding-bottom: 12px !important;\r\n        padding-right: 50px !important;\r\n        padding-left: 50px !important;\r\n    }\r\n    .pos-realtive {\r\n        position: relative;\r\n        right: -14px;\r\n    }\r\n}\r\n\r\n.mobile_loader {\r\n    margin-left: 10%;\r\n    width: 480px;\r\n    text-align: center;\r\n}\r\n\r\n.otploader {\r\n    margin: 0;\r\n    margin-top: 7%;\r\n}\r\n\r\n.activeBtn {\r\n    padding-top: 12px;\r\n    padding-bottom: 12px;\r\n    padding-right: 50px;\r\n    padding-left: 50px;\r\n    border-radius: 0;\r\n    outline: none;\r\n    padding: 1% 6%;\r\n    background: #f37021;\r\n    border-radius: 2px;\r\n    border: none;\r\n    cursor: pointer;\r\n    color: #fff;\r\n    padding-top: 12px;\r\n    padding-bottom: 12px;\r\n    padding-right: 50px;\r\n    padding-left: 50px;\r\n    border-radius: 0;\r\n}\r\n\r\n.mobile_loader {\r\n    margin-left: 2%;\r\n    width: 480px;\r\n    text-align: center;\r\n    top: -26px;\r\n    position: relative;\r\n}\r\n\r\n.button-align-submit {\r\n    margin-left: 0;\r\n}\r\n\r\n.resend {\r\n    text-decoration: underline;\r\n    color: #5959b1;\r\n    cursor: pointer;\r\n}\r\n\r\n.mainContent-otp {\r\n    margin-left: 0;\r\n}\r\n\r\n/* Base for label styling */\r\n\r\n.custom-check[type=\"checkbox\"]:not(:checked),\r\n.custom-check[type=\"checkbox\"]:checked {\r\n    position: absolute;\r\n    left: -9999px;\r\n}\r\n\r\n.custom-check[type=\"checkbox\"]:not(:checked)+label,\r\n.custom-check[type=\"checkbox\"]:checked+label {\r\n    position: relative;\r\n    padding-left: 1.95em;\r\n    cursor: pointer;\r\n}\r\n\r\n/* checkbox aspect */\r\n\r\n.custom-check[type=\"checkbox\"]:not(:checked)+label:before,\r\n.custom-check[type=\"checkbox\"]:checked+label:before {\r\n    content: '';\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    width: 1.60em;\r\n    height: 1.60em;\r\n    border: 2px solid #ccc;\r\n    background: #fff;\r\n    /*border-radius: 4px;*/\r\n    box-shadow: inset 0 1px 3px rgba(0, 0, 0, .1);\r\n}\r\n\r\n/* checked mark aspect */\r\n\r\n.custom-check[type=\"checkbox\"]:not(:checked)+label:after,\r\n.custom-check[type=\"checkbox\"]:checked+label:after {\r\n    content: '■';\r\n    position: absolute;\r\n    top: 0.007em;\r\n    left: .099em;\r\n    font-size: 2em;\r\n    line-height: 0.61;\r\n    color: #e87722;\r\n    transition: all .2s;\r\n    font-family: Helvetica, Arial, sans-serif;\r\n}\r\n\r\n/* checked mark aspect changes */\r\n\r\n.custom-check[type=\"checkbox\"]:not(:checked)+label:after {\r\n    opacity: 0;\r\n    transform: scale(0);\r\n}\r\n\r\n.custom-check[type=\"checkbox\"]:checked+label:after {\r\n    opacity: 1;\r\n    transform: scale(1);\r\n}\r\n\r\n/* disabled checkbox */\r\n\r\n.custom-check[type=\"checkbox\"]:disabled:not(:checked)+label:before,\r\n.custom-check[type=\"checkbox\"]:disabled:checked+label:before {\r\n    box-shadow: none;\r\n    border-color: #bbb;\r\n    background-color: #ddd;\r\n}\r\n\r\n.custom-check[type=\"checkbox\"]:disabled:checked+label:after {\r\n    color: #999;\r\n}\r\n\r\n.custom-check[type=\"checkbox\"]:disabled+label {\r\n    color: #aaa;\r\n}\r\n\r\n/* accessibility */\r\n\r\n.custom-check[type=\"checkbox\"]:checked:focus+label:before,\r\n.custom-check[type=\"checkbox\"]:not(:checked):focus+label:before {\r\n    border: 2px dotted blue;\r\n}\r\n\r\n/* hover style just for information */\r\n\r\nlabel:hover:before {\r\n    border: 2px solid #4778d9!important;\r\n}\r\n\r\n.tnclabel {\r\n    margin-top: 11px;\r\n}\r\n\r\n.pos-error {\r\n    /* padding-left: 0; */\r\n    position: relative;\r\n    padding-bottom: 1px;\r\n    padding-top: 4px;\r\n    padding-left: 0px;\r\n    font-family: Nunito-Regular;\r\n    font-size: 12px;\r\n}\r\n\r\n.label-styling {\r\n    font-family: Nunito-Regular;\r\n    color: #646464;\r\n    font-size: 12px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    line-height: normal;\r\n    letter-spacing: 0px;\r\n    padding-top: 10px;\r\n}\r\n\r\n.mainContent-otp,\r\n.mar-pad-0 {\r\n    margin-right: 0;\r\n    padding-right: 0;\r\n}\r\n\r\n.mar-pad-left-0 {\r\n    margin-left: 0;\r\n    padding-left: 0;\r\n}\r\n\r\n.pos-realtive {\r\n    position: relative;\r\n    top: -12px\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvU1NOL1NTTi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7O0FBRWpCOztBQUVBO0lBQ0ksV0FBVztJQUNYLDJDQUEyQztJQUMzQyxXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZUFBZTtJQUNmLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0k7UUFDSSwrQkFBK0I7UUFDL0IsVUFBVTtJQUNkO0lBQ0E7UUFDSSxvQkFBb0I7UUFDcEIsMEJBQTBCO1FBQzFCLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksK0JBQStCO1FBQy9CLHlCQUF5QjtJQUM3QjtJQUNBO1FBQ0ksaUJBQWlCO1FBQ2pCLFdBQVc7UUFDWCxhQUFhO1FBQ2IsY0FBYztJQUNsQjtJQUNBOztRQUVJLDRCQUE0QjtRQUM1QiwrQkFBK0I7UUFDL0IsOEJBQThCO1FBQzlCLDZCQUE2QjtJQUNqQztJQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLFlBQVk7SUFDaEI7QUFDSjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksU0FBUztJQUNULGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZUFBZTtJQUNmLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUdBLDJCQUEyQjs7QUFFM0I7O0lBRUksa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7O0FBRUE7O0lBRUksa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixlQUFlO0FBQ25COztBQUdBLG9CQUFvQjs7QUFFcEI7O0lBRUksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsTUFBTTtJQUNOLGFBQWE7SUFDYixjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsNkNBQTZDO0FBQ2pEOztBQUdBLHdCQUF3Qjs7QUFFeEI7O0lBRUksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtJQUNaLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsY0FBYztJQUNkLG1CQUFtQjtJQUNuQix5Q0FBeUM7QUFDN0M7O0FBR0EsZ0NBQWdDOztBQUVoQztJQUNJLFVBQVU7SUFDVixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsbUJBQW1CO0FBQ3ZCOztBQUdBLHNCQUFzQjs7QUFFdEI7O0lBRUksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBR0Esa0JBQWtCOztBQUVsQjs7SUFFSSx1QkFBdUI7QUFDM0I7O0FBR0EscUNBQXFDOztBQUVyQztJQUNJLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsMkJBQTJCO0lBQzNCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsY0FBYztJQUNkLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7QUFFQTs7SUFFSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL1NTTi9TU04uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaG93T3RwIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uaGlkZU90cCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgXHJcbn1cclxuXHJcbi5hY3RpdmUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzM4NzllOCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAycHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGNvbG9yOiAjMzg3OWU4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5lcnJvcl9jb2xvci5lcnJvcl9ibG9jayB7XHJcbiAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LWZhbWlseTogTnVuaXRvLVJlZ3VsYXI7XHJcbn1cclxuXHJcbi5oZWxwaW5nU2VjdGlvbi11aS1maXgtU1NOIHtcclxuICAgIG1hcmdpbi10b3A6IC00cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLlNTTkJ0biB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTJweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcclxuICAgIHBhZGRpbmctbGVmdDogNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbn1cclxuXHJcbi5mbG9hdC1sZWZ0IHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4uc3BhY2UtcmlnaHQtMCB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG59XHJcblxyXG4ucGFkLWxlZnQtMCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbn1cclxuXHJcbi50eHQtaW5kZW50IHtcclxuICAgIHRleHQtaW5kZW50OiA1cHg7XHJcbn1cclxuXHJcbi5idXR0b24tYWxpZ24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxJTtcclxufVxyXG5cclxuLm1hcmdpbi1sZWZ0LXN0eWxlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA0JTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgIC5tYXJnaW4tbGVmdC1zdHlsZSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gICAgLmJ1dHRvbi1hbGlnbiB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGluaXRpYWw7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMzUlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLm1vYmlsZV9sb2FkZXIge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBpbmhlcml0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgd2lkdGg6IGluaGVyaXQgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC50bmNsYWJlbC5tYXItcGFkLWxlZnQtMD4ubGFiZWwtc3R5bGluZyB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE4cHg7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgIH1cclxuICAgIC5hY3RpdmVCdG4sXHJcbiAgICAuZGlzYWJsZWRCdG4ge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEycHggIWltcG9ydGFudDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAucG9zLXJlYWx0aXZlIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgcmlnaHQ6IC0xNHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ubW9iaWxlX2xvYWRlciB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAgd2lkdGg6IDQ4MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ub3RwbG9hZGVyIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIG1hcmdpbi10b3A6IDclO1xyXG59XHJcblxyXG4uYWN0aXZlQnRuIHtcclxuICAgIHBhZGRpbmctdG9wOiAxMnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEycHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAxJSA2JTtcclxuICAgIGJhY2tncm91bmQ6ICNmMzcwMjE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmctdG9wOiAxMnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEycHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxufVxyXG5cclxuLm1vYmlsZV9sb2FkZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gICAgd2lkdGg6IDQ4MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdG9wOiAtMjZweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmJ1dHRvbi1hbGlnbi1zdWJtaXQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbn1cclxuXHJcbi5yZXNlbmQge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICBjb2xvcjogIzU5NTliMTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm1haW5Db250ZW50LW90cCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxufVxyXG5cclxuXHJcbi8qIEJhc2UgZm9yIGxhYmVsIHN0eWxpbmcgKi9cclxuXHJcbi5jdXN0b20tY2hlY2tbdHlwZT1cImNoZWNrYm94XCJdOm5vdCg6Y2hlY2tlZCksXHJcbi5jdXN0b20tY2hlY2tbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogLTk5OTlweDtcclxufVxyXG5cclxuLmN1c3RvbS1jaGVja1t0eXBlPVwiY2hlY2tib3hcIl06bm90KDpjaGVja2VkKStsYWJlbCxcclxuLmN1c3RvbS1jaGVja1t0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCtsYWJlbCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEuOTVlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuXHJcbi8qIGNoZWNrYm94IGFzcGVjdCAqL1xyXG5cclxuLmN1c3RvbS1jaGVja1t0eXBlPVwiY2hlY2tib3hcIl06bm90KDpjaGVja2VkKStsYWJlbDpiZWZvcmUsXHJcbi5jdXN0b20tY2hlY2tbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQrbGFiZWw6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxLjYwZW07XHJcbiAgICBoZWlnaHQ6IDEuNjBlbTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNjY2M7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgLypib3JkZXItcmFkaXVzOiA0cHg7Ki9cclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIC4xKTtcclxufVxyXG5cclxuXHJcbi8qIGNoZWNrZWQgbWFyayBhc3BlY3QgKi9cclxuXHJcbi5jdXN0b20tY2hlY2tbdHlwZT1cImNoZWNrYm94XCJdOm5vdCg6Y2hlY2tlZCkrbGFiZWw6YWZ0ZXIsXHJcbi5jdXN0b20tY2hlY2tbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQrbGFiZWw6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJ+KWoCc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDAuMDA3ZW07XHJcbiAgICBsZWZ0OiAuMDk5ZW07XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAwLjYxO1xyXG4gICAgY29sb3I6ICNlODc3MjI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzO1xyXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcblxyXG4vKiBjaGVja2VkIG1hcmsgYXNwZWN0IGNoYW5nZXMgKi9cclxuXHJcbi5jdXN0b20tY2hlY2tbdHlwZT1cImNoZWNrYm94XCJdOm5vdCg6Y2hlY2tlZCkrbGFiZWw6YWZ0ZXIge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbn1cclxuXHJcbi5jdXN0b20tY2hlY2tbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQrbGFiZWw6YWZ0ZXIge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbn1cclxuXHJcblxyXG4vKiBkaXNhYmxlZCBjaGVja2JveCAqL1xyXG5cclxuLmN1c3RvbS1jaGVja1t0eXBlPVwiY2hlY2tib3hcIl06ZGlzYWJsZWQ6bm90KDpjaGVja2VkKStsYWJlbDpiZWZvcmUsXHJcbi5jdXN0b20tY2hlY2tbdHlwZT1cImNoZWNrYm94XCJdOmRpc2FibGVkOmNoZWNrZWQrbGFiZWw6YmVmb3JlIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBib3JkZXItY29sb3I6ICNiYmI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG59XHJcblxyXG4uY3VzdG9tLWNoZWNrW3R5cGU9XCJjaGVja2JveFwiXTpkaXNhYmxlZDpjaGVja2VkK2xhYmVsOmFmdGVyIHtcclxuICAgIGNvbG9yOiAjOTk5O1xyXG59XHJcblxyXG4uY3VzdG9tLWNoZWNrW3R5cGU9XCJjaGVja2JveFwiXTpkaXNhYmxlZCtsYWJlbCB7XHJcbiAgICBjb2xvcjogI2FhYTtcclxufVxyXG5cclxuXHJcbi8qIGFjY2Vzc2liaWxpdHkgKi9cclxuXHJcbi5jdXN0b20tY2hlY2tbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQ6Zm9jdXMrbGFiZWw6YmVmb3JlLFxyXG4uY3VzdG9tLWNoZWNrW3R5cGU9XCJjaGVja2JveFwiXTpub3QoOmNoZWNrZWQpOmZvY3VzK2xhYmVsOmJlZm9yZSB7XHJcbiAgICBib3JkZXI6IDJweCBkb3R0ZWQgYmx1ZTtcclxufVxyXG5cclxuXHJcbi8qIGhvdmVyIHN0eWxlIGp1c3QgZm9yIGluZm9ybWF0aW9uICovXHJcblxyXG5sYWJlbDpob3ZlcjpiZWZvcmUge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzQ3NzhkOSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50bmNsYWJlbCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMXB4O1xyXG59XHJcblxyXG4ucG9zLWVycm9yIHtcclxuICAgIC8qIHBhZGRpbmctbGVmdDogMDsgKi9cclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICBmb250LWZhbWlseTogTnVuaXRvLVJlZ3VsYXI7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5sYWJlbC1zdHlsaW5nIHtcclxuICAgIGZvbnQtZmFtaWx5OiBOdW5pdG8tUmVndWxhcjtcclxuICAgIGNvbG9yOiAjNjQ2NDY0O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG5cclxuLm1haW5Db250ZW50LW90cCxcclxuLm1hci1wYWQtMCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG59XHJcblxyXG4ubWFyLXBhZC1sZWZ0LTAge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbn1cclxuXHJcbi5wb3MtcmVhbHRpdmUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAtMTJweFxyXG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/SSN/SSN.component.ts": 
        /*!**************************************!*\
          !*** ./src/app/SSN/SSN.component.ts ***!
          \**************************************/
        /*! exports provided: SSNComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SSNComponent", function () { return SSNComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
            /* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
            /* harmony import */ var _shared_dialogue_dialogue_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/dialogue/dialogue.service */ "./src/app/shared/dialogue/dialogue.service.ts");
            /* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _mobile_mobile_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../mobile/mobile.service */ "./src/app/mobile/mobile.service.ts");
            /* harmony import */ var rxjs_add_observable_timer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/add/observable/timer */ "./node_modules/rxjs-compat/_esm2015/add/observable/timer.js");
            /* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm2015/Observable.js");
            /* harmony import */ var _shared_screen_name__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/screen.name */ "./src/app/shared/screen.name.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _shared_progress_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/progress.service */ "./src/app/shared/progress.service.ts");
            /* harmony import */ var _shared_activate_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/activate.module */ "./src/app/shared/activate.module.ts");
            /* harmony import */ var _shared_loader_loader_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shared/loader/loader.service */ "./src/app/shared/loader/loader.service.ts");
            /* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
            //import { MyPipe } from '../commonfilters';
            //import { AddharService } from '../addhar-service';
            //import { Tree } from '@angular/router/src/utils/tree';
            var SSNComponent = /** @class */ (function () {
                function SSNComponent(_service, appLoader, http, _mobileService, route, dialogueservice, routeSnap, 
                // private SSNService: AddharService,
                progressService, guardService, _AuthService, nameService) {
                    // this.masterData = this._service.getMasterData();
                    this._service = _service;
                    this.appLoader = appLoader;
                    this.http = http;
                    this._mobileService = _mobileService;
                    this.route = route;
                    this.dialogueservice = dialogueservice;
                    this.routeSnap = routeSnap;
                    this.progressService = progressService;
                    this.guardService = guardService;
                    this._AuthService = _AuthService;
                    this.nameService = nameService;
                    this.otp_loader = false;
                    this.otp_show = false;
                    this.pending_btn = false;
                    this.SSNValue = ''; // '748698479007' 684627351474 628563293152;
                    this.saCode = 'a7ee81';
                    this.purpose = 'OTP generation';
                    this.modality = 'otp';
                    this.channel = 'SMS';
                    this.api = 'KYC';
                    this.request_Id = '';
                    this.isReadOnly = false;
                    this.counter = 10;
                    this.resend_display = false;
                    this.timestamp_generate = new Date().getTime();
                    // successUrl = 'http://localhost:4200/#/SSN';
                    // failureUrl = 'http://localhost:4200/#/SSN';
                    //successUrl = 'http://180.179.15.45/AU_ABHI/#/SSN'; // sit
                    // failureUrl = 'http://180.179.15.45/AU_ABHI/#/SSN'; // sit
                    // successUrl = 'http://14.141.175.44:7001/AU_ABHI/#/SSN';  //uat 
                    // failureUrl = 'http://14.141.175.44:7001/AU_ABHI/#/SSN';   // uat
                    this.salt = '8b271dc585';
                    this.valid_number = false;
                    this.queryParamObject = {
                        'status': '',
                        'err': '',
                        'hash': '',
                        'requestId': '',
                        'uuid': '',
                        'SSNNum': '',
                        'sa_code': ''
                    };
                    this.SSNErrObj = {
                        'required': '',
                        'failure': ''
                    };
                    this.postdata = {
                        ssn: null
                    };
                    this.SSNBridgeFailure = false;
                    this.loaderWidth = "90";
                    // // // console.log(this._service.checkMessageMaster());
                    // // this._service.checkMessageMaster();
                    // // let message = this.routeSnap.snapshot.data['configData'];
                    // // this.appLoader.hideLoader();
                    // // if (message !== "autoSync") {
                    // //   const get_messageMaster = JSON.parse(message[0]['data'][0]["data_object"]);
                    // //   this._service.setMessageMaster(get_messageMaster);
                    // // }
                    // route.routerState.root.queryParams.subscribe(
                    //   (queryParam: any) => {
                    //     this.status = queryParam['success'] || '';
                    //     if (this.status.toUpperCase() == 'TRUE') {
                    //       const messageMaster = this._service.fetchMessage();
                    //       const saCode = 'a7ee81';
                    //       const saltCode = '8b271dc585';
                    //       this._service.setMessageMaster(messageMaster);
                    //       // this._service.removeMessageMaster();
                    //       this.storedSSN = this.SSNService.getSSNNumber();
                    //       const hashSequence = queryParam['uuid'] + '|' + saCode + '|' + queryParam['SSNId'] + '|' + queryParam['requestId'] + '|' + saltCode;
                    //       const hash = this.SHA256(hashSequence);
                    //       this.queryParamObject = {
                    //         'status': queryParam['success'] || '',
                    //         'err': queryParam['err'] || '',
                    //         'hash': hash || '',
                    //         'requestId': queryParam['requestId'] || '',
                    //         'uuid': queryParam['uuid'] || '',
                    //         'SSNNum': queryParam['SSNId'] || '',
                    //         'sa_code': 'a7ee81',
                    //       };
                    //       this.SSNService.setSSNCredentials(this.queryParamObject);
                    //       // this.SSNService.clearSSN();
                    //       this.guardService.STEPS['personalInfo'] = true;
                    //       this.route.navigate(['/personalInfo']);
                    //     } else if (this.status.toUpperCase() == 'FALSE') {
                    //       const messageMaster = this._service.fetchMessage();
                    //       this._service.setMessageMaster(messageMaster);
                    //       // this._service.removeMessageMaster();
                    //       const changedUrl = this.route.url.split('?')[0];
                    //       this.SSNErrObj.failure = this._service.getMessageMaster('00000121');
                    //       window.history.pushState('', 'Cop', changedUrl);
                    //       this.SSNBridgeFailure = true;
                    //     } else if (this.status == 'SSNfailure') {
                    //       const messageMaster = this._service.fetchMessage();
                    //       this._service.setMessageMaster(messageMaster);
                    //       const changedUrl = this.route.url.split('?')[0];
                    //       window.history.pushState('', 'Cop', changedUrl);
                    //       this.SSNErrObj.failure = this._service.getMessageMaster(queryParam['responseCode']);
                    //       this.SSNBridgeFailure = true;
                    //     }
                    //   }
                    // );
                }
                SSNComponent.prototype.ngOnInit = function () {
                    var user_registration = {
                        screen1: {
                            isActive: "YES",
                            isComplete: false,
                            loading: 30,
                        },
                        screen2: {
                            isActive: "NO",
                            isComplete: false,
                            loading: 0,
                        },
                        screen3: {
                            isActive: "NO",
                            isComplete: false,
                            loading: 0,
                        },
                        screen4: {
                            isActive: "NO",
                            isComplete: false,
                            loading: 0,
                        }
                    };
                    this.nameService.setName('Personal Details');
                    this.progressService.setLoaderWidth(user_registration);
                    // this.SSNErrObj.required = this._service.getMessageMaster('000001201');
                    // this.SSNValue = this.masterData['AOF']['DATA']['SSN'].ADHR_NO;
                    // this.otp_starting_msg = this._service.getMessageMaster('000001132');
                    // this.otp_after_resend = this._service.getMessageMaster('000001133');
                    // this.otp_required_msg = this._service.getMessageMaster('000001131');
                    // this.otp_SSNOtpFailure = this._service.getMessageMaster('998');
                    // this.otp_SSNOtpValidateFailure = this._service.getMessageMaster('ADER-002');
                    // this.otp_SSNOtpValidate = this._service.getMessageMaster('ADER-003');
                    // this.otp_SSNOtpSuccess = this._service.getMessageMaster('0000012511');
                    // this.otp_flooding = this._service.getMessageMaster('ADER-007');
                    // this.otp_FailureTypeTwo = this._service.getMessageMaster('0030');
                    // this.otp_FailureTypeThree = this._service.getMessageMaster('0031');
                    // this.otp_SSNValidtae = this._service.getMessageMaster('AB-210');
                    // this.invalid_SSN_otp = this._service.getMessageMaster('AD_AUTH~400');
                    // this.SSNMinor = this._service.getMessageMaster('MU-03');
                    // if (this.masterData['AOF']['DATA']['SSN']['ADHR_NO'] != "" && this.masterData['AOF']['DATA']['SSN']['ADHR_OTP_VRF'] == "Y" && this.masterData['AOF']['DATA']['SSN']['ADHR_VRF_STS'] == "Y") {
                    //   this.SSNObj = "";
                    // } else {
                    //   this.SSNObj = this._service.getMessageMaster('AD-04');
                    // }
                    // this.dedupeValidation = this._service.getMessageMaster('000001221');
                    // this.myForm = new FormGroup({
                    //   // SSN_number: new FormControl('', [Validators.required, Validators.maxLength(14)]),
                    //   SSN_number: new FormControl('', [Validators.required, Validators.maxLength(14)])
                    // });
                    this.myForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroup"]({
                        // SSN_number: new FormControl('', [Validators.required, Validators.maxLength(14)]),
                        SSN_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].maxLength(9)]),
                        SSN_otp: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required),
                        nominee_no_checkbox: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required)
                    });
                };
                // space(el, after) {
                //   this.SSNBridgeFailure = false;
                //   el.value = el.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
                //   return el.value;
                // }
                // formatValue() {
                //   if (this.SSNValue) {
                //     const SSNNum = this.SSNValue.match(/.{1,4}/g);
                //     this.SSNValue = SSNNum.join(' ');
                //   }
                // }
                // generateRequestId = () => {
                //   const requestId = Math.floor(Math.random() * 1000000000);
                //   return requestId;
                // }
                // SHA256 = (s) => {
                //   var chrsz = 8;
                //   var hexcase = 0;
                //   function safe_add(x, y) {
                //     var lsw = (x & 0xFFFF) + (y & 0xFFFF);
                //     var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
                //     return (msw << 16) | (lsw & 0xFFFF);
                //   }
                //   function S(X, n) { return (X >>> n) | (X << (32 - n)); }
                //   function R(X, n) { return (X >>> n); }
                //   function Ch(x, y, z) { return ((x & y) ^ ((~x) & z)); }
                //   function Maj(x, y, z) { return ((x & y) ^ (x & z) ^ (y & z)); }
                //   function Sigma0256(x) { return (S(x, 2) ^ S(x, 13) ^ S(x, 22)); }
                //   function Sigma1256(x) { return (S(x, 6) ^ S(x, 11) ^ S(x, 25)); }
                //   function Gamma0256(x) { return (S(x, 7) ^ S(x, 18) ^ R(x, 3)); }
                //   function Gamma1256(x) { return (S(x, 17) ^ S(x, 19) ^ R(x, 10)); }
                //   function core_sha256(m, l) {
                //     var K = new Array(0x428A2F98, 0x71374491, 0xB5C0FBCF, 0xE9B5DBA5, 0x3956C25B, 0x59F111F1, 0x923F82A4, 0xAB1C5ED5, 0xD807AA98, 0x12835B01, 0x243185BE, 0x550C7DC3, 0x72BE5D74, 0x80DEB1FE, 0x9BDC06A7, 0xC19BF174, 0xE49B69C1, 0xEFBE4786, 0xFC19DC6, 0x240CA1CC, 0x2DE92C6F, 0x4A7484AA, 0x5CB0A9DC, 0x76F988DA, 0x983E5152, 0xA831C66D, 0xB00327C8, 0xBF597FC7, 0xC6E00BF3, 0xD5A79147, 0x6CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585, 0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2);
                //     var HASH = new Array(0x6A09E667, 0xBB67AE85, 0x3C6EF372, 0xA54FF53A, 0x510E527F, 0x9B05688C, 0x1F83D9AB, 0x5BE0CD19);
                //     var W = new Array(64);
                //     var a, b, c, d, e, f, g, h, i, j;
                //     var T1, T2;
                //     m[l >> 5] |= 0x80 << (24 - l % 32);
                //     m[((l + 64 >> 9) << 4) + 15] = l;
                //     var y: any;
                //     for (y = 0; y < m.length; y += 16) {
                //       a = HASH[0];
                //       b = HASH[1];
                //       c = HASH[2];
                //       d = HASH[3];
                //       e = HASH[4];
                //       f = HASH[5];
                //       g = HASH[6];
                //       h = HASH[7];
                //       var j1: any;
                //       for (j1 = 0; j1 < 64; j1++) {
                //         if (j1 < 16) W[j1] = m[j1 + y];
                //         else W[j1] = safe_add(safe_add(safe_add(Gamma1256(W[j1 - 2]), W[j1 - 7]), Gamma0256(W[j1 - 15])), W[j1 - 16]);
                //         T1 = safe_add(safe_add(safe_add(safe_add(h, Sigma1256(e)), Ch(e, f, g)), K[j1]), W[j1]);
                //         T2 = safe_add(Sigma0256(a), Maj(a, b, c));
                //         h = g;
                //         g = f;
                //         f = e;
                //         e = safe_add(d, T1);
                //         d = c;
                //         c = b;
                //         b = a;
                //         a = safe_add(T1, T2);
                //       }
                //       HASH[0] = safe_add(a, HASH[0]);
                //       HASH[1] = safe_add(b, HASH[1]);
                //       HASH[2] = safe_add(c, HASH[2]);
                //       HASH[3] = safe_add(d, HASH[3]);
                //       HASH[4] = safe_add(e, HASH[4]);
                //       HASH[5] = safe_add(f, HASH[5]);
                //       HASH[6] = safe_add(g, HASH[6]);
                //       HASH[7] = safe_add(h, HASH[7]);
                //     }
                //     return HASH;
                //   }
                //   function str2binb(str) {
                //     var bin = Array();
                //     var mask = (1 << chrsz) - 1;
                //     for (var i = 0; i < str.length * chrsz; i += chrsz) {
                //       bin[i >> 5] |= (str.charCodeAt(i / chrsz) & mask) << (24 - i % 32);
                //     }
                //     return bin;
                //   }
                //   function Utf8Encode(string) {
                //     string = string.replace(/\r\n/g, '\n');
                //     var utftext = '';
                //     for (var n = 0; n < string.length; n++) {
                //       var c = string.charCodeAt(n);
                //       if (c < 128) {
                //         utftext += String.fromCharCode(c);
                //       }
                //       else if ((c > 127) && (c < 2048)) {
                //         utftext += String.fromCharCode((c >> 6) | 192);
                //         utftext += String.fromCharCode((c & 63) | 128);
                //       }
                //       else {
                //         utftext += String.fromCharCode((c >> 12) | 224);
                //         utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                //         utftext += String.fromCharCode((c & 63) | 128);
                //       }
                //     }
                //     return utftext;
                //   }
                //   function binb2hex(binarray) {
                //     var hex_tab = hexcase ? '0123456789ABCDEF' : '0123456789abcdef';
                //     var str = '';
                //     for (var i = 0; i < binarray.length * 4; i++) {
                //       str += hex_tab.charAt((binarray[i >> 2] >> ((3 - i % 4) * 8 + 4)) & 0xF) +
                //         hex_tab.charAt((binarray[i >> 2] >> ((3 - i % 4) * 8)) & 0xF);
                //     }
                //     return str;
                //   }
                //   s = Utf8Encode(s);
                //   return binb2hex(core_sha256(str2binb(s), s.length * chrsz));
                // }
                // // ** generateHash(SSNId, requestId) {
                // // **   const hashSequence = this.saCode + '|' + this.api + '|' + requestId + '|' + this.timestamp_generate + '|' + this.salt;
                // // **   const hash = this.SHA256(hashSequence);
                // // **   return hash;
                // // ** }
                // generateHashRequest(SSNId, requestId) {
                //   const hashSequence = this.saCode + '|' + this.api + '|' + requestId + '|' + this.timestamp_generate + '|' + this.salt;
                //   const hash = this.SHA256(hashSequence);
                //   return hash;
                // }
                // activateHiddenForm() {
                //   // sessionStorage.setItem('SSNBridge', 'YES');
                //   // const SSNId = this.SSNValue.replace(/ +/g, "");
                //   // const timestamp = this.timestamp_generate;
                //   // this.SSNService.setSSNNumber(SSNId);
                //   // //const requestId = this.generateRequestId();
                //   // const requestId = this._service.randomString(15);
                //   // const purpose = this.purpose;
                //   // const modality = this.modality;
                //   // const channel = this.channel;
                //   // const successurl = this.successUrl;
                //   // const failureUrl = this.failureUrl;
                //   // const hash = this.generateHash(SSNId, requestId);
                //   // let form = <HTMLFormElement>document.getElementsByName('SSNForm');
                //   // form = form[0];
                //   // const formObj = document.forms['SSNForm'];
                //   // formObj.elements['SSNId'].value = SSNId;
                //   // formObj.elements['requestId'].value = requestId;
                //   // formObj.elements['saCode'].value = this.saCode;
                //   // formObj.elements['hash'].value = hash;
                //   // formObj.elements['successUrl'].value = this.successUrl;
                //   // formObj.elements['failureUrl'].value = this.failureUrl;
                //   // formObj.elements['timeStamp'].value = timestamp;
                //   // form.submit();
                //   // SSNInput.value = '';
                // }
                // // activateHiddenForm() {
                // //   const SSNId = this.SSNValue.replace(/ +/g, "");
                // //   this.SSNService.setSSNNumber(SSNId);
                // //   const requestId = this.generateRequestId();
                // //   const purpose = this.purpose;
                // //   const modality = this.modality;
                // //   const channel = this.channel;
                // //   const successurl = this.successUrl;
                // //   const failureUrl = this.failureUrl;
                // //   const hash = this.generateHash(SSNId, requestId);
                // //   let form = <HTMLFormElement>document.getElementsByName('SSNForm');
                // //   form = form[0];
                // //   const formObj = document.forms['SSNForm'];
                // //   formObj.elements['SSNId'].value = SSNId;
                // //   formObj.elements['requestId'].value = requestId;
                // //   formObj.elements['saCode'].value = this.saCode;
                // //   formObj.elements['hash'].value =  hash;
                // //   formObj.elements['successUrl'].value = this.successUrl;
                // //   formObj.elements['failureUrl'].value = this.failureUrl;
                // //   form.submit();
                // //   // SSNInput.value = '';
                // // }
                SSNComponent.prototype.getOtpSSN = function (event) {
                    var _this = this;
                    //his.postdata= new  Model();
                    this.valid_number = false;
                    if (event.value.length === 9) {
                        // verify the valid mobile number///
                        var pattern = /^\d{9}$/;
                        if (!pattern.test(event.value)) {
                            this.valid_number = true;
                            return true;
                        }
                        this.postdata.ssn = event.value;
                        this.appLoader.showLoader("loading");
                        this._AuthService
                            .ssnData(this.postdata)
                            .subscribe(function (resp) {
                            //return this.spresp.push(resp);
                            setTimeout(function () {
                                if (resp) {
                                    _this.otp_show = true;
                                    _this.verify_otp = resp.otp;
                                    _this.countDown = rxjs_Observable__WEBPACK_IMPORTED_MODULE_9__["Observable"].timer(0, 10000)
                                        .take(_this.counter)
                                        .map(function () {
                                        _this.appLoader.hideLoader();
                                        if (_this.counter === 1) {
                                            _this.otp_bottom_msg = _this.otp_resend_msg;
                                            _this.resend_display = true;
                                            // console.log("hello");
                                        }
                                        return --_this.counter;
                                    });
                                    console.log(resp);
                                    _this._service.setSsnData(resp);
                                }
                            }, 500);
                        });
                    }
                };
                // getOtpSSN(event: any, button_clicked) {
                //   // **    let SSN_otp = 'SSN_otp';
                //   // **     let installation = this._service.getInstallationId();
                //   // this.valid_number = false;
                //   this.space(event, 4);
                //   if (event.value.length === 14) {
                //     this.otp_loader = false;
                //     this.otp_show = false;
                //     this.pending_btn = false;
                //     this.verify_otp = "";
                //     let random = Math.floor(Math.random() * (999999 - 100000)) + 1000000000000000;
                //     let Gettime = new Date();
                //     let TimeOnly = Gettime.getTime();
                //     this.SSNNumber = event.value;
                //     this.SSNNumber = this.SSNNumber.split(' ').join('');
                //     this.pendingLeadSSN = this.masterData['AOF']['DATA']['SSN']['ADHR_NO'];
                //     this.SSNCheck1 = this.masterData['AOF']['DATA']['SSN']['ADHR_OTP_VRF'];
                //     this.SSNCheck2 = this.masterData['AOF']['DATA']['SSN']['ADHR_VRF_STS'];
                //     if (this.SSNNumber == this.pendingLeadSSN && this.SSNCheck2 == "Y" && this.SSNCheck2 == "Y") {
                //       this.pending_btn = true;
                //       this.otp_loader = false;
                //       this.isReadOnly = true;
                //     } else {
                //       const REQ_DATAS = [
                //         {
                //           processName: "CHECKSSNDEDUPE",
                //           data: [
                //             {
                //               "request_json": JSON.stringify({
                //                 "ref_input_1": this.masterData['AOF']['KEYS']['AOF_ID'],
                //                  "ref_input_2": this.masterData['AOF']['KEYS']['MEMBER_ID'],
                //                // "ref_input_2": "yes",
                //                 "ref_input_3": this.masterData['AOF']['KEYS']['LEAD_ID'],
                //                 "branch_code": "2404",
                //                 "SSN_number": this.SSNNumber,
                //                 "request_id": this._service.randomString(10)
                //               })
                //             }
                //           ]
                //         }
                //       ];
                //       this.appLoader.showLoader(this.dedupeValidation);
                //       this._service.DedupeCheck(REQ_DATAS).subscribe(users => {
                //         let res_json_dedupe = JSON.parse(users);
                //         this.appLoader.hideLoader();
                //         // console.log(this.myForm.value);
                //         // let response_status_dedupe = JSON.parse(res_json['response']);
                //         if ((res_json_dedupe['message_code'] === '99' && res_json_dedupe['process_status'].toUpperCase() === "SUCCESS") || (res_json_dedupe['message_code'] === '0' && res_json_dedupe['process_status'].toUpperCase() === "SUCCESS")) {
                //           const masterData_sync = this._service.getMasterData();
                //           /*   masterData_sync['AOF']['DATA']['IT_DTL']['ANNUAL_INCOME']['VALUE'] = this.annual_income_value;
                //              masterData_sync['AOF']['DATA']['IT_DTL']['FATCA_DECLARATION']['VALUE'] = this.myForm.value.fatca;
                //              masterData_sync['AOF']['DATA']['IT_DTL']['NAME']['VALUE'] = this.pan_full_name
                //              masterData_sync['AOF']['DATA']['IT_DTL']['OCCUPATION']['VALUE'] = this.myForm.value.occupation;
                //              masterData_sync['AOF']['DATA']['IT_DTL']['PAN_NO']['VALUE'] = this.pan_number;
                //              masterData_sync['AOF']['DATA']['IT_DTL']['PAN_NO']['PAN_NAME'] = this.name;
                //              masterData_sync['AOF']['DATA']['SSN_PAN_NAME_CHECK'] = this.pan_response_type;
                //              masterData_sync['AOF']['DATA']['CURRENT_SCREEN_DTLS']['PORTAL_SCREEN_ID'] = '5';*/
                //           let Req_sendsms = {
                //             "channel_code": "WEB_APP",
                //             "stan": random.toString(),
                //             "transmission_datetime": TimeOnly.toString(),
                //             "user_handle_type": "SSN",
                //             "user_handle_value": this.SSNNumber,
                //             "location": "",
                //             "function_code": "AUTH",
                //             "function_sub_code": "GENERATE_OTP",
                //             "client_ref_number": random.toString(),
                //             "transaction_ref_number": "",
                //             "remark": "For generating OTP",
                //             "environment": "PREPROD",
                //             "notification_channel": "BOTH",
                //             "uid": this.SSNNumber,
                //             "consent": "Y",
                //             "ref_input_1": this.masterData['AOF']['KEYS']['AOF_ID'],
                //             // "ref_input_2": this.masterData['AOF']['KEYS']['MEMBER_ID'],
                //             "ref_input_2":"yes",
                //             "ref_input_3": this.masterData['AOF']['KEYS']['LEAD_ID'],
                //             "purpose": "Dev Testing"
                //           }
                //           const REQ_DATA = [
                //             {
                //               processName: "VERFSSNOTP",
                //               data: [{
                //                 "request_json": JSON.stringify(Req_sendsms)
                //               }
                //               ]
                //             }
                //           ];
                //           this.mobile_loader_msg = this._service.getMessageMaster('LDR-001');
                //           this.appLoader.showLoader(this.mobile_loader_msg);
                //           this._service.fetchOTPSSN(REQ_DATA).subscribe(res => {
                //             // Aditya Starts here
                //             // res={"response_message":"OTP sent successfully","response":"{\"gmail\":\"\",\"mobile\":\"*******9612\",\"txn\":\"2ccfe6bf-31ac-4c45-91ef-7606fae79bbc\"}","message_code":"000","process_status":"SUCCESS","response_type":"I"}
                //             // res=JSON.stringify(res);
                //             // Aditya remove here
                //             /* removed third parameter from function  */
                //             /* setTimeout(() => {
                //               el.focus();
                //             }, 10); */
                //             // Reemove srtarts here
                //             // res= '{"response_message":"OTP sent successfully","response":"{\"gmail\":\"\",\"mobile\":\"*******2054\",\"txn\":\"0912a939-b40f-4c4d-a080-76cc293db64c\"}","message_code":"000","process_status":"SUCCESS","response_type":"I"}';
                //             // let response = {"response_message":"OTP sent successfully","response":"{\"gmail\":\"\",\"mobile\":\"*******2054\",\"txn\":\"0912a939-b40f-4c4d-a080-76cc293db64c\"}","message_code":"000","process_status":"SUCCESS","response_type":"I"}
                //             // response.process_status="SUCCESS";
                //             // Reemove Ends here
                //             let response = JSON.parse(res);
                //             this.appLoader.hideLoader();
                //             try {
                //               // alerasast("Welcome guest!");
                //               if (response.process_status.toUpperCase() == 'SUCCESS' || response.response_type.toUpperCase() == 'I') {
                //                 let transactionRefNo = JSON.parse(response.response);
                //                 this.transactionRefNo = transactionRefNo.txn;
                //                 this.SSNMobileNum = transactionRefNo.mobile;
                //                 this.SSNMobileNum= this.SSNMobileNum.substring(7, 11);
                //                 this.mobileNum = this.masterData["AOF"]["DATA"]["MOBILE"]["MOB_NO"]; 
                //                 this.mobileNum = this.mobileNum.substring(6, 10)
                //                 if (this.mobileNum != this.SSNMobileNum ) {
                //                   this.otp_SSNOtpFailure = 'Sorry..entered mobile number does not match with the mobile no. registered in your SSN. Request you to enter correct details';
                //                   this.dialogueservice.alertBox({
                //                     title: 'Error',
                //                     message: this.otp_SSNOtpFailure, /*Get it from Prameet maan - Message master*/
                //                     messageType: 'error',
                //                     actionlabel: ['Close']
                //                   }).take(1).subscribe((res) => {
                //                     this.route.navigate(['/mobile']);
                //                   });
                //                 }
                //                 this.otp_loader = false;
                //                 this.otp_show = true;
                //                 this.pending_btn = true;
                //                 this.counter = 30;
                //                 // this.counter = 10; 
                //                 this.resend_display = false;
                //                 if (button_clicked === 'resend_button') {
                //                   if (transactionRefNo.gmail) {
                //                     this.otp_bottom_msg = this.otp_after_resend + ' ' + transactionRefNo.mobile + ' &';
                //                     this.otp_bottom_msgEmail = transactionRefNo.gmail;
                //                   } else {
                //                     this.otp_bottom_msg = this.otp_after_resend + ' ' + transactionRefNo.mobile;
                //                     this.otp_bottom_msgEmail = transactionRefNo.gmail;
                //                   }
                //                 } else {
                //                   /* this.otp_bottom_msg = this.otp_after_resend + ' ' + transactionRefNo.mobile +'\n'+ 
                //                   transactionRefNo.gmail; *//*Message master*/
                //                   if (transactionRefNo.gmail) {
                //                     this.otp_bottom_msg = this.otp_starting_msg + ' ' + transactionRefNo.mobile + ' &';
                //                     this.otp_bottom_msgEmail = transactionRefNo.gmail;
                //                   } else {
                //                     this.otp_bottom_msg = this.otp_starting_msg + ' ' + transactionRefNo.mobile;
                //                     this.otp_bottom_msgEmail = transactionRefNo.gmail;
                //                   }
                //                 }
                //                 this.countDown = Observable.timer(0, 1000)
                //                   .take(this.counter)
                //                   .map(() => {
                //                     if (this.counter === 1) {
                //                       this.otp_bottom_msg = "Haven’t received the OTP yet?";  /*-Message master*/
                //                       this.otp_bottom_msgEmail = "";
                //                       this.resend_display = true;
                //                       // console.log("hello");
                //                     }
                //                     return --this.counter;
                //                   });
                //                 this.request_Id = response['be_request_id'];
                //                 let response_msg = "OTP send sucessfully";/*Message master*/
                //               } else {
                //                 // By Tomorrow by maan starts here 
                //                 if (response.message_code == '000006') {
                //                   this.otp_SSNOtpFailure = this.otp_FailureTypeThree;
                //                 } else if (response.message_code == '131002') {
                //                   this.otp_SSNOtpFailure = this.otp_SSNOtpValidate;
                //                 } else if (response.message_code == '131400') {
                //                   this.otp_SSNOtpFailure = this.otp_SSNOtpValidateFailure;
                //                 } else if (response.response_message == "Invalid uid") {
                //                   this.otp_SSNOtpFailure = this.invalid_SSN_otp;
                //                 } else if (response.response_message == "SSN number does not have both email and mobile. ") {
                //                   // this.otp_SSNOtpFailure=this.otp_SSNValidtae;
                //                   this.otp_SSNOtpFailure = 'SSN number does not have both email and mobile. ';
                //                 } else {
                //                   this.otp_SSNOtpFailure = this.otp_flooding;
                //                   // this.otp_SSNOtpFailure=this.otp_FailureTypeTwo;
                //                 }
                //                 // By Tomorrow by maan Ends here 
                //                 this.otp_loader = false;
                //                 this.dialogueservice.alertBox({
                //                   title: 'Error',
                //                   message: this.otp_SSNOtpFailure, /*Get it from Prameet maan - Message master*/
                //                   messageType: 'error',
                //                   actionlabel: ['Close']
                //                 }).take(1).subscribe((res) => {
                //                   this.route.navigate(['/SSN']);
                //                 });
                //               }
                //             } catch (error) {
                //               this.appLoader.hideLoader();
                //               this.dialogueservice.alertBox({
                //                 title: 'Error',
                //                 message: this._service.getCatchmsg(),/*Get it from Prameet maan - Message master*/
                //                 messageType: 'error',
                //                 actionlabel: ['Close']
                //               }).take(1).subscribe((res) => {
                //                 this.route.navigate(['/mobile']);
                //               });
                //             }
                //           });
                //         } else if (res_json_dedupe['process_status'].toUpperCase() === "FAILURE" && res_json_dedupe['message_code'] === '000006') {
                //           this.otp_SSNOtpFailure = this.otp_FailureTypeThree;
                //           this.otp_loader = false;
                //           this.dialogueservice.alertBox({
                //             title: 'Error',
                //             message: this.otp_SSNOtpFailure, /*Get it from Prameet maan - Message master*/
                //             messageType: 'error',
                //             actionlabel: ['Close']
                //           }).take(1).subscribe((res) => {
                //             this.route.navigate(['/mobile']);
                //           });
                //         }
                //         else if ((res_json_dedupe['message_code'] === '99' && res_json_dedupe['process_status'].toUpperCase() === "FAILURE" && res_json_dedupe['response_message'].toUpperCase() == 'MATCH FOUND') || (res_json_dedupe['message_code'] === '0' && res_json_dedupe['process_status'].toUpperCase() === "FAILURE" && res_json_dedupe['response_message'].toUpperCase() == 'MATCH FOUND')) {
                //           this.appLoader.hideLoader();
                //           // **   let response_msg = res_json_dedupe['response_message'];
                //           const masterData_sync = this._service.getMasterData();
                //           masterData_sync['AOF']['DATA']['DEDUPE_CHECK'] = 'YES';
                //           const reqObj = [{
                //             processName: 'SPTBINSERTAOFCUSTOBJ',
                //             data: [{
                //               'X_OBJECT_DATA': JSON.stringify(masterData_sync),
                //               'X_DEVICE_MODIFY_TIMESTAMP': '',
                //               'X_DEVICE_CREATE_TIMESTAMP': '',
                //               'X_OBJECT_KEY': '',
                //               'X_OBJECT_VERSION': ''
                //             }]
                //           }];
                //           this._service.masterDataSync(reqObj).subscribe(res => {
                //             this.appLoader.hideLoader();
                //             const response_code = res[0].response_code;
                //             const response_type = res[0].response_type;
                //             // **      const response_message = JSON.parse(res[0].response_message);
                //             // **  const displayMsg = this._appservice.getMessageMaster(response_code, response_message);
                //             if (response_type == 'I') {
                //               this._service.setMasterData(masterData_sync);
                //             } else if (response_type == 'E') {
                //               let message = this._service.getMessageMaster('' + response_code + '');
                //               if (!message) {
                //                 message = "Message Key Not Found..!!!";
                //               }
                //               this.dialogueservice.alertBox({
                //                 title: 'Error',
                //                 message: message,
                //                 messageType: 'error',
                //                 actionlabel: ['Close']
                //               }).take(1).subscribe((res) => {
                //                 // console.log(res);
                //               })
                //             }
                //           })
                //           let message = this._service.getMessageMaster("00000122");
                //           if (!message) {
                //             message = "Message Key Not Found..!!!";
                //           }
                //           this.dialogueservice.alertBox({
                //             title: 'Error',
                //             message: message,
                //             messageType: 'error',
                //             actionlabel: ['Close']
                //           }).take(1).subscribe((res) => {
                //             // console.log(res);
                //             this.route.navigate(['/mobile']);
                //           })
                //         }
                //         else {
                //           this.otp_SSNOtpFailure = this.otp_FailureTypeThree;
                //           this.otp_loader = false;
                //           this.dialogueservice.alertBox({
                //             title: 'Error',
                //             message: this.otp_SSNOtpFailure, /*Get it from Prameet maan - Message master*/
                //             messageType: 'error',
                //             actionlabel: ['Close']
                //           }).take(1).subscribe((res) => {
                //             this.route.navigate(['/mobile']);
                //           })
                //         }
                //       })
                //     }
                //   }
                //   else {
                //     this.otp_show = false;
                //     this.pending_btn = false;
                //   }
                // }
                SSNComponent.prototype.validateOtp = function () {
                    this.route.navigate(['personalInfo']);
                };
                return SSNComponent;
            }());
            SSNComponent.ctorParameters = function () { return [
                { type: _app_service__WEBPACK_IMPORTED_MODULE_2__["appService"] },
                { type: _shared_loader_loader_service__WEBPACK_IMPORTED_MODULE_14__["LoaderService"] },
                { type: _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"] },
                { type: _mobile_mobile_service__WEBPACK_IMPORTED_MODULE_7__["mobileService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
                { type: _shared_dialogue_dialogue_service__WEBPACK_IMPORTED_MODULE_4__["DialogueService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
                { type: _shared_progress_service__WEBPACK_IMPORTED_MODULE_12__["ProgressService"] },
                { type: _shared_activate_module__WEBPACK_IMPORTED_MODULE_13__["WorkflowService"] },
                { type: _auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"] },
                { type: _shared_screen_name__WEBPACK_IMPORTED_MODULE_10__["NameService"] }
            ]; };
            SSNComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-SSN',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./SSN.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/SSN/SSN.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./SSN.component.css */ "./src/app/SSN/SSN.component.css")).default]
                })
            ], SSNComponent);
            /***/ 
        }),
        /***/ "./src/app/account-summary/account-summary.component.css": 
        /*!***************************************************************!*\
          !*** ./src/app/account-summary/account-summary.component.css ***!
          \***************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("/* HeroSearch private styles */\r\n\r\n.search-result li {\r\n    border-bottom: 1px solid gray;\r\n    border-left: 1px solid gray;\r\n    border-right: 1px solid gray;\r\n    width: 295px;\r\n    /* height: 16px; */\r\n    padding: 5px;\r\n    background-color: white;\r\n    cursor: pointer;\r\n    list-style-type: none;\r\n}\r\n\r\n.search-result li:hover {\r\n    background-color: #607D8B;\r\n}\r\n\r\n.search-result li a {\r\n    color: #888;\r\n    display: block;\r\n    text-decoration: none;\r\n}\r\n\r\n.search-result li a:hover {\r\n    color: white;\r\n}\r\n\r\n.search-result li a:active {\r\n    color: white;\r\n}\r\n\r\n#search-box {\r\n    width: 300px;\r\n    height: 20px;\r\n}\r\n\r\nul.search-result {\r\n    margin-top: 0;\r\n    padding-left: 0;\r\n    height: 200px;\r\n    z-index: 1;\r\n    position: absolute;\r\n    overflow: auto;\r\n}\r\n\r\n/*\r\n  Copyright 2017-2018 Google Inc. All Rights Reserved.\r\n  Use of this source code is governed by an MIT-style license that\r\n  can be found in the LICENSE file at http://angular.io/license\r\n  */\r\n\r\n.toplabel {\r\n    width: 400px;\r\n    height: 2px;\r\n    border: 1px solid #f37021;\r\n    margin-left: 200px;\r\n    margin-top: 10px;\r\n}\r\n\r\n.rectangle-3 {\r\n    /*width: 800px;\r\n  height: 242px;*/\r\n    padding: 40px 10px 20px 10px;\r\n    background-color: #fef7f3;\r\n    box-shadow: 0 0 10px 0 rgba(243, 112, 33, 0.3);\r\n    margin-left: 10px;\r\n    margin-top: 30px;\r\n}\r\n\r\n.tophead {\r\n    margin-left: 324px;\r\n    margin-top: 50px;\r\n}\r\n\r\n.subtophead {\r\n    margin-left: 245px;\r\n}\r\n\r\n.card {\r\n    /*margin-left: -70px;*/\r\n    position: absolute;\r\n    margin-top: -20px;\r\n}\r\n\r\n.copy {\r\n    position: absolute;\r\n    left: 210px;\r\n    top: 160px;\r\n    z-index: 99; /* Firefox */\r\n    -webkit-animation: blink normal 2s infinite ease-in-out; /* Webkit */ /* IE */\r\n    animation: blink normal 2s infinite ease-in-out; /* Opera and prob css3 final iteration */\r\n}\r\n\r\n.request_physical_card {\r\n    font-size: 12px;\r\n    font-weight: bold;\r\n    position: relative;\r\n    top: 0px;\r\n    right: 0px;\r\n}\r\n\r\n.option {\r\n    float: right;\r\n    margin-top: 10px;\r\n    padding: 10px;\r\n    margin-right: 0px;\r\n}\r\n\r\n.Oval-Copy-9 {\r\n    width: 20px;\r\n    height: 20px;\r\n    padding: 10px;\r\n    font-weight: 10px;\r\n}\r\n\r\n.Oval-Copy-10 {}\r\n\r\n.name,\r\n.card_no {\r\n    color: #ffffff;\r\n}\r\n\r\n.details {\r\n    position: absolute;\r\n    top: 47px;\r\n    left: 50px;\r\n}\r\n\r\n.expires,\r\n.e_date,\r\n.cvv,\r\n.cvv_no {\r\n    color: #ffffff;\r\n    position: absolute;\r\n    top: 50px;\r\n    left: 0px;\r\n}\r\n\r\n.expires,\r\n.cvv {\r\n    font-size: 10px;\r\n}\r\n\r\n.cvv {\r\n    margin-left: 100px;\r\n}\r\n\r\n.e_date,\r\n.cvv_no {\r\n    font-size: 20px;\r\n    top: 60px;\r\n}\r\n\r\n.cvv_no {\r\n    margin-left: 95px;\r\n}\r\n\r\n.yes {\r\n    left: 0px;\r\n    top: 20px;\r\n}\r\n\r\n.no {\r\n    margin-top: 20px;\r\n}\r\n\r\n.information {\r\n    position: absolute;\r\n    left: 70px;\r\n    top: 410px;\r\n}\r\n\r\n.crn,\r\n.ifsc,\r\n.account_no,\r\n.branch,\r\n.dbt {\r\n    font-size: 11px;\r\n    color: #f37021;\r\n    margin-top: 50px;\r\n}\r\n\r\n.checkboc_1 {\r\n    font-size: 11px;\r\n    color: #f37021;\r\n    margin-top: 50px;\r\n}\r\n\r\n.key_crn,\r\n.key_ifsc,\r\n.key_account_no,\r\n.key_branch {\r\n    border-bottom: 2px solid #989898;\r\n    border-left: none;\r\n    border-top: none;\r\n    border-right: none;\r\n}\r\n\r\n.next {\r\n    background-color: #f37021;\r\n    color: #ffffff;\r\n    margin: 20px 0;\r\n    border: none;\r\n    padding: 7px 25px;\r\n    text-align: center;\r\n    border-radius: 2px;\r\n}\r\n\r\n.page1 {\r\n    position: absolute;\r\n    left: 370px;\r\n    top: 1px;\r\n}\r\n\r\n.appointment-suggestions {\r\n    position: absolute;\r\n    width: calc(100% - 30px);\r\n    padding: 0;\r\n    z-index: 11;\r\n    top: 100%;\r\n    left: 15px;\r\n    background-color: #fff;\r\n    max-height: 200px;\r\n    overflow-y: auto;\r\n    box-shadow: 0px 2px 2px 1px rgba(77, 77, 77, 0.32);\r\n}\r\n\r\n.appointment-suggestions li {\r\n    padding: 5px 15px;\r\n    font-size: 14px;\r\n    color: #5d5d5d;\r\n    border-bottom: 1px solid #eee;\r\n}\r\n\r\n.appointment-suggestions li:last-child {\r\n    border-bottom: none;\r\n}\r\n\r\n.cardDetailsInput {\r\n    border: none;\r\n    outline: none;\r\n    background: transparent;\r\n    color: #fff;\r\n}\r\n\r\ninput[type='radio'] {\r\n    outline: none;\r\n}\r\n\r\n.yes-no-btn-align {\r\n    margin-left: 0;\r\n    padding-left: 0;\r\n    left: 0;\r\n}\r\n\r\n.yes-show-msg {\r\n    margin-top: 22px;\r\n    color: #646464;\r\n    font-size: 13px;\r\n}\r\n\r\n.mainContent-acnt-cstm {\r\n    margin: 7% 4% 2%;\r\n}\r\n\r\n.cardDetailsInput {\r\n    color: white !important;\r\n    font-size: 15px;\r\n    font-family: Light;\r\n}\r\n\r\n.cvv_no {\r\n    text-indent: 5px;\r\n}\r\n\r\n.uploadContainer {\r\n    margin: auto;\r\n    height: auto;\r\n    padding: 0px 0px;\r\n    background-color: rgb(255, 255, 255);\r\n    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.35);\r\n}\r\n\r\n.uploadOverlay {\r\n    position: fixed;\r\n    top: 0px;\r\n    bottom: 0px;\r\n    left: 0px;\r\n    height: 100%;\r\n    width: 100%;\r\n    background: rgba(255, 255, 255, 0.8);\r\n    z-index: 100;\r\n    display: flex;\r\n}\r\n\r\n.uploadOverlay .uploadContainer .header {\r\n    width: 100%;\r\n    background-color: #fef7f3;\r\n    height: 70px;\r\n    padding: 20px 20px;\r\n}\r\n\r\n.uploadOverlay .uploadContainer .body {\r\n    width: 100%;\r\n    height: 400px;\r\n    /* margin: 58px; */\r\n    /* height: 155px; */\r\n    padding: 20px 40px;\r\n}\r\n\r\n.pad_radio {\r\n    padding-bottom: 4%;\r\n    padding-left: 0;\r\n}\r\n\r\n.pad_radio span {\r\n    display: block;\r\n    padding-left: 20px;\r\n}\r\n\r\n.header_label {\r\n    font-family: Nunito-Regular;\r\n    font-size: 12px;\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    letter-spacing: 0px;\r\n    /* text-align: left; */\r\n    color: #f37021;\r\n}\r\n\r\n.fatca_dbt {\r\n    margin-top: 10px;\r\n    width: 95%;\r\n    word-break: break-all;\r\n    padding-left: 0;\r\n    /* white-space: normal; */\r\n}\r\n\r\n.pad-left {\r\n    padding-left: 0;\r\n}\r\n\r\n.cancel_btn {\r\n    padding: 5% 0%;\r\n    outline: none;\r\n    /* padding: 1% 6%; */\r\n    background: #f37021;\r\n    border-radius: 2px;\r\n    border: none;\r\n    cursor: pointer;\r\n    color: #fff;\r\n}\r\n\r\n.deactivate_btn {\r\n    padding: 5% 0%;\r\n    outline: none;\r\n    /* padding: 1% 6%; */\r\n    background: #cc1313;\r\n    border-radius: 2px;\r\n    border: none;\r\n    cursor: pointer;\r\n    color: #fff;\r\n}\r\n\r\n/* Base for label styling */\r\n\r\n.custom-check[type=\"checkbox\"]:not(:checked),\r\n.custom-check[type=\"checkbox\"]:checked {\r\n    position: absolute;\r\n    left: -9999px;\r\n}\r\n\r\n.custom-check[type=\"checkbox\"]:not(:checked)+label,\r\n.custom-check[type=\"checkbox\"]:checked+label {\r\n    position: relative;\r\n    padding-left: 1.95em;\r\n    cursor: pointer;\r\n}\r\n\r\n/* checkbox aspect */\r\n\r\n.custom-check[type=\"checkbox\"]:not(:checked)+label:before,\r\n.custom-check[type=\"checkbox\"]:checked+label:before {\r\n    content: '';\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    width: 1.60em;\r\n    height: 1.60em;\r\n    border: 2px solid #ccc;\r\n    background: #fff;\r\n    /*border-radius: 4px;*/\r\n    box-shadow: inset 0 1px 3px rgba(0, 0, 0, .1);\r\n}\r\n\r\n/* checked mark aspect */\r\n\r\n.custom-check[type=\"checkbox\"]:not(:checked)+label:after,\r\n.custom-check[type=\"checkbox\"]:checked+label:after {\r\n    content: '■';\r\n    position: absolute;\r\n    top: 0.01em;\r\n    left: .100em;\r\n    font-size: 2em;\r\n    line-height: 0.61;\r\n    color: #e87722;\r\n    transition: all .2s;\r\n    font-family: Helvetica, Arial, sans-serif;\r\n}\r\n\r\n/* checked mark aspect changes */\r\n\r\n.custom-check[type=\"checkbox\"]:not(:checked)+label:after {\r\n    opacity: 0;\r\n    transform: scale(0);\r\n}\r\n\r\n.custom-check[type=\"checkbox\"]:checked+label:after {\r\n    opacity: 1;\r\n    transform: scale(1);\r\n}\r\n\r\n/* disabled checkbox */\r\n\r\n.custom-check[type=\"checkbox\"]:disabled:not(:checked)+label:before,\r\n.custom-check[type=\"checkbox\"]:disabled:checked+label:before {\r\n    box-shadow: none;\r\n    border-color: #bbb;\r\n    background-color: #ddd;\r\n}\r\n\r\n.custom-check[type=\"checkbox\"]:disabled:checked+label:after {\r\n    color: #999;\r\n}\r\n\r\n.custom-check[type=\"checkbox\"]:disabled+label {\r\n    color: #aaa;\r\n}\r\n\r\n/* accessibility */\r\n\r\n.custom-check[type=\"checkbox\"]:checked:focus+label:before,\r\n.custom-check[type=\"checkbox\"]:not(:checked):focus+label:before {\r\n    border: 2px dotted blue;\r\n    text-indent: 5px;\r\n}\r\n\r\n.mainContent-acnt-cstm {\r\n    margin: 7% 4% 2%;\r\n}\r\n\r\n.card_display_name {\r\n    display: block;\r\n    overflow: hidden;\r\n    margin-top: 30px;\r\n}\r\n\r\n.button_style_mobile12 {\r\n    padding-bottom: 2%;\r\n}\r\n\r\n/*Media query starts here*/\r\n\r\n@media screen and (max-width: 352px) {\r\n    .copy {\r\n        position: absolute;\r\n        left: 180px;\r\n        top: 147px;\r\n    }\r\n    .debitCard {\r\n        width: 250px !important;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 992px) {\r\n    .label_mobile_res {\r\n        font-family: Nunito-Regular;\r\n        min-height: 20px;\r\n        padding-top: -3px;\r\n        padding-left: 32px;\r\n        /* margin-bottom: 12px; */\r\n        font-weight: 400;\r\n        cursor: pointer;\r\n        position: relative;\r\n        top: -20px;\r\n        color: #646464;\r\n        margin: 0;\r\n        display: block;\r\n    }\r\n    .rectangle-3 {\r\n        /*width: 800px;\r\n      height: 242px;*/\r\n        padding: 40px 10px 20px 10px;\r\n        background-color: #fef7f3;\r\n        box-shadow: 0 0 10px 0 rgba(243, 112, 33, 0.3);\r\n        margin-left: 0px !important;\r\n        margin-right: 0px !important;\r\n        margin-top: 30px;\r\n    }\r\n    .button_style_mobile12 {\r\n        padding-bottom: 22% !important;\r\n    }\r\n    #search-box {\r\n        width: 270px !important;\r\n        height: 20px;\r\n    }\r\n    .search-result li {\r\n        border-bottom: 1px solid gray;\r\n        border-left: 1px solid gray;\r\n        border-right: 1px solid gray;\r\n        width: 275px !important;\r\n        /* height: 16px; */\r\n        padding: 5px;\r\n        background-color: white;\r\n        cursor: pointer;\r\n        list-style-type: none;\r\n    }\r\n    .margin-pad-0 {\r\n        padding-left: 0;\r\n        padding-right: 0;\r\n        margin-left: 0;\r\n        margin-right: 0;\r\n    }\r\n    .account-main-div {\r\n        position: static !important;\r\n    }\r\n    .accountSummaryDetails-cstm {\r\n        width: 97%;\r\n        /*margin: 0 auto;*/\r\n    }\r\n    .disabledBtn {\r\n        padding: 8px 46px !important;\r\n    }\r\n    .details {\r\n        top: 67px !important;\r\n    }\r\n    .uploadContainer {\r\n        width: 87%;\r\n        height: 90%;\r\n        position: absolute;\r\n        left: 0;\r\n        right: 0;\r\n        top: 0;\r\n        bottom: 0;\r\n        margin: auto;\r\n        max-width: 100%;\r\n        max-height: 100%;\r\n        overflow: auto;\r\n    }\r\n    .header {\r\n        overflow: hidden;\r\n        height: auto;\r\n    }\r\n    .uploadOverlay .uploadContainer .body {\r\n        padding: 10px 16px;\r\n    }\r\n    .cancel_btn {\r\n        padding: 8px 37px !important;\r\n    }\r\n    .activeBtn {\r\n        padding: 8px 46px !important;\r\n    }\r\n    .radio-align-media {\r\n        margin-left: -4px;\r\n        overflow: hidden;\r\n    }\r\n    .margin-pad-0 {\r\n        padding-left: 0;\r\n        padding-right: 0;\r\n        margin-left: 0 !important;\r\n    }\r\n    .select_box {\r\n        width: 100%;\r\n    }\r\n    .pad-right {\r\n        padding-right: 20px;\r\n    }\r\n    .fatca_dbt {\r\n        padding-left: 12px;\r\n    }\r\n    .uploadOverlay .uploadContainer .header {\r\n        height: auto !important;\r\n    }\r\n    .main-div-account {\r\n        top: 0 !important;\r\n        height: 100% !important;\r\n    }\r\n    .mainContent.row.mainContent-acnt-cstm.margin-pad-0 {\r\n        margin-top: 0 !important;\r\n    }\r\n    .uploadContainer {\r\n        height: 83% !important;\r\n    }\r\n    .select_box {\r\n        background: none;\r\n    }\r\n    .activeBtn {\r\n        padding-left: 40px !important;\r\n        padding-left: initial !important;\r\n    }\r\n    .pad-mobile {\r\n        padding-top: 15px;\r\n    }\r\n    .button_aligned_mobile {\r\n        padding-top: 30px;\r\n        padding-bottom: 15px;\r\n        text-align: center;\r\n    }\r\n    .label-styling-title-account{\r\n        font-size: 13px;}\r\n\r\n    }\r\n\r\n/*Media query starts here*/\r\n\r\n.font_fam {\r\n    font-family: Nunito-Regular;\r\n}\r\n\r\n.label-styling-title-account {\r\n    font-family: Nunito-Regular;\r\n    min-height: 20px;\r\n    padding-top: 5px;\r\n    padding-left: 20px;\r\n    margin-bottom: 0;\r\n    font-weight: 400;\r\n    cursor: pointer;\r\n    color: #646464;\r\n    margin: 0;\r\n    display: block;\r\n}\r\n\r\n.activeBtn {\r\n    padding-left: 0px !important;\r\n}\r\n\r\n.noteAccountSummary{\r\n    font-size: 13px;\r\n    color: #b4b4b4;\r\n    margin-left: 12px;\r\n    margin-top: 30px;\r\n    margin-bottom: 0px;\r\n}\r\n\r\n@-webkit-keyframes blink {\r\n    0% {\r\n        opacity:1;\r\n    }\r\n    50% {\r\n        opacity:0.3;\r\n    }\r\n    100% {\r\n        opacity:1;\r\n    }\r\n}\r\n\r\n/* IE */\r\n\r\n/* Opera and prob css3 final iteration */\r\n\r\n@keyframes blink {\r\n    0% {\r\n        opacity:1;\r\n    }\r\n    50% {\r\n        opacity:0.3;\r\n    }\r\n    100% {\r\n        opacity:1;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC1zdW1tYXJ5L2FjY291bnQtc3VtbWFyeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhCQUE4Qjs7QUFFOUI7SUFDSSw2QkFBNkI7SUFDN0IsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2QscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsYUFBYTtJQUNiLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjs7QUFHQTs7OztHQUlHOztBQUVIO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJO2lCQUNhO0lBQ2IsNEJBQTRCO0lBQzVCLHlCQUF5QjtJQUN6Qiw4Q0FBOEM7SUFDOUMsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsVUFBVTtJQUNWLFdBQVcsRUFDNEMsWUFBWTtJQUNuRSx1REFBdUQsRUFBRSxXQUFXLEVBQ2YsT0FBTztJQUM1RCwrQ0FBK0MsRUFBRSx3Q0FBd0M7QUFDN0Y7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsVUFBVTtBQUNkOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCOztBQUVBLGVBQWU7O0FBRWY7O0lBRUksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBOzs7O0lBSUksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsU0FBUztBQUNiOztBQUVBOztJQUVJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksZUFBZTtJQUNmLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFVBQVU7QUFDZDs7QUFFQTs7Ozs7SUFLSSxlQUFlO0lBQ2YsY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBOzs7O0lBSUksZ0NBQWdDO0lBQ2hDLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxjQUFjO0lBQ2QsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxRQUFRO0FBQ1o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLFVBQVU7SUFDVixXQUFXO0lBQ1gsU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixrREFBa0Q7QUFDdEQ7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGNBQWM7SUFDZCw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixPQUFPO0FBQ1g7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG9DQUFvQztJQUNwQyw0Q0FBNEM7QUFDaEQ7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsUUFBUTtJQUNSLFdBQVc7SUFDWCxTQUFTO0lBQ1QsWUFBWTtJQUNaLFdBQVc7SUFDWCxvQ0FBb0M7SUFDcEMsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGVBQWU7SUFDZixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixlQUFlO0lBQ2YsV0FBVztBQUNmOztBQUdBLDJCQUEyQjs7QUFFM0I7O0lBRUksa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7O0FBRUE7O0lBRUksa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixlQUFlO0FBQ25COztBQUdBLG9CQUFvQjs7QUFFcEI7O0lBRUksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsTUFBTTtJQUNOLGFBQWE7SUFDYixjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsNkNBQTZDO0FBQ2pEOztBQUdBLHdCQUF3Qjs7QUFFeEI7O0lBRUksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsY0FBYztJQUNkLG1CQUFtQjtJQUNuQix5Q0FBeUM7QUFDN0M7O0FBR0EsZ0NBQWdDOztBQUVoQztJQUNJLFVBQVU7SUFDVixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsbUJBQW1CO0FBQ3ZCOztBQUdBLHNCQUFzQjs7QUFFdEI7O0lBRUksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBR0Esa0JBQWtCOztBQUVsQjs7SUFFSSx1QkFBdUI7SUFDdkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBR0EsMEJBQTBCOztBQUUxQjtJQUNJO1FBQ0ksa0JBQWtCO1FBQ2xCLFdBQVc7UUFDWCxVQUFVO0lBQ2Q7SUFDQTtRQUNJLHVCQUF1QjtJQUMzQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSwyQkFBMkI7UUFDM0IsZ0JBQWdCO1FBQ2hCLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIseUJBQXlCO1FBQ3pCLGdCQUFnQjtRQUNoQixlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLFVBQVU7UUFDVixjQUFjO1FBQ2QsU0FBUztRQUNULGNBQWM7SUFDbEI7SUFDQTtRQUNJO3FCQUNhO1FBQ2IsNEJBQTRCO1FBQzVCLHlCQUF5QjtRQUN6Qiw4Q0FBOEM7UUFDOUMsMkJBQTJCO1FBQzNCLDRCQUE0QjtRQUM1QixnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLDhCQUE4QjtJQUNsQztJQUNBO1FBQ0ksdUJBQXVCO1FBQ3ZCLFlBQVk7SUFDaEI7SUFDQTtRQUNJLDZCQUE2QjtRQUM3QiwyQkFBMkI7UUFDM0IsNEJBQTRCO1FBQzVCLHVCQUF1QjtRQUN2QixrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLHVCQUF1QjtRQUN2QixlQUFlO1FBQ2YscUJBQXFCO0lBQ3pCO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLGNBQWM7UUFDZCxlQUFlO0lBQ25CO0lBQ0E7UUFDSSwyQkFBMkI7SUFDL0I7SUFDQTtRQUNJLFVBQVU7UUFDVixrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLDRCQUE0QjtJQUNoQztJQUNBO1FBQ0ksb0JBQW9CO0lBQ3hCO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsV0FBVztRQUNYLGtCQUFrQjtRQUNsQixPQUFPO1FBQ1AsUUFBUTtRQUNSLE1BQU07UUFDTixTQUFTO1FBQ1QsWUFBWTtRQUNaLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsY0FBYztJQUNsQjtJQUNBO1FBQ0ksZ0JBQWdCO1FBQ2hCLFlBQVk7SUFDaEI7SUFDQTtRQUNJLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksNEJBQTRCO0lBQ2hDO0lBQ0E7UUFDSSw0QkFBNEI7SUFDaEM7SUFDQTtRQUNJLGlCQUFpQjtRQUNqQixnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIseUJBQXlCO0lBQzdCO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7SUFDQTtRQUNJLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSx1QkFBdUI7SUFDM0I7SUFDQTtRQUNJLGlCQUFpQjtRQUNqQix1QkFBdUI7SUFDM0I7SUFDQTtRQUNJLHdCQUF3QjtJQUM1QjtJQUNBO1FBQ0ksc0JBQXNCO0lBQzFCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLDZCQUE2QjtRQUM3QixnQ0FBZ0M7SUFDcEM7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksaUJBQWlCO1FBQ2pCLG9CQUFvQjtRQUNwQixrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGVBQWUsQ0FBQzs7SUFFcEI7O0FBR0osMEJBQTBCOztBQUUxQjtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixjQUFjO0lBQ2QsU0FBUztJQUNULGNBQWM7QUFDbEI7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEM7O0FBQ0E7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQWFBO0lBQ0k7UUFDSSxTQUFTO0lBQ2I7SUFDQTtRQUNJLFdBQVc7SUFDZjtJQUNBO1FBQ0ksU0FBUztJQUNiO0FBQ0o7O0FBQ0EsT0FBTzs7QUFZUCx3Q0FBd0M7O0FBQ3hDO0lBQ0k7UUFDSSxTQUFTO0lBQ2I7SUFDQTtRQUNJLFdBQVc7SUFDZjtJQUNBO1FBQ0ksU0FBUztJQUNiO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9hY2NvdW50LXN1bW1hcnkvYWNjb3VudC1zdW1tYXJ5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBIZXJvU2VhcmNoIHByaXZhdGUgc3R5bGVzICovXHJcblxyXG4uc2VhcmNoLXJlc3VsdCBsaSB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JheTtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgZ3JheTtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGdyYXk7XHJcbiAgICB3aWR0aDogMjk1cHg7XHJcbiAgICAvKiBoZWlnaHQ6IDE2cHg7ICovXHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxufVxyXG5cclxuLnNlYXJjaC1yZXN1bHQgbGk6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYwN0Q4QjtcclxufVxyXG5cclxuLnNlYXJjaC1yZXN1bHQgbGkgYSB7XHJcbiAgICBjb2xvcjogIzg4ODtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uc2VhcmNoLXJlc3VsdCBsaSBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnNlYXJjaC1yZXN1bHQgbGkgYTphY3RpdmUge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4jc2VhcmNoLWJveCB7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbnVsLnNlYXJjaC1yZXN1bHQge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcblxyXG4vKlxyXG4gIENvcHlyaWdodCAyMDE3LTIwMTggR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0XHJcbiAgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cDovL2FuZ3VsYXIuaW8vbGljZW5zZVxyXG4gICovXHJcblxyXG4udG9wbGFiZWwge1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjM3MDIxO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLnJlY3RhbmdsZS0zIHtcclxuICAgIC8qd2lkdGg6IDgwMHB4O1xyXG4gIGhlaWdodDogMjQycHg7Ki9cclxuICAgIHBhZGRpbmc6IDQwcHggMTBweCAyMHB4IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmN2YzO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggMCByZ2JhKDI0MywgMTEyLCAzMywgMC4zKTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5cclxuLnRvcGhlYWQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMyNHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxufVxyXG5cclxuLnN1YnRvcGhlYWQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI0NXB4O1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgICAvKm1hcmdpbi1sZWZ0OiAtNzBweDsqL1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luLXRvcDogLTIwcHg7XHJcbn1cclxuXHJcbi5jb3B5IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDIxMHB4O1xyXG4gICAgdG9wOiAxNjBweDtcclxuICAgIHotaW5kZXg6IDk5O1xyXG4gICAgIC1tb3otYW5pbWF0aW9uOiBibGluayBub3JtYWwgMnMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7IC8qIEZpcmVmb3ggKi9cclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBibGluayBub3JtYWwgMnMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7IC8qIFdlYmtpdCAqL1xyXG4gICAgLW1zLWFuaW1hdGlvbjogYmxpbmsgbm9ybWFsIDJzIGluZmluaXRlIGVhc2UtaW4tb3V0OyAvKiBJRSAqL1xyXG4gICAgYW5pbWF0aW9uOiBibGluayBub3JtYWwgMnMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7IC8qIE9wZXJhIGFuZCBwcm9iIGNzczMgZmluYWwgaXRlcmF0aW9uICovXHJcbn1cclxuXHJcbi5yZXF1ZXN0X3BoeXNpY2FsX2NhcmQge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbn1cclxuXHJcbi5vcHRpb24ge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxufVxyXG5cclxuLk92YWwtQ29weS05IHtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uT3ZhbC1Db3B5LTEwIHt9XHJcblxyXG4ubmFtZSxcclxuLmNhcmRfbm8ge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5kZXRhaWxzIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNDdweDtcclxuICAgIGxlZnQ6IDUwcHg7XHJcbn1cclxuXHJcbi5leHBpcmVzLFxyXG4uZV9kYXRlLFxyXG4uY3Z2LFxyXG4uY3Z2X25vIHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MHB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG59XHJcblxyXG4uZXhwaXJlcyxcclxuLmN2diB7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuXHJcbi5jdnYge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xyXG59XHJcblxyXG4uZV9kYXRlLFxyXG4uY3Z2X25vIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHRvcDogNjBweDtcclxufVxyXG5cclxuLmN2dl9ubyB7XHJcbiAgICBtYXJnaW4tbGVmdDogOTVweDtcclxufVxyXG5cclxuLnllcyB7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICB0b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5ubyB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uaW5mb3JtYXRpb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNzBweDtcclxuICAgIHRvcDogNDEwcHg7XHJcbn1cclxuXHJcbi5jcm4sXHJcbi5pZnNjLFxyXG4uYWNjb3VudF9ubyxcclxuLmJyYW5jaCxcclxuLmRidCB7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBjb2xvcjogI2YzNzAyMTtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxuXHJcbi5jaGVja2JvY18xIHtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGNvbG9yOiAjZjM3MDIxO1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxufVxyXG5cclxuLmtleV9jcm4sXHJcbi5rZXlfaWZzYyxcclxuLmtleV9hY2NvdW50X25vLFxyXG4ua2V5X2JyYW5jaCB7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzk4OTg5ODtcclxuICAgIGJvcmRlci1sZWZ0OiBub25lO1xyXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcclxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxufVxyXG5cclxuLm5leHQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YzNzAyMTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiA3cHggMjVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxufVxyXG5cclxuLnBhZ2UxIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDM3MHB4O1xyXG4gICAgdG9wOiAxcHg7XHJcbn1cclxuXHJcbi5hcHBvaW50bWVudC1zdWdnZXN0aW9ucyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMzBweCk7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgei1pbmRleDogMTE7XHJcbiAgICB0b3A6IDEwMCU7XHJcbiAgICBsZWZ0OiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggMnB4IDFweCByZ2JhKDc3LCA3NywgNzcsIDAuMzIpO1xyXG59XHJcblxyXG4uYXBwb2ludG1lbnQtc3VnZ2VzdGlvbnMgbGkge1xyXG4gICAgcGFkZGluZzogNXB4IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzVkNWQ1ZDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xyXG59XHJcblxyXG4uYXBwb2ludG1lbnQtc3VnZ2VzdGlvbnMgbGk6bGFzdC1jaGlsZCB7XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG59XHJcblxyXG4uY2FyZERldGFpbHNJbnB1dCB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuaW5wdXRbdHlwZT0ncmFkaW8nXSB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4ueWVzLW5vLWJ0bi1hbGlnbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbn1cclxuXHJcbi55ZXMtc2hvdy1tc2cge1xyXG4gICAgbWFyZ2luLXRvcDogMjJweDtcclxuICAgIGNvbG9yOiAjNjQ2NDY0O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcblxyXG4ubWFpbkNvbnRlbnQtYWNudC1jc3RtIHtcclxuICAgIG1hcmdpbjogNyUgNCUgMiU7XHJcbn1cclxuXHJcbi5jYXJkRGV0YWlsc0lucHV0IHtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6IExpZ2h0O1xyXG59XHJcblxyXG4uY3Z2X25vIHtcclxuICAgIHRleHQtaW5kZW50OiA1cHg7XHJcbn1cclxuXHJcbi51cGxvYWRDb250YWluZXIge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgcGFkZGluZzogMHB4IDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMzUpO1xyXG59XHJcblxyXG4udXBsb2FkT3ZlcmxheSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4udXBsb2FkT3ZlcmxheSAudXBsb2FkQ29udGFpbmVyIC5oZWFkZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmN2YzO1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgcGFkZGluZzogMjBweCAyMHB4O1xyXG59XHJcblxyXG4udXBsb2FkT3ZlcmxheSAudXBsb2FkQ29udGFpbmVyIC5ib2R5IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIC8qIG1hcmdpbjogNThweDsgKi9cclxuICAgIC8qIGhlaWdodDogMTU1cHg7ICovXHJcbiAgICBwYWRkaW5nOiAyMHB4IDQwcHg7XHJcbn1cclxuXHJcbi5wYWRfcmFkaW8ge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDQlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG59XHJcblxyXG4ucGFkX3JhZGlvIHNwYW4ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbi5oZWFkZXJfbGFiZWwge1xyXG4gICAgZm9udC1mYW1pbHk6IE51bml0by1SZWd1bGFyO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICAgIC8qIHRleHQtYWxpZ246IGxlZnQ7ICovXHJcbiAgICBjb2xvcjogI2YzNzAyMTtcclxufVxyXG5cclxuLmZhdGNhX2RidCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIC8qIHdoaXRlLXNwYWNlOiBub3JtYWw7ICovXHJcbn1cclxuXHJcbi5wYWQtbGVmdCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbn1cclxuXHJcbi5jYW5jZWxfYnRuIHtcclxuICAgIHBhZGRpbmc6IDUlIDAlO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIC8qIHBhZGRpbmc6IDElIDYlOyAqL1xyXG4gICAgYmFja2dyb3VuZDogI2YzNzAyMTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uZGVhY3RpdmF0ZV9idG4ge1xyXG4gICAgcGFkZGluZzogNSUgMCU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgLyogcGFkZGluZzogMSUgNiU7ICovXHJcbiAgICBiYWNrZ3JvdW5kOiAjY2MxMzEzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcblxyXG4vKiBCYXNlIGZvciBsYWJlbCBzdHlsaW5nICovXHJcblxyXG4uY3VzdG9tLWNoZWNrW3R5cGU9XCJjaGVja2JveFwiXTpub3QoOmNoZWNrZWQpLFxyXG4uY3VzdG9tLWNoZWNrW3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IC05OTk5cHg7XHJcbn1cclxuXHJcbi5jdXN0b20tY2hlY2tbdHlwZT1cImNoZWNrYm94XCJdOm5vdCg6Y2hlY2tlZCkrbGFiZWwsXHJcbi5jdXN0b20tY2hlY2tbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQrbGFiZWwge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxLjk1ZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcblxyXG4vKiBjaGVja2JveCBhc3BlY3QgKi9cclxuXHJcbi5jdXN0b20tY2hlY2tbdHlwZT1cImNoZWNrYm94XCJdOm5vdCg6Y2hlY2tlZCkrbGFiZWw6YmVmb3JlLFxyXG4uY3VzdG9tLWNoZWNrW3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkK2xhYmVsOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMS42MGVtO1xyXG4gICAgaGVpZ2h0OiAxLjYwZW07XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjY2NjO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIC8qYm9yZGVyLXJhZGl1czogNHB4OyovXHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAuMSk7XHJcbn1cclxuXHJcblxyXG4vKiBjaGVja2VkIG1hcmsgYXNwZWN0ICovXHJcblxyXG4uY3VzdG9tLWNoZWNrW3R5cGU9XCJjaGVja2JveFwiXTpub3QoOmNoZWNrZWQpK2xhYmVsOmFmdGVyLFxyXG4uY3VzdG9tLWNoZWNrW3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkK2xhYmVsOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICfilqAnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwLjAxZW07XHJcbiAgICBsZWZ0OiAuMTAwZW07XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAwLjYxO1xyXG4gICAgY29sb3I6ICNlODc3MjI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzO1xyXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcblxyXG4vKiBjaGVja2VkIG1hcmsgYXNwZWN0IGNoYW5nZXMgKi9cclxuXHJcbi5jdXN0b20tY2hlY2tbdHlwZT1cImNoZWNrYm94XCJdOm5vdCg6Y2hlY2tlZCkrbGFiZWw6YWZ0ZXIge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbn1cclxuXHJcbi5jdXN0b20tY2hlY2tbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQrbGFiZWw6YWZ0ZXIge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbn1cclxuXHJcblxyXG4vKiBkaXNhYmxlZCBjaGVja2JveCAqL1xyXG5cclxuLmN1c3RvbS1jaGVja1t0eXBlPVwiY2hlY2tib3hcIl06ZGlzYWJsZWQ6bm90KDpjaGVja2VkKStsYWJlbDpiZWZvcmUsXHJcbi5jdXN0b20tY2hlY2tbdHlwZT1cImNoZWNrYm94XCJdOmRpc2FibGVkOmNoZWNrZWQrbGFiZWw6YmVmb3JlIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBib3JkZXItY29sb3I6ICNiYmI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG59XHJcblxyXG4uY3VzdG9tLWNoZWNrW3R5cGU9XCJjaGVja2JveFwiXTpkaXNhYmxlZDpjaGVja2VkK2xhYmVsOmFmdGVyIHtcclxuICAgIGNvbG9yOiAjOTk5O1xyXG59XHJcblxyXG4uY3VzdG9tLWNoZWNrW3R5cGU9XCJjaGVja2JveFwiXTpkaXNhYmxlZCtsYWJlbCB7XHJcbiAgICBjb2xvcjogI2FhYTtcclxufVxyXG5cclxuXHJcbi8qIGFjY2Vzc2liaWxpdHkgKi9cclxuXHJcbi5jdXN0b20tY2hlY2tbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQ6Zm9jdXMrbGFiZWw6YmVmb3JlLFxyXG4uY3VzdG9tLWNoZWNrW3R5cGU9XCJjaGVja2JveFwiXTpub3QoOmNoZWNrZWQpOmZvY3VzK2xhYmVsOmJlZm9yZSB7XHJcbiAgICBib3JkZXI6IDJweCBkb3R0ZWQgYmx1ZTtcclxuICAgIHRleHQtaW5kZW50OiA1cHg7XHJcbn1cclxuXHJcbi5tYWluQ29udGVudC1hY250LWNzdG0ge1xyXG4gICAgbWFyZ2luOiA3JSA0JSAyJTtcclxufVxyXG5cclxuLmNhcmRfZGlzcGxheV9uYW1lIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuXHJcbi5idXR0b25fc3R5bGVfbW9iaWxlMTIge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIlO1xyXG59XHJcblxyXG5cclxuLypNZWRpYSBxdWVyeSBzdGFydHMgaGVyZSovXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNTJweCkge1xyXG4gICAgLmNvcHkge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAxODBweDtcclxuICAgICAgICB0b3A6IDE0N3B4O1xyXG4gICAgfVxyXG4gICAgLmRlYml0Q2FyZCB7XHJcbiAgICAgICAgd2lkdGg6IDI1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICAubGFiZWxfbW9iaWxlX3JlcyB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IE51bml0by1SZWd1bGFyO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IC0zcHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzMnB4O1xyXG4gICAgICAgIC8qIG1hcmdpbi1ib3R0b206IDEycHg7ICovXHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHRvcDogLTIwcHg7XHJcbiAgICAgICAgY29sb3I6ICM2NDY0NjQ7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgLnJlY3RhbmdsZS0zIHtcclxuICAgICAgICAvKndpZHRoOiA4MDBweDtcclxuICAgICAgaGVpZ2h0OiAyNDJweDsqL1xyXG4gICAgICAgIHBhZGRpbmc6IDQwcHggMTBweCAyMHB4IDEwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZjdmMztcclxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMTBweCAwIHJnYmEoMjQzLCAxMTIsIDMzLCAwLjMpO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICB9XHJcbiAgICAuYnV0dG9uX3N0eWxlX21vYmlsZTEyIHtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjIlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAjc2VhcmNoLWJveCB7XHJcbiAgICAgICAgd2lkdGg6IDI3MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLnNlYXJjaC1yZXN1bHQgbGkge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgZ3JheTtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBncmF5O1xyXG4gICAgICAgIHdpZHRoOiAyNzVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIC8qIGhlaWdodDogMTZweDsgKi9cclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIH1cclxuICAgIC5tYXJnaW4tcGFkLTAge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgIH1cclxuICAgIC5hY2NvdW50LW1haW4tZGl2IHtcclxuICAgICAgICBwb3NpdGlvbjogc3RhdGljICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuYWNjb3VudFN1bW1hcnlEZXRhaWxzLWNzdG0ge1xyXG4gICAgICAgIHdpZHRoOiA5NyU7XHJcbiAgICAgICAgLyptYXJnaW46IDAgYXV0bzsqL1xyXG4gICAgfVxyXG4gICAgLmRpc2FibGVkQnRuIHtcclxuICAgICAgICBwYWRkaW5nOiA4cHggNDZweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmRldGFpbHMge1xyXG4gICAgICAgIHRvcDogNjdweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLnVwbG9hZENvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDg3JTtcclxuICAgICAgICBoZWlnaHQ6IDkwJTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIH1cclxuICAgIC5oZWFkZXIge1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG4gICAgLnVwbG9hZE92ZXJsYXkgLnVwbG9hZENvbnRhaW5lciAuYm9keSB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAxNnB4O1xyXG4gICAgfVxyXG4gICAgLmNhbmNlbF9idG4ge1xyXG4gICAgICAgIHBhZGRpbmc6IDhweCAzN3B4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuYWN0aXZlQnRuIHtcclxuICAgICAgICBwYWRkaW5nOiA4cHggNDZweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLnJhZGlvLWFsaWduLW1lZGlhIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTRweDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgfVxyXG4gICAgLm1hcmdpbi1wYWQtMCB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5zZWxlY3RfYm94IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC5wYWQtcmlnaHQge1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICB9XHJcbiAgICAuZmF0Y2FfZGJ0IHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEycHg7XHJcbiAgICB9XHJcbiAgICAudXBsb2FkT3ZlcmxheSAudXBsb2FkQ29udGFpbmVyIC5oZWFkZXIge1xyXG4gICAgICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLm1haW4tZGl2LWFjY291bnQge1xyXG4gICAgICAgIHRvcDogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLm1haW5Db250ZW50LnJvdy5tYWluQ29udGVudC1hY250LWNzdG0ubWFyZ2luLXBhZC0wIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAudXBsb2FkQ29udGFpbmVyIHtcclxuICAgICAgICBoZWlnaHQ6IDgzJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLnNlbGVjdF9ib3gge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuYWN0aXZlQnRuIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDQwcHggIWltcG9ydGFudDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5wYWQtbW9iaWxlIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgIH1cclxuICAgIC5idXR0b25fYWxpZ25lZF9tb2JpbGUge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5sYWJlbC1zdHlsaW5nLXRpdGxlLWFjY291bnR7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O31cclxuXHJcbiAgICB9XHJcblxyXG5cclxuLypNZWRpYSBxdWVyeSBzdGFydHMgaGVyZSovXHJcblxyXG4uZm9udF9mYW0ge1xyXG4gICAgZm9udC1mYW1pbHk6IE51bml0by1SZWd1bGFyO1xyXG59XHJcblxyXG4ubGFiZWwtc3R5bGluZy10aXRsZS1hY2NvdW50IHtcclxuICAgIGZvbnQtZmFtaWx5OiBOdW5pdG8tUmVndWxhcjtcclxuICAgIG1pbi1oZWlnaHQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogIzY0NjQ2NDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uYWN0aXZlQnRuIHtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm5vdGVBY2NvdW50U3VtbWFyeXtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGNvbG9yOiAjYjRiNGI0O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEycHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcbkAtbW96LWtleWZyYW1lcyBibGluayB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgb3BhY2l0eToxO1xyXG4gICAgfVxyXG4gICAgNTAlIHtcclxuICAgICAgICBvcGFjaXR5OjAuMztcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIG9wYWNpdHk6MTtcclxuICAgIH1cclxufSBcclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBibGluayB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgb3BhY2l0eToxO1xyXG4gICAgfVxyXG4gICAgNTAlIHtcclxuICAgICAgICBvcGFjaXR5OjAuMztcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIG9wYWNpdHk6MTtcclxuICAgIH1cclxufVxyXG4vKiBJRSAqL1xyXG5ALW1zLWtleWZyYW1lcyBibGluayB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgb3BhY2l0eToxO1xyXG4gICAgfVxyXG4gICAgNTAlIHtcclxuICAgICAgICBvcGFjaXR5OjAuMztcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIG9wYWNpdHk6MTtcclxuICAgIH1cclxufSBcclxuLyogT3BlcmEgYW5kIHByb2IgY3NzMyBmaW5hbCBpdGVyYXRpb24gKi9cclxuQGtleWZyYW1lcyBibGluayB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgb3BhY2l0eToxO1xyXG4gICAgfVxyXG4gICAgNTAlIHtcclxuICAgICAgICBvcGFjaXR5OjAuMztcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIG9wYWNpdHk6MTtcclxuICAgIH1cclxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/account-summary/account-summary.component.ts": 
        /*!**************************************************************!*\
          !*** ./src/app/account-summary/account-summary.component.ts ***!
          \**************************************************************/
        /*! exports provided: AccountSummaryComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountSummaryComponent", function () { return AccountSummaryComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
            /* harmony import */ var _shared_loader_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/loader/loader.service */ "./src/app/shared/loader/loader.service.ts");
            /* harmony import */ var _shared_progress_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/progress.service */ "./src/app/shared/progress.service.ts");
            /* harmony import */ var _shared_dialogue_dialogue_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/dialogue/dialogue.service */ "./src/app/shared/dialogue/dialogue.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _shared_activate_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/activate.module */ "./src/app/shared/activate.module.ts");
            /* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm2015/Subject.js");
            /* harmony import */ var _shared_screen_name__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/screen.name */ "./src/app/shared/screen.name.ts");
            /* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
            //import { PlatwareService } from '../shared/platware-client/platware.service';
            //import { of} from 'rxjs/observable/of';
            var AccountSummaryComponent = /** @class */ (function () {
                function AccountSummaryComponent(loaderservice, fb, appservice, 
                // private platware: PlatwareService,
                progressService, dialogueservice, router, location, locationurl, guardService, nameService, _authService) {
                    this.loaderservice = loaderservice;
                    this.fb = fb;
                    this.appservice = appservice;
                    this.progressService = progressService;
                    this.dialogueservice = dialogueservice;
                    this.router = router;
                    this.location = location;
                    this.locationurl = locationurl;
                    this.guardService = guardService;
                    this.nameService = nameService;
                    this._authService = _authService;
                    this.user = {
                        wireTransactionID: "",
                        accountNumber: "",
                        routingNumber: "",
                        cardNumber: "",
                    };
                    this.searchList_hide = true;
                    this.isDbtShow = true;
                    this.searchTerms = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
                    this.branches = {
                        options: []
                    };
                    this.cardRequireYes = false;
                    this.cardRequireNo = false;
                    this.AOF_Congrulations = true;
                    this.dbt_popup_display = false;
                    this.SSNNumber_dbtform = "";
                    this.crnNumber_dbtform = "";
                    this.accountNo_dbtform = "";
                    this.mobileNo_dtbform = "";
                    this.dbt_radio2_display = false;
                    this.dbt_radio3_display = false;
                    this.accountSummaryDetailsObj = {
                        'cardHolderName': '',
                        'cardRequirement': '',
                        'crn': '',
                        'ifsc': '',
                        'branch': '',
                        'accountNum': '',
                        'expires': '',
                        'cardNum': '',
                        'cvv': ''
                    };
                    this.congratulationsMsgObj = {
                        'loading': '',
                        'noCardSelected': ''
                    };
                    this.hasAccount = false;
                    this.setFormFields();
                    var ssnUserData = this.appservice.getSsnData();
                    this.hasAccount = this.appservice.getHasAccount();
                    this.user.wireTransactionID = ssnUserData.wireTransId || ssnUserData.accountDetails.wireTransId;
                    this.user.accountNumber = ssnUserData.accountNumber || ssnUserData.accountDetails.accountNumber;
                    this.user.routingNumber = ssnUserData.routingNumber || ssnUserData.accountDetails.routingNumber;
                    this.user.cardNumber = ssnUserData.cardNumber || ssnUserData.accountDetails.cardNumber;
                    // this.getErrorMessages();
                    //this.masterData = this.appservice.getMasterData();
                    // this.AOF_DISPOSITION = this.masterData.AOF.DATA.AOF_DISPOSITION;
                    // this.permanentPIN = this.masterData.AOF.DATA.ADDRESS[0].PIN_CODE.VALUE || '';
                    // this.otherPIN = this.masterData.AOF.DATA.ADDRESS[1].PIN_CODE.VALUE || '';
                    // this.permanentCity = this.masterData.AOF.DATA.ADDRESS[0].CITY_CODE.VALUE || '';
                    // this.mobile_number = this.masterData.AOF.DATA.MOBILE.MOB_NO || '';
                    // this.short_name = this.masterData.AOF.DATA.PSNL_DTL.SHORT_NAME.VALUE || '';
                    // this.state = this.masterData.AOF.DATA.ADDRESS[0].STATE_CODE.VALUE || '';
                    // this.addressLine3 = this.masterData.AOF.DATA.ADDRESS[0].ADR_LN_3.VALUE || '';
                    // this.addressLine2 = this.masterData.AOF.DATA.ADDRESS[0].ADR_LN_2.VALUE || '';
                    // this.addressLine1 = this.masterData.AOF.DATA.ADDRESS[0].ADR_LN_1.VALUE || '';
                    // this.mobileNo_dtbform = this.masterData['AOF']['DATA']['MOBILE']['MOB_NO'];
                    // this.SSNNumber_dbtform = this.masterData['AOF']['DATA']['SSN']['ADHR_NO'];
                    // this.crnNumber_dbtform = this.masterData['AOF']['DATA']['ACCOUNT_DTL']['CRN']['VALUE'];
                    // this.accountNo_dbtform = this.masterData['AOF']['DATA']['ACCOUNT_DTL']['ACCOUNT_NO']['VALUE'];
                    //this.showDbt = this.appservice.getDbt();
                    // if (this.AOF_DISPOSITION === "AAMSBM") {
                    //   this.AOF_Congrulations = false;
                    // }
                    // else {
                    //   this.AOF_Congrulations = true;
                    // }
                    // location.onPopState((e) => {
                    //   // console.log(e);
                    //   locationurl.go('/mobile');
                    //   // console.log('pressed back!');
                    // });
                }
                AccountSummaryComponent.prototype.ngOnInit = function () {
                    this.nameService.setName('Account Summary');
                    if (this.hasAccount) {
                        var user_registration = {
                            screen1: {
                                isActive: "YES",
                                isComplete: true,
                                loading: 100,
                            },
                            screen2: {
                                isActive: "YES",
                                isComplete: true,
                                loading: 100,
                            },
                            screen3: {
                                isActive: "YES",
                                isComplete: true,
                                loading: 100,
                            },
                            screen4: {
                                isActive: "YES",
                                isComplete: true,
                                loading: 100,
                            }
                        };
                        this.progressService.setLoaderWidth(user_registration);
                    }
                    else {
                        var user_registration = {
                            screen1: {
                                isActive: "YES",
                                isComplete: true,
                                loading: 100,
                            },
                            screen2: {
                                isActive: "YES",
                                isComplete: false,
                                loading: 100,
                            },
                            screen3: {
                                isActive: "NO",
                                isComplete: false,
                                loading: 0,
                            },
                            screen4: {
                                isActive: "NO",
                                isComplete: false,
                                loading: 0,
                            }
                        };
                        this.progressService.setLoaderWidth(user_registration);
                    }
                    // this.setFormFields();
                    dataLayer.push({
                        'url': '/vpv/sa-abhi/accountsummary',
                        'event': 'SA_AccountSummary'
                    });
                };
                //   getMasterBranches(){
                //     const REQ_DATA = [
                //       {
                //         processName: "GETMASTERDATA",
                //         data: [
                //           {
                //             "X_TYPE": "BANK_NAME",
                //             "X_VERSION": "0"
                //           }
                //         ]
                //       }
                //     ];
                //     this.loaderservice.showLoader("");
                //     // Aditya starts here
                //     this.DBTcheck = this.appservice.fetcsetDBTshow();
                //     // Aditya Ends here
                //     this.platware.callPlatware(REQ_DATA).subscribe(res => {
                //       //  this.loaderservice.hideLoader();
                //       try {
                //         const response_type = JSON.parse(res[0]['data'][0].data_object);
                //         this.bank_dropdown = response_type;
                //         //  this.bank_dropdown.length = 10;
                //         this.searchList();
                //         this.getBranches();
                //         // console.log(this.bank_dropdown);
                //         //// console.log(JSON.parse(users[0]['data_object']));
                //         //// console.log(this.selectedValue);
                //       }
                //       catch (error) {
                //         this.loaderservice.hideLoader();
                //         this.dialogueservice.alertBox({
                //           title: 'Error',
                //           message: this.appservice.getCatchmsg(),
                //           messageType: 'error',
                //           actionlabel: ['Close']
                //         }).take(1).subscribe((res) => {
                //           this.router.navigate(['/mobile']);
                //         })
                //       }
                //     })
                //   }
                //   getErrorMessages() {
                //     this.Seeding_DBT_RB_001 = this.appservice.getMessageMaster('DBT_RB_001');
                //     this.Seeding_DBT_RB_002 = this.appservice.getMessageMaster('DBT_RB_002');
                //     this.Seeding_DBT_RB_003 = this.appservice.getMessageMaster('DBT_RB_003');
                //     this.Seeding_DBT_RB_004 = this.appservice.getMessageMaster('DBT_RB_004');
                //     this.Seeding_DBT_RB_005 = this.appservice.getMessageMaster('DBT_RB_005');
                //     this.Seeding_DBT_Declaration = this.appservice.getMessageMaster('DBT_Declaration');
                //     this.Seeding_DBT_RB_ERROR = this.appservice.getMessageMaster('DBT_RB_ERROR');
                //     this.showloader = this.appservice.getMessageMaster('0032');
                //     this.CIFexist = this.appservice.getMessageMaster('00000122');
                //     this.CIFnotexist = this.appservice.getMessageMaster('0030');
                //     this.NoteAccountDetails = this.appservice.getMessageMaster('ADT00006');
                //     // this.congratulationsMsgObj.loading = this.appservice.getMessageMaster('00000124');
                //     // this.congratulationsMsgObj.noCardSelected = this.appservice.getMessageMaster('00000130 ');
                //   }
                //   search(term: string): void {
                //     this.searchList_hide = true;
                //     this.iin_selected = "";
                //     this.searchTerms.next(term);
                //   }
                //   searchList() {
                //     this.heroes$ = this.searchTerms.pipe(
                //       // wait 300ms after each keystroke before considering the term
                //       debounceTime(10),
                //       // ignore new term if same as previous term
                //       distinctUntilChanged(),
                //       // switch to new search observable each time the term changes
                //       switchMap((term: string) => this.getHeroes(term)),
                //     );
                //   }
                //   getHeroes(term: string): Observable<string[]> {
                //     //  return of(this.country);
                //     if (!term) {
                //       return of([]);
                //     }
                //     return of(this.bank_dropdown.filter(it => {
                //       return it['BANK_NAME'].toLowerCase().includes(term.toLowerCase());
                //     }));
                //   }
                //   selectedbank_option1(value) {
                //     this.DBTForm.controls['radio2_bankName'].setValue(value.BANK_NAME);
                //     this.searchList_hide = false;
                //     this.onChange(value.BANK_NAME);
                //     // console.log(value);
                //   }
                //   selectedbank(value) {
                //     this.DBTForm.controls['radio3_bankName'].setValue(value.BANK_NAME);
                //     this.searchList_hide = false;
                //     this.onChange(value.BANK_NAME);
                //     // console.log(value);
                //   }
                AccountSummaryComponent.prototype.setFormFields = function () {
                    this.accountSummaryDetails = this.fb.group({
                        // cardHolderName: [''],
                        //  cardRequirement: ['', Validators.required],
                        wireTransactionID: ['', { disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                        accountNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                        routingNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                        cardNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    });
                };
                //     this.DBTForm = this.fb.group({
                //       dbtRequirement_Tab: ['', Validators.required],
                //       fatca: [true, Validators.requiredTrue]
                //     })
                //     // this.accountSummaryDetails.controls['cardRequirement'].valueChanges.subscribe(
                //     //   (selectedValue) => {
                //     //     // console.log(selectedValue);
                //     //     if (selectedValue === "true") {
                //     //       this.cardRequireYes = true;
                //     //     }
                //     //     else {
                //     //       this.cardRequireYes = false;
                //     //     }
                //     //     // // console.log(this.nomineeDetailsForm.get('nominee_address_option').value);     
                //     //   }
                //     // )
                //     // Aditya starts here for DBT HIDE
                //     if (this.DBTcheck) {
                //       document.getElementById("DBTshow").style.display = "none";
                //     }
                //     else {
                //       this.accountSummaryDetails.controls['dbtRequirement'].valueChanges.subscribe(
                //         (selectedValue) => {
                //           // console.log(selectedValue);
                //           if (selectedValue === "true") {
                //             this.dbt_popup_display = true;
                //           }
                //           else {
                //             this.dbt_popup_display = false;
                //           }
                //         }
                //       )
                //       this.DBTForm.controls['dbtRequirement_Tab'].valueChanges.subscribe(
                //         (selectedValue) => {
                //           if (selectedValue === "radio2") {
                //             this.dbt_radio2_display = true;
                //             this.dbt_radio3_display = false;
                //             this.iin_selected = "";
                //             this.DBTForm.addControl('radio2_bankName', new FormControl('', Validators.required));
                //             this.DBTForm.addControl('radio2_IIN', new FormControl(''));
                //             this.DBTForm.removeControl('radio3_bankName');
                //             this.DBTForm.removeControl('radio3_IIN')
                //           }
                //           else if (selectedValue === "radio3") {
                //             this.iin_selected = "";
                //             this.dbt_radio3_display = true;
                //             this.dbt_radio2_display = false;
                //             this.DBTForm.addControl('radio3_bankName', new FormControl('', Validators.required));
                //             this.DBTForm.addControl('radio3_IIN', new FormControl(''));
                //             this.DBTForm.removeControl('radio2_bankName');
                //             this.DBTForm.removeControl('radio2_IIN');
                //           }
                //           else {
                //             this.dbt_radio2_display = false;
                //             this.dbt_radio3_display = false;
                //             this.DBTForm.removeControl('radio2_bankName');
                //             this.DBTForm.removeControl('radio2_IIN');
                //             this.DBTForm.removeControl('radio3_bankName');
                //             this.DBTForm.removeControl('radio3_IIN')
                //           }
                //         }
                //       )
                //     }
                //     // Aditya Ends here for DBT HIDE
                //     this.getMasterBranches();
                //     //
                //   }
                //   onChange(Value) {
                //     const arr = this.bank_dropdown.filter(x => x.BANK_NAME === Value);
                //     // console.log(arr);
                //     this.iin_selected = arr[0]['IIN'] || '';
                //   }
                //   NextDBT() {
                //     this.dbt_popup_display = false;
                //     // console.log(this.DBTForm.value);
                //     // console.log(this.accountSummaryDetails.value);
                //   }
                //   DBTCancel() {
                //     this.dbt_popup_display = false;
                //     this.accountSummaryDetails.controls['dbtRequirement'].reset();
                //     // document.getElementById("checked").checked=true;
                //     this.accountSummaryDetails.controls['dbtRequirement'].setValue('false');
                //     this.accountSummaryDetails.controls['dbtRequirement'].updateValueAndValidity();
                //   }
                //   getCBSDetails() {
                //     this.loaderservice.showLoader(this.showloader);
                //     let date_format = this.masterData.AOF.DATA.PSNL_DTL.DOB.VALUE;
                //     let dateParts = date_format.split("-");
                //     if (dateParts[0].length != 4) {
                //       let newArrayDate = [];
                //       newArrayDate.push(dateParts[2]);
                //       newArrayDate.push(dateParts[1])
                //       newArrayDate.push(dateParts[0])
                //       date_format = newArrayDate.join ("-")
                //     }
                //     // const date_split = date_format.split('-');
                //     // const new_date_format = date_split[2] + '-' + date_split[1] + '-' + date_split[0];
                //     const email = this.masterData.AOF.DATA.PSNL_DTL.EMAIL_ID.VALUE || '';
                //     const gender = this.masterData.AOF.DATA.PSNL_DTL.GENDER.VALUE.toLowerCase() || '';
                //     const date_of_birth = date_format || '';
                //     const last_name = this.masterData.AOF.DATA.PSNL_DTL.LAST_NAME.VALUE || '';
                //     const first_name = this.masterData.AOF.DATA.PSNL_DTL.FIRST_NAME.VALUE || '';
                //     const middle_name = this.masterData.AOF.DATA.PSNL_DTL.MIDDLE_NAME.VALUE || '';
                //     const SSN_number = this.masterData.AOF.DATA.SSN.ADHR_NO || '';
                //     const pan = this.masterData.AOF.DATA.IT_DTL.PAN_NO.VALUE || '';
                //     // ** const nomineeObj = {
                //     // **  'zip': this.masterData.AOF.DATA.NOMINEE.NOMINEE_ADRS.PIN_CODE.VALUE || '',
                //     // ** };
                //     const mail_address = {
                //       'zip': this.masterData.AOF.DATA.ADDRESS[1].PIN_CODE.VALUE || '',
                //       'country': this.masterData.AOF.DATA.ADDRESS[1].COUNTRY.VALUE.toUpperCase() || '',
                //       'line4': '',
                //       'city': this.masterData.AOF.DATA.ADDRESS[1].CITY_CODE.VALUE.toUpperCase() || '',
                //       'state': this.masterData.AOF.DATA.ADDRESS[1].STATE_CODE.VALUE.toUpperCase() || '',
                //       'line3': this.masterData.AOF.DATA.ADDRESS[1].ADR_LN_3.VALUE || '',
                //       'line2': this.masterData.AOF.DATA.ADDRESS[1].ADR_LN_2.VALUE || '',
                //       'line1': this.masterData.AOF.DATA.ADDRESS[1].ADR_LN_1.VALUE || '',
                //     };
                //     // By adita starts here
                //     let SSNCity = this.masterData.AOF.DATA.ADDRESS[0].PIN_CITY.VALUE;
                //     let SSNState = this.masterData.AOF.DATA.ADDRESS[0].PIN_STATE.VALUE;
                //     if (!SSNCity) {
                //       this.CbsCity = this.permanentCity.toUpperCase();
                //       this.Line4 = "";
                //     }
                //     else {
                //       this.CbsCity = SSNCity.toUpperCase();
                //       this.Line4 = this.permanentCity.toUpperCase();
                //     }
                //     if (!SSNState) {
                //       this.CbsState = this.state.toUpperCase();
                //     }
                //     else {
                //       this.CbsState = SSNState.toUpperCase();
                //     }
                //     if (this.masterData.AOF.DATA.PSNL_DTL.ADDRESS_SAME_AS.toUpperCase() == "NO") {
                //       mail_address.city = this.masterData.AOF.DATA.ADDRESS[1].CITY_CODE.VALUE.toUpperCase() || '';
                //       mail_address.line4 = '';
                //       mail_address.state = this.masterData.AOF.DATA.ADDRESS[1].STATE_CODE.VALUE.toUpperCase() || '';
                //     }
                //     else {
                //       if (!SSNCity) {
                //         mail_address.city = this.permanentCity.toUpperCase();
                //         mail_address.line4 = "";
                //       }
                //       else {
                //         mail_address.city = SSNCity.toUpperCase();
                //         mail_address.line4 = this.permanentCity.toUpperCase();
                //       }
                //       if (!SSNState) {
                //         mail_address.state = this.state.toUpperCase();
                //       }
                //       else {
                //         mail_address.state = SSNState.toUpperCase();
                //       }
                //     }
                //     // By aditya Ends here
                //    var sex = gender === 'm' ? sex = 'M' : sex = 'F';
                //    var prefix = gender === 'm' ? prefix = 'MR.' : prefix = 'MRS.';
                //     const cbsObj = {
                //       'ref_input_1': this.masterData.AOF.KEYS.AOF_ID,
                //       //'ref_input_2': this.masterData.AOF.KEYS.MEMBER_ID,
                //       'ref_input_2': 'Yes',
                //       'ref_input_3': this.masterData.AOF.KEYS.LEAD_ID,
                //       'email_id': email,
                //       'zip': this.permanentPIN,
                //       'country': 'IN',
                //       'line4': this.Line4.toUpperCase(),
                //       'city': this.CbsCity,
                //       'prefix': prefix,
                //       'date_of_birth': date_of_birth,
                //       'last_name': last_name,
                //       'nominee_details': '', // JSON.stringify(nomineeObj),
                //       'middle_name': middle_name,
                //       'product_code': '20101',
                //       'branch_code': this.branches.options[0].branch_cd,
                //       'SSN_number': SSN_number,
                //       'short_name': this.short_name,
                //       'state': this.CbsState,
                //       'mobile_number': this.mobile_number,
                //       'pan': pan,
                //       'sex': sex,
                //       'line3': this.addressLine3,
                //       'line2': this.addressLine2,
                //       'line1': this.addressLine1,
                //       'customer_id': '',
                //       'first_name': first_name,
                //       'mail_address': JSON.stringify(mail_address),
                //       'request_id': this.randomString(10),
                //       'customer_image': this.masterData.AOF.DATA.PHOTOGRAPH.SSN_IMAGE,
                //       'occupation':this.masterData.AOF.DATA.IT_DTL.OCCUPATION.VALUE,
                //       'annual_income':this.masterData.AOF.DATA.IT_DTL.ANNUAL_INCOME.VALUE
                //     };
                //     const req = [{
                //       processName: 'ACCOUNTCREATION',
                //       data: [{
                //         'request_json': JSON.stringify(cbsObj)
                //       }]
                //     }];
                //     // this.loaderservice.showLoader(this.showloader);
                //     this.platware.callPlatware(req).subscribe(res => {
                //       try {
                //         const response = JSON.parse(res[0].data);
                //         // console.log(response);
                //         const message_code = response['message_code'] || '';
                //         const process_status = response['process_status'].toLowerCase() || '';
                //         const response_type = response['response_type'] || '';
                //         const response_message = response['response_message'] || '';
                //         let cifExits;
                //         if(response_message){
                //           cifExits=response_message.split(/(\s+)/).filter( function(e) { return e.trim().length > 0; } );
                //           cifExits = cifExits.join(' ');
                //         }
                //         if (process_status == 'success' && message_code == '0') {
                //           const accountSummary = JSON.parse(response['response']);
                //           const accountNum = accountSummary['account_number'];
                //           const crn = accountSummary['customer_id'];
                //           // const accountNum = "1911240415409169";
                //           // const crn = "22732162";
                //           this.accountSummaryDetails.controls.crn.setValue(crn);
                //           this.accountSummaryDetails.controls.accountNum.setValue(accountNum);
                //           this.dataMasterSync(accountNum, crn);
                //           this.euronetDetails(accountNum, crn);
                //           // this.loaderservice.hideLoader();
                //         }
                //         else if (message_code === "000006") {
                //           this.loaderservice.hideLoader();
                //           const error_msg = this.appservice.getMessageMaster('0031');
                //           // const accountNum = "1911240415409169";
                //           // const crn = "22732162";
                //           // this.accountSummaryDetails.controls.crn.setValue(crn);
                //           // this.accountSummaryDetails.controls.accountNum.setValue(accountNum);
                //           this.dialogueservice.alertBox({
                //             title: 'Error',
                //             message: error_msg,
                //             messageType: 'error',
                //             actionlabel: ['Close']
                //           }).take(1).subscribe((res) => {
                //             // console.log(res);
                //             this.router.navigate(['/mobile']);
                //           })
                //         }
                //         else if (cifExits == "CIF Customer already exists") {
                //           // const response_msg_match = JSON.parse(response['response_message']);
                //           //const message_error = response_msg_match['RESPONSE_MESSAGE'];
                //           this.loaderservice.hideLoader();
                //           this.dialogueservice.alertBox({
                //             title: 'Error',
                //             message: this.CIFexist,
                //             messageType: 'error',
                //             actionlabel: ['Close']
                //           }).take(1).subscribe((res) => {
                //             // console.log(res);
                //             this.router.navigate(['/mobile']);
                //           })
                //         }
                //         else {
                //           // const response_msg_match = JSON.parse(response['response_message']);
                //           //const message_error = response_msg_match['RESPONSE_MESSAGE'];
                //           this.loaderservice.hideLoader();
                //           this.dialogueservice.alertBox({
                //             title: 'Error',
                //             message: this.CIFnotexist,
                //             messageType: 'error',
                //             actionlabel: ['Close']
                //           }).take(1).subscribe((res) => {
                //             // console.log(res);
                //             this.router.navigate(['/mobile']);
                //           })
                //         }
                //       }
                //       catch (error) {
                //         this.loaderservice.hideLoader();
                //         this.dialogueservice.alertBox({
                //           title: 'Error',
                //           message: this.appservice.getCatchmsg(),
                //           messageType: 'error',
                //           actionlabel: ['Close']
                //         }).take(1).subscribe((res) => {
                //           //this.router.navigate(['/mobile']);
                //         })
                //       }
                //     },
                //       err => {
                //       });
                //   }
                //   dataMasterSync(accountNum, crn) {
                //     this.loaderservice.showLoader(this.showloader);
                //     this.masterData['AOF']['DATA']['ACCOUNT_DTL']['CRN']["VALUE"] = crn;
                //     this.masterData['AOF']['DATA']['ACCOUNT_DTL']['ACCOUNT_NO']["VALUE"] = accountNum;
                //     this.masterData['AOF']['DATA']['ACCOUNT_DTL']['BRANCH_NO']['BRANCH_NAME'] = this.branchName_dataSync;
                //     this.masterData['AOF']['DATA']['ACCOUNT_DTL']['BRANCH_NO']['DEFAULT_BRANCH'] = this.defaulyBranch_dataSync;
                //     this.masterData['AOF']['DATA']['ACCOUNT_DTL']['BRANCH_NO']['VALUE'] = this.branch_code;
                //     this.masterData['AOF']['DATA']['ACCOUNT_DTL']['IFSC']['VALUE'] = this.ifsc_dataSync;
                //     this.accountNo_dbtform = accountNum;
                //     this.crnNumber_dbtform = crn;
                //     this.mobileNo_dtbform = this.masterData['AOF']['DATA']['MOBILE']['MOB_NO'];
                //     this.SSNNumber_dbtform = this.masterData['AOF']['DATA']['SSN']['ADHR_NO'];
                //     this.masterData['AOF']['DATA']['CURRENT_SCREEN_DTLS']['PORTAL_SCREEN_ID'] = '7';
                //     this.masterData['AOF']['DATA']['AOF_DISPOSITION'] = "AAMSBM";
                //     const masterData_sync = this.masterData;
                //     const reqObj = [{
                //       processName: 'SPTBINSERTAOFCUSTOBJ',
                //       data: [{
                //         'X_OBJECT_DATA': JSON.stringify(this.masterData),
                //         'X_DEVICE_MODIFY_TIMESTAMP': '',
                //         'X_DEVICE_CREATE_TIMESTAMP': '',
                //         'X_OBJECT_KEY': '',
                //         'X_OBJECT_VERSION': ''
                //       }]
                //     }];
                //     //this.apploader.showLoader('');
                //     this.platware.callPlatware(reqObj).subscribe(res => {
                //       this.loaderservice.hideLoader();
                //       //const response_code = res[0]['data'][0].response_code;
                //       //const response_type = res[0]['data'][0].response_type;
                //       // const response_message = JSON.parse(res[0].response_message);
                //       // const displayMsg = this.appservice.getMessageMaster(response_code, response_message);
                //       this.appservice.setMasterData(masterData_sync);
                //       // if (response_type === 'I') {
                //       //  // this.appservice.setMasterData(masterData_sync);
                //       //   // this.router.navigate(['/accountSummary']);
                //       // } else if (response_type == 'E') {
                //       // }
                //     })
                //   }
                //   euronetDetails(accountNum, crn) {
                //     this.loaderservice.showLoader(this.showloader);
                //     // By aditya starts here
                //     let SSNCityEuro = this.masterData.AOF.DATA.ADDRESS[0].PIN_CITY.VALUE;
                //     let SSNStateEuro = this.masterData.AOF.DATA.ADDRESS[0].PIN_STATE.VALUE;
                //     if (!SSNCityEuro) {
                //       this.EuroCity = this.permanentCity.toUpperCase();
                //       this.EuroLine4 = "";
                //     }
                //     else {
                //       this.EuroCity = SSNCityEuro.toUpperCase();//Pincity
                //       this.EuroLine4 = this.permanentCity.toUpperCase();//Permanent city
                //     }
                //     if (!SSNStateEuro) {
                //       this.EuroState = this.state.toUpperCase();
                //     }
                //     else {
                //       this.EuroState = SSNStateEuro.toUpperCase();
                //     }
                //     // By aditya Ends here
                //     const euronetObj = {
                //       'zip': this.permanentPIN,
                //       'country': 'IN',
                //       'home_phone': this.mobile_number,
                //       'bussiness_phone': this.mobile_number,
                //       'alternate_phone1': this.mobile_number,
                //       'alternate_phone2': this.mobile_number,
                //       'account_number': accountNum,
                //       'line4': this.EuroLine4,
                //       'city': this.EuroCity,
                //       'unique_citizen_id': '',
                //       'branch_code': this.branches.options[0].branch_cd,
                //       'short_name': this.short_name,
                //       'state': this.EuroState,
                //       'line3': this.addressLine3,
                //       'line2': this.addressLine2,
                //       'line1': this.addressLine1,
                //       'cif_key': crn,
                //       'request_id': this.randomString(10),
                //       'LEADGETCARDDETAILS': 'A' + '' + this.mobile_number,
                //       'AOFGETCARDDETAILS': 'A' + '' + this.mobile_number,
                //       'MEMBERGETCARDDETAILS': 'A' + '' + this.mobile_number,
                //       'ref_input_1': this.masterData.AOF.KEYS.AOF_ID,
                //       'ref_input_2': this.masterData.AOF.KEYS.MEMBER_ID,
                //       'ref_input_3': this.masterData.AOF.KEYS.LEAD_ID
                //     };
                //     const reqObj = [{
                //       processName: 'GETCARDDETAILS',
                //       data: [{
                //         'request_json': JSON.stringify(euronetObj)
                //       }]
                //     }];
                //     // Add By adi starts Here
                //     this.platware.callPlatware(reqObj).subscribe(res => {
                //     // this.loaderservice.showLoader(this.showloader);
                //       try {
                //         const response = JSON.parse(res[0].data);
                //         // const response ={"response_message":"Card details has been generated successfully","response":"{\"cvv\":\"294\",\"card_number\":\"6080880152111923\",\"expiry_date\":\"20230531 \",\"name_on_card\":\"Parveen\"}","message_code":"0","process_status":"SUCCESS","response_type":"I"}
                //         if (response.process_status.toUpperCase() == "SUCCESS") {
                //           const eurores = JSON.parse(response.response);
                //           const cvv = eurores.cvv || '';
                //           let cardNum = ""
                //           if (eurores.card_number) {
                //             cardNum = eurores.card_number.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
                //           }
                //           else {
                //             cardNum = '';
                //           }
                //           // const expires = eurores.expiry_date || '';
                //           let expires = '';
                //           if (eurores.expiry_date) {
                //             expires = eurores.expiry_date.slice(2, 6);
                //             let Expiryyear = expires.slice(0, 2);
                //             let Expirymonth = expires.slice(2, 4);
                //             expires = Expirymonth + '' + Expiryyear;
                //             expires = expires.replace(/[^\dA-Z]/g, '/').replace(/(.{2})/g, '$1/').trim();
                //             expires = expires.slice(0, 5);
                //           }
                //           else {
                //             expires = '';
                //           }
                //           const cardHolderName = eurores.name_on_card || '';
                //           this.accountSummaryDetails.controls.cvv.setValue(cvv);
                //           this.accountSummaryDetails.controls.cardNum.setValue(cardNum);
                //           this.accountSummaryDetails.controls.expires.setValue(expires);
                //           this.accountSummaryDetails.controls.cardHolderName.setValue(cardHolderName);
                //           this.accountSummaryDetails.controls.crn.setValue(this.masterData['AOF']['DATA']['ACCOUNT_DTL']['CRN']["VALUE"]);
                //           this.accountSummaryDetails.controls.accountNum.setValue(this.masterData['AOF']['DATA']['ACCOUNT_DTL']['ACCOUNT_NO']["VALUE"]);
                //           this.DataSync(true);
                //           this.loaderservice.hideLoader();
                //         } else {
                //           if (response.message_code === '000006') {
                //             this.loaderservice.hideLoader();
                //             const error_msg = this.appservice.getMessageMaster('0031');
                //             this.dialogueservice.alertBox({
                //               title: 'Error',
                //               message: error_msg,
                //               messageType: 'error',
                //               actionlabel: ['Close']
                //             }).take(1).subscribe((res) => {
                //               this.router.navigate(['/mobile']);
                //             });
                //           }
                //           else {
                //             this.loaderservice.hideLoader();
                //             const error_msg = this.appservice.getMessageMaster('05');
                //             this.dialogueservice.alertBox({
                //               title: 'Error',
                //               message: error_msg,
                //               messageType: 'error',
                //               actionlabel: ['Close']
                //             }).take(1).subscribe((res) => {
                //               this.router.navigate(['/mobile']);
                //             })
                //           }
                //         }
                //       }
                //       catch (error) {
                //         this.loaderservice.hideLoader();
                //         this.dialogueservice.alertBox({
                //           title: 'Error',
                //           message: this.appservice.getCatchmsg(),
                //           messageType: 'error',
                //           actionlabel: ['Close']
                //         }).take(1).subscribe((res) => {
                //           this.router.navigate(['/mobile']);
                //         })
                //       }
                //       // Add By adi Ends Here
                //     },
                //       err => {
                //         this.accountSummaryDetails.controls.crn.setValue(this.masterData['AOF']['DATA']['ACCOUNT_DTL']['CRN']["VALUE"]);
                //         this.accountSummaryDetails.controls.accountNum.setValue(this.masterData['AOF']['DATA']['ACCOUNT_DTL']['ACCOUNT_NO']["VALUE"]);
                //         this.loaderservice.hideLoader();
                //       });
                //   }
                //   randomString(length): string {
                //     const chars =
                //       '0123456789';
                //     let result = '';
                //     for (let i = length; i > 0; --i) {
                //       result += chars[Math.round(Math.random() * (chars.length - 1))];
                //     }
                //     return result;
                //   }
                //   getBranches() {
                //     this.loaderservice.showLoader(this.showloader);
                //     const reqObj = [{
                //       processName: 'SPPRGETBRANCH',
                //       data: [{
                //         'X_PINCODE_PRM': this.permanentPIN,
                //         'X_PINCODE_OTH': this.otherPIN
                //       }]
                //     }];
                //     this.platware.callPlatware(reqObj).subscribe(res => {
                //       // console.log(res);
                //       try {
                //         // this.loaderservice.hideLoader();
                //         const default_branch = res[0].data[0].default_branch || '';
                //         const ifsc = res[0].data[0].ifsc || '';
                //         res[0].data.forEach(individualBranch => {
                //           const branch_cd = individualBranch.branch_cd || '';
                //           const branch_name = individualBranch.branch_name || '';
                //           const obj = {
                //             'branch_name': branch_name,
                //             'branch_cd': branch_cd
                //           };
                //           this.branches.options.push(obj);
                //         });
                //         this.branchName_dataSync = res[0].data[0].branch_name;
                //         this.defaulyBranch_dataSync = res[0].data[0].default_branch;
                //         this.ifsc_dataSync = res[0].data[0].ifsc;
                //         this.branch_code = res[0].data[0].branch_cd;
                //         this.accountSummaryDetails.controls.cardHolderName.setValue('');
                //         this.accountSummaryDetails.controls.cardNum.setValue('');
                //         this.accountSummaryDetails.controls.expires.setValue('');
                //         this.accountSummaryDetails.controls.cvv.setValue('');
                //         this.accountSummaryDetails.controls.ifsc.setValue(ifsc);
                //         if (this.branches.options.length == 1) {
                //           this.accountSummaryDetails.controls.branch.setValue(this.branches.options[0].branch_name);
                //           if (this.masterData['AOF']['DATA']['ACCOUNT_DTL']['CRN']["VALUE"] === "") {
                //             this.getCBSDetails();
                //           }
                //           else {
                //             this.euronetDetails(this.masterData['AOF']['DATA']['ACCOUNT_DTL']['ACCOUNT_NO']["VALUE"], this.masterData['AOF']['DATA']['ACCOUNT_DTL']['CRN']["VALUE"]);
                //           }
                //         }
                //      // **   if (default_branch == 'N') {
                //      // ** }
                //       }
                //       catch (error) {
                //         this.loaderservice.hideLoader();
                //         this.dialogueservice.alertBox({
                //           title: 'Error',
                //           message: this.appservice.getCatchmsg(),
                //           messageType: 'error',
                //           actionlabel: ['Close']
                //         }).take(1).subscribe((res) => {
                //           this.router.navigate(['/mobile']);
                //         })
                //       }
                //     },
                //       err => {
                //         // console.log(err);
                //       });
                //   }
                //   getForm() {
                //     // console.log(this.accountSummaryDetails);
                //   }
                //   copyToClipborad() {
                //     const name = 'Your Name: ' + this.accountSummaryDetails.controls['cardHolderName'].value;
                //     const cardnum = 'Your Card No.: ' + this.accountSummaryDetails.controls['cardNum'].value;
                //     const cvv = 'Your CVV: ' + this.accountSummaryDetails.controls['cvv'].value;
                //     const expires = 'Expires On: ' + this.accountSummaryDetails.controls['expires'].value;
                //     const copiedString = name + ' ' + cardnum + ' ' + cvv + ' ' + expires;
                //     const element = document.createElement('textarea');
                //     // element.style.display = 'none';
                //     document.body.appendChild(element);
                //     element.innerHTML = copiedString;
                //     element.select();
                //    // ** const copies = document.execCommand('Copy');
                //     // console.log(copies);
                //     document.body.removeChild(element);
                //     this.dialogueservice.toastBox(({
                //           title: 'Error',
                //           message: "Copied to clipboard",
                //           messageType: 'error',
                //           actionlabel: ['Close']
                //     }))
                //   }
                AccountSummaryComponent.prototype.DataSync = function () {
                    this.router.navigate(['/deposit']);
                };
                AccountSummaryComponent.prototype.deactivateAccount = function () {
                    var _this = this;
                    var ssnUserData = this.appservice.getSsnData();
                    this._authService.deactivateAccount(ssnUserData)
                        .subscribe(function (resp) {
                        console.log(resp);
                        if (resp) {
                            _this.dialogueservice.confirmBox({
                                title: 'Account Deactivated',
                                message: "Account Deactivated Successfully. We'll miss you",
                                messageType: 'error',
                                actionlabel: ['Close']
                            }).take(1).subscribe(function (res) {
                                console.log(res);
                                _this.router.navigate(['/welcome']);
                            });
                        }
                    });
                };
                return AccountSummaryComponent;
            }());
            AccountSummaryComponent.ctorParameters = function () { return [
                { type: _shared_loader_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] },
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
                { type: _app_service__WEBPACK_IMPORTED_MODULE_3__["appService"] },
                { type: _shared_progress_service__WEBPACK_IMPORTED_MODULE_5__["ProgressService"] },
                { type: _shared_dialogue_dialogue_service__WEBPACK_IMPORTED_MODULE_6__["DialogueService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["PlatformLocation"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"] },
                { type: _shared_activate_module__WEBPACK_IMPORTED_MODULE_9__["WorkflowService"] },
                { type: _shared_screen_name__WEBPACK_IMPORTED_MODULE_11__["NameService"] },
                { type: _auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"] }
            ]; };
            AccountSummaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-account-summary',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./account-summary.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/account-summary/account-summary.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./account-summary.component.css */ "./src/app/account-summary/account-summary.component.css")).default]
                })
            ], AccountSummaryComponent);
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: routes, AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function () { return routes; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
            /* harmony import */ var _mobile_mobile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mobile/mobile.component */ "./src/app/mobile/mobile.component.ts");
            /* harmony import */ var _account_summary_account_summary_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./account-summary/account-summary.component */ "./src/app/account-summary/account-summary.component.ts");
            /* harmony import */ var _personal_info_personal_info_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./personal-info/personal-info.component */ "./src/app/personal-info/personal-info.component.ts");
            /* harmony import */ var _congratulations_congratulations_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./congratulations/congratulations.component */ "./src/app/congratulations/congratulations.component.ts");
            /* harmony import */ var _deposit_money_deposit_money_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./deposit-money/deposit-money.component */ "./src/app/deposit-money/deposit-money.component.ts");
            /* harmony import */ var _biometric_kyc_biometric_kyc_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./biometric-kyc/biometric-kyc.component */ "./src/app/biometric-kyc/biometric-kyc.component.ts");
            /* harmony import */ var _SSN_SSN_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SSN/SSN.component */ "./src/app/SSN/SSN.component.ts");
            /* harmony import */ var _pan_pan_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pan/pan.component */ "./src/app/pan/pan.component.ts");
            /* harmony import */ var _nominee_details_nominee_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./nominee-details/nominee-details.component */ "./src/app/nominee-details/nominee-details.component.ts");
            /* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
            var routes = [
                { path: 'accountSummary', component: _account_summary_account_summary_component__WEBPACK_IMPORTED_MODULE_5__["AccountSummaryComponent"] },
                { path: 'mobile', component: _mobile_mobile_component__WEBPACK_IMPORTED_MODULE_4__["MobileComponent"], },
                { path: 'welcome', component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__["WelcomePageComponent"], },
                { path: 'nomineeDetails', component: _nominee_details_nominee_details_component__WEBPACK_IMPORTED_MODULE_12__["NomineeDetailsComponent"] },
                { path: 'SSN', component: _SSN_SSN_component__WEBPACK_IMPORTED_MODULE_10__["SSNComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
                { path: 'pan', component: _pan_pan_component__WEBPACK_IMPORTED_MODULE_11__["PanComponent"], },
                { path: 'personalInfo', component: _personal_info_personal_info_component__WEBPACK_IMPORTED_MODULE_6__["PersonalInfoComponent"], },
                { path: 'deposit', component: _deposit_money_deposit_money_component__WEBPACK_IMPORTED_MODULE_8__["DepositMoneyComponent"] },
                { path: 'biometricKYC', component: _biometric_kyc_biometric_kyc_component__WEBPACK_IMPORTED_MODULE_9__["BiometricKYCComponent"] },
                { path: 'congratulation', component: _congratulations_congratulations_component__WEBPACK_IMPORTED_MODULE_7__["CongratulationsComponent"] },
                { path: '', redirectTo: '/Welcome', pathMatch: 'full' },
                { path: '**', component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__["WelcomePageComponent"] },
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'public';
                    // "@angular/animations": "~8.2.14",
                    // "@angular/common": "~8.2.14",
                    // "@angular/compiler": "~8.2.14",
                    // "@angular/core": "~8.2.14",
                    // "@angular/forms": "~8.2.14",
                    // "@angular/platform-browser": "~8.2.14",
                    // "@angular/platform-browser-dynamic": "~8.2.14",
                    // "@ng-bootstrap/ng-bootstrap": "^1.0.0",
                    // "@angular/router": "~8.2.14",
                    // "rxjs": "~6.4.0",
                    // "tslib": "^1.10.0",
                    // "zone.js": "~0.9.1"
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: tokenGetter, AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenGetter", function () { return tokenGetter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
            /* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
            /* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _shared_dialogue_dialogue_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/dialogue/dialogue.module */ "./src/app/shared/dialogue/dialogue.module.ts");
            /* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
            /* harmony import */ var _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/loader/loader.component */ "./src/app/shared/loader/loader.component.ts");
            /* harmony import */ var _shared_loader_loader_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/loader/loader.service */ "./src/app/shared/loader/loader.service.ts");
            /* harmony import */ var _shared_numberOnly_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/numberOnly.directive */ "./src/app/shared/numberOnly.directive.ts");
            /* harmony import */ var _shared_upperCase_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/upperCase.directive */ "./src/app/shared/upperCase.directive.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _shared_error_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared/error.component */ "./src/app/shared/error.component.ts");
            /* harmony import */ var _shared_screen_sequence_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shared/screen-sequence.module */ "./src/app/shared/screen-sequence.module.ts");
            /* harmony import */ var _shared_progress_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shared/progress.service */ "./src/app/shared/progress.service.ts");
            /* harmony import */ var _shared_loginId_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./shared/loginId.service */ "./src/app/shared/loginId.service.ts");
            /* harmony import */ var _shared_activate_guards__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./shared/activate-guards */ "./src/app/shared/activate-guards.ts");
            /* harmony import */ var _shared_activate_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./shared/activate.module */ "./src/app/shared/activate.module.ts");
            /* harmony import */ var _shared_order_by_pipe__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./shared/order-by.pipe */ "./src/app/shared/order-by.pipe.ts");
            /* harmony import */ var _shared_autofocus_directive__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./shared/autofocus.directive */ "./src/app/shared/autofocus.directive.ts");
            /* harmony import */ var _shared_screen_name__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./shared/screen.name */ "./src/app/shared/screen.name.ts");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var ui_carousel__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ui-carousel */ "./node_modules/ui-carousel/dist/index.js");
            /* harmony import */ var ui_carousel__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/ __webpack_require__.n(ui_carousel__WEBPACK_IMPORTED_MODULE_29__);
            /* harmony import */ var _mobile_mobile_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./mobile/mobile.component */ "./src/app/mobile/mobile.component.ts");
            /* harmony import */ var _personal_info_personal_info_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./personal-info/personal-info.component */ "./src/app/personal-info/personal-info.component.ts");
            /* harmony import */ var _account_summary_account_summary_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./account-summary/account-summary.component */ "./src/app/account-summary/account-summary.component.ts");
            /* harmony import */ var _deposit_money_deposit_money_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./deposit-money/deposit-money.component */ "./src/app/deposit-money/deposit-money.component.ts");
            /* harmony import */ var _congratulations_congratulations_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./congratulations/congratulations.component */ "./src/app/congratulations/congratulations.component.ts");
            /* harmony import */ var _biometric_kyc_biometric_kyc_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./biometric-kyc/biometric-kyc.component */ "./src/app/biometric-kyc/biometric-kyc.component.ts");
            /* harmony import */ var _SSN_SSN_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./SSN/SSN.component */ "./src/app/SSN/SSN.component.ts");
            /* harmony import */ var _pan_pan_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./pan/pan.component */ "./src/app/pan/pan.component.ts");
            /* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
            /* harmony import */ var _app_app_service__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../app/app.service */ "./src/app/app.service.ts");
            /* harmony import */ var _nominee_details_nominee_details_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./nominee-details/nominee-details.service */ "./src/app/nominee-details/nominee-details.service.ts");
            /* harmony import */ var mydatepicker__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! mydatepicker */ "./node_modules/mydatepicker/index.js");
            /* harmony import */ var _nominee_details_nominee_details_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./nominee-details/nominee-details.component */ "./src/app/nominee-details/nominee-details.component.ts");
            /* harmony import */ var _mobile_mobile_service__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./mobile/mobile.service */ "./src/app/mobile/mobile.service.ts");
            /* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
            /* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
            // ...
            function tokenGetter() {
                return localStorage.getItem('access_token');
            }
            //import { PlatwareClientModule } from './shared/platware-client/platware-client.module';
            /* Dialogue Module */
            /* Routing Module */
            //import { AppRoutingModule } from './app.routes.model';
            /* Featured Module */
            //import { MatSliderModule } from '@angular/material/slider';
            //import { MatTooltipModule } from '@angular/material/tooltip';
            /* Directive */
            //import { MatSliderModule } from '@angular/material/slider';
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_18__["AppComponent"],
                        _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_14__["LoaderComponent"],
                        _shared_error_component__WEBPACK_IMPORTED_MODULE_19__["ErrorsComponent"],
                        _shared_order_by_pipe__WEBPACK_IMPORTED_MODULE_25__["OrderByPipe"],
                        _shared_autofocus_directive__WEBPACK_IMPORTED_MODULE_26__["AutofocusDirective"],
                        _shared_numberOnly_directive__WEBPACK_IMPORTED_MODULE_16__["OnlyNumber"],
                        _shared_upperCase_directive__WEBPACK_IMPORTED_MODULE_17__["UppercaseDirective"],
                        _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_13__["WelcomePageComponent"],
                        _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
                        _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
                        _mobile_mobile_component__WEBPACK_IMPORTED_MODULE_30__["MobileComponent"],
                        _account_summary_account_summary_component__WEBPACK_IMPORTED_MODULE_32__["AccountSummaryComponent"],
                        _personal_info_personal_info_component__WEBPACK_IMPORTED_MODULE_31__["PersonalInfoComponent"],
                        _deposit_money_deposit_money_component__WEBPACK_IMPORTED_MODULE_33__["DepositMoneyComponent"],
                        _congratulations_congratulations_component__WEBPACK_IMPORTED_MODULE_34__["CongratulationsComponent"],
                        _biometric_kyc_biometric_kyc_component__WEBPACK_IMPORTED_MODULE_35__["BiometricKYCComponent"],
                        _SSN_SSN_component__WEBPACK_IMPORTED_MODULE_36__["SSNComponent"],
                        _pan_pan_component__WEBPACK_IMPORTED_MODULE_37__["PanComponent"],
                        _nav_nav_component__WEBPACK_IMPORTED_MODULE_38__["NavComponent"],
                        _nominee_details_nominee_details_component__WEBPACK_IMPORTED_MODULE_42__["NomineeDetailsComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
                        _shared_dialogue_dialogue_module__WEBPACK_IMPORTED_MODULE_12__["DialogueModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                        _angular_http__WEBPACK_IMPORTED_MODULE_7__["HttpModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                        mydatepicker__WEBPACK_IMPORTED_MODULE_41__["MyDatePickerModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_28__["NgbModule"],
                        ui_carousel__WEBPACK_IMPORTED_MODULE_29__["UICarouselModule"],
                        _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_6__["JwtModule"].forRoot({
                            config: {
                                tokenGetter: tokenGetter,
                                whitelistedDomains: ['localhost:4000'],
                                blacklistedRoutes: ['localhost:4000/api/auth']
                            }
                        })
                        // MatSliderModule,
                        //MatTooltipModule
                    ],
                    providers: [_shared_screen_sequence_module__WEBPACK_IMPORTED_MODULE_20__["screenSequenceService"],
                        _app_app_service__WEBPACK_IMPORTED_MODULE_39__["appService"],
                        _shared_progress_service__WEBPACK_IMPORTED_MODULE_21__["ProgressService"],
                        _shared_loginId_service__WEBPACK_IMPORTED_MODULE_22__["CommonLoginService"],
                        _shared_activate_module__WEBPACK_IMPORTED_MODULE_24__["WorkflowService"],
                        _shared_activate_guards__WEBPACK_IMPORTED_MODULE_23__["WorkflowGuard"],
                        _shared_screen_name__WEBPACK_IMPORTED_MODULE_27__["NameService"],
                        _shared_loader_loader_service__WEBPACK_IMPORTED_MODULE_15__["LoaderService"],
                        _nominee_details_nominee_details_service__WEBPACK_IMPORTED_MODULE_40__["NomieeService"],
                        _mobile_mobile_service__WEBPACK_IMPORTED_MODULE_43__["mobileService"],
                        _auth_service__WEBPACK_IMPORTED_MODULE_44__["AuthService"],
                        _auth_guard__WEBPACK_IMPORTED_MODULE_45__["AuthGuard"]
                    ],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_18__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/app.service.ts": 
        /*!********************************!*\
          !*** ./src/app/app.service.ts ***!
          \********************************/
        /*! exports provided: appService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appService", function () { return appService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
            /* harmony import */ var _shared_loader_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/loader/loader.service */ "./src/app/shared/loader/loader.service.ts");
            //import { PlatwareService } from "./shared/platware-client/platware.service";
            var appService = /** @class */ (function () {
                function appService(//private _platware: PlatwareService,
                appLoader) {
                    this.appLoader = appLoader;
                    //hasAccount = false;
                    this.hasAccount = false;
                    this.hasBiometricDone = false;
                }
                appService.prototype.setMessageMaster = function (data) {
                    //this.messageData = data;
                    sessionStorage.setItem('MesssagemasterDataFinal', JSON.stringify(data));
                };
                appService.prototype.converIntoUpperCase = function (inputValueData) {
                    return inputValueData.value.toUpperCase();
                };
                appService.prototype.converIntoLowerCase = function (inputValueData) {
                    return inputValueData.value.toLowerCase();
                };
                // ***********************  //
                // Adiyta starts here  
                appService.prototype.setMessageMasterSSN = function (data) {
                    sessionStorage.setItem('MesssagemasterSSN', JSON.stringify(data));
                };
                appService.prototype.fetchMessageMasterSSN = function () {
                    return JSON.parse(sessionStorage.getItem('MesssagemasterSSN'));
                };
                appService.prototype.setDBTshow = function (data) {
                    sessionStorage.setItem('Set', data);
                };
                appService.prototype.fetcsetDBTshow = function () {
                    return sessionStorage.getItem('Set');
                };
                appService.prototype.setHasAccount = function (booleanData) {
                    this.hasAccount = booleanData;
                };
                appService.prototype.setHasBiometricDone = function (booleanData) {
                    this.hasBiometricDone = booleanData;
                };
                appService.prototype.getBiometricDone = function () {
                    return this.hasBiometricDone;
                };
                appService.prototype.getHasAccount = function () {
                    return this.hasAccount;
                };
                // Adiyta Ends here  
                appService.prototype.setValidatePan = function (pan) {
                    this.pan = pan;
                };
                appService.prototype.setLabelVisibility = function (value) {
                    // this.labelVisible = value;
                    sessionStorage.setItem('labelVisible', JSON.stringify({
                        labelShown: value,
                        valuePresent: true
                    }));
                };
                appService.prototype.getLabelVisibility = function () {
                    return JSON.parse(sessionStorage.getItem('labelVisible'));
                };
                appService.prototype.setSsnData = function (data) {
                    if (data && data.data) {
                        this.ssn = data.data;
                    }
                    else {
                        this.ssn = data;
                    }
                    // sessionStorage.setItem('SsnData', data);
                };
                appService.prototype.getSsnData = function () {
                    // return sessionStorage.getItem('SsnData');
                    return this.ssn;
                };
                // return this.labelVisible;
                appService.prototype.getValidatePan = function () {
                    return this.pan;
                };
                appService.prototype.getQueryObj = function (url) {
                    var params = {};
                    // tslint:disable-next-line:only-arrow-functions
                    (url + '?').split('?')[1].split('&').forEach(function (pair) {
                        pair = (pair + '=').split('=').map(decodeURIComponent);
                        if (pair[0].length) {
                            params[pair[0]] = pair[1];
                        }
                    });
                    return params;
                };
                appService.prototype.storeMasterData = function (data) {
                    this.masterData_term1 = data;
                    // sessionStorage.setItem('masterData', JSON.stringify(data));
                };
                appService.prototype.fetchMesaageSessionData = function () {
                    return this.masterData_term1;
                    //return JSON.parse(sessionStorage.getItem('masterData'));
                };
                appService.prototype.setDepositMasterData = function (data) {
                    sessionStorage.setItem('depositMasterData', JSON.stringify(data));
                };
                appService.prototype.getDepositMasterData = function () {
                    // console.log(sessionStorage.getItem('depositMasterData'));
                    // ** let json= JSON.parse(sessionStorage.getItem('depositMasterData'));
                    // console.log(json);
                    return JSON.parse(sessionStorage.getItem('depositMasterData'));
                };
                appService.prototype.fetchMessage = function () {
                    var messageMaster = JSON.parse(sessionStorage.getItem('messageMaster')) || '';
                    return this.messageData || messageMaster;
                };
                appService.prototype.setSSNAge = function (data) {
                    this.SSNAge = data;
                };
                appService.prototype.getSSNAge = function () {
                    return this.SSNAge;
                };
                appService.prototype.randomString = function (length) {
                    var chars = '0123456789';
                    var result = '';
                    for (var i = length; i > 0; --i) {
                        result += chars[Math.round(Math.random() * (chars.length - 1))];
                    }
                    return result;
                };
                // ** getMessageMaster(response_code, response_message?) {
                // **  this.messageData = JSON.parse(sessionStorage.getItem('MesssagemasterDataFinal'));
                // **   let msg = "";
                // **  if (this.messageData.hasOwnProperty(response_code)) {
                // **    return this.messageData[response_code]['msg_display'];
                // **  } else {
                // **    if (response_message !== undefined) {
                // **      msg = response_message.RESPONSE_MESSAGE || '';
                // **    }
                // **     msg ? msg = msg : msg = 'Messsage Key NOT FOUND';
                // **    return msg;
                // **  }
                // **  }
                appService.prototype.getMessageMaster = function (response_code, response_message) {
                    this.messageData = JSON.parse(sessionStorage.getItem('MesssagemasterDataFinal'));
                    var msg = "";
                    if (this.messageData.hasOwnProperty(response_code)) {
                        return this.messageData[response_code]['msg_display'];
                    }
                    else {
                        if (response_message !== undefined) {
                            return response_message.RESPONSE_MESSAGE || '';
                        }
                        else {
                            return 'Messsage Key NOT FOUND';
                        }
                    }
                };
                appService.prototype.getCatchmsg = function () {
                    var catchMsg = this.messageData['0031']['msg_display'];
                    return catchMsg;
                };
                appService.prototype.setInstallationId = function (data) {
                    this.installationId = data;
                };
                appService.prototype.getInstallationId = function () {
                    return this.installationId;
                };
                appService.prototype.setDepositAmount = function (data) {
                    sessionStorage.setItem('depositAmount', JSON.stringify(data));
                };
                appService.prototype.getDepositAmount = function () {
                    return JSON.parse(sessionStorage.getItem('depositAmount'));
                };
                appService.prototype.setMasterData = function (data) {
                    //  sessionStorage.setItem('masterDatasessionData', JSON.stringify(data));
                    this.masterData = data;
                };
                appService.prototype.getMasterData = function () {
                    return this.masterData;
                    // return JSON.parse(sessionStorage.getItem('masterDatasessionData'));
                };
                appService.prototype.storeMessageMaster = function (data) {
                    sessionStorage.setItem('messageMaster', JSON.stringify(data));
                };
                appService.prototype.removeMessageMaster = function () {
                    sessionStorage.setItem('messageMaster', '');
                };
                appService.prototype.fetchMessageMaster = function () {
                    // if(this.messageData === undefined){
                    //   const REQ_DATA = [
                    //     {
                    //       processName: "GETMASTERDATA",
                    //       data: [
                    //         {
                    //           X_TYPE: "MSGMASTERPORTAL",
                    //           X_VERSION: "0"
                    //         }
                    //       ]
                    //     }
                    //   ];
                    //   this.appLoader.showLoader('');
                    //   return this._platware.callPlatware(REQ_DATA);
                    //     }
                    //     else{
                    //      return "autoSync"
                    //     }
                    var REQ_DATA = [
                        {
                            processName: "GETMASTERDATA",
                            data: [
                                {
                                    X_TYPE: "MSGMASTERPORTAL",
                                    X_VERSION: "0"
                                }
                            ]
                        }
                    ];
                    this.appLoader.showLoader('');
                    //return this._platware.callPlatware(REQ_DATA);
                    //     this._platware.callPlatware(REQ_DATA).subscribe(response => {
                    //       // console.log(JSON.parse(response[0]["data"][0]["data_object"]));
                    //    this.getMessage = JSON.parse(response[0]["data"][0]["data_object"]);
                    //     });
                };
                appService.prototype.fetchInstallationId = function () {
                    var REQ_DATA = [
                        {
                            processName: "PWAPPINSTALL",
                            data: [
                                {
                                    "org_id": "ASTP",
                                    "app_id": "ABHIWEB",
                                    "platform": "Web_Portal",
                                    "install_time": "02-02-2018 15:42:64"
                                }
                            ]
                        }
                    ];
                    // return this._platware.callPlatware(REQ_DATA).map(res => res[0]['data']);
                };
                appService.prototype.fetchOTPSSN = function (data) {
                    //return this._platware.callPlatware(data).map(res => res[0]['data']);
                };
                appService.prototype.masterDataSync = function (data) {
                    //return this._platware.callPlatware(data).map(res => res[0]['data']);
                };
                appService.prototype.DedupeCheck = function (data) {
                    //return this._platware.callPlatware(data).map(res => res[0]['data']);
                };
                appService.prototype.validateSSNOtp = function (data) {
                    // return this._platware.callPlatware(data).map(res => res[0]['data']);
                };
                appService.prototype.setDbt = function (data) {
                    this.showDbt = data;
                };
                appService.prototype.getDbt = function () {
                    return this.showDbt;
                };
                appService.prototype.converIntoTitleCase = function (inputValueData) {
                    if (typeof (inputValueData) == "string") {
                        inputValueData = inputValueData.split(" ").filter(function (n) { return n; }).join(" ");
                    }
                    if (inputValueData) {
                        return inputValueData.split(' ')
                            .map(function (w) { return w[0].toUpperCase() + w.substr(1).toLowerCase(); })
                            .join(' ');
                    }
                };
                return appService;
            }());
            appService.ctorParameters = function () { return [
                { type: _shared_loader_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"] }
            ]; };
            appService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], appService);
            /***/ 
        }),
        /***/ "./src/app/auth.guard.ts": 
        /*!*******************************!*\
          !*** ./src/app/auth.guard.ts ***!
          \*******************************/
        /*! exports provided: AuthGuard */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function () { return AuthGuard; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var AuthGuard = /** @class */ (function () {
                function AuthGuard(router) {
                    this.router = router;
                }
                AuthGuard.prototype.canActivate = function (next, state) {
                    if (localStorage.getItem('access_token')) {
                        return true;
                    }
                    this.router.navigate(['welcome']);
                    return false;
                };
                return AuthGuard;
            }());
            AuthGuard.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], AuthGuard);
            /***/ 
        }),
        /***/ "./src/app/auth.service.ts": 
        /*!*********************************!*\
          !*** ./src/app/auth.service.ts ***!
          \*********************************/
        /*! exports provided: AuthService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function () { return AuthService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
            //import { Injectable } from '@angular/core';
            //import { HttpClient } from '@angular/common/http';
            //import { Observable } from 'rxjs';
            //import { map } from 'rxjs/operators';
            var AuthService = /** @class */ (function () {
                function AuthService(http) {
                    this.http = http;
                    this.gameUrl = "api/actor/all";
                    this.localUrl = "api/actor/mobile";
                    this.ssnUrl = "api/movie/ssnValidate";
                    this.customerSuccUrl = "api/movie/userRegistrationSucc";
                    this.paymentSuccURL = "api/movie/paymentSuccessful";
                    this.checkExistingUserUrl = "api/movie/checkExistingUser";
                    this.deactivateAccountUrl = "api/movie/deactivateAccount";
                }
                AuthService.prototype.login = function (username, password) {
                    return this.http.post('/api/auth', { username: username, password: password })
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
                        localStorage.setItem('access_token', result.token);
                        return true;
                    }));
                };
                AuthService.prototype.otpGenerate = function (mobile) {
                    return this.http.post(this.localUrl, mobile)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
                        localStorage.setItem('access_token', result.token);
                        return result;
                    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('otp', mobile)));
                };
                AuthService.prototype.deactivateAccount = function (data) {
                    return this.http.post(this.deactivateAccountUrl, data)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
                        // localStorage.setItem('access_token', result.token);
                        return true;
                    }));
                };
                AuthService.prototype.ssnData = function (ssn) {
                    return this.http.post(this.ssnUrl, ssn)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
                        //localStorage.setItem('access_token', result.token);
                        return result;
                    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('otp', ssn)));
                };
                AuthService.prototype.PersonalformData = function (data) {
                    return this.http.post(this.customerSuccUrl, data)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
                        //localStorage.setItem('access_token', result.token);
                        return result;
                    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('otp', data)));
                };
                AuthService.prototype.validateExistingUser = function (data) {
                    return this.http.post(this.checkExistingUserUrl, data)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
                        localStorage.setItem('access_token', result.token);
                        return result;
                    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('otp', data)));
                };
                AuthService.prototype.accountcreationComplete = function (data) {
                    return this.http.post(this.customerSuccUrl, data)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
                        // localStorage.setItem('access_token', result.token);
                        return result;
                    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('otp', data)));
                };
                AuthService.prototype.depositSuccessful = function (data) {
                    return this.http.post(this.paymentSuccURL, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
                        // localStorage.setItem('access_token', result.token);
                        return result;
                    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('otp', data)));
                };
                AuthService.prototype.handleError = function (operation, result) {
                    var _this = this;
                    if (operation === void 0) { operation = 'operation'; }
                    return function (error) {
                        console.error(error);
                        _this.log(operation + " failed: " + error.message);
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
                    };
                };
                AuthService.prototype.log = function (message) {
                    console.log(message);
                };
                AuthService.prototype.logout = function () {
                    localStorage.removeItem('access_token');
                };
                Object.defineProperty(AuthService.prototype, "loggedIn", {
                    get: function () {
                        return (localStorage.getItem('access_token') !== null);
                    },
                    enumerable: true,
                    configurable: true
                });
                return AuthService;
            }());
            AuthService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], AuthService);
            /***/ 
        }),
        /***/ "./src/app/biometric-kyc/biometric-kyc.component.css": 
        /*!***********************************************************!*\
          !*** ./src/app/biometric-kyc/biometric-kyc.component.css ***!
          \***********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".heading {\r\n    font-size: 25px;\r\n    color: #646464;\r\n}\r\n\r\n.date_time {\r\n    color: #989898;\r\n    position: absolute;\r\n    left: 20px;\r\n}\r\n\r\n.mainContent {\r\n    margin: 5% 4% 0;\r\n}\r\n\r\n.or {\r\n    background-color: #989898;\r\n    border-radius: 50%;\r\n    color: #ffffff;\r\n    padding: 20px;\r\n    margin-top: 18px;\r\n    text-align: center;\r\n}\r\n\r\n.appointment,\r\n.visit_service {\r\n    background-color: #f37021;\r\n    color: #ffffff;\r\n    margin: 20px 0;\r\n    border: none;\r\n    padding: 10px 25px;\r\n    text-align: center;\r\n    border-radius: 2px;\r\n}\r\n\r\n.visit_service {\r\n    /* margin-left: 170px; */\r\n}\r\n\r\n.page1 {\r\n    position: absolute;\r\n    left: 360px;\r\n    top: -5px;\r\n}\r\n\r\n.appointment-suggestions {\r\n    position: absolute;\r\n    width: calc(100% - 30px);\r\n    padding: 0;\r\n    z-index: 11;\r\n    top: 100%;\r\n    left: 15px;\r\n    background-color: #fff;\r\n    max-height: 200px;\r\n    overflow-y: auto;\r\n    box-shadow: 0px 2px 2px 1px rgba(77, 77, 77, 0.32);\r\n}\r\n\r\n.appointment-suggestions li {\r\n    padding: 5px 15px;\r\n    font-size: 14px;\r\n    color: #5d5d5d;\r\n    border-bottom: 1px solid #eee;\r\n}\r\n\r\n.appointment-suggestions li:last-child {\r\n    border-bottom: none;\r\n}\r\n\r\n.custom-bio-or {\r\n    background: none;\r\n    color: #646464;\r\n    font-size: 24px;\r\n}\r\n\r\n.select-date-bio {\r\n    padding-left: 0;\r\n    padding: 5px;\r\n}\r\n\r\n.skip-appnt {\r\n    color: #f37021;\r\n    padding: 2% 4% 6% 5%;\r\n    /*text-transform: capitalize;*/\r\n    cursor: pointer;\r\n    text-align: center;\r\n}\r\n\r\n.t-center {\r\n    text-align: center;\r\n}\r\n\r\n.cutm-heading-biometric {\r\n    font-size: 18px !important;\r\n    font-family: 'Nunito-Regular';\r\n}\r\n\r\n.pad-left-0 {\r\n    padding-left: 0;\r\n}\r\n\r\n.margin_top_resp {\r\n    margin: 4% 0;\r\n}\r\n\r\n/*Media query starts here*/\r\n\r\n@media screen and (max-width: 992px) {\r\n    .choice {\r\n        text-align: center;\r\n        padding-top: 30px;\r\n    }\r\n    .mainContent {\r\n        margin-top: 8% !important;\r\n        margin-left: -15px !important;\r\n        margin-right: -15px !important;\r\n    }\r\n    .margin-pad-0 {}\r\n    .error_color>span>img {\r\n        /*padding-left: 0;*/\r\n        display: none;\r\n    }\r\n    .margin_top_resp {\r\n        margin: 10% 0;\r\n    }\r\n}\r\n\r\n/*Media query starts here*/\r\n\r\n.activeBtn {\r\n    background: #f37021;\r\n    cursor: pointer;\r\n}\r\n\r\n.disabledBtn {\r\n    outline: none;\r\n    background: #aaa;\r\n    color: #fff;\r\n    padding-top: 12px!important;\r\n    padding-bottom: 12px!important;\r\n    padding-right: 50px!important;\r\n    padding-left: 50px!important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmlvbWV0cmljLWt5Yy9iaW9tZXRyaWMta3ljLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsY0FBYztJQUNkLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsU0FBUztBQUNiOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHdCQUF3QjtJQUN4QixVQUFVO0lBQ1YsV0FBVztJQUNYLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsa0RBQWtEO0FBQ3REOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixjQUFjO0lBQ2QsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLDhCQUE4QjtJQUM5QixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUdBLDBCQUEwQjs7QUFFMUI7SUFDSTtRQUNJLGtCQUFrQjtRQUNsQixpQkFBaUI7SUFDckI7SUFDQTtRQUNJLHlCQUF5QjtRQUN6Qiw2QkFBNkI7UUFDN0IsOEJBQThCO0lBQ2xDO0lBQ0EsZUFBZTtJQUNmO1FBQ0ksbUJBQW1CO1FBQ25CLGFBQWE7SUFDakI7SUFDQTtRQUNJLGFBQWE7SUFDakI7QUFDSjs7QUFHQSwwQkFBMEI7O0FBQzFCO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCwyQkFBMkI7SUFDM0IsOEJBQThCO0lBQzlCLDZCQUE2QjtJQUM3Qiw0QkFBNEI7QUFDaEMiLCJmaWxlIjoic3JjL2FwcC9iaW9tZXRyaWMta3ljL2Jpb21ldHJpYy1reWMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkaW5nIHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGNvbG9yOiAjNjQ2NDY0O1xyXG59XHJcblxyXG4uZGF0ZV90aW1lIHtcclxuICAgIGNvbG9yOiAjOTg5ODk4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMjBweDtcclxufVxyXG5cclxuLm1haW5Db250ZW50IHtcclxuICAgIG1hcmdpbjogNSUgNCUgMDtcclxufVxyXG5cclxuLm9yIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5ODk4OTg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxOHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYXBwb2ludG1lbnQsXHJcbi52aXNpdF9zZXJ2aWNlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMzcwMjE7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIG1hcmdpbjogMjBweCAwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZzogMTBweCAyNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG59XHJcblxyXG4udmlzaXRfc2VydmljZSB7XHJcbiAgICAvKiBtYXJnaW4tbGVmdDogMTcwcHg7ICovXHJcbn1cclxuXHJcbi5wYWdlMSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAzNjBweDtcclxuICAgIHRvcDogLTVweDtcclxufVxyXG5cclxuLmFwcG9pbnRtZW50LXN1Z2dlc3Rpb25zIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB6LWluZGV4OiAxMTtcclxuICAgIHRvcDogMTAwJTtcclxuICAgIGxlZnQ6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgbWF4LWhlaWdodDogMjAwcHg7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAycHggMXB4IHJnYmEoNzcsIDc3LCA3NywgMC4zMik7XHJcbn1cclxuXHJcbi5hcHBvaW50bWVudC1zdWdnZXN0aW9ucyBsaSB7XHJcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjNWQ1ZDVkO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XHJcbn1cclxuXHJcbi5hcHBvaW50bWVudC1zdWdnZXN0aW9ucyBsaTpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbn1cclxuXHJcbi5jdXN0b20tYmlvLW9yIHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBjb2xvcjogIzY0NjQ2NDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG5cclxuLnNlbGVjdC1kYXRlLWJpbyB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5za2lwLWFwcG50IHtcclxuICAgIGNvbG9yOiAjZjM3MDIxO1xyXG4gICAgcGFkZGluZzogMiUgNCUgNiUgNSU7XHJcbiAgICAvKnRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplOyovXHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50LWNlbnRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jdXRtLWhlYWRpbmctYmlvbWV0cmljIHtcclxuICAgIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1mYW1pbHk6ICdOdW5pdG8tUmVndWxhcic7XHJcbn1cclxuXHJcbi5wYWQtbGVmdC0wIHtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxufVxyXG5cclxuLm1hcmdpbl90b3BfcmVzcCB7XHJcbiAgICBtYXJnaW46IDQlIDA7XHJcbn1cclxuXHJcblxyXG4vKk1lZGlhIHF1ZXJ5IHN0YXJ0cyBoZXJlKi9cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICAuY2hvaWNlIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICB9XHJcbiAgICAubWFpbkNvbnRlbnQge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDglICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0xNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAtMTVweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLm1hcmdpbi1wYWQtMCB7fVxyXG4gICAgLmVycm9yX2NvbG9yPnNwYW4+aW1nIHtcclxuICAgICAgICAvKnBhZGRpbmctbGVmdDogMDsqL1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAubWFyZ2luX3RvcF9yZXNwIHtcclxuICAgICAgICBtYXJnaW46IDEwJSAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLypNZWRpYSBxdWVyeSBzdGFydHMgaGVyZSovXHJcbi5hY3RpdmVCdG4ge1xyXG4gICAgYmFja2dyb3VuZDogI2YzNzAyMTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmRpc2FibGVkQnRuIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYWFhO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nLXRvcDogMTJweCFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTJweCFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4IWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctbGVmdDogNTBweCFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/biometric-kyc/biometric-kyc.component.ts": 
        /*!**********************************************************!*\
          !*** ./src/app/biometric-kyc/biometric-kyc.component.ts ***!
          \**********************************************************/
        /*! exports provided: BiometricKYCComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BiometricKYCComponent", function () { return BiometricKYCComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _shared_progress_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/progress.service */ "./src/app/shared/progress.service.ts");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _shared_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/loader/loader.service */ "./src/app/shared/loader/loader.service.ts");
            /* harmony import */ var _shared_dialogue_dialogue_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/dialogue/dialogue.service */ "./src/app/shared/dialogue/dialogue.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _shared_activate_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/activate.module */ "./src/app/shared/activate.module.ts");
            /* harmony import */ var _shared_screen_name__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/screen.name */ "./src/app/shared/screen.name.ts");
            //import { PlatwareService } from '../shared/platware-client/platware.service';
            //import { appService } from '../app.service';
            //moment();
            //allowSyntheticDefaultImports:true;
            var BiometricKYCComponent = /** @class */ (function () {
                //now = new Date();
                //= moment().startOf('day');
                // year = this.now.getFullYear();
                // month = this.now.getMonth();
                // day = this.now.getDay();
                //minDate = moment({ year: this.year - 100, month: this.month, day: this.day }).format('MM-DD-YYYY');
                //maxDate = moment({ year: this.year - 16, month: this.month, day: this.day }).format('MM-DD-YYYY ');
                // date(ev) {
                //   console.log(this.minDate)
                //   console.log(ev.target.value)
                // }
                function BiometricKYCComponent(
                // private platware: PlatwareService,
                formBuilder, progressService, location, locationurl, 
                // private appservice: appService,
                dialogueservice, appLoader, router, guardService, nameService) {
                    // this.dateOfBirth
                    // this.now
                    // // this.year1 = this.now.getFullYear();
                    // this.year2 = this.dateOfBirth.getFullYear();
                    // //const delta = this.month.diff(this.dateOfBirth, 'years', false);
                    // const delta = (this.year1 - this.year2);
                    // console.log("" + delta);
                    // if (delta <= 18) {
                    //   alert("age is less than 18");
                    // }
                    this.formBuilder = formBuilder;
                    this.progressService = progressService;
                    this.location = location;
                    this.locationurl = locationurl;
                    this.dialogueservice = dialogueservice;
                    this.appLoader = appLoader;
                    this.router = router;
                    this.guardService = guardService;
                    this.nameService = nameService;
                    this.appointmentDates = [];
                    this.name = 'Angular';
                    this.setFormFields();
                    // location.onPopState((e) => {
                    //   // console.log(e);
                    //   locationurl.go('/mobile');
                    //   // console.log('pressed back!');
                    // });
                }
                BiometricKYCComponent.prototype.ngOnInit = function () {
                    this.nameService.setName('Schedule Appointment');
                    this.setNavBar();
                    //  this.getAppointmentDates();
                };
                BiometricKYCComponent.prototype.setNavBar = function () {
                    var user_registration = {
                        screen1: {
                            isActive: "YES",
                            isComplete: true,
                            loading: 100,
                        },
                        screen2: {
                            isActive: "YES",
                            isComplete: true,
                            loading: 100,
                        },
                        screen3: {
                            isActive: "YES",
                            isComplete: true,
                            loading: 100,
                        },
                        screen4: {
                            isActive: "YES",
                            isComplete: false,
                            loading: 100,
                        }
                    };
                    this.progressService.setLoaderWidth(user_registration);
                };
                BiometricKYCComponent.prototype.setFormFields = function () {
                    this.biometricObj = this.formBuilder.group({
                        appointmentDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
                    });
                };
                // getAppointmentDates() {
                //   const reqObj = [{
                //     processName: 'GETAPPOINTMENTS',
                //     data: [{
                //       'process_name': 'get appointments',
                //       'X_BRANCH_CODE': '2404'
                //     }]
                //   }];
                //     this.platware.callPlatware(reqObj).subscribe(res => {
                //       // console.log(res)
                //       this.appointmentDates = res[0].data;
                //     },
                //       err => {
                //       })
                // }
                BiometricKYCComponent.prototype.appointmentClick = function () {
                    var date = this.dateOfBirth;
                    this.router.navigate(['/congratulation']);
                };
                BiometricKYCComponent.prototype.skipClick = function () {
                    this.router.navigate(['/congratulation']);
                };
                return BiometricKYCComponent;
            }());
            BiometricKYCComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
                { type: _shared_progress_service__WEBPACK_IMPORTED_MODULE_3__["ProgressService"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["PlatformLocation"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
                { type: _shared_dialogue_dialogue_service__WEBPACK_IMPORTED_MODULE_6__["DialogueService"] },
                { type: _shared_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
                { type: _shared_activate_module__WEBPACK_IMPORTED_MODULE_8__["WorkflowService"] },
                { type: _shared_screen_name__WEBPACK_IMPORTED_MODULE_9__["NameService"] }
            ]; };
            BiometricKYCComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-biometric-kyc',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./biometric-kyc.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/biometric-kyc/biometric-kyc.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./biometric-kyc.component.css */ "./src/app/biometric-kyc/biometric-kyc.component.css")).default]
                })
            ], BiometricKYCComponent);
            /***/ 
        }),
        /***/ "./src/app/congratulations/congratulations.component.css": 
        /*!***************************************************************!*\
          !*** ./src/app/congratulations/congratulations.component.css ***!
          \***************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".main_screen {\r\n    padding: 0px 100px 50px 100px;\r\n    background-color: #fff;\r\n    /*box-shadow: 0px 0px 7px 7px #f4f4f4;*/\r\n    /*border-radius: 2px;*/\r\n    box-sizing: border-box;\r\n}\r\n\r\n.congo {\r\n    text-align: center;\r\n}\r\n\r\n.main_heading {\r\n    color: #f37021;\r\n    font-size: 26px;\r\n    text-align: center;\r\n}\r\n\r\n.texts {\r\n    margin-top: 50px;\r\n}\r\n\r\n.sub_heading {\r\n    color: #646464;\r\n    text-align: center;\r\n}\r\n\r\n.finish {\r\n    color: #fff;\r\n    background-color: #f37021;\r\n    border: none;\r\n    padding: 10px 35px;\r\n    text-align: center;\r\n}\r\n\r\n.submit {\r\n    text-align: center;\r\n    margin-top: 40px;\r\n}\r\n\r\n.message {\r\n    margin-top: 30px;\r\n}\r\n\r\n/*Media query starts here*/\r\n\r\n@media screen and (max-width: 992px) {\r\n    .main_screen {\r\n        padding: 0;\r\n    }\r\n    .sub_heading {\r\n        padding: 10px 60px;\r\n    }\r\n    .texts {\r\n        margin-top: 0px;\r\n    }\r\n    .message {\r\n        margin-top: 0px;\r\n    }\r\n}\r\n\r\n/*Media query starts here*/\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29uZ3JhdHVsYXRpb25zL2NvbmdyYXR1bGF0aW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNkJBQTZCO0lBQzdCLHNCQUFzQjtJQUN0Qix1Q0FBdUM7SUFDdkMsc0JBQXNCO0lBQ3RCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUdBLDBCQUEwQjs7QUFFMUI7SUFDSTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0FBQ0o7O0FBR0EsMEJBQTBCIiwiZmlsZSI6InNyYy9hcHAvY29uZ3JhdHVsYXRpb25zL2NvbmdyYXR1bGF0aW9ucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5fc2NyZWVuIHtcclxuICAgIHBhZGRpbmc6IDBweCAxMDBweCA1MHB4IDEwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIC8qYm94LXNoYWRvdzogMHB4IDBweCA3cHggN3B4ICNmNGY0ZjQ7Ki9cclxuICAgIC8qYm9yZGVyLXJhZGl1czogMnB4OyovXHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uY29uZ28ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubWFpbl9oZWFkaW5nIHtcclxuICAgIGNvbG9yOiAjZjM3MDIxO1xyXG4gICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udGV4dHMge1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxufVxyXG5cclxuLnN1Yl9oZWFkaW5nIHtcclxuICAgIGNvbG9yOiAjNjQ2NDY0O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZmluaXNoIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YzNzAyMTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDEwcHggMzVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnN1Ym1pdCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG59XHJcblxyXG4ubWVzc2FnZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG5cclxuLypNZWRpYSBxdWVyeSBzdGFydHMgaGVyZSovXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgLm1haW5fc2NyZWVuIHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gICAgLnN1Yl9oZWFkaW5nIHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDYwcHg7XHJcbiAgICB9XHJcbiAgICAudGV4dHMge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIH1cclxuICAgIC5tZXNzYWdlIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vKk1lZGlhIHF1ZXJ5IHN0YXJ0cyBoZXJlKi8iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/congratulations/congratulations.component.ts": 
        /*!**************************************************************!*\
          !*** ./src/app/congratulations/congratulations.component.ts ***!
          \**************************************************************/
        /*! exports provided: CongratulationsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CongratulationsComponent", function () { return CongratulationsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _shared_loader_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/loader/loader.service */ "./src/app/shared/loader/loader.service.ts");
            /* harmony import */ var _shared_progress_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/progress.service */ "./src/app/shared/progress.service.ts");
            /* harmony import */ var _shared_dialogue_dialogue_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/dialogue/dialogue.service */ "./src/app/shared/dialogue/dialogue.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _shared_screen_name__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/screen.name */ "./src/app/shared/screen.name.ts");
            //import { PlatwareService } from '../shared/platware-client/platware.service';
            //import { appService } from '../app.service';
            var CongratulationsComponent = /** @class */ (function () {
                function CongratulationsComponent(fb, progressService, 
                //private platware: PlatwareService,
                //private appservice: appService,
                dialogueservice, router, location, locationurl, appLoader, nameService) {
                    // location.onPopState((e) => {
                    //   // console.log(e);
                    this.fb = fb;
                    this.progressService = progressService;
                    this.dialogueservice = dialogueservice;
                    this.router = router;
                    this.location = location;
                    this.locationurl = locationurl;
                    this.appLoader = appLoader;
                    this.nameService = nameService;
                    //   locationurl.go('/mobile');
                    //   // console.log('pressed back!');
                    // });
                }
                CongratulationsComponent.prototype.ngOnInit = function () {
                    this.nameService.setName('congratulation');
                };
                //   this.nameService.setName('congratulation');
                //   this.messageData = this.appservice.getMessageMaster('CS-02');
                //   const defaultData_msg = this.appservice.getMessageMaster('CS-03');
                //   let masterData = this.appservice.getMasterData();
                //   let deafultBranch = masterData["AOF"]["DATA"]["ACCOUNT_DTL"]["BRANCH_NO"]["DEFAULT_BRANCH"];
                //   if (deafultBranch === "Y") {
                //     this.defaultData = defaultData_msg;
                //   }
                //   else {
                //     this.defaultData ="";
                //   }
                // }
                CongratulationsComponent.prototype.finish = function () {
                    this.router.navigate(['welcome']);
                };
                return CongratulationsComponent;
            }());
            CongratulationsComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
                { type: _shared_progress_service__WEBPACK_IMPORTED_MODULE_4__["ProgressService"] },
                { type: _shared_dialogue_dialogue_service__WEBPACK_IMPORTED_MODULE_5__["DialogueService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["PlatformLocation"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"] },
                { type: _shared_loader_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"] },
                { type: _shared_screen_name__WEBPACK_IMPORTED_MODULE_8__["NameService"] }
            ]; };
            CongratulationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-congratulations',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./congratulations.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/congratulations/congratulations.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./congratulations.component.css */ "./src/app/congratulations/congratulations.component.css")).default]
                })
            ], CongratulationsComponent);
            /***/ 
        }),
        /***/ "./src/app/deposit-money/deposit-money.component.css": 
        /*!***********************************************************!*\
          !*** ./src/app/deposit-money/deposit-money.component.css ***!
          \***********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".sub_heading {\r\n    color: #989898;\r\n    font-size: 18px;\r\n}\r\n\r\n.heading {\r\n    color: #646464;\r\n    font-size: 20px;\r\n}\r\n\r\n.amount {\r\n    color: #f37021;\r\n    font-size: 12px;\r\n    position: absolute;\r\n    left: 15px;\r\n    top: 50px;\r\n}\r\n\r\n.price_amount {\r\n    margin-top: 50px;\r\n    margin-left: -30px;\r\n}\r\n\r\n.bar1 {\r\n    margin-left: -30px;\r\n}\r\n\r\n.or {\r\n    width: 50px;\r\n    height: 50px;\r\n    background-color: #bcbcbc;\r\n    border-radius: 50%;\r\n    color: #ffffff;\r\n    padding: 6px 10px;\r\n    margin-top: 22px;\r\n    line-height: 40px;\r\n    text-align: center;\r\n}\r\n\r\n.make_payment,\r\n.skip_this_step {\r\n    background-color: #f37021;\r\n    color: #ffffff;\r\n    margin: 20px 0;\r\n    border: none;\r\n    padding: 7px 25px;\r\n    text-align: center;\r\n    border-radius: 2px;\r\n}\r\n\r\n.skip_this_step {\r\n    margin-left: 130px;\r\n    margin-top: 22px;\r\n}\r\n\r\n.custom-deposit-or {\r\n    background: none;\r\n    color: #646464;\r\n    font-size: 24px;\r\n}\r\n\r\n.sub_heading-deposit-cstm {\r\n    font-size: 15px;\r\n}\r\n\r\n.ill-doit {\r\n    color: #f37021;\r\n    /* padding: 2% 4% 6% 5%; */\r\n    cursor: pointer;\r\n    text-decoration: underline;\r\n}\r\n\r\n.pad-mobile {\r\n    padding-top: 30px;\r\n}\r\n\r\n.mainContent {\r\n    margin: 5% 4% 0;\r\n}\r\n\r\n/*Media query starts here*/\r\n\r\n@media screen and (max-width: 992px) {\r\n    .mobile-center {\r\n        text-align: center;\r\n        padding-top: 30px;\r\n    }\r\n    .mainContent {\r\n        margin-top: 8% !important;\r\n        margin-left: -15px !important;\r\n        margin-right: -15px !important;\r\n    }\r\n    .margin-pad-0 {\r\n        padding-left: 0;\r\n        padding-right: 0;\r\n    }\r\n    .error_color>span>img {\r\n        /*padding-left: 0;*/\r\n        display: none;\r\n    }\r\n    .activeBtn,\r\n    .disabledBtn {\r\n        padding-top: 10px!important;\r\n        padding-bottom: 10px!important;\r\n        padding-right: 15px!important;\r\n        padding-left: 15px!important;\r\n    }\r\n}\r\n\r\n.activeBtn,\r\n.disabledBtn {\r\n    padding-top: 10px!important;\r\n    padding-bottom: 10px!important;\r\n    padding-right: 15px!important;\r\n    padding-left: 15px!important;\r\n}\r\n\r\n/*Media query starts here*/\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVwb3NpdC1tb25leS9kZXBvc2l0LW1vbmV5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLGNBQWM7SUFDZCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCwwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBR0EsMEJBQTBCOztBQUUxQjtJQUNJO1FBQ0ksa0JBQWtCO1FBQ2xCLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0kseUJBQXlCO1FBQ3pCLDZCQUE2QjtRQUM3Qiw4QkFBOEI7SUFDbEM7SUFDQTtRQUNJLGVBQWU7UUFDZixnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLG1CQUFtQjtRQUNuQixhQUFhO0lBQ2pCO0lBQ0E7O1FBRUksMkJBQTJCO1FBQzNCLDhCQUE4QjtRQUM5Qiw2QkFBNkI7UUFDN0IsNEJBQTRCO0lBQ2hDO0FBQ0o7O0FBRUE7O0lBRUksMkJBQTJCO0lBQzNCLDhCQUE4QjtJQUM5Qiw2QkFBNkI7SUFDN0IsNEJBQTRCO0FBQ2hDOztBQUdBLDBCQUEwQiIsImZpbGUiOiJzcmMvYXBwL2RlcG9zaXQtbW9uZXkvZGVwb3NpdC1tb25leS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN1Yl9oZWFkaW5nIHtcclxuICAgIGNvbG9yOiAjOTg5ODk4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4uaGVhZGluZyB7XHJcbiAgICBjb2xvcjogIzY0NjQ2NDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLmFtb3VudCB7XHJcbiAgICBjb2xvcjogI2YzNzAyMTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDE1cHg7XHJcbiAgICB0b3A6IDUwcHg7XHJcbn1cclxuXHJcbi5wcmljZV9hbW91bnQge1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMzBweDtcclxufVxyXG5cclxuLmJhcjEge1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0zMHB4O1xyXG59XHJcblxyXG4ub3Ige1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmNiY2JjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBwYWRkaW5nOiA2cHggMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDIycHg7XHJcbiAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm1ha2VfcGF5bWVudCxcclxuLnNraXBfdGhpc19zdGVwIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMzcwMjE7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIG1hcmdpbjogMjBweCAwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZzogN3B4IDI1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbn1cclxuXHJcbi5za2lwX3RoaXNfc3RlcCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTMwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMnB4O1xyXG59XHJcblxyXG4uY3VzdG9tLWRlcG9zaXQtb3Ige1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGNvbG9yOiAjNjQ2NDY0O1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcblxyXG4uc3ViX2hlYWRpbmctZGVwb3NpdC1jc3RtIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5cclxuLmlsbC1kb2l0IHtcclxuICAgIGNvbG9yOiAjZjM3MDIxO1xyXG4gICAgLyogcGFkZGluZzogMiUgNCUgNiUgNSU7ICovXHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLnBhZC1tb2JpbGUge1xyXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbn1cclxuXHJcbi5tYWluQ29udGVudCB7XHJcbiAgICBtYXJnaW46IDUlIDQlIDA7XHJcbn1cclxuXHJcblxyXG4vKk1lZGlhIHF1ZXJ5IHN0YXJ0cyBoZXJlKi9cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICAubW9iaWxlLWNlbnRlciB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgfVxyXG4gICAgLm1haW5Db250ZW50IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA4JSAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMTVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogLTE1cHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5tYXJnaW4tcGFkLTAge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICAgfVxyXG4gICAgLmVycm9yX2NvbG9yPnNwYW4+aW1nIHtcclxuICAgICAgICAvKnBhZGRpbmctbGVmdDogMDsqL1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuYWN0aXZlQnRuLFxyXG4gICAgLmRpc2FibGVkQnRuIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTBweCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHghaW1wb3J0YW50O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHghaW1wb3J0YW50O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTVweCFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hY3RpdmVCdG4sXHJcbi5kaXNhYmxlZEJ0biB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweCFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweCFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4IWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4vKk1lZGlhIHF1ZXJ5IHN0YXJ0cyBoZXJlKi8iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/deposit-money/deposit-money.component.ts": 
        /*!**********************************************************!*\
          !*** ./src/app/deposit-money/deposit-money.component.ts ***!
          \**********************************************************/
        /*! exports provided: DepositMoneyComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepositMoneyComponent", function () { return DepositMoneyComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _shared_loader_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/loader/loader.service */ "./src/app/shared/loader/loader.service.ts");
            /* harmony import */ var _shared_progress_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/progress.service */ "./src/app/shared/progress.service.ts");
            /* harmony import */ var _shared_dialogue_dialogue_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/dialogue/dialogue.service */ "./src/app/shared/dialogue/dialogue.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _shared_activate_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/activate.module */ "./src/app/shared/activate.module.ts");
            /* harmony import */ var _shared_screen_name__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/screen.name */ "./src/app/shared/screen.name.ts");
            /* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
            /* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
            /* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
            /* harmony import */ var _mobile_mobile_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../mobile/mobile.service */ "./src/app/mobile/mobile.service.ts");
            /* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
            //import { PlatwareService } from '../shared/platware-client/platware.service';
            //import { appService } from '../app.service';
            var DepositMoneyComponent = /** @class */ (function () {
                function DepositMoneyComponent(fb, progressService, _appservice, mobService, 
                //private platware: PlatwareService,
                //private appservice: appService,
                dialogueservice, router, location, locationurl, appLoader, _http, guardService, nameService, _authService) {
                    var _this = this;
                    // this.money_required = this.appservice.getMessageMaster('000011');
                    // router.routerState.root.queryParams.subscribe(
                    //   (queryParms: any) => {
                    //     const order_status = queryParms['order_status'] || '';
                    //   // **  const order_message = queryParms['status_message'];
                    //     if (order_status.toUpperCase() === "SUCCESS") {
                    this.fb = fb;
                    this.progressService = progressService;
                    this._appservice = _appservice;
                    this.mobService = mobService;
                    this.dialogueservice = dialogueservice;
                    this.router = router;
                    this.location = location;
                    this.locationurl = locationurl;
                    this.appLoader = appLoader;
                    this._http = _http;
                    this.guardService = guardService;
                    this.nameService = nameService;
                    this._authService = _authService;
                    this.depositamountcheck = false;
                    this.activeclass = true;
                    this.addScript = false;
                    this.finalAmount = 0;
                    this.paypalLoad = true;
                    this.paypalConfig = {
                        env: 'sandbox',
                        client: {
                            sandbox: 'AToZkNSm78y9IjmNKyP9uyEa3vr6UGxx6ow56lgDTb9c0IhUKAiQ8SPX_2eSXeQfbyFi200Dwq0cCK9l'
                        },
                        commit: true,
                        payment: function (data, actions) {
                            return actions.payment.create({
                                payment: {
                                    transactions: [
                                        { amount: { total: _this.finalAmount, currency: 'USD' } }
                                    ]
                                }
                            });
                        },
                        onAuthorize: function (data, acitons) {
                            return acitons.payment.execute().then(function (payment) {
                                console.log(payment);
                                _this.updateBalance(payment);
                            });
                        }
                    };
                    //       const successPaymentMsg = this.appservice.getMessageMaster('0034');
                    //       let masterData = this.appservice.getDepositMasterData();
                    //       this.appservice.setMasterData(masterData);
                    //       this.appservice.storeMasterData(masterData);
                    //       this.appservice.setDepositMasterData(null);
                    //       let deafultBranch = masterData["AOF"]["DATA"]["ACCOUNT_DTL"]["BRANCH_NO"]["DEFAULT_BRANCH"];
                    //       masterData['AOF']['DATA']['DEPOSITMONEY']['MONEY']['VALUE'] = this.appservice.getDepositAmount();
                    //       this.appservice.setDepositAmount(null);
                    //       if (deafultBranch === "Y") {
                    //           masterData['AOF']['DATA']['CURRENT_SCREEN_DTLS']['PORTAL_SCREEN_ID'] = '10';
                    //       }
                    //       else {
                    //            masterData['AOF']['DATA']['CURRENT_SCREEN_DTLS']['PORTAL_SCREEN_ID'] = '8';
                    //       }
                    //       // console.log(masterData["AOF"]["DATA"]["ACCOUNT_DTL"]["BRANCH_NO"]["DEFAULT_BRANCH"]);
                    //       const reqObj = [{
                    //         processName: 'SPTBINSERTAOFCUSTOBJ',
                    //         data: [{
                    //           'X_OBJECT_DATA': JSON.stringify(masterData),
                    //           'X_DEVICE_MODIFY_TIMESTAMP': '',
                    //           'X_DEVICE_CREATE_TIMESTAMP': '',
                    //           'X_OBJECT_KEY': '',
                    //           'X_OBJECT_VERSION': ''
                    //         }]
                    //       }];
                    //       this.appLoader.showLoader(successPaymentMsg);
                    //       this.platware.callPlatware(reqObj).subscribe(res => {
                    //         try {
                    //           this.appLoader.hideLoader();
                    //           const response_type = res[0]['data'][0].response_type;
                    //           if (response_type === 'I') {
                    //             this.appservice.setMasterData(masterData);
                    //             if (deafultBranch === "Y") {
                    //               this.guardService.STEPS['congratulation'] = true;
                    //               this.router.navigate(["/congratulation"]);
                    //             }
                    //             else {
                    //               this.guardService.STEPS['biometricKYC'] = true;
                    //               this.router.navigate(["/biometricKYC"]);
                    //             }
                    //           } else if (response_type == 'E') {
                    //             const response_code = res[0]['data'][0]['response_code'];
                    //             let message = this.appservice.getMessageMaster('' + response_code + '');
                    //             if (!message) {
                    //               message = "Message Key Not Found..!!!";
                    //             }
                    //             this.dialogueservice.alertBox({
                    //               title: 'Error',
                    //               message: message,
                    //               messageType: 'error',
                    //               actionlabel: ['OK']
                    //             }).take(1).subscribe((res) => {
                    //               // console.log(res);
                    //             })
                    //           }
                    //         }
                    //         catch (error) {
                    //           this.appLoader.hideLoader();
                    //           this.dialogueservice.alertBox({
                    //             title: 'Error',
                    //             message: this.appservice.getCatchmsg(),
                    //             messageType: 'error',
                    //             actionlabel: ['Close']
                    //           }).take(1).subscribe((res) => {
                    //             this.router.navigate(['/mobile']);
                    //           })
                    //         }
                    //       })
                    //     }
                    //     else if (order_status.toUpperCase() === "FAILURE") {
                    //       const masterData_term1 = this.appservice.getDepositMasterData();
                    //       this.appservice.setMasterData(masterData_term1);
                    //       this.appservice.storeMasterData(masterData_term1);
                    //       this.appservice.setDepositMasterData(null);
                    //       const changedUrl = this.router.url.split('?')[0];
                    //       const failurePaymentMsg = this.appservice.getMessageMaster('IP-00000130');
                    //       window.history.pushState('', 'Cop', changedUrl);
                    //       this.dialogueservice.alertBox({
                    //         title: 'Error',
                    //         message: failurePaymentMsg,
                    //         messageType: 'error',
                    //         actionlabel: ['OK']
                    //       }).take(1).subscribe((res) => {
                    //       })
                    //     }
                    //     else if (order_status.toUpperCase() === "ABORTED") {
                    //       const masterData_term1 = this.appservice.getDepositMasterData();
                    //       this.appservice.setMasterData(masterData_term1);
                    //       this.appservice.storeMasterData(masterData_term1);
                    //       this.appservice.setDepositMasterData(null);
                    //       const failurePaymentMsg = this.appservice.getMessageMaster('IP-00000131');
                    //       const changedUrl = this.router.url.split('?')[0];
                    //       window.history.pushState('', 'Cop', changedUrl);
                    //       this.dialogueservice.alertBox({
                    //         title: 'Warning',
                    //         message: failurePaymentMsg,
                    //         messageType: 'error',
                    //         actionlabel: ['OK']
                    //       }).take(1).subscribe((res) => {
                    //       })
                    //     }
                    //     else if(!order_status && !this.appservice.getMasterData()){
                    //           this.appservice.setDepositMasterData(null);
                    //           this.router.navigate(["/mobile"])
                    //     }
                    //     else {
                    //       // const masterData_term1 = this.appservice.getDepositMasterData();
                    //       // this.appservice.setMasterData(masterData_term1);
                    //       // this.appservice.storeMasterData(masterData_term1);
                    //       // this.appservice.setDepositMasterData(null);
                    //       // const changedUrl = this.router.url.split('?')[0];
                    //       // const failurePaymentMsg = this.appservice.getMessageMaster('SERVER-0030');
                    //       // window.history.pushState('', 'Cop', changedUrl);
                    //       // this.dialogueservice.alertBox({
                    //       //   title: 'Error',
                    //       //   message: failurePaymentMsg,
                    //       //   messageType: 'error',
                    //       //   actionlabel: ['OK']
                    //       // }).take(1).subscribe((res) => {
                    //       // })
                    //     }
                    //     // console.log(queryParms);
                    //   }
                    // )
                    // location.onPopState((e) => {
                    //   // console.log(e);
                    //   locationurl.go('/mobile');
                    //   // console.log('pressed back!');
                    // });
                }
                DepositMoneyComponent.prototype.ngAfterContentChecked = function () {
                    var _this = this;
                    if (!this.addScript) {
                        this.addPaypalScript().then(function () {
                            paypal.Button.render(_this.paypalConfig, '#paypal-checkout-btn');
                            _this.paypalLoad = false;
                        });
                    }
                };
                DepositMoneyComponent.prototype.addPaypalScript = function () {
                    this.addScript = true;
                    return new Promise(function (resolve, reject) {
                        var scripttagElement = document.createElement('script');
                        scripttagElement.src = 'http://www.paypalobjects.com/api/checkout.js';
                        scripttagElement.onload = resolve;
                        document.body.appendChild(scripttagElement);
                    });
                };
                DepositMoneyComponent.prototype.ngOnInit = function () {
                    this.nameService.setName('Deposit Money');
                    var user_registration = {
                        screen1: {
                            isActive: "YES",
                            isComplete: true,
                            loading: 100,
                        },
                        screen2: {
                            isActive: "YES",
                            isComplete: true,
                            loading: 100,
                        },
                        screen3: {
                            isActive: "YES",
                            isComplete: false,
                            loading: 100,
                        },
                        screen4: {
                            isActive: "NO",
                            isComplete: false,
                            loading: 0,
                        }
                    };
                    this.progressService.setLoaderWidth(user_registration);
                    //this.setFormData();
                    // dataLayer.push({
                    //   'url': '/vpv/sa-abhi/depositmoney',
                    //   'event': 'SA_DepositMoney'
                    //   })
                };
                // setFormData() {
                //   this.depositMoneyDetails = this.fb.group({
                //     amount: ['', Validators.required]
                //   });
                // }
                // getForm() {
                //   // console.log(this.depositMoneyDetails);
                // }
                DepositMoneyComponent.prototype.updateBalance = function (payment) {
                    var _this = this;
                    var ssnUserData = this._appservice.getSsnData();
                    ssnUserData.balance = payment.transactions[0].amount.total;
                    this._authService.depositSuccessful(ssnUserData)
                        .subscribe(function (resp) {
                        console.log(resp);
                        //return this.spresp.push(resp);
                        if (resp) {
                            _this.router.navigate(['/biometricKYC']);
                            // var message = "Money added to the account successfully"
                            // this.dialogueservice.alertBox({
                            //               message: message,
                            //                messageType: 'confirm',
                            //                 actionlabel: ['OK'],
                            //                 title: 'Transaction Successful',
                            //             }).take(1).subscribe((res) => {
                            //               this.router.navigate(['/biometricKYC']);
                            //                // console.log(res);
                            //               })
                            // console.log(resp)
                        }
                    });
                };
                DepositMoneyComponent.prototype.mychange = function (val) {
                    console.log(val); // updated value
                    this.finalAmount = parseInt(val.srcElement.value);
                };
                DepositMoneyComponent.prototype.ipFunding = function () {
                    this.router.navigate(['biometricKYC']);
                };
                DepositMoneyComponent.prototype.skipStep = function () {
                    this.router.navigate(['/biometricKYC']);
                };
                return DepositMoneyComponent;
            }());
            DepositMoneyComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
                { type: _shared_progress_service__WEBPACK_IMPORTED_MODULE_4__["ProgressService"] },
                { type: _app_service__WEBPACK_IMPORTED_MODULE_12__["appService"] },
                { type: _mobile_mobile_service__WEBPACK_IMPORTED_MODULE_13__["mobileService"] },
                { type: _shared_dialogue_dialogue_service__WEBPACK_IMPORTED_MODULE_5__["DialogueService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["PlatformLocation"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"] },
                { type: _shared_loader_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"] },
                { type: _angular_http__WEBPACK_IMPORTED_MODULE_10__["Http"] },
                { type: _shared_activate_module__WEBPACK_IMPORTED_MODULE_8__["WorkflowService"] },
                { type: _shared_screen_name__WEBPACK_IMPORTED_MODULE_9__["NameService"] },
                { type: _auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"] }
            ]; };
            DepositMoneyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-deposit-money',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./deposit-money.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/deposit-money/deposit-money.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./deposit-money.component.css */ "./src/app/deposit-money/deposit-money.component.css")).default]
                })
            ], DepositMoneyComponent);
            // export class depositMoneyDetails implements AfterContentChecked, OnInit {
            //   addScript: boolean = false;
            //   finalAmount: number = 1;
            //   paypalLoad: boolean = true;
            //   paypalConfig = {
            //     env: 'sandbox',
            //     client: {
            //       sandbox: 'AToZkNSm78y9IjmNKyP9uyEa3vr6UGxx6ow56lgDTb9c0IhUKAiQ8SPX_2eSXeQfbyFi200Dwq0cCK9l'
            //     },
            //     commit: true,
            //     payment: (data, actions) => {
            //       return actions.payment.create({
            //         payment: {
            //           transactions: [
            //             { amount: { total: this.finalAmount, currency: 'USD' } }
            //           ]
            //         }
            //       });
            //     },
            //     onAuthorize: (data, acitons) => {
            //       return acitons.payment.execute().then((payment) => {
            //       });
            //     }
            //   }
            //   ngAfterContentChecked(): void {
            //     if (!this.addScript) {
            //       this.addPaypalScript().then(() => {
            //         paypal.Button.render(this.paypalConfig, '#paypal-checkout-btn');
            //         this.paypalLoad = false;
            //       })
            //     }
            //   }
            //   addPaypalScript() {
            //     this.addScript = true;
            //     return new Promise((resolve, reject) => {
            //       let scripttagElement = document.createElement('script');
            //       scripttagElement.src = 'http://www.paypalobjects.com/api/checkout.js';
            //       scripttagElement.onload = resolve;
            //       document.body.appendChild(scripttagElement);
            //     })
            //   }
            // }
            /***/ 
        }),
        /***/ "./src/app/footer/footer.component.css": 
        /*!*********************************************!*\
          !*** ./src/app/footer/footer.component.css ***!
          \*********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".footer_outer {\r\n    position: fixed;\r\n    bottom: 0px;\r\n    width: 100%;\r\n    height: 65px;\r\n    background-color: #671773;\r\n    padding: 0;\r\n}\r\n\r\n.footer-navbar {\r\n    padding: 0;\r\n    padding-top: 24px;\r\n    padding-bottom: 24px;\r\n}\r\n\r\n.footer-navbar>p {\r\n    width: 10% !important;\r\n    color: white;\r\n    padding: 0;\r\n    text-align: center;\r\n}\r\n\r\n.footer-navbar>p>a {\r\n    color: #ffffff !important;\r\n    text-decoration: none;\r\n}\r\n\r\n.menu-mobile {\r\n    display: none;\r\n}\r\n\r\n.hemberger {\r\n    display: none;\r\n}\r\n\r\n.Version-number {\r\n    display: none;\r\n}\r\n\r\n@media screen and (max-width: 992px) {\r\n    .footer-navbar {\r\n        display: none;\r\n    }\r\n    .Version-number {\r\n        display: block;\r\n    }\r\n    .menu-mobile {\r\n        display: block;\r\n        position: relative;\r\n        overflow: hidden;\r\n        clear: both;\r\n        height: auto;\r\n        overflow: hidden;\r\n        clear: both;\r\n        /*height: 100%;*/\r\n    }\r\n    .hemberger {\r\n        display: block;\r\n        font-size: 30px;\r\n        cursor: pointer;\r\n        position: absolute;\r\n        top: 2px !important;\r\n        color: white;\r\n        left: 22px;\r\n        z-index: 99999;\r\n    }\r\n    .sidenav {\r\n        height: 100%;\r\n        width: 0;\r\n        position: fixed;\r\n        z-index: 1;\r\n        top: 0;\r\n        left: 0;\r\n        background-color: #671773;\r\n        overflow-x: hidden;\r\n        transition: 0.5s;\r\n        padding-top: 60px;\r\n        z-index: 999999;\r\n    }\r\n    .sidenav a {\r\n        padding: 8px 8px 8px 32px;\r\n        text-decoration: none;\r\n        font-size: 25px;\r\n        color: #818181;\r\n        display: block;\r\n        transition: 0.3s;\r\n    }\r\n    .sidenav a:hover {\r\n        color: #f1f1f1;\r\n    }\r\n    .sidenav .closebtn {\r\n        position: absolute;\r\n        top: 0;\r\n        right: 25px;\r\n        font-size: 60px;\r\n        margin-left: 50px;\r\n        padding-top: 0px;\r\n    }\r\n    .sidenav {\r\n        padding-top: 15px;\r\n    }\r\n    .sidenav a {\r\n        font-size: 20px;\r\n        color: white;\r\n    }\r\n    .faqNall-list {\r\n        margin-top: 62px;\r\n    }\r\n    .footer_outer {\r\n        display: none;\r\n    }\r\n    .Version {\r\n        color: white;\r\n        position: absolute;\r\n        border: 999999;\r\n        bottom: 0;\r\n        right: 30px;\r\n        z-index: 999999;\r\n        bottom: 0;\r\n        height: auto;\r\n    }\r\n    .main-div-footer {\r\n        overflow: hidden;\r\n        clear: both;\r\n        height: 100%;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osVUFBVTtJQUNWLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGNBQWM7UUFDZCxrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLFdBQVc7UUFDWCxZQUFZO1FBQ1osZ0JBQWdCO1FBQ2hCLFdBQVc7UUFDWCxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGNBQWM7UUFDZCxlQUFlO1FBQ2YsZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixtQkFBbUI7UUFDbkIsWUFBWTtRQUNaLFVBQVU7UUFDVixjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxZQUFZO1FBQ1osUUFBUTtRQUNSLGVBQWU7UUFDZixVQUFVO1FBQ1YsTUFBTTtRQUNOLE9BQU87UUFDUCx5QkFBeUI7UUFDekIsa0JBQWtCO1FBQ2xCLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFDakIsZUFBZTtJQUNuQjtJQUNBO1FBQ0kseUJBQXlCO1FBQ3pCLHFCQUFxQjtRQUNyQixlQUFlO1FBQ2YsY0FBYztRQUNkLGNBQWM7UUFDZCxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGtCQUFrQjtRQUNsQixNQUFNO1FBQ04sV0FBVztRQUNYLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGVBQWU7UUFDZixZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsY0FBYztRQUNkLFNBQVM7UUFDVCxXQUFXO1FBQ1gsZUFBZTtRQUNmLFNBQVM7UUFDVCxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxnQkFBZ0I7UUFDaEIsV0FBVztRQUNYLFlBQVk7SUFDaEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXJfb3V0ZXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNjVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NzE3NzM7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uZm9vdGVyLW5hdmJhciB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgcGFkZGluZy10b3A6IDI0cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjRweDtcclxufVxyXG5cclxuLmZvb3Rlci1uYXZiYXI+cCB7XHJcbiAgICB3aWR0aDogMTAlICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZm9vdGVyLW5hdmJhcj5wPmEge1xyXG4gICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLm1lbnUtbW9iaWxlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5oZW1iZXJnZXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLlZlcnNpb24tbnVtYmVyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICAuZm9vdGVyLW5hdmJhciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5WZXJzaW9uLW51bWJlciB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgICAubWVudS1tb2JpbGUge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIGNsZWFyOiBib3RoO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIGNsZWFyOiBib3RoO1xyXG4gICAgICAgIC8qaGVpZ2h0OiAxMDAlOyovXHJcbiAgICB9XHJcbiAgICAuaGVtYmVyZ2VyIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDJweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBsZWZ0OiAyMnB4O1xyXG4gICAgICAgIHotaW5kZXg6IDk5OTk5O1xyXG4gICAgfVxyXG4gICAgLnNpZGVuYXYge1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjcxNzczO1xyXG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA2MHB4O1xyXG4gICAgICAgIHotaW5kZXg6IDk5OTk5OTtcclxuICAgIH1cclxuICAgIC5zaWRlbmF2IGEge1xyXG4gICAgICAgIHBhZGRpbmc6IDhweCA4cHggOHB4IDMycHg7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICBjb2xvcjogIzgxODE4MTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgfVxyXG4gICAgLnNpZGVuYXYgYTpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICNmMWYxZjE7XHJcbiAgICB9XHJcbiAgICAuc2lkZW5hdiAuY2xvc2VidG4ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgcmlnaHQ6IDI1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiA2MHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICB9XHJcbiAgICAuc2lkZW5hdiB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICB9XHJcbiAgICAuc2lkZW5hdiBhIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gICAgLmZhcU5hbGwtbGlzdCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNjJweDtcclxuICAgIH1cclxuICAgIC5mb290ZXJfb3V0ZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuVmVyc2lvbiB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3JkZXI6IDk5OTk5OTtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgcmlnaHQ6IDMwcHg7XHJcbiAgICAgICAgei1pbmRleDogOTk5OTk5O1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB9XHJcbiAgICAubWFpbi1kaXYtZm9vdGVyIHtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIGNsZWFyOiBib3RoO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/footer/footer.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/footer/footer.component.ts ***!
          \********************************************/
        /*! exports provided: FooterComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function () { return FooterComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            //import { EnvironmentVars } from '../../../../../../Downloads/AU_SELFII/src/app/shared/platware-client/environmentVars';
            var FooterComponent = /** @class */ (function () {
                function FooterComponent() {
                }
                FooterComponent.prototype.ngOnInit = function () {
                    // this.setStaticUrls();
                };
                FooterComponent.prototype.openNav = function () {
                    document.getElementById("mySidenav").style.width = "100%";
                    document.getElementById("MenuMobile").style.height = "100%";
                };
                FooterComponent.prototype.closeNav = function () {
                    document.getElementById("mySidenav").style.width = "0";
                    document.getElementById("MenuMobile").style.height = "0";
                };
                return FooterComponent;
            }());
            FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-footer',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")).default]
                })
            ], FooterComponent);
            /***/ 
        }),
        /***/ "./src/app/header/header.component.css": 
        /*!*********************************************!*\
          !*** ./src/app/header/header.component.css ***!
          \*********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".header_outer {\r\n    height: 65px;\r\n    -o-object-fit: contain;\r\n       object-fit: contain;\r\n    background-color: #671773;\r\n    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.2), 0 1px 10px 0 rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n@media screen and (max-width: 992px) {\r\n    .header_outer {\r\n        height: 50px !important;\r\n    }\r\n    .header-right-banklogo img {\r\n        width: 80px !important;\r\n        margin-top: -2px;\r\n    }\r\n}\r\n\r\n.helper {\r\n    display: inline-block;\r\n    height: 100%;\r\n    vertical-align: middle;\r\n    padding-left: 2%;\r\n}\r\n\r\n.header_outer img {\r\n    /* width: 150px; */\r\n}\r\n\r\n.Hamburger {\r\n    width: 35px;\r\n    height: 4px;\r\n    background-color: white;\r\n    margin: 6px auto;\r\n}\r\n\r\n.header-left,\r\n.header-right {\r\n    line-height: 0\r\n}\r\n\r\n.header-right {\r\n    padding: 0;\r\n    line-height: 0;\r\n    float: right;\r\n    overflow: hidden;\r\n    padding: 4% 0px;\r\n}\r\n\r\n.header-right-banklogo {\r\n    padding-top: 0;\r\n    padding: 0;\r\n    text-align: right;\r\n    height: 100%;\r\n}\r\n\r\n.header-right-banklogo img {\r\n    width: 122px;\r\n    margin-top: -2px;\r\n}\r\n\r\n.header-left img {\r\n    width: 100px;\r\n    top: 3px;\r\n    position: relative;\r\n    left: -32px;\r\n}\r\n\r\n/* .header-right-banklogo img {\r\n    width: 113px;\r\n    top: 7px;\r\n    position: relative;\r\n} */\r\n\r\n.header-right-banklogo img {\r\n    width: 100px;\r\n    top: 3px;\r\n    position: relative;\r\n    left: 0px;\r\n}\r\n\r\n.header-left-title{\r\n        /*float: left;*/\r\n    display: none;\r\n    }\r\n\r\n@media screen and (max-width: 992px) {\r\n    .header-left {\r\n        display: none;\r\n    }\r\n    .header-right-banklogo img {\r\n        left: 0;\r\n    }\r\n    .header-left-title{\r\n        float: left;\r\n        display: block;\r\n    }\r\n    .header-left-title > p{\r\n        margin: 16px 0;\r\n        font-size: 16px;\r\n        color: white;\r\n        font-family: fantasy;\r\n        font-family: Nunito-Regular;\r\n        box-sizing: border-box;\r\n        font-weight: bold;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLHNCQUFtQjtPQUFuQixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLHVFQUF1RTtBQUMzRTs7QUFFQTtJQUNJO1FBQ0ksdUJBQXVCO0lBQzNCO0lBQ0E7UUFDSSxzQkFBc0I7UUFDdEIsZ0JBQWdCO0lBQ3BCO0FBQ0o7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLHVCQUF1QjtJQUN2QixnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUk7QUFDSjs7QUFFQTtJQUNJLFVBQVU7SUFDVixjQUFjO0lBQ2QsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztJQUNkLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osUUFBUTtJQUNSLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0FBRUE7Ozs7R0FJRzs7QUFDSDtJQUNJLFlBQVk7SUFDWixRQUFRO0lBQ1Isa0JBQWtCO0lBQ2xCLFNBQVM7QUFDYjs7QUFFSTtRQUNJLGVBQWU7SUFDbkIsYUFBYTtJQUNiOztBQUNKO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxPQUFPO0lBQ1g7SUFDQTtRQUNJLFdBQVc7UUFDWCxjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxjQUFjO1FBQ2QsZUFBZTtRQUNmLFlBQVk7UUFDWixvQkFBb0I7UUFDcEIsMkJBQTJCO1FBQzNCLHNCQUFzQjtRQUN0QixpQkFBaUI7SUFDckI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXJfb3V0ZXIge1xyXG4gICAgaGVpZ2h0OiA2NXB4O1xyXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NzE3NzM7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxcHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgIC5oZWFkZXJfb3V0ZXIge1xyXG4gICAgICAgIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmhlYWRlci1yaWdodC1iYW5rbG9nbyBpbWcge1xyXG4gICAgICAgIHdpZHRoOiA4MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTJweDtcclxuICAgIH1cclxufVxyXG5cclxuLmhlbHBlciB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyJTtcclxufVxyXG5cclxuLmhlYWRlcl9vdXRlciBpbWcge1xyXG4gICAgLyogd2lkdGg6IDE1MHB4OyAqL1xyXG59XHJcblxyXG4uSGFtYnVyZ2VyIHtcclxuICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgaGVpZ2h0OiA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbjogNnB4IGF1dG87XHJcbn1cclxuXHJcbi5oZWFkZXItbGVmdCxcclxuLmhlYWRlci1yaWdodCB7XHJcbiAgICBsaW5lLWhlaWdodDogMFxyXG59XHJcblxyXG4uaGVhZGVyLXJpZ2h0IHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBsaW5lLWhlaWdodDogMDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwYWRkaW5nOiA0JSAwcHg7XHJcbn1cclxuXHJcbi5oZWFkZXItcmlnaHQtYmFua2xvZ28ge1xyXG4gICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5oZWFkZXItcmlnaHQtYmFua2xvZ28gaW1nIHtcclxuICAgIHdpZHRoOiAxMjJweDtcclxuICAgIG1hcmdpbi10b3A6IC0ycHg7XHJcbn1cclxuXHJcbi5oZWFkZXItbGVmdCBpbWcge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgdG9wOiAzcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiAtMzJweDtcclxufVxyXG5cclxuLyogLmhlYWRlci1yaWdodC1iYW5rbG9nbyBpbWcge1xyXG4gICAgd2lkdGg6IDExM3B4O1xyXG4gICAgdG9wOiA3cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn0gKi9cclxuLmhlYWRlci1yaWdodC1iYW5rbG9nbyBpbWcge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgdG9wOiAzcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbn1cclxuXHJcbiAgICAuaGVhZGVyLWxlZnQtdGl0bGV7XHJcbiAgICAgICAgLypmbG9hdDogbGVmdDsqL1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgIC5oZWFkZXItbGVmdCB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5oZWFkZXItcmlnaHQtYmFua2xvZ28gaW1nIHtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgfVxyXG4gICAgLmhlYWRlci1sZWZ0LXRpdGxle1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgLmhlYWRlci1sZWZ0LXRpdGxlID4gcHtcclxuICAgICAgICBtYXJnaW46IDE2cHggMDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBmYW50YXN5O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBOdW5pdG8tUmVndWxhcjtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/header/header.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/header/header.component.ts ***!
          \********************************************/
        /*! exports provided: HeaderComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () { return HeaderComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _shared_screen_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/screen.name */ "./src/app/shared/screen.name.ts");
            var HeaderComponent = /** @class */ (function () {
                function HeaderComponent(nameService) {
                    this.nameService = nameService;
                }
                HeaderComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.name = this.nameService.getName().subscribe(function (name) { _this.headerName = name; });
                    // console.log(this.headerName);
                };
                return HeaderComponent;
            }());
            HeaderComponent.ctorParameters = function () { return [
                { type: _shared_screen_name__WEBPACK_IMPORTED_MODULE_2__["NameService"] }
            ]; };
            HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-header',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")).default]
                })
            ], HeaderComponent);
            /***/ 
        }),
        /***/ "./src/app/mobile/mobile.component.css": 
        /*!*********************************************!*\
          !*** ./src/app/mobile/mobile.component.css ***!
          \*********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".showOtp {\r\n    display: block;\r\n    margin-top: 10px;\r\n}\r\n\r\n.hideOtp {\r\n    display: none;\r\n}\r\n\r\n.nav-tabs12 {\r\n    position: relative;\r\n    /* border-bottom: 0; */\r\n    /* width: 80%; */\r\n    margin: 40px auto;\r\n    list-style: none;\r\n    margin-bottom: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.uploadOverlay {\r\n    position: fixed;\r\n    top: 0px;\r\n    bottom: 0px;\r\n    left: 0px;\r\n    height: 100%;\r\n    width: 100%;\r\n    background: rgba(255, 255, 255, 0.8);\r\n    z-index: 100;\r\n    display: flex;\r\n}\r\n\r\n.uploadOverlay .uploadContainer .header {\r\n    width: 100%;\r\n    background-color: #f37021;\r\n    height: 100px;\r\n    padding: 20px 20px;\r\n}\r\n\r\n.uploadOverlay .uploadContainer .body {\r\n    width: 100%;\r\n    height: 400px;\r\n    /* margin: 58px; */\r\n    /* height: 155px; */\r\n    padding: 20px 40px;\r\n}\r\n\r\n.uploadOverlay .uploadContainer .body {\r\n    padding: 10px 16px;\r\n}\r\n\r\n.uploadOverlay .uploadContainer .header {\r\n    height: 60px !important;\r\n}\r\n\r\n.mobile_dbt{\r\n    margin-left: 39px;\r\n    margin-top: -32px;\r\n}\r\n\r\n.button_aligned_mobile {\r\n    padding-top: 30px;\r\n    padding-bottom: 15px;\r\n    text-align: center;\r\n    margin-left: 37px;\r\n}\r\n\r\n.cancel_btn {\r\n    padding: 5% 0%;\r\n    outline: none;\r\n    /* padding: 1% 6%; */\r\n    background: #f37021;\r\n    border-radius: 2px;\r\n    border: none;\r\n    cursor: pointer;\r\n    color: #fff;\r\n}\r\n\r\n.mobile_dbt_btn{\r\n    padding: 5% 0%;\r\n    background-color: #f37021;\r\n    color: #fff;\r\n    border: none;\r\n}\r\n\r\n.button_style_mobile12 {\r\n    padding-bottom: 2%;\r\n}\r\n\r\n.dbt {\r\n    font-size: 11px;\r\n    color: #f37021;\r\n    margin-top: 50px;\r\n}\r\n\r\n.nav-tabs12 li {\r\n    width: 20%;\r\n    border-bottom: 2px solid #ddd;\r\n    margin: 2px;\r\n    height: 25px;\r\n    float: left;\r\n    text-decoration: none;\r\n    color: #ddd;\r\n}\r\n\r\n.pad_radio {\r\n    padding-bottom: 1%;\r\n    padding-left: 0;\r\n}\r\n\r\n.pad-left {\r\n    padding-left: 0;\r\n}\r\n\r\n.pad_radio span {\r\n    display: block;\r\n    padding-left: 20px;\r\n}\r\n\r\n.search-result li {\r\n    border-bottom: 1px solid gray;\r\n    border-left: 1px solid gray;\r\n    border-right: 1px solid gray;\r\n    width: 295px;\r\n    /* height: 16px; */\r\n    padding: 5px;\r\n    background-color: white;\r\n    cursor: pointer;\r\n    list-style-type: none;\r\n}\r\n\r\n.search-result li:hover {\r\n    background-color: #607D8B;\r\n}\r\n\r\n.search-result li a {\r\n    color: #888;\r\n    display: block;\r\n    text-decoration: none;\r\n}\r\n\r\n.search-result li a:hover {\r\n    color: white;\r\n}\r\n\r\n.search-result li a:active {\r\n    color: white;\r\n}\r\n\r\nul.search-result {\r\n    margin-top: 0;\r\n    padding-left: 0;\r\n    height: 200px;\r\n    z-index: 1;\r\n    position: absolute;\r\n    overflow: auto;\r\n}\r\n\r\n.active {\r\n    width: 100%;\r\n    border-bottom: 2px solid #3879e8 !important;\r\n    margin: 2px;\r\n    height: 25px;\r\n    float: left;\r\n    color: #3879e8 !important;\r\n}\r\n\r\n.padding_left_style {\r\n    padding-left: 45px;\r\n}\r\n\r\n.error_color {\r\n    color: red;\r\n    font-size: 12px;\r\n    font-family: Nunito-Regular;\r\n    /* padding-top: 12px; */\r\n    margin-top: 5px;\r\n}\r\n\r\n.error_color .error_img {\r\n    position: relative;\r\n}\r\n\r\n.error_color .error_text {\r\n    position: absolute;\r\n    top: 4px;\r\n    left: 40px;\r\n    font-family: inherit;\r\n    font-family: Nunito-Regular;\r\n}\r\n\r\n.mobile_first_style {\r\n    position: absolute;\r\n    top: 0;\r\n    font-size: 18px;\r\n}\r\n\r\n@media screen and (max-width: 992px) {\r\n    .padding_left_style {\r\n        padding-left: 35px;\r\n    }\r\n    .mobile_first_style {\r\n        position: absolute;\r\n        top: 0;\r\n        font-size: 15px;\r\n    }\r\n    .error_color .error_text {\r\n        position: unset !important;\r\n        font-family: inherit;\r\n        font-family: Nunito-Regular;\r\n    }\r\n    .search-result li {\r\n        border-bottom: 1px solid gray;\r\n        border-left: 1px solid gray;\r\n        border-right: 1px solid gray;\r\n        width: 275px !important;\r\n        /* height: 16px; */\r\n        padding: 5px;\r\n        background-color: white;\r\n        cursor: pointer;\r\n        list-style-type: none;\r\n    }\r\n    .otp_error {\r\n        padding-left: 0 !important;\r\n    }\r\n    .mobile_loader {\r\n        margin-left: inherit !important;\r\n        width: inherit !important;\r\n        text-align: center;\r\n    }\r\n    .mobile_style {\r\n        margin-top: 30% !important;\r\n        margin-left: -15px !important;\r\n        margin-right: -15px !important;\r\n    }\r\n    .pos-rel {\r\n        position: relative;\r\n        right: -15px !important;\r\n    }\r\n    .pos-rel-count {\r\n        width: 0 !important;\r\n    }\r\n    .pos-relative {\r\n        position: relative;\r\n        /*right: -15px !important;*/\r\n    }\r\n    .pos-rel {\r\n        right: 15px !important;\r\n    }\r\n    .pos-relative-new {\r\n        right: -15px !important;\r\n    }\r\n}\r\n\r\n.valid_otp{\r\n    display: none;\r\n}\r\n\r\n.invalid_otp{\r\n    display: inline-block;\r\n}\r\n\r\n@media screen and (max-width: 420px) {\r\n    /*.res-otp-timer{\r\n    display: block !important;\r\n    float: left !important;\r\n}\r\n.txt-indent{\r\n    text-indent: 21px !important;\r\n}\r\n.pos-rel{\r\n        position: relative;\r\n        right: 0 !important;\r\n    }*/\r\n}\r\n\r\n.mobile_loader {\r\n    margin-left: 10%;\r\n    width: 480px;\r\n    text-align: center;\r\n}\r\n\r\n.helpingSection {\r\n    font-family: Nunito-Regular;\r\n    /* change hervinder */\r\n    color: #646464;\r\n    font-size: 12px;\r\n    /* change hervinder */\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-stretch: normal;\r\n    line-height: normal;\r\n    letter-spacing: 0px;\r\n    /* change akansha*/\r\n    padding-top: 10px;\r\n}\r\n\r\n.resend {\r\n    text-decoration: underline;\r\n    color: #5959b1;\r\n    cursor: pointer;\r\n}\r\n\r\n.mobile-alignment-uifix {\r\n    padding-top: 0px;\r\n    margin-top: -3px;\r\n}\r\n\r\n.mobile-alignment-uifix-otp {\r\n    padding-top: 0px;\r\n    margin-top: 0px;\r\n}\r\n\r\n@media screen and (max-width: 992px) {\r\n    .label_mobile_res {\r\n        font-family: Nunito-Regular;\r\n        min-height: 20px;\r\n        padding-top: -3px;\r\n        padding-left: 32px;\r\n        /* margin-bottom: 12px; */\r\n        font-weight: 400;\r\n        cursor: pointer;\r\n        position: relative;\r\n        top: -20px;\r\n        color: #646464;\r\n        margin: 0;\r\n        display: block;\r\n    }\r\n    .rectangle-3 {\r\n        /*width: 800px;\r\n      height: 242px;*/\r\n        padding: 40px 10px 20px 10px;\r\n        background-color: #fef7f3;\r\n        box-shadow: 0 0 10px 0 rgba(243, 112, 33, 0.3);\r\n        margin-left: 0px !important;\r\n        margin-right: 0px !important;\r\n        margin-top: 30px;\r\n    }\r\n    .button_style_mobile12 {\r\n        padding-bottom: 22% !important;\r\n    }\r\n    #search-box {\r\n        width: 270px !important;\r\n        height: 20px;\r\n    }\r\n    .search-result li {\r\n        border-bottom: 1px solid gray;\r\n        border-left: 1px solid gray;\r\n        border-right: 1px solid gray;\r\n        width: 275px !important;\r\n        /* height: 16px; */\r\n        padding: 5px;\r\n        background-color: white;\r\n        cursor: pointer;\r\n        list-style-type: none;\r\n    }\r\n    .margin-pad-0 {\r\n        padding-left: 0;\r\n        padding-right: 0;\r\n        margin-left: 0;\r\n        margin-right: 0;\r\n    }\r\n    .account-main-div {\r\n        position: static !important;\r\n    }\r\n    .accountSummaryDetails-cstm {\r\n        width: 97%;\r\n        /*margin: 0 auto;*/\r\n    }\r\n    .disabledBtn {\r\n        outline: none;\r\n        background: grey;\r\n        color: #fff;\r\n        cursor: not-allowed;\r\n        padding: 8px 46px !important;\r\n    }\r\n    .details {\r\n        top: 67px !important;\r\n    }\r\n    .uploadContainer {\r\n        width: 100%;\r\n        height: 100%;\r\n        position: absolute;\r\n        left: 0;\r\n        right: 0;\r\n        top: 0;\r\n        bottom: 0;\r\n        margin: auto;\r\n        max-width: 100%;\r\n        max-height: 100%;\r\n        overflow: auto;\r\n\r\n    }\r\n    .dbt_new_popup{\r\n        width: 60% !important;\r\n        height: 78% !important;\r\n        /* margin-top: 63px !important;\r\n        border: 2px solid black;\r\n        margin-left: 265px !important; */\r\n        box-shadow: 0px 0px 34px !important;\r\n        background-color: #fff !important;\r\n    }\r\n    .header {\r\n        overflow: hidden;\r\n        height: auto;\r\n    }\r\n    .uploadOverlay .uploadContainer .body {\r\n        padding: 10px 16px;\r\n    }\r\n    .cancel_btn {\r\n        padding: 8px 37px !important;\r\n    }\r\n    .activeBtn {\r\n        padding: 8px 46px !important;\r\n    }\r\n    .radio-align-media {\r\n        margin-left: -4px;\r\n        overflow: hidden;\r\n    }\r\n    .margin-pad-0 {\r\n        padding-left: 0;\r\n        padding-right: 0;\r\n        margin-left: 0 !important;\r\n    }\r\n    .select_box {\r\n        width: 100%;\r\n    }\r\n    .pad-right {\r\n        padding-right: 20px;\r\n    }\r\n    .fatca_dbt {\r\n        padding-left: 12px;\r\n    }\r\n    .uploadOverlay .uploadContainer .header {\r\n        height: auto !important;\r\n    }\r\n    .main-div-account {\r\n        top: 0 !important;\r\n        height: 100% !important;\r\n    }\r\n    .mainContent.row.mainContent-acnt-cstm.margin-pad-0 {\r\n        margin-top: 0 !important;\r\n    }\r\n    .uploadContainer {\r\n        height: 83% !important;\r\n    }\r\n    .select_box {\r\n        background: none;\r\n    }\r\n    .activeBtn {\r\n        padding-left: 40px !important;\r\n        padding-left: initial !important;\r\n    }\r\n    .pad-mobile {\r\n        padding-top: 15px;\r\n    }\r\n    .button_aligned_mobile {\r\n        padding-top: 30px;\r\n        padding-bottom: 15px;\r\n        text-align: center;\r\n    }\r\n    .label-styling-title-account{\r\n        font-size: 13px;}\r\n\r\n    }\r\n\r\n/*Media query starts here*/\r\n\r\n.font_fam {\r\n    font-family: Nunito-Regular;\r\n}\r\n\r\n.label-styling-title-account {\r\n    font-family: Nunito-Regular;\r\n    min-height: 20px;\r\n    padding-top: 5px;\r\n    padding-left: 20px;\r\n    margin-bottom: 0;\r\n    font-weight: 400;\r\n    cursor: pointer;\r\n    color: #646464;\r\n    margin: 0;\r\n    display: block;\r\n}\r\n\r\n.activeBtn {\r\n    padding-left: 0px !important;\r\n}\r\n\r\n.noteAccountSummary{\r\n    font-size: 13px;\r\n    color: #b4b4b4;\r\n    margin-left: 12px;\r\n    margin-top: 30px;\r\n    margin-bottom: 0px;\r\n}\r\n\r\n@-webkit-keyframes blink {\r\n    0% {\r\n        opacity:1;\r\n    }\r\n    50% {\r\n        opacity:0.3;\r\n    }\r\n    100% {\r\n        opacity:1;\r\n    }\r\n}\r\n\r\n/* IE */\r\n\r\n/* Opera and prob css3 final iteration */\r\n\r\n@keyframes blink {\r\n    0% {\r\n        opacity:1;\r\n    }\r\n    50% {\r\n        opacity:0.3;\r\n    }\r\n    100% {\r\n        opacity:1;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9iaWxlL21vYmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixzQkFBc0I7QUFDMUI7O0FBQ0E7SUFDSSxlQUFlO0lBQ2YsUUFBUTtJQUNSLFdBQVc7SUFDWCxTQUFTO0lBQ1QsWUFBWTtJQUNaLFdBQVc7SUFDWCxvQ0FBb0M7SUFDcEMsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFDQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGVBQWU7SUFDZixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxVQUFVO0lBQ1YsNkJBQTZCO0lBQzdCLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLHFCQUFxQjtJQUNyQixXQUFXO0FBQ2Y7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFDQTtJQUNJLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksNkJBQTZCO0lBQzdCLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUNBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixhQUFhO0lBQ2IsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCOztBQUNBO0lBQ0ksV0FBVztJQUNYLDJDQUEyQztJQUMzQyxXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZUFBZTtJQUNmLDJCQUEyQjtJQUMzQix1QkFBdUI7SUFDdkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsVUFBVTtJQUNWLG9CQUFvQjtJQUNwQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLGVBQWU7QUFDbkI7O0FBRUE7SUFDSTtRQUNJLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLE1BQU07UUFDTixlQUFlO0lBQ25CO0lBQ0E7UUFDSSwwQkFBMEI7UUFDMUIsb0JBQW9CO1FBQ3BCLDJCQUEyQjtJQUMvQjtJQUNBO1FBQ0ksNkJBQTZCO1FBQzdCLDJCQUEyQjtRQUMzQiw0QkFBNEI7UUFDNUIsdUJBQXVCO1FBQ3ZCLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osdUJBQXVCO1FBQ3ZCLGVBQWU7UUFDZixxQkFBcUI7SUFDekI7SUFDQTtRQUNJLDBCQUEwQjtJQUM5QjtJQUNBO1FBQ0ksK0JBQStCO1FBQy9CLHlCQUF5QjtRQUN6QixrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLDBCQUEwQjtRQUMxQiw2QkFBNkI7UUFDN0IsOEJBQThCO0lBQ2xDO0lBQ0E7UUFDSSxrQkFBa0I7UUFDbEIsdUJBQXVCO0lBQzNCO0lBQ0E7UUFDSSxtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLGtCQUFrQjtRQUNsQiwyQkFBMkI7SUFDL0I7SUFDQTtRQUNJLHNCQUFzQjtJQUMxQjtJQUNBO1FBQ0ksdUJBQXVCO0lBQzNCO0FBQ0o7O0FBQ0E7SUFDSSxhQUFhO0FBQ2pCOztBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUNBO0lBQ0k7Ozs7Ozs7Ozs7TUFVRTtBQUNOOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFDQTtJQUNJO1FBQ0ksMkJBQTJCO1FBQzNCLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLHlCQUF5QjtRQUN6QixnQkFBZ0I7UUFDaEIsZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixVQUFVO1FBQ1YsY0FBYztRQUNkLFNBQVM7UUFDVCxjQUFjO0lBQ2xCO0lBQ0E7UUFDSTtxQkFDYTtRQUNiLDRCQUE0QjtRQUM1Qix5QkFBeUI7UUFDekIsOENBQThDO1FBQzlDLDJCQUEyQjtRQUMzQiw0QkFBNEI7UUFDNUIsZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSw4QkFBOEI7SUFDbEM7SUFDQTtRQUNJLHVCQUF1QjtRQUN2QixZQUFZO0lBQ2hCO0lBQ0E7UUFDSSw2QkFBNkI7UUFDN0IsMkJBQTJCO1FBQzNCLDRCQUE0QjtRQUM1Qix1QkFBdUI7UUFDdkIsa0JBQWtCO1FBQ2xCLFlBQVk7UUFDWix1QkFBdUI7UUFDdkIsZUFBZTtRQUNmLHFCQUFxQjtJQUN6QjtJQUNBO1FBQ0ksZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixjQUFjO1FBQ2QsZUFBZTtJQUNuQjtJQUNBO1FBQ0ksMkJBQTJCO0lBQy9CO0lBQ0E7UUFDSSxVQUFVO1FBQ1Ysa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxhQUFhO1FBQ2IsZ0JBQWdCO1FBQ2hCLFdBQVc7UUFDWCxtQkFBbUI7UUFDbkIsNEJBQTRCO0lBQ2hDO0lBQ0E7UUFDSSxvQkFBb0I7SUFDeEI7SUFDQTtRQUNJLFdBQVc7UUFDWCxZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLE9BQU87UUFDUCxRQUFRO1FBQ1IsTUFBTTtRQUNOLFNBQVM7UUFDVCxZQUFZO1FBQ1osZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixjQUFjOztJQUVsQjtJQUNBO1FBQ0kscUJBQXFCO1FBQ3JCLHNCQUFzQjtRQUN0Qjs7d0NBRWdDO1FBQ2hDLG1DQUFtQztRQUNuQyxpQ0FBaUM7SUFDckM7SUFDQTtRQUNJLGdCQUFnQjtRQUNoQixZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLDRCQUE0QjtJQUNoQztJQUNBO1FBQ0ksNEJBQTRCO0lBQ2hDO0lBQ0E7UUFDSSxpQkFBaUI7UUFDakIsZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLHlCQUF5QjtJQUM3QjtJQUNBO1FBQ0ksV0FBVztJQUNmO0lBQ0E7UUFDSSxtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksdUJBQXVCO0lBQzNCO0lBQ0E7UUFDSSxpQkFBaUI7UUFDakIsdUJBQXVCO0lBQzNCO0lBQ0E7UUFDSSx3QkFBd0I7SUFDNUI7SUFDQTtRQUNJLHNCQUFzQjtJQUMxQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSw2QkFBNkI7UUFDN0IsZ0NBQWdDO0lBQ3BDO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGlCQUFpQjtRQUNqQixvQkFBb0I7UUFDcEIsa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxlQUFlLENBQUM7O0lBRXBCOztBQUNKLDBCQUEwQjs7QUFFMUI7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsY0FBYztJQUNkLFNBQVM7SUFDVCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUNBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFhQTtJQUNJO1FBQ0ksU0FBUztJQUNiO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7SUFDQTtRQUNJLFNBQVM7SUFDYjtBQUNKOztBQUNBLE9BQU87O0FBWVAsd0NBQXdDOztBQUN4QztJQUNJO1FBQ0ksU0FBUztJQUNiO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7SUFDQTtRQUNJLFNBQVM7SUFDYjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvbW9iaWxlL21vYmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNob3dPdHAge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uaGlkZU90cCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4ubmF2LXRhYnMxMiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAvKiBib3JkZXItYm90dG9tOiAwOyAqL1xyXG4gICAgLyogd2lkdGg6IDgwJTsgKi9cclxuICAgIG1hcmdpbjogNDBweCBhdXRvO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbi51cGxvYWRPdmVybGF5IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxuICAgIHotaW5kZXg6IDEwMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLnVwbG9hZE92ZXJsYXkgLnVwbG9hZENvbnRhaW5lciAuaGVhZGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YzNzAyMTtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XHJcbn1cclxuLnVwbG9hZE92ZXJsYXkgLnVwbG9hZENvbnRhaW5lciAuYm9keSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICAvKiBtYXJnaW46IDU4cHg7ICovXHJcbiAgICAvKiBoZWlnaHQ6IDE1NXB4OyAqL1xyXG4gICAgcGFkZGluZzogMjBweCA0MHB4O1xyXG59XHJcbi51cGxvYWRPdmVybGF5IC51cGxvYWRDb250YWluZXIgLmJvZHkge1xyXG4gICAgcGFkZGluZzogMTBweCAxNnB4O1xyXG59XHJcbi51cGxvYWRPdmVybGF5IC51cGxvYWRDb250YWluZXIgLmhlYWRlciB7XHJcbiAgICBoZWlnaHQ6IDYwcHggIWltcG9ydGFudDtcclxufVxyXG4ubW9iaWxlX2RidHtcclxuICAgIG1hcmdpbi1sZWZ0OiAzOXB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTMycHg7XHJcbn1cclxuLmJ1dHRvbl9hbGlnbmVkX21vYmlsZSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDM3cHg7XHJcbn1cclxuLmNhbmNlbF9idG4ge1xyXG4gICAgcGFkZGluZzogNSUgMCU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgLyogcGFkZGluZzogMSUgNiU7ICovXHJcbiAgICBiYWNrZ3JvdW5kOiAjZjM3MDIxO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5tb2JpbGVfZGJ0X2J0bntcclxuICAgIHBhZGRpbmc6IDUlIDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YzNzAyMTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcbi5idXR0b25fc3R5bGVfbW9iaWxlMTIge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIlO1xyXG59XHJcblxyXG4uZGJ0IHtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGNvbG9yOiAjZjM3MDIxO1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxufVxyXG4ubmF2LXRhYnMxMiBsaSB7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNkZGQ7XHJcbiAgICBtYXJnaW46IDJweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICNkZGQ7XHJcbn1cclxuLnBhZF9yYWRpbyB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMSU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbn1cclxuLnBhZC1sZWZ0IHtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxufVxyXG4ucGFkX3JhZGlvIHNwYW4ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbn1cclxuLnNlYXJjaC1yZXN1bHQgbGkge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyYXk7XHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGdyYXk7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBncmF5O1xyXG4gICAgd2lkdGg6IDI5NXB4O1xyXG4gICAgLyogaGVpZ2h0OiAxNnB4OyAqL1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbn1cclxuXHJcbi5zZWFyY2gtcmVzdWx0IGxpOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MDdEOEI7XHJcbn1cclxuXHJcbi5zZWFyY2gtcmVzdWx0IGxpIGEge1xyXG4gICAgY29sb3I6ICM4ODg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLnNlYXJjaC1yZXN1bHQgbGkgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5zZWFyY2gtcmVzdWx0IGxpIGE6YWN0aXZlIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG51bC5zZWFyY2gtcmVzdWx0IHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcbi5hY3RpdmUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzM4NzllOCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAycHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGNvbG9yOiAjMzg3OWU4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wYWRkaW5nX2xlZnRfc3R5bGUge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0NXB4O1xyXG59XHJcblxyXG4uZXJyb3JfY29sb3Ige1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtZmFtaWx5OiBOdW5pdG8tUmVndWxhcjtcclxuICAgIC8qIHBhZGRpbmctdG9wOiAxMnB4OyAqL1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcblxyXG4uZXJyb3JfY29sb3IgLmVycm9yX2ltZyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5lcnJvcl9jb2xvciAuZXJyb3JfdGV4dCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDRweDtcclxuICAgIGxlZnQ6IDQwcHg7XHJcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICAgIGZvbnQtZmFtaWx5OiBOdW5pdG8tUmVndWxhcjtcclxufVxyXG5cclxuLm1vYmlsZV9maXJzdF9zdHlsZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICAucGFkZGluZ19sZWZ0X3N0eWxlIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDM1cHg7XHJcbiAgICB9XHJcbiAgICAubW9iaWxlX2ZpcnN0X3N0eWxlIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIH1cclxuICAgIC5lcnJvcl9jb2xvciAuZXJyb3JfdGV4dCB7XHJcbiAgICAgICAgcG9zaXRpb246IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IE51bml0by1SZWd1bGFyO1xyXG4gICAgfVxyXG4gICAgLnNlYXJjaC1yZXN1bHQgbGkge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgZ3JheTtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBncmF5O1xyXG4gICAgICAgIHdpZHRoOiAyNzVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIC8qIGhlaWdodDogMTZweDsgKi9cclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIH1cclxuICAgIC5vdHBfZXJyb3Ige1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLm1vYmlsZV9sb2FkZXIge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBpbmhlcml0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgd2lkdGg6IGluaGVyaXQgIWltcG9ydGFudDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAubW9iaWxlX3N0eWxlIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzMCUgIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTE1cHggIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IC0xNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAucG9zLXJlbCB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHJpZ2h0OiAtMTVweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLnBvcy1yZWwtY291bnQge1xyXG4gICAgICAgIHdpZHRoOiAwICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAucG9zLXJlbGF0aXZlIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgLypyaWdodDogLTE1cHggIWltcG9ydGFudDsqL1xyXG4gICAgfVxyXG4gICAgLnBvcy1yZWwge1xyXG4gICAgICAgIHJpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAucG9zLXJlbGF0aXZlLW5ldyB7XHJcbiAgICAgICAgcmlnaHQ6IC0xNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuLnZhbGlkX290cHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmludmFsaWRfb3Rwe1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyMHB4KSB7XHJcbiAgICAvKi5yZXMtb3RwLXRpbWVye1xyXG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICAgIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbn1cclxuLnR4dC1pbmRlbnR7XHJcbiAgICB0ZXh0LWluZGVudDogMjFweCAhaW1wb3J0YW50O1xyXG59XHJcbi5wb3MtcmVse1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICByaWdodDogMCAhaW1wb3J0YW50O1xyXG4gICAgfSovXHJcbn1cclxuXHJcbi5tb2JpbGVfbG9hZGVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICB3aWR0aDogNDgwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5oZWxwaW5nU2VjdGlvbiB7XHJcbiAgICBmb250LWZhbWlseTogTnVuaXRvLVJlZ3VsYXI7XHJcbiAgICAvKiBjaGFuZ2UgaGVydmluZGVyICovXHJcbiAgICBjb2xvcjogIzY0NjQ2NDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIC8qIGNoYW5nZSBoZXJ2aW5kZXIgKi9cclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgLyogY2hhbmdlIGFrYW5zaGEqL1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5yZXNlbmQge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICBjb2xvcjogIzU5NTliMTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm1vYmlsZS1hbGlnbm1lbnQtdWlmaXgge1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgIG1hcmdpbi10b3A6IC0zcHg7XHJcbn1cclxuXHJcbi5tb2JpbGUtYWxpZ25tZW50LXVpZml4LW90cCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICAubGFiZWxfbW9iaWxlX3JlcyB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IE51bml0by1SZWd1bGFyO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IC0zcHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzMnB4O1xyXG4gICAgICAgIC8qIG1hcmdpbi1ib3R0b206IDEycHg7ICovXHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHRvcDogLTIwcHg7XHJcbiAgICAgICAgY29sb3I6ICM2NDY0NjQ7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgLnJlY3RhbmdsZS0zIHtcclxuICAgICAgICAvKndpZHRoOiA4MDBweDtcclxuICAgICAgaGVpZ2h0OiAyNDJweDsqL1xyXG4gICAgICAgIHBhZGRpbmc6IDQwcHggMTBweCAyMHB4IDEwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZjdmMztcclxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMTBweCAwIHJnYmEoMjQzLCAxMTIsIDMzLCAwLjMpO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICB9XHJcbiAgICAuYnV0dG9uX3N0eWxlX21vYmlsZTEyIHtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjIlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAjc2VhcmNoLWJveCB7XHJcbiAgICAgICAgd2lkdGg6IDI3MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLnNlYXJjaC1yZXN1bHQgbGkge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgZ3JheTtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBncmF5O1xyXG4gICAgICAgIHdpZHRoOiAyNzVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIC8qIGhlaWdodDogMTZweDsgKi9cclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIH1cclxuICAgIC5tYXJnaW4tcGFkLTAge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgIH1cclxuICAgIC5hY2NvdW50LW1haW4tZGl2IHtcclxuICAgICAgICBwb3NpdGlvbjogc3RhdGljICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuYWNjb3VudFN1bW1hcnlEZXRhaWxzLWNzdG0ge1xyXG4gICAgICAgIHdpZHRoOiA5NyU7XHJcbiAgICAgICAgLyptYXJnaW46IDAgYXV0bzsqL1xyXG4gICAgfVxyXG4gICAgLmRpc2FibGVkQnRuIHtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGdyZXk7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICAgICAgICBwYWRkaW5nOiA4cHggNDZweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmRldGFpbHMge1xyXG4gICAgICAgIHRvcDogNjdweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLnVwbG9hZENvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG5cclxuICAgIH1cclxuICAgIC5kYnRfbmV3X3BvcHVwe1xyXG4gICAgICAgIHdpZHRoOiA2MCUgIWltcG9ydGFudDtcclxuICAgICAgICBoZWlnaHQ6IDc4JSAhaW1wb3J0YW50O1xyXG4gICAgICAgIC8qIG1hcmdpbi10b3A6IDYzcHggIWltcG9ydGFudDtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjY1cHggIWltcG9ydGFudDsgKi9cclxuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDM0cHggIWltcG9ydGFudDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuaGVhZGVyIHtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgIH1cclxuICAgIC51cGxvYWRPdmVybGF5IC51cGxvYWRDb250YWluZXIgLmJvZHkge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTZweDtcclxuICAgIH1cclxuICAgIC5jYW5jZWxfYnRuIHtcclxuICAgICAgICBwYWRkaW5nOiA4cHggMzdweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmFjdGl2ZUJ0biB7XHJcbiAgICAgICAgcGFkZGluZzogOHB4IDQ2cHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5yYWRpby1hbGlnbi1tZWRpYSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC00cHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIH1cclxuICAgIC5tYXJnaW4tcGFkLTAge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuc2VsZWN0X2JveCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAucGFkLXJpZ2h0IHtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLmZhdGNhX2RidCB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMnB4O1xyXG4gICAgfVxyXG4gICAgLnVwbG9hZE92ZXJsYXkgLnVwbG9hZENvbnRhaW5lciAuaGVhZGVyIHtcclxuICAgICAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5tYWluLWRpdi1hY2NvdW50IHtcclxuICAgICAgICB0b3A6IDAgIWltcG9ydGFudDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5tYWluQ29udGVudC5yb3cubWFpbkNvbnRlbnQtYWNudC1jc3RtLm1hcmdpbi1wYWQtMCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLnVwbG9hZENvbnRhaW5lciB7XHJcbiAgICAgICAgaGVpZ2h0OiA4MyUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5zZWxlY3RfYm94IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgfVxyXG4gICAgLmFjdGl2ZUJ0biB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAucGFkLW1vYmlsZSB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICB9XHJcbiAgICAuYnV0dG9uX2FsaWduZWRfbW9iaWxlIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAubGFiZWwtc3R5bGluZy10aXRsZS1hY2NvdW50e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDt9XHJcblxyXG4gICAgfVxyXG4vKk1lZGlhIHF1ZXJ5IHN0YXJ0cyBoZXJlKi9cclxuXHJcbi5mb250X2ZhbSB7XHJcbiAgICBmb250LWZhbWlseTogTnVuaXRvLVJlZ3VsYXI7XHJcbn1cclxuXHJcbi5sYWJlbC1zdHlsaW5nLXRpdGxlLWFjY291bnQge1xyXG4gICAgZm9udC1mYW1pbHk6IE51bml0by1SZWd1bGFyO1xyXG4gICAgbWluLWhlaWdodDogMjBweDtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiAjNjQ2NDY0O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5hY3RpdmVCdG4ge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxufVxyXG4ubm90ZUFjY291bnRTdW1tYXJ5e1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgY29sb3I6ICNiNGI0YjQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMTJweDtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuQC1tb3ota2V5ZnJhbWVzIGJsaW5rIHtcclxuICAgIDAlIHtcclxuICAgICAgICBvcGFjaXR5OjE7XHJcbiAgICB9XHJcbiAgICA1MCUge1xyXG4gICAgICAgIG9wYWNpdHk6MC4zO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgb3BhY2l0eToxO1xyXG4gICAgfVxyXG59IFxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGJsaW5rIHtcclxuICAgIDAlIHtcclxuICAgICAgICBvcGFjaXR5OjE7XHJcbiAgICB9XHJcbiAgICA1MCUge1xyXG4gICAgICAgIG9wYWNpdHk6MC4zO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgb3BhY2l0eToxO1xyXG4gICAgfVxyXG59XHJcbi8qIElFICovXHJcbkAtbXMta2V5ZnJhbWVzIGJsaW5rIHtcclxuICAgIDAlIHtcclxuICAgICAgICBvcGFjaXR5OjE7XHJcbiAgICB9XHJcbiAgICA1MCUge1xyXG4gICAgICAgIG9wYWNpdHk6MC4zO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgb3BhY2l0eToxO1xyXG4gICAgfVxyXG59IFxyXG4vKiBPcGVyYSBhbmQgcHJvYiBjc3MzIGZpbmFsIGl0ZXJhdGlvbiAqL1xyXG5Aa2V5ZnJhbWVzIGJsaW5rIHtcclxuICAgIDAlIHtcclxuICAgICAgICBvcGFjaXR5OjE7XHJcbiAgICB9XHJcbiAgICA1MCUge1xyXG4gICAgICAgIG9wYWNpdHk6MC4zO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgb3BhY2l0eToxO1xyXG4gICAgfVxyXG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/mobile/mobile.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/mobile/mobile.component.ts ***!
          \********************************************/
        /*! exports provided: MobileComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileComponent", function () { return MobileComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _shared_loader_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/loader/loader.service */ "./src/app/shared/loader/loader.service.ts");
            /* harmony import */ var _mobile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mobile.service */ "./src/app/mobile/mobile.service.ts");
            /* harmony import */ var _shared_dialogue_dialogue_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/dialogue/dialogue.service */ "./src/app/shared/dialogue/dialogue.service.ts");
            /* harmony import */ var rxjs_add_operator_take__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/operator/take */ "./node_modules/rxjs-compat/_esm2015/add/operator/take.js");
            /* harmony import */ var rxjs_add_observable_timer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/add/observable/timer */ "./node_modules/rxjs-compat/_esm2015/add/observable/timer.js");
            /* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
            /* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm2015/Observable.js");
            /* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm2015/Subject.js");
            /* harmony import */ var _shared_screen_sequence_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/screen-sequence.module */ "./src/app/shared/screen-sequence.module.ts");
            /* harmony import */ var _shared_loginId_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/loginId.service */ "./src/app/shared/loginId.service.ts");
            /* harmony import */ var _shared_activate_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shared/activate.module */ "./src/app/shared/activate.module.ts");
            /* harmony import */ var _shared_screen_name__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../shared/screen.name */ "./src/app/shared/screen.name.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
            //import { PlatwareService } from '../shared/platware-client/platware.service';
            /////////////////akansha deci///////////////////
            //import { of } from 'rxjs/observable/of';
            var MobileComponent = /** @class */ (function () {
                //heroes$: Observable<any[]>;
                function MobileComponent(loaderservice, fb, _authService, appservice, 
                //private platware: PlatwareService,
                _service, appLoader, _router, 
                //private router: Router,
                route, _mobileService, dialogueservice, screenService, Leadservice, guardService, nameService) {
                    // window.onbeforeunload = function(e) {
                    //   alert('')
                    // };
                    //////////////////////akansha deci///////////////
                    // this._service.fetchMessageMaster();
                    this.loaderservice = loaderservice;
                    this.fb = fb;
                    this._authService = _authService;
                    this.appservice = appservice;
                    this._service = _service;
                    this.appLoader = appLoader;
                    this._router = _router;
                    this.route = route;
                    this._mobileService = _mobileService;
                    this.dialogueservice = dialogueservice;
                    this.screenService = screenService;
                    this.Leadservice = Leadservice;
                    this.guardService = guardService;
                    this.nameService = nameService;
                    this.otp_loader = false;
                    this.otp_show = false;
                    this.count_down = false;
                    this.dbt_show = false;
                    this.valid_number = false;
                    this.isReadOnly = false;
                    this.request_Id = '';
                    this.counter = 60;
                    this.resend_display = false;
                    this.dbt_popup_display = false;
                    this.dbt_radio2_display = false;
                    this.dbt_radio3_display = false;
                    this.AOF_Congrulations = true;
                    this.previous_bank_iin = false;
                    this.smartphone = [];
                    this.postdata = {
                        mobileNo: null
                    };
                    //postdata: Models;
                    this.searchList_hide = true;
                    this.searchTerms = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_11__["Subject"]();
                    this.checkBtn = function () {
                        this.myForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormGroup"]({
                            mobile_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_16__["Validators"].required),
                            mobile_otp: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_16__["Validators"].required),
                        });
                    };
                    // this._service.fetchInstallationId().subscribe(res => {
                    //   this._service.setInstallationId(res[0]['installation_id']);
                    //   // console.log(res);
                    // })
                    // sessionStorage.setItem('labelVisible', null)
                    // this.appLoader.hideLoader();
                    // let message = this.route.snapshot.data['configData'];
                    // // if (message !== "autoSync") {
                    // //   const get_messageMaster = JSON.parse(message[0]['data'][0]["data_object"]);
                    // //   this._service.setMessageMaster(get_messageMaster);
                    // //   this._service.storeMessageMaster(message);
                    // // }
                    // this._service.setMessageMaster(message);
                    // this._service.storeMessageMaster(message);
                    //this.guardService.STEPS["SSN"] = false;
                }
                MobileComponent.prototype.ngOnDestroy = function () {
                    // this.subscription.unsubscribe();
                    // this.subscript.unsubscribe();
                    //  throw new Error("Method not implemented.");
                };
                MobileComponent.prototype.ngOnInit = function () {
                    // DBT Show starts here
                    // this._service.setDBTshow("");
                    // // DBT Show Ends here
                    this.myForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormGroup"]({
                        mobile_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_16__["Validators"].required),
                        mobile_otp: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_16__["Validators"].required),
                    });
                    // this.nameService.setName('Mobile Verification');
                    // this.mobile_required_msg = this._service.getMessageMaster('000001121');
                    // this.mobile_valid_msg = this._service.getMessageMaster('AP00001');
                    // this.otp_required_msg = this._service.getMessageMaster('000001131');
                    // this.mobile_loader_msg = this._service.getMessageMaster('LDR-002');
                    // this.resendOtp_loader_msg = this._service.getMessageMaster('00000116');
                    // this.mobile_bottom_msg = this._service.getMessageMaster('000001122');
                    // this.otp_starting_msg = this._service.getMessageMaster('000001132');
                    // this.otp_after_resend = this._service.getMessageMaster('000001133');
                    // this.otp_resend_msg = this._service.getMessageMaster('000001134');
                    // this.otp_verifyOtp = this._service.getMessageMaster('00000115');
                    // this.startOver = this._service.getMessageMaster('1022');
                    // this.showloader = this.appservice.getMessageMaster('0032');
                    // this.notDbtBenefits = this.appservice.getMessageMaster('DBT_RB_010');
                    // this.setFormFields();
                    // this.getActors()
                };
                MobileComponent.prototype.getOtp = function (event) {
                    var _this = this;
                    //his.postdata= new  Model();
                    this.valid_number = false;
                    this.otp_show = false;
                    if (event.value.length === 10) {
                        // verify the valid mobile number///
                        var pattern = /^[6789]\d{9}$/;
                        if (!pattern.test(event.value)) {
                            this.valid_number = true;
                            return true;
                        }
                        this.postdata.mobileNo = event.value;
                        this._authService
                            .validateExistingUser(this.postdata)
                            .subscribe(function (resp) {
                            //return this.spresp.push(resp);
                            if (resp && resp.otp && resp.token) {
                                _this.otp_show = true;
                                _this.verify_otp = resp.otp;
                                _this.countDown = rxjs_Observable__WEBPACK_IMPORTED_MODULE_10__["Observable"].timer(0, 1000)
                                    .take(_this.counter)
                                    .map(function () {
                                    if (_this.counter === 1) {
                                        _this.otp_bottom_msg = _this.otp_resend_msg;
                                        _this.resend_display = true;
                                        // console.log("hello");
                                    }
                                    return --_this.counter;
                                });
                                console.log(resp);
                            }
                        });
                    }
                };
                MobileComponent.prototype.getActors = function () {
                    this._mobileService.getActors()
                        .subscribe(function (data) {
                        console.log(data);
                    });
                };
                //////////////////////Akansha deci//////////////////////////
                //   getErrorMessages() {
                //     this.Seeding_DBT_RB_001 = this._service.getMessageMaster('DBT_RB_001');
                //     this.Seeding_DBT_RB_002 = this._service.getMessageMaster('DBT_RB_002');
                //     this.Seeding_DBT_RB_003 = this._service.getMessageMaster('DBT_RB_003');
                //     this.Seeding_DBT_RB_004 = this._service.getMessageMaster('DBT_RB_004');
                //     this.Seeding_DBT_RB_005 = this._service.getMessageMaster('DBT_RB_005');
                //     this.Seeding_DBT_Declaration = this._service.getMessageMaster('DBT_Declaration');
                //     this.Seeding_DBT_RB_ERROR = this._service.getMessageMaster('DBT_RB_ERROR');
                //     /* this.showloader = this.appservice.getMessageMaster('0032');
                //      this.CIFexist = this.appservice.getMessageMaster('00000122');
                //      this.CIFnotexist = this.appservice.getMessageMaster('0030');
                //      this.NoteAccountDetails = this.appservice.getMessageMaster('ADT00006');*/
                //     // this.congratulationsMsgObj.loading = this.appservice.getMessageMaster('00000124');
                //     // this.congratulationsMsgObj.noCardSelected = this.appservice.getMessageMaster('00000130 ');
                //   }
                MobileComponent.prototype.validateOtp = function (event) {
                    // console.log(this.verify_otp);
                    if (event.value.length === 6) {
                        // const REQ_DATA = [
                        //   {
                        //     processName: "SPTBVRFOTP",
                        //     data: [
                        //       {
                        //         "X_BE_REQUEST_ID": this.request_Id,
                        //         "X_OTP_TEXT": event.value,
                        //         "X_OTP_HASH": event.value
                        //       }
                        //     ]
                        //   }
                        // ];
                        // this.appLoader.showLoader(this.otp_verifyOtp);
                        // this._mobileService.validateMobileOtp(REQ_DATA).subscribe(res => {
                        //   this.appLoader.hideLoader();
                        //   try {
                        //     let response = res[0];
                        //     let response_msg = JSON.parse(res[0]['response_message']);
                        //     if (response['response_type'].toUpperCase() === 'E') {
                        //       dataLayer.push({
                        //         'url': '/vpv/sa-abhi/userregistration/mobileotp/error',
                        //         'event': 'SA_MobileOTPError'
                        //       })
                        //       let message = this._service.getMessageMaster('' + response['response_code'] + '');
                        //       if (!message) {
                        //         message = response_msg['RESPONSE_MESSAGE'] || "Message Key Not Found..!!!";
                        //       }
                        //       this.dialogueservice.alertBox({
                        //         title: 'Error',
                        //         message: message,
                        //         messageType: 'error',
                        //         actionlabel: ['Close']
                        //       }).take(1).subscribe((res) => {
                        //         // console.log(res);
                        //       })
                        //     }
                        //     else {
                        //       let master_data = JSON.parse(response['json_object']);
                        //       // console.log(master_data);
                        //       this._service.setMasterData(master_data);
                        //       this._service.storeMasterData(master_data);
                        //       this.masterData = this._service.getMasterData();
                        //       this.dbt_benef = this.masterData.AOF.DATA.ACCOUNT_DTL.SSN_SEEDING.DBT_BENEFITS;
                        //       this.AOF_DISPOSITION = this.masterData.AOF.DATA.AOF_DISPOSITION;
                        //       this.getErrorMessages();
                        //       if (this.AOF_DISPOSITION === "AAMSBM") {
                        //         this.AOF_Congrulations = false;
                        //       }
                        //       else {
                        //         this.AOF_Congrulations = true;
                        //         this.dbt_show = true;
                        //       }
                        //       this.count_down = true;
                        //       this.isReadOnly = true;
                        //       let sequence = master_data['AOF']['DATA']['CURRENT_SCREEN_DTLS']['PORTAL_SCREEN_ID'];
                        //       // Screen Starts here  
                        //       if (sequence == "4" || sequence == "5") {
                        //       }
                        //       else {
                        //         let screen = "/" + this.screenService.STEPS[sequence];
                        //         // console.log(screen);
                        //         if (sequence == "2") {
                        //           this._service.setDbt(true);
                        //         }
                        //         else {
                        //           this._service.setDbt(true);
                        //           this.guardService.STEPS[this.screenService.STEPS[sequence]] = true;
                        //           this._router.navigate([screen]);
                        //         }
                        //         // this.guardService.STEPS['biometricKYC'] = true;
                        //         // this._router.navigate(['/biometricKYC']);
                        //       }
                        //     }
                        //   }
                        //   catch (error) {
                        //     this.appLoader.hideLoader();
                        //     this.dialogueservice.alertBox({
                        //       title: 'Error',
                        //       message: this._service.getCatchmsg(),
                        //       messageType: 'error',
                        //       actionlabel: ['Close']
                        //     }).take(1).subscribe((res) => {
                        //       this.router.navigate(['/mobile']);
                        //     });
                        //   }
                        // });
                    }
                };
                //   //////////////////////////akansha deci///////////////////////
                //   getMasterBranches() {
                //     const REQ_DATA = [
                //       {
                //         processName: "GETMASTERDATA",
                //         data: [
                //           {
                //             "X_TYPE": "BANK_NAME",
                //             "X_VERSION": "0"
                //           }
                //         ]
                //       }
                //     ];
                //     //this.appLoader.showLoader("");
                //     // Aditya starts here
                //     this.DBTcheck = this._service.fetcsetDBTshow();
                //     // Aditya Ends here
                //     this.platware.callPlatware(REQ_DATA).subscribe(res => {
                //       //  this.loaderservice.hideLoader();
                //       try {
                //         const response_type = JSON.parse(res[0]['data'][0].data_object);
                //         this.bank_dropdown = response_type;
                //         //  this.bank_dropdown.length = 10;
                //         this.searchList();
                //         ////for later code edit//////////////////////////////
                //         // this.getBranches();
                //         // console.log(this.bank_dropdown);
                //         //// console.log(JSON.parse(users[0]['data_object']));
                //         //// console.log(this.selectedValue);
                //       }
                //       catch (error) {
                //         this.appLoader.hideLoader();
                //         this.dialogueservice.alertBox({
                //           title: 'Error',
                //           message: this._service.getCatchmsg(),
                //           messageType: 'error',
                //           actionlabel: ['Close']
                //         }).take(1).subscribe((res) => {
                //           this.router.navigate(['/mobile']);
                //         })
                //       }
                //     })
                //   }
                //   search(term: string): void {
                //     this.searchList_hide = true;
                //     this.iin_selected = "";
                //     this.previous_bank_iin = true;
                //     this.searchTerms.next(term);
                //   }
                //   searchList() {
                //     this.heroes$ = this.searchTerms.pipe(
                //       // wait 300ms after each keystroke before considering the term
                //       debounceTime(10),
                //       // ignore new term if same as previous term
                //       distinctUntilChanged(),
                //       // switch to new search observable each time the term changes
                //       switchMap((term: string) => this.getHeroes(term)),
                //     );
                //   }
                //   getHeroes(term: string): Observable<string[]> {
                //     //  return of(this.country);
                //     if (!term) {
                //       return of([]);
                //     }
                //     return of(this.bank_dropdown.filter(it => {
                //       return it['BANK_NAME'].toLowerCase().includes(term.toLowerCase());
                //     }));
                //   }
                //   selectedbank_option1(value) {
                //     this.DBTForm.controls['radio2_bankName'].setValue(value.BANK_NAME);
                //     this.searchList_hide = false;
                //     this.onChange(value.BANK_NAME);
                //     // console.log(value);
                //   }
                //   selectedbank(value) {
                //     this.DBTForm.controls['radio3_bankName'].setValue(value.BANK_NAME);
                //     this.searchList_hide = false;
                //     this.onChange(value.BANK_NAME);
                //     // console.log(value);
                //   }
                MobileComponent.prototype.setFormFields = function () {
                    var _this = this;
                    /*  this.myForm = this.fb.group({
                        dbtRequirement: ['', Validators.required]
                      });
                  
                  
                      this.DBTForm = this.fb.group({
                        dbtRequirement_Tab: ['', Validators.required],
                        fatca: [true, Validators.requiredTrue]
                      })*/
                    /* this.myForm1 = new FormGroup({
                       dbtRequirement: new FormControl('', Validators.required)
                     });*/
                    this.DBTForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormGroup"]({
                        dbtRequirement_Tab: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_16__["Validators"].required),
                        fatca: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormControl"](true, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["Validators"].requiredTrue)
                    });
                    // this.accountSummaryDetails.controls['cardRequirement'].valueChanges.subscribe(
                    //   (selectedValue) => {
                    //     // console.log(selectedValue);
                    //     if (selectedValue === "true") {
                    //       this.cardRequireYes = true;
                    //     }
                    //     else {
                    //       this.cardRequireYes = false;
                    //     }
                    //     // // console.log(this.nomineeDetailsForm.get('nominee_address_option').value);     
                    //   }
                    // )
                    // Aditya starts here for DBT HIDE
                    if (this.DBTcheck) {
                        document.getElementById("DBTshow").style.display = "none";
                    }
                    else {
                        this.myForm.controls['dbtRequirement'].valueChanges.subscribe(function (selectedValue) {
                            // console.log(selectedValue);
                            if (selectedValue === "true") {
                                _this.dbt_popup_display = true;
                            }
                            else if (selectedValue === "false" || selectedValue === null) {
                                _this.dbt_popup_display = false;
                            }
                            _this.dbt_choice = _this.masterData['AOF']['DATA']['ACCOUNT_DTL']['SSN_SEEDING']['NPCI_MAPPING_SEED'];
                            if (selectedValue === 'YES' || selectedValue === "true") {
                                if (_this.dbt_choice == 'YES') {
                                    _this.dbt_Choice_var = true;
                                    _this.dbt_other_choice = false;
                                    _this.dbt_radio2_display = false;
                                    _this.dbt_popup_display = true;
                                    // dataLayer.push({
                                    //   'url': '/vpv/sa/dbtpopupnext',
                                    //   'event': 'SA_DBT_OTP_PopupNext'
                                    //   })
                                    _this.DBTForm.removeControl('radio2_bankName');
                                    _this.DBTForm.removeControl('radio2_IIN');
                                }
                                else if (_this.dbt_choice == 'NO') {
                                    _this.bankName_selected = _this.masterData['AOF']['DATA']['ACCOUNT_DTL']['SSN_SEEDING']['NPCI_MAPPING_CHANGE']['BANK_NAME'];
                                    _this.bank_iin_number_selected = _this.masterData['AOF']['DATA']['ACCOUNT_DTL']['SSN_SEEDING']['NPCI_MAPPING_CHANGE']['IIN'];
                                    _this.dbt_Choice_var = false;
                                    _this.dbt_other_choice = true;
                                    _this.dbt_radio2_display = true;
                                    _this.dbt_popup_display = true;
                                    // dataLayer.push({
                                    //   'url': '/vpv/sa/dbtpopupnext',
                                    //   'event': 'SA_DBT_OTP_PopupNext'
                                    //   })
                                    _this.previous_bank_iin = false;
                                    _this.iin_selected = _this.bank_iin_number_selected;
                                    _this.DBTForm.addControl('radio2_bankName', new _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_16__["Validators"].required));
                                    _this.DBTForm.addControl('radio2_IIN', new _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormControl"](''));
                                }
                                else if (_this.dbt_choice == '') {
                                    _this.dbt_Choice_var = false;
                                    _this.dbt_other_choice = false;
                                }
                            }
                        });
                        this.DBTForm.controls['dbtRequirement_Tab'].valueChanges.subscribe(function (selectedValue) {
                            /*  this.dbt_choice = this.masterData['AOF']['DATA']['ACCOUNT_DTL']['SSN_SEEDING']['NPCI_MAPPING_SEED'];
                              if(this.dbt_choice == 'YES'){
                                this.dbt_Choice_var = true;
                                this.dbt_other_choice=false;
                                selectedValue!='radio2';
                                selectedValue!='radio3';
                              }else{
                                this.dbt_Choice_var = false;
                                this.dbt_other_choice = true;
                                selectedValue="radio2";
                              }*/
                            if (selectedValue === "radio2") {
                                _this.dbt_radio2_display = true;
                                _this.dbt_radio3_display = false;
                                _this.iin_selected = "";
                                _this.DBTForm.addControl('radio2_bankName', new _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_16__["Validators"].required));
                                _this.DBTForm.addControl('radio2_IIN', new _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormControl"](''));
                                _this.DBTForm.removeControl('radio3_bankName');
                                _this.DBTForm.removeControl('radio3_IIN');
                            }
                            else if (selectedValue === "radio3") {
                                _this.iin_selected = "";
                                _this.dbt_radio3_display = true;
                                _this.dbt_radio2_display = false;
                                _this.DBTForm.addControl('radio3_bankName', new _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_16__["Validators"].required));
                                _this.DBTForm.addControl('radio3_IIN', new _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormControl"](''));
                                _this.DBTForm.removeControl('radio2_bankName');
                                _this.DBTForm.removeControl('radio2_IIN');
                            }
                            else if (selectedValue === "radio1") {
                                _this.dbt_radio2_display = false;
                                _this.dbt_radio3_display = false;
                                _this.DBTForm.removeControl('radio2_bankName');
                                _this.DBTForm.removeControl('radio2_IIN');
                                _this.DBTForm.removeControl('radio3_bankName');
                                _this.DBTForm.removeControl('radio3_IIN');
                            }
                        });
                    }
                    // Aditya Ends here for DBT HIDE
                    //this.getMasterBranches();
                    //
                };
                MobileComponent.prototype.DataSync = function () {
                    var _this = this;
                    this._authService
                        .validateExistingUser(this.postdata)
                        .subscribe(function (resp) {
                        //return this.spresp.push(resp);
                        if (resp) {
                            if (resp.data.biometricDone == true) {
                                _this.appservice.setHasBiometricDone(true);
                            }
                            if (resp.data.accountDetails && resp.data.accountDetails.accountNumber) {
                                console.log("Account Already Present!!!!!!!!!!!!!!");
                                _this.dialogueservice.confirmBox({
                                    title: 'Account Already Exists ',
                                    message: "Please provide another number to create a new account ",
                                    messageType: 'error',
                                    actionlabel: ['Close']
                                }).take(1).subscribe(function (res) {
                                    console.log(res);
                                    _this.appservice.setSsnData(resp.data);
                                    _this.appservice.setHasAccount(true);
                                    _this._router.navigate(['accountSummary']);
                                });
                            }
                            else {
                                _this._router.navigate(['SSN']);
                            }
                        }
                        else {
                            console.log("The user doesn't have any SSN");
                            _this.dialogueservice.confirmBox({
                                title: 'SSN not found',
                                message: "Cannot create account, as the user doesn't have SSN ",
                                messageType: 'error',
                                actionlabel: ['Close']
                            }).take(1).subscribe(function (res) {
                                console.log(res);
                            });
                        }
                    });
                    //     const masterdata_Sync = this.appservice.getMasterData();
                    //     //masterdata_Sync['AOF']['DATA']['CURRENT_SCREEN_DTLS']['PORTAL_SCREEN_ID'] = '7';
                    //     //masterdata_Sync['AOF']['DATA']['AOF_DISPOSITION'] = "AAMSBM";
                    //     const campaignStoredValues = sessionStorage.getItem('urlParamsCampaign');
                    //     const campaignStoredVal = JSON.parse(campaignStoredValues);
                    //     if (campaignStoredVal != null) {
                    //       masterdata_Sync['AOF']['GTM']['UTM_ADGROUP'] = campaignStoredVal.utm_adgroup || "";
                    //       masterdata_Sync['AOF']['GTM']['UTM_ADPOSITION'] = campaignStoredVal.utm_Adposition || "";
                    //       masterdata_Sync['AOF']['GTM']['UTM_CAMPAIGN'] = campaignStoredVal.utm_campaign || "";
                    //       masterdata_Sync['AOF']['GTM']['UTM_CONTENT'] = campaignStoredVal.utm_content || "";
                    //       masterdata_Sync['AOF']['GTM']['UTM_DEVICE'] = campaignStoredVal.utm_device || "";
                    //       masterdata_Sync['AOF']['GTM']['UTM_LOCATION'] = campaignStoredVal.utm_location || "";
                    //       masterdata_Sync['AOF']['GTM']['UTM_MATCHTYPE'] = campaignStoredVal.utm_matchtype || "";
                    //       masterdata_Sync['AOF']['GTM']['UTM_MEDIUM'] = campaignStoredVal.utm_medium || "";
                    //       masterdata_Sync['AOF']['GTM']['UTM_NETWORK'] = campaignStoredVal.utm_network || "";
                    //       masterdata_Sync['AOF']['GTM']['UTM_PLACEMENT'] = campaignStoredVal.utm_placement || "";
                    //       masterdata_Sync['AOF']['GTM']['UTM_SITELINK'] = campaignStoredVal.utm_Sitelink || "";
                    //       masterdata_Sync['AOF']['GTM']['UTM_SOURCE'] = campaignStoredVal.utm_source || "";
                    //       masterdata_Sync['AOF']['GTM']['UTM_TERM'] = campaignStoredVal.utm_term || "";
                    //     }
                    //     if (this.myForm.value.dbtRequirement === 'false' || this.myForm.value.dbtRequirement === 'NO') {
                    //       masterdata_Sync['AOF']['DATA']['ACCOUNT_DTL']['SSN_SEEDING']['DBT_BENEFITS'] = 'NO';
                    //       this.leadID =  this.masterData.AOF.KEYS.LEAD_ID 
                    //             dataLayer.push({
                    //               'url': '/vpv/sa-abhi/userregistration/mobileotp/next',
                    //               'event': 'SA_MobileOTP',
                    //               'LeadID': this.leadID,
                    //               'DBTValue': 'no'
                    //               })
                    //       key = "true";
                    //      // key = false;
                    //     } else if (this.myForm.value.dbtRequirement === 'true' || this.myForm.value.dbtRequirement === 'YES'){ 
                    //       this.leadID =  this.masterData.AOF.KEYS.LEAD_ID 
                    //       dataLayer.push({
                    //         'url': '/vpv/sa-abhi/userregistration/mobileotp/next',
                    //         'event': 'SA_MobileOTP',
                    //         'LeadID': this.leadID,
                    //         'DBTValue': 'yes'
                    //         })
                    //       masterdata_Sync['AOF']['DATA']['ACCOUNT_DTL']['SSN_SEEDING']['DBT_BENEFITS'] = 'YES';
                    //       if (this.DBTForm.value.dbtRequirement_Tab === 'radio1' || this.DBTForm.value.dbtRequirement_Tab === 'YES') {
                    //         masterdata_Sync['AOF']['DATA']['ACCOUNT_DTL']['SSN_SEEDING']['NPCI_MAPPING_SEED'] = 'YES';
                    //       } else {
                    //         masterdata_Sync['AOF']['DATA']['ACCOUNT_DTL']['SSN_SEEDING']['NPCI_MAPPING_SEED'] = 'NO';
                    //         if (this.DBTForm.value.dbtRequirement_Tab === 'radio2' || this.DBTForm.value.dbtRequirement_Tab === 'NO') {
                    //           masterdata_Sync['AOF']['DATA']['ACCOUNT_DTL']['SSN_SEEDING']['NPCI_MAPPING_CHANGE']['BANK_NAME'] = this.DBTForm.value.radio2_bankName;
                    //           masterdata_Sync['AOF']['DATA']['ACCOUNT_DTL']['SSN_SEEDING']['NPCI_MAPPING_CHANGE']['IIN'] = this.iin_selected;
                    //         } else {
                    //           masterdata_Sync['AOF']['DATA']['ACCOUNT_DTL']['SSN_SEEDING']['NPCI_MAPPING_NOT_CHANGE']['BANK_NAME'] = this.DBTForm.value.radio3_bankName;
                    //           masterdata_Sync['AOF']['DATA']['ACCOUNT_DTL']['SSN_SEEDING']['NPCI_MAPPING_NOT_CHANGE']['IIN'] = this.iin_selected;
                    //         }
                    //       }
                    //     }
                    //     let sequence = masterdata_Sync['AOF']['DATA']['CURRENT_SCREEN_DTLS']['PORTAL_SCREEN_ID'];
                    //     if (sequence == "4" || sequence == "5") {
                    //       this.dialogueservice.confirmBox({
                    //         title: 'Welcome Back',
                    //         message: this.startOver,
                    //         messageType: 'Confirm',
                    //         actionlabel: ['Continue', 'Start Over']
                    //       }).take(1).subscribe((res) => {
                    //         if (res === false) {
                    //           let screen = "/" + this.screenService.STEPS[sequence];
                    //           // console.log(screen);
                    //           this.guardService.STEPS[this.screenService.STEPS[sequence]] = true;
                    //           this._router.navigate([screen]);
                    //         } else if (res === true) {
                    //           this.guardService.STEPS['SSN'] = true;
                    //           this.router.navigate(['/SSN']);
                    //         } else {
                    //           this.router.navigate(['/mobile']);
                    //         }
                    //         // this.router.navigate(['/mobile']);
                    //       });
                    //     }
                    //     const reqObj = [{
                    //       processName: 'SPTBINSERTAOFCUSTOBJ',
                    //       data: [{
                    //         'X_OBJECT_DATA': JSON.stringify(masterdata_Sync),
                    //         'X_DEVICE_MODIFY_TIMESTAMP': '',
                    //         'X_DEVICE_CREATE_TIMESTAMP': '',
                    //         'X_OBJECT_KEY': '',
                    //         'X_OBJECT_VERSION': ''
                    //       }]
                    //     }];
                    //     this.appLoader.showLoader(this.showloader);
                    //     this.platware.callPlatware(reqObj).subscribe(res => {
                    //       try {
                    //         this.appLoader.hideLoader();
                    //         const response_code = res[0]['data'][0].response_code;
                    //         const response_type = res[0]['data'][0].response_type;
                    //         // const response_message = JSON.parse(res[0].response_message);
                    //         // const displayMsg = this.appservice.getMessageMaster(response_code, response_message);
                    //         // this.appservice.setMasterData(masterData_sync);
                    //         if (response_type === 'I') {
                    //           this.appservice.setMasterData(masterdata_Sync);
                    //           this.appservice.storeMasterData(masterdata_Sync);
                    //           let sequence = masterdata_Sync['AOF']['DATA']['CURRENT_SCREEN_DTLS']['PORTAL_SCREEN_ID'];
                    //           if (!key) {
                    //             if (sequence == "4" || sequence == "5") {
                    //               this.guardService.STEPS['mobile'] = true;
                    //               this.router.navigate(['/mobile']);
                    //             } else {
                    //               this.guardService.STEPS['SSN'] = true;
                    //               this.router.navigate(['/SSN']);
                    //             }
                    //           } else {
                    //             this.dialogueservice.alertBox({
                    //               title: 'Error',
                    //               message: this.notDbtBenefits, /*Get it from Prameet maan - Message master*/
                    //               messageType: 'error',
                    //               actionlabel: ['Close']
                    //             }).take(1).subscribe((res) => {
                    //               this.router.navigate(['/Welcome']);
                    //             });
                    //           }
                    //         } else if (response_type === 'E') {
                    //           let message = this.appservice.getMessageMaster('' + response_code + '');
                    //           if (!message) {
                    //             message = "Message Key Not Found..!!!";
                    //           }
                    //           this.dialogueservice.alertBox({
                    //             title: 'Error',
                    //             message: message,
                    //             messageType: 'error',
                    //             actionlabel: ['Close']
                    //           }).take(1).subscribe((res) => {
                    //             // console.log(res);
                    //           });
                    //         }
                    //       } catch (error) {
                    //         this.appLoader.hideLoader();
                    //         this.dialogueservice.alertBox({
                    //           title: 'Error',
                    //           message: this.appservice.getCatchmsg(),
                    //           messageType: 'error',
                    //           actionlabel: ['Close']
                    //         }).take(1).subscribe((res) => {
                    //           this.router.navigate(['/mobile']);
                    //         });
                    //       }
                    //     });
                    //   }
                    //   onChange(Value) {
                    //     const arr = this.bank_dropdown.filter(x => x.BANK_NAME === Value);
                    //     // console.log(arr);
                    //     this.iin_selected = arr[0]['IIN'] || '';
                    //   }
                    //   NextDBT() {
                    //     this.dbt_popup_display = false;
                    //     this.dbt_radio2_display = false;
                    //     dataLayer.push({
                    //       'url': '/vpv/sa-abhi/userregistration/dbtpopup/next',
                    //       'event': 'SA_DBT_OTP_PopupNext'
                    //       })
                    //     // console.log(this.DBTForm.value);
                    //     // console.log(this.accountSummaryDetails.value);
                };
                MobileComponent.prototype.DBTCancel = function () {
                    this.dbt_popup_display = false;
                    this.dbt_radio2_display = false;
                    // this.DBTForm.reset();
                    this.DBTForm.controls['radio2_bankName'].reset();
                    this.bank_iin_number_selected = '';
                    this.iin_selected = this.bank_iin_number_selected;
                    this.myForm.controls['dbtRequirement'].reset();
                    // document.getElementById("checked").checked=true;
                    this.myForm.controls['dbtRequirement'].setValue('false');
                    this.myForm.controls['dbtRequirement'].updateValueAndValidity();
                };
                return MobileComponent;
            }());
            MobileComponent.ctorParameters = function () { return [
                { type: _shared_loader_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] },
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormBuilder"] },
                { type: _auth_service__WEBPACK_IMPORTED_MODULE_17__["AuthService"] },
                { type: _app_service__WEBPACK_IMPORTED_MODULE_2__["appService"] },
                { type: _app_service__WEBPACK_IMPORTED_MODULE_2__["appService"] },
                { type: _shared_loader_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
                { type: _mobile_service__WEBPACK_IMPORTED_MODULE_5__["mobileService"] },
                { type: _shared_dialogue_dialogue_service__WEBPACK_IMPORTED_MODULE_6__["DialogueService"] },
                { type: _shared_screen_sequence_module__WEBPACK_IMPORTED_MODULE_12__["screenSequenceService"] },
                { type: _shared_loginId_service__WEBPACK_IMPORTED_MODULE_13__["CommonLoginService"] },
                { type: _shared_activate_module__WEBPACK_IMPORTED_MODULE_14__["WorkflowService"] },
                { type: _shared_screen_name__WEBPACK_IMPORTED_MODULE_15__["NameService"] }
            ]; };
            MobileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-mobile',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mobile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/mobile/mobile.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mobile.component.css */ "./src/app/mobile/mobile.component.css")).default]
                })
            ], MobileComponent);
            /***/ 
        }),
        /***/ "./src/app/mobile/mobile.service.ts": 
        /*!******************************************!*\
          !*** ./src/app/mobile/mobile.service.ts ***!
          \******************************************/
        /*! exports provided: mobileService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mobileService", function () { return mobileService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
            //import { PlatwareService } from "../shared/platware-client/platware.service";
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Content-Type': 'application/xml',
                    'Authorization': 'jwt-token'
                })
            };
            var mobileService = /** @class */ (function () {
                // private accountCreationSucc = "api/movie/success";
                function mobileService(http) {
                    this.http = http;
                    this.gameUrl = "api/actor/all";
                    this.localUrl = "api/actor/mobile";
                    this.ssnUrl = "api/movie/ssnValidate";
                    this.customerSuccUrl = "api/movie/userRegistrationSucc";
                    this.paymentSuccURL = "api/movie/paymentSuccessful";
                    this.checkExistingUserUrl = "api/movie/checkExistingUser";
                }
                mobileService.prototype.getActors = function () {
                    return this.http.get(this.gameUrl);
                };
                mobileService.prototype.ssnData = function (ssn) {
                    return this.http.post(this.ssnUrl, ssn)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('otp', ssn)));
                };
                mobileService.prototype.PersonalformData = function (data) {
                    return this.http.post(this.customerSuccUrl, data)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('otp', data)));
                };
                mobileService.prototype.validateExistingUser = function (data) {
                    return this.http.post(this.checkExistingUserUrl, data)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('existing user', data)));
                };
                mobileService.prototype.accountcreationComplete = function (data) {
                    return this.http.post(this.customerSuccUrl, data)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('account creation failed', data)));
                };
                mobileService.prototype.depositSuccessful = function (data) {
                    return this.http.post(this.paymentSuccURL, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('Payment Failed', data)));
                };
                mobileService.prototype.otpGenerate = function (mobile) {
                    return this.http.post(this.localUrl, mobile)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('otp', mobile)));
                };
                mobileService.prototype.handleError = function (operation, result) {
                    var _this = this;
                    if (operation === void 0) { operation = 'operation'; }
                    return function (error) {
                        console.error(error);
                        _this.log(operation + " failed: " + error.message);
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
                    };
                };
                mobileService.prototype.log = function (message) {
                    console.log(message);
                };
                mobileService.prototype.fetchOTP = function (data) {
                    return "abcd"; //this._platware.callPlatware(data).map(res => res[0]['data']);
                };
                mobileService.prototype.validateMobileOtp = function (data) {
                    return "abcd"; //this._platware.callPlatware(data).map(res => res[0]['data']);
                };
                return mobileService;
            }());
            mobileService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            mobileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], mobileService);
            /***/ 
        }),
        /***/ "./src/app/nav/nav.component.css": 
        /*!***************************************!*\
          !*** ./src/app/nav/nav.component.css ***!
          \***************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (":host>>>.progress .progress-bar {\r\n    background-color: #671773 !important;\r\n}\r\n\r\n.progress-bar {\r\n    background-color: #ff0000 !important;\r\n}\r\n\r\n.nav-tabs12 {\r\n    position: relative;\r\n    /* width: 100%; */\r\n    margin: 3% auto;\r\n    /* padding: 0; */\r\n    list-style: none;\r\n    margin-bottom: 0;\r\n    box-sizing: border-box\r\n}\r\n\r\n.nav-tabs12:first-child {\r\n    /* margin-left: 12% !important; */\r\n}\r\n\r\n.nav-tabs12 li {\r\n    margin: 2px;\r\n    position: relative;\r\n    height: 25px;\r\n    padding: 0;\r\n    /* padding: 2% 0; */\r\n    display: inline-block;\r\n    text-decoration: none;\r\n    color: #D1D3D4;\r\n    font-size: 12px;\r\n}\r\n\r\n.nav-tabs12>li>div {\r\n    padding: 0;\r\n    padding-bottom: 2px;\r\n    /* border-bottom: 2px solid #D1D3D4; */\r\n    color: #D1D3D4;\r\n}\r\n\r\n.isAcitve {\r\n    color: #671773 !important;\r\n}\r\n\r\n.isAcitve .moduleCardIcon {\r\n    border: solid 2px #671773 !important;\r\n}\r\n\r\n.isDisable {\r\n    color: #b4b4b4 !important;\r\n}\r\n\r\n.moduleCardIcon {\r\n    top: -4px;\r\n    left: 0px;\r\n    /* background: #D1D3D4; */\r\n    border: solid 2px #b4b4b4;\r\n    border-radius: 100%;\r\n    width: 27px;\r\n    height: 27px;\r\n    padding: 4px 8px;\r\n}\r\n\r\n.active {\r\n    /* width: 100%; */\r\n    border-bottom: 2px solid #3879e8 !important;\r\n    /* margin: 2px; */\r\n    /* height: 25px; */\r\n    /* float: left; */\r\n    color: #3879e8 !important;\r\n}\r\n\r\n.text-label {\r\n    font-family: Nunito-Regular;\r\n    font-size: 11px;\r\n    font-weight: 700;\r\n}\r\n\r\nimg {\r\n    width: 29px;\r\n    padding-bottom: 3px;\r\n}\r\n\r\n.refreshbBackBtn {\r\n    background-color: #ffd782;\r\n    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);\r\n    padding: 1% 0;\r\n    font-size: 12px;\r\n}\r\n\r\n.refreshbBackBtn label:nth-child(1) {\r\n    color: #363636;\r\n    font-family: 'Nunito-Regular';\r\n    padding-left: 3%;\r\n}\r\n\r\n.refreshbBackBtn label:nth-child(2) {\r\n    font-family: nunito-semibold;\r\n    text-align: right;\r\n    /* margin-right: 0%; */\r\n    padding-right: 3%;\r\n    margin: 0;\r\n    cursor: pointer;\r\n}\r\n\r\n/*Media query starts here*/\r\n\r\n@media screen and (max-width: 992px) {\r\n    .hidden-sm,.hidden-xs{\r\n        display: none !important;\r\n    }\r\n    .please-txt{\r\n        padding-left: 6% !important;\r\n    }\r\n    .Ok-btn{\r\n        margin: 0 !important; \r\n        float: right;\r\n        padding-right: 8% !important;\r\n        float: right;\r\n    }\r\n\r\n}\r\n\r\n/*Media query starts here*/\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEI7QUFDSjs7QUFFQTtJQUNJLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsc0NBQXNDO0lBQ3RDLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsU0FBUztJQUNULHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLDJDQUEyQztJQUMzQyxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsMENBQTBDO0lBQzFDLGFBQWE7SUFDYixlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztJQUNkLDZCQUE2QjtJQUM3QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsU0FBUztJQUNULGVBQWU7QUFDbkI7O0FBQ0EsMEJBQTBCOztBQUMxQjtJQUNJO1FBQ0ksd0JBQXdCO0lBQzVCO0lBQ0E7UUFDSSwyQkFBMkI7SUFDL0I7SUFDQTtRQUNJLG9CQUFvQjtRQUNwQixZQUFZO1FBQ1osNEJBQTRCO1FBQzVCLFlBQVk7SUFDaEI7O0FBRUo7O0FBQ0EsMEJBQTBCIiwiZmlsZSI6InNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Q+Pj4ucHJvZ3Jlc3MgLnByb2dyZXNzLWJhciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjcxNzczICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wcm9ncmVzcy1iYXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubmF2LXRhYnMxMiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAvKiB3aWR0aDogMTAwJTsgKi9cclxuICAgIG1hcmdpbjogMyUgYXV0bztcclxuICAgIC8qIHBhZGRpbmc6IDA7ICovXHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3hcclxufVxyXG5cclxuLm5hdi10YWJzMTI6Zmlyc3QtY2hpbGQge1xyXG4gICAgLyogbWFyZ2luLWxlZnQ6IDEyJSAhaW1wb3J0YW50OyAqL1xyXG59XHJcblxyXG4ubmF2LXRhYnMxMiBsaSB7XHJcbiAgICBtYXJnaW46IDJweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICAvKiBwYWRkaW5nOiAyJSAwOyAqL1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICNEMUQzRDQ7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5uYXYtdGFiczEyPmxpPmRpdiB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDJweDtcclxuICAgIC8qIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjRDFEM0Q0OyAqL1xyXG4gICAgY29sb3I6ICNEMUQzRDQ7XHJcbn1cclxuXHJcbi5pc0FjaXR2ZSB7XHJcbiAgICBjb2xvcjogIzY3MTc3MyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaXNBY2l0dmUgLm1vZHVsZUNhcmRJY29uIHtcclxuICAgIGJvcmRlcjogc29saWQgMnB4ICM2NzE3NzMgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmlzRGlzYWJsZSB7XHJcbiAgICBjb2xvcjogI2I0YjRiNCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubW9kdWxlQ2FyZEljb24ge1xyXG4gICAgdG9wOiAtNHB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgLyogYmFja2dyb3VuZDogI0QxRDNENDsgKi9cclxuICAgIGJvcmRlcjogc29saWQgMnB4ICNiNGI0YjQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgd2lkdGg6IDI3cHg7XHJcbiAgICBoZWlnaHQ6IDI3cHg7XHJcbiAgICBwYWRkaW5nOiA0cHggOHB4O1xyXG59XHJcblxyXG4uYWN0aXZlIHtcclxuICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMzODc5ZTggIWltcG9ydGFudDtcclxuICAgIC8qIG1hcmdpbjogMnB4OyAqL1xyXG4gICAgLyogaGVpZ2h0OiAyNXB4OyAqL1xyXG4gICAgLyogZmxvYXQ6IGxlZnQ7ICovXHJcbiAgICBjb2xvcjogIzM4NzllOCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGV4dC1sYWJlbCB7XHJcbiAgICBmb250LWZhbWlseTogTnVuaXRvLVJlZ3VsYXI7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG5pbWcge1xyXG4gICAgd2lkdGg6IDI5cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogM3B4O1xyXG59XHJcblxyXG4ucmVmcmVzaGJCYWNrQnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmQ3ODI7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICBwYWRkaW5nOiAxJSAwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4ucmVmcmVzaGJCYWNrQnRuIGxhYmVsOm50aC1jaGlsZCgxKSB7XHJcbiAgICBjb2xvcjogIzM2MzYzNjtcclxuICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvLVJlZ3VsYXInO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzJTtcclxufVxyXG5cclxuLnJlZnJlc2hiQmFja0J0biBsYWJlbDpudGgtY2hpbGQoMikge1xyXG4gICAgZm9udC1mYW1pbHk6IG51bml0by1zZW1pYm9sZDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgLyogbWFyZ2luLXJpZ2h0OiAwJTsgKi9cclxuICAgIHBhZGRpbmctcmlnaHQ6IDMlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi8qTWVkaWEgcXVlcnkgc3RhcnRzIGhlcmUqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgLmhpZGRlbi1zbSwuaGlkZGVuLXhze1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5wbGVhc2UtdHh0e1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNiUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5Pay1idG57XHJcbiAgICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7IFxyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA4JSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgIH1cclxuXHJcbn1cclxuLypNZWRpYSBxdWVyeSBzdGFydHMgaGVyZSovIl19 */");
            /***/ 
        }),
        /***/ "./src/app/nav/nav.component.ts": 
        /*!**************************************!*\
          !*** ./src/app/nav/nav.component.ts ***!
          \**************************************/
        /*! exports provided: NavComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function () { return NavComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _shared_progress_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/progress.service */ "./src/app/shared/progress.service.ts");
            //import { appService } from '../app.service';
            var NavComponent = /** @class */ (function () {
                //user_reg_loaderWidth = 33.33;
                function NavComponent(progressService, 
                // private appservice: appService,
                //private activatedroute: ActivatedRoute,
                route) {
                    var _this = this;
                    this.progressService = progressService;
                    this.route = route;
                    this.navItemList = [];
                    this.showInfo = {
                        refreshLabel: true
                    };
                    this.screen1 = {
                        user_registration_isactive: 'YES',
                        user_registration_iscomplete: false,
                        user_reg_loaderWidth: 25
                    };
                    this.screen2 = {
                        user_registration_isactive: 'NO',
                        user_registration_iscomplete: false,
                        user_reg_loaderWidth: 0
                    };
                    this.screen3 = {
                        user_registration_isactive: 'NO',
                        user_registration_iscomplete: false,
                        user_reg_loaderWidth: 0
                    };
                    this.screen4 = {
                        user_registration_isactive: 'NO',
                        user_registration_iscomplete: false,
                        user_reg_loaderWidth: 0
                    };
                    this.subscription = this.progressService.getLoaderWidth().subscribe(function (value) {
                        // console.log(value);
                        setTimeout(function () {
                            _this.screen1.user_reg_loaderWidth = value.screen1.loading;
                            _this.screen1.user_registration_iscomplete = value.screen1.isComplete;
                            _this.screen2.user_registration_isactive = value.screen2.isActive;
                            _this.screen2.user_reg_loaderWidth = value.screen2.loading;
                            _this.screen2.user_registration_iscomplete = value.screen2.isComplete;
                            _this.screen3.user_registration_isactive = value.screen3.isActive;
                            _this.screen3.user_reg_loaderWidth = value.screen3.loading;
                            _this.screen3.user_registration_iscomplete = value.screen3.isComplete;
                            _this.screen4.user_registration_isactive = value.screen4.isActive;
                            _this.screen4.user_reg_loaderWidth = value.screen4.loading;
                            _this.screen4.user_registration_iscomplete = value.screen4.isComplete;
                        }, 0);
                    });
                    // const items = [
                    //   {
                    //     'name': 'MOBILE',
                    //     'id': '1'
                    //   },
                    //   {
                    //     'name': 'SSN',
                    //     'id': '2'
                    //   },
                    //   {
                    //     'name': 'PERSONAL INFO',
                    //     'id': '3'
                    //   },
                    //   {
                    //     'name': 'PAN',
                    //     'id': '4'
                    //   }
                    // ];
                    // this.navItemList = items;
                    // // console.log(this.activatedroute);
                    // // console.log(this.route.url);
                    // this.currentNavIem = this.route.url.split('/')[0];
                }
                NavComponent.prototype.changeLabelVisibility = function () {
                    this.showInfo.refreshLabel = false;
                    //this.appservice.setLabelVisibility(this.showInfo.refreshLabel);
                };
                NavComponent.prototype.ngOnInit = function () {
                    //this.user_registration_isactive = "YES";
                    // this.user_registration_iscomplete = true;
                    if (this.route.url.indexOf('mobile') > -1) {
                        this.showInfo.refreshLabel = false;
                    }
                    // const labelVisible = this.appservice.getLabelVisibility();
                    // if (labelVisible && labelVisible.valuePresent) {
                    //   this.showInfo.refreshLabel = labelVisible.labelShown;
                    //  } else if(!labelVisible && this.route.url.indexOf('mobile') < 0) {
                    //   this.showInfo.refreshLabel = true;
                    // }
                };
                return NavComponent;
            }());
            NavComponent.ctorParameters = function () { return [
                { type: _shared_progress_service__WEBPACK_IMPORTED_MODULE_3__["ProgressService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-nav',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav/nav.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")).default]
                })
            ], NavComponent);
            /***/ 
        }),
        /***/ "./src/app/nominee-details/nominee-details.component.css": 
        /*!***************************************************************!*\
          !*** ./src/app/nominee-details/nominee-details.component.css ***!
          \***************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".align-button {\r\n    padding-left: 7%;\r\n    /* margin: 5% 4% 0; */\r\n    margin-bottom: 7%;\r\n}\r\n\r\n.error_color {\r\n    color: red;\r\n}\r\n\r\n.date {\r\n    border: none;\r\n    border-bottom: 1px solid #9a9a9a;\r\n    font-family: Nunito-Regular;\r\n    border: none !important;\r\n    border-bottom: solid 1px #b4b4b4 !important;\r\n    outline: none;\r\n    /* padding: 0; */\r\n    font-size: 18px;\r\n    /* width: 100%; */\r\n}\r\n\r\n/* Base for label styling */\r\n\r\n.custom-check[type=\"checkbox\"]:not(:checked),\r\n.custom-check[type=\"checkbox\"]:checked {\r\n    position: absolute;\r\n    left: -9999px;\r\n}\r\n\r\n.custom-check[type=\"checkbox\"]:not(:checked)+label,\r\n.custom-check[type=\"checkbox\"]:checked+label {\r\n    position: relative;\r\n    padding-left: 1.95em;\r\n    cursor: pointer;\r\n}\r\n\r\n/* checkbox aspect */\r\n\r\n.custom-check[type=\"checkbox\"]:not(:checked)+label:before,\r\n.custom-check[type=\"checkbox\"]:checked+label:before {\r\n    content: '';\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    width: 1.60em;\r\n    height: 1.60em;\r\n    border: 2px solid #ccc;\r\n    background: #fff;\r\n    /*border-radius: 4px;*/\r\n    box-shadow: inset 0 1px 3px rgba(0, 0, 0, .1);\r\n}\r\n\r\n/* checked mark aspect */\r\n\r\n.custom-check[type=\"checkbox\"]:not(:checked)+label:after,\r\n.custom-check[type=\"checkbox\"]:checked+label:after {\r\n    content: '■';\r\n    position: absolute;\r\n    top: 0.01em;\r\n    left: .100em;\r\n    font-size: 2em;\r\n    line-height: 0.61;\r\n    color: #e87722;\r\n    transition: all .2s;\r\n    font-family: Helvetica, Arial, sans-serif;\r\n}\r\n\r\n/* checked mark aspect changes */\r\n\r\n.custom-check[type=\"checkbox\"]:not(:checked)+label:after {\r\n    opacity: 0;\r\n    transform: scale(0);\r\n}\r\n\r\n.custom-check[type=\"checkbox\"]:checked+label:after {\r\n    opacity: 1;\r\n    transform: scale(1);\r\n}\r\n\r\n/* disabled checkbox */\r\n\r\n.custom-check[type=\"checkbox\"]:disabled:not(:checked)+label:before,\r\n.custom-check[type=\"checkbox\"]:disabled:checked+label:before {\r\n    box-shadow: none;\r\n    border-color: #bbb;\r\n    background-color: #ddd;\r\n}\r\n\r\n.custom-check[type=\"checkbox\"]:disabled:checked+label:after {\r\n    color: #999;\r\n}\r\n\r\n.custom-check[type=\"checkbox\"]:disabled+label {\r\n    color: #aaa;\r\n}\r\n\r\n/* accessibility */\r\n\r\n.custom-check[type=\"checkbox\"]:checked:focus+label:before,\r\n.custom-check[type=\"checkbox\"]:not(:checked):focus+label:before {\r\n    border: 2px dotted blue;\r\n}\r\n\r\n/* hover style just for information */\r\n\r\nlabel:hover:before {\r\n    border: 2px solid #4778d9!important;\r\n}\r\n\r\n.nomineedetail-nxt {\r\n    margin-top: 3%;\r\n}\r\n\r\n.dob-sapce-fix {\r\n    padding-left: 29px;\r\n}\r\n\r\n.dob-sapce-fix input {\r\n    padding-left: 0px;\r\n}\r\n\r\n.nominee-addressline-pad {\r\n    margin-top: 1% !important;\r\n}\r\n\r\n.nominee-none-cstm:before {\r\n    content: '';\r\n    display: block;\r\n    width: 60%;\r\n    height: 60%;\r\n    margin: 21% 22%;\r\n    border-radius: 50%;\r\n}\r\n\r\n.nominee-name-errmsg {\r\n    padding-left: 0;\r\n}\r\n\r\n.nominee-name-errmsg div.error_color {\r\n    padding-left: 0;\r\n}\r\n\r\n.date-picker-cstm {\r\n    width: 46.5%;\r\n}\r\n\r\n.clear-btn {\r\n    outline: none;\r\n    background: #f37021;\r\n    border: none;\r\n    cursor: pointer;\r\n    color: #fff;\r\n    border: 0;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.nxt-btn {\r\n    font-size: 12px;\r\n    padding-top: 12px;\r\n    padding-bottom: 12px;\r\n    padding-right: 35px;\r\n    padding-left: 35px;\r\n    border-radius: 0;\r\n}\r\n\r\n.clear-btn-prnt {\r\n    padding: 0% 10% 0% 13%;\r\n}\r\n\r\n.relation_select {\r\n    width: 48%;\r\n    padding: 5px;\r\n}\r\n\r\n.name_error {\r\n    padding-left: 0;\r\n    margin-left: -35px;\r\n}\r\n\r\n:host ::ng-deep .mydp {\r\n    border: 1px solid #868686;\r\n    border-radius: 0;\r\n}\r\n\r\n@media screen and (max-width: 992px) {\r\n    .inputBox {\r\n        font-family: Nunito-Regular;\r\n        border: none !important;\r\n        border-bottom: solid 1px #b4b4b4 !important;\r\n        outline: none;\r\n        padding: 0;\r\n        font-size: 18px !important;\r\n        width: 100%\r\n    }\r\n    .name_error {\r\n        padding-left: initial !important;\r\n        margin-left: initial !important;\r\n    }\r\n    .relation_select {\r\n        width: 100% !important;\r\n        padding-left: 0;\r\n    }\r\n    .padd0 {\r\n        padding-left: 0;\r\n        padding-right: 0;\r\n    }\r\n    .padd01 {\r\n        padding-left: 0;\r\n        padding-right: 0;\r\n    }\r\n    .align-button {\r\n        padding-left: initial;\r\n        /* margin: 5% 4% 0; */\r\n        margin-bottom: 7%;\r\n    }\r\n    .pincode_loader_css {\r\n        text-align: left;\r\n        text-align: left;\r\n        position: absolute;\r\n        right: 0px;\r\n        top: 90px !important;\r\n    }\r\n    .mainContent.row {\r\n        margin-top: 6% !important;\r\n    }\r\n    .overflow-hidden,\r\n    .padd01,\r\n    .inputContainer {\r\n        overflow: hidden;\r\n        clear: both;\r\n    }\r\n    .col-md-6.padd0.col-sm-12.col-xs-12.inputSection {\r\n        padding-bottom: 0;\r\n        padding-top: 0;\r\n        margin-bottom: 0;\r\n    }\r\n    .button_aligned_mobile {\r\n        padding-top: 30px;\r\n        padding-bottom: 15px;\r\n        text-align: center;\r\n    }\r\n    .width_laptop {\r\n        width: 100% !important;\r\n    }\r\n    .mobile_responsive {\r\n        padding-left: 0;\r\n        padding-right: 0;\r\n    }\r\n    .padd_responsive {\r\n        margin: 5% 4% 0 !important;\r\n    }\r\n}\r\n\r\n.width_laptop {\r\n    width: 75%;\r\n}\r\n\r\n.padd_responsive {\r\n    margin: 2% 4% 0;\r\n}\r\n\r\n.pincode_loader_css {\r\n    text-align: left;\r\n    text-align: left;\r\n    position: absolute;\r\n    right: 0px;\r\n    top: -5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm9taW5lZS1kZXRhaWxzL25vbWluZWUtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0NBQWdDO0lBQ2hDLDJCQUEyQjtJQUMzQix1QkFBdUI7SUFDdkIsMkNBQTJDO0lBQzNDLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFHQSwyQkFBMkI7O0FBRTNCOztJQUVJLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCOztBQUVBOztJQUVJLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsZUFBZTtBQUNuQjs7QUFHQSxvQkFBb0I7O0FBRXBCOztJQUVJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLE1BQU07SUFDTixhQUFhO0lBQ2IsY0FBYztJQUNkLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLDZDQUE2QztBQUNqRDs7QUFHQSx3QkFBd0I7O0FBRXhCOztJQUVJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIseUNBQXlDO0FBQzdDOztBQUdBLGdDQUFnQzs7QUFFaEM7SUFDSSxVQUFVO0lBQ1YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLG1CQUFtQjtBQUN2Qjs7QUFHQSxzQkFBc0I7O0FBRXRCOztJQUVJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUdBLGtCQUFrQjs7QUFFbEI7O0lBRUksdUJBQXVCO0FBQzNCOztBQUdBLHFDQUFxQzs7QUFFckM7SUFDSSxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxVQUFVO0lBQ1YsV0FBVztJQUNYLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixlQUFlO0lBQ2YsV0FBVztJQUNYLFNBQVM7SUFDVCx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSTtRQUNJLDJCQUEyQjtRQUMzQix1QkFBdUI7UUFDdkIsMkNBQTJDO1FBQzNDLGFBQWE7UUFDYixVQUFVO1FBQ1YsMEJBQTBCO1FBQzFCO0lBQ0o7SUFDQTtRQUNJLGdDQUFnQztRQUNoQywrQkFBK0I7SUFDbkM7SUFDQTtRQUNJLHNCQUFzQjtRQUN0QixlQUFlO0lBQ25CO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxxQkFBcUI7UUFDckIscUJBQXFCO1FBQ3JCLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksZ0JBQWdCO1FBQ2hCLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsVUFBVTtRQUNWLG9CQUFvQjtJQUN4QjtJQUNBO1FBQ0kseUJBQXlCO0lBQzdCO0lBQ0E7OztRQUdJLGdCQUFnQjtRQUNoQixXQUFXO0lBQ2Y7SUFDQTtRQUNJLGlCQUFpQjtRQUNqQixjQUFjO1FBQ2QsZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxpQkFBaUI7UUFDakIsb0JBQW9CO1FBQ3BCLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksc0JBQXNCO0lBQzFCO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSwwQkFBMEI7SUFDOUI7QUFDSjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsU0FBUztBQUNiIiwiZmlsZSI6InNyYy9hcHAvbm9taW5lZS1kZXRhaWxzL25vbWluZWUtZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFsaWduLWJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDclO1xyXG4gICAgLyogbWFyZ2luOiA1JSA0JSAwOyAqL1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNyU7XHJcbn1cclxuXHJcbi5lcnJvcl9jb2xvciB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4uZGF0ZSB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzlhOWE5YTtcclxuICAgIGZvbnQtZmFtaWx5OiBOdW5pdG8tUmVndWxhcjtcclxuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNiNGI0YjQgIWltcG9ydGFudDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAvKiBwYWRkaW5nOiAwOyAqL1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgLyogd2lkdGg6IDEwMCU7ICovXHJcbn1cclxuXHJcblxyXG4vKiBCYXNlIGZvciBsYWJlbCBzdHlsaW5nICovXHJcblxyXG4uY3VzdG9tLWNoZWNrW3R5cGU9XCJjaGVja2JveFwiXTpub3QoOmNoZWNrZWQpLFxyXG4uY3VzdG9tLWNoZWNrW3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IC05OTk5cHg7XHJcbn1cclxuXHJcbi5jdXN0b20tY2hlY2tbdHlwZT1cImNoZWNrYm94XCJdOm5vdCg6Y2hlY2tlZCkrbGFiZWwsXHJcbi5jdXN0b20tY2hlY2tbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQrbGFiZWwge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxLjk1ZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcblxyXG4vKiBjaGVja2JveCBhc3BlY3QgKi9cclxuXHJcbi5jdXN0b20tY2hlY2tbdHlwZT1cImNoZWNrYm94XCJdOm5vdCg6Y2hlY2tlZCkrbGFiZWw6YmVmb3JlLFxyXG4uY3VzdG9tLWNoZWNrW3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkK2xhYmVsOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMS42MGVtO1xyXG4gICAgaGVpZ2h0OiAxLjYwZW07XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjY2NjO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIC8qYm9yZGVyLXJhZGl1czogNHB4OyovXHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAuMSk7XHJcbn1cclxuXHJcblxyXG4vKiBjaGVja2VkIG1hcmsgYXNwZWN0ICovXHJcblxyXG4uY3VzdG9tLWNoZWNrW3R5cGU9XCJjaGVja2JveFwiXTpub3QoOmNoZWNrZWQpK2xhYmVsOmFmdGVyLFxyXG4uY3VzdG9tLWNoZWNrW3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkK2xhYmVsOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICfilqAnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwLjAxZW07XHJcbiAgICBsZWZ0OiAuMTAwZW07XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAwLjYxO1xyXG4gICAgY29sb3I6ICNlODc3MjI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzO1xyXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcblxyXG4vKiBjaGVja2VkIG1hcmsgYXNwZWN0IGNoYW5nZXMgKi9cclxuXHJcbi5jdXN0b20tY2hlY2tbdHlwZT1cImNoZWNrYm94XCJdOm5vdCg6Y2hlY2tlZCkrbGFiZWw6YWZ0ZXIge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbn1cclxuXHJcbi5jdXN0b20tY2hlY2tbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQrbGFiZWw6YWZ0ZXIge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbn1cclxuXHJcblxyXG4vKiBkaXNhYmxlZCBjaGVja2JveCAqL1xyXG5cclxuLmN1c3RvbS1jaGVja1t0eXBlPVwiY2hlY2tib3hcIl06ZGlzYWJsZWQ6bm90KDpjaGVja2VkKStsYWJlbDpiZWZvcmUsXHJcbi5jdXN0b20tY2hlY2tbdHlwZT1cImNoZWNrYm94XCJdOmRpc2FibGVkOmNoZWNrZWQrbGFiZWw6YmVmb3JlIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBib3JkZXItY29sb3I6ICNiYmI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG59XHJcblxyXG4uY3VzdG9tLWNoZWNrW3R5cGU9XCJjaGVja2JveFwiXTpkaXNhYmxlZDpjaGVja2VkK2xhYmVsOmFmdGVyIHtcclxuICAgIGNvbG9yOiAjOTk5O1xyXG59XHJcblxyXG4uY3VzdG9tLWNoZWNrW3R5cGU9XCJjaGVja2JveFwiXTpkaXNhYmxlZCtsYWJlbCB7XHJcbiAgICBjb2xvcjogI2FhYTtcclxufVxyXG5cclxuXHJcbi8qIGFjY2Vzc2liaWxpdHkgKi9cclxuXHJcbi5jdXN0b20tY2hlY2tbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQ6Zm9jdXMrbGFiZWw6YmVmb3JlLFxyXG4uY3VzdG9tLWNoZWNrW3R5cGU9XCJjaGVja2JveFwiXTpub3QoOmNoZWNrZWQpOmZvY3VzK2xhYmVsOmJlZm9yZSB7XHJcbiAgICBib3JkZXI6IDJweCBkb3R0ZWQgYmx1ZTtcclxufVxyXG5cclxuXHJcbi8qIGhvdmVyIHN0eWxlIGp1c3QgZm9yIGluZm9ybWF0aW9uICovXHJcblxyXG5sYWJlbDpob3ZlcjpiZWZvcmUge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzQ3NzhkOSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ub21pbmVlZGV0YWlsLW54dCB7XHJcbiAgICBtYXJnaW4tdG9wOiAzJTtcclxufVxyXG5cclxuLmRvYi1zYXBjZS1maXgge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyOXB4O1xyXG59XHJcblxyXG4uZG9iLXNhcGNlLWZpeCBpbnB1dCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxufVxyXG5cclxuLm5vbWluZWUtYWRkcmVzc2xpbmUtcGFkIHtcclxuICAgIG1hcmdpbi10b3A6IDElICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ub21pbmVlLW5vbmUtY3N0bTpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBoZWlnaHQ6IDYwJTtcclxuICAgIG1hcmdpbjogMjElIDIyJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLm5vbWluZWUtbmFtZS1lcnJtc2cge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG59XHJcblxyXG4ubm9taW5lZS1uYW1lLWVycm1zZyBkaXYuZXJyb3JfY29sb3Ige1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG59XHJcblxyXG4uZGF0ZS1waWNrZXItY3N0bSB7XHJcbiAgICB3aWR0aDogNDYuNSU7XHJcbn1cclxuXHJcbi5jbGVhci1idG4ge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6ICNmMzcwMjE7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5ueHQtYnRuIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHBhZGRpbmctdG9wOiAxMnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEycHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxufVxyXG5cclxuLmNsZWFyLWJ0bi1wcm50IHtcclxuICAgIHBhZGRpbmc6IDAlIDEwJSAwJSAxMyU7XHJcbn1cclxuXHJcbi5yZWxhdGlvbl9zZWxlY3Qge1xyXG4gICAgd2lkdGg6IDQ4JTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLm5hbWVfZXJyb3Ige1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0zNXB4O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLm15ZHAge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzg2ODY4NjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICAuaW5wdXRCb3gge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBOdW5pdG8tUmVndWxhcjtcclxuICAgICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2I0YjRiNCAhaW1wb3J0YW50O1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcclxuICAgICAgICB3aWR0aDogMTAwJVxyXG4gICAgfVxyXG4gICAgLm5hbWVfZXJyb3Ige1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAucmVsYXRpb25fc2VsZWN0IHtcclxuICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIH1cclxuICAgIC5wYWRkMCB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgICB9XHJcbiAgICAucGFkZDAxIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgIH1cclxuICAgIC5hbGlnbi1idXR0b24ge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogaW5pdGlhbDtcclxuICAgICAgICAvKiBtYXJnaW46IDUlIDQlIDA7ICovXHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNyU7XHJcbiAgICB9XHJcbiAgICAucGluY29kZV9sb2FkZXJfY3NzIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAwcHg7XHJcbiAgICAgICAgdG9wOiA5MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAubWFpbkNvbnRlbnQucm93IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA2JSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLm92ZXJmbG93LWhpZGRlbixcclxuICAgIC5wYWRkMDEsXHJcbiAgICAuaW5wdXRDb250YWluZXIge1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgY2xlYXI6IGJvdGg7XHJcbiAgICB9XHJcbiAgICAuY29sLW1kLTYucGFkZDAuY29sLXNtLTEyLmNvbC14cy0xMi5pbnB1dFNlY3Rpb24ge1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB9XHJcbiAgICAuYnV0dG9uX2FsaWduZWRfbW9iaWxlIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAud2lkdGhfbGFwdG9wIHtcclxuICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLm1vYmlsZV9yZXNwb25zaXZlIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgIH1cclxuICAgIC5wYWRkX3Jlc3BvbnNpdmUge1xyXG4gICAgICAgIG1hcmdpbjogNSUgNCUgMCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4ud2lkdGhfbGFwdG9wIHtcclxuICAgIHdpZHRoOiA3NSU7XHJcbn1cclxuXHJcbi5wYWRkX3Jlc3BvbnNpdmUge1xyXG4gICAgbWFyZ2luOiAyJSA0JSAwO1xyXG59XHJcblxyXG4ucGluY29kZV9sb2FkZXJfY3NzIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDBweDtcclxuICAgIHRvcDogLTVweDtcclxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/nominee-details/nominee-details.component.ts": 
        /*!**************************************************************!*\
          !*** ./src/app/nominee-details/nominee-details.component.ts ***!
          \**************************************************************/
        /*! exports provided: NomineeDetailsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NomineeDetailsComponent", function () { return NomineeDetailsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _shared_loader_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/loader/loader.service */ "./src/app/shared/loader/loader.service.ts");
            /* harmony import */ var _shared_dialogue_dialogue_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/dialogue/dialogue.service */ "./src/app/shared/dialogue/dialogue.service.ts");
            /* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
            /* harmony import */ var _nominee_details_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nominee-details.service */ "./src/app/nominee-details/nominee-details.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _shared_progress_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/progress.service */ "./src/app/shared/progress.service.ts");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _shared_activate_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/activate.module */ "./src/app/shared/activate.module.ts");
            /* harmony import */ var _shared_screen_name__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/screen.name */ "./src/app/shared/screen.name.ts");
            /* harmony import */ var _mobile_mobile_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../mobile/mobile.service */ "./src/app/mobile/mobile.service.ts");
            //import { PlatwareService } from '../shared/platware-client/platware.service';
            var NomineeDetailsComponent = /** @class */ (function () {
                // Max moment: April 21 2018, 20:30
                //  public max = new Date();
                // public invalidMoment =  new Date();
                function NomineeDetailsComponent(appLoader, _service, _appservice, formbuilder, dialogueservice, router, 
                //private platware: PlatwareService,
                progressService, location, locationurl, guardService, nameService, mobService) {
                    //   this.masterData = this._appservice.getMasterData();
                    //   this.selected_address_same_as = this.masterData['AOF']['DATA']['PSNL_DTL']['ADDRESS_SAME_AS'];
                    //   this.relation_name = this.masterData['AOF']['DATA']['PSNL_DTL']['FIRST_NAME']['VALUE'];
                    //   // this.selected_address_same_as = 'NO';
                    //   if (this.selected_address_same_as === "NO") {
                    //     this.address_same_as_show = true;
                    this.appLoader = appLoader;
                    this._service = _service;
                    this._appservice = _appservice;
                    this.formbuilder = formbuilder;
                    this.dialogueservice = dialogueservice;
                    this.router = router;
                    this.progressService = progressService;
                    this.location = location;
                    this.locationurl = locationurl;
                    this.guardService = guardService;
                    this.nameService = nameService;
                    this.mobService = mobService;
                    this.pincode123 = {
                        'pincodeError': false,
                        pincodeErrorMsg: ''
                    };
                    this.showOption = false;
                    this.addNominee_show = false;
                    this.add_NO_Nominee_checked = false;
                    this.max = new Date();
                    this.myDatePickerOptionsObj = {
                        dateFormat: 'dd mmm yyyy',
                        height: '34px',
                        width: '100%',
                        inline: false,
                        'editableDateField': false,
                        disableSince: { year: this.max.getFullYear(), month: this.max.getMonth() + 1, day: this.max.getDate() }
                    };
                    this.placeholder = 'DD-MM-YYYY';
                    //   }
                    //   else {
                    //     this.address_same_as_show = false;
                    //   }
                    //   // console.log(this.selected_address_same_as);
                    //   // console.log(this.masterData);
                    //   // this.name_required = 'Name Field is Required';
                    //   // this.relation_required = 'Relation Field is Required';
                    //   // this.address1_required = 'Address Field is Required';
                    //   // this.address2_required = 'Address Field is Required';
                    //   // this.pincode_required = 'Pincode Field is Required;'
                    //   this.name_required = this._appservice.getMessageMaster("002");
                    //   this.relation_required = this._appservice.getMessageMaster("003");
                    //   this.date_required = this._appservice.getMessageMaster("004");
                    //   this.address1_required = this._appservice.getMessageMaster("006");
                    //   this.address2_required = this._appservice.getMessageMaster("007");
                    //   this.pincode_required = this._appservice.getMessageMaster("009");
                    //   this.fataDeclaration = this._appservice.getMessageMaster("0011");
                    //   this.Loadermsg = this._appservice.getMessageMaster('025');
                    //   this.nomineeNameSame = this._appservice.getMessageMaster('0027');
                    //   location.onPopState((e) => {
                    //     // console.log(e);
                    //     locationurl.go('/mobile');
                    //     // console.log('pressed back!');
                    //   });
                }
                NomineeDetailsComponent.prototype.ngOnInit = function () {
                    var user_registration = {
                        screen1: {
                            isActive: "YES",
                            isComplete: true,
                            loading: 100,
                        },
                        screen2: {
                            isActive: "NO",
                            isComplete: false,
                            loading: 0,
                        },
                        screen3: {
                            isActive: "NO",
                            isComplete: false,
                            loading: 0,
                        },
                        screen4: {
                            isActive: "NO",
                            isComplete: false,
                            loading: 0,
                        }
                    };
                    //   this.Nominee_Y_N = (this.masterData['AOF']['DATA']['NOMINEE']['IS_NOMINEE_REQUIRED']['VALUE']);
                    //   if (this.Nominee_Y_N == 'No') {
                    //     this.IsNominee_requrired = this.Nominee_Y_N.toUpperCase();
                    //   } else {
                    //     this.IsNominee_requrired = this.Nominee_Y_N.toUpperCase();
                    //   }
                    //   this.Nominee_relation = this.masterData['AOF']['DATA']['NOMINEE']['RELATIONSHIP_WITH_CUSTOMER']['VALUE'];
                    //   this.name_Nominee = this.masterData['AOF']['DATA']['NOMINEE']['FULL_NAME']['VALUE'];
                    //   this.nominee_dob = this.masterData['AOF']['DATA']['NOMINEE']['DATE_OF_BIRTH']['VALUE'];
                    //   this.nominee_address_new = this.masterData['AOF']['DATA']['NOMINEE']['ADDRESS_SAME_AS']['VALUE'];
                    //   this.nominee_address_1 = this.masterData['AOF']['DATA']['NOMINEE']['NOMINEE_ADRS']['ADR_LN_1']['VALUE'];
                    //   this.nominee_address_2 = this.masterData['AOF']['DATA']['NOMINEE']['NOMINEE_ADRS']['ADR_LN_2']['VALUE'];
                    //   this.nominee_landmark = this.masterData['AOF']['DATA']['NOMINEE']['NOMINEE_ADRS']['ADR_LN_3']['VALUE'];
                    //   this.nominee_pincode = this.masterData['AOF']['DATA']['NOMINEE']['NOMINEE_ADRS']['PIN_CODE']['VALUE'];
                    //   this.city = this.masterData['AOF']['DATA']['NOMINEE']['NOMINEE_ADRS']['CITY']['VALUE'];
                    //   this.state = this.masterData['AOF']['DATA']['NOMINEE']['NOMINEE_ADRS']['STATE']['VALUE'];
                    this.createForm();
                    this.nameService.setName('Nominee Details');
                    this.progressService.setLoaderWidth(user_registration);
                    //  // this.getRelation();
                    //   if (this.nominee_address_new == 'none') {
                    //     this.showOption = true;
                    //   }
                };
                // // getRelation() {
                // //   const REQ_DATA = [
                // //     {
                // //       processName: "GETMASTERDATA",
                // //       data: [
                // //         {
                // //           "X_TYPE": "RELATIONSHIP",
                // //           "X_VERSION": "0"
                // //         }
                // //       ]
                // //     }
                // //   ];
                // //   this.appLoader.showLoader('');
                // //   this._service.fetchRelation(REQ_DATA).subscribe(users => {
                // //     this.appLoader.hideLoader();
                // //     let relation = JSON.parse(users[0]['data_object']);
                // //     this.relation_sorted = new OrderByPipe().transform(
                // //       relation,
                // //       'sequence'
                // //     );
                // //     // console.log(JSON.parse(users[0]['data_object']));
                // //     //// console.log(this.selectedValue);
                // //   })
                // // }
                // getRelation() {
                //   const REQ_DATA = [
                //     {
                //       processName: "GETMASTERDATA",
                //       data: [
                //         {
                //           "X_TYPE": "RELATIONSHIP",
                //           "X_VERSION": "0"
                //         }
                //       ]
                //     }
                //   ];
                //   this.appLoader.showLoader('');
                //   this._service.fetchRelation(REQ_DATA).subscribe(users => {
                //     this.appLoader.hideLoader();
                //     let relation = JSON.parse(users[0]['data_object']);
                //     this.relation_sorted = this.sortedRelationList(relation)
                //     // console.log(JSON.parse(users[0]['data_object']));
                //     //// console.log(this.selectedValue);
                //   })
                // }
                // sortedRelationList = (relation) => {
                //   let relationArr = [];
                //   let tempArr = [];
                //   relationArr = relation;
                //   // const age = parseInt(this.masterData.AOF.DATA.PSNL_DTL.DOB.VALUE); //28;
                //   const age = parseInt(this._appservice.getSSNAge()); //28;
                //   relationArr = relationArr.filter(function (current) {
                //     let isGroupMatch = false;
                //     // commented by Sudha Priya ***********************//
                //     // ** if (age <= 20 && current.age_group === ("group 1")) {
                //     // **  isGroupMatch = true;
                //     // **  tempArr.push(current);
                //     // ** } else if (age > 20 && age <= 35 && current.age_group === 'group 2') {
                //     // **  isGroupMatch = true;
                //     // **  tempArr.push(current);
                //     // ** } else if (age > 35 && age <= 50 && current.age_group === ("group 3")) {
                //     // **  isGroupMatch = true;
                //     // **  tempArr.push(current);
                //     // ** } else if (age > 50 && current.age_group === ("group 4")) {
                //     // **  isGroupMatch = true;
                //     // **  tempArr.push(current);
                //     // ** }
                //     // ************************************** //
                //     // ************* code by Sudha *********************** //
                //     if ((age <= 20 && current.age_group === ('group 1')) || (age > 20 && age <= 35 && current.age_group === ('group 2'))
                //       || (age > 35 && age <= 50 && current.age_group === ('group 3')) || (age > 50 && current.age_group === ('group 4'))) {
                //       isGroupMatch = true;
                //       tempArr.push(current);
                //     }
                //     // ************************************** //
                //     if (!isGroupMatch) {
                //       return current;
                //     }
                //   });
                //   relationArr.unshift(...tempArr);
                //   return relationArr;
                // }
                // onSelectionChange(event: any) {
                //   if (event === 'none') {
                //     this.state = '';
                //     this.city = '';
                //     this.addForm();
                //   }
                //   else {
                //     this.removeForm();
                //   }
                // }
                NomineeDetailsComponent.prototype.createForm = function () {
                    this.nomineeDetailsForm = this.formbuilder.group({
                        // add_nominee: ['', [Validators.required]],
                        nominee_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
                    });
                };
                //   this.nomineeDetailsForm.controls['add_nominee'].valueChanges.subscribe(
                //     (selectedValue) => {
                //       // console.log(selectedValue);
                //       if (selectedValue === 'false') {
                //         this.addNominee_show = false;
                //         this.add_NO_Nominee_checked = true;
                //         this.removeNominee();
                //       } else if (selectedValue === 'true') {
                //         this.addNominee_show = true;
                //         this.add_NO_Nominee_checked = false;
                //         this.addNominee();
                //       }
                //       if (this.masterData['AOF']['DATA']['NOMINEE']['IS_NOMINEE_REQUIRED']['VALUE'] = "Yes" && selectedValue != 'false') {
                //         this.addNominee_show = true;
                //         this.add_NO_Nominee_checked = false;
                //         this.addNominee();
                //       } else if (this.masterData['AOF']['DATA']['NOMINEE']['IS_NOMINEE_REQUIRED']['VALUE'] = "No" && selectedValue != 'true') {
                //         this.addNominee_show = false;
                //         this.add_NO_Nominee_checked = true;
                //         this.removeNominee();
                //       }
                //       if (this.masterData['AOF']['DATA']['NOMINEE']['ADDRESS_SAME_AS']['VALUE'] == 'permanent' && selectedValue != 'false') {
                //         //    this.addNominee_show = false;
                //         this.add_NO_Nominee_checked = false;
                //         this.addNominee();
                //         this.removeForm();
                //       } else if (this.masterData['AOF']['DATA']['NOMINEE']['ADDRESS_SAME_AS']['VALUE'] == 'none' && selectedValue != 'false') {
                //         // this.addNominee_show = true;
                //         this.add_NO_Nominee_checked = false;
                //         this.addNominee();
                //         this.addForm();
                //       }
                //       /*
                //       */
                //       // // console.log(this.nomineeDetailsForm.get('nominee_address_option').value);     
                //     }
                //   );
                //   //   this.nomineeDetailsForm.controls['nominee_address_option'].valueChanges.subscribe(
                //   //     (selectedValue) => {
                //   //       // console.log(selectedValue);
                //   //       if(selectedValue === 'none'){
                //   //         this.state= '';
                //   //         this.city= '';
                //   //         this.addForm();
                //   //       }
                //   //       else{
                //   //        this.removeForm();      
                //   //       }
                //   //      // // console.log(this.nomineeDetailsForm.get('nominee_address_option').value);     
                //   //     }
                //   // );
                // }
                // addNominee() {
                //   this.nomineeDetailsForm.removeControl('nominee_no_checkbox');
                //   this.nomineeDetailsForm.addControl('nominee_name', new FormControl('', Validators.required));
                //   this.nomineeDetailsForm.addControl('relation', new FormControl('', Validators.required));
                //   this.nomineeDetailsForm.addControl('date', new FormControl(this.nominee_dob, Validators.required));
                //   this.nomineeDetailsForm.addControl('nominee_address_option', new FormControl('', Validators.required));
                // }
                // removeNominee() {
                //   this.showOption = false;
                //   this.nomineeDetailsForm.addControl('nominee_no_checkbox', new FormControl(false, Validators.requiredTrue));
                //   this.nomineeDetailsForm.removeControl('nominee_name');
                //   this.nomineeDetailsForm.removeControl('relation');
                //   this.nomineeDetailsForm.removeControl('date');
                //   this.nomineeDetailsForm.removeControl('nominee_address_option');
                //   this.nomineeDetailsForm.removeControl('addressline1');
                //   this.nomineeDetailsForm.removeControl('addressline2');
                //   this.nomineeDetailsForm.removeControl('landmark');
                //   this.nomineeDetailsForm.removeControl('city');
                //   this.nomineeDetailsForm.removeControl('state');
                //   this.nomineeDetailsForm.removeControl('pincode');
                // }
                // addForm() {
                //   this.showOption = true;
                //   this.nomineeDetailsForm.addControl('addressline1', new FormControl('', Validators.required));
                //   this.nomineeDetailsForm.addControl('addressline2', new FormControl('', Validators.required));
                //   this.nomineeDetailsForm.addControl('landmark', new FormControl(''));
                //   this.nomineeDetailsForm.addControl('pincode', new FormControl('', [Validators.required, Validators.minLength(6)]));
                //   this.nomineeDetailsForm.addControl('city', new FormControl(''));
                //   this.nomineeDetailsForm.addControl('state', new FormControl(''));
                // }
                // removeForm() {
                //   this.showOption = false;
                //   this.nomineeDetailsForm.removeControl('addressline1');
                //   this.nomineeDetailsForm.removeControl('addressline2');
                //   this.nomineeDetailsForm.removeControl('landmark');
                //   this.nomineeDetailsForm.removeControl('city');
                //   this.nomineeDetailsForm.removeControl('state');
                //   this.nomineeDetailsForm.removeControl('pincode');
                // }
                // fetchStateCity(event: any) {
                //   this.pincode123.pincodeError = false;
                //   if (event.value.length === 6) {
                //     this.pincode_loader = true;
                //     this.pincodeMsg = this._appservice.getMessageMaster('PINLDR-001');
                //     const reqObj = [{
                //       processName: 'SPPRGETCITYSTATE',
                //       data: [{
                //         'X_PINCODE': event.value
                //       }]
                //     }];
                //     this.platware.callPlatware(reqObj).subscribe(res => {
                //       try {
                //         this.pincode_loader = false;
                //         this.pincode123.pincodeError = false;
                //         // console.log(res);
                //         if (res[0].data.length) {
                //           this.pincode123.pincodeError = false;
                //           this.state = res[0].data[0] && res[0].data[0].state;
                //           this.city = res[0].data[0] && res[0].data[0].city;
                //         } else {
                //           this.pincode123.pincodeErrorMsg = this._appservice.getMessageMaster('P01');
                //           this.pincode123.pincodeError = true;
                //         }
                //       }
                //       catch (error) {
                //         this.appLoader.hideLoader();
                //         this.dialogueservice.alertBox({
                //           title: 'Error',
                //           message: this._appservice.getCatchmsg(),
                //           messageType: 'error',
                //           actionlabel: ['Close']
                //         }).take(1).subscribe((res) => {
                //           this.router.navigate(['/mobile']);
                //         })
                //       }
                //     },
                //       err => {
                //         this.pincode_loader = false;
                //         const errMsg = err.error.error[0].data.Message || 'Some Error Occurred..Please Try Again..!!';
                //         this.dialogueservice.alertBox({
                //           title: 'Error',
                //           message: errMsg,
                //           messageType: 'error',
                //           actionlabel: ['Close']
                //         }).take(1).subscribe((res) => {
                //           // console.log(res);
                //         });
                //       });
                //   }
                //   else {
                //     this.state = '';
                //     this.city = '';
                //   }
                // }
                // onChange(Value) {
                //   if (Value.toUpperCase() === 'FATHER') {
                //     let fatherName = this.masterData['AOF']['DATA']['PSNL_DTL']['FATHER_NAME']['VALUE'];
                //     this.nomineeDetailsForm.controls['nominee_name'].setValue(fatherName);
                //     // this.myDatePickerOptionsObj.disableSince.year = this.max.getFullYear() - 20;
                //     // this.myDatePickerOptionsObj.disableSince.month = this.max.getMonth() + 1;
                //     // this.myDatePickerOptionsObj.disableSince.day = this.max.getDate()
                //     // console.log(fatherName);
                //   }
                //   else if (Value.toUpperCase() === 'MOTHER') {
                //     let motherName = this.masterData['AOF']['DATA']['PSNL_DTL']['MOTHER_MAIDEN_NAME']['VALUE'];
                //     this.nomineeDetailsForm.controls['nominee_name'].setValue(motherName);
                //     // this.myDatePickerOptionsObj.disableSince.year = this.max.getFullYear() - 20;
                //     // this.myDatePickerOptionsObj.disableSince.month = this.max.getMonth() + 1;
                //     // this.myDatePickerOptionsObj.disableSince.day = this.max.getDate();
                //     // console.log(motherName);
                //   }
                //   else {
                //     this.nomineeDetailsForm.controls['nominee_name'].setValue("");
                //     // this.myDatePickerOptionsObj.disableSince.year = this.max.getFullYear();
                //     // this.myDatePickerOptionsObj.disableSince.month = this.max.getMonth() + 1;
                //     // this.myDatePickerOptionsObj.disableSince.day = this.max.getDate()
                //   }
                //   // console.log(Value);
                // }
                // addNomineeDetailsForm() {
                //   let form_details = this.nomineeDetailsForm.value;
                //   this.masterData['AOF']['DATA']['NOMINEE']['FULL_NAME']['VALUE'] = this._appservice.converIntoTitleCase(form_details.nominee_name);
                //   this.masterData['AOF']['DATA']['NOMINEE']['FIRST_NAME']['VALUE'] = this._appservice.converIntoTitleCase(form_details.nominee_name);
                //   this.masterData['AOF']['DATA']['NOMINEE']['SHORT_NAME']['VALUE'] = this._appservice.converIntoTitleCase(form_details.nominee_name);
                //   this.masterData['AOF']['DATA']['NOMINEE']['RELATIONSHIP_WITH_CUSTOMER']['VALUE'] = form_details.relation;
                //   this.masterData['AOF']['DATA']['NOMINEE']['DATE_OF_BIRTH']['VALUE'] = this.getdate;
                //   this.masterData['AOF']['DATA']['NOMINEE']['ADDRESS_SAME_AS']['VALUE'] = form_details.nominee_address_option;
                //   this.masterData['AOF']['DATA']['NOMINEE']['IS_NOMINEE_REQUIRED']['VALUE'] = "Yes";
                //   const dateOfBirth = form_details['date'].jsdate;
                //   // calculate age
                //   const age = this.getAge(dateOfBirth);
                //   if (age <= 18) {
                //     this.masterData['AOF']['DATA']['CURRENT_SCREEN_DTLS']['PORTAL_SCREEN_ID'] = '5';
                //     this.masterData['AOF']['DATA']['NOMINEE']['IS_GRDN_REQUIRED'] = "Y";
                //   }
                //   else {
                //     this.masterData['AOF']['DATA']['CURRENT_SCREEN_DTLS']['PORTAL_SCREEN_ID'] = '6';
                //     this.masterData['AOF']['DATA']['NOMINEE']['IS_GRDN_REQUIRED'] = "N";
                //   }
                //   if (form_details.nominee_address_option === "permanent") {
                //     this.masterData['AOF']['DATA']['NOMINEE']['NOMINEE_ADRS']['ADR_LN_1']['VALUE'] = this.masterData['AOF']['DATA']['ADDRESS'][0]['ADR_LN_1']['VALUE'];
                //     this.masterData['AOF']['DATA']['NOMINEE']['NOMINEE_ADRS']['ADR_LN_2']['VALUE'] = this.masterData['AOF']['DATA']['ADDRESS'][0]['ADR_LN_2']['VALUE'];
                //     this.masterData['AOF']['DATA']['NOMINEE']['NOMINEE_ADRS']['CITY']['VALUE'] = this.masterData['AOF']['DATA']['ADDRESS'][0]['CITY_CODE']['VALUE'];
                //     this.masterData['AOF']['DATA']['NOMINEE']['NOMINEE_ADRS']['COUNTRY']['VALUE'] = this.masterData['AOF']['DATA']['ADDRESS'][0]['COUNTRY']['VALUE'];
                //     this.masterData['AOF']['DATA']['NOMINEE']['NOMINEE_ADRS']['PIN_CODE']['VALUE'] = this.masterData['AOF']['DATA']['ADDRESS'][0]['PIN_CODE']['VALUE']
                //     this.masterData['AOF']['DATA']['NOMINEE']['NOMINEE_ADRS']['STATE']['VALUE'] = this.masterData['AOF']['DATA']['ADDRESS'][0]['STATE_CODE']['VALUE']
                //   }
                //   else if (form_details.nominee_address_option === "other") {
                //     this.masterData['AOF']['DATA']['NOMINEE']['NOMINEE_ADRS']['ADR_LN_1']['VALUE'] = this.masterData['AOF']['DATA']['ADDRESS'][1]['ADR_LN_1']['VALUE'];
                //     this.masterData['AOF']['DATA']['NOMINEE']['NOMINEE_ADRS']['ADR_LN_2']['VALUE'] = this.masterData['AOF']['DATA']['ADDRESS'][1]['ADR_LN_2']['VALUE'];
                //     this.masterData['AOF']['DATA']['NOMINEE']['NOMINEE_ADRS']['CITY']['VALUE'] = this.masterData['AOF']['DATA']['ADDRESS'][1]['CITY_CODE']['VALUE'];
                //     this.masterData['AOF']['DATA']['NOMINEE']['NOMINEE_ADRS']['COUNTRY']['VALUE'] = this.masterData['AOF']['DATA']['ADDRESS'][1]['COUNTRY']['VALUE'];
                //     this.masterData['AOF']['DATA']['NOMINEE']['NOMINEE_ADRS']['PIN_CODE']['VALUE'] = this.masterData['AOF']['DATA']['ADDRESS'][1]['PIN_CODE']['VALUE']
                //     this.masterData['AOF']['DATA']['NOMINEE']['NOMINEE_ADRS']['STATE']['VALUE'] = this.masterData['AOF']['DATA']['ADDRESS'][1]['STATE_CODE']['VALUE']
                //   }
                //   else {
                //     this.masterData['AOF']['DATA']['NOMINEE']['NOMINEE_ADRS']['ADR_LN_1']['VALUE'] = this._appservice.converIntoTitleCase(form_details.addressline1);
                //     this.masterData['AOF']['DATA']['NOMINEE']['NOMINEE_ADRS']['ADR_LN_2']['VALUE'] = this._appservice.converIntoTitleCase(form_details.addressline2);
                //     this.masterData['AOF']['DATA']['NOMINEE']['NOMINEE_ADRS']['CITY']['VALUE'] = this._appservice.converIntoTitleCase(form_details.city);
                //     // this.masterData['AOF']['DATA']['NOMINEE']['NOMINEE_ADRS']['COUNTRY']['VALUE'] = form_details.pincode;
                //     this.masterData['AOF']['DATA']['NOMINEE']['NOMINEE_ADRS']['PIN_CODE']['VALUE'] = form_details.pincode;
                //     this.masterData['AOF']['DATA']['NOMINEE']['NOMINEE_ADRS']['STATE']['VALUE'] = this._appservice.converIntoTitleCase(form_details.state);
                //   }
                //   // console.log(this.masterData);
                // }
                // getAge(date) {
                //   const now = new Date();
                //   const age = now.getFullYear() - date.getFullYear();
                //   return age;
                // }
                // added by ANkit
                NomineeDetailsComponent.prototype.submitForm = function () {
                    var _this = this;
                    this.ssnUserData = this._appservice.getSsnData();
                    this.ssnUserData.Nominee_relation = this.Nominee_relation;
                    this.ssnUserData.name_Nominee = this.name_Nominee;
                    this.ssnUserData.nominee_dob = this.nominee_dob;
                    this.ssnUserData.accountNumber = Math.floor(Math.random() * 10000000000);
                    this.ssnUserData.routingNumber = Math.floor(Math.random() * 10000000000);
                    this.ssnUserData.cardNumber = Math.floor(Math.random() * 100000000000000000);
                    this.ssnUserData.wireTransId = Math.floor(Math.random() * 10000000);
                    this.ssnUserData.balance = 0;
                    this._appservice.setSsnData(this.ssnUserData);
                    this.mobService.accountcreationComplete(this.ssnUserData)
                        .subscribe(function (resp) {
                        console.log(resp);
                        //return this.spresp.push(resp);
                        if (resp) {
                            console.log(resp);
                        }
                        _this.router.navigate(['/accountSummary']);
                    });
                };
                return NomineeDetailsComponent;
            }());
            NomineeDetailsComponent.ctorParameters = function () { return [
                { type: _shared_loader_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"] },
                { type: _nominee_details_service__WEBPACK_IMPORTED_MODULE_5__["NomieeService"] },
                { type: _app_service__WEBPACK_IMPORTED_MODULE_4__["appService"] },
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
                { type: _shared_dialogue_dialogue_service__WEBPACK_IMPORTED_MODULE_3__["DialogueService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
                { type: _shared_progress_service__WEBPACK_IMPORTED_MODULE_8__["ProgressService"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["PlatformLocation"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"] },
                { type: _shared_activate_module__WEBPACK_IMPORTED_MODULE_10__["WorkflowService"] },
                { type: _shared_screen_name__WEBPACK_IMPORTED_MODULE_11__["NameService"] },
                { type: _mobile_mobile_service__WEBPACK_IMPORTED_MODULE_12__["mobileService"] }
            ]; };
            NomineeDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-nominee-details',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nominee-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/nominee-details/nominee-details.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nominee-details.component.css */ "./src/app/nominee-details/nominee-details.component.css")).default]
                })
            ], NomineeDetailsComponent);
            /***/ 
        }),
        /***/ "./src/app/nominee-details/nominee-details.service.ts": 
        /*!************************************************************!*\
          !*** ./src/app/nominee-details/nominee-details.service.ts ***!
          \************************************************************/
        /*! exports provided: NomieeService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NomieeService", function () { return NomieeService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
            //import { PlatwareService } from "../shared/platware-client/platware.service";
            var NomieeService = /** @class */ (function () {
                function NomieeService( //private _platware:PlatwareService
                ) {
                }
                NomieeService.prototype.fetchRelation = function (data) {
                    return "abcd"; //this._platware.callPlatware(data).map(res => res[0]['data']);
                };
                NomieeService.prototype.masterDataSync = function (data) {
                    return "abcd"; //this._platware.callPlatware(data).map(res => res[0]['data']);
                };
                NomieeService.prototype.ClearData = function (data) {
                    return "BCD"; //this._platware.callPlatware(data).map(res => res[0]['data']);
                };
                return NomieeService;
            }());
            NomieeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], NomieeService);
            /***/ 
        }),
        /***/ "./src/app/pan/pan.component.css": 
        /*!***************************************!*\
          !*** ./src/app/pan/pan.component.css ***!
          \***************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("input[type='radio'] {\r\n    -webkit-appearance: none;\r\n    width: 20px;\r\n    height: 20px;\r\n    border: 1px solid darkgray;\r\n    border-radius: 50%;\r\n    outline: none;\r\n    vertical-align: bottom;\r\n    margin-right: 1%;\r\n    /* box-shadow: 0 0 5px 0px gray inset; */\r\n}\r\n\r\ninput[type='radio']:hover {\r\n    box-shadow: 0 0 5px 0px #f37021 inset;\r\n}\r\n\r\ninput[type='radio']:before {\r\n    content: '';\r\n    display: block;\r\n    width: 55%;\r\n    height: 59%;\r\n    margin: 20% auto;\r\n    border-radius: 50%;\r\n}\r\n\r\ninput[type='radio']:checked:before {\r\n    background: #f37021;\r\n}\r\n\r\n.inputContainer {\r\n    padding: 3% 0 0;\r\n}\r\n\r\n.error_color {\r\n    color: red;\r\n    /* padding-top: 12px; */\r\n    margin-top: 5px;\r\n}\r\n\r\n.error_color .error_img {\r\n    position: relative;\r\n}\r\n\r\n.error_color .error_text {\r\n    position: absolute;\r\n    top: 4px;\r\n    font-family: inherit;\r\n    font-family: Nunito-Regular;\r\n}\r\n\r\n.example-h2 {\r\n    margin: 10px;\r\n}\r\n\r\n.example-section {\r\n    display: flex;\r\n    align-content: center;\r\n    align-items: center;\r\n    height: 60px;\r\n}\r\n\r\n.example-margin {}\r\n\r\n.annual-slider {\r\n    margin: 10px;\r\n}\r\n\r\n.fatca_inner {\r\n    margin-top: 20px;\r\n    margin-left: 14px;\r\n}\r\n\r\n.occupation_error {\r\n    padding-left: 30px;\r\n}\r\n\r\n.styling_error {\r\n    position: absolute;\r\n    right: 15px;\r\n    font-weight: bold;\r\n    padding-left: 15px;\r\n}\r\n\r\n.styling_error_pan {\r\n    cursor: pointer;\r\n    position: absolute;\r\n    right: 4%;\r\n    bottom: 45px;\r\n    top: 1px;\r\n}\r\n\r\n.styling_error_pan1{\r\n    cursor: pointer;\r\n    position: absolute;\r\n    right: 4%;\r\n    bottom: 45px;\r\n    top: 1px;\r\n    color: #20b62d;\r\n}\r\n\r\n.styling_error_pan2{\r\n    cursor: pointer;\r\n    position: absolute;\r\n    right: 4%;\r\n    bottom: 45px;\r\n    top: 1px;\r\n    color: red;\r\n}\r\n\r\n.styling_error_pan3{\r\n    cursor: pointer;\r\n    position: absolute;\r\n    right: 4%;\r\n    bottom: 45px;\r\n    top: 1px;\r\n    color: orange;\r\n}\r\n\r\n@media screen and (max-width: 992px) {\r\n    .styling_error_pan {\r\n        cursor: pointer;\r\n        position: absolute;\r\n        right: 4%;\r\n        top: -5px !important;\r\n    }\r\n    .styling_error {\r\n        position: initial !important;\r\n        right: initial !important;\r\n        font-weight: bold;\r\n    }\r\n    .error_color .error_text {\r\n        position: initial !important;\r\n        top: initial !important;\r\n    }\r\n    .occupation_error {\r\n        padding-left: 0;\r\n    }\r\n    .fatca_inner {\r\n        margin-top: 10px;\r\n        margin-left: 14px;\r\n    }\r\n    .button_aligned_mobile {\r\n        padding-top: 30px;\r\n        padding-bottom: 15px;\r\n        text-align: center;\r\n    }\r\n    .fatca_outer {\r\n        padding-top: 10%;\r\n    }\r\n    .annual-slider {\r\n        margin: 10px;\r\n        margin-top: 0;\r\n    }\r\n    .mainContent {\r\n        margin-top: 8% !important;\r\n        margin-left: -15px !important;\r\n        margin-right: -15px !important;\r\n    }\r\n    .mat-slider-horizontal {\r\n        width: 700px !important;\r\n    }\r\n    .relation_select {\r\n        width: 100% !important;\r\n        padding-left: 0;\r\n    }\r\n    .width-style {\r\n        /* width: inherit !important; */\r\n    }\r\n    .disabledBtn {\r\n        font-size: 12px;\r\n        padding-top: 12px;\r\n        padding-bottom: 12px;\r\n        padding-right: 50px;\r\n        padding-left: 50px;\r\n        border-radius: 0;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 792px) {\r\n    .mat-slider-horizontal {\r\n        width: 400px !important;\r\n    }\r\n    .label1 {\r\n        padding-left: 0px !important;\r\n        text-align: center;\r\n    }\r\n    .label2 {\r\n        padding-left: 60px !important;\r\n        text-align: center;\r\n    }\r\n    .label3 {\r\n        padding-left: 65px !important;\r\n        text-align: center;\r\n    }\r\n    .label4 {\r\n        padding-left: 65px !important;\r\n        text-align: center;\r\n    }\r\n    .label5 {\r\n        padding-left: 50px !important;\r\n        text-align: center;\r\n    }\r\n    .slider_bottom ul {\r\n        padding: 0;\r\n        position: absolute;\r\n        top: 50px;\r\n        width: 430px !important;\r\n        left: 10px;\r\n        display: inline-block;\r\n        font-size: 12px;\r\n        font-family: Nunito-Regular;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 450px) {\r\n    .mat-slider-horizontal {\r\n        width: 300px !important;\r\n    }\r\n    .label1 {\r\n        padding-left: 0px !important;\r\n        text-align: center;\r\n    }\r\n    .label2 {\r\n        padding-left: 35px !important;\r\n        text-align: center;\r\n    }\r\n    .label3 {\r\n        padding-left: 42px !important;\r\n        text-align: center;\r\n    }\r\n    .label4 {\r\n        padding-left: 35px !important;\r\n        text-align: center;\r\n    }\r\n    .label5 {\r\n        padding-left: 25px !important;\r\n        text-align: center;\r\n    }\r\n    .slider_bottom ul {\r\n        padding: 0;\r\n        position: absolute;\r\n        top: 50px;\r\n        width: 330px !important;\r\n        left: 10px;\r\n        display: inline-block;\r\n        font-size: 12px;\r\n        font-family: Nunito-Regular;\r\n    }\r\n}\r\n\r\n.label1 {\r\n    padding-left: 0px;\r\n    text-align: center;\r\n}\r\n\r\n.label2 {\r\n    padding-left: 140px;\r\n    text-align: center;\r\n}\r\n\r\n.label3 {\r\n    padding-left: 142px;\r\n    text-align: center;\r\n}\r\n\r\n.label4 {\r\n    padding-left: 140px;\r\n    text-align: center;\r\n}\r\n\r\n.label5 {\r\n    padding-left: 130px;\r\n    text-align: center;\r\n}\r\n\r\n.mat-slider-horizontal {\r\n    width: 700px;\r\n}\r\n\r\n.mat-slider-vertical {\r\n    height: 300px;\r\n}\r\n\r\n.slider_bottom ul li {\r\n    float: left;\r\n    list-style: none;\r\n}\r\n\r\n.slider_bottom ul {\r\n    padding: 0;\r\n    position: absolute;\r\n    top: 50px;\r\n    width: 745px;\r\n    left: 10px;\r\n    font-size: 12px;\r\n    font-family: Nunito-Regular;\r\n}\r\n\r\n.relation_select {\r\n    width: 47%;\r\n    padding: 5px;\r\n}\r\n\r\n.mat-accent .mat-slider-thumb,\r\n.mat-accent .mat-slider-thumb-label,\r\n.mat-accent .mat-slider-track-fill {\r\n    background-color: #f37021;\r\n}\r\n\r\n.width-style {\r\n    width: 4.33%;\r\n}\r\n\r\n/* Base for label styling */\r\n\r\n.custom-check[type=\"checkbox\"]:not(:checked),\r\n.custom-check[type=\"checkbox\"]:checked {\r\n    position: absolute;\r\n    left: -9999px;\r\n}\r\n\r\n.custom-check[type=\"checkbox\"]:not(:checked)+label,\r\n.custom-check[type=\"checkbox\"]:checked+label {\r\n    position: relative;\r\n    padding-left: 1.95em;\r\n    cursor: pointer;\r\n}\r\n\r\n/* checkbox aspect */\r\n\r\n.custom-check[type=\"checkbox\"]:not(:checked)+label:before,\r\n.custom-check[type=\"checkbox\"]:checked+label:before {\r\n    content: '';\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    width: 1.60em;\r\n    height: 1.60em;\r\n    border: 2px solid #ccc;\r\n    background: #fff;\r\n    /*border-radius: 4px;*/\r\n    box-shadow: inset 0 1px 3px rgba(0, 0, 0, .1);\r\n}\r\n\r\n/* checked mark aspect */\r\n\r\n.custom-check[type=\"checkbox\"]:not(:checked)+label:after,\r\n.custom-check[type=\"checkbox\"]:checked+label:after {\r\n    content: '■';\r\n    position: absolute;\r\n    top: 0.01em;\r\n    left: .100em;\r\n    font-size: 2em;\r\n    line-height: 0.61;\r\n    color: #e87722;\r\n    transition: all .2s;\r\n    font-family: Helvetica, Arial, sans-serif;\r\n}\r\n\r\n/* checked mark aspect changes */\r\n\r\n.custom-check[type=\"checkbox\"]:not(:checked)+label:after {\r\n    opacity: 0;\r\n    transform: scale(0);\r\n}\r\n\r\n.custom-check[type=\"checkbox\"]:checked+label:after {\r\n    opacity: 1;\r\n    transform: scale(1);\r\n}\r\n\r\n/* disabled checkbox */\r\n\r\n.custom-check[type=\"checkbox\"]:disabled:not(:checked)+label:before,\r\n.custom-check[type=\"checkbox\"]:disabled:checked+label:before {\r\n    box-shadow: none;\r\n    border-color: #bbb;\r\n    background-color: #ddd;\r\n}\r\n\r\n.custom-check[type=\"checkbox\"]:disabled:checked+label:after {\r\n    color: #999;\r\n}\r\n\r\n.custom-check[type=\"checkbox\"]:disabled+label {\r\n    color: #aaa;\r\n}\r\n\r\n/* accessibility */\r\n\r\n.custom-check[type=\"checkbox\"]:checked:focus+label:before,\r\n.custom-check[type=\"checkbox\"]:not(:checked):focus+label:before {\r\n    border: 2px dotted blue;\r\n}\r\n\r\n/*nskdmk*/\r\n\r\n/* Base for label styling */\r\n\r\n.custom-check1[type=\"checkbox\"]:not(:checked),\r\n.custom-check1[type=\"checkbox\"]:checked {\r\n    position: absolute;\r\n    left: -9999px;\r\n}\r\n\r\n.custom-check1[type=\"checkbox\"]:not(:checked)+label,\r\n.custom-check1[type=\"checkbox\"]:checked+label {\r\n    position: relative;\r\n    padding-left: 1.95em;\r\n    cursor: pointer;\r\n}\r\n\r\n/* checkbox aspect */\r\n\r\n.custom-check1[type=\"checkbox\"]:not(:checked)+label:before,\r\n.custom-check1[type=\"checkbox\"]:checked+label:before {\r\n    content: '';\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    width: 1.60em;\r\n    height: 1.60em;\r\n    border: 2px solid #ccc;\r\n    background: #fff;\r\n    /*border-radius: 4px;*/\r\n    box-shadow: inset 0 1px 3px rgba(0, 0, 0, .1);\r\n}\r\n\r\n/* checked mark aspect */\r\n\r\n.custom-check1[type=\"checkbox\"]:not(:checked)+label:after,\r\n.custom-check1[type=\"checkbox\"]:checked+label:after {\r\n    content: '■';\r\n    position: absolute;\r\n    top: 0.01em;\r\n    left: .100em;\r\n    font-size: 2em;\r\n    line-height: 0.61;\r\n    color: #e87722;\r\n    transition: all .2s;\r\n    font-family: Helvetica, Arial, sans-serif;\r\n}\r\n\r\n/* checked mark aspect changes */\r\n\r\n.custom-check1[type=\"checkbox\"]:not(:checked)+label:after {\r\n    opacity: 0;\r\n    transform: scale(0);\r\n}\r\n\r\n.custom-check1[type=\"checkbox\"]:checked+label:after {\r\n    opacity: 1;\r\n    transform: scale(1);\r\n}\r\n\r\n/* disabled checkbox */\r\n\r\n.custom-check1[type=\"checkbox\"]:disabled:not(:checked)+label:before,\r\n.custom-check1[type=\"checkbox\"]:disabled:checked+label:before {\r\n    box-shadow: none;\r\n    border-color: #bbb;\r\n    background-color: #ddd;\r\n}\r\n\r\n.custom-check1[type=\"checkbox\"]:disabled:checked+label:after {\r\n    color: #999;\r\n}\r\n\r\n.custom-check1[type=\"checkbox\"]:disabled+label {\r\n    color: #aaa;\r\n}\r\n\r\n/* accessibility */\r\n\r\n.custom-check1[type=\"checkbox\"]:checked:focus+label:before,\r\n.custom-check1[type=\"checkbox\"]:not(:checked):focus+label:before {\r\n    border: 2px dotted blue;\r\n}\r\n\r\n/* hover style just for information */\r\n\r\nlabel:hover:before {\r\n    border: 2px solid #4778d9!important;\r\n}\r\n\r\n.success_error {\r\n    color: #20b62d;\r\n}\r\n\r\n.error_pan {\r\n    color: red;\r\n}\r\n\r\n.warning_error {\r\n    color: rgb(255, 211, 26);\r\n}\r\n\r\n.clear-btn {\r\n    outline: none;\r\n    background: #f37021;\r\n    border: none;\r\n    cursor: pointer;\r\n    color: #fff;\r\n    border: 0;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.nxt-btn {\r\n    font-size: 12px;\r\n    padding-top: 12px;\r\n    padding-bottom: 12px;\r\n    padding-right: 35px;\r\n    padding-left: 35px;\r\n    border-radius: 0;\r\n}\r\n\r\n.clear-btn-prnt {\r\n    padding: 0% 10% 0% 13%;\r\n}\r\n\r\n.fatca-style {\r\n    color: #646464;\r\n    margin: 0;\r\n    font-weight: normal;\r\n    cursor: pointer;\r\n    font-family: Nunito-Regular;\r\n}\r\n\r\n.disabledBtn {\r\n    font-size: 12px;\r\n    padding-top: 12px;\r\n    padding-bottom: 12px;\r\n    padding-right: 50px;\r\n    padding-left: 50px;\r\n    border-radius: 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFuL3Bhbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0JBQXdCO0lBQ3hCLFdBQVc7SUFDWCxZQUFZO0lBQ1osMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQix3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLFVBQVU7SUFDVixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLG9CQUFvQjtJQUNwQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjs7QUFFQSxpQkFBaUI7O0FBRWpCO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxZQUFZO0lBQ1osUUFBUTtBQUNaOztBQUNBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsWUFBWTtJQUNaLFFBQVE7SUFDUixjQUFjO0FBQ2xCOztBQUNBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsWUFBWTtJQUNaLFFBQVE7SUFDUixVQUFVO0FBQ2Q7O0FBQ0E7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxZQUFZO0lBQ1osUUFBUTtJQUNSLGFBQWE7QUFDakI7O0FBQ0E7SUFDSTtRQUNJLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsU0FBUztRQUNULG9CQUFvQjtJQUN4QjtJQUNBO1FBQ0ksNEJBQTRCO1FBQzVCLHlCQUF5QjtRQUN6QixpQkFBaUI7SUFDckI7SUFDQTtRQUNJLDRCQUE0QjtRQUM1Qix1QkFBdUI7SUFDM0I7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGdCQUFnQjtRQUNoQixpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGlCQUFpQjtRQUNqQixvQkFBb0I7UUFDcEIsa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLFlBQVk7UUFDWixhQUFhO0lBQ2pCO0lBQ0E7UUFDSSx5QkFBeUI7UUFDekIsNkJBQTZCO1FBQzdCLDhCQUE4QjtJQUNsQztJQUNBO1FBQ0ksdUJBQXVCO0lBQzNCO0lBQ0E7UUFDSSxzQkFBc0I7UUFDdEIsZUFBZTtJQUNuQjtJQUNBO1FBQ0ksK0JBQStCO0lBQ25DO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLG9CQUFvQjtRQUNwQixtQkFBbUI7UUFDbkIsa0JBQWtCO1FBQ2xCLGdCQUFnQjtJQUNwQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSx1QkFBdUI7SUFDM0I7SUFDQTtRQUNJLDRCQUE0QjtRQUM1QixrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLDZCQUE2QjtRQUM3QixrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLDZCQUE2QjtRQUM3QixrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLDZCQUE2QjtRQUM3QixrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLDZCQUE2QjtRQUM3QixrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLFVBQVU7UUFDVixrQkFBa0I7UUFDbEIsU0FBUztRQUNULHVCQUF1QjtRQUN2QixVQUFVO1FBQ1YscUJBQXFCO1FBQ3JCLGVBQWU7UUFDZiwyQkFBMkI7SUFDL0I7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksdUJBQXVCO0lBQzNCO0lBQ0E7UUFDSSw0QkFBNEI7UUFDNUIsa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSw2QkFBNkI7UUFDN0Isa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSw2QkFBNkI7UUFDN0Isa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSw2QkFBNkI7UUFDN0Isa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSw2QkFBNkI7UUFDN0Isa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxVQUFVO1FBQ1Ysa0JBQWtCO1FBQ2xCLFNBQVM7UUFDVCx1QkFBdUI7UUFDdkIsVUFBVTtRQUNWLHFCQUFxQjtRQUNyQixlQUFlO1FBQ2YsMkJBQTJCO0lBQy9CO0FBQ0o7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFlBQVk7SUFDWixVQUFVO0lBQ1YsZUFBZTtJQUNmLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0FBQ2hCOztBQUVBOzs7SUFHSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUdBLDJCQUEyQjs7QUFFM0I7O0lBRUksa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7O0FBRUE7O0lBRUksa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixlQUFlO0FBQ25COztBQUdBLG9CQUFvQjs7QUFFcEI7O0lBRUksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsTUFBTTtJQUNOLGFBQWE7SUFDYixjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsNkNBQTZDO0FBQ2pEOztBQUdBLHdCQUF3Qjs7QUFFeEI7O0lBRUksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsY0FBYztJQUNkLG1CQUFtQjtJQUNuQix5Q0FBeUM7QUFDN0M7O0FBR0EsZ0NBQWdDOztBQUVoQztJQUNJLFVBQVU7SUFDVixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsbUJBQW1CO0FBQ3ZCOztBQUdBLHNCQUFzQjs7QUFFdEI7O0lBRUksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBR0Esa0JBQWtCOztBQUVsQjs7SUFFSSx1QkFBdUI7QUFDM0I7O0FBR0EsU0FBUzs7QUFHVCwyQkFBMkI7O0FBRTNCOztJQUVJLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCOztBQUVBOztJQUVJLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsZUFBZTtBQUNuQjs7QUFHQSxvQkFBb0I7O0FBRXBCOztJQUVJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLE1BQU07SUFDTixhQUFhO0lBQ2IsY0FBYztJQUNkLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLDZDQUE2QztBQUNqRDs7QUFHQSx3QkFBd0I7O0FBRXhCOztJQUVJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIseUNBQXlDO0FBQzdDOztBQUdBLGdDQUFnQzs7QUFFaEM7SUFDSSxVQUFVO0lBQ1YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLG1CQUFtQjtBQUN2Qjs7QUFHQSxzQkFBc0I7O0FBRXRCOztJQUVJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUdBLGtCQUFrQjs7QUFFbEI7O0lBRUksdUJBQXVCO0FBQzNCOztBQUdBLHFDQUFxQzs7QUFFckM7SUFDSSxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZUFBZTtJQUNmLFdBQVc7SUFDWCxTQUFTO0lBQ1QseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsU0FBUztJQUNULG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9wYW4vcGFuLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dFt0eXBlPSdyYWRpbyddIHtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZGFya2dyYXk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxuICAgIG1hcmdpbi1yaWdodDogMSU7XHJcbiAgICAvKiBib3gtc2hhZG93OiAwIDAgNXB4IDBweCBncmF5IGluc2V0OyAqL1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPSdyYWRpbyddOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggMHB4ICNmMzcwMjEgaW5zZXQ7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9J3JhZGlvJ106YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogNTUlO1xyXG4gICAgaGVpZ2h0OiA1OSU7XHJcbiAgICBtYXJnaW46IDIwJSBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPSdyYWRpbyddOmNoZWNrZWQ6YmVmb3JlIHtcclxuICAgIGJhY2tncm91bmQ6ICNmMzcwMjE7XHJcbn1cclxuXHJcbi5pbnB1dENvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAzJSAwIDA7XHJcbn1cclxuXHJcbi5lcnJvcl9jb2xvciB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgLyogcGFkZGluZy10b3A6IDEycHg7ICovXHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuXHJcbi5lcnJvcl9jb2xvciAuZXJyb3JfaW1nIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmVycm9yX2NvbG9yIC5lcnJvcl90ZXh0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgICBmb250LWZhbWlseTogTnVuaXRvLVJlZ3VsYXI7XHJcbn1cclxuXHJcbi5leGFtcGxlLWgyIHtcclxuICAgIG1hcmdpbjogMTBweDtcclxufVxyXG5cclxuLmV4YW1wbGUtc2VjdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogNjBweDtcclxufVxyXG5cclxuLmV4YW1wbGUtbWFyZ2luIHt9XHJcblxyXG4uYW5udWFsLXNsaWRlciB7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbi5mYXRjYV9pbm5lciB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE0cHg7XHJcbn1cclxuXHJcbi5vY2N1cGF0aW9uX2Vycm9yIHtcclxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxufVxyXG5cclxuLnN0eWxpbmdfZXJyb3Ige1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxufVxyXG5cclxuLnN0eWxpbmdfZXJyb3JfcGFuIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiA0JTtcclxuICAgIGJvdHRvbTogNDVweDtcclxuICAgIHRvcDogMXB4O1xyXG59XHJcbi5zdHlsaW5nX2Vycm9yX3BhbjF7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogNCU7XHJcbiAgICBib3R0b206IDQ1cHg7XHJcbiAgICB0b3A6IDFweDtcclxuICAgIGNvbG9yOiAjMjBiNjJkO1xyXG59XHJcbi5zdHlsaW5nX2Vycm9yX3BhbjJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogNCU7XHJcbiAgICBib3R0b206IDQ1cHg7XHJcbiAgICB0b3A6IDFweDtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuLnN0eWxpbmdfZXJyb3JfcGFuM3tcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiA0JTtcclxuICAgIGJvdHRvbTogNDVweDtcclxuICAgIHRvcDogMXB4O1xyXG4gICAgY29sb3I6IG9yYW5nZTtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgLnN0eWxpbmdfZXJyb3JfcGFuIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiA0JTtcclxuICAgICAgICB0b3A6IC01cHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5zdHlsaW5nX2Vycm9yIHtcclxuICAgICAgICBwb3NpdGlvbjogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHJpZ2h0OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgICAuZXJyb3JfY29sb3IgLmVycm9yX3RleHQge1xyXG4gICAgICAgIHBvc2l0aW9uOiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdG9wOiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAub2NjdXBhdGlvbl9lcnJvciB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgfVxyXG4gICAgLmZhdGNhX2lubmVyIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNHB4O1xyXG4gICAgfVxyXG4gICAgLmJ1dHRvbl9hbGlnbmVkX21vYmlsZSB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmZhdGNhX291dGVyIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTAlO1xyXG4gICAgfVxyXG4gICAgLmFubnVhbC1zbGlkZXIge1xyXG4gICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgfVxyXG4gICAgLm1haW5Db250ZW50IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA4JSAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMTVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogLTE1cHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5tYXQtc2xpZGVyLWhvcml6b250YWwge1xyXG4gICAgICAgIHdpZHRoOiA3MDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLnJlbGF0aW9uX3NlbGVjdCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICB9XHJcbiAgICAud2lkdGgtc3R5bGUge1xyXG4gICAgICAgIC8qIHdpZHRoOiBpbmhlcml0ICFpbXBvcnRhbnQ7ICovXHJcbiAgICB9XHJcbiAgICAuZGlzYWJsZWRCdG4ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTJweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNTBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3OTJweCkge1xyXG4gICAgLm1hdC1zbGlkZXItaG9yaXpvbnRhbCB7XHJcbiAgICAgICAgd2lkdGg6IDQwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAubGFiZWwxIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5sYWJlbDIge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNjBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5sYWJlbDMge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNjVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5sYWJlbDQge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNjVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5sYWJlbDUge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5zbGlkZXJfYm90dG9tIHVsIHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDUwcHg7XHJcbiAgICAgICAgd2lkdGg6IDQzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbGVmdDogMTBweDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBOdW5pdG8tUmVndWxhcjtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcclxuICAgIC5tYXQtc2xpZGVyLWhvcml6b250YWwge1xyXG4gICAgICAgIHdpZHRoOiAzMDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmxhYmVsMSB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAubGFiZWwyIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDM1cHggIWltcG9ydGFudDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAubGFiZWwzIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDQycHggIWltcG9ydGFudDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAubGFiZWw0IHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDM1cHggIWltcG9ydGFudDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAubGFiZWw1IHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDI1cHggIWltcG9ydGFudDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuc2xpZGVyX2JvdHRvbSB1bCB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA1MHB4O1xyXG4gICAgICAgIHdpZHRoOiAzMzBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGxlZnQ6IDEwcHg7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBmb250LWZhbWlseTogTnVuaXRvLVJlZ3VsYXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5sYWJlbDEge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sYWJlbDIge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmxhYmVsMyB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE0MnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubGFiZWw0IHtcclxuICAgIHBhZGRpbmctbGVmdDogMTQwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sYWJlbDUge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMzBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm1hdC1zbGlkZXItaG9yaXpvbnRhbCB7XHJcbiAgICB3aWR0aDogNzAwcHg7XHJcbn1cclxuXHJcbi5tYXQtc2xpZGVyLXZlcnRpY2FsIHtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbn1cclxuXHJcbi5zbGlkZXJfYm90dG9tIHVsIGxpIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuLnNsaWRlcl9ib3R0b20gdWwge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTBweDtcclxuICAgIHdpZHRoOiA3NDVweDtcclxuICAgIGxlZnQ6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LWZhbWlseTogTnVuaXRvLVJlZ3VsYXI7XHJcbn1cclxuXHJcbi5yZWxhdGlvbl9zZWxlY3Qge1xyXG4gICAgd2lkdGg6IDQ3JTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLm1hdC1hY2NlbnQgLm1hdC1zbGlkZXItdGh1bWIsXHJcbi5tYXQtYWNjZW50IC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLFxyXG4ubWF0LWFjY2VudCAubWF0LXNsaWRlci10cmFjay1maWxsIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMzcwMjE7XHJcbn1cclxuXHJcbi53aWR0aC1zdHlsZSB7XHJcbiAgICB3aWR0aDogNC4zMyU7XHJcbn1cclxuXHJcblxyXG4vKiBCYXNlIGZvciBsYWJlbCBzdHlsaW5nICovXHJcblxyXG4uY3VzdG9tLWNoZWNrW3R5cGU9XCJjaGVja2JveFwiXTpub3QoOmNoZWNrZWQpLFxyXG4uY3VzdG9tLWNoZWNrW3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IC05OTk5cHg7XHJcbn1cclxuXHJcbi5jdXN0b20tY2hlY2tbdHlwZT1cImNoZWNrYm94XCJdOm5vdCg6Y2hlY2tlZCkrbGFiZWwsXHJcbi5jdXN0b20tY2hlY2tbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQrbGFiZWwge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxLjk1ZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcblxyXG4vKiBjaGVja2JveCBhc3BlY3QgKi9cclxuXHJcbi5jdXN0b20tY2hlY2tbdHlwZT1cImNoZWNrYm94XCJdOm5vdCg6Y2hlY2tlZCkrbGFiZWw6YmVmb3JlLFxyXG4uY3VzdG9tLWNoZWNrW3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkK2xhYmVsOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMS42MGVtO1xyXG4gICAgaGVpZ2h0OiAxLjYwZW07XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjY2NjO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIC8qYm9yZGVyLXJhZGl1czogNHB4OyovXHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAuMSk7XHJcbn1cclxuXHJcblxyXG4vKiBjaGVja2VkIG1hcmsgYXNwZWN0ICovXHJcblxyXG4uY3VzdG9tLWNoZWNrW3R5cGU9XCJjaGVja2JveFwiXTpub3QoOmNoZWNrZWQpK2xhYmVsOmFmdGVyLFxyXG4uY3VzdG9tLWNoZWNrW3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkK2xhYmVsOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICfilqAnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwLjAxZW07XHJcbiAgICBsZWZ0OiAuMTAwZW07XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAwLjYxO1xyXG4gICAgY29sb3I6ICNlODc3MjI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzO1xyXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcblxyXG4vKiBjaGVja2VkIG1hcmsgYXNwZWN0IGNoYW5nZXMgKi9cclxuXHJcbi5jdXN0b20tY2hlY2tbdHlwZT1cImNoZWNrYm94XCJdOm5vdCg6Y2hlY2tlZCkrbGFiZWw6YWZ0ZXIge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbn1cclxuXHJcbi5jdXN0b20tY2hlY2tbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQrbGFiZWw6YWZ0ZXIge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbn1cclxuXHJcblxyXG4vKiBkaXNhYmxlZCBjaGVja2JveCAqL1xyXG5cclxuLmN1c3RvbS1jaGVja1t0eXBlPVwiY2hlY2tib3hcIl06ZGlzYWJsZWQ6bm90KDpjaGVja2VkKStsYWJlbDpiZWZvcmUsXHJcbi5jdXN0b20tY2hlY2tbdHlwZT1cImNoZWNrYm94XCJdOmRpc2FibGVkOmNoZWNrZWQrbGFiZWw6YmVmb3JlIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBib3JkZXItY29sb3I6ICNiYmI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG59XHJcblxyXG4uY3VzdG9tLWNoZWNrW3R5cGU9XCJjaGVja2JveFwiXTpkaXNhYmxlZDpjaGVja2VkK2xhYmVsOmFmdGVyIHtcclxuICAgIGNvbG9yOiAjOTk5O1xyXG59XHJcblxyXG4uY3VzdG9tLWNoZWNrW3R5cGU9XCJjaGVja2JveFwiXTpkaXNhYmxlZCtsYWJlbCB7XHJcbiAgICBjb2xvcjogI2FhYTtcclxufVxyXG5cclxuXHJcbi8qIGFjY2Vzc2liaWxpdHkgKi9cclxuXHJcbi5jdXN0b20tY2hlY2tbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQ6Zm9jdXMrbGFiZWw6YmVmb3JlLFxyXG4uY3VzdG9tLWNoZWNrW3R5cGU9XCJjaGVja2JveFwiXTpub3QoOmNoZWNrZWQpOmZvY3VzK2xhYmVsOmJlZm9yZSB7XHJcbiAgICBib3JkZXI6IDJweCBkb3R0ZWQgYmx1ZTtcclxufVxyXG5cclxuXHJcbi8qbnNrZG1rKi9cclxuXHJcblxyXG4vKiBCYXNlIGZvciBsYWJlbCBzdHlsaW5nICovXHJcblxyXG4uY3VzdG9tLWNoZWNrMVt0eXBlPVwiY2hlY2tib3hcIl06bm90KDpjaGVja2VkKSxcclxuLmN1c3RvbS1jaGVjazFbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogLTk5OTlweDtcclxufVxyXG5cclxuLmN1c3RvbS1jaGVjazFbdHlwZT1cImNoZWNrYm94XCJdOm5vdCg6Y2hlY2tlZCkrbGFiZWwsXHJcbi5jdXN0b20tY2hlY2sxW3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkK2xhYmVsIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctbGVmdDogMS45NWVtO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5cclxuLyogY2hlY2tib3ggYXNwZWN0ICovXHJcblxyXG4uY3VzdG9tLWNoZWNrMVt0eXBlPVwiY2hlY2tib3hcIl06bm90KDpjaGVja2VkKStsYWJlbDpiZWZvcmUsXHJcbi5jdXN0b20tY2hlY2sxW3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkK2xhYmVsOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMS42MGVtO1xyXG4gICAgaGVpZ2h0OiAxLjYwZW07XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjY2NjO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIC8qYm9yZGVyLXJhZGl1czogNHB4OyovXHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAuMSk7XHJcbn1cclxuXHJcblxyXG4vKiBjaGVja2VkIG1hcmsgYXNwZWN0ICovXHJcblxyXG4uY3VzdG9tLWNoZWNrMVt0eXBlPVwiY2hlY2tib3hcIl06bm90KDpjaGVja2VkKStsYWJlbDphZnRlcixcclxuLmN1c3RvbS1jaGVjazFbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQrbGFiZWw6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJ+KWoCc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDAuMDFlbTtcclxuICAgIGxlZnQ6IC4xMDBlbTtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDAuNjE7XHJcbiAgICBjb2xvcjogI2U4NzcyMjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMnM7XHJcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuXHJcbi8qIGNoZWNrZWQgbWFyayBhc3BlY3QgY2hhbmdlcyAqL1xyXG5cclxuLmN1c3RvbS1jaGVjazFbdHlwZT1cImNoZWNrYm94XCJdOm5vdCg6Y2hlY2tlZCkrbGFiZWw6YWZ0ZXIge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbn1cclxuXHJcbi5jdXN0b20tY2hlY2sxW3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkK2xhYmVsOmFmdGVyIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG59XHJcblxyXG5cclxuLyogZGlzYWJsZWQgY2hlY2tib3ggKi9cclxuXHJcbi5jdXN0b20tY2hlY2sxW3R5cGU9XCJjaGVja2JveFwiXTpkaXNhYmxlZDpub3QoOmNoZWNrZWQpK2xhYmVsOmJlZm9yZSxcclxuLmN1c3RvbS1jaGVjazFbdHlwZT1cImNoZWNrYm94XCJdOmRpc2FibGVkOmNoZWNrZWQrbGFiZWw6YmVmb3JlIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBib3JkZXItY29sb3I6ICNiYmI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG59XHJcblxyXG4uY3VzdG9tLWNoZWNrMVt0eXBlPVwiY2hlY2tib3hcIl06ZGlzYWJsZWQ6Y2hlY2tlZCtsYWJlbDphZnRlciB7XHJcbiAgICBjb2xvcjogIzk5OTtcclxufVxyXG5cclxuLmN1c3RvbS1jaGVjazFbdHlwZT1cImNoZWNrYm94XCJdOmRpc2FibGVkK2xhYmVsIHtcclxuICAgIGNvbG9yOiAjYWFhO1xyXG59XHJcblxyXG5cclxuLyogYWNjZXNzaWJpbGl0eSAqL1xyXG5cclxuLmN1c3RvbS1jaGVjazFbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQ6Zm9jdXMrbGFiZWw6YmVmb3JlLFxyXG4uY3VzdG9tLWNoZWNrMVt0eXBlPVwiY2hlY2tib3hcIl06bm90KDpjaGVja2VkKTpmb2N1cytsYWJlbDpiZWZvcmUge1xyXG4gICAgYm9yZGVyOiAycHggZG90dGVkIGJsdWU7XHJcbn1cclxuXHJcblxyXG4vKiBob3ZlciBzdHlsZSBqdXN0IGZvciBpbmZvcm1hdGlvbiAqL1xyXG5cclxubGFiZWw6aG92ZXI6YmVmb3JlIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM0Nzc4ZDkhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc3VjY2Vzc19lcnJvciB7XHJcbiAgICBjb2xvcjogIzIwYjYyZDtcclxufVxyXG5cclxuLmVycm9yX3BhbiB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4ud2FybmluZ19lcnJvciB7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjExLCAyNik7XHJcbn1cclxuXHJcbi5jbGVhci1idG4ge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6ICNmMzcwMjE7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5ueHQtYnRuIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHBhZGRpbmctdG9wOiAxMnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEycHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxufVxyXG5cclxuLmNsZWFyLWJ0bi1wcm50IHtcclxuICAgIHBhZGRpbmc6IDAlIDEwJSAwJSAxMyU7XHJcbn1cclxuXHJcbi5mYXRjYS1zdHlsZSB7XHJcbiAgICBjb2xvcjogIzY0NjQ2NDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogTnVuaXRvLVJlZ3VsYXI7XHJcbn1cclxuXHJcbi5kaXNhYmxlZEJ0biB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTJweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcclxuICAgIHBhZGRpbmctbGVmdDogNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/pan/pan.component.ts": 
        /*!**************************************!*\
          !*** ./src/app/pan/pan.component.ts ***!
          \**************************************/
        /*! exports provided: PanComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanComponent", function () { return PanComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _shared_loader_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/loader/loader.service */ "./src/app/shared/loader/loader.service.ts");
            /* harmony import */ var _shared_dialogue_dialogue_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/dialogue/dialogue.service */ "./src/app/shared/dialogue/dialogue.service.ts");
            /* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _shared_activate_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/activate.module */ "./src/app/shared/activate.module.ts");
            /* harmony import */ var _mobile_mobile_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../mobile/mobile.service */ "./src/app/mobile/mobile.service.ts");
            /* harmony import */ var rxjs_add_operator_take__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/add/operator/take */ "./node_modules/rxjs-compat/_esm2015/add/operator/take.js");
            /* harmony import */ var rxjs_add_observable_timer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/add/observable/timer */ "./node_modules/rxjs-compat/_esm2015/add/observable/timer.js");
            /* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _shared_progress_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/progress.service */ "./src/app/shared/progress.service.ts");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _shared_screen_name__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shared/screen.name */ "./src/app/shared/screen.name.ts");
            //import { MatSliderModule } from '@angular/material';
            //import { MatSliderModule } from '@angular/material/slider';
            var PanComponent = /** @class */ (function () {
                function PanComponent(appLoader, 
                //private _service:panService,
                _appservice, formbuilder, dialogueservice, router, progressService, location, locationurl, guardService, nameService, mobService) {
                    this.appLoader = appLoader;
                    this._appservice = _appservice;
                    this.formbuilder = formbuilder;
                    this.dialogueservice = dialogueservice;
                    this.router = router;
                    this.progressService = progressService;
                    this.location = location;
                    this.locationurl = locationurl;
                    this.guardService = guardService;
                    this.nameService = nameService;
                    this.mobService = mobService;
                    this.autoTicks = true;
                    this.disabled = false;
                    this.invert = false;
                    this.max = 8;
                    this.min = 0;
                    this.showTicks = true;
                    this.step = 2;
                    this.thumbLabel = false;
                    this.value = 0;
                    this.vertical = false;
                    this.checkValidatePan = true;
                    this.pan_loader = false;
                    this.success_loader = false;
                    this.error_loader = false;
                    this.warning_laoder = false;
                    this.selectedValue = {
                        occupation: ''
                    };
                    this.panPattern = '[A-Za-z]{5}[0-9]{4}[A-Za-z]{1}'; // pan verification regex
                    // this.pan_required = this._appservice.getMessageMaster('000003');
                    // this.occuption_required = this._appservice.getMessageMaster('000003');
                    // this.pan_validated_msg = this._appservice.getMessageMaster('000002');
                    // this.fatca_declaration = this._appservice.getMessageMaster('0013');
                    // this.masterData = this._appservice.getMasterData();
                    // this.occ_required = this._appservice.getMessageMaster('026'); /*Msg master*/
                    // this.SSN_name = this.masterData['AOF']['DATA']['PSNL_DTL']['FULL_NAME'];
                    // // sudha starts here //
                    // this.SSN_gender = this.masterData['AOF']['DATA']['PSNL_DTL']['GENDER']['VALUE'];
                    // // sudha ends here  //
                    // // console.log(this.SSN_gender);
                    // // this.SSN_name = '';
                    // // console.log(this.SSN_name);
                    // // console.log(this.masterData);
                    this.createForm();
                    // window.onbeforeunload = function (e) {
                    //   return 'Dialog text here.';
                    // };
                    // location.onPopState((e) => {
                    //   // console.log(e);
                    //   locationurl.go('/mobile');
                    //   // window.onbeforeunload = function(e) {
                    //   //   return 'Dialog text here.';
                    //   // };
                    //   //  let  stayOnPage = confirm("Would you like to save this draft?");
                    //   //  //history.pushState(null, null, null);
                    //   //  if (stayOnPage){ 
                    //   //   locationurl.go('/mobile');
                    //   //    } 
                    //   //  else { 
                    //   //   //window.history.go(-1);
                    //   //   this.router.navigate(['/pan']);
                    //   //   //  locationurl.go('/pan');
                    //   //  // locationurl.go('-1');
                    //   //  // history.pushState(null, null, 'pan');
                    //   //    } 
                    //   // console.log('pressed back!');
                    // });
                }
                // @HostListener('window:beforeunload', ['$event'])
                // doSomething($event) {
                //   // console.log($event);
                //  //  $event.returnValue='Your data will be lost!';
                //    var dialogText = 'Dialog text here';
                //    $event.returnValue = dialogText;
                //    return dialogText;
                // }
                PanComponent.prototype.createForm = function () {
                    if (false) { }
                    else if (false) { }
                    else if (false) { }
                    else if (false) { }
                    else if (false) { }
                    else {
                        this.myForm = this.formbuilder.group({
                            panNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].minLength(3)
                                ]],
                            occupation: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required]],
                            annual_income: [0],
                            fatca: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].requiredTrue],
                            agree_check: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].requiredTrue]
                        });
                    }
                };
                //  hasExclamationMark( classcomponent, input?: FormControl ) {
                //   return classcomponent ? null : { needsExclamation: true };
                // }
                PanComponent.prototype.ngOnInit = function () {
                    // //   const REQ_DATA = [
                    // //     {
                    // //       processName: "GETMASTERDATA",
                    // //       data: [
                    // //         {
                    // //           "X_TYPE": "OCCUPATION",
                    // //           "X_VERSION": "0"
                    // //         }
                    // //       ]
                    // //     }
                    // //   ];
                    // //   this.appLoader.showLoader('');
                    // //   this._service.fetchOccuption(REQ_DATA).subscribe(users => {
                    var user_registration = {
                        screen1: {
                            isActive: "YES",
                            isComplete: false,
                            loading: 75,
                        },
                        screen2: {
                            isActive: "NO",
                            isComplete: false,
                            loading: 0,
                        },
                        screen3: {
                            isActive: "NO",
                            isComplete: false,
                            loading: 0,
                        },
                        screen4: {
                            isActive: "NO",
                            isComplete: false,
                            loading: 0,
                        }
                    };
                    this.nameService.setName('Income Details');
                    this.progressService.setLoaderWidth(user_registration);
                };
                //     this.appLoader.hideLoader();
                // //     this.occupation = JSON.parse(users[0]['data_object']);
                // //     // ************ Sudha Priya starts Here *************   //
                // //   //  console.log(this.occupation);
                // //     if(this.SSN_gender === 'M') {
                // //       for(var i =0; i<this.occupation.length; i++) {
                // //         if (this.occupation[i]['code'] === "Housewife") {
                // //           this.occupation.splice(i, 1);
                // //         }
                // //     }
                // //     }
                // //     // **********  Sudha Ends Here ******************  //
                // //  //   console.log(this.occupation);
                // //     this.occupation_sorted = new OrderByPipe().transform(
                // //       this.occupation,
                // //       'sequence'
                // //     );
                // //  //   console.log(this.occupation_sorted);
                // //     //// console.log(JSON.parse(users[0]['data_object']));
                // //     //// console.log(this.selectedValue);
                // //   })
                // //     this.selectedValue.occupation = this.masterData['AOF']['DATA']['IT_DTL']['OCCUPATION']['VALUE'];
                // //     this.value = this.masterData['AOF']['DATA']['IT_DTL']['ANNUAL_INCOME']['VALUE'];
                // //     this.fatca_desc = this.masterData['AOF']['DATA']['IT_DTL']['FATCA_DECLARATION']['VALUE'];
                // //     this.pan_num = this.masterData['AOF']['DATA']['IT_DTL']['PAN_NO']['VALUE'];
                // //     this.pan_name = this.masterData['AOF']['DATA']['IT_DTL']['PAN_NO']['PAN_NAME'];
                //     }
                // clearPanData() {
                //   this.myForm.controls['panNumber'].setValue('');
                // }
                // verifyPan(event: any, button_clicked) {
                //   this.success_loader = false;
                //   this.error_loader = false;
                //   this.warning_laoder = false;
                //   this.pan_loader = false;
                //   this.name = '';
                //     if (event.value.length === 10) {
                //       const pattern = /[A-Za-z]{5}[0-9]{4}[A-Za-z]{1}/; // pan verification regex
                //       if (!pattern.test(event.value)) {
                //         return true;
                //       }
                //       // console.log(this.myForm.get('panNumber').valid);
                //       event.value = event.value.toUpperCase();
                //       this.pan_number = event.value;
                //       if(this.pan_name=="" || this.pan_number!=this.masterData['AOF']['DATA']['IT_DTL']['PAN_NO']['VALUE']){
                //         const REQ_DATA = [
                //           {
                //             processName: "VERIFYPAN",
                //             data: [
                //               {
                //                 "request_json": JSON.stringify({
                //                   "pan_id": event.value,
                //                   "ref_input_2": this.masterData['AOF']['KEYS']['MEMBER_ID'],
                //                   "ref_input_1": this.masterData['AOF']['KEYS']['AOF_ID'],
                //                   "ref_input_3": this.masterData['AOF']['KEYS']['LEAD_ID'],
                //                   "customer_id": "123456",
                //                   "request_id": "8072658285"
                //                 })
                //               }
                //             ]
                //           }
                //         ];
                //         this.pan_loader = true;
                //         // this.appLoader.showLoader('Validating Mobile Number');
                //         this._service.verifyPan(REQ_DATA).subscribe(users => {
                //           let response = JSON.parse(users);
                //           console.log(response.response);
                //           console.log(JSON.parse(response.response).result);
                //           if (response['response_type'] === 'I' && response['process_status'].toUpperCase() === 'SUCCESS') {
                //             let response_msg = JSON.parse(response['response']);
                //             response_msg = JSON.parse(response_msg['result']);
                //             if (response_msg['Middle-Name'] !== '') {
                //               this.pan_full_name = response_msg['First-Name'] + ' ' + response_msg['Middle-Name'] + ' ' + response_msg['Last-Name']
                //             }
                //             else {
                //               this.pan_full_name = response_msg['First-Name'] + ' ' + response_msg['Last-Name']
                //             }
                //             const REQ_DATA = [
                //               {
                //                 processName: "SPTBGETPANADHRNAMEMATCH",
                //                 data: [
                //                   {
                //                     "X_PAN_NAME": this.pan_full_name,
                //                     "X_MOBILE_NO": "",
                //                     "X_SSN_NAME": this.SSN_name['VALUE']
                //                   }
                //                 ]
                //               }
                //             ];
                //             // const REQ_DATA = [
                //             //   {
                //             //     processName: "SPTBGETPANADHRNAMEMATCH",
                //             //     data: [
                //             //       {
                //             //         "X_PAN_NAME": "Kunal",
                //             //         "X_MOBILE_NO": "9587855885",
                //             //         "X_SSN_NAME": "kunal"
                //             //       }
                //             //     ]
                //             //   }
                //             // ];
                //             this._service.verifyMatch(REQ_DATA).subscribe(users => {
                //               try {
                //                 this.pan_loader = false;
                //                 let response_verify = users[0];
                //                 // console.log(response_verify);
                //                 this.pan_response_type = response_verify['response_type'].toUpperCase();
                //                 if (response_verify['response_type'].toUpperCase() === 'I') {
                //                   this.checkValidatePan = false;
                //                   this.success_loader = true;
                //                   this.error_loader = false;
                //                   this.warning_laoder = false;
                //                   this.name = this.pan_full_name;
                //                   //  this.name = response_msg['First-Name'] + ' ' + response_msg['Last-Name'];
                //                 }
                //                 else if (response_verify['response_type'].toUpperCase() === 'W') {
                //                   this.checkValidatePan = false;
                //                   this.warning_laoder = true;
                //                   this.success_loader = false;
                //                   this.error_loader = false;
                //                   let response_msg_match = JSON.parse(response_verify['response_message']);
                //                   let message = this._appservice.getMessageMaster('' + response_verify['response_code'] + '');
                //                   if (!message) {
                //                     message = response_msg_match['RESPONSE_MESSAGE'] || "Message Key Not Found..!!!";
                //                   }
                //                   this.pan_loader = false;
                //                   this.name = this.pan_full_name;
                //                   this.dialogueservice.alertBox({
                //                     title: 'Warning',
                //                     message: message,
                //                     messageType: 'error',
                //                     actionlabel: ['Close']
                //                   }).take(1).subscribe((res) => {
                //                     // console.log(res);
                //                   })
                //                 }
                //                 else {
                //                   dataLayer.push({
                //                     'url': '/vpv/sa-abhi/userregistration/panerror',
                //                     'event': 'SA_PANError',
                //                     })
                //                   this.checkValidatePan = true;
                //                   this.error_loader = true;
                //                   this.success_loader = false;
                //                   this.warning_laoder = false;
                //                   this.pan_loader = false;
                //                   let response_msg_match = JSON.parse(response_verify['response_message']);
                //                   let message = this._appservice.getMessageMaster('' + response_verify['response_code'] + '');
                //                   if (!message) {
                //                     message = response_msg_match['RESPONSE_MESSAGE'] || "Message Key Not Found..!!!";
                //                   }
                //                   this.name = message;
                //                 }
                //                 this.pan_loader = false;
                //               }
                //               catch (error) {
                //                 this.appLoader.hideLoader();
                //                 this.dialogueservice.alertBox({
                //                   title: 'Error',
                //                   message: this._appservice.getCatchmsg(),
                //                   messageType: 'error',
                //                   actionlabel: ['Close']
                //                 }).take(1).subscribe((res) => {
                //                   this.router.navigate(['/mobile']);
                //                 })
                //               }
                //             })
                //             // this.success_loader = true;
                //             // this.error_loader = false;
                //             // console.log(response_msg);
                //           }
                //           else {
                //             dataLayer.push({
                //               'url': '/vpv/sa-abhi/userregistration/panerror',
                //               'event': 'SA_PANError',
                //               })
                //             this.pan_loader = false;
                //             this.success_loader = false;
                //             let response_msg_pan = response['response_message'];
                //             // let message = this._appservice.getMessageMaster('' + response['message_code'] + '');
                //             // if (!message) {
                //             //   message = "Message Key Not Found..!!!";
                //             // }
                //             this.dialogueservice.alertBox({
                //               title: 'Error',
                //               message: response_msg_pan,
                //               messageType: 'error',
                //               actionlabel: ['Close']
                //             }).take(1).subscribe((res) => {
                //               // console.log(res);
                //             })
                //           }
                //           // console.log(JSON.parse(users));
                //           // this.appLoader.hideLoader();
                //         })
                //       }
                //       else{
                //         this.name = this.pan_name;
                //         if(this.masterData['AOF']['DATA'].SSN_PAN_NAME_CHECK.toUpperCase() === "W"){
                //           this.pan_response_type='W';
                //           this.warning_laoder = true;
                //           this.success_loader = false;
                //           this.error_loader = false;
                //           this.pan_loader = false;
                //           this.checkValidatePan = false;
                //         }
                //         else if(this.masterData['AOF']['DATA'].SSN_PAN_NAME_CHECK.toUpperCase() === "I"){
                //           this.pan_response_type='I';
                //           this.success_loader = true;
                //          this.error_loader = false;
                //          this.warning_laoder = false;
                //           this.pan_loader = false;
                //           this.checkValidatePan = false;
                //         }
                //         else{
                //           this.pan_response_type='E';
                //           this.error_loader = true;
                //           this.success_loader = false;
                //           this.warning_laoder = false;
                //           this.pan_loader = false;
                //           this.checkValidatePan = false;
                //         }
                //       }
                //     }
                // }
                // check_annual_income(key) {
                //   switch (key) {
                //     case 0:
                //       this.annual_income_value = "50K or below";
                //       break;
                //     case 2:
                //       this.annual_income_value = "50K to 1 Lac";
                //       break;
                //     case 4:
                //       this.annual_income_value = "1 Lac to 5 Lac";
                //       break;
                //     case 6:
                //       this.annual_income_value = "5 Lac to 10 Lac";
                //       break;
                //     case 8:
                //       this.annual_income_value = "10 Lac <";
                //       break;
                //     default:
                //       break;
                //   }
                // }
                PanComponent.prototype.submitForm = function () {
                    this.ssnUserData = this._appservice.getSsnData();
                    this.ssnUserData.taxationId = this.pan_num;
                    this.ssnUserData.occupation = this.selectedValue.occupation;
                    this.ssnUserData.annualIncome = this.annualIncome;
                    this._appservice.setSsnData(this.ssnUserData);
                    // this.mobService.PersonalformData
                    //   (this.ssnUserData)
                    //   .subscribe(resp => {
                    //     console.log(resp)
                    //     //return this.spresp.push(resp);
                    //     if (resp) {
                    //       console.log(resp)
                    //     }
                    this.router.navigate(['/nomineeDetails']);
                    // })
                };
                //   if (this.checkValidatePan) {
                //     this.dialogueservice.alertBox({
                //       title: 'Error',
                //       message: 'Please Enter Valid Pan',
                //       messageType: 'error',
                //       actionlabel: ['Close']
                //     }).take(1).subscribe((res) => {
                //       // console.log(res);
                //     })
                //     return;
                //   }
                //   if(this.masterData['AOF']['DATA']['IT_DTL']['ANNUAL_INCOME']['VALUE'] == "50K or below"){
                //     this.value=0;
                //   }else if(this.masterData['AOF']['DATA']['IT_DTL']['ANNUAL_INCOME']['VALUE'] == "50K to 1 Lac"){
                //     this.value=2;
                //   }else if(this.masterData['AOF']['DATA']['IT_DTL']['ANNUAL_INCOME']['VALUE'] == "1 Lac to 5 Lac"){
                //     this.value=4;
                //   }else if(this.masterData['AOF']['DATA']['IT_DTL']['ANNUAL_INCOME']['VALUE'] == "5 Lac to 10 Lac"){
                //     this.value=6;
                //   }else if(this.masterData['AOF']['DATA']['IT_DTL']['ANNUAL_INCOME']['VALUE'] == "10 Lac <"){
                //     this.value = 8;
                //   }
                //   this.check_annual_income(this.value);
                //   this.masterData = this._appservice.getMasterData();
                //   let SSN_address = this.masterData['AOF']['DATA']['ADDRESS'][0]
                //  // ** if (SSN_address['ADR_TYPE'].toUpperCase() === "PERMANENT") { }
                //   this.SSN_number = this.masterData['AOF']['DATA']['SSN']['ADHR_NO'];
                //   let SSN_pin = SSN_address['PIN_CODE']['value'];
                //   let SSN_city = SSN_address['CITY_CODE']['value'];
                //   let SSN_country = SSN_address['COUNTRY']['value'];
                //   let lead_id = this.masterData['AOF']['DATA']['MOBILE']['MOB_NO'];
                //   // ** let name_SSN_aml = this.masterData['AOF']['DATA']['PSNL_DTL']['FULL_NAME'];
                //   const REQ_DATA = [
                //     {
                //       processName: "CHECKAML",
                //       data: [
                //         {
                //           "request_json": JSON.stringify({
                //             "name": this.SSN_full_name,
                //             "customer_id": "5606211222",
                //             "type": "Personal",
                //             "lead_id": lead_id,
                //             "country": SSN_country,
                //             "city": SSN_city,
                //             "postal_code": SSN_pin,
                //             "ref_input_1": "A"+""+lead_id,
                //             "ref_input_2": "A"+""+lead_id,
                //             "ref_input_3": "A"+""+lead_id
                //           })
                //         }
                //       ]
                //     }
                //   ];
                //   this.appLoader.showLoader(this._appservice.getMessageMaster('000001221'));
                //   this._service.CheckAML(REQ_DATA).subscribe(users => {
                //     try {
                //       let res_json = JSON.parse(users);
                //       if (res_json['process_status'].toUpperCase() === 'SUCCESS') {
                //         let response_status = JSON.parse(res_json['response']);
                //         const REQ_DATA = [
                //           {
                //             processName: "CHECKDEDUPE",
                //             data: [
                //               {
                //                 "request_json": JSON.stringify({
                //                   "ref_input_1": this.masterData['AOF']['KEYS']['AOF_ID'],
                //                   "ref_input_2": this.masterData['AOF']['KEYS']['MEMBER_ID'],
                //                   "ref_input_3": this.masterData['AOF']['KEYS']['LEAD_ID'],
                //                   "branch_code": "2404",
                //                   "SSN_number": this.SSN_number,
                //                   "pan": this.pan_number,
                //                   "request_id": this._appservice.randomString(10)
                //                 })
                //               }
                //             ]
                //           }
                //         ];
                //         this._service.DedupeCheck(REQ_DATA).subscribe(users => {
                //           let res_json_dedupe = JSON.parse(users);
                //           // console.log(this.myForm.value);
                //           // let response_status_dedupe = JSON.parse(res_json['response']);
                //           if ((res_json_dedupe['message_code'] === '99' && res_json_dedupe['process_status'].toUpperCase() === "SUCCESS") || (res_json_dedupe['message_code'] === '0' && res_json_dedupe['process_status'].toUpperCase() === "SUCCESS")) {
                //             const masterData_sync = this._appservice.getMasterData();
                //             masterData_sync['AOF']['DATA']['IT_DTL']['ANNUAL_INCOME']['VALUE'] = this.annual_income_value;
                //             masterData_sync['AOF']['DATA']['IT_DTL']['FATCA_DECLARATION']['VALUE'] = this.myForm.value.fatca;
                //             masterData_sync['AOF']['DATA']['IT_DTL']['NAME']['VALUE'] = this.pan_full_name
                //             masterData_sync['AOF']['DATA']['IT_DTL']['OCCUPATION']['VALUE'] = this.myForm.value.occupation;
                //             masterData_sync['AOF']['DATA']['IT_DTL']['PAN_NO']['VALUE'] = this.pan_number;
                //             masterData_sync['AOF']['DATA']['IT_DTL']['PAN_NO']['PAN_NAME'] = this.name;
                //             masterData_sync['AOF']['DATA']['SSN_PAN_NAME_CHECK'] = this.pan_response_type;
                //             masterData_sync['AOF']['DATA']['CURRENT_SCREEN_DTLS']['PORTAL_SCREEN_ID'] = '5';
                //             const reqObj = [{
                //               processName: 'SPTBINSERTAOFCUSTOBJ',
                //               data: [{
                //                 'X_OBJECT_DATA': JSON.stringify(masterData_sync),
                //                 'X_DEVICE_MODIFY_TIMESTAMP': '',
                //                 'X_DEVICE_CREATE_TIMESTAMP': '',
                //                 'X_OBJECT_KEY': '',
                //                 'X_OBJECT_VERSION': ''
                //               }]
                //             }];
                //             this._service.masterDataSync(reqObj).subscribe(res => {
                //               this.appLoader.hideLoader();
                //               const response_code = res[0].response_code;
                //               const response_type = res[0].response_type;
                //         // **      const response_message = JSON.parse(res[0].response_message);
                //          // **  const displayMsg = this._appservice.getMessageMaster(response_code, response_message);
                //               if (response_type == 'I') {
                //                 this._appservice.setMasterData(masterData_sync);
                //                 this.guardService.STEPS['nomineeDetails'] = true;
                //                 dataLayer.push({
                //                   'url': '/vpv/sa-abhi/userregistration/pansuccess/next',
                //                   'event': 'SA_PANSuccessNextr',
                //                   'occupation': this.myForm.value.occupation
                //                   })
                //                 this.router.navigate(['/nomineeDetails']);
                //               } else if (response_type == 'E') {
                //                 let message = this._appservice.getMessageMaster('' + response_code + '');
                //                 if (!message) {
                //                   message = "Message Key Not Found..!!!";
                //                 }
                //                 this.dialogueservice.alertBox({
                //                   title: 'Error',
                //                   message: message,
                //                   messageType: 'error',
                //                   actionlabel: ['Close']
                //                 }).take(1).subscribe((res) => {
                //                   // console.log(res);
                //                 })
                //               }
                //             })
                //           }
                //           else {
                //             this.appLoader.hideLoader();
                //             const masterData_sync = this._appservice.getMasterData();
                //             masterData_sync['AOF']['DATA']['IT_DTL']['ANNUAL_INCOME']['VALUE'] = this.annual_income_value;
                //             masterData_sync['AOF']['DATA']['IT_DTL']['FATCA_DECLARATION']['VALUE'] = this.myForm.value.fatca;
                //             masterData_sync['AOF']['DATA']['IT_DTL']['NAME']['VALUE'] = this.pan_full_name
                //             masterData_sync['AOF']['DATA']['IT_DTL']['OCCUPATION']['VALUE'] = this.myForm.value.occupation;
                //             masterData_sync['AOF']['DATA']['IT_DTL']['PAN_NO']['VALUE'] = this.pan_number;
                //             masterData_sync['AOF']['DATA']['IT_DTL']['PAN_NO']['PAN_NAME'] = this.name;
                //             masterData_sync['AOF']['DATA']['SSN_PAN_NAME_CHECK'] = this.pan_response_type;
                //            // masterData_sync['AOF']['DATA']['CURRENT_SCREEN_DTLS']['PORTAL_SCREEN_ID'] = '5';
                //            masterData_sync['AOF']['DATA']['DEDUPE_CHECK']='YES';
                //            const reqObj = [{
                //             processName: 'SPTBINSERTAOFCUSTOBJ',
                //             data: [{
                //               'X_OBJECT_DATA': JSON.stringify(masterData_sync),
                //               'X_DEVICE_MODIFY_TIMESTAMP': '',
                //               'X_DEVICE_CREATE_TIMESTAMP': '',
                //               'X_OBJECT_KEY': '',
                //               'X_OBJECT_VERSION': ''
                //             }]
                //           }];
                //           this._service.masterDataSync(reqObj).subscribe(res => {
                //             this.appLoader.hideLoader();
                //             const response_code = res[0].response_code;
                //             const response_type = res[0].response_type;
                //       // **      const response_message = JSON.parse(res[0].response_message);
                //        // **  const displayMsg = this._appservice.getMessageMaster(response_code, response_message);
                //             if (response_type == 'I') {
                //               this._appservice.setMasterData(masterData_sync);
                //             } else if (response_type == 'E') {
                //               let message = this._appservice.getMessageMaster('' + response_code + '');
                //               if (!message) {
                //                 message = "Message Key Not Found..!!!";
                //               }
                //               this.dialogueservice.alertBox({
                //                 title: 'Error',
                //                 message: message,
                //                 messageType: 'error',
                //                 actionlabel: ['Close']
                //               }).take(1).subscribe((res) => {
                //                 // console.log(res);
                //               })
                //             }
                //           })
                //          // **   let response_msg = res_json_dedupe['response_message'];
                //             let message = this._appservice.getMessageMaster("00000122");
                //             if (!message) {
                //               message = "Message Key Not Found..!!!";
                //             }
                //             this.dialogueservice.alertBox({
                //               title: 'Error',
                //               message: message,
                //               messageType: 'error',
                //               actionlabel: ['Close']
                //             }).take(1).subscribe((res) => {
                //               // console.log(res);
                //               this.router.navigate(['/mobile']);
                //             })
                //           }
                //         })
                //       }
                //       else {
                //         this.appLoader.hideLoader();
                //         //let response_msg = res_json['response_message'];
                //         if (res_json['message_code'] === '000006') {
                //           const message = this._appservice.getMessageMaster('0031');
                //           this.dialogueservice.alertBox({
                //             title: 'Error',
                //             message: message,
                //             messageType: 'error',
                //             actionlabel: ['Close']
                //           }).take(1).subscribe((res) => {
                //             // console.log(res);
                //           })
                //         }
                //         else {
                //           let message = this._appservice.getMessageMaster('0001');
                //           if (!message) {
                //             message = "Message Key Not Found..!!!";
                //           }
                //           this.dialogueservice.alertBox({
                //             title: 'Error',
                //             message: message,
                //             messageType: 'error',
                //             actionlabel: ['Close']
                //           }).take(1).subscribe((res) => {
                //             // console.log(res);
                //           })
                //         }
                //       }
                //       // console.log(users);
                //     }
                //     catch (error) {
                //       this.appLoader.hideLoader();
                //       this.dialogueservice.alertBox({
                //         title: 'Error',
                //         message: this._appservice.getCatchmsg(),
                //         messageType: 'error',
                //         actionlabel: ['Close']
                //       }).take(1).subscribe((res) => {
                //         this.router.navigate(['/mobile']);
                //       })
                //     }
                //   })
                //   // console.log(this.annual_income_value);
                // }
                // confirmClearAOFData() {
                //   this.dialogueservice.alertBox({
                //     title: 'Confirm',
                //     message: 'Sure you wan\'t to clear the data?',
                //     messageType: 'error',
                //     actionlabel: ['Cancel', 'Ok']
                //   }).take(1).subscribe((res) => {
                //     if (res) {
                //       this.clearAOFData();
                //     }
                //   })
                // }
                // clearAOFData() {
                //   const masterDataFinal = this._appservice.getMasterData();
                //   this.appLoader.showLoader('');
                //   const REQ_DATA = [
                //     {
                //       processName: "SPTBDLTEXTBUSSOBJECT",
                //       data: [
                //         {
                //           "X_AOF_ID": masterDataFinal['AOF']['KEYS']['AOF_ID'],
                //           "X_MEMBER_ID": masterDataFinal['AOF']['KEYS']['MEMBER_ID'],
                //           "X_LEAD_ID": masterDataFinal['AOF']['KEYS']['LEAD_ID'],
                //         }
                //       ]
                //     }
                //   ];
                //   // this.pan_loader = true;
                //   // this.appLoader.showLoader('Validating Mobile Number');
                //   this._service.ClearData(REQ_DATA).subscribe(users => {
                //     try {
                //       this.appLoader.hideLoader();
                //       let response = users[0];
                //       if (response['response_type'] === 'I') {
                //         const success_msg = this._appservice.getMessageMaster('' + response['response_code'] + '');
                //         this.dialogueservice.alertBox({
                //           title: 'Success',
                //           message: success_msg,
                //           messageType: 'success',
                //           actionlabel: ['Close']
                //         }).take(1).subscribe((res) => {
                //           // console.log(res);
                //           this.router.navigate(['/mobile']);
                //         })
                //       }
                //       else {
                //         this.appLoader.hideLoader();
                //         //let response_msg = res_json['response_message'];
                //         let message = this._appservice.getMessageMaster('' + response['message_code'] + '');
                //         if (!message) {
                //           message = "Message Key Not Found..!!!";
                //         }
                //         this.dialogueservice.alertBox({
                //           title: 'Error',
                //           message: message,
                //           messageType: 'error',
                //           actionlabel: ['Close']
                //         }).take(1).subscribe((res) => {
                //           // console.log(res);
                //         })
                //       }
                //     }
                //     catch (error) {
                //       this.appLoader.hideLoader();
                //       this.dialogueservice.alertBox({
                //         title: 'Error',
                //         message: this._appservice.getCatchmsg(),
                //         messageType: 'error',
                //         actionlabel: ['Close']
                //       }).take(1).subscribe((res) => {
                //         this.router.navigate(['/mobile']);
                //       })
                //     }
                //   })
                // }
                PanComponent.prototype.getSalary = function (value) {
                    this.salaryValue = value;
                };
                return PanComponent;
            }());
            PanComponent.ctorParameters = function () { return [
                { type: _shared_loader_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"] },
                { type: _app_service__WEBPACK_IMPORTED_MODULE_4__["appService"] },
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"] },
                { type: _shared_dialogue_dialogue_service__WEBPACK_IMPORTED_MODULE_3__["DialogueService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
                { type: _shared_progress_service__WEBPACK_IMPORTED_MODULE_12__["ProgressService"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_13__["PlatformLocation"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_13__["Location"] },
                { type: _shared_activate_module__WEBPACK_IMPORTED_MODULE_6__["WorkflowService"] },
                { type: _shared_screen_name__WEBPACK_IMPORTED_MODULE_14__["NameService"] },
                { type: _mobile_mobile_service__WEBPACK_IMPORTED_MODULE_7__["mobileService"] }
            ]; };
            PanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-pan',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pan.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pan/pan.component.html")).default,
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                    preserveWhitespaces: false,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pan.component.css */ "./src/app/pan/pan.component.css")).default]
                })
            ], PanComponent);
            /***/ 
        }),
        /***/ "./src/app/personal-info/personal-info.component.css": 
        /*!***********************************************************!*\
          !*** ./src/app/personal-info/personal-info.component.css ***!
          \***********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".picContainer {\r\n    padding: 2% 0 1%;\r\n    background-color: #ffeade;\r\n    box-shadow: 0 0 10px 0 rgba(243, 112, 33, 0.2);\r\n}\r\n\r\n/* .picDiv[_ngcontent-qwh-c13] > img[_ngcontent-qwh-c13] {\r\n    height: 141px;\r\n    width: 134px;\r\n    border-radius: 100px;\r\n    margin-right: 67px;\r\n    margin: -12px;\r\n} */\r\n\r\n.picDiv {\r\n    width: 100px;\r\n    /* border: 1px solid red; */\r\n    height: 100px;\r\n    border-radius: 100%;\r\n    /*change akansha*/\r\n    margin-left: 12px;\r\n    margin-bottom: 18px;\r\n}\r\n\r\n.picDiv>img {\r\n    height: 141px;\r\n    width: 134px;\r\n    border-radius: 100px;\r\n    margin: -12px;\r\n}\r\n\r\n.infoContainer>label {\r\n    display: block\r\n}\r\n\r\n.infoContainer>label>span {\r\n    margin-right: 1%;\r\n}\r\n\r\ninput[type=\"button\"] :disabled {\r\n    outline: none;\r\n    padding: 1% 6%;\r\n    background: #aaa;\r\n    cursor: not-allowed;\r\n    border: none;\r\n    cursor: no-drop;\r\n}\r\n\r\n.personal-nxt-btn {\r\n    margin-bottom: 35px;\r\n}\r\n\r\n.error_color.error_block {\r\n    margin-top: 14px;\r\n}\r\n\r\n.SSN-section-info-ui-fix {\r\n    padding: 10px;\r\n    margin-bottom: 0px;\r\n}\r\n\r\n.SSN-section-name-ui-fix {\r\n    padding-bottom: 4px;\r\n    font-family: Nunito-Regular;\r\n    font-size: 16px;\r\n    color: #f37021;\r\n}\r\n\r\n.SSN-section-font-ui-fix {\r\n    font-family: Nunito-Regular;\r\n    color: #646464 !important;\r\n    font-size: 12px;\r\n}\r\n\r\n/* .nxt-btn {\r\n    font-size: 12px;\r\n    padding-top: 12px;\r\n    padding-bottom: 12px;\r\n    padding-right: 35px;\r\n    padding-left: 35px;\r\n    border-radius: 0;\r\n    font-size: 12px;\r\n    padding-top: 12px;\r\n    padding-bottom: 12px;\r\n    padding-right: 50px;\r\n    padding-left: 50px;\r\n    border-radius: 0;\r\n} */\r\n\r\n.inputContainer-ui-fix {\r\n    margin-top: 15px;\r\n}\r\n\r\n.inputContainer {\r\n    padding: 1% 0 0;\r\n}\r\n\r\n.radio-personal-ui-fix {\r\n    font-family: Nunito-Regular;\r\n    overflow: hidden;\r\n}\r\n\r\n.radio-personal-ui-fix input[type='radio'] {\r\n    margin-right: 10px;\r\n}\r\n\r\n.errmsg-ui-fix {\r\n    margin-top: -4px;\r\n}\r\n\r\n.errmsg-ui-fix label {\r\n    color: #646464;\r\n    font-size: 12px;\r\n    font-weight: normal;\r\n}\r\n\r\n.clear-btn {\r\n    outline: none;\r\n    background: #f37021;\r\n    border: none;\r\n    cursor: pointer;\r\n    color: #fff;\r\n    border: 0;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.txt-upppercase {\r\n    text-transform: uppercase;\r\n}\r\n\r\n.email-personal-cstm {\r\n    /*text-transform: lowercase;*/\r\n    text-transform: initial;\r\n}\r\n\r\n.clear-btn-prnt {\r\n    padding: 0% 10% 0% 13%;\r\n}\r\n\r\n.f-18 {\r\n    font-size: 18px;\r\n    line-height: 18px;\r\n}\r\n\r\n.color-input {\r\n    color: #646464 !important;\r\n}\r\n\r\n.shortname-div {\r\n    margin: 0;\r\n    padding: 0;\r\n    margin-top: 16px;\r\n    height: 100%;\r\n    width: 10px !important;\r\n}\r\n\r\n.shortname-div img {\r\n    float: left;\r\n    display: block;\r\n    vertical-align: middle;\r\n    /*margin-top: 7px;*/\r\n    cursor: pointer;\r\n}\r\n\r\n.shortNameMismatch {\r\n    margin-top: 0 !important;\r\n    margin-right: 0;\r\n    padding-right: 0;\r\n}\r\n\r\n.errorMsgShortname {\r\n    position: relative !important;\r\n    top: 14px !important;\r\n    padding-left: 0 !important;\r\n    padding-right: 0 !important;\r\n}\r\n\r\n.Personal-form-container {\r\n    clear: both;\r\n}\r\n\r\n.email-section {\r\n    clear: both;\r\n    overflow: hidden;\r\n}\r\n\r\n.shortname-div {\r\n    width: 12px !important;\r\n}\r\n\r\n.form-container-media {\r\n    /* commented on 12-02-2019 */\r\n    /* height: -moz-calc(100% - (65px + 65px)) !important;\r\n    height: -webkit-calc(100% - (65px + 65px)) !important;\r\n    height: calc(100% - (65px + 65px)) !important; */\r\n    padding-bottom: 20px !important;\r\n}\r\n\r\n.SSN_label {\r\n    background-color: #ffd5be;\r\n    text-align: center;\r\n    /* padding-top: 5px; */\r\n    position: relative;\r\n    position: relative;\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n}\r\n\r\n.button_aligned_mobile {\r\n    padding-top: 40px;\r\n    padding-bottom: 26px;\r\n}\r\n\r\n/*Media query starts here*/\r\n\r\n@media screen and (max-width: 992px) {\r\n    .img_mobile {\r\n        float: left;\r\n        width: 8.33%;\r\n        margin-right: 0px !important;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 992px) {\r\n    .picContainer {\r\n        margin-bottom: 20px;\r\n    }\r\n    .label-location-mobile {\r\n        float: left;\r\n        width: 70%;\r\n    }\r\n    .img_mobile {\r\n        float: left;\r\n        width: 8.33%;\r\n        margin-right: 5px !important;\r\n        /* margin-right: 0px !important; */\r\n    }\r\n    .infoContainer>label>span {\r\n        margin-right: 5%;\r\n    }\r\n    .shortname-div {\r\n        display: none !important;\r\n    }\r\n    .mainContent {\r\n        margin-top: 8% !important;\r\n        margin-left: -15px !important;\r\n        margin-right: -15px !important;\r\n    }\r\n    .error-msg-media {\r\n        padding-left: 0;\r\n        padding-right: 0;\r\n    }\r\n    .error-msg-media>span>img {\r\n        /*padding-left: 0;*/\r\n        display: none;\r\n    }\r\n    .form-container-media {\r\n        /* height: -moz-calc(100% - (65px)) !important;\r\n            height: -webkit-calc(100% - (65px)) !important;\r\n            height: calc(100% - (65px)) !important;*/\r\n        height: auto !important;\r\n        margin-bottom: 10px;\r\n        clear: both;\r\n    }\r\n    .error-msg-media>.error_color.error_block {\r\n        margin-top: 0px !important;\r\n    }\r\n    .shortNameMismatch {\r\n        position: absolute;\r\n        padding-left: 0;\r\n        left: 0;\r\n    }\r\n    .inputContainer.nxt-btn {\r\n        margin-top: 68px;\r\n    }\r\n    .picDiv {\r\n        margin-left: initial;\r\n    }\r\n    .aulabel_mobile {\r\n        padding-top: 10px;\r\n        padding-bottom: 6px;\r\n    }\r\n    .Personal-form-container,\r\n    .email-section {\r\n        padding-top: 25px !important;\r\n    }\r\n    .pad-left-xs {\r\n        margin-left: 30px;\r\n        padding-right: 0;\r\n    }\r\n    .communication_style_mobile {\r\n        margin-top: -3px;\r\n    }\r\n    .errmsg-ui-fix {\r\n        margin-top: 0px;\r\n    }\r\n    .email-mobile-text {\r\n        margin-top: 0;\r\n    }\r\n    .button_aligned_mobile {\r\n        padding-top: 30px;\r\n        padding-bottom: 15px;\r\n        text-align: center;\r\n    }\r\n}\r\n\r\n.disabledBtn {\r\npadding-top: 12px;\r\npadding-bottom: 12px;\r\npadding-right: 50px;\r\npadding-left: 50px;\r\nborder-radius: 0;\r\noutline: none;\r\n    background: #aaa !important;\r\n    border: none;\r\n    cursor: not-allowed;\r\n    color: #ccc; }\r\n\r\n.activeBtn {\r\n    padding-top: 12px;\r\n    padding-bottom: 12px;\r\n    padding-right: 50px;\r\n    padding-left: 50px;\r\n    border-radius: 0; \r\n    background: #f37021 !important;\r\n    cursor: pointer;\r\n    color: #ffffff !important;\r\n}\r\n\r\n/*Media query starts here*/\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVyc29uYWwtaW5mby9wZXJzb25hbC1pbmZvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLDhDQUE4QztBQUNsRDs7QUFFQTs7Ozs7O0dBTUc7O0FBRUg7SUFDSSxZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLHlCQUF5QjtJQUN6QixlQUFlO0FBQ25COztBQUVBOzs7Ozs7Ozs7Ozs7O0dBYUc7O0FBRUg7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZUFBZTtJQUNmLFdBQVc7SUFDWCxTQUFTO0lBQ1QseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixvQkFBb0I7SUFDcEIsMEJBQTBCO0lBQzFCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUI7O29EQUVnRDtJQUNoRCwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCOztBQUdBLDBCQUEwQjs7QUFFMUI7SUFDSTtRQUNJLFdBQVc7UUFDWCxZQUFZO1FBQ1osNEJBQTRCO0lBQ2hDO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksV0FBVztRQUNYLFVBQVU7SUFDZDtJQUNBO1FBQ0ksV0FBVztRQUNYLFlBQVk7UUFDWiw0QkFBNEI7UUFDNUIsa0NBQWtDO0lBQ3RDO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLHdCQUF3QjtJQUM1QjtJQUNBO1FBQ0kseUJBQXlCO1FBQ3pCLDZCQUE2QjtRQUM3Qiw4QkFBOEI7SUFDbEM7SUFDQTtRQUNJLGVBQWU7UUFDZixnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLG1CQUFtQjtRQUNuQixhQUFhO0lBQ2pCO0lBQ0E7UUFDSTs7b0RBRTRDO1FBQzVDLHVCQUF1QjtRQUN2QixtQkFBbUI7UUFDbkIsV0FBVztJQUNmO0lBQ0E7UUFDSSwwQkFBMEI7SUFDOUI7SUFDQTtRQUNJLGtCQUFrQjtRQUNsQixlQUFlO1FBQ2YsT0FBTztJQUNYO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLG9CQUFvQjtJQUN4QjtJQUNBO1FBQ0ksaUJBQWlCO1FBQ2pCLG1CQUFtQjtJQUN2QjtJQUNBOztRQUVJLDRCQUE0QjtJQUNoQztJQUNBO1FBQ0ksaUJBQWlCO1FBQ2pCLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxpQkFBaUI7UUFDakIsb0JBQW9CO1FBQ3BCLGtCQUFrQjtJQUN0QjtBQUNKOztBQUVBO0FBQ0EsaUJBQWlCO0FBQ2pCLG9CQUFvQjtBQUNwQixtQkFBbUI7QUFDbkIsa0JBQWtCO0FBQ2xCLGdCQUFnQjtBQUNoQixhQUFhO0lBQ1QsMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsV0FBVyxFQUFFOztBQUVqQjtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsOEJBQThCO0lBQzlCLGVBQWU7SUFDZix5QkFBeUI7QUFDN0I7O0FBQ0EsMEJBQTBCIiwiZmlsZSI6InNyYy9hcHAvcGVyc29uYWwtaW5mby9wZXJzb25hbC1pbmZvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGljQ29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDIlIDAgMSU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlYWRlO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggMCByZ2JhKDI0MywgMTEyLCAzMywgMC4yKTtcclxufVxyXG5cclxuLyogLnBpY0Rpdltfbmdjb250ZW50LXF3aC1jMTNdID4gaW1nW19uZ2NvbnRlbnQtcXdoLWMxM10ge1xyXG4gICAgaGVpZ2h0OiAxNDFweDtcclxuICAgIHdpZHRoOiAxMzRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA2N3B4O1xyXG4gICAgbWFyZ2luOiAtMTJweDtcclxufSAqL1xyXG5cclxuLnBpY0RpdiB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIC8qY2hhbmdlIGFrYW5zaGEqL1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxOHB4O1xyXG59XHJcblxyXG4ucGljRGl2PmltZyB7XHJcbiAgICBoZWlnaHQ6IDE0MXB4O1xyXG4gICAgd2lkdGg6IDEzNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgICBtYXJnaW46IC0xMnB4O1xyXG59XHJcblxyXG4uaW5mb0NvbnRhaW5lcj5sYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBibG9ja1xyXG59XHJcblxyXG4uaW5mb0NvbnRhaW5lcj5sYWJlbD5zcGFuIHtcclxuICAgIG1hcmdpbi1yaWdodDogMSU7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJidXR0b25cIl0gOmRpc2FibGVkIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAxJSA2JTtcclxuICAgIGJhY2tncm91bmQ6ICNhYWE7XHJcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY3Vyc29yOiBuby1kcm9wO1xyXG59XHJcblxyXG4ucGVyc29uYWwtbnh0LWJ0biB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzNXB4O1xyXG59XHJcblxyXG4uZXJyb3JfY29sb3IuZXJyb3JfYmxvY2sge1xyXG4gICAgbWFyZ2luLXRvcDogMTRweDtcclxufVxyXG5cclxuLlNTTi1zZWN0aW9uLWluZm8tdWktZml4IHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbi5TU04tc2VjdGlvbi1uYW1lLXVpLWZpeCB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IE51bml0by1SZWd1bGFyO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICNmMzcwMjE7XHJcbn1cclxuXHJcbi5TU04tc2VjdGlvbi1mb250LXVpLWZpeCB7XHJcbiAgICBmb250LWZhbWlseTogTnVuaXRvLVJlZ3VsYXI7XHJcbiAgICBjb2xvcjogIzY0NjQ2NCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4vKiAubnh0LWJ0biB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTJweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMzVweDtcclxuICAgIHBhZGRpbmctbGVmdDogMzVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTJweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcclxuICAgIHBhZGRpbmctbGVmdDogNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbn0gKi9cclxuXHJcbi5pbnB1dENvbnRhaW5lci11aS1maXgge1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG5cclxuLmlucHV0Q29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDElIDAgMDtcclxufVxyXG5cclxuLnJhZGlvLXBlcnNvbmFsLXVpLWZpeCB7XHJcbiAgICBmb250LWZhbWlseTogTnVuaXRvLVJlZ3VsYXI7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4ucmFkaW8tcGVyc29uYWwtdWktZml4IGlucHV0W3R5cGU9J3JhZGlvJ10ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uZXJybXNnLXVpLWZpeCB7XHJcbiAgICBtYXJnaW4tdG9wOiAtNHB4O1xyXG59XHJcblxyXG4uZXJybXNnLXVpLWZpeCBsYWJlbCB7XHJcbiAgICBjb2xvcjogIzY0NjQ2NDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbi5jbGVhci1idG4ge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6ICNmMzcwMjE7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi50eHQtdXBwcGVyY2FzZSB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4uZW1haWwtcGVyc29uYWwtY3N0bSB7XHJcbiAgICAvKnRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7Ki9cclxuICAgIHRleHQtdHJhbnNmb3JtOiBpbml0aWFsO1xyXG59XHJcblxyXG4uY2xlYXItYnRuLXBybnQge1xyXG4gICAgcGFkZGluZzogMCUgMTAlIDAlIDEzJTtcclxufVxyXG5cclxuLmYtMTgge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbn1cclxuXHJcbi5jb2xvci1pbnB1dCB7XHJcbiAgICBjb2xvcjogIzY0NjQ2NCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2hvcnRuYW1lLWRpdiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zaG9ydG5hbWUtZGl2IGltZyB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIC8qbWFyZ2luLXRvcDogN3B4OyovXHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5zaG9ydE5hbWVNaXNtYXRjaCB7XHJcbiAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG59XHJcblxyXG4uZXJyb3JNc2dTaG9ydG5hbWUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XHJcbiAgICB0b3A6IDE0cHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uUGVyc29uYWwtZm9ybS1jb250YWluZXIge1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbn1cclxuXHJcbi5lbWFpbC1zZWN0aW9uIHtcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnNob3J0bmFtZS1kaXYge1xyXG4gICAgd2lkdGg6IDEycHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZvcm0tY29udGFpbmVyLW1lZGlhIHtcclxuICAgIC8qIGNvbW1lbnRlZCBvbiAxMi0wMi0yMDE5ICovXHJcbiAgICAvKiBoZWlnaHQ6IC1tb3otY2FsYygxMDAlIC0gKDY1cHggKyA2NXB4KSkgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogLXdlYmtpdC1jYWxjKDEwMCUgLSAoNjVweCArIDY1cHgpKSAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAoNjVweCArIDY1cHgpKSAhaW1wb3J0YW50OyAqL1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLlNTTl9sYWJlbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkNWJlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLyogcGFkZGluZy10b3A6IDVweDsgKi9cclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG59XHJcblxyXG4uYnV0dG9uX2FsaWduZWRfbW9iaWxlIHtcclxuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDI2cHg7XHJcbn1cclxuXHJcblxyXG4vKk1lZGlhIHF1ZXJ5IHN0YXJ0cyBoZXJlKi9cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICAuaW1nX21vYmlsZSB7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgd2lkdGg6IDguMzMlO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICAucGljQ29udGFpbmVyIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLmxhYmVsLWxvY2F0aW9uLW1vYmlsZSB7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgIH1cclxuICAgIC5pbWdfbW9iaWxlIHtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICB3aWR0aDogOC4zMyU7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHggIWltcG9ydGFudDtcclxuICAgICAgICAvKiBtYXJnaW4tcmlnaHQ6IDBweCAhaW1wb3J0YW50OyAqL1xyXG4gICAgfVxyXG4gICAgLmluZm9Db250YWluZXI+bGFiZWw+c3BhbiB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1JTtcclxuICAgIH1cclxuICAgIC5zaG9ydG5hbWUtZGl2IHtcclxuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAubWFpbkNvbnRlbnQge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDglICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0xNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAtMTVweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmVycm9yLW1zZy1tZWRpYSB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgICB9XHJcbiAgICAuZXJyb3ItbXNnLW1lZGlhPnNwYW4+aW1nIHtcclxuICAgICAgICAvKnBhZGRpbmctbGVmdDogMDsqL1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuZm9ybS1jb250YWluZXItbWVkaWEge1xyXG4gICAgICAgIC8qIGhlaWdodDogLW1vei1jYWxjKDEwMCUgLSAoNjVweCkpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGhlaWdodDogLXdlYmtpdC1jYWxjKDEwMCUgLSAoNjVweCkpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gKDY1cHgpKSAhaW1wb3J0YW50OyovXHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICBjbGVhcjogYm90aDtcclxuICAgIH1cclxuICAgIC5lcnJvci1tc2ctbWVkaWE+LmVycm9yX2NvbG9yLmVycm9yX2Jsb2NrIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5zaG9ydE5hbWVNaXNtYXRjaCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgfVxyXG4gICAgLmlucHV0Q29udGFpbmVyLm54dC1idG4ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDY4cHg7XHJcbiAgICB9XHJcbiAgICAucGljRGl2IHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogaW5pdGlhbDtcclxuICAgIH1cclxuICAgIC5hdWxhYmVsX21vYmlsZSB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDZweDtcclxuICAgIH1cclxuICAgIC5QZXJzb25hbC1mb3JtLWNvbnRhaW5lcixcclxuICAgIC5lbWFpbC1zZWN0aW9uIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMjVweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLnBhZC1sZWZ0LXhzIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICAgfVxyXG4gICAgLmNvbW11bmljYXRpb25fc3R5bGVfbW9iaWxlIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtM3B4O1xyXG4gICAgfVxyXG4gICAgLmVycm1zZy11aS1maXgge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIH1cclxuICAgIC5lbWFpbC1tb2JpbGUtdGV4dCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgIH1cclxuICAgIC5idXR0b25fYWxpZ25lZF9tb2JpbGUge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxufVxyXG5cclxuLmRpc2FibGVkQnRuIHtcclxucGFkZGluZy10b3A6IDEycHg7XHJcbnBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG5wYWRkaW5nLXJpZ2h0OiA1MHB4O1xyXG5wYWRkaW5nLWxlZnQ6IDUwcHg7XHJcbmJvcmRlci1yYWRpdXM6IDA7XHJcbm91dGxpbmU6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYWFhICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgY29sb3I6ICNjY2M7IH1cclxuXHJcbi5hY3RpdmVCdG4ge1xyXG4gICAgcGFkZGluZy10b3A6IDEycHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwOyBcclxuICAgIGJhY2tncm91bmQ6ICNmMzcwMjEgIWltcG9ydGFudDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuLypNZWRpYSBxdWVyeSBzdGFydHMgaGVyZSovIl19 */");
            /***/ 
        }),
        /***/ "./src/app/personal-info/personal-info.component.ts": 
        /*!**********************************************************!*\
          !*** ./src/app/personal-info/personal-info.component.ts ***!
          \**********************************************************/
        /*! exports provided: PersonalInfoComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalInfoComponent", function () { return PersonalInfoComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
            /* harmony import */ var _shared_custom_validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/custom.validators */ "./src/app/shared/custom.validators.ts");
            /* harmony import */ var _shared_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/loader/loader.service */ "./src/app/shared/loader/loader.service.ts");
            /* harmony import */ var _shared_dialogue_dialogue_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/dialogue/dialogue.service */ "./src/app/shared/dialogue/dialogue.service.ts");
            /* harmony import */ var _shared_activate_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/activate.module */ "./src/app/shared/activate.module.ts");
            /* harmony import */ var _shared_screen_name__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/screen.name */ "./src/app/shared/screen.name.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _shared_progress_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/progress.service */ "./src/app/shared/progress.service.ts");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            //import { AddharService } from '../addhar-service';
            //import { PlatwareService } from '../shared/platware-client/platware.service';
            //import { panService } from '../pan/pan.service';
            var PersonalInfoComponent = /** @class */ (function () {
                function PersonalInfoComponent(
                //private __service:panService,
                guardService, 
                //private SSNData: AddharService,
                progressService, 
                //private platware: PlatwareService, 
                dialogue, router, _service, _fb, apploader, location, locationurl, nameService, changeDetectorRef) {
                    // this.masterDataService = this._service.getMasterData();/*Jack sparrow 4-apr-18*/
                    // this.shortNameMsg = this._service.getMessageMaster('AD-01');
                    // this.occ_required = this._service.getMessageMaster('000001230'); 
                    this.guardService = guardService;
                    this.progressService = progressService;
                    this.dialogue = dialogue;
                    this.router = router;
                    this._service = _service;
                    this._fb = _fb;
                    this.apploader = apploader;
                    this.location = location;
                    this.locationurl = locationurl;
                    this.nameService = nameService;
                    this.changeDetectorRef = changeDetectorRef;
                    this.faNameFilled = false;
                    this.SSNObject = {
                        'name': '',
                        'dob': '',
                        'maritalStatus': '',
                        'address': '',
                        'fathersName': '',
                        'motherMaidenName': '',
                        'mobileNumber': '',
                        'email': '',
                        'ssn': '',
                        'photo': {},
                        "nameOnCard": "",
                        "addressline1": "",
                        "addressline2": "",
                        "landmark": "",
                        "pincode": "",
                        "city": "",
                        "state": ""
                    };
                    this.personalDetailsErrObj = {
                        'fathersName': "Please fill this field",
                        'mname': "Please fill this field",
                        'emailId': "Please fill this field",
                        'addressLine1': "Please fill this field",
                        'addressLine2': "Please fill this field",
                        'city': "Please fill this field",
                        'state': "Please fill this field",
                        'pincode': "Please fill this field",
                        'getPincode': "Please fill this field",
                        'selectAddress': "Please fill this field",
                        'shortName': "Please fill this field",
                        'shortNameMismatch': false
                    };
                    this.fetchedSSNData = {};
                    this.pincode123 = {
                        'pincodeError': false,
                        pincodeErrorMsg: ''
                    };
                    this.pending_lead_SSN_detail = {};
                    this.selectedValue = {
                        marital_status: []
                    };
                    // location.onPopState((e) => {
                    //   // console.log(e);
                    //   locationurl.go('/mobile');
                    //   // console.log('pressed back!');
                    // });
                }
                PersonalInfoComponent.prototype.ngOnInit = function () {
                    this.ssnData = this._service.getSsnData();
                    this.maritalStatus = ['married', 'single', 'divorced', 'widowed'];
                    this.selectedValue.marital_status =
                        [
                            { id: '1', name: "Married" },
                            { id: '2', name: 'Single' },
                            { id: '3', name: 'Widowed' },
                            { id: '4', name: 'divorced' }
                        ];
                    // const REQ_DATA = [
                    //   {
                    //     processName: "GETMASTERDATA",
                    //     data: [
                    //       {
                    //         "X_TYPE": "MARTIAL_STATUS",
                    //         "X_VERSION": "0"
                    //       }
                    //     ]
                    //   }
                    // ];
                    // this.apploader.showLoader('');
                    // this.__service.fetchOccuption(REQ_DATA).subscribe(users => {
                    var user_registration = {
                        screen1: {
                            isActive: "YES",
                            isComplete: false,
                            loading: 50,
                        },
                        screen2: {
                            isActive: "NO",
                            isComplete: false,
                            loading: 0,
                        },
                        screen3: {
                            isActive: "NO",
                            isComplete: false,
                            loading: 0,
                        },
                        screen4: {
                            isActive: "NO",
                            isComplete: false,
                            loading: 0,
                        }
                    };
                    this.nameService.setName('Personal Details');
                    this.progressService.setLoaderWidth(user_registration);
                    //this.apploader.hideLoader();
                    //   this.marital_status = JSON.parse(users[0]['data_object']);
                    //   this.marital_status_sorted = new OrderByPipe().transform(
                    //     this.marital_status,
                    //     'sequence'
                    //   );
                    // })
                    // const loaderMsg = this._service.getMessageMaster('0000012511');
                    // this.apploader.showLoader(loaderMsg);
                    // this.SSNDetails = this.SSNData.getSSNCredentials();
                    // //this.selectedValue.marital_status = this.masterDataService['AOF']['DATA']['IT_DTL']['marital_status']['VALUE'];
                    // this.selectedValue.marital_status = this.masterDataService['AOF'].DATA.PSNL_DTL.MARITAL_STATUS.VALUE
                    //  this.SSNObject['email'] = this.masterDataService['AOF']['DATA']['PSNL_DTL']['EMAIL_ID'].VALUE;
                    // this.SSNObject['motherName'] = this.masterDataService['AOF']['DATA']['PSNL_DTL']['MOTHER_MAIDEN_NAME'].VALUE;
                    //  this.SSNObject['addressChoosen'] = this.masterDataService['AOF']['DATA']['PSNL_DTL'].ADDRESS_SAME_AS;
                    this.SSNObject['email'] = this.ssnData.email;
                    this.SSNObject['name'] = this.ssnData.name;
                    // this.personalDetailsErrObj.shortName = "Please fill this field"
                    this.SSNObject['maritalStatus'] = this.ssnData.maritalStatus;
                    this.selectedValue.marital_status = this.ssnData.maritalStatus;
                    this.SSNObject['address'] = this.ssnData.address;
                    this.SSNObject['fathersName'] = this.ssnData.fathersName;
                    this.SSNObject['motherMaidenName'] = this.ssnData.motherMaidenName;
                    this.SSNObject['dob'] = this.ssnData.dob;
                    this.SSNObject['photo'] = this.ssnData.photo;
                    this.SSNObject['mobileNumber'] = this.ssnData.mobileNumber;
                    this.SSNObject['ssn'] = this.ssnData.ssn;
                    this.SSNObject['_id'] = this.ssnData._id;
                    this.SSNObject['nameOnCard'] = this.ssnData.nameOnCard;
                    //this.SSNObject['gender'] = this.ssnData.gender;
                    //this.SSNObject['maritalStatus'] = this.ssnData.maritalStatus;
                    // /* this.SSNPersonalDetails.patchValue({
                    //   addressChoosen: this.SSNObject['addressChoosen']
                    // }); */
                    this.setFormData();
                    // this.SSNPersonalDetails.controls['addressChoosen'].setValue(this.SSNObject['addressChoosen']);
                    // /* this.SSNPersonalDetails = this._fb.group({
                    //   addressChoosen: [this.SSNObject['addressChoosen'], [Validators.required]],
                    // }); */
                    // /* ['addressChoosen'].setValue(this.SSNObject['addressChoosen']); */
                    // if (this.SSNObject['addressChoosen'] === 'NO' || this.SSNObject['addressChoosen'] === 'no') {
                    //   // this.SSNObject['addressChoosen']=false;
                    //   this.onSelectionChange();
                    //   this.SSNObject['addressline1'] = this.masterDataService['AOF']['DATA']['ADDRESS']['1']['ADR_LN_1'].VALUE;
                    //   this.SSNObject['addressline2'] = this.masterDataService['AOF']['DATA']['ADDRESS']['1']['ADR_LN_2'].VALUE;
                    //   this.SSNObject['addressline2'] = this.masterDataService['AOF']['DATA']['ADDRESS']['1']['ADR_LN_2'].VALUE;
                    //   this.SSNObject['landmark'] = this.masterDataService['AOF']['DATA']['ADDRESS']['1']['LANDMARK'].VALUE;
                    //   this.SSNObject['pincode'] = this.masterDataService['AOF']['DATA']['ADDRESS']['1']['PIN_CODE'].VALUE;
                    //   this.SSNObject['city'] = this.masterDataService['AOF']['DATA']['ADDRESS']['1']['CITY_CODE'].VALUE;
                    //   this.SSNObject['state'] = this.masterDataService['AOF']['DATA']['ADDRESS']['1']['STATE_CODE'].VALUE;
                    //   // this.SSNObject['addressChoosen'] = 'NO';
                    //   this.changeDetectorRef.markForCheck();
                    //   this.SSNObject['addressChoosen'] = false;
                    //   this.changeDetectorRef.markForCheck();
                    //   this.changeDetectorRef.markForCheck();
                    // }
                    // if (this.masterDataService['AOF']['DATA']['SSN']['ADHR_NO'] != "" && this.masterDataService['AOF']['DATA']['SSN']['ADHR_OTP_VRF'] == "Y" && this.masterDataService['AOF']['DATA']['SSN']['ADHR_VRF_STS'] == "Y") {
                    //   this.masterDataSSN = this._service.fetchMessageMasterSSN();
                    //   this.TodaysDate = new Date();
                    //   // let Today = new Date(this.TodaysDate.setYear(this.TodaysDate.getFullYear() - 18)); // Date current -18
                    //   // SSNres.DOB="18-05-2000";
                    //   let dateString = this.masterDataService['AOF']['DATA']['PSNL_DTL']['DOB']['VALUE'];
                    //   let dateParts = dateString.split("-");
                    //   let dateObject = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
                    //   var today_year = this.TodaysDate.getFullYear();
                    //   var today_month = this.TodaysDate.getMonth();
                    //   var today_day = this.TodaysDate.getDate();
                    //   if (dateParts[0].length == 4) {
                    //     var age = today_year - dateParts[0];
                    //     this.date_year = 0;
                    //   } else if (dateParts[2].length == 4) {
                    //     var age = today_year - dateParts[2];
                    //     this.date_year = 2;
                    //   }
                    //   if (today_month < (dateParts[1] - 1)) { age--; }
                    //   if (((dateParts[1] - 1) == today_month) && (today_day < dateParts[this.date_year])) { age--; }
                    //   this.AGE = age;
                    //   this.setPersonalDetailsData(this.masterDataSSN);
                    //   //let SSNParseJson= JSON.parse(this.masterDataSSN.response);
                    //   this._service.setSSNAge(this.AGE);
                    //   this.apploader.hideLoader();
                    // } else {
                    //   this.masterDataSSN = this._service.fetchMessageMasterSSN();
                    //   this.setPersonalDetailsData(this.masterDataSSN);
                    //   let SSNParseJson = JSON.parse(this.masterDataSSN.response);
                    //   this._service.setSSNAge(SSNParseJson['AGE']);
                    //   this.apploader.hideLoader();
                    // }
                    // Aditya Ends here
                };
                // Monthformat(yearmonth) {
                //   let month;
                //   let fullyearArray;
                //   let currentmonth;
                //   let fullyearStrng;
                //   fullyearArray = yearmonth.split("-");
                //   currentmonth = yearmonth.split("-")[1];
                //   switch (currentmonth) {
                //     case "01":
                //       month = "Jan";
                //       break;
                //     case "02":
                //       month = "Feb";
                //       break;
                //     case "03":
                //       month = "Mar";
                //       break;
                //     case "04":
                //       month = "Apr";
                //       break;
                //     case "05":
                //       month = "May";
                //       break;
                //     case "06":
                //       month = "Jun";
                //       break;
                //     case "07":
                //       month = "Jul";
                //       break;
                //     case "08":
                //       month = "Aug";
                //       break;
                //     case "09":
                //       month = "Sept";
                //       break;
                //     case "10":
                //       month = "Oct";
                //       break;
                //     case "11":
                //       month = "Nov";
                //       break;
                //     case "12":
                //       month = "Dec";
                //       break;
                //     default:
                //       month = "Invalid month";
                //   }
                //   // **  let indexValue = fullyearArray[1];
                //   // ** let index = fullyearArray.indexOf(indexValue);
                //   fullyearArray[1] = month;
                //   fullyearStrng = fullyearArray.join("-");
                //   return fullyearStrng;
                // //     this.pending_lead_SSN_detail['SSN_OTHER_NAME'] = "";
                //     this.pending_lead_SSN_detail['ADDRESS_LINE_1'] = this.masterDataService['AOF']['DATA']['ADDRESS']['0']['ADR_LN_1']['VALUE'];
                //     this.pending_lead_SSN_detail['ADDRESS_LINE_2'] = this.masterDataService['AOF']['DATA']['ADDRESS']['0']['ADR_LN_2']['VALUE'];
                //     this.pending_lead_SSN_detail['ADDRESS_LINE_3'] = this.masterDataService['AOF']['DATA']['ADDRESS']['0']['ADR_LN_3']['VALUE'];
                //     this.pending_lead_SSN_detail['AGE'] = this.AGE;
                //     this.pending_lead_SSN_detail['CITY'] = this.masterDataService['AOF']['DATA']['ADDRESS']['0']['CITY_CODE']['VALUE'];
                //     this.pending_lead_SSN_detail['COUNTRY'] = this.masterDataService['AOF']['DATA']['ADDRESS']['0']['COUNTRY']['VALUE'];
                //     this.pending_lead_SSN_detail['DOB'] = this.masterDataService['AOF']['DATA']['PSNL_DTL']['DOB']['VALUE'];
                //     this.pending_lead_SSN_detail['FATHER_NAME'] = this.masterDataService['AOF']['DATA']['PSNL_DTL']['FATHER_NAME']['VALUE'];
                //     this.pending_lead_SSN_detail['FIRST_NAME'] = this.masterDataService['AOF']['DATA']['PSNL_DTL']['FIRST_NAME']['VALUE'];
                //     this.pending_lead_SSN_detail['GENDER'] = this.masterDataService['AOF']['DATA']['PSNL_DTL']['GENDER']['VALUE'];
                //     this.pending_lead_SSN_detail['LASTNAME'] = this.masterDataService['AOF']['DATA']['PSNL_DTL']['LAST_NAME']['VALUE'];
                //     this.pending_lead_SSN_detail['MIDDLE_NAME'] = this.masterDataService['AOF']['DATA']['PSNL_DTL']['MIDDLE_NAME']['VALUE'];
                //     this.pending_lead_SSN_detail['PHOTOGRAPH'] = this.masterDataService['AOF']['DATA']['PHOTOGRAPH']['SSN_IMAGE'];
                //     this.pending_lead_SSN_detail['PIN'] = this.masterDataService['AOF']['DATA']['ADDRESS']['0']['PIN_CODE']['VALUE'];
                //     this.pending_lead_SSN_detail['STATE'] = this.masterDataService['AOF']['DATA']['ADDRESS']['0']['STATE_CODE']['VALUE'];
                //     this.fetchedSSNData = this.pending_lead_SSN_detail;
                //     const addressLine1 = this.pending_lead_SSN_detail['ADDRESS_LINE_1'] || '';
                //     const addressLine2 = this.pending_lead_SSN_detail['ADDRESS_LINE_2'] || '';
                //     const addressLine3 = this.pending_lead_SSN_detail['ADDRESS_LINE_3'] || '';
                //     const state = this.pending_lead_SSN_detail['STATE'] || '';
                //     const age = this.pending_lead_SSN_detail['AGE'] || '';
                //     const gender = this.pending_lead_SSN_detail['GENDER'] || '';
                //     const pincode = this.pending_lead_SSN_detail['PIN'] || '';
                //     this.SSNObject.firstName = this.SSNObject.shortName = this.pending_lead_SSN_detail['FIRST_NAME'];
                //     this.SSNObject.lastName = this.pending_lead_SSN_detail['LASTNAME'];
                //     this.SSNObject.gender = this.pending_lead_SSN_detail['GENDER'];
                //     this.pending_lead_SSN_detail['FATHER_NAME'] = this.pending_lead_SSN_detail['FATHER_NAME'].toLowerCase().split(" ").filter(n => n).join(" ");
                //     if (this.pending_lead_SSN_detail['FATHER_NAME'].trim() != "") {
                //       this.faNameFilled = true;
                //       this.SSNObject['fathersName'] = this.pending_lead_SSN_detail['FATHER_NAME'];
                //       this.SSNObject.fatherNameDisable = true;
                //       var specialregex = /[!"#$%&'()*+.\:,<=>?@\[\\\]^_`{|}~-]/;
                //       if (this.SSNObject['fathersName'].toUpperCase().indexOf("/O") >= 0 && specialregex.test(this.SSNObject['fathersName']) == true) {
                //         var frst = this.SSNObject['fathersName'].search(specialregex);
                //         var lst = this.SSNObject['fathersName'].lastIndexOf("");
                //         this.SSNObject['fathersName'] = this.SSNObject['fathersName'].slice(frst + 1, lst);
                //         // this.SSNObject['fathersName'].toUpperCase().indexOf("W/O") >= 0
                //         if (!this.SSNObject['fathersName'].split(" ")[0] || specialregex.test(this.SSNObject['fathersName']) == true) {
                //           this.SSNObject['fathersName'] = this.SSNObject['fathersName'].split(" ").splice(1, this.SSNObject['fathersName'].length).join(" ");
                //         }
                //       } else if (this.SSNObject['fathersName'].toUpperCase().indexOf("/O") >= 0) {
                //         if (this.SSNObject['fathersName'].toUpperCase().indexOf("W/O") >= 0) {
                //           this.SSNObject['fathersName'] = " ";
                //           this.SSNObject.fatherNameDisable = false;
                //         }
                //         else {
                //           this.SSNObject['fathersName'] = this.SSNObject['fathersName'].split(" ").splice(1, this.SSNObject['fathersName'].length).join(" ");
                //         }
                //       }
                //       else {
                //         this.SSNObject.fatherNameDisable = false;/*father name with editabe and value is coming*/
                //       }
                //     }
                //     else {
                //       this.SSNObject.fatherNameDisable = false;
                //     }
                //     this.SSNObject.location = addressLine1 ? this.SSNObject.location = addressLine1 : this.SSNObject.location = '';
                //     this.SSNObject.location = addressLine2 ? this.SSNObject.location = this.SSNObject.location + ',' + addressLine2
                //       : this.SSNObject.location = this.SSNObject.location;
                //     this.SSNObject.location = addressLine3 ? this.SSNObject.location = this.SSNObject.location + ',' + addressLine3
                //       : this.SSNObject.location = this.SSNObject.location;
                //     this.SSNObject.location = state ? this.SSNObject.location = this.SSNObject.location + ',' + state
                //       : this.SSNObject.location = this.SSNObject.location;
                //     this.SSNObject.location = pincode ? this.SSNObject.location = this.SSNObject.location + '-' + pincode
                //       : this.SSNObject.location = this.SSNObject.location;
                //     this.pending_lead_SSN_detail['MIDDLE_NAME'] = this.pending_lead_SSN_detail['MIDDLE_NAME'] ?
                //       this.pending_lead_SSN_detail['MIDDLE_NAME'] = ' ' + this.pending_lead_SSN_detail['MIDDLE_NAME'] + ' ' : this.pending_lead_SSN_detail['MIDDLE_NAME'] = ' ';
                //     this.SSNObject.name = (this.pending_lead_SSN_detail['FIRST_NAME'] + this.pending_lead_SSN_detail['MIDDLE_NAME'] + this.pending_lead_SSN_detail['LASTNAME']) || '';
                //     this.dob_forAccountCreation = this.pending_lead_SSN_detail['DOB'];
                //     if (this.pending_lead_SSN_detail['DOB']) {
                //       this.SSNObject.dob = this.Monthformat(this.pending_lead_SSN_detail['DOB']);// By jack sparrow
                //     }
                //     else {
                //       this.SSNObject.dob = "";
                //     }
                //     // this.Monthformat(SSNData['DOB']);// By jack sparrow
                //     this.SSNObject.gender = gender + ', ' + age + ' years';
                //     this.SSNObject['photograph'] = this.pending_lead_SSN_detail['PHOTOGRAPH'];
                //     this.photographSync = this.pending_lead_SSN_detail['PHOTOGRAPH'];
                //     this.personalDetailsErrObj.fathersName = this._service.getMessageMaster('000001233');
                //     this.personalDetailsErrObj.emailId = this._service.getMessageMaster('000001231');
                //     this.personalDetailsErrObj.mname = this._service.getMessageMaster('000001232');
                //     this.personalDetailsErrObj.addressLine2 = this._service.getMessageMaster('000001239');
                //     this.personalDetailsErrObj.addressLine1 = this._service.getMessageMaster('000001234');
                //     this.personalDetailsErrObj.state = this._service.getMessageMaster('000001236');
                //     this.personalDetailsErrObj.city = this._service.getMessageMaster('000001235');
                //     this.personalDetailsErrObj.pincode = this._service.getMessageMaster('000001237');
                //     this.personalDetailsErrObj.getPincode = this._service.getMessageMaster('0000012312');
                //     this.personalDetailsErrObj.selectAddress = this._service.getMessageMaster('000001238');
                //     this.personalDetailsErrObj.shortName = this._service.getMessageMaster('AD-03');
                //     this.pinCityState = this._service.getMessageMaster('PINLDR-001');
                //   } else {
                //     const SSNData = JSON.parse(SSNRes['response']);
                //     this.fetchedSSNData = SSNData;
                //     // console.log(this.fetchedSSNData);
                //     SSNData['LASTNAME'] = SSNData['LAST_NAME'];
                //     delete SSNData['LAST_NAME'];
                //     const addressLine1 = SSNData['ADDRESS_LINE_1'] || '';
                //     const addressLine2 = SSNData['ADDRESS_LINE_2'] || '';
                //     const addressLine3 = SSNData['ADDRESS_LINE_3'] || '';
                //     const state = SSNData['STATE'] || '';
                //     const age = SSNData['AGE'] || '';
                //     const gender = SSNData['GENDER'] || '';
                //     const pincode = SSNData['PIN'] || '';
                //     this.SSNObject.firstName = this.SSNObject.shortName = SSNData['FIRST_NAME'];
                //     this.SSNObject.lastName = SSNData['LASTNAME'];
                //     this.SSNObject.gender = SSNData['GENDER'];
                //     // starts here Father validation 
                //     SSNData['FATHER_NAME'] = SSNData['FATHER_NAME'].toLowerCase().split(" ").filter(n => n).join(" ");
                //     if (SSNData['FATHER_NAME'].trim() != "") {
                //       this.faNameFilled = true;
                //       this.SSNObject['fathersName'] = SSNData['FATHER_NAME'];
                //       this.SSNObject.fatherNameDisable = true;
                //       var specialregex = /[!"#$%&'()*+.\:,<=>?@\[\\\]^_`{|}~-]/;
                //       if (this.SSNObject['fathersName'].toUpperCase().indexOf("/O") >= 0 && specialregex.test(this.SSNObject['fathersName']) == true) {
                //         var frst = this.SSNObject['fathersName'].search(specialregex);
                //         var lst = this.SSNObject['fathersName'].lastIndexOf("");
                //         this.SSNObject['fathersName'] = this.SSNObject['fathersName'].slice(frst + 1, lst);
                //         // this.SSNObject['fathersName'].toUpperCase().indexOf("W/O") >= 0
                //         if (!this.SSNObject['fathersName'].split(" ")[0] || specialregex.test(this.SSNObject['fathersName']) == true) {
                //           this.SSNObject['fathersName'] = this.SSNObject['fathersName'].split(" ").splice(1, this.SSNObject['fathersName'].length).join(" ");
                //         }
                //       } else if (this.SSNObject['fathersName'].toUpperCase().indexOf("/O") >= 0) {
                //         if (this.SSNObject['fathersName'].toUpperCase().indexOf("W/O") >= 0) {
                //           this.SSNObject['fathersName'] = " ";
                //           this.SSNObject.fatherNameDisable = false;
                //         }
                //         else {
                //           this.SSNObject['fathersName'] = this.SSNObject['fathersName'].split(" ").splice(1, this.SSNObject['fathersName'].length).join(" ");
                //         }
                //       }
                //       else {
                //         this.SSNObject.fatherNameDisable = false;/*father name with editabe and value is coming*/
                //       }
                //     }
                //     else {
                //       this.SSNObject.fatherNameDisable = false;
                //     }
                //     // Ends here Father validation 
                //     this.SSNObject.location = addressLine1 ? this.SSNObject.location = addressLine1 : this.SSNObject.location = '';
                //     this.SSNObject.location = addressLine2 ? this.SSNObject.location = this.SSNObject.location + ',' + addressLine2
                //       : this.SSNObject.location = this.SSNObject.location;
                //     this.SSNObject.location = addressLine3 ? this.SSNObject.location = this.SSNObject.location + ',' + addressLine3
                //       : this.SSNObject.location = this.SSNObject.location;
                //     this.SSNObject.location = state ? this.SSNObject.location = this.SSNObject.location + ',' + state
                //       : this.SSNObject.location = this.SSNObject.location;
                //     this.SSNObject.location = pincode ? this.SSNObject.location = this.SSNObject.location + '-' + pincode
                //       : this.SSNObject.location = this.SSNObject.location;
                //     SSNData['MIDDLE_NAME'] = SSNData['MIDDLE_NAME'] ?
                //       SSNData['MIDDLE_NAME'] = ' ' + SSNData['MIDDLE_NAME'] + ' ' : SSNData['MIDDLE_NAME'] = ' ';
                //     this.SSNObject.name = (SSNData['FIRST_NAME'] + SSNData['MIDDLE_NAME'] + SSNData['LASTNAME']) || '';
                //     this.dob_forAccountCreation = SSNData['DOB'];
                //     if (SSNData['DOB']) {
                //       this.SSNObject.dob = this.Monthformat(SSNData['DOB']);// By jack sparrow
                //     }
                //     else {
                //       this.SSNObject.dob = "";
                //     }
                //     // this.Monthformat(SSNData['DOB']);// By jack sparrow
                //     this.SSNObject.gender = gender + ', ' + age + ' years';
                //     this.SSNObject['photograph'] = SSNData['PHOTOGRAPH'];
                //     this.photographSync = SSNData['PHOTOGRAPH'];
                //     this.personalDetailsErrObj.fathersName = this._service.getMessageMaster('000001233');
                //     this.personalDetailsErrObj.emailId = this._service.getMessageMaster('000001231');
                //     this.personalDetailsErrObj.mname = this._service.getMessageMaster('000001232');
                //     this.personalDetailsErrObj.addressLine2 = this._service.getMessageMaster('000001239');
                //     this.personalDetailsErrObj.addressLine1 = this._service.getMessageMaster('000001234');
                //     this.personalDetailsErrObj.state = this._service.getMessageMaster('000001236');
                //     this.personalDetailsErrObj.city = this._service.getMessageMaster('000001235');
                //     this.personalDetailsErrObj.pincode = this._service.getMessageMaster('000001237');
                //     this.personalDetailsErrObj.getPincode = this._service.getMessageMaster('0000012312');
                //     this.personalDetailsErrObj.selectAddress = this._service.getMessageMaster('000001238');
                //     this.personalDetailsErrObj.shortName = this._service.getMessageMaster('AD-03');
                //     this.pinCityState = this._service.getMessageMaster('PINLDR-001');
                //   }
                //   // this.personalDetailsErrObj.shortNameMismatch = this._service.getMessageMaster('AD-02');
                // }
                PersonalInfoComponent.prototype.setFormData = function () {
                    // console.log(this.fetchedSSNData);
                    //this.SSNObject['shortName'] = this.firstName_attached;
                    this.SSNPersonalDetails = this._fb.group({
                        marital_status: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required].length[1]],
                        addressChoosen: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]],
                        shortName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]],
                        email: ['', _shared_custom_validators__WEBPACK_IMPORTED_MODULE_4__["CustomValidators"].vaildEmail],
                        motherName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _shared_custom_validators__WEBPACK_IMPORTED_MODULE_4__["CustomValidators"].onlyAlpha]],
                        fathersName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]],
                    });
                };
                // // initItemRows() {
                // //   return new FormGroup({
                // //     addressline1: new FormControl('', Validators.required),
                // //     addressline2: new FormControl('', Validators.required),
                // //     addressline3: new FormControl('', []),
                // //     landmark: new FormControl('', []),
                // //     pincode: new FormControl('', [Validators.required, Validators.minLength(6)]),
                // //     city: new FormControl({ value: '' }, Validators.required),
                // //     state: new FormControl({ value: '' }, Validators.required)
                // //   });
                // // }
                // addAddressFields() {
                //   this.SSNPersonalDetails.addControl('addressline1', new FormControl('', Validators.required));
                //   this.SSNPersonalDetails.addControl('addressline2', new FormControl('', Validators.required));
                //   // this.SSNPersonalDetails.addControl('addressline3', new FormControl(''));
                //   this.SSNPersonalDetails.addControl('landmark', new FormControl(''));
                //   this.SSNPersonalDetails.addControl('pincode', new FormControl('', [Validators.required, Validators.minLength(6)]));
                //   this.SSNPersonalDetails.addControl('city', new FormControl('', [Validators.required]));
                //   this.SSNPersonalDetails.addControl('state', new FormControl('', [Validators.required]));
                //  // this.SSNPersonalDetails.addControl('state', new FormControl('', [Validators.required]));
                // }
                // removeAddressFields() {
                //   this.SSNObject['addressline1'] = '';
                //   this.SSNObject['addressline2'] = '';
                //   // this.SSNObject['addressline3'] = '';
                //   this.SSNObject['landmark'] = '';
                //   this.SSNObject['state'] = '';
                //   this.SSNObject['city'] = '';
                //   this.SSNObject['pincode'] = '';
                //   this.SSNPersonalDetails.removeControl('addressline1');
                //   this.SSNPersonalDetails.removeControl('addressline2');
                //   // this.SSNPersonalDetails.removeControl('addressline3');
                //   this.SSNPersonalDetails.removeControl('landmark');
                //   this.SSNPersonalDetails.removeControl('city');
                //   this.SSNPersonalDetails.removeControl('state');
                //   this.SSNPersonalDetails.removeControl('pincode');
                // }
                // checkForm() {
                //   // console.log(this.SSNPersonalDetails);
                // }
                // // By aditya starts Here Short name
                // ShortNameCheck() {
                //   let SSNName = this.SSNObject.name;
                //   let res = SSNName.split(" ");
                //   let resArray = [];
                //   for (let i = 0; i <= res.length - 1; i++) {
                //     resArray.push(res[i]);
                //   }
                //   let frstIndx = SSNName.indexOf(" ");
                //   let lastIndx = SSNName.lastIndexOf(" ");
                //   let charzero = SSNName.charAt(0);
                //   let charone = SSNName.charAt(frstIndx + 1);
                //   let charlast = SSNName.charAt(lastIndx + 1);
                //   resArray.push(charzero);
                //   resArray.push(charone);
                //   resArray.push(charlast);
                //   resArray = resArray.map(function (x) { return x.toUpperCase() });
                //   let df = this.SSNObject.shortName;
                //   let shortInput = df.split(" ");
                //   shortInput = shortInput.map(function (x) { return x.toUpperCase() });
                //   let output;
                //   for (let i = 0; i <= shortInput.length - 1; i++) {
                //     if ((resArray.indexOf(shortInput[i]) > -1) != true) {
                //       output = true;
                //     }
                //   }
                //   if (output == true) {
                //     this.Namecheck = true;
                //     this.personalDetailsErrObj.shortNameMismatch = this._service.getMessageMaster('AD-02');
                //     // this.dialogue.alertBox({
                //     //   title: 'Error',
                //     //   message: this._service.getMessageMaster('AD-01'),
                //     //   messageType: 'error',
                //     //   actionlabel: ['Close'],
                //     // }).take(1).subscribe((res) => {
                //     //   // console.log(res);
                //     //   return;
                //     // })
                //   }
                //   // const shortNameMsg= this._service.getMessageMaster('AD-01');
                //   // }
                //   else {
                //     this.Namecheck = false;
                //   }
                // }
                // // By aditya Ends here Ends name
                // HideError() {
                //   this.personalDetailsErrObj.shortNameMismatch = false;
                // }
                PersonalInfoComponent.prototype.submitForm = function () {
                    this.ssnUserData = this._service.getSsnData();
                    this.ssnUserData.email = this.SSNObject.email;
                    this.ssnUserData.motherMaidenName = this.SSNObject.motherMaidenName;
                    this.ssnUserData.fathersName = this.SSNObject.fathersName;
                    this.ssnUserData.nameOnCard = this.SSNObject.nameOnCard;
                    this.ssnUserData.maritalStatus = this.SSNObject.maritalStatus;
                    if (this.SSNObject.addressLine1) {
                        this.ssnUserData.addressLine1 = this.SSNObject.addressLine1;
                    }
                    if (this.SSNObject.addressLine2) {
                        this.ssnUserData.addressLine2 = this.SSNObject.addressLine2;
                    }
                    if (this.SSNObject.landmark) {
                        this.ssnUserData.landmark = this.SSNObject.landmark;
                    }
                    if (this.SSNObject.pincode) {
                        this.ssnUserData.pincode = this.SSNObject.pincode;
                    }
                    if (this.SSNObject.city) {
                        this.ssnUserData.city = this.SSNObject.city;
                    }
                    if (this.SSNObject.state) {
                        this.ssnUserData.state = this.SSNObject.state;
                    }
                    this._service.setSsnData(this.ssnUserData);
                    this.router.navigate(['pan']);
                    //this.ShortNameCheck();
                    if (this.Namecheck == true) {
                        return false;
                    }
                    if (this.SSNPersonalDetails.value['addressChoosen']['VALUE'] === '') {
                        this.dialogue.alertBox({
                            title: 'Error',
                            message: 'Please Select the address option',
                            messageType: 'error',
                            actionlabel: ['Close']
                        }).take(1).subscribe(function (res) {
                            // console.log(res);
                        });
                        return false;
                    }
                    //   const masterData = this._service.fetchMesaageSessionData();
                    //   this._service.storeMasterData('null');
                    //   // ** const storedSSN = this.SSNData.getSSNNumber();
                    //   //------------------------------- By aditya starts here ----------------------------------------
                    //   // ** let form_detailsPersonal = this.SSNPersonalDetails.value;
                    //   // if (form_detailsPersonal.addressChoosen === true) {
                    //   const reqObjSPP = [{
                    //     processName: 'SPPRGETCITYSTATE',
                    //     data: [{
                    //       'X_PINCODE': this.fetchedSSNData['PIN']
                    //     }]
                    //   }];
                    //   // Loader starts here
                    //   this.platware.callPlatware(reqObjSPP).subscribe(res => {
                    //       try {
                    //         // if (this.SSNObject['addressChoosen'] === 'NO' || this.SSNObject['addressChoosen'] === 'no') {
                    //         //   dataLayer.push({
                    //         //     'url': '/vpv/sa-abhi/userregistration/SSNfetched/next',
                    //         //     'event': 'SA_SSNFetchedNext',
                    //         //     'PermanentAddress': 'No'	
                    //         //     })
                    //         //   dataLayer.push({
                    //         //       'url': '/vpv/sa-abhi/userregistration/otheraddress/next',
                    //         //       'event': 'SA_OtherAddressNext',
                    //         //       })   
                    //         // }
                    //         // if (this.SSNObject['addressChoosen'] === 'YES' || this.SSNObject['addressChoosen'] === 'yes') {
                    //         //   dataLayer.push({
                    //         //     'url': '/vpv/sa-abhi/userregistration/SSNfetched/next',
                    //         //     'event': 'SA_SSNFetchedNext',
                    //         //     'PermanentAddress': 'Yes'	
                    //         //     })
                    //         // }
                    //           // Loader Ends here
                    //           this.pincode_loader = false;
                    //           // console.log(res);
                    //           if (res[0].data.length) {
                    //             masterData.AOF.DATA.ADDRESS[0].PIN_CITY.VALUE=res[0].data[0].city || '';
                    //             masterData.AOF.DATA.ADDRESS[0].PIN_STATE.VALUE=res[0].data[0].state || '';
                    //             this.masterDataSync(masterData);
                    //           } else {
                    //             masterData.AOF.DATA.ADDRESS[0].PIN_CITY.VALUE="";
                    //             masterData.AOF.DATA.ADDRESS[0].PIN_STATE.VALUE="";
                    //             this.masterDataSync(masterData);
                    //           }
                    //       } catch(error){
                    //     this.apploader.hideLoader();
                    //        this.dialogue.alertBox({
                    //           title: 'Error',
                    //           message: this._service.getCatchmsg(),
                    //           messageType: 'error',
                    //           actionlabel: ['Close']
                    //         }).take(1).subscribe((res) => {
                    //            this.router.navigate(['/mobile']);
                    //         });
                    //      }
                    //   });
                    //   // }
                    //   // err => {
                    //   //   this.pincode_loader = false;
                    //   //   const errMsg = err.error.error[0].data.Message || 'Some Error Occurred..Please Try Again..!!';
                    //   //   this.dialogue.alertBox({
                    //   //     title: 'Error',
                    //   //     message: errMsg,
                    //   //     messageType: 'error',
                    //   //     actionlabel: ['Close']
                    //   //   }).take(1).subscribe((res) => {
                    //   //     // console.log(res);
                    //   //   });
                    //   // });
                    //   //--------------------------------- By aditya Ends here --------------------------------------------
                    //   // const masterData = this._service.fetchMesaageSessionData();
                    //   // this._service.storeMasterData('null');
                    //   // const storedSSN = this.SSNData.getSSNNumber();
                    //   // this.SSNData.clearSSN();
                    //   // const masterData.AOF.DATA.PSNL_DTL = masterData.AOF.DATA.PSNL_DTL;
                    //   // const masterData.AOF.DATA.ADDRESS = masterData.AOF.DATA.ADDRESS;
                    //   // const  masterData.AOF.DATA.SSN = masterData.AOF.DATA.SSN;
                };
                return PersonalInfoComponent;
            }());
            PersonalInfoComponent.ctorParameters = function () { return [
                { type: _shared_activate_module__WEBPACK_IMPORTED_MODULE_7__["WorkflowService"] },
                { type: _shared_progress_service__WEBPACK_IMPORTED_MODULE_10__["ProgressService"] },
                { type: _shared_dialogue_dialogue_service__WEBPACK_IMPORTED_MODULE_6__["DialogueService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _app_service__WEBPACK_IMPORTED_MODULE_3__["appService"] },
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"] },
                { type: _shared_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_11__["PlatformLocation"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_11__["Location"] },
                { type: _shared_screen_name__WEBPACK_IMPORTED_MODULE_8__["NameService"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
            ]; };
            PersonalInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-personal-info',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./personal-info.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/personal-info/personal-info.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./personal-info.component.css */ "./src/app/personal-info/personal-info.component.css")).default]
                })
            ], PersonalInfoComponent);
            /***/ 
        }),
        /***/ "./src/app/shared/activate-guards.ts": 
        /*!*******************************************!*\
          !*** ./src/app/shared/activate-guards.ts ***!
          \*******************************************/
        /*! exports provided: WorkflowGuard */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkflowGuard", function () { return WorkflowGuard; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _activate_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./activate.module */ "./src/app/shared/activate.module.ts");
            var WorkflowGuard = /** @class */ (function () {
                function WorkflowGuard(router, _service) {
                    this.router = router;
                    this._service = _service;
                }
                WorkflowGuard.prototype.canActivate = function (route, state) {
                    var path = route.routeConfig.path;
                    // console.log(this._service.STEPS[path]);
                    var SSNBridge = sessionStorage.getItem('SSNBridge');
                    var depositBridge = sessionStorage.getItem('depositBridge');
                    if (SSNBridge === 'YES') {
                        this._service.STEPS['SSN'] = true;
                        sessionStorage.setItem('SSNBridge', 'null');
                    }
                    if (depositBridge === 'YES') {
                        this._service.STEPS['deposit'] = true;
                        sessionStorage.setItem('depositBridge', 'null');
                    }
                    if (!this._service.STEPS[path]) {
                        this.router.navigate(['/mobile']);
                        return false;
                    }
                    return this._service.STEPS[path];
                };
                return WorkflowGuard;
            }());
            WorkflowGuard.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _activate_module__WEBPACK_IMPORTED_MODULE_3__["WorkflowService"] }
            ]; };
            WorkflowGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], WorkflowGuard);
            /***/ 
        }),
        /***/ "./src/app/shared/activate.module.ts": 
        /*!*******************************************!*\
          !*** ./src/app/shared/activate.module.ts ***!
          \*******************************************/
        /*! exports provided: WorkflowService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkflowService", function () { return WorkflowService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var WorkflowService = /** @class */ (function () {
                function WorkflowService() {
                    this.STEPS = {
                        mobile: true,
                        SSN: false,
                        personalInfo: false,
                        pan: false,
                        nomineeDetails: false,
                        guardian: false,
                        accountSummary: false,
                        deposit: false,
                        biometricKYC: false,
                        congratulation: false,
                        twoStep: false
                    };
                }
                return WorkflowService;
            }());
            WorkflowService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], WorkflowService);
            /***/ 
        }),
        /***/ "./src/app/shared/autofocus.directive.ts": 
        /*!***********************************************!*\
          !*** ./src/app/shared/autofocus.directive.ts ***!
          \***********************************************/
        /*! exports provided: AutofocusDirective */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutofocusDirective", function () { return AutofocusDirective; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AutofocusDirective = /** @class */ (function () {
                function AutofocusDirective(el) {
                    this.el = el;
                }
                AutofocusDirective.prototype.ngAfterViewInit = function () {
                    this.el.nativeElement.focus();
                };
                return AutofocusDirective;
            }());
            AutofocusDirective.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
            ]; };
            AutofocusDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
                    selector: '[appAutofocus]'
                })
            ], AutofocusDirective);
            /***/ 
        }),
        /***/ "./src/app/shared/custom.validators.ts": 
        /*!*********************************************!*\
          !*** ./src/app/shared/custom.validators.ts ***!
          \*********************************************/
        /*! exports provided: CustomValidators */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomValidators", function () { return CustomValidators; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var CustomValidators = /** @class */ (function () {
                function CustomValidators() {
                }
                CustomValidators.vaildEmail = function (c) {
                    var email = c.value;
                    var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
                    var isValid = true;
                    var message = {
                        'vaildEmail': {
                            'message': 'Should be valid email.'
                        }
                    };
                    if (reg.test(email)) {
                        isValid = true;
                    }
                    else {
                        isValid = false;
                    }
                    return isValid ? null : message;
                };
                CustomValidators.onlyAlpha = function (c) {
                    var value = c.value;
                    var reg = /^[a-z\ \s]+$/gi;
                    var isValid = true;
                    var message = {
                        'onlyalpha': {
                            'message': 'Should be alphabets only.'
                        }
                    };
                    if (reg.test(value)) {
                        isValid = true;
                    }
                    else {
                        isValid = false;
                    }
                    return isValid ? null : message;
                };
                CustomValidators.age = function (c) {
                    var num = Number(c.value);
                    var isValid = !isNaN(num) && num >= 18 && num <= 85;
                    var message = {
                        'age': {
                            'message': 'The age must be a valid number between 18 and 85' // Will changes the error defined in errors helper.
                        }
                    };
                    return isValid ? null : message;
                };
                return CustomValidators;
            }());
            /***/ 
        }),
        /***/ "./src/app/shared/dialogue/dialogue.component.css": 
        /*!********************************************************!*\
          !*** ./src/app/shared/dialogue/dialogue.component.css ***!
          \********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("            .dmTransition {\r\n                transition: all 0.5s ease-in-out;\r\n                -webkit-transition: all 0.5s ease-in-out;\r\n                -moz-transition: all 0.5s ease-in-out;\r\n                -ms-transition: all 0.5s ease-in-out;\r\n            }\r\n            \r\n            .dmAnimated {\r\n                -webkit-animation-duration: 0.5s;\r\n                animation-duration: 0.5s;\r\n                -webkit-animation-fill-mode: both;\r\n                animation-fill-mode: both;\r\n            }\r\n            \r\n            .dmToastAnimated {\r\n                -webkit-animation-duration: 0.4s;\r\n                animation-duration: 0.4s;\r\n                -webkit-animation-fill-mode: both;\r\n                animation-fill-mode: both;\r\n                -webkit-animation-timing-function: ease-out;\r\n                animation-timing-function: ease-out;\r\n            }\r\n            \r\n            .dmAnimated.delay {\r\n                -webkit-animation-delay: 0.3s;\r\n                animation-delay: 0.3s;\r\n            }\r\n            \r\n            .dmAnimated.fadeIn {\r\n                -webkit-animation-name: fadeIn;\r\n                animation-name: fadeIn;\r\n            }\r\n            \r\n            .dmAnimated.scaleIn {\r\n                -webkit-animation-name: scaleIn;\r\n                animation-name: scaleIn;\r\n            }\r\n            \r\n            .dmAnimated.scaleOut {\r\n                -webkit-animation-name: scaleOut;\r\n                animation-name: scaleOut;\r\n            }\r\n            \r\n            .fadeInUp {\r\n                -webkit-animation-name: fadeInUp;\r\n                animation-name: fadeInUp;\r\n            }\r\n            \r\n            @-webkit-keyframes fadeIn {\r\n                0% {\r\n                    opacity: 0;\r\n                }\r\n                100% {\r\n                    opacity: 1;\r\n                }\r\n            }\r\n            \r\n            @keyframes fadeIn {\r\n                0% {\r\n                    opacity: 0;\r\n                }\r\n                100% {\r\n                    opacity: 1;\r\n                }\r\n            }\r\n            \r\n            @-webkit-keyframes scaleIn {\r\n                0% {\r\n                    transform: scale(0);\r\n                    /* CSS3 */\r\n                    -moz-transform: scale(0);\r\n                    /* Firefox */\r\n                    -webkit-transform: scale(0);\r\n                    /* Webkit */\r\n                    -o-transform: scale(0);\r\n                    /* Opera */\r\n                    -ms-transform: scale(0);\r\n                    /* IE 9 */\r\n                }\r\n                100% {\r\n                    transform: scale(1);\r\n                    /* CSS3 */\r\n                    -moz-transform: scale(1);\r\n                    /* Firefox */\r\n                    -webkit-transform: scale(1);\r\n                    /* Webkit */\r\n                    -o-transform: scale(1);\r\n                    /* Opera */\r\n                    -ms-transform: scale(1);\r\n                    /* IE 9 */\r\n                }\r\n            }\r\n            \r\n            @keyframes scaleIn {\r\n                0% {\r\n                    transform: scale(0);\r\n                    /* CSS3 */\r\n                    -moz-transform: scale(0);\r\n                    /* Firefox */\r\n                    -webkit-transform: scale(0);\r\n                    /* Webkit */\r\n                    -o-transform: scale(0);\r\n                    /* Opera */\r\n                    -ms-transform: scale(0);\r\n                    /* IE 9 */\r\n                }\r\n                100% {\r\n                    transform: scale(1);\r\n                    /* CSS3 */\r\n                    -moz-transform: scale(1);\r\n                    /* Firefox */\r\n                    -webkit-transform: scale(1);\r\n                    /* Webkit */\r\n                    -o-transform: scale(1);\r\n                    /* Opera */\r\n                    -ms-transform: scale(1);\r\n                    /* IE 9 */\r\n                }\r\n            }\r\n            \r\n            @-webkit-keyframes scaleOut {\r\n                0% {\r\n                    transform: scale(1);\r\n                    /* CSS3 */\r\n                    -moz-transform: scale(1);\r\n                    /* Firefox */\r\n                    -webkit-transform: scale(1);\r\n                    /* Webkit */\r\n                    -o-transform: scale(1);\r\n                    /* Opera */\r\n                    -ms-transform: scale(1);\r\n                    /* IE 9 */\r\n                }\r\n                100% {\r\n                    transform: scale(0);\r\n                    /* CSS3 */\r\n                    -moz-transform: scale(0);\r\n                    /* Firefox */\r\n                    -webkit-transform: scale(0);\r\n                    /* Webkit */\r\n                    -o-transform: scale(0);\r\n                    /* Opera */\r\n                    -ms-transform: scale(0);\r\n                    /* IE 9 */\r\n                }\r\n            }\r\n            \r\n            @keyframes scaleOut {\r\n                0% {\r\n                    transform: scale(1);\r\n                    /* CSS3 */\r\n                    -moz-transform: scale(1);\r\n                    /* Firefox */\r\n                    -webkit-transform: scale(1);\r\n                    /* Webkit */\r\n                    -o-transform: scale(1);\r\n                    /* Opera */\r\n                    -ms-transform: scale(1);\r\n                    /* IE 9 */\r\n                }\r\n                100% {\r\n                    transform: scale(0);\r\n                    /* CSS3 */\r\n                    -moz-transform: scale(0);\r\n                    /* Firefox */\r\n                    -webkit-transform: scale(0);\r\n                    /* Webkit */\r\n                    -o-transform: scale(0);\r\n                    /* Opera */\r\n                    -ms-transform: scale(0);\r\n                    /* IE 9 */\r\n                }\r\n            }\r\n            \r\n            @-webkit-keyframes fadeInUp {\r\n                0% {\r\n                    opacity: 0;\r\n                    -webkit-transform: translateY(40px);\r\n                }\r\n                100% {\r\n                    opacity: 1;\r\n                    -webkit-transform: translateY(0);\r\n                }\r\n            }\r\n            \r\n            @keyframes fadeInUp {\r\n                0% {\r\n                    opacity: 0;\r\n                    transform: translateY(40px);\r\n                }\r\n                100% {\r\n                    opacity: 1;\r\n                    transform: translateY(0);\r\n                }\r\n            }\r\n            \r\n            .dmDialogueContainer {\r\n                display: block;\r\n                position: fixed;\r\n                background-color: rgba(0, 0, 0, 0.6);\r\n                width: 100vw;\r\n                height: 100vh;\r\n                z-index: 3000;\r\n                top: 0;\r\n            }\r\n            \r\n            .dmDialogue {\r\n                display: block;\r\n                background-color: #ffffff;\r\n                width: 28%;\r\n                height: 30%;\r\n                margin: auto;\r\n                margin-top: 13%;\r\n                border: 2px solid transparent;\r\n                border-radius: 2px;\r\n                box-shadow: 0px 2px 3px #1B1B1B;\r\n                overflow: hidden;\r\n            }\r\n            \r\n            .dmDialogue1 {\r\n                display: block;\r\n                background-color: #ffffff;\r\n                width: 28%;\r\n                margin: auto;\r\n                margin-top: 10%;\r\n                border: 2px solid transparent;\r\n                border-radius: 2px;\r\n                box-shadow: 0px 2px 3px #1B1B1B;\r\n                overflow: hidden;\r\n            }\r\n            \r\n            .dmDialogueHeader {\r\n                display: block;\r\n                /* height: 15%; */\r\n                /* box-shadow: 0px 1px 5px #d2d2d2; */\r\n                text-align: center;\r\n            }\r\n            \r\n            .dmDialogueHeaderTitle,\r\n            .dmDialogueClose {\r\n                display: inline-block;\r\n                height: 100%;\r\n                text-align: right;\r\n                vertical-align: top;\r\n            }\r\n            \r\n            .dmDialogueClose>span {\r\n                display: inline-block;\r\n                cursor: pointer;\r\n                font-size: 1.3em;\r\n                color: #A9A9A9;\r\n            }\r\n            \r\n            .dmDialogueClose>span:hover {\r\n                color: #717171;\r\n            }\r\n            \r\n            .dmDialogueHeaderTitle {\r\n                width: 79%;\r\n                text-align: left;\r\n            }\r\n            \r\n            .dmDialogueHeaderTitle>label {\r\n                display: inline-block;\r\n                margin: 2% 0 0 5%;\r\n                font-size: 1.3em;\r\n                font-weight: bold;\r\n                color: #716262;\r\n            }\r\n            \r\n            .dmDialogueClose {\r\n                width: 98%;\r\n            }\r\n            \r\n            .dmDialogueBody {\r\n                display: block;\r\n                /* height: 50%; */\r\n                overflow: auto;\r\n                text-align: center;\r\n                /*border-bottom: 1px solid #d2d2d2;*/\r\n                font-family: 'Nunito-Regular' !important;\r\n            }\r\n            \r\n            .dmDialogueBody>p {\r\n                color: #716262;\r\n                margin: 2% 4%;\r\n            }\r\n            \r\n            .dmDialogueBody .dmDialogTitleBody .dmDialogTitleHeading {\r\n                display: block;\r\n                font-size: 25px;\r\n                /*font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif*/\r\n            }\r\n            \r\n            .dmDialogueBody .dmDialogTitleBody .dmDialogTitleSection {\r\n                display: block;\r\n                font-size: 15px;\r\n                padding-left: 10px;\r\n                padding-right: 10px;\r\n                /*font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif*/\r\n            }\r\n            \r\n            .dmDialogueActions {\r\n                display: block;\r\n                width: 100%;\r\n                padding-top: 30px;\r\n                /*height: 21%;*/\r\n                text-align: center;\r\n            }\r\n            \r\n            .dmDialogueActions>button {\r\n                padding: 8px 2%;\r\n                min-width: 25%;\r\n                box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2);\r\n                text-shadow: none;\r\n                height: 70%;\r\n                display: inline-block;\r\n                /* margin: 15px 3%; */\r\n                margin-bottom: 20px;\r\n                color: #ffffff;\r\n                border: 1px;\r\n                border-radius: 20px;\r\n                margin-top: 10px;\r\n                margin-left: 5px;\r\n            }\r\n            \r\n            .dmDialogueActions>ul {\r\n                margin: 0px;\r\n                padding: 0px;\r\n                list-style: none;\r\n                width: 100%;\r\n                height: 100%;\r\n                text-align: center;\r\n            }\r\n            \r\n            .dmDialogueActions>ul>li {\r\n                display: inline-block;\r\n                height: 100%;\r\n                cursor: pointer;\r\n                width: 100%;\r\n            }\r\n            \r\n            .dmDialogueActions>ul>li>button {\r\n                border: none;\r\n                outline: none;\r\n                height: 100%;\r\n                display: block;\r\n            }\r\n            \r\n            .dmToast {\r\n                display: block;\r\n                position: fixed;\r\n                bottom: 15%;\r\n                margin: auto;\r\n                width: 40%;\r\n                left: 50%;\r\n                margin-left: -20%;\r\n                min-height: 7vh;\r\n                /*//background: rgba(0,0,0,0.7);*/\r\n                /*//left: 50%;*/\r\n                border: 1px solid;\r\n                border-radius: 2px;\r\n                z-index: 3000;\r\n                background-color: #671773b3 !important;\r\n                color: #ffffff !important;\r\n                font-style: italic;\r\n                /*        box-shadow: 0px 2px 3px #1B1B1B;*/\r\n                /*        transform: translateX(-50%);\r\n    -webkit-transform: translateX(-50%);\r\n    -moz-transform: translateX(-50%);\r\n    -ms-transform: translateX(-50%);\r\n    -o-transform:translateX(-50%);*/\r\n            }\r\n            \r\n            .dmToast .dmDialogueToastIcon {\r\n                display: inline-block;\r\n                padding-left: 18px;\r\n                /* padding: 12px; */\r\n                padding-top: 12px;\r\n                padding-right: 15px;\r\n                padding-bottom: 14px;\r\n                background-color: #67177300 !important;\r\n                /* height: 30px; */\r\n            }\r\n            \r\n            .dmToast .dmToastMessage {\r\n                display: inline-block;\r\n                margin: 2% 3%;\r\n                word-break: word-wrap;\r\n            }\r\n            \r\n            .dmToast .dmToastClose {\r\n                display: inline-block;\r\n                /* width: 7%; */\r\n                text-align: right;\r\n                /* position: absolute; */\r\n                color: #ffffff;\r\n                right: 5%;\r\n                position: absolute;\r\n                text-align: center;\r\n                font-size: 1.0em;\r\n                cursor: pointer;\r\n                top: 20%;\r\n            }\r\n            \r\n            .dmToast .dmToastClose:hover {\r\n                color: #ffffff;\r\n            }\r\n            \r\n            .dmToast .dmToastClose>span {\r\n                display: inline-block;\r\n                margin: 13% 2%;\r\n                font-style: normal;\r\n            }\r\n            \r\n            .oh-snap {\r\n                color: #f37021;\r\n                margin-top: 12px;\r\n                margin-bottom: 12px;\r\n            }\r\n            \r\n            .p-center-errpor {\r\n                width: 70%;\r\n                margin: 0 auto;\r\n                color: #646464;\r\n            }\r\n            \r\n            .try-again {\r\n                border-radius: 0 !important;\r\n                background-color: #f37021 !important;\r\n                color: white !important;\r\n                font-family: 'Nunito-Regular' !important;\r\n            }\r\n            \r\n            .mat-dialog-container {\r\n                box-shadow: 0 11px 15px -7px rgba(0, 0, 0, .2), 0 24px 38px 3px rgba(0, 0, 0, .14), 0 9px 46px 8px rgba(0, 0, 0, .12);\r\n                display: block;\r\n                padding: 10px;\r\n                border-radius: 2px;\r\n                box-sizing: border-box;\r\n                overflow: auto;\r\n                outline: 0;\r\n                width: 100%;\r\n                height: 100%;\r\n                min-height: inherit;\r\n                max-height: inherit;\r\n            }\r\n            \r\n            @media screen and (max-width: 992px) {\r\n                .dmDialogue1 {\r\n                    width: 86%;\r\n                    height: 45vh;\r\n                    /* background-color: blue; */\r\n                    position: absolute;\r\n                    left: 0;\r\n                    right: 0;\r\n                    top: 0;\r\n                    bottom: 0;\r\n                    margin: auto;\r\n                    max-width: 100%;\r\n                    max-height: 100%;\r\n                    overflow: auto;\r\n                }\r\n                .dmDialogTitleBody>img {\r\n                    width: 50px !important;\r\n                }\r\n                .p-center-errpor {\r\n                    width: 84%;\r\n                    margin: 0 auto;\r\n                    color: #646464;\r\n                }\r\n                .dmToast {\r\n                    width: 80%;\r\n                    left: 30%;\r\n                }\r\n            }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2RpYWxvZ3VlL2RpYWxvZ3VlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IllBQVk7Z0JBQ0ksZ0NBQWdDO2dCQUNoQyx3Q0FBd0M7Z0JBQ3hDLHFDQUFxQztnQkFDckMsb0NBQW9DO1lBQ3hDOztZQUVBO2dCQUNJLGdDQUFnQztnQkFHaEMsd0JBQXdCO2dCQUN4QixpQ0FBaUM7Z0JBR2pDLHlCQUF5QjtZQUM3Qjs7WUFFQTtnQkFDSSxnQ0FBZ0M7Z0JBR2hDLHdCQUF3QjtnQkFDeEIsaUNBQWlDO2dCQUdqQyx5QkFBeUI7Z0JBQ3pCLDJDQUEyQztnQkFHM0MsbUNBQW1DO1lBQ3ZDOztZQUVBO2dCQUNJLDZCQUE2QjtnQkFHN0IscUJBQXFCO1lBQ3pCOztZQUVBO2dCQUNJLDhCQUE4QjtnQkFHOUIsc0JBQXNCO1lBQzFCOztZQUVBO2dCQUNJLCtCQUErQjtnQkFHL0IsdUJBQXVCO1lBQzNCOztZQUVBO2dCQUNJLGdDQUFnQztnQkFHaEMsd0JBQXdCO1lBQzVCOztZQUVBO2dCQUNJLGdDQUFnQztnQkFHaEMsd0JBQXdCO1lBQzVCOztZQUVBO2dCQUNJO29CQUNJLFVBQVU7Z0JBQ2Q7Z0JBQ0E7b0JBQ0ksVUFBVTtnQkFDZDtZQUNKOztZQW9CQTtnQkFDSTtvQkFDSSxVQUFVO2dCQUNkO2dCQUNBO29CQUNJLFVBQVU7Z0JBQ2Q7WUFDSjs7WUFFQTtnQkFDSTtvQkFDSSxtQkFBbUI7b0JBQ25CLFNBQVM7b0JBQ1Qsd0JBQXdCO29CQUN4QixZQUFZO29CQUNaLDJCQUEyQjtvQkFDM0IsV0FBVztvQkFDWCxzQkFBc0I7b0JBQ3RCLFVBQVU7b0JBQ1YsdUJBQXVCO29CQUN2QixTQUFTO2dCQUNiO2dCQUNBO29CQUNJLG1CQUFtQjtvQkFDbkIsU0FBUztvQkFDVCx3QkFBd0I7b0JBQ3hCLFlBQVk7b0JBQ1osMkJBQTJCO29CQUMzQixXQUFXO29CQUNYLHNCQUFzQjtvQkFDdEIsVUFBVTtvQkFDVix1QkFBdUI7b0JBQ3ZCLFNBQVM7Z0JBQ2I7WUFDSjs7WUF3REE7Z0JBQ0k7b0JBQ0ksbUJBQW1CO29CQUNuQixTQUFTO29CQUNULHdCQUF3QjtvQkFDeEIsWUFBWTtvQkFDWiwyQkFBMkI7b0JBQzNCLFdBQVc7b0JBQ1gsc0JBQXNCO29CQUN0QixVQUFVO29CQUNWLHVCQUF1QjtvQkFDdkIsU0FBUztnQkFDYjtnQkFDQTtvQkFDSSxtQkFBbUI7b0JBQ25CLFNBQVM7b0JBQ1Qsd0JBQXdCO29CQUN4QixZQUFZO29CQUNaLDJCQUEyQjtvQkFDM0IsV0FBVztvQkFDWCxzQkFBc0I7b0JBQ3RCLFVBQVU7b0JBQ1YsdUJBQXVCO29CQUN2QixTQUFTO2dCQUNiO1lBQ0o7O1lBRUE7Z0JBQ0k7b0JBQ0ksbUJBQW1CO29CQUNuQixTQUFTO29CQUNULHdCQUF3QjtvQkFDeEIsWUFBWTtvQkFDWiwyQkFBMkI7b0JBQzNCLFdBQVc7b0JBQ1gsc0JBQXNCO29CQUN0QixVQUFVO29CQUNWLHVCQUF1QjtvQkFDdkIsU0FBUztnQkFDYjtnQkFDQTtvQkFDSSxtQkFBbUI7b0JBQ25CLFNBQVM7b0JBQ1Qsd0JBQXdCO29CQUN4QixZQUFZO29CQUNaLDJCQUEyQjtvQkFDM0IsV0FBVztvQkFDWCxzQkFBc0I7b0JBQ3RCLFVBQVU7b0JBQ1YsdUJBQXVCO29CQUN2QixTQUFTO2dCQUNiO1lBQ0o7O1lBd0RBO2dCQUNJO29CQUNJLG1CQUFtQjtvQkFDbkIsU0FBUztvQkFDVCx3QkFBd0I7b0JBQ3hCLFlBQVk7b0JBQ1osMkJBQTJCO29CQUMzQixXQUFXO29CQUNYLHNCQUFzQjtvQkFDdEIsVUFBVTtvQkFDVix1QkFBdUI7b0JBQ3ZCLFNBQVM7Z0JBQ2I7Z0JBQ0E7b0JBQ0ksbUJBQW1CO29CQUNuQixTQUFTO29CQUNULHdCQUF3QjtvQkFDeEIsWUFBWTtvQkFDWiwyQkFBMkI7b0JBQzNCLFdBQVc7b0JBQ1gsc0JBQXNCO29CQUN0QixVQUFVO29CQUNWLHVCQUF1QjtvQkFDdkIsU0FBUztnQkFDYjtZQUNKOztZQUVBO2dCQUNJO29CQUNJLFVBQVU7b0JBQ1YsbUNBQW1DO2dCQUN2QztnQkFDQTtvQkFDSSxVQUFVO29CQUNWLGdDQUFnQztnQkFDcEM7WUFDSjs7WUF3QkE7Z0JBQ0k7b0JBQ0ksVUFBVTtvQkFDViwyQkFBMkI7Z0JBQy9CO2dCQUNBO29CQUNJLFVBQVU7b0JBQ1Ysd0JBQXdCO2dCQUM1QjtZQUNKOztZQUVBO2dCQUNJLGNBQWM7Z0JBQ2QsZUFBZTtnQkFDZixvQ0FBb0M7Z0JBQ3BDLFlBQVk7Z0JBQ1osYUFBYTtnQkFDYixhQUFhO2dCQUNiLE1BQU07WUFDVjs7WUFFQTtnQkFDSSxjQUFjO2dCQUNkLHlCQUF5QjtnQkFDekIsVUFBVTtnQkFDVixXQUFXO2dCQUNYLFlBQVk7Z0JBQ1osZUFBZTtnQkFDZiw2QkFBNkI7Z0JBQzdCLGtCQUFrQjtnQkFDbEIsK0JBQStCO2dCQUMvQixnQkFBZ0I7WUFDcEI7O1lBRUE7Z0JBQ0ksY0FBYztnQkFDZCx5QkFBeUI7Z0JBQ3pCLFVBQVU7Z0JBQ1YsWUFBWTtnQkFDWixlQUFlO2dCQUNmLDZCQUE2QjtnQkFDN0Isa0JBQWtCO2dCQUNsQiwrQkFBK0I7Z0JBQy9CLGdCQUFnQjtZQUNwQjs7WUFFQTtnQkFDSSxjQUFjO2dCQUNkLGlCQUFpQjtnQkFDakIscUNBQXFDO2dCQUNyQyxrQkFBa0I7WUFDdEI7O1lBRUE7O2dCQUVJLHFCQUFxQjtnQkFDckIsWUFBWTtnQkFDWixpQkFBaUI7Z0JBQ2pCLG1CQUFtQjtZQUN2Qjs7WUFFQTtnQkFDSSxxQkFBcUI7Z0JBQ3JCLGVBQWU7Z0JBQ2YsZ0JBQWdCO2dCQUNoQixjQUFjO1lBQ2xCOztZQUVBO2dCQUNJLGNBQWM7WUFDbEI7O1lBRUE7Z0JBQ0ksVUFBVTtnQkFDVixnQkFBZ0I7WUFDcEI7O1lBRUE7Z0JBQ0kscUJBQXFCO2dCQUNyQixpQkFBaUI7Z0JBQ2pCLGdCQUFnQjtnQkFDaEIsaUJBQWlCO2dCQUNqQixjQUFjO1lBQ2xCOztZQUVBO2dCQUNJLFVBQVU7WUFDZDs7WUFFQTtnQkFDSSxjQUFjO2dCQUNkLGlCQUFpQjtnQkFDakIsY0FBYztnQkFDZCxrQkFBa0I7Z0JBQ2xCLG9DQUFvQztnQkFDcEMsd0NBQXdDO1lBQzVDOztZQUVBO2dCQUNJLGNBQWM7Z0JBQ2QsYUFBYTtZQUNqQjs7WUFFQTtnQkFDSSxjQUFjO2dCQUNkLGVBQWU7Z0JBQ2YsZ0ZBQWdGO1lBQ3BGOztZQUVBO2dCQUNJLGNBQWM7Z0JBQ2QsZUFBZTtnQkFDZixrQkFBa0I7Z0JBQ2xCLG1CQUFtQjtnQkFDbkIsZ0ZBQWdGO1lBQ3BGOztZQUVBO2dCQUNJLGNBQWM7Z0JBQ2QsV0FBVztnQkFDWCxpQkFBaUI7Z0JBQ2pCLGVBQWU7Z0JBQ2Ysa0JBQWtCO1lBQ3RCOztZQUVBO2dCQUNJLGVBQWU7Z0JBQ2YsY0FBYztnQkFDZCxrREFBa0Q7Z0JBQ2xELGlCQUFpQjtnQkFDakIsV0FBVztnQkFDWCxxQkFBcUI7Z0JBQ3JCLHFCQUFxQjtnQkFDckIsbUJBQW1CO2dCQUNuQixjQUFjO2dCQUNkLFdBQVc7Z0JBQ1gsbUJBQW1CO2dCQUNuQixnQkFBZ0I7Z0JBQ2hCLGdCQUFnQjtZQUNwQjs7WUFFQTtnQkFDSSxXQUFXO2dCQUNYLFlBQVk7Z0JBQ1osZ0JBQWdCO2dCQUNoQixXQUFXO2dCQUNYLFlBQVk7Z0JBQ1osa0JBQWtCO1lBQ3RCOztZQUVBO2dCQUNJLHFCQUFxQjtnQkFDckIsWUFBWTtnQkFDWixlQUFlO2dCQUNmLFdBQVc7WUFDZjs7WUFFQTtnQkFDSSxZQUFZO2dCQUNaLGFBQWE7Z0JBQ2IsWUFBWTtnQkFDWixjQUFjO1lBQ2xCOztZQUVBO2dCQUNJLGNBQWM7Z0JBQ2QsZUFBZTtnQkFDZixXQUFXO2dCQUNYLFlBQVk7Z0JBQ1osVUFBVTtnQkFDVixTQUFTO2dCQUNULGlCQUFpQjtnQkFDakIsZUFBZTtnQkFDZixpQ0FBaUM7Z0JBQ2pDLGVBQWU7Z0JBQ2YsaUJBQWlCO2dCQUNqQixrQkFBa0I7Z0JBQ2xCLGFBQWE7Z0JBQ2Isc0NBQXNDO2dCQUN0Qyx5QkFBeUI7Z0JBQ3pCLGtCQUFrQjtnQkFDbEIsMkNBQTJDO2dCQUMzQzs7OzttQ0FJbUI7WUFDdkI7O1lBRUE7Z0JBQ0kscUJBQXFCO2dCQUNyQixrQkFBa0I7Z0JBQ2xCLG1CQUFtQjtnQkFDbkIsaUJBQWlCO2dCQUNqQixtQkFBbUI7Z0JBQ25CLG9CQUFvQjtnQkFDcEIsc0NBQXNDO2dCQUN0QyxrQkFBa0I7WUFDdEI7O1lBRUE7Z0JBQ0kscUJBQXFCO2dCQUNyQixhQUFhO2dCQUNiLHFCQUFxQjtZQUN6Qjs7WUFFQTtnQkFDSSxxQkFBcUI7Z0JBQ3JCLGVBQWU7Z0JBQ2YsaUJBQWlCO2dCQUNqQix3QkFBd0I7Z0JBQ3hCLGNBQWM7Z0JBQ2QsU0FBUztnQkFDVCxrQkFBa0I7Z0JBQ2xCLGtCQUFrQjtnQkFDbEIsZ0JBQWdCO2dCQUNoQixlQUFlO2dCQUNmLFFBQVE7WUFDWjs7WUFFQTtnQkFDSSxjQUFjO1lBQ2xCOztZQUVBO2dCQUNJLHFCQUFxQjtnQkFDckIsY0FBYztnQkFDZCxrQkFBa0I7WUFDdEI7O1lBRUE7Z0JBQ0ksY0FBYztnQkFDZCxnQkFBZ0I7Z0JBQ2hCLG1CQUFtQjtZQUN2Qjs7WUFFQTtnQkFDSSxVQUFVO2dCQUNWLGNBQWM7Z0JBQ2QsY0FBYztZQUNsQjs7WUFFQTtnQkFDSSwyQkFBMkI7Z0JBQzNCLG9DQUFvQztnQkFDcEMsdUJBQXVCO2dCQUN2Qix3Q0FBd0M7WUFDNUM7O1lBRUE7Z0JBQ0kscUhBQXFIO2dCQUNySCxjQUFjO2dCQUNkLGFBQWE7Z0JBQ2Isa0JBQWtCO2dCQUNsQixzQkFBc0I7Z0JBQ3RCLGNBQWM7Z0JBQ2QsVUFBVTtnQkFDVixXQUFXO2dCQUNYLFlBQVk7Z0JBQ1osbUJBQW1CO2dCQUNuQixtQkFBbUI7WUFDdkI7O1lBRUE7Z0JBQ0k7b0JBQ0ksVUFBVTtvQkFDVixZQUFZO29CQUNaLDRCQUE0QjtvQkFDNUIsa0JBQWtCO29CQUNsQixPQUFPO29CQUNQLFFBQVE7b0JBQ1IsTUFBTTtvQkFDTixTQUFTO29CQUNULFlBQVk7b0JBQ1osZUFBZTtvQkFDZixnQkFBZ0I7b0JBQ2hCLGNBQWM7Z0JBQ2xCO2dCQUNBO29CQUNJLHNCQUFzQjtnQkFDMUI7Z0JBQ0E7b0JBQ0ksVUFBVTtvQkFDVixjQUFjO29CQUNkLGNBQWM7Z0JBQ2xCO2dCQUNBO29CQUNJLFVBQVU7b0JBQ1YsU0FBUztnQkFDYjtZQUNKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2RpYWxvZ3VlL2RpYWxvZ3VlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgICAgICAgICAgICAuZG1UcmFuc2l0aW9uIHtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAgICAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICAgICAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5kbUFuaW1hdGVkIHtcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xyXG4gICAgICAgICAgICAgICAgLW1vei1hbmltYXRpb24tZHVyYXRpb246IDAuNXM7XHJcbiAgICAgICAgICAgICAgICAtby1hbmltYXRpb24tZHVyYXRpb246IDAuNXM7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbiAgICAgICAgICAgICAgICAtbW96LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbiAgICAgICAgICAgICAgICAtby1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLmRtVG9hc3RBbmltYXRlZCB7XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcclxuICAgICAgICAgICAgICAgIC1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG4gICAgICAgICAgICAgICAgLW1zLWFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxuICAgICAgICAgICAgICAgIC1tb3otYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxuICAgICAgICAgICAgICAgIC1tcy1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgICAgICAgICAgICAgICAtbW96LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gICAgICAgICAgICAgICAgLW1zLWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5kbUFuaW1hdGVkLmRlbGF5IHtcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjNzO1xyXG4gICAgICAgICAgICAgICAgLW1vei1hbmltYXRpb24tZGVsYXk6IDAuM3M7XHJcbiAgICAgICAgICAgICAgICAtby1hbmltYXRpb24tZGVsYXk6IDAuM3M7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDAuM3M7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5kbUFuaW1hdGVkLmZhZGVJbiB7XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlSW47XHJcbiAgICAgICAgICAgICAgICAtbW96LWFuaW1hdGlvbi1uYW1lOiBmYWRlSW47XHJcbiAgICAgICAgICAgICAgICAtby1hbmltYXRpb24tbmFtZTogZmFkZUluO1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLmRtQW5pbWF0ZWQuc2NhbGVJbiB7XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBzY2FsZUluO1xyXG4gICAgICAgICAgICAgICAgLW1vei1hbmltYXRpb24tbmFtZTogc2NhbGVJbjtcclxuICAgICAgICAgICAgICAgIC1vLWFuaW1hdGlvbi1uYW1lOiBzY2FsZUluO1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IHNjYWxlSW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5kbUFuaW1hdGVkLnNjYWxlT3V0IHtcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHNjYWxlT3V0O1xyXG4gICAgICAgICAgICAgICAgLW1vei1hbmltYXRpb24tbmFtZTogc2NhbGVPdXQ7XHJcbiAgICAgICAgICAgICAgICAtby1hbmltYXRpb24tbmFtZTogc2NhbGVPdXQ7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tbmFtZTogc2NhbGVPdXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5mYWRlSW5VcCB7XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlSW5VcDtcclxuICAgICAgICAgICAgICAgIC1tb3otYW5pbWF0aW9uLW5hbWU6IGZhZGVJblVwO1xyXG4gICAgICAgICAgICAgICAgLW8tYW5pbWF0aW9uLW5hbWU6IGZhZGVJblVwO1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJblVwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluIHtcclxuICAgICAgICAgICAgICAgIDAlIHtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgQC1tb3ota2V5ZnJhbWVzIGZhZGVJbiB7XHJcbiAgICAgICAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIEAtby1rZXlmcmFtZXMgZmFkZUluIHtcclxuICAgICAgICAgICAgICAgIDAlIHtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgQGtleWZyYW1lcyBmYWRlSW4ge1xyXG4gICAgICAgICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgc2NhbGVJbiB7XHJcbiAgICAgICAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgICAgICAgICAgICAgICAvKiBDU1MzICovXHJcbiAgICAgICAgICAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgICAgICAgICAgICAgICAgIC8qIEZpcmVmb3ggKi9cclxuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLyogV2Via2l0ICovXHJcbiAgICAgICAgICAgICAgICAgICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgICAgICAgICAgICAgICAvKiBPcGVyYSAqL1xyXG4gICAgICAgICAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgICAgICAgICAgICAgICAgIC8qIElFIDkgKi9cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLyogQ1NTMyAqL1xyXG4gICAgICAgICAgICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICAgICAgICAgICAgICAvKiBGaXJlZm94ICovXHJcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8qIFdlYmtpdCAqL1xyXG4gICAgICAgICAgICAgICAgICAgIC1vLXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLyogT3BlcmEgKi9cclxuICAgICAgICAgICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICAgICAgICAgICAgICAvKiBJRSA5ICovXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIEAtbW96LWtleWZyYW1lcyBzY2FsZUluIHtcclxuICAgICAgICAgICAgICAgIDAlIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgICAgICAgICAgICAgICAgIC8qIENTUzMgKi9cclxuICAgICAgICAgICAgICAgICAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLyogRmlyZWZveCAqL1xyXG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgICAgICAgICAgICAgICAvKiBXZWJraXQgKi9cclxuICAgICAgICAgICAgICAgICAgICAtby10cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgICAgICAgICAgICAgICAgIC8qIE9wZXJhICovXHJcbiAgICAgICAgICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLyogSUUgOSAqL1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICAgICAgICAgICAgICAvKiBDU1MzICovXHJcbiAgICAgICAgICAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8qIEZpcmVmb3ggKi9cclxuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLyogV2Via2l0ICovXHJcbiAgICAgICAgICAgICAgICAgICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICAgICAgICAgICAgICAvKiBPcGVyYSAqL1xyXG4gICAgICAgICAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8qIElFIDkgKi9cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgQC1vLWtleWZyYW1lcyBzY2FsZUluIHtcclxuICAgICAgICAgICAgICAgIDAlIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgICAgICAgICAgICAgICAgIC8qIENTUzMgKi9cclxuICAgICAgICAgICAgICAgICAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLyogRmlyZWZveCAqL1xyXG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgICAgICAgICAgICAgICAvKiBXZWJraXQgKi9cclxuICAgICAgICAgICAgICAgICAgICAtby10cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgICAgICAgICAgICAgICAgIC8qIE9wZXJhICovXHJcbiAgICAgICAgICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLyogSUUgOSAqL1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICAgICAgICAgICAgICAvKiBDU1MzICovXHJcbiAgICAgICAgICAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8qIEZpcmVmb3ggKi9cclxuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLyogV2Via2l0ICovXHJcbiAgICAgICAgICAgICAgICAgICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICAgICAgICAgICAgICAvKiBPcGVyYSAqL1xyXG4gICAgICAgICAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8qIElFIDkgKi9cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgQGtleWZyYW1lcyBzY2FsZUluIHtcclxuICAgICAgICAgICAgICAgIDAlIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgICAgICAgICAgICAgICAgIC8qIENTUzMgKi9cclxuICAgICAgICAgICAgICAgICAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLyogRmlyZWZveCAqL1xyXG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgICAgICAgICAgICAgICAvKiBXZWJraXQgKi9cclxuICAgICAgICAgICAgICAgICAgICAtby10cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgICAgICAgICAgICAgICAgIC8qIE9wZXJhICovXHJcbiAgICAgICAgICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLyogSUUgOSAqL1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICAgICAgICAgICAgICAvKiBDU1MzICovXHJcbiAgICAgICAgICAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8qIEZpcmVmb3ggKi9cclxuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLyogV2Via2l0ICovXHJcbiAgICAgICAgICAgICAgICAgICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICAgICAgICAgICAgICAvKiBPcGVyYSAqL1xyXG4gICAgICAgICAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8qIElFIDkgKi9cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIHNjYWxlT3V0IHtcclxuICAgICAgICAgICAgICAgIDAlIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8qIENTUzMgKi9cclxuICAgICAgICAgICAgICAgICAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLyogRmlyZWZveCAqL1xyXG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICAgICAgICAgICAgICAvKiBXZWJraXQgKi9cclxuICAgICAgICAgICAgICAgICAgICAtby10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8qIE9wZXJhICovXHJcbiAgICAgICAgICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLyogSUUgOSAqL1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgICAgICAgICAgICAgICAvKiBDU1MzICovXHJcbiAgICAgICAgICAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgICAgICAgICAgICAgICAgIC8qIEZpcmVmb3ggKi9cclxuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLyogV2Via2l0ICovXHJcbiAgICAgICAgICAgICAgICAgICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgICAgICAgICAgICAgICAvKiBPcGVyYSAqL1xyXG4gICAgICAgICAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgICAgICAgICAgICAgICAgIC8qIElFIDkgKi9cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgQC1tb3ota2V5ZnJhbWVzIHNjYWxlT3V0IHtcclxuICAgICAgICAgICAgICAgIDAlIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8qIENTUzMgKi9cclxuICAgICAgICAgICAgICAgICAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLyogRmlyZWZveCAqL1xyXG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICAgICAgICAgICAgICAvKiBXZWJraXQgKi9cclxuICAgICAgICAgICAgICAgICAgICAtby10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8qIE9wZXJhICovXHJcbiAgICAgICAgICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLyogSUUgOSAqL1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgICAgICAgICAgICAgICAvKiBDU1MzICovXHJcbiAgICAgICAgICAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgICAgICAgICAgICAgICAgIC8qIEZpcmVmb3ggKi9cclxuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLyogV2Via2l0ICovXHJcbiAgICAgICAgICAgICAgICAgICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgICAgICAgICAgICAgICAvKiBPcGVyYSAqL1xyXG4gICAgICAgICAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgICAgICAgICAgICAgICAgIC8qIElFIDkgKi9cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgQC1vLWtleWZyYW1lcyBzY2FsZU91dCB7XHJcbiAgICAgICAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICAgICAgICAgICAgICAvKiBDU1MzICovXHJcbiAgICAgICAgICAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8qIEZpcmVmb3ggKi9cclxuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLyogV2Via2l0ICovXHJcbiAgICAgICAgICAgICAgICAgICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICAgICAgICAgICAgICAvKiBPcGVyYSAqL1xyXG4gICAgICAgICAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8qIElFIDkgKi9cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLyogQ1NTMyAqL1xyXG4gICAgICAgICAgICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgICAgICAgICAgICAgICAvKiBGaXJlZm94ICovXHJcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgICAgICAgICAgICAgICAgIC8qIFdlYmtpdCAqL1xyXG4gICAgICAgICAgICAgICAgICAgIC1vLXRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLyogT3BlcmEgKi9cclxuICAgICAgICAgICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgICAgICAgICAgICAgICAvKiBJRSA5ICovXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIEBrZXlmcmFtZXMgc2NhbGVPdXQge1xyXG4gICAgICAgICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLyogQ1NTMyAqL1xyXG4gICAgICAgICAgICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICAgICAgICAgICAgICAvKiBGaXJlZm94ICovXHJcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8qIFdlYmtpdCAqL1xyXG4gICAgICAgICAgICAgICAgICAgIC1vLXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLyogT3BlcmEgKi9cclxuICAgICAgICAgICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICAgICAgICAgICAgICAvKiBJRSA5ICovXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgICAgICAgICAgICAgICAgIC8qIENTUzMgKi9cclxuICAgICAgICAgICAgICAgICAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLyogRmlyZWZveCAqL1xyXG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgICAgICAgICAgICAgICAvKiBXZWJraXQgKi9cclxuICAgICAgICAgICAgICAgICAgICAtby10cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgICAgICAgICAgICAgICAgIC8qIE9wZXJhICovXHJcbiAgICAgICAgICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLyogSUUgOSAqL1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluVXAge1xyXG4gICAgICAgICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNDBweCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBALW1vei1rZXlmcmFtZXMgZmFkZUluVXAge1xyXG4gICAgICAgICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNDBweCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBALW8ta2V5ZnJhbWVzIGZhZGVJblVwIHtcclxuICAgICAgICAgICAgICAgIDAlIHtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSg0MHB4KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBAa2V5ZnJhbWVzIGZhZGVJblVwIHtcclxuICAgICAgICAgICAgICAgIDAlIHtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0MHB4KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuZG1EaWFsb2d1ZUNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAzMDAwO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuZG1EaWFsb2d1ZSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjglO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMCU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMyU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAycHggM3B4ICMxQjFCMUI7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuZG1EaWFsb2d1ZTEge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDI4JTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDJweCAzcHggIzFCMUIxQjtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5kbURpYWxvZ3VlSGVhZGVyIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgLyogaGVpZ2h0OiAxNSU7ICovXHJcbiAgICAgICAgICAgICAgICAvKiBib3gtc2hhZG93OiAwcHggMXB4IDVweCAjZDJkMmQyOyAqL1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuZG1EaWFsb2d1ZUhlYWRlclRpdGxlLFxyXG4gICAgICAgICAgICAuZG1EaWFsb2d1ZUNsb3NlIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLmRtRGlhbG9ndWVDbG9zZT5zcGFuIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI0E5QTlBOTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLmRtRGlhbG9ndWVDbG9zZT5zcGFuOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjNzE3MTcxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuZG1EaWFsb2d1ZUhlYWRlclRpdGxlIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA3OSU7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuZG1EaWFsb2d1ZUhlYWRlclRpdGxlPmxhYmVsIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMiUgMCAwIDUlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjNlbTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM3MTYyNjI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5kbURpYWxvZ3VlQ2xvc2Uge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDk4JTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLmRtRGlhbG9ndWVCb2R5IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgLyogaGVpZ2h0OiA1MCU7ICovXHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIC8qYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkMmQyZDI7Ki9cclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvLVJlZ3VsYXInICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5kbURpYWxvZ3VlQm9keT5wIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjNzE2MjYyO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAyJSA0JTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLmRtRGlhbG9ndWVCb2R5IC5kbURpYWxvZ1RpdGxlQm9keSAuZG1EaWFsb2dUaXRsZUhlYWRpbmcge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAvKmZvbnQtZmFtaWx5OiAnR2lsbCBTYW5zJywgJ0dpbGwgU2FucyBNVCcsIENhbGlicmksICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmKi9cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLmRtRGlhbG9ndWVCb2R5IC5kbURpYWxvZ1RpdGxlQm9keSAuZG1EaWFsb2dUaXRsZVNlY3Rpb24ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgLypmb250LWZhbWlseTogJ0dpbGwgU2FucycsICdHaWxsIFNhbnMgTVQnLCBDYWxpYnJpLCAnVHJlYnVjaGV0IE1TJywgc2Fucy1zZXJpZiovXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5kbURpYWxvZ3VlQWN0aW9ucyB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAvKmhlaWdodDogMjElOyovXHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5kbURpYWxvZ3VlQWN0aW9ucz5idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogOHB4IDIlO1xyXG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiAyNSU7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxuICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA3MCU7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAvKiBtYXJnaW46IDE1cHggMyU7ICovXHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLmRtRGlhbG9ndWVBY3Rpb25zPnVsIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuZG1EaWFsb2d1ZUFjdGlvbnM+dWw+bGkge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5kbURpYWxvZ3VlQWN0aW9ucz51bD5saT5idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuZG1Ub2FzdCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogMTUlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMjAlO1xyXG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogN3ZoO1xyXG4gICAgICAgICAgICAgICAgLyovL2JhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC43KTsqL1xyXG4gICAgICAgICAgICAgICAgLyovL2xlZnQ6IDUwJTsqL1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAzMDAwO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzY3MTc3M2IzICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgICAgICAgICAgLyogICAgICAgIGJveC1zaGFkb3c6IDBweCAycHggM3B4ICMxQjFCMUI7Ki9cclxuICAgICAgICAgICAgICAgIC8qICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgIC1vLXRyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpOyovXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5kbVRvYXN0IC5kbURpYWxvZ3VlVG9hc3RJY29uIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMThweDtcclxuICAgICAgICAgICAgICAgIC8qIHBhZGRpbmc6IDEycHg7ICovXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTJweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTRweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2NzE3NzMwMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgLyogaGVpZ2h0OiAzMHB4OyAqL1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuZG1Ub2FzdCAuZG1Ub2FzdE1lc3NhZ2Uge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAyJSAzJTtcclxuICAgICAgICAgICAgICAgIHdvcmQtYnJlYWs6IHdvcmQtd3JhcDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLmRtVG9hc3QgLmRtVG9hc3RDbG9zZSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAvKiB3aWR0aDogNyU7ICovXHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgICAgIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTsgKi9cclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDUlO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjBlbTtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIHRvcDogMjAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuZG1Ub2FzdCAuZG1Ub2FzdENsb3NlOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuZG1Ub2FzdCAuZG1Ub2FzdENsb3NlPnNwYW4ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxMyUgMiU7XHJcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5vaC1zbmFwIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZjM3MDIxO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5wLWNlbnRlci1lcnJwb3Ige1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM2NDY0NjQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC50cnktYWdhaW4ge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YzNzAyMSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ051bml0by1SZWd1bGFyJyAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAubWF0LWRpYWxvZy1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxMXB4IDE1cHggLTdweCByZ2JhKDAsIDAsIDAsIC4yKSwgMCAyNHB4IDM4cHggM3B4IHJnYmEoMCwgMCwgMCwgLjE0KSwgMCA5cHggNDZweCA4cHggcmdiYSgwLCAwLCAwLCAuMTIpO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogMDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogaW5oZXJpdDtcclxuICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICAgICAgICAgICAgICAuZG1EaWFsb2d1ZTEge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4NiU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0NXZoO1xyXG4gICAgICAgICAgICAgICAgICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGJsdWU7ICovXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuZG1EaWFsb2dUaXRsZUJvZHk+aW1nIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnAtY2VudGVyLWVycnBvciB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDg0JTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzY0NjQ2NDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5kbVRvYXN0IHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDMwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/shared/dialogue/dialogue.component.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/shared/dialogue/dialogue.component.ts ***!
          \*******************************************************/
        /*! exports provided: DialogueComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogueComponent", function () { return DialogueComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _dialogue_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dialogue.service */ "./src/app/shared/dialogue/dialogue.service.ts");
            var DialogueComponent = /** @class */ (function () {
                function DialogueComponent(dialogue_service) {
                    this.dialogue_service = dialogue_service;
                    this.dialogueCtrls = {};
                    this.dialogueCtrls = {
                        isShown: false
                    };
                    this.dialogueColor = {
                        error: {
                            color: '#a94442',
                            'border-radius': '3px',
                            'border-color': 'rgb(214, 188, 188)'
                        },
                        success: {
                            color: '#3c763d',
                            'border-radius': '3px',
                            'border-color': 'rgb(174, 191, 160)'
                        },
                        warning: {
                            color: 'rgb(255,87,34)',
                            'border-radius': '3px',
                            'border-color': 'rgb(255, 135, 60)'
                        },
                        general: {}
                    };
                    this.dialogueColorIcon = {
                        error: {
                            background: '#ebccd1'
                        },
                        success: {
                            background: '#dff0d8'
                        },
                        warning: {
                            background: 'rgba(249, 115, 61, 0.34)'
                        },
                        general: {}
                    };
                    this.dialogueColorAlert = {
                        error: {
                            background: 'rgb(228, 37, 67)'
                        },
                        success: {
                            background: '#2fa553'
                        },
                        warning: {
                            background: '#e65811'
                        },
                        general: { background: '#165caf' }
                    };
                }
                DialogueComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.dialogue_service.dailogueObj.subscribe(function (obj) {
                        //  console.log(obj);
                        _this.dialogueCtrls = obj;
                    });
                };
                DialogueComponent.prototype.actionClick = function (actionIndex) {
                    if (actionIndex === 0) {
                        this.dialogue_service.hideDialogue(false);
                    }
                    else if (actionIndex === 1) {
                        this.dialogue_service.hideDialogue(true);
                    }
                    else {
                        this.dialogue_service.hideDialogue("close");
                    }
                };
                DialogueComponent.prototype.toastStartTimeout = function () {
                    this.dialogue_service.reinitializeToastBox();
                };
                DialogueComponent.prototype.toastleaveTimeout = function () {
                    this.dialogue_service.persistToastBox();
                };
                return DialogueComponent;
            }());
            DialogueComponent.ctorParameters = function () { return [
                { type: _dialogue_service__WEBPACK_IMPORTED_MODULE_2__["DialogueService"] }
            ]; };
            DialogueComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-dialogue',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dialogue.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/dialogue/dialogue.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dialogue.component.css */ "./src/app/shared/dialogue/dialogue.component.css")).default]
                })
            ], DialogueComponent);
            /***/ 
        }),
        /***/ "./src/app/shared/dialogue/dialogue.module.ts": 
        /*!****************************************************!*\
          !*** ./src/app/shared/dialogue/dialogue.module.ts ***!
          \****************************************************/
        /*! exports provided: DialogueModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogueModule", function () { return DialogueModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _dialogue_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dialogue.service */ "./src/app/shared/dialogue/dialogue.service.ts");
            /* harmony import */ var _dialogue_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dialogue.component */ "./src/app/shared/dialogue/dialogue.component.ts");
            var DialogueModule = /** @class */ (function () {
                function DialogueModule() {
                }
                return DialogueModule;
            }());
            DialogueModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _dialogue_component__WEBPACK_IMPORTED_MODULE_4__["DialogueComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
                    ],
                    exports: [
                        _dialogue_component__WEBPACK_IMPORTED_MODULE_4__["DialogueComponent"]
                    ],
                    providers: [_dialogue_service__WEBPACK_IMPORTED_MODULE_3__["DialogueService"]]
                })
            ], DialogueModule);
            /***/ 
        }),
        /***/ "./src/app/shared/dialogue/dialogue.service.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/shared/dialogue/dialogue.service.ts ***!
          \*****************************************************/
        /*! exports provided: DialogueService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogueService", function () { return DialogueService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var DialogueService = /** @class */ (function () {
                function DialogueService() {
                    this.dailogueObj = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.result = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                }
                /* -------------------------- Toast Functionality--------------------------------*/
                DialogueService.prototype.toastBox = function (config) {
                    this.dailogueObj.emit({
                        type: 'toast',
                        title: config.title ? config.title : 'Toast Box',
                        message: config.message,
                        isShown: true,
                        messageType: config.messageType ? config.messageType : 'general',
                        actionLabel: (config.actionlabel && config.actionlabel.length) > 0 ? config.actionlabel : ['Cancel', 'Ok'],
                    });
                    this.persistToastBox();
                    this.reinitializeToastBox();
                    return this.result;
                };
                DialogueService.prototype.persistToastBox = function () {
                    clearTimeout(this.timeoutId);
                };
                DialogueService.prototype.reinitializeToastBox = function () {
                    var _this = this;
                    clearTimeout(this.timeoutId);
                    this.timeoutId = setTimeout(function () {
                        _this.hideDialogue(false);
                    }, 3000);
                };
                /*------------------------AlertBox Functionality---------------------------------------*/
                DialogueService.prototype.alertBox = function (config) {
                    this.dailogueObj.emit({
                        type: 'alert',
                        title: config.title ? config.title : 'Alert Box',
                        message: config.message,
                        isShown: true,
                        messageType: config.messageType ? config.messageType : 'general',
                        actionLabel: (config.actionlabel && config.actionlabel.length) > 0 ? config.actionlabel : ['Ok'],
                    });
                    return this.result;
                };
                DialogueService.prototype.confirmBox = function (config) {
                    this.dailogueObj.emit({
                        type: 'confirm',
                        title: config.title ? config.title : 'Confirm Box',
                        message: config.message,
                        isShown: true,
                        messageType: config.messageType ? config.messageType : 'general',
                        actionLabel: (config.actionlabel && config.actionlabel.length) > 0 ? config.actionlabel : ['Cancel', 'Ok'],
                    });
                    return this.result;
                };
                DialogueService.prototype.hideDialogue = function (params) {
                    this.dailogueObj.emit({
                        type: 'toast',
                        title: null,
                        message: null,
                        isShown: false,
                        messageType: null,
                        actionLabel: null,
                    });
                    this.result.emit(params);
                };
                return DialogueService;
            }());
            DialogueService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], DialogueService);
            /***/ 
        }),
        /***/ "./src/app/shared/error.component.ts": 
        /*!*******************************************!*\
          !*** ./src/app/shared/error.component.ts ***!
          \*******************************************/
        /*! exports provided: ErrorsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorsComponent", function () { return ErrorsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ErrorsComponent_1;
            var ErrorsComponent = ErrorsComponent_1 = /** @class */ (function () {
                function ErrorsComponent() {
                }
                ErrorsComponent.prototype.showErrors = function () {
                    return this.control &&
                        this.control.errors &&
                        (this.control.dirty || this.control.touched);
                };
                ErrorsComponent.prototype.errors = function () {
                    var messageArr = [];
                    messageArr.push(this.message);
                    return messageArr;
                    // return Object.keys(this.control.errors)
                    //   .map(field => this.getMessage(field, this.control.errors[field]));
                };
                ErrorsComponent.prototype.getMessage = function (type, params) {
                    return ErrorsComponent_1.errorMessages[type](params);
                };
                return ErrorsComponent;
            }());
            ErrorsComponent.errorMessages = {
                'required': function () { return 'This field is required'; },
                'minlength': function (params) { return 'The min number of characters is ' + params.requiredLength; },
                'maxlength': function (params) { return 'The max allowed number of characters is ' + params.requiredLength; },
                'pattern': function (params) { return 'The required pattern is: ' + params.requiredPattern; },
                'age': function (params) { return params.message; },
                'vaildEmail': function (params) { return params.message; }
            };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ErrorsComponent.prototype, "control", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ErrorsComponent.prototype, "message", void 0);
            ErrorsComponent = ErrorsComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'errors',
                    template: "\n    <ul style=\"list-style-type:none\" *ngIf=\"showErrors()\" style=\"padding-left:0;\">\n      <li style=\"color: red;display:inline-block\" *ngFor=\"let error of errors()\">{{error}}</li>\n    </ul>\n  ",
                })
            ], ErrorsComponent);
            /***/ 
        }),
        /***/ "./src/app/shared/loader/loader.component.css": 
        /*!****************************************************!*\
          !*** ./src/app/shared/loader/loader.component.css ***!
          \****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".loaderContainer {\r\n    position: fixed;\r\n    z-index: 999999999;\r\n    width: 100%;\r\n    display: flex;\r\n    height: 100%;\r\n    background: linear-gradient(-180deg, rgba(255, 255, 255, 0.8), 75%, rgba(245, 245, 245, 0.8));\r\n    /* background: -webkit-linear-gradient(-180deg, rgba(6, 57, 116, 0.53), 75%, rgba(133, 133, 133, 0.63));\r\n    background: -o-linear-gradient(-180deg, rgba(6, 57, 116, 0.53), 75%, rgba(128, 0, 0, 0.63));\r\n    background: -moz-linear-gradient(-180deg, rgba(6, 57, 116, 0.53), 75%, rgba(128, 0, 0, 0.63)); */\r\n    /* background: #666666; */\r\n}\r\n\r\n.loaderContainer>div {\r\n    margin: auto;\r\n    padding: 30px;\r\n    /* box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.61); */\r\n    /*border-radius: 10px;*/\r\n    /* border-radius: 0px;\r\n    background-color: #ffffff; */\r\n}\r\n\r\n.loadingMsg {\r\n    width: 350px;\r\n    padding-top: 30px;\r\n    text-align: center;\r\n}\r\n\r\n@media screen and (max-width: 992px) {\r\n    .loadingMsg {\r\n        width: 270px !important;\r\n        padding-top: 30px;\r\n        text-align: center;\r\n    }\r\n}\r\n\r\n.loadingMsg>span {\r\n    font-size: 18px;\r\n    font-family: Medium;\r\n    color: #666666;\r\n}\r\n\r\n.loader {\r\n    position: relative;\r\n    margin: 0 auto;\r\n    width: 70px;\r\n}\r\n\r\n.loader:before {\r\n    content: '';\r\n    display: block;\r\n    padding-top: 100%;\r\n}\r\n\r\n.circular {\r\n    -webkit-animation: rotate 2s linear infinite;\r\n    animation: rotate 2s linear infinite;\r\n    height: 100%;\r\n    transform-origin: center center;\r\n    width: 100%;\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    margin: auto;\r\n}\r\n\r\n.path {\r\n    stroke-dasharray: 1, 200;\r\n    stroke-dashoffset: 0;\r\n    -webkit-animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;\r\n    animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;\r\n    stroke-linecap: round;\r\n}\r\n\r\n@-webkit-keyframes rotate {\r\n    100% {\r\n        transform: rotate(360deg);\r\n    }\r\n}\r\n\r\n@keyframes rotate {\r\n    100% {\r\n        transform: rotate(360deg);\r\n    }\r\n}\r\n\r\n@-webkit-keyframes dash {\r\n    0% {\r\n        stroke-dasharray: 1, 200;\r\n        stroke-dashoffset: 0;\r\n    }\r\n    50% {\r\n        stroke-dasharray: 89, 200;\r\n        stroke-dashoffset: -35px;\r\n    }\r\n    100% {\r\n        stroke-dasharray: 89, 200;\r\n        stroke-dashoffset: -124px;\r\n    }\r\n}\r\n\r\n@keyframes dash {\r\n    0% {\r\n        stroke-dasharray: 1, 200;\r\n        stroke-dashoffset: 0;\r\n    }\r\n    50% {\r\n        stroke-dasharray: 89, 200;\r\n        stroke-dashoffset: -35px;\r\n    }\r\n    100% {\r\n        stroke-dasharray: 89, 200;\r\n        stroke-dashoffset: -124px;\r\n    }\r\n}\r\n\r\n@-webkit-keyframes color {\r\n    100%,\r\n    0% {\r\n        stroke: #d62d20;\r\n    }\r\n    40% {\r\n        stroke: #0057e7;\r\n    }\r\n    66% {\r\n        stroke: #008744;\r\n    }\r\n    80%,\r\n    90% {\r\n        stroke: #ffa700;\r\n    }\r\n}\r\n\r\n@keyframes color {\r\n    100%,\r\n    0% {\r\n        stroke: #d62d20;\r\n    }\r\n    40% {\r\n        stroke: #0057e7;\r\n    }\r\n    66% {\r\n        stroke: #008744;\r\n    }\r\n    80%,\r\n    90% {\r\n        stroke: #ffa700;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsV0FBVztJQUdYLGFBQWE7SUFDYixZQUFZO0lBQ1osNkZBQTZGO0lBQzdGOztvR0FFZ0c7SUFDaEcseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixpREFBaUQ7SUFDakQsdUJBQXVCO0lBQ3ZCO2dDQUM0QjtBQUNoQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0k7UUFDSSx1QkFBdUI7UUFDdkIsaUJBQWlCO1FBQ2pCLGtCQUFrQjtJQUN0QjtBQUNKOztBQUVBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLDRDQUE0QztJQUM1QyxvQ0FBb0M7SUFDcEMsWUFBWTtJQUVaLCtCQUErQjtJQUMvQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixTQUFTO0lBQ1QsT0FBTztJQUNQLFFBQVE7SUFDUixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLG9CQUFvQjtJQUNwQixnRkFBZ0Y7SUFDaEYsd0VBQXdFO0lBQ3hFLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJO1FBRUkseUJBQXlCO0lBQzdCO0FBQ0o7O0FBRUE7SUFDSTtRQUVJLHlCQUF5QjtJQUM3QjtBQUNKOztBQUVBO0lBQ0k7UUFDSSx3QkFBd0I7UUFDeEIsb0JBQW9CO0lBQ3hCO0lBQ0E7UUFDSSx5QkFBeUI7UUFDekIsd0JBQXdCO0lBQzVCO0lBQ0E7UUFDSSx5QkFBeUI7UUFDekIseUJBQXlCO0lBQzdCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLHdCQUF3QjtRQUN4QixvQkFBb0I7SUFDeEI7SUFDQTtRQUNJLHlCQUF5QjtRQUN6Qix3QkFBd0I7SUFDNUI7SUFDQTtRQUNJLHlCQUF5QjtRQUN6Qix5QkFBeUI7SUFDN0I7QUFDSjs7QUFFQTtJQUNJOztRQUVJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTs7UUFFSSxlQUFlO0lBQ25CO0FBQ0o7O0FBRUE7SUFDSTs7UUFFSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7O1FBRUksZUFBZTtJQUNuQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2FkZXJDb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogOTk5OTk5OTk5O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCksIDc1JSwgcmdiYSgyNDUsIDI0NSwgMjQ1LCAwLjgpKTtcclxuICAgIC8qIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KC0xODBkZWcsIHJnYmEoNiwgNTcsIDExNiwgMC41MyksIDc1JSwgcmdiYSgxMzMsIDEzMywgMTMzLCAwLjYzKSk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoLTE4MGRlZywgcmdiYSg2LCA1NywgMTE2LCAwLjUzKSwgNzUlLCByZ2JhKDEyOCwgMCwgMCwgMC42MykpO1xyXG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoLTE4MGRlZywgcmdiYSg2LCA1NywgMTE2LCAwLjUzKSwgNzUlLCByZ2JhKDEyOCwgMCwgMCwgMC42MykpOyAqL1xyXG4gICAgLyogYmFja2dyb3VuZDogIzY2NjY2NjsgKi9cclxufVxyXG5cclxuLmxvYWRlckNvbnRhaW5lcj5kaXYge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIC8qIGJveC1zaGFkb3c6IDFweCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC42MSk7ICovXHJcbiAgICAvKmJvcmRlci1yYWRpdXM6IDEwcHg7Ki9cclxuICAgIC8qIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7ICovXHJcbn1cclxuXHJcbi5sb2FkaW5nTXNnIHtcclxuICAgIHdpZHRoOiAzNTBweDtcclxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgLmxvYWRpbmdNc2cge1xyXG4gICAgICAgIHdpZHRoOiAyNzBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxufVxyXG5cclxuLmxvYWRpbmdNc2c+c3BhbiB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LWZhbWlseTogTWVkaXVtO1xyXG4gICAgY29sb3I6ICM2NjY2NjY7XHJcbn1cclxuXHJcbi5sb2FkZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB3aWR0aDogNzBweDtcclxufVxyXG5cclxuLmxvYWRlcjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmctdG9wOiAxMDAlO1xyXG59XHJcblxyXG4uY2lyY3VsYXIge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IHJvdGF0ZSAycyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICBhbmltYXRpb246IHJvdGF0ZSAycyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5wYXRoIHtcclxuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDEsIDIwMDtcclxuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGRhc2ggMS41cyBlYXNlLWluLW91dCBpbmZpbml0ZSwgY29sb3IgNnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XHJcbiAgICBhbmltYXRpb246IGRhc2ggMS41cyBlYXNlLWluLW91dCBpbmZpbml0ZSwgY29sb3IgNnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XHJcbiAgICBzdHJva2UtbGluZWNhcDogcm91bmQ7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyByb3RhdGUge1xyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcm90YXRlIHtcclxuICAgIDEwMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZGFzaCB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgc3Ryb2tlLWRhc2hhcnJheTogMSwgMjAwO1xyXG4gICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xyXG4gICAgfVxyXG4gICAgNTAlIHtcclxuICAgICAgICBzdHJva2UtZGFzaGFycmF5OiA4OSwgMjAwO1xyXG4gICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAtMzVweDtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDg5LCAyMDA7XHJcbiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0xMjRweDtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBkYXNoIHtcclxuICAgIDAlIHtcclxuICAgICAgICBzdHJva2UtZGFzaGFycmF5OiAxLCAyMDA7XHJcbiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XHJcbiAgICB9XHJcbiAgICA1MCUge1xyXG4gICAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDg5LCAyMDA7XHJcbiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0zNXB4O1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgc3Ryb2tlLWRhc2hhcnJheTogODksIDIwMDtcclxuICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogLTEyNHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgY29sb3Ige1xyXG4gICAgMTAwJSxcclxuICAgIDAlIHtcclxuICAgICAgICBzdHJva2U6ICNkNjJkMjA7XHJcbiAgICB9XHJcbiAgICA0MCUge1xyXG4gICAgICAgIHN0cm9rZTogIzAwNTdlNztcclxuICAgIH1cclxuICAgIDY2JSB7XHJcbiAgICAgICAgc3Ryb2tlOiAjMDA4NzQ0O1xyXG4gICAgfVxyXG4gICAgODAlLFxyXG4gICAgOTAlIHtcclxuICAgICAgICBzdHJva2U6ICNmZmE3MDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgY29sb3Ige1xyXG4gICAgMTAwJSxcclxuICAgIDAlIHtcclxuICAgICAgICBzdHJva2U6ICNkNjJkMjA7XHJcbiAgICB9XHJcbiAgICA0MCUge1xyXG4gICAgICAgIHN0cm9rZTogIzAwNTdlNztcclxuICAgIH1cclxuICAgIDY2JSB7XHJcbiAgICAgICAgc3Ryb2tlOiAjMDA4NzQ0O1xyXG4gICAgfVxyXG4gICAgODAlLFxyXG4gICAgOTAlIHtcclxuICAgICAgICBzdHJva2U6ICNmZmE3MDA7XHJcbiAgICB9XHJcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/shared/loader/loader.component.ts": 
        /*!***************************************************!*\
          !*** ./src/app/shared/loader/loader.component.ts ***!
          \***************************************************/
        /*! exports provided: LoaderComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function () { return LoaderComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loader.service */ "./src/app/shared/loader/loader.service.ts");
            var LoaderComponent = /** @class */ (function () {
                function LoaderComponent(loaderService) {
                    this.loaderService = loaderService;
                }
                LoaderComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.loaderService.messageUpdated.subscribe(function (message) {
                        _this.message = message || 'Please Wait';
                    });
                    this.showLoader = this.loaderService.loaderStatusUpdated.subscribe(function (status) {
                        _this.showLoader = status;
                    });
                    this.showLoader = false;
                };
                return LoaderComponent;
            }());
            LoaderComponent.ctorParameters = function () { return [
                { type: _loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"] }
            ]; };
            LoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-loader',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./loader.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/loader/loader.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./loader.component.css */ "./src/app/shared/loader/loader.component.css")).default]
                })
            ], LoaderComponent);
            /***/ 
        }),
        /***/ "./src/app/shared/loader/loader.service.ts": 
        /*!*************************************************!*\
          !*** ./src/app/shared/loader/loader.service.ts ***!
          \*************************************************/
        /*! exports provided: LoaderService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderService", function () { return LoaderService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var LoaderService = /** @class */ (function () {
                function LoaderService() {
                    this.loaderStatus = false;
                    this.loaderStatusUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.message = null;
                    this.messageUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.loaderStatusUpdated.emit(this.loaderStatus);
                }
                LoaderService.prototype.showLoader = function (msg) {
                    this.message = msg;
                    this.loaderStatus = true;
                    this.messageUpdated.emit(this.message);
                    this.loaderStatusUpdated.emit(this.loaderStatus);
                };
                LoaderService.prototype.hideLoader = function () {
                    this.message = null;
                    this.messageUpdated.emit(this.message);
                    this.loaderStatus = false;
                    this.loaderStatusUpdated.emit(this.loaderStatus);
                };
                return LoaderService;
            }());
            LoaderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], LoaderService);
            /***/ 
        }),
        /***/ "./src/app/shared/loginId.service.ts": 
        /*!*******************************************!*\
          !*** ./src/app/shared/loginId.service.ts ***!
          \*******************************************/
        /*! exports provided: CommonLoginService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonLoginService", function () { return CommonLoginService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
            var CommonLoginService = /** @class */ (function () {
                function CommonLoginService() {
                }
                CommonLoginService.prototype.setLeadId = function (info) {
                    sessionStorage.setItem('storeLeadId', JSON.stringify(info));
                    this.leadId = info;
                };
                CommonLoginService.prototype.getLeadId = function () {
                    return JSON.parse(sessionStorage.getItem('storeLeadId'));
                };
                return CommonLoginService;
            }());
            CommonLoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], CommonLoginService);
            /***/ 
        }),
        /***/ "./src/app/shared/numberOnly.directive.ts": 
        /*!************************************************!*\
          !*** ./src/app/shared/numberOnly.directive.ts ***!
          \************************************************/
        /*! exports provided: OnlyNumber */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlyNumber", function () { return OnlyNumber; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var OnlyNumber = /** @class */ (function () {
                function OnlyNumber(el) {
                    this.el = el;
                }
                OnlyNumber.prototype.onKeyDown = function (event) {
                    var e = event;
                    if (this.OnlyNumber) {
                        if ([46, 8, 9, 27, 13].indexOf(e.keyCode) !== -1 ||
                            // Allow: Ctrl+A
                            (e.keyCode === 65 && (e.ctrlKey || e.metaKey)) ||
                            // Allow: Ctrl+C
                            (e.keyCode === 67 && (e.ctrlKey || e.metaKey)) ||
                            // Allow: Ctrl+V
                            (e.keyCode === 86 && (e.ctrlKey || e.metaKey)) ||
                            // Allow: Ctrl+X
                            (e.keyCode === 88 && (e.ctrlKey || e.metaKey)) ||
                            // Allow: home, end, left, right
                            (e.keyCode >= 35 && e.keyCode <= 39)) {
                            // let it happen, don't do anything
                            return;
                        }
                        // Ensure that it is a number and stop the keypress
                        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode === 190 || e.keyCode > 57 || e.keyCode === 110)) && (e.keyCode < 96 || e.keyCode > 105)) {
                            e.preventDefault();
                        }
                    }
                };
                return OnlyNumber;
            }());
            OnlyNumber.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], OnlyNumber.prototype, "OnlyNumber", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keydown', ['$event'])
            ], OnlyNumber.prototype, "onKeyDown", null);
            OnlyNumber = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
                    selector: '[OnlyNumber]'
                })
            ], OnlyNumber);
            /***/ 
        }),
        /***/ "./src/app/shared/order-by.pipe.ts": 
        /*!*****************************************!*\
          !*** ./src/app/shared/order-by.pipe.ts ***!
          \*****************************************/
        /*! exports provided: OrderByPipe */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderByPipe", function () { return OrderByPipe; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var OrderByPipe = /** @class */ (function () {
                function OrderByPipe() {
                }
                OrderByPipe.prototype.transform = function (array, orderBy, asc) {
                    var _this = this;
                    if (asc === void 0) { asc = true; }
                    if (!orderBy || orderBy.trim() === '') {
                        return array;
                    }
                    // ascending
                    if (asc) {
                        return Array.from(array).sort(function (item1, item2) {
                            return _this.orderByComparator(item1[orderBy], item2[orderBy]);
                        });
                    }
                    else {
                        // not asc
                        return Array.from(array).sort(function (item1, item2) {
                            return _this.orderByComparator(item2[orderBy], item1[orderBy]);
                        });
                    }
                };
                OrderByPipe.prototype.orderByComparator = function (a, b) {
                    if ((isNaN(parseFloat(a)) || !isFinite(a)) || (isNaN(parseFloat(b)) || !isFinite(b))) {
                        // Isn't a number so lowercase the string to properly compare
                        if (a.toLowerCase() < b.toLowerCase()) {
                            return -1;
                        }
                        if (a.toLowerCase() > b.toLowerCase()) {
                            return 1;
                        }
                    }
                    else {
                        // Parse strings as numbers to compare properly
                        if (parseFloat(a) < parseFloat(b)) {
                            return -1;
                        }
                        if (parseFloat(a) > parseFloat(b)) {
                            return 1;
                        }
                    }
                    return 0; // equal each other
                };
                return OrderByPipe;
            }());
            OrderByPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
                    name: 'orderBy'
                })
            ], OrderByPipe);
            /***/ 
        }),
        /***/ "./src/app/shared/progress.service.ts": 
        /*!********************************************!*\
          !*** ./src/app/shared/progress.service.ts ***!
          \********************************************/
        /*! exports provided: ProgressService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressService", function () { return ProgressService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm2015/Subject.js");
            //import { validateConfig } from '@angular/router';
            var ProgressService = /** @class */ (function () {
                function ProgressService() {
                    this.subject = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
                }
                ProgressService.prototype.getLoaderWidth = function () {
                    return this.subject.asObservable();
                };
                ProgressService.prototype.setLoaderWidth = function (value) {
                    // console.log(value);
                    this.subject.next(value);
                };
                return ProgressService;
            }());
            ProgressService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], ProgressService);
            /***/ 
        }),
        /***/ "./src/app/shared/screen-sequence.module.ts": 
        /*!**************************************************!*\
          !*** ./src/app/shared/screen-sequence.module.ts ***!
          \**************************************************/
        /*! exports provided: screenSequenceService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "screenSequenceService", function () { return screenSequenceService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var screenSequenceService = /** @class */ (function () {
                function screenSequenceService() {
                    this.STEPS = {
                        1: "mobile",
                        2: "SSN",
                        3: "personalInfo",
                        4: "pan",
                        5: "nomineeDetails",
                        6: "accountSummary",
                        7: "deposit",
                        8: "biometricKYC",
                        9: "congratulation",
                        10: "twoStep"
                    };
                }
                return screenSequenceService;
            }());
            screenSequenceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], screenSequenceService);
            /***/ 
        }),
        /***/ "./src/app/shared/screen.name.ts": 
        /*!***************************************!*\
          !*** ./src/app/shared/screen.name.ts ***!
          \***************************************/
        /*! exports provided: NameService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NameService", function () { return NameService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm2015/Subject.js");
            /* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "./node_modules/rxjs-compat/_esm2015/BehaviorSubject.js");
            //import { of } from 'rxjs/observable/of';
            var NameService = /** @class */ (function () {
                function NameService() {
                    this.subject = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
                    this.car = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
                    this.journeyPage = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
                }
                NameService.prototype.getName = function () {
                    return this.subject.asObservable();
                };
                NameService.prototype.setName = function (name) {
                    this.subject.next(name);
                };
                NameService.prototype.getPageName = function () {
                    return this.journeyPage.asObservable();
                };
                NameService.prototype.setPageName = function (name) {
                    this.journeyPage.next(name);
                };
                NameService.prototype.setCar = function (data) {
                    this.car.next(data);
                    //  console.log(data);
                };
                NameService.prototype.getCar = function () {
                    return this.car.asObservable();
                };
                return NameService;
            }());
            NameService.namevalue = 'default';
            NameService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], NameService);
            /***/ 
        }),
        /***/ "./src/app/shared/upperCase.directive.ts": 
        /*!***********************************************!*\
          !*** ./src/app/shared/upperCase.directive.ts ***!
          \***********************************************/
        /*! exports provided: UppercaseDirective */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UppercaseDirective", function () { return UppercaseDirective; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var UppercaseDirective = /** @class */ (function () {
                function UppercaseDirective(ref) {
                    this.ref = ref;
                }
                UppercaseDirective.prototype.toUpperCase = function (value) {
                    if (this.allowUpperCase)
                        this.ref.nativeElement.value = value.toUpperCase();
                };
                return UppercaseDirective;
            }());
            UppercaseDirective.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('UpperCase')
            ], UppercaseDirective.prototype, "allowUpperCase", void 0);
            UppercaseDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
                    selector: '[UpperCase]',
                    host: {
                        '(input)': 'toUpperCase($event.target.value)',
                    }
                })
            ], UppercaseDirective);
            /***/ 
        }),
        /***/ "./src/app/welcome/welcome.component.css": 
        /*!***********************************************!*\
          !*** ./src/app/welcome/welcome.component.css ***!
          \***********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".welcome {\r\n    text-align: center;\r\n    font-size: 48px;\r\n    font-weight: bolder;\r\n    color: #f37021;\r\n    padding-top: 10px;\r\n    font-family: 'Nunito-SemiBold';\r\n    margin-top: 40px;\r\n}\r\n\r\n:host ::ng-deep .ui-carousel-item {\r\n    background: initial !important;\r\n}\r\n\r\n:host ::ng-deep .middle {\r\n    bottom: 0px !important;\r\n}\r\n\r\n.mainContent {\r\n    margin-top: 0;\r\n}\r\n\r\n.label-content {\r\n    text-align: center;\r\n    font-size: 15px;\r\n    color: #ffffff;\r\n    padding-top: 10px;\r\n    font-family: 'Nunito-Regular';\r\n}\r\n\r\n.label-heading {\r\n    font-family: 'Nunito-SemiBold';\r\n    text-align: center;\r\n    font-size: 28px;\r\n    padding-top: 20px;\r\n    color: #ffffff;\r\n    font-weight: bold;\r\n}\r\n\r\n.label-heading-2 {\r\n    padding-top: 33px;\r\n}\r\n\r\n.label-heading-3 {\r\n    padding-top: 49px;\r\n}\r\n\r\n.get-started-parent {\r\n    text-align: center;\r\n    padding-top: 40px;\r\n    padding-bottom: 80px;\r\n}\r\n\r\n.get-started-parent-1 {\r\n    text-align: center;\r\n    padding-top: 12%;\r\n}\r\n\r\n.get-started {\r\n    background-color: #ffffff;\r\n    color: #363636;\r\n    border: none;\r\n    padding: 8px 30px;\r\n    font-weight: bold;\r\n    position: relative;\r\n    top: -30px;\r\n    border-top-left-radius: 15px;\r\n    border-top-right-radius: 15px;\r\n    /*margin-top: 43px;*/\r\n}\r\n\r\n.label-content.bold {\r\n    font-weight: bold;\r\n}\r\n\r\n.img-div {\r\n    text-align: center;\r\n    width: 100%;\r\n    height: auto;\r\n}\r\n\r\n.grids {\r\n    text-align: right;\r\n    padding-top: 20px;\r\n}\r\n\r\n.grid-1 {\r\n    padding-top: 12px;\r\n}\r\n\r\n.grod-2,\r\n.grod-3 {\r\n    padding-top: 30px;\r\n}\r\n\r\n.background-image-welcome {\r\n    background-image: url('Background-image.jpg') !important;\r\n    background-size: 100% 100%;\r\n    /*overflow: auto;*/\r\n    /*background-size: 100% 100%;*/\r\n}\r\n\r\n.product_style {\r\n    font-family: 'Nunito-REgular';\r\n    text-align: center;\r\n    font-size: 12px;\r\n    padding-top: 20px;\r\n    color: #ffffff;\r\n}\r\n\r\n.label-heading_high {\r\n    font-family: 'Nunito-Regular';\r\n    text-align: center;\r\n    font-size: 28px;\r\n    color: #ffffff;\r\n    font-weight: bold;\r\n}\r\n\r\n.pos-rel-1-high {\r\n    top: -130px;\r\n    position: relative;\r\n}\r\n\r\n.earn_style {\r\n    font-size: 13px;\r\n    text-align: center;\r\n    text-align: center;\r\n    font-size: 13px;\r\n    color: #fff;\r\n    padding-top: 5px;\r\n    font-family: Nunito-Regular;\r\n    display: block;\r\n    font-family: 'Nunito-Regular';\r\n    color: white;\r\n}\r\n\r\n.earn_style_page3 {\r\n    top: -12px;\r\n    position: relative;\r\n    font-size: 13px;\r\n    text-align: center;\r\n    color: #fff;\r\n    padding-top: 5px;\r\n    display: block;\r\n    font-family: 'Nunito-Regular';\r\n    color: white;\r\n}\r\n\r\n.pos-rel-1-high_page3 {\r\n    top: -15px;\r\n    position: relative;\r\n}\r\n\r\n.mainContent_responsive {\r\n    position: relative;\r\n}\r\n\r\n@media screen and (max-width: 992px) {\r\n    .mainContent_responsive {\r\n        position: fixed !important;\r\n    }\r\n    .mainContent.row {\r\n        margin-left: initial !important;\r\n        margin-right: initial !important;\r\n        width: 100%;\r\n        margin-left: 0;\r\n    }\r\n    .background-image-welcome {\r\n        overflow: auto;\r\n    }\r\n    /*New additon for Get started fix*/\r\n    .get-started-parent-1{\r\n        position: relative;\r\n    }\r\n    .get-started{\r\n        top: 0; \r\n        display: block;\r\n        position: absolute;\r\n        margin: 0 auto !important;\r\n        width: 138px;\r\n        margin: 0 auto;\r\n        padding-left: 0px;\r\n        padding-right: 0px;\r\n        right: 0px;\r\n        left: 0px;\r\n        top: 30px;\r\n        bottom: 0;\r\n        height: 37px;\r\n        margin: 0 auto !important;\r\n    }\r\n    /*New additon for Get started fix Ends here*/\r\n}\r\n\r\n.pos-rel-1 {\r\n    top: -43px;\r\n    position: relative;\r\n}\r\n\r\n.pos-rel-2 {\r\n    top: -85px;\r\n    position: relative;\r\n}\r\n\r\n.pos-rel-3 {\r\n    top: -48px;\r\n    position: relative;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLDhCQUE4QjtJQUM5QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFDN0Isb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTs7SUFFSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx3REFBNEU7SUFDNUUsMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsMkJBQTJCO0lBQzNCLGNBQWM7SUFDZCw2QkFBNkI7SUFDN0IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCw2QkFBNkI7SUFDN0IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSTtRQUNJLDBCQUEwQjtJQUM5QjtJQUNBO1FBQ0ksK0JBQStCO1FBQy9CLGdDQUFnQztRQUNoQyxXQUFXO1FBQ1gsY0FBYztJQUNsQjtJQUNBO1FBQ0ksY0FBYztJQUNsQjtJQUNBLGtDQUFrQztJQUNsQztRQUNJLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksTUFBTTtRQUNOLGNBQWM7UUFDZCxrQkFBa0I7UUFDbEIseUJBQXlCO1FBQ3pCLFlBQVk7UUFDWixjQUFjO1FBQ2QsaUJBQWlCO1FBQ2pCLGtCQUFrQjtRQUNsQixVQUFVO1FBQ1YsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsWUFBWTtRQUNaLHlCQUF5QjtJQUM3QjtJQUNBLDRDQUE0QztBQUNoRDs7QUFFQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiA0OHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIGNvbG9yOiAjZjM3MDIxO1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ051bml0by1TZW1pQm9sZCc7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLnVpLWNhcm91c2VsLWl0ZW0ge1xyXG4gICAgYmFja2dyb3VuZDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLm1pZGRsZSB7XHJcbiAgICBib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWFpbkNvbnRlbnQge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxufVxyXG5cclxuLmxhYmVsLWNvbnRlbnQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvLVJlZ3VsYXInO1xyXG59XHJcblxyXG4ubGFiZWwtaGVhZGluZyB7XHJcbiAgICBmb250LWZhbWlseTogJ051bml0by1TZW1pQm9sZCc7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5sYWJlbC1oZWFkaW5nLTIge1xyXG4gICAgcGFkZGluZy10b3A6IDMzcHg7XHJcbn1cclxuXHJcbi5sYWJlbC1oZWFkaW5nLTMge1xyXG4gICAgcGFkZGluZy10b3A6IDQ5cHg7XHJcbn1cclxuXHJcbi5nZXQtc3RhcnRlZC1wYXJlbnQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDQwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogODBweDtcclxufVxyXG5cclxuLmdldC1zdGFydGVkLXBhcmVudC0xIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAxMiU7XHJcbn1cclxuXHJcbi5nZXQtc3RhcnRlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgY29sb3I6ICMzNjM2MzY7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiA4cHggMzBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAtMzBweDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcclxuICAgIC8qbWFyZ2luLXRvcDogNDNweDsqL1xyXG59XHJcblxyXG4ubGFiZWwtY29udGVudC5ib2xkIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uaW1nLWRpdiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLmdyaWRzIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5ncmlkLTEge1xyXG4gICAgcGFkZGluZy10b3A6IDEycHg7XHJcbn1cclxuXHJcbi5ncm9kLTIsXHJcbi5ncm9kLTMge1xyXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbn1cclxuXHJcbi5iYWNrZ3JvdW5kLWltYWdlLXdlbGNvbWUge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9CYWNrZ3JvdW5kLWltYWdlLmpwZ1wiKSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgICAvKm92ZXJmbG93OiBhdXRvOyovXHJcbiAgICAvKmJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlOyovXHJcbn1cclxuXHJcbi5wcm9kdWN0X3N0eWxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvLVJFZ3VsYXInO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLmxhYmVsLWhlYWRpbmdfaGlnaCB7XHJcbiAgICBmb250LWZhbWlseTogJ051bml0by1SZWd1bGFyJztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5wb3MtcmVsLTEtaGlnaCB7XHJcbiAgICB0b3A6IC0xMzBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmVhcm5fc3R5bGUge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6IE51bml0by1SZWd1bGFyO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LWZhbWlseTogJ051bml0by1SZWd1bGFyJztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmVhcm5fc3R5bGVfcGFnZTMge1xyXG4gICAgdG9wOiAtMTJweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1mYW1pbHk6ICdOdW5pdG8tUmVndWxhcic7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5wb3MtcmVsLTEtaGlnaF9wYWdlMyB7XHJcbiAgICB0b3A6IC0xNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ubWFpbkNvbnRlbnRfcmVzcG9uc2l2ZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICAubWFpbkNvbnRlbnRfcmVzcG9uc2l2ZSB7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAubWFpbkNvbnRlbnQucm93IHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgfVxyXG4gICAgLmJhY2tncm91bmQtaW1hZ2Utd2VsY29tZSB7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICB9XHJcbiAgICAvKk5ldyBhZGRpdG9uIGZvciBHZXQgc3RhcnRlZCBmaXgqL1xyXG4gICAgLmdldC1zdGFydGVkLXBhcmVudC0xe1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuICAgIC5nZXQtc3RhcnRlZHtcclxuICAgICAgICB0b3A6IDA7IFxyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBtYXJnaW46IDAgYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgIHdpZHRoOiAxMzhweDtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbiAgICAgICAgcmlnaHQ6IDBweDtcclxuICAgICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgICAgdG9wOiAzMHB4O1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBoZWlnaHQ6IDM3cHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC8qTmV3IGFkZGl0b24gZm9yIEdldCBzdGFydGVkIGZpeCBFbmRzIGhlcmUqL1xyXG59XHJcblxyXG4ucG9zLXJlbC0xIHtcclxuICAgIHRvcDogLTQzcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5wb3MtcmVsLTIge1xyXG4gICAgdG9wOiAtODVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnBvcy1yZWwtMyB7XHJcbiAgICB0b3A6IC00OHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/welcome/welcome.component.ts": 
        /*!**********************************************!*\
          !*** ./src/app/welcome/welcome.component.ts ***!
          \**********************************************/
        /*! exports provided: WelcomePageComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageComponent", function () { return WelcomePageComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var _shared_screen_name__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/screen.name */ "./src/app/shared/screen.name.ts");
            /* harmony import */ var _shared_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/loader/loader.service */ "./src/app/shared/loader/loader.service.ts");
            /* harmony import */ var _shared_dialogue_dialogue_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/dialogue/dialogue.service */ "./src/app/shared/dialogue/dialogue.service.ts");
            /* harmony import */ var rxjs_add_operator_take__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/operator/take */ "./node_modules/rxjs-compat/_esm2015/add/operator/take.js");
            /* harmony import */ var rxjs_add_observable_timer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/add/observable/timer */ "./node_modules/rxjs-compat/_esm2015/add/observable/timer.js");
            /* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
            var WelcomePageComponent = /** @class */ (function () {
                function WelcomePageComponent(router, config, nameService, appLoader, dialogueservice) {
                    this.router = router;
                    this.nameService = nameService;
                    this.appLoader = appLoader;
                    this.dialogueservice = dialogueservice;
                    // config.interval = 10000;
                    // config.wrap = false;
                    // config.keyboard = false;
                }
                WelcomePageComponent.prototype.ngOnInit = function () {
                    this.nameService.setName('Welcome Screen');
                };
                WelcomePageComponent.prototype.callMobile = function () {
                    this.router.navigate(['mobile']);
                    //this.appLoader.showLoader("welcome");
                    //  this.dialogueservice.confirmBox({
                    //   title: 'Error',
                    //   message: "Fuckkk Offf",
                    //   messageType: 'error',
                    //   actionlabel: ['Close']
                    // }).take(1).subscribe((res) => {
                    //    console.log(res);
                    // })
                };
                return WelcomePageComponent;
            }());
            WelcomePageComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCarouselConfig"] },
                { type: _shared_screen_name__WEBPACK_IMPORTED_MODULE_4__["NameService"] },
                { type: _shared_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] },
                { type: _shared_dialogue_dialogue_service__WEBPACK_IMPORTED_MODULE_6__["DialogueService"] }
            ]; };
            WelcomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-welcome-page',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./welcome.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.component.html")).default,
                    providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCarouselConfig"]],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./welcome.component.css */ "./src/app/welcome/welcome.component.css")).default]
                })
            ], WelcomePageComponent);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! /Users/mayankmansinghka/Desktop/solemon_ankit/client/src/main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map