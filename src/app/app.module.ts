import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {
  SchemaFormModule,
  DefaultWidgetRegistry,
  WidgetRegistry
} from 'angular2-schema-form';

import {
  WizardWidget
} from './wizard.widget';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    SchemaFormModule
  ],
  declarations: [AppComponent, WizardWidget],
  entryComponents: [WizardWidget],
  providers: [{provide: WidgetRegistry, useClass: DefaultWidgetRegistry}],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(widgetRegistry: WidgetRegistry) {
    widgetRegistry.register('wizard', WizardWidget);
  }
}
