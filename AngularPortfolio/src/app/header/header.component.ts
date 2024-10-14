import { Component } from '@angular/core';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [BsDatepickerModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {}
