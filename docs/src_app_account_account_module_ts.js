"use strict";
(self["webpackChunkngx_admin_demo"] = self["webpackChunkngx_admin_demo"] || []).push([["src_app_account_account_module_ts"],{

/***/ 63879:
/*!*******************************************!*\
  !*** ./src/app/account/account.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountModule": () => (/* binding */ AccountModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/login/login.component */ 69431);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/register/register.component */ 2634);
/* harmony import */ var _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/forgot-password/forgot-password.component */ 77844);
/* harmony import */ var _components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/reset-password/reset-password.component */ 14049);
/* harmony import */ var _pages_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/shared/shared.module */ 40950);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);









class AccountModule {}
AccountModule.ɵfac = function AccountModule_Factory(t) {
  return new (t || AccountModule)();
};
AccountModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: AccountModule
});
AccountModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _pages_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild([{
    path: 'Login',
    component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent
  }, {
    path: 'Register',
    component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_1__.RegisterComponent
  }, {
    path: 'ForgotPassword',
    component: _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_2__.ForgotPasswordComponent
  }, {
    path: 'ResetPassword',
    component: _components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_3__.ResetPasswordComponent
  }, {
    path: '',
    redirectTo: 'Login',
    pathMatch: 'full'
  }, {
    path: '**',
    redirectTo: 'Login',
    pathMatch: 'full'
  }])]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AccountModule, {
    declarations: [_components_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent, _components_register_register_component__WEBPACK_IMPORTED_MODULE_1__.RegisterComponent, _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_2__.ForgotPasswordComponent, _components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_3__.ResetPasswordComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _pages_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
  });
})();

/***/ }),

/***/ 77844:
/*!*********************************************************************************!*\
  !*** ./src/app/account/components/forgot-password/forgot-password.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordComponent": () => (/* binding */ ForgotPasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var subsink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! subsink */ 87478);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ 81455);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);








