import { Component } from '@angular/core';
import {
  Test
} from '@gqlcodegen/model';

@Component({
  selector: 'gqlcodegen-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  title = 'codegen';
  test: Test;

  constructor(){
    // this.test.
  }
}
