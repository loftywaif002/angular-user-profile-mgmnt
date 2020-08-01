# Angular8UserProfileManagmentMaterial

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Install Angular Globally

```javascript
npm install @angular/cli -g
```

## Install Angular Globally

```javascript
npm install @angular/cli -g
```

## Install Angular Globally

```javascript
npm install @angular/cli -g
```

# Angular Project setup

We are going to build a MEAN stack web app using Angular. In our MEAN stack web app, we’ll use the Angular framework to create the frontend of the app. Run the below command to generate a new angular project.

```javascript
ng new angular8-user-profile-managment-material
```

```javascript
? Would you like to add Angular routing? Yes
? Which stylesheet format would you like to use? CSS
```

## Head over to the newly created project folder

```javascript
angular8 - user - profile - managment - materia;
```

#### In next step we’ll create three new components to manage Mean stack Angular CRUD app. Use Angular CLI to generate Angular components:

```javascript
ng g component components/add-user --module app
ng g component components/edit-user --module app
ng g component components/users-list --module app
```

###

We are using --module app parameter because we have 2 module files in the app folder. Now with the –module app parameter We are telling Angular CLI that app.module.ts is our main app module file.

# Setting up Routes to navigate between components

### In app/app-routing.module.ts

###

In this part of the tutorial we’ll create routes in our Mean stack Angular 8/9/10 CRUD app. Routes allow us to navigate between components in Angular app.

```javascript
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddUserComponent } from "./components/add-user/add-user.component";
import { EditUserComponent } from "./components/edit-user/edit-user.component";
import { UsersListComponent } from "./components/users-list/users-list.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "add-user" },
  { path: "add-user", component: AddUserComponent },
  { path: "edit-user/:id", component: EditUserComponent },
  { path: "users-list", component: UsersListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
```

## Setting up Angular Material UI Library in Angular project

We’ll be using Angular Material UI library to build students record management system. I will help you to create a beautiful responsive layout with Angular material ui components. We’ll create Mean stack CRUD app with following Angular material UI components:

- Angular material default theme
- Angular material date-picker
- Angular material icons
- Angular material buttons
- Angular material navbar
- Angular material form
- Angular material data tables
- Angular material chip inputs

#### Run the following command to setup Angular material

```javascript
npm install @angular/material@7.3.2
```

```bash
? Choose a prebuilt theme name, or "custom" for a custom theme:
  Indigo/Pink        [ Preview: https://material.angular.io?theme=indigo-pink ]
  Deep Purple/Amber  [ Preview: https://material.angular.io?theme=deeppurple-amber ]
  Pink/Blue Grey     [ Preview: https://material.angular.io?theme=pink-bluegrey ]
❯ Purple/Green       [ Preview: https://material.angular.io?theme=purple-green ]
  Custom
```

```bash
? Choose a prebuilt theme name, or "custom" for a custom theme: Purple/Green       [ Preview: https://material.angular.io?theme=purple-green ]
? Set up global Angular Material typography styles? Yes
? Set up browser animations for Angular Material? (Y/n) Y
```

We’ve installed Angular material UI library in Mean stack project. Now we’ll create a separate material.module.ts file. In this file we’ll import the various Angular material service so that we can use it and manage centrally in our Angular 8/9/10 CRUD web app.

In next step we’ll create a custom Angular material module, Create src > app > material.module.ts file and import the following Angular material UI components in this file like given below.

```typescript
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import {
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatBadgeModule,
  MatSidenavModule,
  MatListModule,
  MatGridListModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatRadioModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatChipsModule,
  MatTooltipModule,
  MatTableModule,
  MatPaginatorModule,
} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatBadgeModule,
    MatListModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule,
    MatTooltipModule,
    MatTableModule,
    MatPaginatorModule,
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatBadgeModule,
    MatListModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatChipsModule,
    MatTooltipModule,
    MatTableModule,
    MatPaginatorModule,
  ],
  providers: [MatDatepickerModule],
})
export class AngularMaterialModule {}
```

### Go to app.module.ts file and import the AngularMaterialModule.

```javascript
/* Angular material */
import { AngularMaterialModule } from './material.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [...],
  imports: [
    BrowserAnimationsModule,
    AngularMaterialModule,
  ],
  providers: [...],
  bootstrap: [...],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule { }
```

## Setup a basic layout with Angular Material

Go to app.component.html file and include the following code.

