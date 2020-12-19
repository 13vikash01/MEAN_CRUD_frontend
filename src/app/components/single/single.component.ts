import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../shared/employee.service';
import { Employee } from '../../employee';
import { Location } from '@angular/common';
import { Router} from '@angular/router';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {

  public employee:Employee;

  constructor(private empservice:EmployeeService,private location: Location,private router:Router) { }


  ngOnInit(): void {
    this.employee = this.empservice.getter();
  }
    
  
  update(employee){
    this.empservice.setter(employee);
    console.log(employee);
    this.router.navigate(['createUpdate']);
}
 
 delete(employee){
   console.log(employee._id);
   this.empservice.DeleteEmployee(employee._id).subscribe(
    data=>{
      this.router.navigate(['/']);   
      },
        error=>{
       console.log(error); 
      }
   )
 }

  
}
