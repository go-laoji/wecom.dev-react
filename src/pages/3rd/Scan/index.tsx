import {PageContainer} from '@ant-design/pro-layout';
import {useEffect} from 'react';
import {Row, Col} from 'antd';
import styles from './index.less';

export default () => {
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
