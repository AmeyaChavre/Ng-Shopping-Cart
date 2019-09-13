import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ShopNCook';

  loadedFeature = 'recipe'; // by default recipe component will be rendered

  onNavigate(feature: string){
  	this.loadedFeature = feature;
  }
}
