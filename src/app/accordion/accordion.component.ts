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
		  	for(let i = 0; i < this.faqs.length; i++) {
		  		this.selected.push(false);
		  	}
  		});
  }

  selectFaq(index) {
  	if(this.selected[index] == false) {
	  	for(let i = 0; i < this.faqs.length; i++) {
	  		if(this.selected[i] != undefined) {
	  			this.selected[i] = false;
	  		}
	  	}
  		this.selected[index] = true;
  	}
  	else {
  		this.selected[index] = false;
  	}
  }
}
