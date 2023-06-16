import { Component } from '@angular/core';
import { UserservicesService } from 'src/app/services/userservices.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {


  username!:string;
  name!:string;
  lastNames!:string;
  email!:string;
  phone!:string;
  password!:string;
  

  constructor( private userService:UserservicesService){}
  
  
  create():void{

    this.userService.create(this.username,this.name,this.lastNames,this.email,this.phone,this.password);

    console.log("Usuario creado con Exito")
  }
}