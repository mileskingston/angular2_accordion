import { Component, OnInit } from '@angular/core';

import { AccService } from '../accordion.service';
import { Faq } from '../model';

@Component({
  selector: 'accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccComponent implements OnInit {

	faqs: Faq[];
	selected: boolean[];

  constructor(private accService: AccService) {}

  ngOnInit() {
  	this.getItems();
  }

  getItems() {
  	this.accService.getItems()
  		.subscribe(faqs => {
  			this.faqs = faqs;
  			this.selected = [];
		  	for(var i = 0; i < this.faqs.length; i++) {
		  		this.selected.push(false);
		  	}
  		});
  }

  selectFaq(index) {
  	for(var i: any = 0; i < this.faqs.length; i++) {
  		if(this.selected[i] != undefined) {
  			this.selected[i] = false;
  		}
  	}
  	this.selected[index] = !this.selected[index];
  }
}
