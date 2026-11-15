import { Component } from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-mi-piscina',
  imports: [NavComponent, HeaderComponent],
  standalone: true,
  templateUrl: './mi-piscina.component.html',
  styleUrl: './mi-piscina.component.scss',
})
export class MiPiscinaComponent {}
