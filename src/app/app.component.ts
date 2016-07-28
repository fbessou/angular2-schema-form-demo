import { Component} from "@angular/core";
import { Form } from "angular2-schema-form";

require("style!../bootstrap.min.css");
require("style!./app.css");

@Component({
	selector: "schema-form-demo-app",
	directives: [Form],
	template: require("./app.component.html"),
})
export class DemoApp {
	private schema:any;
	private model:any;

	constructor() {
		this.schema = require("./sampleschema.json");
		this.model = require("./samplemodel.json");
		
	}

	ngOnInit() {
	}

}
