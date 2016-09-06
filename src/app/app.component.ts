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

	constructor(registry: WidgetRegistry) {
		this.schema = require("./sampleschema.json");
		this.model = require("./samplemodel.json");
		registry.register("tinymce", TinyMCEWidget);
	}

	ngOnInit() {
	}

}
