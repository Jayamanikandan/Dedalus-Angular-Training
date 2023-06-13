import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-task2';

  features=[
    {
      title:"About",
      description:"At Dedalus, every day we do something special by helping caregivers and health professionals deliver better care to their served communities. See their stories, understand how we helped them achieve valuable results for professionals, patients, communities."
    },
    {
      title:"Company",
      description:"You can help to improve the quality of the care delivered to patients, helping doctors, nurses and all healthcare staff to work better."
    },
    {
      title:"Services",
      description:"The new Dedalus #Ways approach allows us to bring value to all the actors involved in the Healthcare ecosystem, creating a unique flow of information that ensures the best outcomes in each phase."
    }
  ];
}
