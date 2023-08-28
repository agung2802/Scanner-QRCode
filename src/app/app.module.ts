import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEmployeeComponent } from './pages/employee/list-employee/list-employee.component';
import { CheckInEmployeeComponent } from './pages/employee/check-in-employee/check-in-employee.component';
import { DetailEmployeeComponent } from './pages/employee/detail-employee/detail-employee.component';
import { HeaderComponent } from './pages/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { ScanQrComponent } from './pages/scan-qr/scan-qr.component';
import { NgxScannerQrcodeModule } from "ngx-scanner-qrcode";

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeeComponent,
    CheckInEmployeeComponent,
    DetailEmployeeComponent,
    HeaderComponent,
    ScanQrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxScannerQrcodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
