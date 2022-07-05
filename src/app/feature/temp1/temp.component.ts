import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css']
})
export class TempComponent implements OnInit {
  navBorderActive: boolean = false;
  landingMenu: any = {
    home: true,
    about: false,
    project: false,
    contact: false
  }
  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(this.router.url);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.navBorderActive = (window.scrollY > 50) ? true : false;
    if (window.scrollY >= 1500) {
      this.landingMenu = { home: false, about: false, project: true, contact: false };
    } else if (window.scrollY >= 800) {
      this.landingMenu = { home: false, about: true, project: false, contact: false };
    } else if (window.scrollY >= 0) {
      this.landingMenu = { home: true, about: false, project: false, contact: false };
    } else {
      this.landingMenu = { home: false, about: false, project: false, contact: true };
    }
  }

  homePage(url: string) {
    this.router.navigateByUrl('');
    if (url === 'home') {
      window.scrollTo(0, 0);
    } else if (url === 'about') {
      window.scrollTo(0, 800);
    } else if (url === 'project') {
      window.scrollTo(0, 2000);
    }
  }

  contactPage() {
    this.router.navigateByUrl('contact');
  }
}
