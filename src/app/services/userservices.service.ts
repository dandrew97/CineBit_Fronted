import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserservicesService {

  private userEmail!: string;
  private apiUrl = "http://localhost:3000/users";
  private userData!:string;

  constructor(private http: HttpClient, private router:Router) { }

  login(email: string, password: string): void {
    const loginUrl = `${this.apiUrl}/login`;
    const formData = {
      email: email,
      password: password
    };
    this.http.post(loginUrl, formData, { headers: this.getAuthHeaders() })
      .subscribe(
        (response: any) => {
          localStorage.setItem("token", response.token);
          this.userEmail=formData.email;
          console.log("este es el email login", this.userEmail);
          this.router.navigate(['/user/profile']);
        },
        (error) => {
          if(error instanceof HttpErrorResponse){
            if(error.error instanceof ErrorEvent){
              console.log("Error: ", error.error.message);
            }
          else {
            console.error(`codigo de error ${error.status}` + `mensaje: ${error.error}`)
          }
          }
        }
      )
    }

  create(username: string, name: string, lastNames: string, email: string, phone: string, password: string): void {
    const createUrl = `${this.apiUrl}/create`;
    const formData = {
      username: username,
      name: name,
      lastNames: lastNames,
      email: email,
      phone: phone,
      password: password
    };
    this.http.post(createUrl, formData).subscribe(
      (response: any) => {
        console.log('Registro exitoso:', response);
        this.router.navigate(['/user/login']);
      },
      (error) => {
        console.log("Error:", error);
      }
    );
  }

  getUser() {
    const getUrl = `${this.apiUrl}/${this.userEmail}`;
    console.log(getUrl);
    return this.http.get(getUrl);
  }

  updateUser(body:any) {
    const updateUrl = `${this.apiUrl}/update/${body._id}`
    const formData = body

    console.log("Usuario actualizado con éxito", formData, updateUrl);

    this.http.put(updateUrl,formData)
    .subscribe(
      (response:any) => {
        console.log("Usuario actualizado con éxito. ", response);
        this.router.navigate(['/user/profile']);
      },
      (error) => {
        console.log("Error: ", error);
      }
    )
  }

  getAuthHeaders(): HttpHeaders {
    const authToken = localStorage.getItem("token");
    const headers = new HttpHeaders({ "Authorization": `Bearer ${authToken}` });
    return headers;
  }
}
