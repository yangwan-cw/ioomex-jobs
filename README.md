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

### 项目路由
主要描述项目中路由的项目结构
```
|-- router                 # 路由目录
|   |-- index.ts           # 路由配置文件
```




### 项目文件树
```
|-- .eslintrc.cjs              # ESLint 配置文件
|-- .gitignore                 # Git 忽略文件配置
|-- .prettierrc.json           # Prettier 配置文件
|-- directoryList.md           # 目录列表 Markdown 文件
|-- env.d.ts                   # TypeScript 类型定义文件
|-- index.html                 # HTML 入口文件
|-- package.json               # 项目配置文件
|-- pnpm-lock.yaml             # pnpm 锁定文件
|-- README.md                  # 项目说明文档
|-- tsconfig.app.json          # TypeScript 应用配置文件
|-- tsconfig.json              # TypeScript 配置文件
|-- tsconfig.node.json         # TypeScript Node 配置文件
|-- tsconfig.vitest.json       # TypeScript Vitest 配置文件
|-- vite.config.ts             # Vite 配置文件
|-- vitest.config.ts           # Vitest 配置文件
|-- .vscode                    # VSCode 配置目录
|   |-- extensions.json        # 扩展配置文件
|   |-- settings.json          # 设置配置文件
|-- job                        # 打包目录
|   |-- favicon.ico            #
|   |-- index.html             #
|   |-- assets                 #
|       |-- AboutView-C6Dx7pxG.css    #
|       |-- AboutView-DvhYBoTV.js    #
|       |-- index-C4Dqy5pm.js       #
|       |-- index-D6pr4OYR.css      #
|-- public                     # 公共资源目录
|   |-- favicon.ico            # 网站图标
|-- src                        # 源代码目录
    |-- App.vue                # 根组件
    |-- main.ts                # 入口文件
    |-- api                    # API 目录
    |-- assets                 # 静态资源目录
    |   |-- base.css           # 基础 CSS 文件
    |   |-- logo.svg           # Logo 图标
    |   |-- main.css           # 主要 CSS 文件
    |-- components             # 组件目录
    |-- router                 # 路由目录
    |   |-- index.ts           # 路由配置文件
    |-- stores                 # 状态管理目录
    |   |-- counter.ts         # 计数器状态管理文件
    |-- utils                  # 工具目录
    |-- views                  # 视图目录
        |-- contract           # 合同视图目录
        |   |-- details.vue    # 合同详情视图组件
        |   |-- index.vue      # 合同视图入口文件
        |   |-- progress.vue   # 合同进度视图组件
        |-- login              # 登录视图目录
        |   |-- index.vue      # 登录视图入口文件
        |   |-- privacyPolicy.vue    # 隐私政策视图组件
        |   |-- serviceAgree.vue    # 服务协议视图组件
        |-- message            # 消息视图目录
        |   |-- index.vue      # 消息视图入口文件
        |   |-- systemDetails.vue    # 系统消息详情视图组件
        |   |-- systemList.vue    # 系统消息列表视图组件
        |   |-- talk.vue       # 聊天视图组件
        |-- my                 # 我的视图目录
        |   |-- index.vue      # 我的视图入口文件
        |   |-- account        # 账户目录
        |   |   |-- advance.vue    # 高级账户视图组件
        |   |   |-- coinExplain.vue    # 货币说明视图组件
        |   |   |-- depositExplain.vue    # 存款说明视图组件
        |   |   |-- index.vue    # 账户视图入口文件
        |   |-- collect        # 收藏目录
        |   |   |-- index.vue    # 收藏视图入口文件
        |   |-- feedback       # 反馈目录
        |   |   |-- index.vue    # 反馈视图入口文件
        |   |-- resume         # 简历目录
        |   |   |-- index.vue    # 简历视图入口文件
        |   |   |-- preview.vue    # 简历预览视图组件
        |   |-- set            # 设置目录
        |   |   |-- index.vue    # 设置视图入口文件
        |   |-- user           # 用户目录
        |       |-- authReal.vue    # 实名认证视图组件
        |       |-- certified.vue    # 认证视图组件
        |       |-- identiSwitch.vue    # 认证开关视图组件
        |       |-- index.vue    # 用户视图入口文件
        |-- talent            # 人才视图目录
        |   |-- detail.vue    # 人才详情视图组件
        |   |-- index.vue     # 人才视图入口文件
        |-- task              # 任务视图目录
            |-- companySource.vue    # 公司资源视图组件
            |-- details.vue    # 任务详情视图组件
            |-- index.vue      # 任务视图入口文件
            |-- search.vue     # 搜索视图组件
```