```html
<!-- Toolbar -->
<mat-toolbar color="primary" class="header">
  <div>Student Records</div>
  <span class="nav-tool-items">
    <mat-icon (click)="sidenav.toggle()" class="hamburger">menu</mat-icon>
  </span>
</mat-toolbar>

<mat-sidenav-container>
  <!-- Sidenav -->
  <mat-sidenav
    #sidenav
    [mode]="isBiggerScreen() ? 'over' : 'side'"
    [(opened)]="opened"
    [fixedInViewport]="true"
    [fixedTopGap]
  >
    <mat-nav-list>
      <a mat-list-item routerLinkActive="active" routerLink="/add-student">
        <mat-icon>add</mat-icon> Add User
      </a>
      <a mat-list-item routerLinkActive="active" routerLink="/students-list">
        <mat-icon>format_list_bulleted</mat-icon> View Users
      </a>
    </mat-nav-list>
  </mat-sidenav>

  <!-- Main content -->
  <mat-sidenav-content>
    <router-outlet></router-outlet>
  </mat-sidenav-content>
</mat-sidenav-container>
```

### Add the following code in app.component.ts file.

```bash
import { Component, ViewChild, HostListener, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  opened = true;
  @ViewChild('sidenav') sidenav: MatSidenav;

  ngOnInit() {
    console.log(window.innerWidth)
    if (window.innerWidth < 768) {
      this.sidenav.fixedTopGap = 55;
      this.opened = false;
    } else {
      this.sidenav.fixedTopGap = 55;
      this.opened = true;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth < 768) {
      this.sidenav.fixedTopGap = 55;
      this.opened = false;
    } else {
      this.sidenav.fixedTopGap = 55
      this.opened = true;
    }
  }

  isBiggerScreen() {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (width < 768) {
      return true;
    } else {
      return false;
    }
  }
}
```

### To set up the style add the following code in styles.css file.

```css
html,
body {
  height: 100%;
}
body {
  margin: 0;
  font-family: "Roboto", sans-serif;
}
.header {
  justify-content: space-between;
}
.user-profile {
  margin-left: 15px;
}
.mat-sidenav-container {
  height: 100%;
  display: flex;
  flex: 1 1 auto;
}
.mat-nav-list .mat-list-item {
  font-size: 15px;
}
.nav-tool-items {
  display: inline-block;
  margin-right: 13px;
}
.user-profile {
  margin-left: 15px;
  cursor: pointer;
}
.hamburger {
  visibility: hidden !important;
}
.mat-sidenav,
.mat-sidenav-content {
  padding: 15px;
}
.mat-list-item.active {
  background: rgba(0, 0, 0, 0.04);
}
.mat-sidenav-content {
  padding: 25px 40px 0;
}
.mat-sidenav {
  background-color: rgb(116, 124, 120);
  width: 250px;
}
.header {
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  z-index: 1000;
}
mat-sidenav mat-icon {
  margin-right: 12px;
}
.hamburger {
  margin-top: 5px;
  cursor: pointer;
}
.mat-radio-button,
.mat-radio-group {
  margin-right: 25px;
}
.controllers-wrapper > * {
  width: 100%;
  padding: 0;
}
.misc-bottom-padding {
  margin: 8px 0 10px;
}
.misc-bottom-padding mat-label {
  margin-right: 15px;
}
mat-radio-group mat-radio-button {
  margin-left: 5px;
}
.button-wrapper button {
  margin-right: 5px;
}
table.mat-table,
table {
  width: 100%;
}
.inner-wrapper {
  padding: 15px 0 130px;
  width: 100%;
}
.inner-wrapper mat-card {
  display: inline-block;
  margin: 0 6% 0 0;
  vertical-align: top;
  width: 44%;
}
.full-wrapper {
  width: 100%;
}
.multiple-items {
  position: relative;
}
.multiple-items .tooltip-info {
  right: 0;
  top: 7px;
  cursor: pointer;
  color: #a1a7c7;
  position: absolute;
  font-size: 20px;
}
body .push-right {
  margin-right: 10px;
}
.no-data {
  text-align: center;
  padding-top: 30px;
  color: #6c75a9;
}
.button-wrapper {
  margin: 20px 0 0 0;
}
@media (max-width: 1024px) {
  .inner-wrapper mat-card {
    width: 100%;
  }
  .mat-sidenav-content {
    padding: 20px 20px 0;
  }
  .misc-bottom-padding mat-label {
    display: block;
    padding-bottom: 10px;
  }
  .mat-sidenav {
    width: 230px;
  }
  .mat-nav-list .mat-list-item {
    font-size: 14px;
  }
}
@media (max-width: 767px) {
  .nav-tool-items {
    margin-right: 0;
  }
  .hamburger {
    visibility: visible !important;
  }
}
```

