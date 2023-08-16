import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomedataService } from 'src/services/data/welcomedata.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message = 'Some Welcome Message'
  welcomeMessageFromService:any 
  name = ''
  // ActiveRoute

  constructor(private route: ActivatedRoute,
    private service: WelcomedataService
  ) {

  }
  ngOnInit() {
    console.log(this.message)
    // console.log(this.route.snapshot.params['name'])
    this.name = this.route.snapshot.params['name'];
  }

  getWelcomeMessage() {
    console.log(this.service.executeHelloWorldBeanService());
    
    this.service.executeHelloWorldBeanService().subscribe(
      response=>this.handleSuccessfulResponse(response),
      error=> this.handleErrorResponse(error)
    );
  //  console.log('Last line of getWelcomeMessage')
    // console.log("Get welcome message")
  }

  getWelcomeMessageWithParameter() {
    console.log(this.service.executeHelloWorldBeanService());
    
    this.service.executeHelloWorldServiceWithPathVariable(this.name).subscribe(
      response=>this.handleSuccessfulResponse(response),
      error=> this.handleErrorResponse(error)
    );
  //  console.log('Last line of getWelcomeMessage')
    // console.log("Get welcome message")
  }

  handleSuccessfulResponse(response: any){
    this.welcomeMessageFromService=response.message
    
    // console.log(response);
    // console.log(response.message)
  }
  handleErrorResponse(error:any){
    // console.log(error);
    // console.log(error.error);
    // console.log(error.error.message);
    this.welcomeMessageFromService=error.error.message;
  }
}
