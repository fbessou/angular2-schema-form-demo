import { Component} from "@angular/core";
import { WidgetRegistry } from "angular2-schema-form";
import { TinyMCEWidget } from "ng2sf-tinymce";

require("style!../bootstrap.min.css");
require("style!./app.css");

@Component({
	selector: "schema-form-demo-app",
	template: require("./app.component.html"),
})
export class AppComponent {
	private schema:any;
	private model:any;
	private validators = {};

	constructor(registry: WidgetRegistry) {
		this.schema = require("./sampleschema.json");
		this.model = require("./samplemodel.json");
		registry.register("tinymce", TinyMCEWidget);

		this.validators["/student/id"] = this.validateId;
	}

	validateId(value, property, form) {
		if (value.length === 11) { 
			let list = value.substr(0,10).split('');
			if (list.reduce((p, c, i) => { return p - (i%2 ? +c : -c);}, 0) ) {
				let error = {"INE": {"checksum": "INVALID CHECKSUM"}};
				return error;
			}
		}
		return null;
	}

}