## Build Mean Stack Backend with MongoDB, Node JS and Express JS

In this part of the tutorial, we are going to build a robust Mean stack backend using mongoDB, node js, and express js.

Following topics will be covered in this part of the tutorial:

- Create a separate project for Mean stack backend.
- Install required dependencies using NPM: body-parser, cors, express js, mongoose, and nodemon.
- Set up MongoDB Database connection in Mean stack app to access MongoDB database using MongoDB Shell.
- Define a data model with mongoose JS in Mean stack project.
- Create RESTful APIs with Express js Routes in Mean Stack Project.
- Configure Angular 8/9 Mean Stack backend

## Create a separate project for Mean stack backend.

### In order to set up a separate Mean stack backend create a folder by the name of backend outside the root directory

```bash
cd ../ && mkdir backend && cd backend
```

You’ve created the backend folder and entered into the project.

Next thing is to create a separate package.json for your Mean stack backend.

```bash
npm init
```

```bash
starting point (index.js): server.js
```

#### Install required dependencies using NPM: body-parser, cors, express js, mongoose, and nodemon.

After that install the required dependencies for your Mean stack app.

```bash
npm install --save express mongoose cors body-parser
```

Then install nodemon package it will save us from restarting the server every-time we make the changes in our backend code.

```
npm install nodemon --save-dev
```

Your package.json file for Mean stack backend will look something like this.

```javascript
{
  "name": "angular8-user-profile-managment",
  "version": "1.0.0",
  "description": "Angular Backend",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "ANgular"
  ],
  "author": "Dipro Chowdhury",
  "license": "MIT",
  "dependencies": {
    "body-parser": "^1.19.0",
    "cors": "^2.8.5",
    "express": "^4.17.1",
    "mongoose": "^5.9.26"
  }
}

```

# Set up MongoDB Database connection in Mean stack app to access MongoDB database using MongoDB Shell.

Please use this link to setup database locally
[link to MongoDB website!](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)

Inside the backend > database > db.js file paste the following code. Here `teamManagementMean` is your mongoDB database name.

```javascript
module.exports = {
  db: "mongodb://localhost:27017/teamManagementMean",
};
```

# Define User data model with mongoose JS in Mean stack app.

We’ll create a model folder, inside the model folder we’ll create a User Schema for users collection in MongoDB. Paste the below code in the model > User.js file.

```
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Define collection and schema
let User = new Schema(
  {
    first_name: {
      type: String,
    },
    last_name: {
      type: String,
    },
    email: {
      type: String,
    },
    role: {
      type: String,
    },
    teams: {
      type: Array,
    },
    phone: {
      type: Number,
    },
    start_date: {
      type: Date,
    },
    photoUrl: {
      type: String,
    },
  },
  {
    collection: 'users',
  }
)

module.exports = mongoose.model('User', User)

```

# Create RESTful APIs with Express js Routes in Mean Stack Project.

In this Angular 8/9/10 Mean stack tutorial we are going to create RESTful APIs using Express js and Node js. I will create a routes folder inside the backend folder and create a user.routes.js file.

```
mkdir routes && cd routes && touch user.route.js
```

We’ve created RESTful APIs using Express js and Student Model, now Go to user.route.js file and add the following code.

```
const express = require('express')
const userRoutes = express.Router()

// User model
let User = require('../model/User')

// Add User
userRoutes.route('/add-user').post((req, res, next) => {
  User.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get all users
userRoutes.route('/').get((req, res) => {
  User.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single user
userRoutes.route('/read-user/:id').get((req, res) => {
  User.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update user
userRoutes.route('/update-user/:id').put((req, res, next) => {
  User.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
        console.log('User successfully updated!')
      }
    }
  )
})

// Delete user
userRoutes.route('/delete-user/:id').delete((req, res, next) => {
  User.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.status(200).json({
        msg: data,
      })
    }
  })
})

module.exports = userRoutes

```

Configure Mean Stack backend
Now we’ll create app.js file in backend folder’s root. Run the below command to generate backend > server.js file.

```
touch server.js
```

# Mange Backend settings in Mean stack Project.

