import { User } from './../../shared/user';
import { ApiService } from './../../shared/api.service';
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit {
  UserData: any = [];
  dataSource: MatTableDataSource<User>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = [
    'first_name',
    'last_name',
    'email',
    'phone',
    'role',
    'action',
  ];

  constructor(private userApi: ApiService) {
    this.userApi.GetUsers().subscribe((data) => {
      this.UserData = data;
      this.dataSource = new MatTableDataSource<User>(this.UserData);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      }, 0);
    });
  }

  ngOnInit(): void {}

  deleteUser(index: number, e) {
    if (window.confirm('Are you sure')) {
      const data = this.dataSource.data;
      data.splice(
        this.paginator.pageIndex * this.paginator.pageSize + index,
        1
      );
      this.dataSource.data = data;
      this.userApi.DeleteUser(e._id).subscribe();
    }
  }
}
