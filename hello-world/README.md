# hello-world

A hello world angular application made during the classes of @gopinav. Introduces some core concepts about Angular.
The classes can be seen at YouTube by clicking [here](https://www.youtube.com/playlist?list=PLC3y8-rFHvwhBRAgFinJR8KHIrCdTkZcZ).

## Quick Notes

Some notes taken from the video classes.

### Modules

* An Angular application is just a collection of many individual modules.
* Every module represents a "feature area" in an application.
* Every Angular application has at least one module wich is the root module (app module by convention).
* Each module is composed mainly of components and services.

### Components

* A component controls a portion of the view.
* Every Angular application has at least one component wich is the RootComponent (AppComponent by convention).
* The other components are nested inside the AppComponent.
* Each component is composed of three parts:
    * Tamplate: represents the view being the user interface. Created (mostly) with HTML.
    * Class: code to support the view controlling its logic. Created with typescript.
    * Metadata: Information that tells to angular if the class is a component or just a regular class. It tells also where get the major building blocks needed. Created using the `@Component` decorator.

### Services

* A service is basically a class that holds the business logic of an application.

## Wokspace file structure

Description of the most important files is the project folder.
For a more detailed description of the workspace and project file structure consult the [Angular docs](https://angular.io/guide/file-structure).

* [package.json](): Contains the dependencies (needed to *run* the application) and devDependencies (needed to *develop* the application - not deployed) that are available to all projects in the workspace.
* [src/main.ts](): Entry point for the application. Compiles the application using JIT compiler (by default) and bootstraps the application's root module to run in the browser.
* [src/app/app.module.ts](): The root module. Tells Angular how to assemble the application.
* [src/app/app.component.ts](): The root component class.

## Execution flow

When the command `ng serve` is ran, the execution comes to the `main.ts` file where the app module is bootstrapped. Then the execution goes to `app.module.ts` that bootstraps internally the app component. The app component is composed by the HTML template `app.component.ts` and a class `app.component.html`, executed in the respective order.

So in summary the execution flow of a simple application containing only root module and root component is: `main.ts → app.module.ts → app.component.ts + app.component.html`.

## Interpolation

The simplest way to bind data from a class to the template.

Consists in a syntax of a property or expression within double curly braces (`{{expression}}`). With interpolation, Angular will evaluate the content inside the curly braces and "display" it.

## Binding

### Property binding

Important to know is that attributes and properties are different. Attributes are defined in HTML and can't be changed, properties are defined in DOM and can be changed.

The syntax is a HTML attribute (say `id`) enclosed with square brackets then `=` then the class property name (as string):
```
<tag [HTML attr name]="property" >
```
The same works using `bind-` before the attribute name without square brackets.

For this porpuse interpolation could be used, but interpolation only works with string values and there is some HTML attributes that demands boolean type values.

If we use the `class` attribute and the property binding for a `class` attribute, only the property bind will take effect, turning the HTML attribute into a dummy attribute.

### Class binding

Using the syntax `<tag [class.some-class]="boolVar">` will apply the class `some-class` to `tag` element only if the `boolVar` property is true.

This works fine for conditionally applying a single class. For apply conditionally multiple classes is needed to use the `ng-class` directive. It is accomplished by using the syntax:
```
<tag [ngClass]="classesObj">
```
where `ngClass` is a keyword that says to Angular we are using a `ng-class` directive and `classesObj` is an object that tells wich classes are going to be applied to the `tag` element.

### Style binding

Similarly one can use the syntax `<tag [style.property]="someVal">` to apply the `property` style to the `tag` element with the `someVal` value defined in the class.

To use multiple styles is needed to use the `ng-style` directive with the syntax `<tag [ngStyle]="someObj">` wich works just like the `ngClass` directive.

### Event binding

Is the way Angular provides to listen to user events such as clicks.

The syntax consists of the event type inside parentesis then equals an method name from the component.ts: `<tag (event)="method()">`. 
Optionally `$event` can be passed to `method()`. This special variable gives all information about the event that was raised.

