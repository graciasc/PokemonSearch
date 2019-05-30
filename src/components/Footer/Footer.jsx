import React from 'react';
import { Segment, Icon } from 'semantic-ui-react';

export default function Footer() {
  return (

    <Segment inverted vertical attached='bottom' style={{ display: "flex", flexDirection: "column" }}>

      <p>
        Created By Gracias Claude <Icon name='copyright' />
      </p>
    </Segment>

  );
}
