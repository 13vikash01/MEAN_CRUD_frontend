import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../shared/employee.service';
import { Employee } from '../../employee';
import { Location } from '@angular/common';
import { Router} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
    public employees : any;
    Total : number;
    page: number = 1;

  constructor(private empservice:EmployeeService,private location: Location,private router:Router) { }

  ngOnInit(): void {
     this.showemployees();
  }
   
  public go_back(){
    this.location.back();
  } 


  showemployees(){
    this.empservice.getallemployee().subscribe(
      data=>{
           console.log(data);
           this.employees = data;
           this.Total = Object.keys(this.employees).length
    },
    error=>{
       console.log(error); 
    }
    )
  }
   
  View_employee(employee){
    this.empservice.setter(employee);
    //console.log(employee);
    this.router.navigate(['show']);
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
                location.reload();   
        },
          error=>{
         console.log(error); 
        }
     )
   }


}
