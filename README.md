# Project References in TypeScript


> Project references are a new feature in TypeScript 3.0 that allow you to structure your TypeScript programs into smaller pieces.
> https://www.typescriptlang.org/docs/handbook/project-references.html

In this example we use a TypeScript project **("VehiclesProject")** as library to use in **("ParkingProject")**.

### Because can I need this?
I see that many peoples have X TypeScript projects, each of one, it's a different form for example. So, they copy his reusable clases in each project.

Other option is use a private npm package or an CDN but this need a bit of setup and can be some hard to anticipate on early development phases.
