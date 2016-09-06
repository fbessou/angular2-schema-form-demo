import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import {
	SchemaFormModule,
	DefaultWidgetRegistry,
	WidgetRegistry
} from "angular2-schema-form";

import {
	Ng2SFTinyMCEModule
} from "ng2sf-tinymce"

import {
	WizardWidget
} from "./wizard.widget";

import { AppComponent } from "./app.component";

@NgModule({
	imports: [
		BrowserModule,
		SchemaFormModule,
		Ng2SFTinyMCEModule
	],
	declarations: [AppComponent, WizardWidget],
	entryComponents: [WizardWidget],
	providers: [{provide: WidgetRegistry, useClass: DefaultWidgetRegistry}],
	bootstrap: [AppComponent]
})
export class AppModule {
	constructor(widgetRegistry: WidgetRegistry) {
		widgetRegistry.register("wizard", WizardWidget);
	}
}