### Now we are going to create app.js file this file will hold the core logic of our Mean stack project’s backend logic. ### This file will manage the following things.

- Setup port using express
- Setup 404 error using express.js
- Making mongoDB database connection
- Serving static files using express js in Mean stack app
- Handling errors using Express js in Angular Mean stack project

```
let express = require('express'),
  path = require('path'),
  mongoose = require('mongoose'),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  dataBaseConfig = require('./database/db')

// Connecting mongoDB
mongoose.Promise = global.Promise
mongoose
  .connect(dataBaseConfig.db, {
    useNewUrlParser: true,
    useFindAndModify: false,
  })
  .then(
    () => {
      console.log('Database connected successfully ')
    },
    (error) => {
      console.log('Could not connected to database : ' + error)
    }
  )

// Set up express js port
const userRoute = require('./routes/user.route')

const app = express()
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
)
app.use(cors())

// Setting up static directory
app.use(
  express.static(
    path.join(__dirname, 'dist/angular8-meanstack-angular-material')
  )
)

// RESTful API root
app.use('/api', userRoute)

// PORT
const port = process.env.PORT || 8000

app.listen(port, () => {
  console.log('Connected to port ' + port)
})

// Find 404 and hand over to error handler
app.use((req, res, next) => {
  next(createError(404))
})

// Index Route
app.get('/', (req, res) => {
  res.send('invaild endpoint')
})

app.get('*', (req, res) => {
  res.sendFile(
    path.join(__dirname, 'dist/angular8-meanstack-angular-material/index.html')
  )
})

// error handler
app.use(function (err, req, res, next) {
  console.error(err.message)
  if (!err.statusCode) err.statusCode = 500
  res.status(err.statusCode).send(err.message)
})

```

# Build Angular 8/9/10 Service to Consume REST APIs

### To create Mean stack student records management system app. We need to create a service file where we’ll consume REST APIs to manage the student data. This service file will manage the Create, Read, Update and Delete operations.

### Configure Angular HttpClientModule:

### Import HttpClientModule service in app.module.ts file.

```
/* Angular 8 http service */
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    HttpClientModule
   ]
})
```

## Create & configure User class:

#### Enter the below command to create app/shared > user.ts file.

```
export class User {
  _id: String;
  first_name: String;
  last_name: String;
  email: String;
  role: String;
  teams: Array<string>;
  phone: Number;
  start_date: Date;
  photoUrl: String;
}
```

# Create Angular 8/9/10 service to Consume REST APIs

#### Enter the following command to create Angular service to manage CRUD operations in MEAN Stack web app.

```
ng g s shared/api
```

#### In the given below code we’ve consumed REST APIs using Angular service. Add the following code in your shared > api.service.ts file.

```
import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  endpoint: string = 'http://localhost:8000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {}

  // Add user
  AddUser(data: User): Observable<any> {
    let API_URL = `${this.endpoint}/add-user`;
    return this.http.post(API_URL, data).pipe(catchError(this.errorMgmt));
  }

  // Get all users
  GetUsers() {
    return this.http.get(`${this.endpoint}`);
  }

  // Get user
  GetUser(id): Observable<any> {
    let API_URL = `${this.endpoint}/read-user/${id}`;
    return this.http.get(API_URL, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {};
      }),
      catchError(this.errorMgmt)
    );
  }

  // Update user
  UpdateUser(id, data): Observable<any> {
    let API_URL = `${this.endpoint}/update-user/${id}`;
    return this.http
      .put(API_URL, data, { headers: this.headers })
      .pipe(catchError(this.errorMgmt));
  }

  // Delete user
  DeleteUser(id): Observable<any> {
    var API_URL = `${this.endpoint}/delete-user/${id}`;
    return this.http.delete(API_URL).pipe(catchError(this.errorMgmt));
  }

  // Error handling
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}

```

## Go to app.module.ts file and import this API service like given below.

```
/* Angular 8 CRUD services */
import { ApiService } from './shared/api.service';

@NgModule({
  providers: [ApiService]
})
```

## Add User using MEAN Stack REST APIs with Angular Material

### In this part of the tutorial we will learn to add user in the MongoDB database. We’ll be using Angular Reactive form to add user in the database.

### Import ReactiveFormsModule API in App Module File

#### In order to work with Reactive Forms we must import the ReactiveFormsModule API and FormsModule API in app.module.ts file.

```
/* Reactive form services in Angular 8 */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
})

export class AppModule { }
```

### Go to add-user.component.ts file and include the given below code.

