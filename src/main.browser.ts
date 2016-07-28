import { bootstrap }    from "@angular/platform-browser-dynamic";
import { DemoApp } from "./app/app.component";
import { disableDeprecatedForms, provideForms } from "@angular/forms";
import { WidgetRegistry } from "angular2-schema-form";

bootstrap(DemoApp,[disableDeprecatedForms(), provideForms(), WidgetRegistry]);
