import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class HelloWorldBean{
  constructor(public message:string){}
}
@Injectable({
  providedIn: 'root'
})
export class WelcomedataService {

  constructor(
    private http:HttpClient
  ) { }

  // retriring data from backend service
  executeHelloWorldBeanService() {
    return this.http.get<HelloWorldBean>('http://localhost:8081/hello-world-bean');
    // console.log("Exexute hello world bean service")
  }
  // http://localhost:8081/hello-world/path-variable/Ragini

  executeHelloWorldServiceWithPathVariable(name:any) {
    return this.http.get<HelloWorldBean>(`http://localhost:8081/hello-world/path-variable/${name}`);
    // console.log("Exexute hello world bean service")
  }

}
