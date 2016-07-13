import {Component, Directive } from "@angular/core";
import {NgModel, CORE_DIRECTIVES, FORM_DIRECTIVES} from "@angular/common";
import {Form, FieldRegistryService} from "angular2-schema-form";

require("style!../bootstrap.min.css");
require("style!./app.css");

@Component({
	selector: "schema-form-demo-app",
	directives: [
		Form
	],
	providers: [FieldRegistryService],
	template: require("./app.component.html"),
})
export class DemoApp {
	private schema:any;
	private model:any;

	constructor(registry: FieldRegistryService) {
		this.schema = require("./sampleschema.json")
		this.model = require("./samplemodel.json");
	}

	ngOnInit() {
	}

}
