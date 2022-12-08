import { Component, Input, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  @Input() url: string = ''

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.url = this.router.url
  }

}
