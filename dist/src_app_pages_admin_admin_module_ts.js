"use strict";
(self["webpackChunkngx_admin_demo"] = self["webpackChunkngx_admin_demo"] || []).push([["src_app_pages_admin_admin_module_ts"],{

/***/ 61496:
/*!*********************************************!*\
  !*** ./src/app/pages/admin/admin.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminModule": () => (/* binding */ AdminModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared.module */ 40950);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _components_table_user_table_user_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/table-user/table-user.component */ 54363);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);






class AdminModule {}
AdminModule.ɵfac = function AdminModule_Factory(t) {
  return new (t || AdminModule)();
};
AdminModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: AdminModule
});
AdminModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild([{
    path: '',
    component: _components_table_user_table_user_component__WEBPACK_IMPORTED_MODULE_1__.TableUserComponent
  }, {
    path: 'User',
    component: _components_table_user_table_user_component__WEBPACK_IMPORTED_MODULE_1__.TableUserComponent
  }])]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AdminModule, {
    declarations: [_components_table_user_table_user_component__WEBPACK_IMPORTED_MODULE_1__.TableUserComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 69536:
/*!**********************************************!*\
  !*** ./src/app/pages/admin/admin.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminService": () => (/* binding */ AdminService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 66587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 47418);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);