```
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

```

### Then go to add-user.component.html file and add the following code.

```
<!-- Title group  -->
<div class="title-group">
  <h1 class="mat-h1">Add Student</h1>
  <mat-divider fxFlex="1 0"></mat-divider>
</div>
<!-- Form -->
<div class="inner-wrapper">
  <form
    [formGroup]="userForm"
    (ngSubmit)="submitUserForm()"
    #resetUserForm="ngForm"
    novalidate
  >
    <!-- Left block -->
    <mat-card>
      <div class="controllers-wrapper">
        <!-- First Name -->
        <mat-form-field class="example-full-width">
          <input
            matInput
            placeholder="First name"
            formControlName="first_name"
          />
          <mat-error *ngIf="handleError('first_name', 'required')">
            You must provide a<strong>First name</strong>
          </mat-error>
        </mat-form-field>
        <!-- Last Name -->
        <mat-form-field class="example-full-width">
          <input matInput placeholder="Last name" formControlName="last_name" />
          <mat-error *ngIf="handleError('last_name', 'required')">
            You must provide a<strong>Last name</strong>
          </mat-error>
        </mat-form-field>

        <!-- Email -->
        <mat-form-field class="example-full-width">
          <input matInput placeholder="email" formControlName="email" />
          <mat-error *ngIf="handleError('email', 'required')">
            You must provide a<strong>student email</strong>
          </mat-error>
        </mat-form-field>
        <!-- Role -->

        <mat-form-field>
          <mat-label>{{ selected }}</mat-label>

          <mat-select #matmat formControlName="role">
            <div (click)="matmat.close()">
              <mat-option
                [value]="role"
                *ngFor="let role of RolesArray"
                (click)="onRoleChange(role)"
                >{{ role }}
              </mat-option>
            </div>
          </mat-select>

          <mat-error *ngIf="handleError('role', 'required')">
            Role is required
          </mat-error>
        </mat-form-field>
      </div>
    </mat-card>
    <!-- Right block -->
    <mat-card>
      <div class="controllers-wrapper">
        <!-- Add Teams -->
        <mat-form-field class="multiple-items">
          <mat-chip-list #chipList>
            <mat-chip
              *ngFor="let teamArray of teamArray"
              [selectable]="selectable"
              [removable]="removable"
              (removed)="remove(teamArray)"
            >
              {{ teamArray.name }}
              <mat-icon matChipRemove *ngIf="removable">cancel</mat-icon>
            </mat-chip>
            <input
              placeholder="Add team"
              [matChipInputFor]="chipList"
              [matChipInputSeparatorKeyCodes]="separatorKeysCodes"
              [matChipInputAddOnBlur]="addOnBlur"
              (matChipInputTokenEnd)="add($event)"
            />
          </mat-chip-list>
          <i
            class="material-icons tooltip-info"
            matTooltip="Enter team name and press enter to add team"
          >
            info
          </i>
        </mat-form-field>
        <!--Phone-->
        <mat-form-field class="example-full-width">
          <input matInput placeholder="phone" formControlName="phone" />
          <mat-error *ngIf="handleError('phone', 'required')">
            You must provide a<strong>phone number</strong>
          </mat-error>
        </mat-form-field>
        <!-- Start Date -->
        <mat-form-field>
          <input
            matInput
            readonly
            [matDatepicker]="picker"
            placeholder="Start Date"
            formControlName="start_date"
            (dateChange)="formatDate($event)"
          />
          <mat-datepicker-toggle
            matSuffix
            [for]="picker"
          ></mat-datepicker-toggle>
          <mat-datepicker #picker></mat-datepicker>
          <mat-error *ngIf="handleError('start_date', 'required')">
            Start Date is required
          </mat-error>
        </mat-form-field>
        <!-- PhotoUrl -->
        <mat-form-field class="example-full-width">
          <input matInput placeholder="Photo URL" formControlName="photoUrl" />
          <mat-error *ngIf="handleError('photoUrl', 'required')">
            You must provide a<strong>PhotoUrl</strong>
          </mat-error>
        </mat-form-field>
      </div>
    </mat-card>
    <!-- Submit & Reset -->
    <mat-card>
      <div class="full-wrapper button-wrapper">
        <div class="button-wrapper">
          <button mat-flat-button color="warn">Submit</button>
        </div>
      </div>
    </mat-card>
  </form>
</div>

```

## License

[MIT](https://choosealicense.com/licenses/mit/)
