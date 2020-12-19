import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Employee } from '../../employee';
import { EmployeeService } from '../../shared/employee.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router,private empservice:EmployeeService) { }

  ngOnInit(): void {
  }
   
   newemployee(event:any){
    event.preventDefault();
     this.empservice.setter(new Employee());
     this.router.navigate(['/createUpdate']);

   }


}
