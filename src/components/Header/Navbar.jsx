import React from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
export default function Head() {
  const navData = ['Home', 'Pokemon'];
  const menu = navData.map((item, i) => {
    return (
      <Menu.Item key={i} name={item} as={Link} to={`/${item}`}>
        {item}
      </Menu.Item>
    );
  });
  return (
<div>

      <Segment inverted>
        <Menu secondary inverted pointing style={{ margin: 0, fontSize: 15 }}>
          {menu}
          <Menu.Item position='right' style={{ fontSize: 20, color: 'red' }}>
            Pokemon
          </Menu.Item>
        </Menu>
      </Segment>
</div>
  );
}
