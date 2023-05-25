import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

import './Loading.scss';

const Loading = () => {
  const antIcon = <LoadingOutlined style={{ fontSize: 48 }} spin />;

  return (
    <Spin
      style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', margin: '0 auto', paddingTop: 10 }}
      indicator={antIcon}
    />
  );
};

export { Loading };
