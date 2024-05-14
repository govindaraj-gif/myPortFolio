import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.sass']
})
export class SkillsComponent {
  frontEnd = {
    skills:['javaScript' , 'TypeScript' , 'html' , 'scss' , 'Angular' , 'Ngrx' , 'Rxjs' , 'Unit Testing' , 'Angular Material' , 'MicroFrontEnd']
  }

  backEnd = {
    skills:['Mysql' , 'C#' ,'.netCore Web API' ,'Microservices' ,'Kafka']
  }
  
  constructor(){

  }
}
