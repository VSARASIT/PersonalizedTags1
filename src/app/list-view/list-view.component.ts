import { Component } from '@angular/core';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbOffcanvas} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent {
  
  closeResult = '';

	constructor(private offcanvasService: NgbOffcanvas) {}

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
