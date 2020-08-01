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
ng add @angular/material
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

## License

[MIT](https://choosealicense.com/licenses/mit/)
