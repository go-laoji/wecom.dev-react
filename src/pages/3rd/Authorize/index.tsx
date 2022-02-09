import { PageContainer } from '@ant-design/pro-layout';
import { useState, useEffect } from 'react';
import { Spin } from 'antd';
import styles from './index.less';

export default () => {
  const [loading, setLoading] = useState<boolean>(true);
  const oauthUrl =  encodeURI(`http://${process.env.OauthHost}/login/oauth`);
  const loginUrl = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${process.env.AppId}&redirect_uri=${oauthUrl}&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect`;
  useEffect(() => {
    setTimeout(() => {
      window.location.href=loginUrl;
    }, 3000);
  }, []);
  return (
    <PageContainer content="请注意在企业微信中测试打开;3秒后自动跳转" className={styles.main}>
      <div style={{ paddingTop: 100, textAlign: 'center' }}>
        {/*<Spin spinning={loading} size="large" />*/}
      </div>
    </PageContainer>
  );
};
