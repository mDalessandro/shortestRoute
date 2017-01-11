# shortestRoute
> A small program that, given a set of city data, finds the shortest route from a starting city to a destination. 

## Getting started

Here is a short, step-by-step guide to trying out the program:
> 1: Start by cloning down the repository to your local computer.
> 2: [Installing Dependencies](#installing-dependencies)
> 3: Within shortestRoute.js, edit the inputs with the desired data. (Be sure to match the existing data format and types)
> 4: Run the start script:
```sh
npm start
```

## Requirements

- Node 6.0.0
- npm 3.9.5


## Development

### Installing Dependencies

From within the root directory of your cloned repository:

```sh
npm install
```

### Running Tests

From within the root directory of your cloned repository:

```sh
npm test
```
#### A note on the existing tests
Included in the repository are a few basic unit tests. The existing tests first test if the necessary functions exist and are the proper types. Other tests test for the basic functionality of the program, such as finding the shortest route when multiple possible routes exists, as well as testing for edge cases, such as when the starting and ending cities are the same.
