import {Component, ViewContainerRef} from '@angular/core';
import {ModalService} from './modules/modal/modal.service';
import {SampleModalContentComponent} from './components/sample-modal-content-component/sample-modal-content.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  date = 'N/A';

  constructor(
    private modalService: ModalService,
    private viewContainerRef: ViewContainerRef) {
  }

  openFolderSelectionModal() {
    this.modalService.createModal(
      'sample-modal',
      'Sample Modal Header',
      this.viewContainerRef,
      SampleModalContentComponent,
      this.onNewDate);
  }

  onNewDate = (date: string) => {
    this.date = date;
  }
}
