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
