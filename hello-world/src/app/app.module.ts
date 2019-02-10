import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { BindingComponent } from './binding/binding.component';
import { ClassComponent } from './class/class.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';

@NgModule({
	declarations: [ // components used by application
		AppComponent,
		TestComponent,
		InterpolationComponent,
		BindingComponent,
		ClassComponent,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		LayoutModule,
		MatToolbarModule,
		MatButtonModule,
		MatSidenavModule,
		MatIconModule,
		MatListModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
