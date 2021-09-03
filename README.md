# What Is This?
This project is a template for writing typesafe Javascript WITHOUT using the Typescript language.

It relies on:
* JSDoc
* TypeScript 
* ESLint
* VS Code

Types are declared using JSDoc, like so:
```
/**
   * @param {string} name
   * @returns {Promise<boolean>}
   */
  async initialize (name) {
    console.info('Intializing: ' + name)
    await Util.sleep(1000)
    return 
  }
```

We leverate the TypeScript compiler to then ensure methods are being called in the correct way. Essentially, rather than using the TypeScript language to specify our types, instead we are using JSDoc. Though the JSDoc syntax may be a bit more verbose, it has the advantage that is does not require transpilation.

It also obviously facilitates leveraging JSDoc for documentation.


# What Are The Benefits?
* Type-safety for JavaScript code without transpilation
* Of-the-moment code checking and auto-correction in VSCode
* Code autocomplete inside VSCode
* Easy use of VSCode for debugging

Overall, the goal is to reap the benefits of JavaScript's dynamism while allowing for strict type safety.

This is, in the author's view, the best of both worlds.

Additionally, this project leverages lerna and ava, which are two essential tools for building modern JavaScript projects.

Lerna is a best-of-breed package manager.

Ava is the best unit-testing tool for JavaScript. It is fast and runs tests in isolated environments, which avoids one of the biggest issues with Mocha and large sets of unit-tests. At the same time, it avoids the complexity and (IMO) weird opinions that come with Jest.

# Using This Template
## Step 1: Change the `name` entries in your package.json to your own name

## Step 2: Update the entry `paths` in [tsconfig.json](tsconfig.json) to use your package name
This will alllow local package dependencies to be resolved correctly within your code

## Step 3: Install dependencies
This project uses Lerna, so to install the node_modules run from the root directory:  
```
npm install
```
