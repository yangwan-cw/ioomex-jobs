# ioomex-jobs

## 项目设置

```sh
pnpm install
```

### 编译并开发热重载

```sh
pnpm dev
```

### 类型检查、编译并为生产环境压缩

```sh
pnpm build
```

### 使用 Vitest 运行单元测试

```sh
pnpm test:unit
```

### 使用 ESLint 进行代码检查


```sh
pnpm lint
```



### project file tree
```
|-- ioomex-jobs
    |-- .eslintrc.cjs
    |-- .gitignore
    |-- .prettierrc.json
    |-- env.d.ts
    |-- index.html
    |-- package.json
    |-- pnpm-lock.yaml
    |-- README.md
    |-- tsconfig.app.json
    |-- tsconfig.json
    |-- tsconfig.node.json
    |-- tsconfig.vitest.json
    |-- vite.config.ts
    |-- vitest.config.ts
    |-- .vscode
    |   |-- extensions.json
    |   |-- settings.json
    |-- job
    |   |-- favicon.ico
    |   |-- index.html
    |   |-- assets
    |       |-- AboutView-C6Dx7pxG.css
    |       |-- AboutView-DvhYBoTV.js
    |       |-- index-C4Dqy5pm.js
    |       |-- index-D6pr4OYR.css
    |-- public
    |   |-- favicon.ico
    |-- src
        |-- App.vue
        |-- main.ts
        |-- api
        |-- assets
        |   |-- base.css
        |   |-- logo.svg
        |   |-- main.css
        |-- components
        |   |-- HelloWorld.vue
        |   |-- TheWelcome.vue
        |   |-- WelcomeItem.vue
        |   |-- icons
        |   |   |-- IconCommunity.vue
        |   |   |-- IconDocumentation.vue
        |   |   |-- IconEcosystem.vue
        |   |   |-- IconSupport.vue
        |   |   |-- IconTooling.vue
        |   |-- __tests__
        |       |-- HelloWorld.spec.ts
        |-- router
        |   |-- index.ts
        |-- stores
        |   |-- counter.ts
        |-- utils
        |-- views
            |-- AboutView.vue
            |-- HomeView.vue
```