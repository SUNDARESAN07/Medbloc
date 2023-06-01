import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ManufacturerService } from 'src/app/manufacturer/manufacturer.service';
import { Medicinedata } from 'src/app/medicine/medicinedata';

@Component({
  selector: 'app-medicine-dashboard',
  templateUrl: './medicine-dashboard.component.html',
  styleUrls: ['./medicine-dashboard.component.css']
})
export class MedicineDashboardComponent implements OnInit {
  medicines:Medicinedata[]=[
    // {
    //   cname:"abc",
    //   medname:"a",
    //   quantity:"123",
    //   bname:"101",
    //   mfgdate:"12/1/1000",
    //   expdate:"17/2/1001"
    // },
    // {
    //   cname:"cde",
    //   medname:"b",
    //   quantity:"456",
    //   bname:"102",
    //   mfgdate:"19/1/1000",
    //   expdate:"26/2/1001"
    // },
    // {
    //   cname:"fgh",
    //   medname:"c",
    //   quantity:"789",
    //   bname:"103",
    //   mfgdate:"8/1/1000",
    //   expdate:"30/2/1001"
    // },

  ];
  constructor(private mservice:ManufacturerService,private http:HttpClient) { }

  ngOnInit(): void {
   this.mservice.getMedicine().subscribe((data)=>{
     this.medicines=data;
    });
  }

  getQRCode(bno:number):string{
    return "https://api.qrserver.com/v1/create-qr-code/?data="+bno+"&amp;size=100x100";
  }
  downloadQR(img:any) {
    const imgUrl = img.src;
    const imgName = img.name;
    this.http.get(imgUrl, {responseType: 'blob' as 'json'})
      .subscribe((res: any) => {
        const file = new Blob([res], {type: res.type});
        const blob = window.URL.createObjectURL(file);
        const link = document.createElement('a');
        link.href = blob;
        link.download = imgName;

        // Version link.click() to work at firefox
        link.dispatchEvent(new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
          view: window
        }));

        setTimeout(() => { // firefox
          window.URL.revokeObjectURL(blob);
          link.remove();
        }, 100);
      });
         // IE
        // if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        //   window.navigator.msSaveOrOpenBlob(file);
        //   return;
        // }
  }
}
