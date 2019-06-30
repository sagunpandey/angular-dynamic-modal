import { Component, OnInit } from '@angular/core';
import {IDynamicModalContent} from '../../modules/modal/dynamic-modal-content';

@Component({
  selector: 'app-sample-modal-content-component',
  templateUrl: './sample-modal-content.component.html',
  styleUrls: ['./sample-modal-content.component.css']
})
export class SampleModalContentComponent implements OnInit, IDynamicModalContent {

  constructor() { }

  ngOnInit() {
  }

  submit(callback: (arg: any) => void): void {
    if (callback) {
      callback(new Date().toLocaleDateString());
    }
  }
}
