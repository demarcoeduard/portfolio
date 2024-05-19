import { animate, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'scaleX(0)' }),
        animate('.25s ease', style({ transform: 'scaleX(1)' }))
      ]),
      transition(':leave', [
        style({ transform: 'scaleX(1)' }),
        animate('.25s ease', style({ transform: 'scaleX(0)' }))
      ])
    ])
  ]
})
export class HeaderComponent implements OnInit{
  @ViewChild('menu') menu!: ElementRef;
  isOpen = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.isOpen = false;
      this.menu.nativeElement.setAttribute('aria-expanded', false);
    })
  }

  @HostListener('window:resize') updateNavState() {
    if (window.innerWidth >= 1240) {
      this.isOpen = false;
      this.menu.nativeElement.setAttribute('aria-expanded', false);
    }
  }

  onOpen() {
    this.isOpen = !this.isOpen;
    this.menu.nativeElement.setAttribute('aria-expanded', this.isOpen);
  }
}
