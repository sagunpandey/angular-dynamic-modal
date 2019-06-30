import {ModalService} from './modal.service';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ModalComponent} from './modal.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ModalComponent
  ],
  exports: [
    ModalComponent
  ]
})
export class CustomModalModule {
  static forRoot() {
    return {
      ngModule: CustomModalModule,
      providers: [ModalService]
    };
  }
}
