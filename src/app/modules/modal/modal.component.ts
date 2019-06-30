import {AfterViewInit, Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {IDynamicModalContent} from './dynamic-modal-content';

declare var $: any;

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, AfterViewInit {

  header: string;

  modalId: string;

  component: any;

  modalElement: any;

  submitCallback: (arg: any) => void;

  @ViewChild('modalContent', {static: true, read: ViewContainerRef})
  viewContainerRef: ViewContainerRef;

  componentRef: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.component);
    this.componentRef = this.viewContainerRef.createComponent(componentFactory);
  }

  ngAfterViewInit(): void {
    this.modalElement = $('#' + this.modalId);
    this.modalElement.modal('show');
  }

  onSubmit(): void {
    (this.componentRef.instance as IDynamicModalContent).submit(this.submitCallback);
    this.modalElement.modal('hide');
  }
}
