<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

## Description

A [take home test](https://www.notion.so/Take-home-test-8bbf659eebe74d7f9c7ea287863c7343) based on NestJs framework, with Swagger & Jest.

## Open/envisionned points

- logging not done
- HTTP REST vs WS : HTTP REST for simplicity's sake
- Best playbook structure : fully nested (could make more sense for UI to have "independent" blocks in a flattened structure)
- Swagger schema description : draft
- domain logic for validation on save :
  - checking startComponent defined
  - checking the user-defined configuration of component with the component type
  - enforcing rules on outputs of components & playbook
- going more in DDD for playbook and composite pattern once domain knowledge gained.
- assumed components should communicate by passing a context holding between them and enriching (or pruning) it at each step (and saving it for later async resumption ?), hence no constraints on input/output types
- concrete persistence handling : would need a repository interface to switch between memory and real (or else) database + potential translation layer between database & domain/application layers.

## How to use

```bash
# install
$ npm install
```

```bash
# run in development
$ npm run start
```

Reaching API docs : [Swagger default UI](http://localhost:3000/api/)

```bash
# run unit tests
$ npm run test
```