function ForgotPasswordComponent_div_5_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " email Is Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ForgotPasswordComponent_div_5_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Enter Valid Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ForgotPasswordComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ForgotPasswordComponent_div_5_p_1_Template, 2, 0, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ForgotPasswordComponent_div_5_p_2_Template, 2, 0, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    let tmp_0_0;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r0.ForgotPasswordForm.get("email")) == null ? null : tmp_0_0.getError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r0.ForgotPasswordForm.get("email")) == null ? null : tmp_1_0.getError("email"));
  }
}
function ForgotPasswordComponent_i_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 11);
  }
}
function ForgotPasswordComponent_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Reset Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
const _c0 = function (a0) {
  return {
    "is-valid": a0
  };
};
class ForgotPasswordComponent {
  constructor(userService, router, fb, toastrService) {
    this.userService = userService;
    this.router = router;
    this.fb = fb;
    this.toastrService = toastrService;
    this.isLoading = false;
    this.subs = new subsink__WEBPACK_IMPORTED_MODULE_0__.SubSink();
    this.ForgotPasswordForm = this.fb.group({
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email])
    });
  }
  onSubmit() {
    this.subs.sink = this.userService.forgotPassword(this.ForgotPasswordForm.value).subscribe({
      next: result => {
        var _a;
        this.router.navigate(['/account/ResetPassword']);
        localStorage.setItem('email', this.ForgotPasswordForm.value);
        this.toastrService.success(result.message, '', {
          timeOut: 9000
        });
        this.userService.setEmail((_a = this.ForgotPasswordForm.get('email')) === null || _a === void 0 ? void 0 : _a.value);
        this.isLoading = false;
      },
      error: err => {
        this.isLoading = false;
        console.log(err);
        this.toastrService.error('', err, {
          timeOut: 3000
        });
      }
    });
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
ForgotPasswordComponent.ɵfac = function ForgotPasswordComponent_Factory(t) {
  return new (t || ForgotPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService));
};
ForgotPasswordComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ForgotPasswordComponent,
  selectors: [["ngx-forgot-password"]],
  decls: 9,
  vars: 8,
  consts: [[1, "container", "forgotPassword", "p-md-5", "p-2", "py-5"], [3, "formGroup", "ngSubmit"], ["for", "", 1, "fw-bold"], ["formControlName", "email", "type", "email", 1, "form-control", "mb-3", 2, "border-radius", "0", 3, "ngClass"], ["class", "alert alert-danger p-1", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary", "w-100", 2, "border-radius", "0", 3, "disabled"], ["class", "fas fa-spinner fa-spin", 4, "ngIf"], [4, "ngIf"], [1, "alert", "alert-danger", "p-1"], ["class", "m-0", 4, "ngIf"], [1, "m-0"], [1, "fas", "fa-spinner", "fa-spin"]],
  template: function ForgotPasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "form", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function ForgotPasswordComponent_Template_form_ngSubmit_1_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "label", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Forgot Password ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "input", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ForgotPasswordComponent_div_5_Template, 3, 2, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, ForgotPasswordComponent_i_7_Template, 1, 0, "i", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, ForgotPasswordComponent_span_8_Template, 2, 0, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      let tmp_1_0;
      let tmp_2_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.ForgotPasswordForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c0, (tmp_1_0 = ctx.ForgotPasswordForm.get("email")) == null ? null : tmp_1_0.valid));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx.ForgotPasswordForm.get("email")) == null ? null : tmp_2_0.errors) && ((tmp_2_0 = ctx.ForgotPasswordForm.get("email")) == null ? null : tmp_2_0.dirty));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.ForgotPasswordForm.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isLoading);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName],
  styles: [".forgotPassword[_ngcontent-%COMP%] {\n  max-width: 500px;\n}\n\n*[_ngcontent-%COMP%] {\n  border-radius: 0;\n}\n\n.link[_ngcontent-%COMP%] {\n  color: rgb(46, 173, 195);\n  cursor: pointer;\n  text-decoration: underline;\n}\n\n.fa-spinner[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_rotate 2s linear infinite;\n}\n\n@keyframes _ngcontent-%COMP%_rotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWNjb3VudC9jb21wb25lbnRzL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQUNGOztBQUNBO0VBQ0UsZ0JBQUE7QUFFRjs7QUFFQTtFQUNFLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQ0FBQTtBQUNGOztBQUVBO0VBQ0U7SUFDRSx1QkFBQTtFQUNGO0VBQ0E7SUFDRSx5QkFBQTtFQUNGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9yZ290UGFzc3dvcmQge1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbn1cclxuKiB7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxufVxyXG5cclxuXHJcbi5saW5rIHtcclxuICBjb2xvcjogcmdiKDQ2LCAxNzMsIDE5NSk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4uZmEtc3Bpbm5lciB7XHJcbiAgYW5pbWF0aW9uOiByb3RhdGUgMnMgbGluZWFyIGluZmluaXRlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XHJcbiAgZnJvbSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 69431:
/*!*************************************************************!*\
  !*** ./src/app/account/components/login/login.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var subsink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! subsink */ 87478);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ 81455);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../forgot-password/forgot-password.component */ 77844);









