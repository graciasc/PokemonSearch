import React from 'react';
import img from '../assets/graciasc.jpg'
import {Segment,Image,Grid, Header} from 'semantic-ui-react'

export default function Home() {

  return (
    <div style={{minHeight: "99vh", padding:50}}>
      {/* <Segment attached padded='very'  > */}
      <Image circular centered bordered fluid size='big' src={img}/>
      <Grid centered padded columns={4}>
    <Grid.Column >
<Header as='h1'content='Welcome'/>
<p > I am a Computer science who loves to program. I decided to build this little Website/App to get my hands dirty with an API and to get more experience with building a full project.
  </p>
    </Grid.Column>
</Grid>
      {/* </Segment> */}



    </div>
  );
}
