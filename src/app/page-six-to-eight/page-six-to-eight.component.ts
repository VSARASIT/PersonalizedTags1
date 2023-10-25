import { Component } from '@angular/core';
import { NgbOffcanvasConfig, NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbOffcanvas} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-page-six-to-eight',
  templateUrl: './page-six-to-eight.component.html',
  styleUrls: ['./page-six-to-eight.component.scss']
})
export class PageSixToEightComponent {
  
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
 
}
