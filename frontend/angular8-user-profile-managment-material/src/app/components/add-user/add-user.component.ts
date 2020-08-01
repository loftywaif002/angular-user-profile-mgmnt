import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material';
import { ApiService } from './../../shared/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export interface Team {
  name: string;
}

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  visible = true;
  selectable = true;
  selected: string;

  removable = true;
  addOnBlur = true;
  @ViewChild('chipList') chipList;
  @ViewChild('resetUserForm') myNgForm;
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
    private userApi: ApiService
  ) {}

  ngOnInit(): void {
    this.submitBookForm();
    this.selected = 'Roles';
  }

  /* Reactive book form */
  submitBookForm() {
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
  remove(subject: Team): void {
    const index = this.teamArray.indexOf(subject);
    if (index >= 0) {
      this.teamArray.splice(index, 1);
    }
  }

  /* Date */
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

  /* Submit book */
  submitUserForm() {
    if (this.userForm.valid) {
      this.userApi.AddUser(this.userForm.value).subscribe((res) => {
        this.ngZone.run(() => this.router.navigateByUrl('/users-list'));
      });
    }
  }
}
