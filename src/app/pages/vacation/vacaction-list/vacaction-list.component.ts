import { Component, OnDestroy, OnInit } from '@angular/core';
import { DayOfWeek } from '../../../@core/data/DayOfWeek';
import { LocalDataSource } from 'ng2-smart-table';
import { SubSink } from 'subsink';
import { VacationService } from '../Services/vacation.service';
import { Vacation } from '../Model/vacation';
import { VacationResponse } from '../Model/vacationDTO';
import { VacationAddDto } from '../Model/vacationAddDTo';

@Component({
  selector: 'ngx-vacaction-list',
  templateUrl: './vacaction-list.component.html',
  styleUrls: ['./vacaction-list.component.scss']
})

export class VacactionListComponent implements OnInit, OnDestroy {

  private subs = new SubSink();
  source: LocalDataSource = new LocalDataSource();

  constructor(private vacactionService: VacationService) { }
  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
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
            list: []
            , filter: true
          }
        },
      },
      dateTime: {
        title: 'dateTime',
        type: 'string',
        editable: false,
        filter: false,
        addable: true
      },
    },

    actions: {
      columnTitle: '',
      add: true,
      edit: true,
      position: 'left'
    },
  };
  ngOnInit(): void {
    this.subs.sink = this.vacactionService.getVacations().subscribe({
      next: (data) => {
        var obj: VacationResponse = data.body;
        this.source.load(obj.vacations);
        this.settings = {
          add: {
            addButtonContent: '<i class="nb-plus"></i>',
            createButtonContent: '<i class="nb-checkmark"></i>',
            cancelButtonContent: '<i class="nb-close"></i>',
            confirmCreate: true,
          },
          edit: {
            editButtonContent: '<i class="nb-edit"></i>',
            saveButtonContent: '<i class="nb-checkmark"></i>',
            cancelButtonContent: '<i class="nb-close"></i>',
            confirmSave: true,
          },
          delete: {
            deleteButtonContent: '<i class="nb-trash"></i>',
            confirmDelete: true,
          },
          columns: {
            doctor: {
              title: 'Doctor',
              editor: {
                type: 'list',
                config: {
                  list: obj.doctorPairs
                  , filter: true
                }
              },
            },
            dateTime: {
              title: 'dateTime',
              type: 'string',
              editable: false,
              filter: false,
              addable: true
            },
          },

          actions: {
            columnTitle: '',
            add: true,
            edit: true,
            position: 'left'
          },
        };
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
  onDeleteConfirm(event): void {
    console.log(event.data);
    if (window.confirm("Are you sure you want to delete?")) {
      this.subs.sink = this.vacactionService.deleteVacation(event.data.vacationId).subscribe({
        next: () => {
          event.confirm.resolve();
        },
        error: (error) => {
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

  onCreateConfirm(event): void {
    console.log(event.newData);
    var isDate: boolean = this.isDateValid(event.newData.dateTime);
    if (!isDate) {
      alert('error: invalid date  ');
    }
    var vacactionForAdd: VacationAddDto = {
      doctorId: event.newData.doctor,
      dateTime: event.newData.dateTime
    };
    this.subs.sink = this.vacactionService.addVaction(event.newData).subscribe({
      next: () => {
        event.confirm.resolve();
        const currentPage = this.source.getPaging().page;
        this.reloadTableData(currentPage);
      },
      error: (error) => {
        console.log('Error occurred:', error);
      },
      complete: () => {
        this.source.refresh();
        alert('Add Vacation Success');
      }
    });
  }

  onSaveConfirm(event): void {
    alert("your cann't exeute this action");
  }
  private reloadTableData(currentPage: number): void {
    this.subs.sink = this.vacactionService.getVacations().subscribe({
      next: (data) => {
        this.source.load(data.body.vacations);
        // this.source.setPaging(currentPage, this.source.getPaging().perPage);
      },
      error: (error) => {
        console.log(error);
      },
    })
  }
  isDateValid(dateString: string): boolean {
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