function LoginComponent_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Email this required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function LoginComponent_span_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "is not Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function LoginComponent_span_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Password this required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function LoginComponent_i_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 25);
  }
}
function LoginComponent_span_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
const _c0 = function (a0, a1) {
  return {
    isValid: a0,
    isNotValid: a1
  };
};
const _c1 = function () {
  return ["../ForgotPassword"];
};
const _c2 = function () {
  return ["../Register"];
};
class LoginComponent {
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
  constructor(userService, router, fb, toastrService) {
    this.userService = userService;
    this.router = router;
    this.fb = fb;
    this.toastrService = toastrService;
    this.isLoading = false;
    this.subs = new subsink__WEBPACK_IMPORTED_MODULE_0__.SubSink();
  }
  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]],
      password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
    });
  }
  onSubmit() {
    this.isLoading = true;
    //This function only works when the from is valid
    this.subs.sink = this.userService.login(this.loginForm.value).subscribe({
      next: result => {
        this.userService.setToken(result.data.jwToken);
        this.userService.setUserRoles(result.data.roles);
        this.userService.setUserName(result.data.userName);
        this.router.navigate(['/pages']);
        this.isLoading = false;
      },
      error: err => {
        this.toastrService.error("The username or password is incorrect, please try again.", '', {
          timeOut: 5000
        });
        this.isLoading = false;
      }
    });
  }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) {
  return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService));
};
LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: LoginComponent,
  selectors: [["ngx-login"]],
  decls: 39,
  vars: 19,
  consts: [[1, "container", "vh-100"], [1, "row", "justify-content-center", "align-items-center", "h-100"], [1, "card", "login", "p-0"], [1, "card-body"], [3, "formGroup", "ngSubmit"], [1, "text-center", "my-4"], [2, "color", "lightslategray", "text-align", "center", "margin-top", "10px"], [1, "form-group", "mb-5", "mt-4"], ["required", "", "type", "text", "id", "email", "formControlName", "email", 1, "form-control"], [1, "myPlaceholder", "px-2"], [3, "ngClass"], ["class", "requirements px-2", 4, "ngIf"], [1, "form-group", "my-4"], ["required", "", "type", "password", "formControlName", "password", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", "w-100", 3, "disabled"], ["class", "fas fa-spinner fa-spin", 4, "ngIf"], [4, "ngIf"], ["data-bs-toggle", "modal", "data-bs-target", "#ForgotPasswordModal", 1, "text-center", "m-2"], [1, "link", "m-1", 3, "routerLink"], [1, "card-footer", "text-right"], ["id", "ForgotPasswordModal", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-body"], [1, "requirements", "px-2"], [1, "fas", "fa-spinner", "fa-spin"]],
  template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "form", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_4_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5)(6, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Welcome");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "p", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " Please enter your login details ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "email");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "i", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, LoginComponent_span_15_Template, 2, 0, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, LoginComponent_span_16_Template, 2, 0, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "password");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "i", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, LoginComponent_span_22_Template, 2, 0, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, LoginComponent_i_24_Template, 1, 0, "i", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, LoginComponent_span_25_Template, 2, 0, "span", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, " or");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Forgot Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, " Don't have an account?");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Sign up");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 20)(35, "div", 21)(36, "div", 22)(37, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](38, "ngx-forgot-password");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      let tmp_1_0;
      let tmp_2_0;
      let tmp_3_0;
      let tmp_4_0;
      let tmp_5_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.loginForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](11, _c0, (tmp_1_0 = ctx.loginForm.get("email")) == null ? null : tmp_1_0.valid, !((tmp_1_0 = ctx.loginForm.get("email")) == null ? null : tmp_1_0.valid) && ((tmp_1_0 = ctx.loginForm.get("email")) == null ? null : tmp_1_0.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx.loginForm.get("email")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["required"]) && ((tmp_2_0 = ctx.loginForm.get("email")) == null ? null : tmp_2_0.dirty));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx.loginForm.get("email")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["email"]) && ((tmp_3_0 = ctx.loginForm.get("email")) == null ? null : tmp_3_0.dirty));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](14, _c0, (tmp_4_0 = ctx.loginForm.get("password")) == null ? null : tmp_4_0.valid, !((tmp_4_0 = ctx.loginForm.get("password")) == null ? null : tmp_4_0.valid) && ((tmp_4_0 = ctx.loginForm.get("password")) == null ? null : tmp_4_0.touched)));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_5_0 = ctx.loginForm.get("password")) == null ? null : tmp_5_0.errors == null ? null : tmp_5_0.errors["required"]) && ((tmp_5_0 = ctx.loginForm.get("password")) == null ? null : tmp_5_0.dirty));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.loginForm.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](17, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](18, _c2));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_2__.ForgotPasswordComponent],
  styles: [".login[_ngcontent-%COMP%] {\n  width: 480px;\n  border-radius: 8px;\n}\n\n.requirements[_ngcontent-%COMP%] {\n  color: #e21212;\n  font-size: 0.7em;\n}\n\n.isValid[_ngcontent-%COMP%] {\n  background-color: #007bff !important;\n}\n\n.isNotValid[_ngcontent-%COMP%] {\n  background-color: #e21212 !important;\n  font-size: 0.7em;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  position: relative;\n}\n\nform[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 10px;\n  outline: none;\n  border: none;\n  box-shadow: none;\n  font-size: 0.7em;\n  letter-spacing: 1.2px;\n}\n\nform[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 2px;\n  background-color: #007bff;\n}\n\n.myPlaceholder[_ngcontent-%COMP%] {\n  position: absolute;\n  transition: 0.5s;\n  color: #8f8f8f;\n  font-size: 0.5em;\n  transition: 0.5s;\n  transform: translateY(-24px);\n}\n\nform[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    ~ .myPlaceholder[_ngcontent-%COMP%], form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid    ~ .myPlaceholder[_ngcontent-%COMP%] {\n  transform: translateY(-55px);\n  color: #007bff;\n  font-size: 0.8em;\n  text-transform: capitalize;\n}\n\nspan[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n}\n\n.link[_ngcontent-%COMP%] {\n  color: rgb(46, 173, 195);\n  cursor: pointer;\n  text-decoration: underline;\n}\n\n.fa-spinner[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_rotate 2s linear infinite;\n}\n\n@keyframes _ngcontent-%COMP%_rotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWNjb3VudC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLG9DQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQ0FBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7QUFDRjs7QUFFQTs7RUFFRSw0QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSwwQkFBQTtBQUVGOztBQUtBO0VBQ0Usd0JBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7QUFGRjs7QUFLQTtFQUNFLG9DQUFBO0FBRkY7O0FBS0E7RUFDRTtJQUNFLHVCQUFBO0VBRkY7RUFJQTtJQUNFLHlCQUFBO0VBRkY7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbiB7XHJcbiAgd2lkdGg6IDQ4MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG5cclxuLnJlcXVpcmVtZW50cyB7XHJcbiAgY29sb3I6ICNlMjEyMTI7XHJcbiAgZm9udC1zaXplOiAwLjdlbTtcclxufVxyXG5cclxuLmlzVmFsaWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmlzTm90VmFsaWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMjEyMTIgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDAuN2VtO1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5mb3JtIC5mb3JtLWdyb3VwIGlucHV0IHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAwLjdlbTtcclxuICBsZXR0ZXItc3BhY2luZzogMS4ycHg7XHJcbn1cclxuXHJcbmZvcm0gLmZvcm0tZ3JvdXAgaSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcclxufVxyXG5cclxuLm15UGxhY2Vob2xkZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gIGNvbG9yOiAjOGY4ZjhmO1xyXG4gIGZvbnQtc2l6ZTogMC41ZW07XHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTI0cHgpO1xyXG59XHJcblxyXG5mb3JtIC5mb3JtLWdyb3VwIGlucHV0OmZvY3VzIH4gLm15UGxhY2Vob2xkZXIsXHJcbmZvcm0gLmZvcm0tZ3JvdXAgaW5wdXQ6dmFsaWQgfiAubXlQbGFjZWhvbGRlciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01NXB4KTtcclxuICBjb2xvcjogIzAwN2JmZjtcclxuICBmb250LXNpemU6IDAuOGVtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcbnNwYW4ge1xyXG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuLmxpbmsge1xyXG4gIGNvbG9yOiByZ2IoNDYsIDE3MywgMTk1KTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbi5mYS1zcGlubmVyIHtcclxuICBhbmltYXRpb246IHJvdGF0ZSAycyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcm90YXRlIHtcclxuICBmcm9tIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 2634:
/*!*******************************************************************!*\
  !*** ./src/app/account/components/register/register.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterComponent": () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var subsink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! subsink */ 87478);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ 81455);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);