class AdminService {
  constructor(http) {
    this.http = http;
    this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + 'Admin/';
  }
  getAllUsersWithRoles(pageName = 1, PageSize = 50, email) {
    const params = {
      pageName: pageName.toString(),
      PageSize: PageSize.toString(),
      email: email || ''
    };
    const httpOptions = {
      withCredentials: true
    };
    return this.http.get(this.apiUrl + 'AllUserWithRoles', Object.assign({
      params,
      observe: 'response'
    }, httpOptions)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.handleError));
  }
  addRoleForUser(request) {
    return this.http.post(this.apiUrl + 'AddRoleForUser', request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.handleError));
  }
  deleteRoleForUser(request) {
    console.log(request);
    return this.http.delete(this.apiUrl + 'DeleteRoleForUser', {
      body: request
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.handleError));
  }
  getRoles() {
    return this.http.get(`${this.apiUrl}AllRoles`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.handleError));
  }
  handleError(error) {
    var _a;
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Client-side error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status || 500}\nMessage: ${((_a = error.error) === null || _a === void 0 ? void 0 : _a.Message) || error.message}`;
    }
    console.error(errorMessage);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => errorMessage);
  }
}
AdminService.ɵfac = function AdminService_Factory(t) {
  return new (t || AdminService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};
AdminService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: AdminService,
  factory: AdminService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 54363:
/*!***************************************************************************!*\
  !*** ./src/app/pages/admin/components/table-user/table-user.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TableUserComponent": () => (/* binding */ TableUserComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../admin.service */ 69536);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ 92302);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);







function TableUserComponent_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TableUserComponent_tr_15_Template_tr_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const user_r2 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.selectUser(user_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const user_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](user_r2.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](user_r2.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](user_r2.roles);
  }
}
function TableUserComponent_option_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const role_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", role_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](role_r5.name);
  }
}
const _c0 = function (a1, a2) {
  return {
    itemsPerPage: 50,
    currentPage: a1,
    totalItems: a2,
    id: "User"
  };
};
const _c1 = function () {
  return ["/Admin/User"];
};
const _c2 = function (a0) {
  return {
    currentPage: a0
  };
};
class TableUserComponent {
  constructor(adminService, toastr) {
    this.adminService = adminService;
    this.toastr = toastr;
    this.users = [];
    this.currentPage = 1;
    this.roles = [];
  }
  ngOnInit() {
    this.loadUsers(this.currentPage);
    this.loadRoles();
  }
  selectUser(user) {
    this.selectedUser = user.email;
    this.userId = user.id;
    console.log(this.userId);
    console.log(user);
  }
  loadUsers(page) {
    this.adminService.getAllUsersWithRoles(page).subscribe(response => {
      var _a;
      const data = (_a = response.body) === null || _a === void 0 ? void 0 : _a.data;
      const paginationData = JSON.parse(response.headers.get('x-pagination'));
      if (data) {
        this.users = data;
      }
      this.totalPages = paginationData === null || paginationData === void 0 ? void 0 : paginationData.TotalPageCount;
      this.currentPage = paginationData === null || paginationData === void 0 ? void 0 : paginationData.CurrentPage;
      this.totalItems = paginationData === null || paginationData === void 0 ? void 0 : paginationData.TotalItemCount;
    });
  }
  loadRoles() {
    this.adminService.getRoles().subscribe(roles => {
      this.roles = roles;
    });
  }
  addRole() {
    if (this.selectedUser && this.selectedRole) {
      const request = {
        userId: this.userId,
        roleId: this.selectedRole
      };
      this.adminService.addRoleForUser(request).subscribe(() => {
        this.loadUsers(this.currentPage);
        this.toastr.success('Role added successfully'); // Show success toast
      }, error => {
        this.toastr.error('Failed to add role'); // Show error toast
        console.error(error);
      });
    } else {
      this.toastr.warning('Please select a user and a role'); // Show a warning toast
    }
  }

  deleteRole() {
    if (this.selectedUser && this.selectedRole) {
      const request = {
        userId: this.userId,
        roleId: this.selectedRole
      };
      this.adminService.deleteRoleForUser(request).subscribe(() => {
        this.loadUsers(this.currentPage);
        this.toastr.success('Role deleted successfully'); // Show success toast
      }, error => {
        this.toastr.error('Failed to delete role'); // Show error toast
        console.error(error);
      });
    } else {
      this.toastr.warning('Please select a user and a role'); // Show a warning toast
    }
  }

  pageChanged(page) {
    this.loadUsers(page);
  }
}
TableUserComponent.ɵfac = function TableUserComponent_Factory(t) {
  return new (t || TableUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_admin_service__WEBPACK_IMPORTED_MODULE_0__.AdminService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__.ToastrService));
};
TableUserComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: TableUserComponent,
  selectors: [["ngx-table-user"]],
  decls: 38,
  vars: 15,
  consts: [[1, "col-12", "row"], [1, "col-8", "mt-2"], [1, "card"], [1, "card-body"], [1, "table-responsive", "background-table"], [1, "table", "table-hover"], [3, "click", 4, "ngFor", "ngForOf"], ["id", "User", 1, "m-auto", 3, "routerLink", "queryParams", "pageChange"], [1, "col-4", "mt-2"], [2, "font-weight", "700"], [1, "form-group"], ["for", "userSelect", 1, "m-3"], ["for", "roleSelect", 1, "m-3"], ["id", "roleSelect", 3, "ngModel", "ngModelChange"], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "btn", "btn-primary", "m-3", 3, "click"], [1, "btn", "btn-danger", 3, "click"], [3, "click"], [3, "ngValue"]],
  template: function TableUserComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "table", 5)(6, "thead")(7, "tr")(8, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Username");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Role");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, TableUserComponent_tr_15_Template, 7, 3, "tr", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "paginate");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "pagination-controls", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("pageChange", function TableUserComponent_Template_pagination_controls_pageChange_17_listener($event) {
        return ctx.pageChanged($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 8)(19, "div", 2)(20, "div", 3)(21, "div")(22, "h5", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Permissions Settings");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 10)(25, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " Selected User:");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 10)(30, "label", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Select Role: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "select", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TableUserComponent_Template_select_ngModelChange_32_listener($event) {
        return ctx.selectedRole = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, TableUserComponent_option_33_Template, 2, 2, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TableUserComponent_Template_button_click_34_listener() {
        return ctx.addRole();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Add Role");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TableUserComponent_Template_button_click_36_listener() {
        return ctx.deleteRole();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Delete Role");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](16, 6, ctx.users, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](9, _c0, ctx.currentPage, ctx.totalItems)));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](12, _c1))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](13, _c2, ctx.currentPage));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.selectedUser);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.selectedRole);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.roles);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, ngx_pagination__WEBPACK_IMPORTED_MODULE_5__.PaginationControlsComponent, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, ngx_pagination__WEBPACK_IMPORTED_MODULE_5__.PaginatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_admin_admin_module_ts.js.map