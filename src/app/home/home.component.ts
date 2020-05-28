import { UtilsService } from '@shared/services/utils.service';
import { Component } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public showForm$ = this.utilsSvc.showAction$;

  constructor(private utilsSvc: UtilsService) { }


  onShowForm(): void {
    this.utilsSvc.showForm(true);
  }
}
