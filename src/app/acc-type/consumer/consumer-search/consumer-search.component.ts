import { Component, OnInit } from '@angular/core';
import { ConsumerService } from 'src/app/consumer/consumer.service';
import { ManufacturerService } from 'src/app/manufacturer/manufacturer.service';
import { MedicineService } from 'src/app/medicine/medicine.service';
import { Medicinedata } from 'src/app/medicine/medicinedata';
import { Supplier } from 'src/app/supplier/supplier';

@Component({
  selector: 'app-consumer-search',
  templateUrl: './consumer-search.component.html',
  styleUrls: ['./consumer-search.component.css']
})
export class ConsumerSearchComponent implements OnInit {
  medicines:Medicinedata[]=[];
  file: string = "";
  sflag: boolean = false;
  file1!: File;
  file2!: File;
  qr: boolean = false;
  bno: string = '';
  constructor(private mservice: ConsumerService) { }

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
    // console.log(this.file1);
    // console.log(this.file2);
    this.bno = (this.file2.name.split('.').slice(0, -1)).join('.')
  }
  keyup(val: string) {
    this.bno = val;
    this.sflag = false;
    this.qr = false;
  }
  clear(){
    this.medicines=[];
  }

  getMedicine(): void {
    if (this.bno != "") {

      this.mservice.getMedicinebyId(this.bno).subscribe((data) => {
        if (data.batchno != 0) {
          this.sflag = false;
          this.qr = true;
          this.medicines.push(data);
        }
        else {
          this.sflag = true;
          this.qr = false;
        }

      })
    }
  }
}
