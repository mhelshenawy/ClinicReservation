import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './project_comp/user';

@Injectable({
  providedIn: 'root',
})
export class EnrollmentService {
  url:string;
  constructor(private httpClient:HttpClient) {
    this.url="";
  }
}
public getData(){
  let endPoint='';
}
public addData(newUser:User){
  let endPoint='';

}

public updateData(updatedUser:User){
  let endPoint='';

}


public deleteData(){
  let endPoint='';

}