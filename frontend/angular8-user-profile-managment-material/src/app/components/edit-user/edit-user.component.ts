import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { ApiService } from './../../shared/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export interface Team {
  name: string;
}

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent implements OnInit {
  visible = true;
  selected: string;
  removable = true;
  addOnBlur = true;
  @ViewChild('chipList', { static: true }) chipList;
  @ViewChild('resetUserForm', { static: true }) myNgForm;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  userForm: FormGroup;
  teamArray: Team[] = [];
  RolesArray: any = [
    'Admin',
    'Manager',
    'Front End Developer',
    'Backend Developer',
    'Mobile Developer',
    'Designer',
  ];

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private actRoute: ActivatedRoute,
    private userApi: ApiService
  ) {
    var id = this.actRoute.snapshot.paramMap.get('id');
    let MOBILE_PATTERN = /[0-9\+\-\ ]/;
    this.userApi.GetUser(id).subscribe((data) => {
      this.teamArray = data.teams;
      this.userForm = this.fb.group({
        first_name: ['', [Validators.required]],
        last_name: ['', [Validators.required]],
        email: ['', [Validators.required]],
        role: ['', [Validators.required]],
        teams: [this.teamArray],
        phone: ['', [Validators.pattern(MOBILE_PATTERN)]],
        start_date: ['', [Validators.required]],
        photoUrl: [''],
      });
    });
  }

  ngOnInit(): void {
    this.updateBookForm();
    this.selected = 'Roles';
  }

  /* Reactive book form */
  updateBookForm() {
    let MOBILE_PATTERN = /[0-9\+\-\ ]/;
    this.userForm = this.fb.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      role: ['', [Validators.required]],
      teams: [this.teamArray],
      phone: ['', [Validators.pattern(MOBILE_PATTERN)]],
      start_date: ['', [Validators.required]],
      photoUrl: [''],
    });
  }

  /* Add dynamic languages */
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    // Add language
    if ((value || '').trim() && this.teamArray.length < 5) {
      this.teamArray.push({ name: value.trim() });
    }
    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  /* Remove dynamic languages */
  remove(team: Team): void {
    const index = this.teamArray.indexOf(team);
    if (index >= 0) {
      this.teamArray.splice(index, 1);
    }
  }

  /* Start Date */
  formatDate(e) {
    var convertDate = new Date(e.target.value).toISOString().substring(0, 10);
    this.userForm.get('start_date').setValue(convertDate, {
      onlyself: true,
    });
  }

  onRoleChange(val) {
    this.selected = '';
    this.userForm.get('role').setValue(val);
  }

  /* Get errors */
  public handleError = (controlName: string, errorName: string) => {
    return this.userForm.controls[controlName].hasError(errorName);
  };

  /* Update book */
  updateUserForm() {
    console.log(this.userForm.value);
    var id = this.actRoute.snapshot.paramMap.get('id');
    if (window.confirm('Are you sure you want to update?')) {
      this.userApi.UpdateUser(id, this.userForm.value).subscribe((res) => {
        this.ngZone.run(() => this.router.navigateByUrl('/users-list'));
      });
    }
  }
}
