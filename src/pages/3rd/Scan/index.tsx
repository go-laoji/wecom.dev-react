import { PageContainer } from '@ant-design/pro-layout';
import { useEffect } from 'react';
import { Row, Col, List } from 'antd';
import styles from './index.less';

export default () => {
  const oauthUrl = encodeURI(`http://${process.env.OauthHost}/login/oauth`);
  const loginUrl = `https://open.work.weixin.qq.com/wwopen/sso/3rd_qrConnect?appid=${process.env.AppId}&redirect_uri=${oauthUrl}&state=STATE&usertype=admin`;
  const notices = [
    '服务商后台/应用管理/登录授权发起域名（跳转后会判断referer）',
    '服务商后台/应用管理/授权完成回调域名（扫码后跳转的域名）',
  ];
  useEffect(() => {
    setTimeout(() => {
      window.location.href = loginUrl;
    }, 3000);
  }, []);
  return (
    <PageContainer content="3秒后自动跳转" className={styles.main}>
      <div style={{ paddingTop: 100, textAlign: 'center' }}>
        <Row>
          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}></Col>
          <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            <List
              header={<div>注意配置项</div>}
              dataSource={notices}
              renderItem={(item) => <List.Item>{item}</List.Item>}
            />
          </Col>
          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}></Col>
        </Row>
      </div>
    </PageContainer>
  );
};
