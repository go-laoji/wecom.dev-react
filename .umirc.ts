import { defineConfig } from 'umi';
import routes from "./config/routes";

export default defineConfig({
  layout:{
    name:'wecom.dev',
    locale:true,
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: routes,
  fastRefresh: {},
  define:{
    'process.env.AppId':"",
    'process.env.AgentId':"",
    'process.env.OauthHost':"",
  },
  mfsu:{}
});
