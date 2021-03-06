//our root app component
import { Component, NgModule, OnInit} from '@angular/core'
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
 showComponent: boolean = true;
 constructor(private router: Router) {}

 ngOnInit() {
  // listenging to routing navigation event
  this.router.events.subscribe(event => this.modifyHeader(event));  
 }

 modifyHeader(location) {      
   var str = location.url;
   
   if (str === '/') {
      document.body.classList.add('login'); 
   } else {
      var newstr = str.replace('/', "");
      document.body.classList.add(newstr);
   }
   
   if (location.url=== "/login" || location.url === '/' )
   {
       this.showComponent = false;
   } else {
       this.showComponent = true;
   }
}  
}
