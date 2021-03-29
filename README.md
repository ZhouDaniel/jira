<!-- # Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/). -->

## 3-2

1. 状态提升（把两个子组件需要用的状态和方法给一个他们的父组件维护并传给子组件）
2. 启动后端服务指定端口,在 packjson 中添加`"json-server": "json-server __json_server_mock__/db.json --watch --port 4000"）`
3. 在根目录下新建.env 和.env.development 设置 baseUrl `REACT_APP_API_URL = xxx` 用`process.env.REACT_APP_API_URL` 接收
4. 请求的 ur 做处理（新建文件来处理）
    - 删除空的字段 `var json = {a:1,b:2}; delete json[a]`
    - 注意方法里不要改变传过来的参数，还是复制一份返回去
    - 安装 qs 插件 使用 qs.stringify 把 json 对象处理成 url 形式（a=1&c=2）
    - 因为 !0 也为转变为布尔值 false，所以拆分一个方法来判断

## 3-3

1. 使用了 useMount 和 useDebounce 两个自定义 hook，包装了只有加载时才发送请求和防抖两个功能
2. 何时用 hook，何时用函数？当不需要用到其他 hook 时，例如 useState，就用函数，否则就用 hook
3. hook 只能在其他 hook 或者组件中使用，如果在其他 hook 中使用就要在命名时加上 use，如果是组件，首字母就要大写

## 4-1

为什么要用 typescript

## 4-2 typescript 几个方面

1. 一些引入的插件 例如 `qs` 不是 ts 写的，所有需要安装 qs 的 ts 补丁才可以用
2. `interface` 接口 定义数据类型
3. `@ts-ignore` 可以忽略 ts 的报错
4. `() => void` 代表不返回任何值的回调函数

## 5-1

1. 在 json-server 里面使用 middlewares 实现不是 restful api 来实现登录功能
2. form 表单的编写
3. fetch 的 post 请求

## 5-2

1. 安装 jira-dev-tool `npx imooc-jira-tool`
   在入口文件添加

```js
import { loadDevTools } from "jira-dev-tool";
loadDevTools(() => {
    ReactDOM.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
        document.getElementById("root")
    );
});
```

所有请求被 Service Worker 代理

## 5-3 ,5-4 auth-provider 的编写 和 useContext 存储全局用户信息

1. 父组件用 React.createContext 注册 user, login,register,logout 为全局额信息

```js
const AuthContext = React.createContext(null)
...
return <AuthContext.Provider children={children} value={{user, login,register,logout}} />
```

2. 子组件用 useContext 接收
   `const context = React.useContext(AuthContext)`

## 5-5 用 useAuth 切换登录与非登录状态

## 5-6 封装 fetch 请求

1. fetch 的 catch 方法捕捉不到服务器返回的 4xx，5xx 错误，只能捕获网络等问题
2. axios 的表现和 fetch 不一样，axios 可以在返回状态不为 2xx 的时候抛出异常

## 5-7 用 useHttp 管理 JWT 和登录状态，保持登录状态

1. 给参数一个默认值会起到该参数可传可不传的效果(前面用了解构不能用问号？来表示可传可不传)
2. get 请求的参数是放在 url 上，post 请求放在 body 里面
3. 当传参数时，写成了 [a,b] 所以传参时也要写成[a,b],如果想写成 a,b 那行参的位置需要解构 ...[a,b]
4. {children}:{children:ReactNode}
5. 在 AuthProvider 中 请求 user，用返回的 user 来保持登入状态，在 AuthProvider 中的请求，需要用 useEffect 来限制次数，不然会一直请求

## 5-8 类型别名，联合类型、Partial 和 Omit
