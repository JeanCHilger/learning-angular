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
* Each component will have a HTML template (view) and a class (controls the logic of the view).

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

When the command `ng serve` is ran the execution comes to the `main.ts` file where the app module is bootstrapped. Then the execution goes to `app.module.ts` that bootstraps internally the app component. The app component is composed by the HTML template `app.component.html` and a class `app.component.ts`.

So in summary the execution flow of a simple application containing only root module and root component is:

```main.ts → app.module.ts → app.component.ts + app.component.html```
