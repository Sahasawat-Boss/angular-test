// File For Import Components

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { Hero } from './components/hero/hero';
import { AboutComponent } from './components/about/about';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, Hero, AboutComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-test');
}
