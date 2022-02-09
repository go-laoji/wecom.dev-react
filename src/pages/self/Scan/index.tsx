import {PageContainer} from '@ant-design/pro-layout';
import {useEffect} from 'react';
import {List,Row, Col} from 'antd';
import styles from './index.less';

export default () => {
  const notices = [
    '网页授权及JS-SDK-->可信域名',
    '企业微信授权登录-->Web网页授权回调域',
  ];
  useEffect(() => {
    var wwLogin = new window.WwLogin({
      "id": "qrcode",
      "appid": process.env.AppId,
      "agentid": process.env.AgentId,
      "redirect_uri": encodeURI(`http://${process.env.OauthHost}/login/oauth`),
      "state": "",
      "lang": "zh",
    });
  }, []);
  return (
    <PageContainer className={styles.main}>
      <div style={{paddingTop: 100, textAlign: 'center'}}>

        <Row>
          <Col xs={{span: 5, offset: 1}} lg={{span: 6, offset: 2}}>
            <List
              header={<div>注意配置项</div>}
              dataSource={notices}
              renderItem={item=>(
                <List.Item>{item}</List.Item>
              )}
            />
          </Col>
          <Col xs={{span: 11, offset: 1}} lg={{span: 6, offset: 2}}>
            <div id='qrcode'></div>
          </Col>
          <Col xs={{span: 5, offset: 1}} lg={{span: 6, offset: 2}}>
          </Col>
        </Row>
      </div>
    </PageContainer>
  );
};
