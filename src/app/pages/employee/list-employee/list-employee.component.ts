import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgxScannerQrcodeComponent, ScannerQRCodeConfig, ScannerQRCodeResult } from 'ngx-scanner-qrcode';
import { EmployeeService } from 'src/app/service/employee/employee.service';
declare var $: any;

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.scss']
})
export class ListEmployeeComponent implements OnInit{

  employeeData:any ;
  detailEmployeeData: any;

  // Scanner
  @ViewChild('action', { static: true }) action!: NgxScannerQrcodeComponent;

  public config: ScannerQRCodeConfig = {
    constraints: {
      video: {
        width: window.innerWidth
      },
    },
    isBeep: false,
  };

  output: any;
  constructor(private employeService: EmployeeService){}

  
  ngOnInit(): void { 
    this.getAllEmploye();
  }
  
  getAllEmploye(){
    this.employeService.getAllEmployee().subscribe(res => {
      console.log(res);
      this.employeeData = res.data;
    })
    console.log(this.employeeData);
  }

  getEmployee(id: any){
    this.employeService.getEmployee(id).subscribe(res => {
      this.detailEmployeeData = [res.data];
    })
    console.log(this.detailEmployeeData);
  }

  openModal() {
    console.log("test");
    
    $(`#EditModal`).modal('show');
  }

  //Scanner
  public onEvent(e: ScannerQRCodeResult[], action?: any): void {
    // e && action && action.pause();
    console.log(e[0].value);
    this.output = e[0].value;
    this.action.stop();
    this.closeModal();
    this.openDetail();
  }

  openScanner(){
    $(`#scanner`).modal('show');
    this.action.start();
  }

  openDetail(){
    $(`#detailModal`).modal('show');
    this.getEmployee(this.output);
  }

  closeModal(){
    $(`#scanner`).modal('hide');
    $(`#detailModal`).modal('hide');
  }
}
