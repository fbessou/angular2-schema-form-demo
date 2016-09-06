import { platformBrowserDynamic }    from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";
import { WidgetRegistry } from "angular2-schema-form";

platformBrowserDynamic().bootstrapModule(AppModule);
