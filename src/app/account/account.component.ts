import { Component, OnInit } from '@angular/core';
import { Account } from '../account';
import { acc } from '../mock-accounts';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  title = 'Here are your accounts:';
  a = acc;
  constructor() {}

  ngOnInit(): void {}
}
