import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { DashboardComponent } from "./dashboard/dashboard.component";
import { StudentsTableComponent } from "./students-table/students-table.component"
import { AuthGuard } from "./shared/auth.guard";

export const routes: Routes = [
    {
        path: "",
        redirectTo: "login",
        pathMatch: "full"
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "dashboard",
        component: DashboardComponent,
        canActivate: [AuthGuard]
    },
    {
        path: "student-table",
        component: StudentsTableComponent,
        canActivate: [AuthGuard]
    }
];
