import { useState, useEffect } from 'react';
import { Spin } from 'antd';

export default function Oauth() {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className='ant-pro-page-container'>
      <div style={{ paddingTop: 100, textAlign: 'center' }}>
        <Spin spinning={loading} size="large" />
        <div>正在登陆中....</div>
      </div>
    </div>
  );
}
