import { Component } from '@angular/core';
import { NgbOffcanvasConfig, NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbOffcanvas} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent {
  
  closeResult = '';	 
	constructor(config: NgbOffcanvasConfig, private offcanvasService: NgbOffcanvas) {
		// customize default values of offcanvas used by this component tree
		config.position = 'end';
		config.keyboard = false;
	}

	open(content: any) {
		this.offcanvasService.open(content, { ariaLabelledBy: 'offcanvas-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},		 
		);
	}
	cancelFilter(content: any) {
		
	}
	applyFilter(content: any) {
		
	}
 
}
