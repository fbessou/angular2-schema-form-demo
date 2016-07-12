import {Component, ComponentResolver, Directive, ElementRef, Renderer, ViewEncapsulation,ViewContainerRef,ComponentMetadata} from "@angular/core";
import {NgModel, CORE_DIRECTIVES, FORM_DIRECTIVES} from "@angular/common";
import {Form, FieldRegistryService} from "angular2-schema-form";

require("style!../bootstrap.min.css");

@Component({
	selector: "schema-form-demo-app",
	directives: [
		Form
	],
	providers: [FieldRegistryService, NgModel],
	template: require("./app.component.html"),
	styles: [require("./app.css")],
	encapsulation: ViewEncapsulation.None
})

export class DemoApp {
	private schema:any;
	private model:any;
	private container: ViewContainerRef;
	private resolver: ComponentResolver;
	constructor(container: ViewContainerRef = null, resolver: ComponentResolver = null,registry: FieldRegistryService) {
		this.container = container;
		this.resolver = resolver;

		this.schema = require("./sampleschema.json")
		this.model = require("./samplemodel.json");
	}

	ngOnInit() {
	}

}