function RegisterComponent_div_12_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " UserName Is Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_div_12_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " UserName Is min char 6 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_div_12_p_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " UserName Is max char 20 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_div_12_p_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Input must be alphanumeric ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RegisterComponent_div_12_p_1_Template, 2, 0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, RegisterComponent_div_12_p_2_Template, 2, 0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, RegisterComponent_div_12_p_3_Template, 2, 0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, RegisterComponent_div_12_p_4_Template, 2, 0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    let tmp_0_0;
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r0.registerForm.get("userName")) == null ? null : tmp_0_0.getError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r0.registerForm.get("userName")) == null ? null : tmp_1_0.getError("minlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r0.registerForm.get("userName")) == null ? null : tmp_2_0.getError("maxlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx_r0.registerForm.get("userName")) == null ? null : tmp_3_0.getError("pattern"));
  }
}
function RegisterComponent_div_16_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " email Is Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_div_16_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Enter Valid Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RegisterComponent_div_16_p_1_Template, 2, 0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, RegisterComponent_div_16_p_2_Template, 2, 0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    let tmp_0_0;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r1.registerForm.get("email")) == null ? null : tmp_0_0.getError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r1.registerForm.get("email")) == null ? null : tmp_1_0.getError("email"));
  }
}
function RegisterComponent_div_20_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " password Is Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_div_20_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Password should be 6-10 chars with 1 uppercase, 1 lowercase & 1 special character ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RegisterComponent_div_20_p_1_Template, 2, 0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, RegisterComponent_div_20_p_2_Template, 2, 0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    let tmp_0_0;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r2.registerForm.get("password")) == null ? null : tmp_0_0.getError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r2.registerForm.get("password")) == null ? null : tmp_1_0.getError("pattern"));
  }
}
function RegisterComponent_div_24_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " ConfirmPassword Is Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_div_24_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " password and ConfirmPassword not math ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RegisterComponent_div_24_p_1_Template, 2, 0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, RegisterComponent_div_24_p_2_Template, 2, 0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    let tmp_0_0;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r3.registerForm.get("ConfirmPassword")) == null ? null : tmp_0_0.getError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r3.registerForm.get("ConfirmPassword")) == null ? null : tmp_1_0.getError("math"));
  }
}
function RegisterComponent_i_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 20);
  }
}
function RegisterComponent_span_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
const _c0 = function (a0) {
  return {
    "is-valid": a0
  };
};
const _c1 = function () {
  return ["../Login"];
};
class RegisterComponent {
  constructor(userService, router, fb, toastrService) {
    this.userService = userService;
    this.router = router;
    this.fb = fb;
    this.toastrService = toastrService;
    this.isLoading = false;
    this.subs = new subsink__WEBPACK_IMPORTED_MODULE_0__.SubSink();
    this.registerForm = this.fb.group({
      userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern(/^[a-zA-Z0-9]*$/)]),
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]),
      password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{6,20}$/)]),
      ConfirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required])
    }, {
      validators: this.customPassword
    });
  }
  customPassword(registerForm) {
    let password = registerForm.get('password');
    let ConfirmPassword = registerForm.get('ConfirmPassword');
    if ((password === null || password === void 0 ? void 0 : password.value) !== (ConfirmPassword === null || ConfirmPassword === void 0 ? void 0 : ConfirmPassword.value)) {
      ConfirmPassword.setErrors({
        math: 'math'
      });
      return {
        math: 'math'
      };
    } else {
      return null;
    }
  }
  onSubmit() {
    this.isLoading = true;
    this.subs.sink = this.userService.register(this.registerForm.value).subscribe({
      next: result => {
        this.router.navigate(['./account/login']);
        this.toastrService.success(result.message, '', {
          timeOut: 9000
        });
        this.isLoading = false;
      },
      error: err => {
        this.isLoading = false;
        console.log(err);
        this.toastrService.error('', err, {
          timeOut: 3000
        });
      }
    });
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
  return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService));
};
RegisterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: RegisterComponent,
  selectors: [["ngx-register"]],
  decls: 32,
  vars: 22,
  consts: [[1, "container"], [1, "p-2", "pt-2", "md-2", "p-md-5"], [1, "card", "mx-md-5"], [1, "text-center", "my-2"], [2, "color", "lightslategray", "text-align", "center", "margin-top", "10px"], [1, "m-4", 3, "formGroup", "ngSubmit"], ["for", "", 1, "fw-bold"], ["formControlName", "userName", "type", "text", 1, "form-control", "mb-3", 3, "ngClass"], ["class", "alert alert-danger p-1", 4, "ngIf"], ["formControlName", "email", "type", "email", 1, "form-control", "mb-3", 3, "ngClass"], ["formControlName", "password", "type", "password", 1, "form-control", "mb-3", 3, "ngClass"], ["formControlName", "ConfirmPassword", "type", "password", 1, "form-control", "mb-3", 3, "ngClass"], ["type", "submit", 1, "btn", "btn-primary", "w-100", 3, "disabled"], ["class", "fas fa-spinner fa-spin", 4, "ngIf"], [4, "ngIf"], [1, "card-footer", "text-right"], [1, "link", "m-1", 3, "routerLink"], [1, "alert", "alert-danger", "p-1"], ["class", "m-0", 4, "ngIf"], [1, "m-0"], [1, "fas", "fa-spinner", "fa-spin"]],
  template: function RegisterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Welcome");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Please enter your register details ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "form", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_8_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "userName: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, RegisterComponent_div_12_Template, 5, 4, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "email: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, RegisterComponent_div_16_Template, 3, 2, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "password: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, RegisterComponent_div_20_Template, 3, 2, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "ConfirmPassword: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, RegisterComponent_div_24_Template, 3, 2, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, RegisterComponent_i_26_Template, 1, 0, "i", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, RegisterComponent_span_27_Template, 2, 0, "span", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, " Already have an account? ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "span", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Login");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      let tmp_1_0;
      let tmp_2_0;
      let tmp_3_0;
      let tmp_4_0;
      let tmp_5_0;
      let tmp_6_0;
      let tmp_7_0;
      let tmp_8_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.registerForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](13, _c0, (tmp_1_0 = ctx.registerForm.get("userName")) == null ? null : tmp_1_0.valid));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx.registerForm.get("userName")) == null ? null : tmp_2_0.errors) && ((tmp_2_0 = ctx.registerForm.get("userName")) == null ? null : tmp_2_0.dirty));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](15, _c0, (tmp_3_0 = ctx.registerForm.get("email")) == null ? null : tmp_3_0.valid));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_4_0 = ctx.registerForm.get("email")) == null ? null : tmp_4_0.errors) && ((tmp_4_0 = ctx.registerForm.get("email")) == null ? null : tmp_4_0.dirty));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](17, _c0, (tmp_5_0 = ctx.registerForm.get("password")) == null ? null : tmp_5_0.valid));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_6_0 = ctx.registerForm.get("password")) == null ? null : tmp_6_0.errors) && ((tmp_6_0 = ctx.registerForm.get("password")) == null ? null : tmp_6_0.dirty));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](19, _c0, (tmp_7_0 = ctx.registerForm.get("ConfirmPassword")) == null ? null : tmp_7_0.valid));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_8_0 = ctx.registerForm.get("ConfirmPassword")) == null ? null : tmp_8_0.errors) && ((tmp_8_0 = ctx.registerForm.get("ConfirmPassword")) == null ? null : tmp_8_0.dirty));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.registerForm.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](21, _c1));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink],
  styles: [".link[_ngcontent-%COMP%] {\n  color: rgb(46, 173, 195);\n  cursor: pointer;\n  text-decoration: underline;\n}\n\n.fa-spinner[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_rotate 2s linear infinite;\n}\n\n@keyframes _ngcontent-%COMP%_rotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWNjb3VudC9jb21wb25lbnRzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0JBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7QUFDSjs7QUFFRTtFQUNFLG9DQUFBO0FBQ0o7O0FBRUU7RUFDRTtJQUNFLHVCQUFBO0VBQ0o7RUFDRTtJQUNFLHlCQUFBO0VBQ0o7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5saW5rIHtcclxuICAgIGNvbG9yOiByZ2IoNDYsIDE3MywgMTk1KTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIH1cclxuICBcclxuICAuZmEtc3Bpbm5lciB7XHJcbiAgICBhbmltYXRpb246IHJvdGF0ZSAycyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgcm90YXRlIHtcclxuICAgIGZyb20ge1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIH1cclxuICAgIHRvIHtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIH1cclxuICB9Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 14049:
/*!*******************************************************************************!*\
  !*** ./src/app/account/components/reset-password/reset-password.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetPasswordComponent": () => (/* binding */ ResetPasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var subsink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! subsink */ 87478);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ 81455);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);








