import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  imagePath = '';
  isScreenLarge = true;
  isOpen = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      if (this.router.url === '/home') {
        this.imagePath = 'assets/logo-active.png';
      } else {
        this.imagePath = 'assets/logo.png';
      }

      this.isOpen = false;
    })

    this.showMenu();
  }

  @HostListener('window:resize') showMenu() {
    if (window.innerWidth <= 800) {
      this.isScreenLarge = false;
    } else {
      this.isScreenLarge = true;
      this.isOpen = false;
    }
  }

  onOpen() {
    this.isOpen = !this.isOpen;
    scrollTo(0, 0);
  }
}