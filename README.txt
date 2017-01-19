TYPESCRIPT FOR CYCLING '74 MAX / MSP / JITTER

Extract this archive in Max' search path.

Follow this guide to set up Sublime Text and TypeScript:
https://cmatskas.com/getting-started-with-typescript-and-sublime-text/

This has not at all been thoroughly tested and has plenty of TODO's in the definition files, but
the grunt work of writing the definitions has been done. Expect bugs.

INCLUDED IN THIS ARCHIVE
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

The TypeScript configuration files (tsconfig.json) are set up to merge each example into one
JavaScript output file, this is the only way I have been able to get modules to work so far. Make
sure compiled JavaScript files are in Max' search path.

For more information on configuration files, look here:
https://www.typescriptlang.org/docs/handbook/tsconfig-json.html