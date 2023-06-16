import { UserservicesService } from "src/app/services/userservices.service";
import { Component } from '@angular/core';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent {

  selectFile!:File;
  userProfile:any;
  editValue:boolean = false;

  editProfile(){
    this.editValue = true;
  }
  
  constructor(private UserService: UserservicesService){}

  ngOnInit (){
    this.getUser();
  }

  getUser(){

    console.log(this.userProfile)
     this.UserService.getUser()
     .subscribe(
      ( response:any) =>{
       console.log("response:",response)
       this.userProfile = response
      },
      (error)=>{
        console.log("Error", error)
      }
    )
  }
  cancelUpdate(){
this.editValue=false;
  }
  onFileSelected(event:any){
    this.selectFile = event.target.files[0];
  }
  
}