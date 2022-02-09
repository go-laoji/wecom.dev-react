# 企业微信身份验证登陆样例

## 使用方法

克隆仓库
```bash
git clone git@github.com:go-laoji/wecom.dev-react.git
```

安装依赖
```bash
cd wecom.dev-react
yarn
```

修改.umirc.ts文件里的配置

```javascript
define:{
  'process.env.AppId':"",
  'process.env.AgentId':"",
  'process.env.OauthHost':"",
}
```

* 自建和三方扫码时配置　AppId　为企业ID
* 三方网页授权时　AppId　配置为应用的id（suiteid）
* AgentId 仅建应用配置


启动服务

```bash
yarn start
```
