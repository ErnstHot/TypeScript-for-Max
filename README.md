TypeScript for Cycling '74 Max / MSP / Jitter
===

Compile TypeScript into JavaScript for use in Max. Examples show how to use modules and output a separate .js file for each .ts file.

Still has plenty of TODO's in the definition files, but the grunt work of writing the definitions has been done and it is useable. Expect minor bugs and missing definitions.

[VS Code](https://code.visualstudio.com/) is the recommended TypeScript IDE.

Follow [this guide](https://cmatskas.com/getting-started-with-typescript-and-sublime-text/) to set up Sublime Text.


Now with documentation!
---

The Max JS documentation has been included as JSDoc, with the permission of Cycling '74.


Included in this archive
---

    /TypeScript
        tsconfig.json               TypeScript configuration file 
        ExampleJS.ts                Example [js] code
        ExampleJSUI.ts              Example [jsui] code
        ExampleModule.ts            An example module used by both examples
        /types
            cycling74-max7.d.ts         Definition file for JavaScript in Max
            cycling74-max7-jsui.d.ts    Definition file for JSUI, MGraphics, Sketch, etc.
            cycling74-max7-jitter.d.ts 	Definition file for using Jitter objects 

    /JavaScript
        ExampleJS.js                JavaScript code generated from ExampleJS.ts
        ExampleJSUI.js              JavaScript code generated from ExampleJSUI.ts
        ExampleModule.js            JavaScript code generated from ExampleModule.ts
        ExampleJS.maxpat            Example patcher 
        ExampleJSUI.maxpat          Example patcher


Notes
---

 * The TypeScript configuration file (`tsconfig.json`) is set up to output a separate .js file for each .ts file. 

 * .ts files for scripts to be used in a [js] or [jsui] object must end in:

       let module = {};
       export = {};

   This tricks tsc in outputting it as a separate module file, while still allowing Max to read it as a script. Do not do this in module files. 

 * Make sure the compiled JavaScript files are in Max' search path, set this with `"outDir"` in your `tsconfig.json`. Make sure your TypeScript folder is not in a Max project directory or Max will mess up the file structure. 

 * For continuous development run `tsc --watch` in the directory with your `tsconfig.json`. The .js files are then generated on save and Max will then reload automatically.

 * For more information on configuration files, look [here](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html). 

Assigning properties to objects of type Global
---

Cast to ```<any>``` to assign properties to objects of type ```Global``` like so:
```
var g = new Global("Foo");
(<any>g).newProperty = "I am new.";
post("(<any>g).newProperty: " + (<any>g).newProperty + "\n");
```