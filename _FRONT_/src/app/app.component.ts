import { Component, NgModule } from '@angular/core';

@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '(misschien) FEESTJE';
  // setrelay(x){
  showIt = false;
  showLine(){
    this.showIt = !this.showIt;
  }
}