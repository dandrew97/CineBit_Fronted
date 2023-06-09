import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserservicesService {
  private apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  login(email: string, password: string): void {
    const loginUrl = `${this.apiUrl}/login`
    const formData = {
      email: email,
      password: password
    }
    this.http.post(loginUrl, formData,{headers:this.getAuthHeaders()})
    .subscribe(
      (response:any) => {
        // this.authToken = response.accessToken;
        localStorage.setItem("token",response.token)
        console.log('Respuesta:', response);
      },
      (error) => {
        if(error instanceof HttpErrorResponse){
          if(error.error instanceof ErrorEvent) {
            console.log('Error:', error.error.message);
          }
        } else {
          console.error(`Codigo de error ${error.status}` + `mensaje: ${error.error}`);
        }
      }
    )
  }
  create(username:string,name:string,lastNames:string,email:string,phone:string,password:string):void{
    const CreateUrl = `${this.apiUrl}/create`
    const formData = {
      username:username,
      name:name,
      lastNames:lastNames,
      email:email,
      phone:phone,
      password:password
     }
     this.http.post(CreateUrl,formData).subscribe(
      (response:any)=>{
        console.log('Resgistro exitoso:', response);
      },
      (error)=>{
        console.log("Error", error)
      }
     )
  }

  getAuthHeaders():HttpHeaders{
    const authToken = localStorage.getItem("token");
    const headers= new HttpHeaders({"Authorization":`Bearer  ${authToken}`});
    return headers;
  } 
 };
