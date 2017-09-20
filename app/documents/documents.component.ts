import { Component } from '@angular/core';
import { Document } from './document';

@Component({
	moduleId: module.id,
	selector: 'documents',
	templateUrl: 'documents.component.html'
})
export class DocumentsComponent {
  documents: Document[] = [
  	{
  	  title: "My First Doc",
  	  description: 'asdfasdf asdfasd',
  	  file_url: 'http://google.com',
  	  updated_at: '09/20/2017',
  	  image_url: 'http://google.com',	
  	},
  	{
  	  title: "My Second Doc",
  	  description: 'asdfasdf asdfasd',
  	  file_url: 'http://google.com',
  	  updated_at: '09/20/2017',
  	  image_url: 'http://google.com',	
  	},
  	{
  	  title: "My Third Doc",
  	  description: 'asdfasdf asdfasd',
  	  file_url: 'http://google.com',
  	  updated_at: '09/20/2017',
  	  image_url: 'http://google.com',	
  	}
  ]
}