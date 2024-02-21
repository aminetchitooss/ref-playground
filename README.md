# Ref playground

Folder structure
```
root/
├── packages/
│   ├── project1/
│   │   ├── src/
│   │   │   └── functionA.ts
│   │   ├── dist/
│   │   ├── package.json
│   │   └── tsconfig.json
│   └── project2/
│       ├── src/
│       │   └── functionB.ts
│       ├── dist/
│       ├── package.json
│       └── tsconfig.json
└── lib/
    ├── src/
    │   └── index.ts
    ├── dist/
    ├── package.json
    └── tsconfig.json
```

## Build and bundle


- Go project 1 in directory

```sh
cd packages/project2
```

- Install deps, run:

```sh
npm install
```

- To bundle project 1, run:

```sh
npm run bundle
```

- To build project 1, run:

```sh
npm run build
```
 