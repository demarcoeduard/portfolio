import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  imagePath = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      if (this.router.url === '/home') {
        this.imagePath = 'assets/logo-active.png';
      } else {
        this.imagePath = 'assets/logo.png';
      }
    })
  }

}
