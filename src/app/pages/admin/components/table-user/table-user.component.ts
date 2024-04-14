import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { IDeleteRoleRequest } from '../../models/IDeleteRoleRequest';
import { IAddRoleRequest } from '../../models/IAddRoleRequest';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'ngx-table-user',
  templateUrl: './table-user.component.html',
  styleUrls: ['./table-user.component.css'],
})
export class TableUserComponent implements OnInit {
  users: any[] = [];
  currentPage = 1;
  totalPages: number | undefined;
  totalItems: number | undefined;
  selectedUser!: string; // Initialize as null or undefined
  userId!: number;
  selectedRole!: any; // Initialize as null or undefined
  roles: any[] = [];

  constructor(
    private adminService: AdminService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.loadUsers(this.currentPage);
    this.loadRoles();
  }

  selectUser(user: any): void {
    this.selectedUser = user.email;
    this.userId = user.id;
    console.log(this.userId);
    console.log(user);
  }
  loadUsers(page: number): void {
    this.adminService
      .getAllUsersWithRoles(page)
      .subscribe((response: HttpResponse<any>) => {
        const data = response.body?.data;
        const paginationData = JSON.parse(
          response.headers.get('x-pagination')!
        );

        if (data) {
          this.users = data;
        }

        this.totalPages = paginationData?.TotalPageCount;
        this.currentPage = paginationData?.CurrentPage;
        this.totalItems = paginationData?.TotalItemCount;
      });
  }

  loadRoles(): void {
    this.adminService.getRoles().subscribe((roles: any[]) => {
      this.roles = roles;
    });
  }

  addRole(): void {
    if (this.selectedUser && this.selectedRole) {
      const request: IAddRoleRequest = {
        userId: this.userId,
        roleId: this.selectedRole,
      };
  
      this.adminService.addRoleForUser(request).subscribe(
        () => {
          this.loadUsers(this.currentPage);
          this.toastr.success('Role added successfully'); // Show success toast
        },
        (error) => {
          this.toastr.error('Failed to add role'); // Show error toast
          console.error(error);
        }
      );
    } else {
      this.toastr.warning('Please select a user and a role'); // Show a warning toast
    }
  }
  
  deleteRole(): void {
    if (this.selectedUser && this.selectedRole) {
      const request: IDeleteRoleRequest = {
        userId: this.userId,
        roleId: this.selectedRole,
      };

      this.adminService.deleteRoleForUser(request).subscribe(
        () => {
          this.loadUsers(this.currentPage);
          this.toastr.success('Role deleted successfully'); // Show success toast
        },
        (error) => {
          this.toastr.error('Failed to delete role'); // Show error toast
          console.error(error);
        }
      );
    }
    else {
      this.toastr.warning('Please select a user and a role'); // Show a warning toast
    }
  }

  pageChanged(page: number): void {
    this.loadUsers(page);
  }
}
