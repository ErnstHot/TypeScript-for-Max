***TypeScript for Cycling '74 Max / MSP / Jitter***

Compile TypeScript into JavaScript for use in Max. Examples show how to use modules and concatenate everything into a single JavaScript file.
Still has plenty of TODO's in the definition files, but the grunt work of writing the definitions has been done and it is useable. Expect minor bugs and missing definitions.

Follow this guide to set up Sublime Text and TypeScript:
https://cmatskas.com/getting-started-with-typescript-and-sublime-text/


**Now with documentation!**

The Max JS documentation has been included as JSDoc, with the permission of Cycling '74.


**Included in this archive**

    /Definitions
        cycling74-max7.d.ts         Definition file for JavaScript in Max
        cycling74-max7-jsui.d.ts    Definition file for JSUI, MGraphics, Sketch, etc.

    /Modules
        ExampleModule.ts            An example module used by both examples

    /ExampleJS
        ExampleJS.maxpat            Example patcher 
        ExampleJS.ts                Example [js] code
        tsconfig.json               TypeScript configuration file 

    /ExampleJSUI
        ExampleJSUI.maxpat          Example patcher
        ExampleJSUI.ts              Example [jsui] code
        tsconfig.json               TypeScript configuration file

    /JavaScript
        ExampleJS.js                JavaScript code generated from ExampleJS.js and ExampleModule.ts
        ExampleJS.js                JavaScript code generated from ExampleJSUI.js and ExampleModule.ts

The TypeScript configuration files (tsconfig.json) are set up to merge each example into one JavaScript output file, this is the only way I have been able to get modules to work so far. Make sure compiled JavaScript files are in Max' search path.

For more information on configuration files, look here:
https://www.typescriptlang.org/docs/handbook/tsconfig-json.html


**Assigning properties to objects of type Global**

Cast to ```<any>``` to assign properties to objects of type ```Global``` like so:
```
var g = new Global("Foo");
(<any>g).newProperty = "I am new.";
post("(<any>g).newProperty: " + (<any>g).newProperty + "\n");
```