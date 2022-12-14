# eslint-plugin-reviewget


> 开发思路参考：git commit



## Feature
- 当用户使用 getXXX  get开头的函数的时候  如果不返回值的话 那么就会报错
- 可以 fix
- 用户可以自行配置是否 fix


## Base Environment

eslint-plugin-xxx:  插件命名规范

测试插件：

### 1. demo测试

```shell
pnpm init -y
pnpm i eslint -D
pnpx eslint --init
```
![](./assets/cli.png)

配置 .eslintrc.js

```js
module.exports = {
    "root": true,
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true
    },
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "plugins": [
        "reviewget"
    ],
    "rules": {
        "reviewget/get": ["warn"]
    }
}

```

在`eslint-plugin-reviewget/example`下安装本地写好的插件

```shell
pnpm i ../
```

![](./assets/lint-run.png)

### 2. 单元测试环境

创建`reviewget.spec.js`文件

```js
const { RuleTester } = require("eslint")
const { rules } = require('./index')

const ruleTester = new RuleTester()
ruleTester.run('get', rules.get, {
    valid: [
        {
            name: 'success',
            code: `function getName(){ return ''}`
        }
    ],
    invalid: [


    ]
})


```

watch 模式, 利用 mocha 测试库

```shell
pnpm test -- --watch
```



## Finish

对于一个eslint来说，对 ast 分析 ，从信息里面提取出需要的东西，检测是否符合要求

![](assets/2022-12-04-19-41-12.png)




开发完成插件后，在example中进行使用之前，需要进行如下操作：

![](assets/2022-12-04-19-57-32.png)



# Publish

先打包，发包的时候使用打包结果

```json
// package.json 
"files": [
    "index.js",
    "package.json"
],
// 表示发布上去的文件
```

```shell
npm login --registry https://registry.npmjs.org 
npm publish --registry https://registry.npmjs.org 
```

在example里面直接install

```json
// 删除
 "dependencies": {
    "eslint-plugin-reviewget": "link:.."
  }
```



# Problem

vscode保存时候自动完成eslint补全


# Reference

[eslint-plugin](https://github.com/cuixiaorui/tutorial-eslint-plugin)