import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Employee } from '../employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

   private employee:Employee;
   private baseurl:string = "http://localhost:4444/employees";
   private headers = new HttpHeaders().set('Content-Type','application/json');
  constructor(private http : HttpClient) { }

  addemployee(employee:Employee)
  {
    return this.http.post(this.baseurl+'/new',employee,{headers:this.headers});
  }
 
  getallemployee()
  {
    return this.http.get(this.baseurl+'/all',{headers:this.headers});
  }
 
  UpdateEmployee(employee:Employee)
  {
    return this.http.put(this.baseurl+'/edit',employee,{headers:this.headers});
  }

  DeleteEmployee(id:String)
  {
    return this.http.delete(this.baseurl+'/delete/'+id,{headers:this.headers,responseType:'text' as 'json'});
  }
   
  setter(emp:Employee)
  {
    this.employee=emp;
  }

  getter()
  {
    return this.employee;
  }

}
