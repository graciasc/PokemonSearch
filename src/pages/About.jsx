import React from 'react';
import {Segment} from 'semantic-ui-react'
// import {img} from '.../assets/graciasc'
export default function About() {
    const aboutStyle = {
fontSize:15,
minHeight:"99vh"

    }
  return (
    <div style={aboutStyle} >
        <Segment>
      <h1> About</h1>
        </Segment>
        {/* <Segment placeholder> </Segment> */}

        <p > I am a Computer science who loves to program. I decided to build this little Website/App to get my hands dirty with an API and to get more experience with building a full project.
  </p>

    </div>
  );
}