function ResetPasswordComponent_div_12_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "code Is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ResetPasswordComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ResetPasswordComponent_div_12_p_1_Template, 2, 0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r0.resetPasswordForm.get("code")) == null ? null : tmp_0_0.getError("required"));
  }
}
function ResetPasswordComponent_div_16_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "password Is Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ResetPasswordComponent_div_16_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Password should be 6-10 chars with 1 uppercase, 1 lowercase & 1 special character");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ResetPasswordComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ResetPasswordComponent_div_16_p_1_Template, 2, 0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ResetPasswordComponent_div_16_p_2_Template, 2, 0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    let tmp_0_0;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r1.resetPasswordForm.get("password")) == null ? null : tmp_0_0.getError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r1.resetPasswordForm.get("password")) == null ? null : tmp_1_0.getError("pattern"));
  }
}
function ResetPasswordComponent_div_20_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " ConfirmPassword Is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ResetPasswordComponent_div_20_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "password and ConfirmPassword not math ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ResetPasswordComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ResetPasswordComponent_div_20_p_1_Template, 2, 0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ResetPasswordComponent_div_20_p_2_Template, 2, 0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    let tmp_0_0;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r2.resetPasswordForm.get("ConfirmPassword")) == null ? null : tmp_0_0.getError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r2.resetPasswordForm.get("ConfirmPassword")) == null ? null : tmp_1_0.getError("math"));
  }
}
function ResetPasswordComponent_i_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 19);
  }
}
function ResetPasswordComponent_span_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
const _c0 = function (a0) {
  return {
    "is-valid": a0
  };
};
const _c1 = function () {
  return ["../Login"];
};
class ResetPasswordComponent {
  constructor(userService, router, fb, toastrService) {
    this.userService = userService;
    this.router = router;
    this.fb = fb;
    this.toastrService = toastrService;
    this.isLoading = false;
    this.subs = new subsink__WEBPACK_IMPORTED_MODULE_0__.SubSink();
    this.resetPasswordForm = this.fb.group({
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(this.userService.getEmail()),
      code: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
      password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{6,20}$/)]),
      ConfirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required])
    }, {
      validators: this.customPassword
    });
  }
  customPassword(resetPasswordForm) {
    let password = resetPasswordForm.get('password');
    let ConfirmPassword = resetPasswordForm.get('ConfirmPassword');
    if ((password === null || password === void 0 ? void 0 : password.value) !== (ConfirmPassword === null || ConfirmPassword === void 0 ? void 0 : ConfirmPassword.value)) {
      ConfirmPassword.setErrors({
        math: 'math'
      });
      return {
        math: 'math'
      };
    } else {
      return null;
    }
  }
  onSubmit() {
    this.isLoading = true;
    this.subs.sink = this.userService.resetPassword(this.resetPasswordForm.value).subscribe({
      next: result => {
        var _a;
        this.subs.sink = this.userService.login({
          email: localStorage.getItem('email'),
          password: (_a = this.resetPasswordForm.get('password')) === null || _a === void 0 ? void 0 : _a.value
        }).subscribe({
          next: result => {
            this.userService.setToken(result.data.jwToken);
            this.router.navigate(['/pages']);
          },
          error: err => {
            this.router.navigate(['/account/Login']);
          }
        });
        this.isLoading = false;
      },
      error: err => {
        this.isLoading = false;
        console.log(err);
        this.toastrService.error('', err, {
          timeOut: 3000
        });
      }
    });
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
ResetPasswordComponent.ɵfac = function ResetPasswordComponent_Factory(t) {
  return new (t || ResetPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService));
};
ResetPasswordComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ResetPasswordComponent,
  selectors: [["ngx-reset-password"]],
  decls: 28,
  vars: 18,
  consts: [[1, "container"], [1, "p-2", "pt-5", "p-md-5"], [1, "card", "mx-md-5"], [1, "text-center", "my-4"], [2, "color", "lightslategray", "text-align", "center", "margin-top", "10px"], [1, "m-4", 3, "formGroup", "ngSubmit"], ["for", "", 1, "fw-bold"], ["formControlName", "code", "type", "code", 1, "form-control", "mb-3", 3, "ngClass"], ["class", "alert alert-danger p-1", 4, "ngIf"], ["formControlName", "password", "type", "password", 1, "form-control", "mb-3", 3, "ngClass"], ["formControlName", "ConfirmPassword", "type", "password", 1, "form-control", "mb-3", 3, "ngClass"], ["type", "submit", 1, "btn", "btn-primary", "w-100", 3, "disabled"], ["class", "fas fa-spinner fa-spin", 4, "ngIf"], [4, "ngIf"], [1, "card-footer", "text-right"], [1, "link", "m-1", 3, "routerLink"], [1, "alert", "alert-danger", "p-1"], ["class", "m-0", 4, "ngIf"], [1, "m-0"], [1, "fas", "fa-spinner", "fa-spin"]],
  template: function ResetPasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Welcome");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Please enter your register details ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "form", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function ResetPasswordComponent_Template_form_ngSubmit_8_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "code: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, ResetPasswordComponent_div_12_Template, 2, 1, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "password: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, ResetPasswordComponent_div_16_Template, 3, 2, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "ConfirmPassword: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, ResetPasswordComponent_div_20_Template, 3, 2, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, ResetPasswordComponent_i_22_Template, 1, 0, "i", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, ResetPasswordComponent_span_23_Template, 2, 0, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, " Already have an account? ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "span", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Login");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      let tmp_1_0;
      let tmp_2_0;
      let tmp_3_0;
      let tmp_4_0;
      let tmp_5_0;
      let tmp_6_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.resetPasswordForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](11, _c0, (tmp_1_0 = ctx.resetPasswordForm.get("code")) == null ? null : tmp_1_0.valid));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx.resetPasswordForm.get("code")) == null ? null : tmp_2_0.errors) && ((tmp_2_0 = ctx.resetPasswordForm.get("code")) == null ? null : tmp_2_0.dirty));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](13, _c0, (tmp_3_0 = ctx.resetPasswordForm.get("password")) == null ? null : tmp_3_0.valid));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_4_0 = ctx.resetPasswordForm.get("password")) == null ? null : tmp_4_0.errors) && ((tmp_4_0 = ctx.resetPasswordForm.get("password")) == null ? null : tmp_4_0.dirty));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](15, _c0, (tmp_5_0 = ctx.resetPasswordForm.get("ConfirmPassword")) == null ? null : tmp_5_0.valid));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_6_0 = ctx.resetPasswordForm.get("ConfirmPassword")) == null ? null : tmp_6_0.errors) && ((tmp_6_0 = ctx.resetPasswordForm.get("ConfirmPassword")) == null ? null : tmp_6_0.dirty));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.resetPasswordForm.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](17, _c1));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink],
  styles: [".link[_ngcontent-%COMP%] {\n  color: rgb(46, 173, 195);\n  cursor: pointer;\n  text-decoration: underline;\n}\n\n.fa-spinner[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_rotate 2s linear infinite;\n}\n\n@keyframes _ngcontent-%COMP%_rotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWNjb3VudC9jb21wb25lbnRzL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0JBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7QUFDSjs7QUFFRTtFQUNFLG9DQUFBO0FBQ0o7O0FBRUU7RUFDRTtJQUNFLHVCQUFBO0VBQ0o7RUFDRTtJQUNFLHlCQUFBO0VBQ0o7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5saW5rIHtcclxuICAgIGNvbG9yOiByZ2IoNDYsIDE3MywgMTk1KTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIH1cclxuICBcclxuICAuZmEtc3Bpbm5lciB7XHJcbiAgICBhbmltYXRpb246IHJvdGF0ZSAycyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgcm90YXRlIHtcclxuICAgIGZyb20ge1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIH1cclxuICAgIHRvIHtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIH1cclxuICB9Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 87478:
/*!***************************************************!*\
  !*** ./node_modules/subsink/dist/es2015/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubSink": () => (/* reexport safe */ _subsink__WEBPACK_IMPORTED_MODULE_0__.SubSink)
