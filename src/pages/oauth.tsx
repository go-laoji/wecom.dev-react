import { useState, useEffect } from 'react';
import { useSearchParam } from 'react-use';
import { Spin } from 'antd';

export default function Oauth() {
  const [loading, setLoading] = useState<boolean>(true);
  let code = useSearchParam('code');
  if (code === undefined || code == '') {
    code = useSearchParam('auth_code');
  }
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    // TODO: 拿code去后台接口登陆换取登陆信息
  }, []);
  return (
    <div className="ant-pro-page-container">
      <div style={{ paddingTop: 100, textAlign: 'center' }}>
        <Spin spinning={loading} size="large" />
        <div>正在登陆中....{code}</div>
      </div>
    </div>
  );
}
