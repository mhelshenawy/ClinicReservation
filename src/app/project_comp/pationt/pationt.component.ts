import { Component, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
// import { DataService } from 'src/app/data.service';
import { environment } from '../../../environments/environments';

interface Slot {
  _id: string;
  doctor_name: string;
  date: string;
  time: string;
  available: boolean;
  is_updated: boolean;
}
interface doctor {
  _id: string;
  name: string;
}
interface id {
  _id: string;
}
interface slected {
  date: string;
  time: string;
}

@Component({
  selector: 'app-pationt',
  templateUrl: './pationt.component.html',
  styleUrls: ['./pationt.component.css'],
})
export class PationtComponent {
  // receivedObject: Slot;
  constructor(
    private http: HttpClient,
    private router: Router // private dataService: DataService
  ) {
    // this.receivedObject = this.dataService.getSharedObject();
  }
  showSelect = false;
  doc: string[] = [];
  doctor: doctor[] = [];
  doctorSlots: Slot[] = [];
  selectedslots: Slot[] = [];
  apiUrl: string = environment.apiUrl;

  newSlot: Slot = {
    _id: '',
    doctor_name: '',
    date: '',
    time: '',
    available: true,
    is_updated: false,
  };
  updated: Slot = {
    _id: '',
    doctor_name: '',
    date: '',
    time: '',
    available: true,
    is_updated: false,
  };

  // @ViewChild('pationtform', { static: false }) form: NgForm;
  temp: string = ';';
  slected: id = { _id: '' };
  doctorname: string = '';
  ngOnInit(): void {
    this.getdoctor();
    this.display();
  }

  getdoctor() {
    this.http.get(this.apiUrl + '/api/v1/doctor').subscribe((res: any) => {
      this.doctor = res.data;
      this.temp = this.doctor[0].name;
      console.log(this.doctor);
    });
  }
  getDoctorSlots(did: any) {
    this.http
      .post(this.apiUrl + '/api/v1/patient/doctor/slots', did)
      .subscribe((res: any) => {
        this.doctorSlots = res.data;

        console.log(this.doctorSlots);
      });
  }
  sltidd: string = '';
  addSlot(slot: Slot) {
    console.log(slot);
    this.http
      .post(this.apiUrl + '/api/v1/patient/appointment/slot/' + slot._id, slot)
      .subscribe((res: any) => {
        this.http
          .get(this.apiUrl + '/api/v1/patient/appointment')
          .subscribe((res: any) => {
            this.selectedslots = res.data;

            console.log(res.data);
          });
      });
  }
  display() {
    this.http
      .get(this.apiUrl + '/api/v1/patient/appointment')
      .subscribe((res: any) => {
        this.selectedslots = res.data;
      });
  }
  deleteSlot(slot: Slot) {
    const index1 = this.selectedslots.indexOf(slot);
    // if (index1 > -1) {
    //   this.selectedslots.splice(index1, 1);
    //   //keta
    // }
    // if (index2 > -1) {
    //   this.doctorSlots.splice(index2, 1);
    //   //keta
    // }
    if (index1 > -1) {
      this.http
        .delete(this.apiUrl + '/api/v1/patient/appointment/delete/' + slot._id)
        .subscribe((res) => {
          this.display();
        });
    }
  }

  update(slot: Slot) {
    slot.is_updated = true;
    this.sltidd = slot._id;
  }
  subupdate(slot: Slot) {
    slot.is_updated = false;
    this.http
      .put(this.apiUrl + '/api/v1/patient/appointment/' + this.sltidd, slot)
      .subscribe((res: any) => {
        this.display();
      });
  }

  logout() {
    console.log('hello');
    localStorage.setItem('token', 'logout');
    this.router.navigate(['login']);
  }
}
