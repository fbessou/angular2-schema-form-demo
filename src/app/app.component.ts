import { Component } from '@angular/core';
import { WidgetRegistry } from 'angular2-schema-form';
import { Config } from './config';

@Component({
  selector: 'sf-demo-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  private schema: any;
  private model: any;
  private validators = {};

  constructor(registry: WidgetRegistry) {
    this.schema = Config.SCHEMA;
    this.model = Config.MODEL;

    this.validators['/student/id'] = this.validateId;
  }

  validateId(value, property, form) {
    if (value.length === 11) {
      const list = value.substr(0, 10).split('');
      if (list.reduce((p, c, i) => { return p - (i % 2 ? +c : -c); }, 0)) {
        const error = { 'INE': { 'checksum': 'INVALID CHECKSUM' } };
        return error;
      }
    }
    return null;
  }

}
