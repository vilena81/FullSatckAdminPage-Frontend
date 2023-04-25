// import React from "react";


// const LinksPage = () => {
//   return (
//     <div>LinksPage</div>
//   )
// }



// export default LinksPage

import React from 'react';
import { Button, Space } from 'antd';
import 'antd/dist/reset.css';
const  LinksPage = () => (
  <Space wrap>
    <Button type="primary">Primary Button</Button>
    <Button>Default Button</Button>
    <Button type="dashed">Dashed Button</Button>
    <Button type="text">Text Button</Button>
    <Button type="link">Link Button</Button>
  </Space>
);

export default LinksPage;