import { Component } from '@angular/core';
import { Request } from '../Models/request';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  constructor() {}

  displayAll:boolean=true;
  displayPlanned:boolean=false;
  displayDevam:boolean=false;
  displayDegerlendirme=false;

  description:string="";


requestList:Request[]=[
  {no:'UR0034001',department: 'Üretim', description:'Yeni Kalite Yazlımı için Ön değerlendirme toplantısı',requestDate: '12.01.2024',status:'Değerlendirmede'},
  {no:'ET0021001',department:'E-ticaret',description:'Yeni Müşteri formu talebi',requestDate:'04.02.2024',status:'Planlandı'},
  { no:'ET0022001',department:'E-ticaret',description:' Yeni site giydirmeleri,banner düzenlemeleri',requestDate:'20.02.2024',status:'Planlandı'},
  {no:'SA0037001',department:'Satış ve Pazarlama',description:'Müşterilere tanıtım gönderme linkleri için Linkedin Bot',requestDate:'15.02.2024',status:'Devam Ediyor'}
]


addRequest(noForm:string,departmentForm:string,descriptionForm:string,requestDateForm:string,statusForm:string) 
{
  if(noForm!=""&&departmentForm!=""&&descriptionForm!=""&&requestDateForm!=""&&statusForm!="")
  {
    this.requestList.push({no:noForm,department:departmentForm,description:descriptionForm,requestDate:requestDateForm,status:statusForm});
    this.description="";
  }

 else 
 alert("Tüm alanları doldurunuz !!")
this.description="";
}

  getItems() {
    console.log("Şuanda Girdi");
    let liste = this.requestList;
    if (this.displayAll) {
      liste = this.requestList;
    }

    if (this.displayPlanned) {

      liste = this.requestList.filter(a => a.status === "Planlandı");

    }

    if (this.displayDevam) {
      liste = this.requestList.filter(a => a.status === "Devam Ediyor");
    }
    if (this.displayDegerlendirme) {
      liste = this.requestList.filter(a => a.status === "Değerlendirmede");
    }
    return liste;

  }

}
