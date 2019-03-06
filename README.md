# Krython

Parser for a simplified version of Python 3. The intention behind the project is to subset of Python 3 that would be easier to parse and interpret then regular Python.

## Build

If starting for the first time, first install node.js onto your OS. Then open your terminal in the project folder and run

```
npm install
```

This will install all the necessary packages. To build the project run

```
npm run build
```

or if you want to continously watch for changes, run

```
npm run watch
```

## The Parser page

For now the parser can only parse arithmetic expressions with +, -, *, /, // and %. Open `public/index.html` and try expressions like this

```
2 + 3 * 4 - 5
```

and hit the parse button. The AST will be printed to the console. 

## Differences to real Python

* No OOP, classes, objects etc.
* No annotations
* No '@' and '<>' operators
* No bitshifts
* No await
