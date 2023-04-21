# TypeScript for Cycling '74 Max / MSP / Jitter

Examples showing how to use the Maxx Javascript type definitions available from NPM
and more broadly how to compile Javascript that Max can run.

`npm install @types/maxmsp --save-dev`

If you want to contribute to the type definitions themselves please see [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped)

[VS Code](https://code.visualstudio.com/) is the recommended TypeScript IDE.

Follow
[this guide](https://cmatskas.com/getting-started-with-typescript-and-sublime-text/)
to set up Sublime Text.

## Getting started

Once you have cloned this repo install it's dependencies with `npm install` you
can then compile the `.ts` files in `src` to max compatible es3 javascript by
running either `npm run compile` or `tsc`.

Once you have done this open the patches in `maxpatches`

## API Documentation

See
[Max Javascript Reference](http://max-javascript-reference.tim-schenk.de/#gsc.tab=0)
for full documentation on all functions and properties.

## Notes

* The TypeScript configuration file (`tsconfig.json`) is set up to output a
  separate .js file for each .ts file.

* .ts files for scripts to be used in a [js] or [jsui] object must end in:

       let module = {};
       export = {};

   This tricks tsc in outputting it as a separate module file, while still
   allowing Max to read it as a script. Do not do this in module files.

* Make sure the compiled JavaScript files are in Max' search path, set this with
  `"outDir"` in your `tsconfig.json`. Make sure your TypeScript folder is not in
  a Max project directory or Max will mess up the file structure.

* For continuous development run `tsc --watch` in the directory with your
  `tsconfig.json`. The .js files are then generated on save and Max will then
  reload automatically.

* For more information on configuration files, look [here](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html).

* Max uses an archaic es3 javascript, which means that for lots of modern
  functionality you will need to include polyfills. In our `tsconfig.json` we
  define this `"target": "es3",` and this means that we also need to set
  `"ignoreDeprecations": "5.0",` because es3 support will soon be dropped by Typescript

* `tsconfig.json` includes `"lib": ["es6"]` to stop Typescript from trying to use
DOM declarations not having this results in duplicate declaration errors.

* We configure the types so that we can use them from the top level by including
  the line `"types": ["maxmsp"],` in our `tsconfig.json`

## Assigning properties to objects of type Global

Cast to `<any>` to assign properties to objects of type `Global` like so:

```Typescript
var g = new Global("Foo");
(<any>g).newProperty = "I am new.";
post("(<any>g).newProperty: " + (<any>g).newProperty + "\n");
```
