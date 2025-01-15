import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-about',
  imports: [MatCardModule, MatIcon],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  standalone: true,
})
export class AboutComponent {

}
