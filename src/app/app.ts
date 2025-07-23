// File For Import Components

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { Hero } from './components/hero/hero';
import { AboutComponent } from './components/about/about';


//Material Imports
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // 👈 สำคัญมากสำหรับ Angular Material
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, Hero, AboutComponent, MatSlideToggleModule, MatCardModule ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-test');
}
