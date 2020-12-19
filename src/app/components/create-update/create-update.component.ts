import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Employee } from '../../employee';
import { EmployeeService } from '../../shared/employee.service';

@Component({
  selector: 'app-create-update',
  templateUrl: './create-update.component.html',
  styleUrls: ['./create-update.component.css']
})
export class CreateUpdateComponent implements OnInit {
  
  public employee:Employee;
  constructor(private router:Router,private empservice:EmployeeService) { }

  ngOnInit(): void {
    this.employee = this.empservice.getter();
  }
   
  create_update(){
    if(this.employee._id==undefined)
    {
    this.empservice.addemployee(this.employee).subscribe(
      data=>{
            console.log(data);
            this.router.navigate(['/']);
      },
      error=>{
        console.log(error);
      }
    )
  }
  else
  {
    this.empservice.UpdateEmployee(this.employee).subscribe(
      data=>{
            console.log(data);
            this.router.navigate(['/']);
      },
      error=>{
        console.log(error);
      }
    )
  }
  }
  
}
