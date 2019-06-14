import React from 'react';
import img from '../assets/graciasc.jpg'
import {Segment,Image} from 'semantic-ui-react'

export default function Home() {

  return (
    <div style={{minHeight: "99vh"}}>
      {/* <h1> Home</h1> */}
      <Segment attached padded='very'  >
      <Image circular centered bordered fluid size='big' src={img}/>
         {/* <Segment attached> */}

      {/* </Segment> */}
      </Segment>

    </div>
  );
}
