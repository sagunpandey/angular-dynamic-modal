import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CustomModalModule} from './modules/modal/custom-modal.module';
import { SampleModalContentComponent } from './components/sample-modal-content-component/sample-modal-content.component';
import {ModalComponent} from './modules/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleModalContentComponent
  ],
  imports: [
    BrowserModule,
    CustomModalModule
  ],
  providers: [],
  entryComponents: [
    ModalComponent,
    SampleModalContentComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
