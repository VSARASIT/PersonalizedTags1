import { Component } from '@angular/core';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbOffcanvas} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-page-six-to-eight',
  templateUrl: './page-six-to-eight.component.html',
  styleUrls: ['./page-six-to-eight.component.scss']
})
export class PageSixToEightComponent {
  
  closeResult = '';

	constructor(private offcanvasService: NgbOffcanvas) {}

	open(content: any) {
		this.offcanvasService.open(content, { ariaLabelledBy: 'offcanvas-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},		 
		);
	}
 
}