/* harmony export */ });
/* harmony import */ var _subsink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subsink */ 13602);


/***/ }),

/***/ 13602:
/*!*****************************************************!*\
  !*** ./node_modules/subsink/dist/es2015/subsink.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubSink": () => (/* binding */ SubSink)
/* harmony export */ });
var isFunction = function (fn) {
  return typeof fn === 'function';
};
/**
 * Subscription sink that holds Observable subscriptions
 * until you call unsubscribe on it in ngOnDestroy.
 */
var SubSink = /** @class */function () {
  /**
   * Subscription sink that holds Observable subscriptions
   * until you call unsubscribe on it in ngOnDestroy.
   *
   * @example
   * In Angular:
   * ```
   *   private subs = new SubSink();
   *   ...
   *   this.subs.sink = observable$.subscribe(...)
   *   this.subs.add(observable$.subscribe(...));
   *   ...
   *   ngOnDestroy() {
   *     this.subs.unsubscribe();
   *   }
   * ```
   */
  function SubSink() {
    this._subs = [];
  }
  /**
   * Add subscriptions to the tracked subscriptions
   * @example
   *  this.subs.add(observable$.subscribe(...));
   */
  SubSink.prototype.add = function () {
    var subscriptions = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      subscriptions[_i] = arguments[_i];
    }
    this._subs = this._subs.concat(subscriptions);
  };
  Object.defineProperty(SubSink.prototype, "sink", {
    /**
     * Assign subscription to this sink to add it to the tracked subscriptions
     * @example
     *  this.subs.sink = observable$.subscribe(...);
     */
    set: function (subscription) {
      this._subs.push(subscription);
    },
    enumerable: true,
    configurable: true
  });
  /**
   * Unsubscribe to all subscriptions in ngOnDestroy()
   * @example
   *   ngOnDestroy() {
   *     this.subs.unsubscribe();
   *   }
   */
  SubSink.prototype.unsubscribe = function () {
    this._subs.forEach(function (sub) {
      return sub && isFunction(sub.unsubscribe) && sub.unsubscribe();
    });
    this._subs = [];
  };
  return SubSink;
}();


/***/ })

}]);
//# sourceMappingURL=src_app_account_account_module_ts.js.map