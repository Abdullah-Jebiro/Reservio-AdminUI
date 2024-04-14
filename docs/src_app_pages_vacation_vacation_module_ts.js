"use strict";
(self["webpackChunkngx_admin_demo"] = self["webpackChunkngx_admin_demo"] || []).push([["src_app_pages_vacation_vacation_module_ts"],{

/***/ 12209:
/*!*************************************************************!*\
  !*** ./src/app/pages/vacation/Services/vacation.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VacationService": () => (/* binding */ VacationService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 66587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 47418);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);





class VacationService {
  constructor(http) {
    this.http = http;
    this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
  }
  getVacations() {
    const url = `${this.apiUrl}Vacations`;
    return this.http.get(url, {
      observe: 'response'
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.handleError));
  }
  addVaction(createVacation) {
    return this.http.post(`${this.apiUrl}Vacations`, createVacation).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.handleError));
  }
  deleteVacation(vacationId) {
    const url = `${this.apiUrl}Vacations/${vacationId}`;
    return this.http.delete(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.handleError));
  }
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Client-side error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}, Message: ${error === null || error === void 0 ? void 0 : error.message}`;
    }
    console.log(errorMessage);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => errorMessage);
  }
}
VacationService.ɵfac = function VacationService_Factory(t) {
  return new (t || VacationService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};
VacationService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: VacationService,
  factory: VacationService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 83025:
/*!*****************************************************!*\
  !*** ./src/app/pages/vacation/VacationComponent.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VacationComponent": () => (/* binding */ VacationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);


class VacationComponent {}
VacationComponent.ɵfac = function VacationComponent_Factory(t) {
  return new (t || VacationComponent)();
};
VacationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: VacationComponent,
  selectors: [["ngx-tables"]],
  decls: 1,
  vars: 0,
  template: function VacationComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
  encapsulation: 2
});

/***/ }),

/***/ 70192:
/*!***************************************************************************!*\
  !*** ./src/app/pages/vacation/vacaction-list/vacaction-list.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VacactionListComponent": () => (/* binding */ VacactionListComponent)
/* harmony export */ });
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-smart-table */ 46819);
/* harmony import */ var subsink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! subsink */ 87478);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _Services_vacation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Services/vacation.service */ 12209);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ 96953);






class VacactionListComponent {
  constructor(vacactionService) {
    this.vacactionService = vacactionService;
    this.subs = new subsink__WEBPACK_IMPORTED_MODULE_0__.SubSink();
    this.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__.LocalDataSource();
    this.settings = {
      add: {
        addButtonContent: '<i class="nb-plus"></i>',
        createButtonContent: '<i class="nb-checkmark"></i>',
        cancelButtonContent: '<i class="nb-close"></i>',
        confirmCreate: true
      },
      edit: {
        editButtonContent: '<i class="nb-edit"></i>',
        saveButtonContent: '<i class="nb-checkmark"></i>',
        cancelButtonContent: '<i class="nb-close"></i>',
        confirmSave: true
      },
      delete: {
        deleteButtonContent: '<i class="nb-trash"></i>',
        confirmDelete: true
      },
      // columns: {
      //   doctor: {
      //     title: "Doctor Name",
      //     type: "string",
      //   },
      //   dateTime: {
      //     title: "Date Time",
      //     type: "string",
      //   }, 
      // },
      columns: {
        doctor: {
          title: 'Doctor',
          editor: {
            type: 'list',
            config: {
              list: [],
              filter: true
            }
          }
        },
        dateTime: {
          title: 'dateTime',
          type: 'string',
          editable: false,
          filter: false,
          addable: true
        }
      },
      actions: {
        columnTitle: '',
        add: true,
        edit: true,
        position: 'left'
      }
    };
  }
  ngOnInit() {
    this.subs.sink = this.vacactionService.getVacations().subscribe({
      next: data => {
        var obj = data.body;
        this.source.load(obj.vacations);
        this.settings = {
          add: {
            addButtonContent: '<i class="nb-plus"></i>',
            createButtonContent: '<i class="nb-checkmark"></i>',
            cancelButtonContent: '<i class="nb-close"></i>',
            confirmCreate: true
          },
          edit: {
            editButtonContent: '<i class="nb-edit"></i>',
            saveButtonContent: '<i class="nb-checkmark"></i>',
            cancelButtonContent: '<i class="nb-close"></i>',
            confirmSave: true
          },
          delete: {
            deleteButtonContent: '<i class="nb-trash"></i>',
            confirmDelete: true
          },
          columns: {
            doctor: {
              title: 'Doctor',
              editor: {
                type: 'list',
                config: {
                  list: obj.doctorPairs,
                  filter: true
                }
              }
            },
            dateTime: {
              title: 'dateTime',
              type: 'string',
              editable: false,
              filter: false,
              addable: true
            }
          },
          actions: {
            columnTitle: '',
            add: true,
            edit: true,
            position: 'left'
          }
        };
      },
      error: error => {
        console.log(error);
      }
    });
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
  onDeleteConfirm(event) {
    console.log(event.data);
    if (window.confirm("Are you sure you want to delete?")) {
      this.subs.sink = this.vacactionService.deleteVacation(event.data.vacationId).subscribe({
        next: () => {
          event.confirm.resolve();
        },
        error: error => {
          console.log(error);
        },
        complete: () => {
          this.source.refresh();
          alert("deleted successfully");
        }
      });
    } else {
      event.confirm.reject();
    }
  }
  onCreateConfirm(event) {
    console.log(event.newData);
    var isDate = this.isDateValid(event.newData.dateTime);
    if (!isDate) {
      alert('error: invalid date  ');
    }
    var vacactionForAdd = {
      doctorId: event.newData.doctor,
      dateTime: event.newData.dateTime
    };
    this.subs.sink = this.vacactionService.addVaction(event.newData).subscribe({
      next: () => {
        event.confirm.resolve();
        const currentPage = this.source.getPaging().page;
        this.reloadTableData(currentPage);
      },
      error: error => {
        console.log('Error occurred:', error);
      },
      complete: () => {
        this.source.refresh();
        alert('Add Vacation Success');
      }
    });
  }
  onSaveConfirm(event) {
    alert("your cann't exeute this action");
  }
  reloadTableData(currentPage) {
    this.subs.sink = this.vacactionService.getVacations().subscribe({
      next: data => {
        this.source.load(data.body.vacations);
        // this.source.setPaging(currentPage, this.source.getPaging().perPage);
      },

      error: error => {
        console.log(error);
      }
    });
  }
  isDateValid(dateString) {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    const validFormat = dateRegex.test(dateString);
    if (validFormat) {
      const currentDate = new Date();
      const selectedDate = new Date(dateString);
      return selectedDate >= currentDate;
    }
    return false;
  }
}
VacactionListComponent.ɵfac = function VacactionListComponent_Factory(t) {
  return new (t || VacactionListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_Services_vacation_service__WEBPACK_IMPORTED_MODULE_1__.VacationService));
};
VacactionListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: VacactionListComponent,
  selectors: [["ngx-vacaction-list"]],
  decls: 3,
  vars: 2,
  consts: [[3, "settings", "source", "createConfirm", "editConfirm", "deleteConfirm"]],
  template: function VacactionListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nb-card")(1, "nb-card-body")(2, "ng2-smart-table", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("createConfirm", function VacactionListComponent_Template_ng2_smart_table_createConfirm_2_listener($event) {
        return ctx.onCreateConfirm($event);
      })("editConfirm", function VacactionListComponent_Template_ng2_smart_table_editConfirm_2_listener($event) {
        return ctx.onSaveConfirm($event);
      })("deleteConfirm", function VacactionListComponent_Template_ng2_smart_table_deleteConfirm_2_listener($event) {
        return ctx.onDeleteConfirm($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("settings", ctx.settings)("source", ctx.source);
    }
  },
  dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbCardBodyComponent, ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__.Ng2SmartTableComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 16472:
/*!***********************************************************!*\
  !*** ./src/app/pages/vacation/vacation-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VacactionRoutingModule": () => (/* binding */ VacactionRoutingModule),
/* harmony export */   "routedComponents": () => (/* binding */ routedComponents)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _VacationComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VacationComponent */ 83025);
/* harmony import */ var _vacaction_list_vacaction_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vacaction-list/vacaction-list.component */ 70192);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);





const routes = [{
  path: "",
  component: _vacaction_list_vacaction_list_component__WEBPACK_IMPORTED_MODULE_1__.VacactionListComponent,
  children: [{
    path: "vacation-table",
    component: _vacaction_list_vacaction_list_component__WEBPACK_IMPORTED_MODULE_1__.VacactionListComponent
  }]
}];
class VacactionRoutingModule {}
VacactionRoutingModule.ɵfac = function VacactionRoutingModule_Factory(t) {
  return new (t || VacactionRoutingModule)();
};
VacactionRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: VacactionRoutingModule
});
VacactionRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](VacactionRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();
const routedComponents = [_vacaction_list_vacaction_list_component__WEBPACK_IMPORTED_MODULE_1__.VacactionListComponent, _VacationComponent__WEBPACK_IMPORTED_MODULE_0__.VacationComponent];

/***/ }),

/***/ 61511:
/*!***************************************************!*\
  !*** ./src/app/pages/vacation/vacation.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VacationModule": () => (/* binding */ VacationModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _vacaction_list_vacaction_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vacaction-list/vacaction-list.component */ 70192);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _vacation_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vacation-routing.module */ 16472);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nebular/theme */ 96953);
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-smart-table */ 46819);
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../@theme/theme.module */ 80268);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _VacationComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./VacationComponent */ 83025);











class VacationModule {}
VacationModule.ɵfac = function VacationModule_Factory(t) {
  return new (t || VacationModule)();
};
VacationModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: VacationModule
});
VacationModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _vacation_routing_module__WEBPACK_IMPORTED_MODULE_1__.VacactionRoutingModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbCardModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbIconModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbInputModule, _theme_theme_module__WEBPACK_IMPORTED_MODULE_2__.ThemeModule, ng2_smart_table__WEBPACK_IMPORTED_MODULE_7__.Ng2SmartTableModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](VacationModule, {
    declarations: [_vacaction_list_vacaction_list_component__WEBPACK_IMPORTED_MODULE_0__.VacactionListComponent, _vacaction_list_vacaction_list_component__WEBPACK_IMPORTED_MODULE_0__.VacactionListComponent, _VacationComponent__WEBPACK_IMPORTED_MODULE_3__.VacationComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterOutlet, _vacation_routing_module__WEBPACK_IMPORTED_MODULE_1__.VacactionRoutingModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbCardModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbIconModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbInputModule, _theme_theme_module__WEBPACK_IMPORTED_MODULE_2__.ThemeModule, ng2_smart_table__WEBPACK_IMPORTED_MODULE_7__.Ng2SmartTableModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule]
  });
})();

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
//# sourceMappingURL=src_app_pages_vacation_vacation_module_ts.js.map