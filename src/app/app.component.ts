import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SharedService } from 'shared/src';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myPortFolio';

  form!:FormGroup;

  constructor(sharedService:SharedService){
    sharedService.add();
  }


}
