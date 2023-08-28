import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEmployeeComponent } from "./pages/employee/list-employee/list-employee.component";
import { CheckInEmployeeComponent } from "./pages/employee/check-in-employee/check-in-employee.component";
import { ScanQrComponent } from "./pages/scan-qr/scan-qr.component";
import { ChatGptComponent } from "./pages/chat-gpt/chat-gpt.component";
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '',
    component: ListEmployeeComponent,
    data: {title: 'Home'},
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
