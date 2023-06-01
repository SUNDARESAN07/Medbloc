import { Component, OnInit } from '@angular/core';
import { Manufacturer } from 'src/app/manufacturer/manufacturer';
import { Medicinedata } from 'src/app/medicine/medicinedata';
import { SupplierService } from 'src/app/supplier/supplier.service';

@Component({
  selector: 'app-smedicine-dashboard',
  templateUrl: './smedicine-dashboard.component.html',
  styleUrls: ['./smedicine-dashboard.component.css']
})
export class SmedicineDashboardComponent implements OnInit {
  man: Manufacturer = {
    mid: 0,
    name: "",
    address: "",
    email: "",
    phno: 0,
    proofurl: "",
    cname: '',
    quantity: 0
  };
  file: string = "";
  sflag: boolean = false;
  file1!: File;
  file2!: File;
  qr: boolean = false;
  bno: string = '';

  medicines: Medicinedata[] = [];
  constructor(private mservice: SupplierService) { }

  ngOnInit(): void {

  }
  getQRCode(bno: string): string {
    return "https://api.qrserver.com/v1/create-qr-code/?data=" + bno + "&amp;size=100x100";
  }
  getfile(event: any) {
    this.file1 = event.target.value;
    this.file2 = event.target.files[0];
    this.qr = false;
    this.sflag=false;
    console.log(this.file1);
    console.log(this.file2);
    this.bno = (this.file2.name.split('.').slice(0, -1)).join('.')
  }
  keyup(val: string) {
    this.bno = val;
    this.sflag = false;
    this.qr = false;
  }

  verification(id: number, index: number) {
    var bno: string = id.toString();
    this.mservice.verify("5667", bno).subscribe((data) => {
      this.medicines.splice(index);
      this.medicines.push(data);
      console.log(data);
    });
  }
  getMedicine(): void {
    if (this.bno != "") {

      this.mservice.getMedicinebyId(this.bno).subscribe((data) => {
        if (data.batchno != 0) {
          this.sflag = false;
          this.qr = true;
          this.medicines.push(data);
          console.log(data)
        }
        else {
          this.sflag = true;
          this.qr = false;
        }

      })
    }
  }
  search(mid: string): void {
    this.mservice.getManufacturer(mid).subscribe((data) => {
      this.man = data;
    });
  }

}
