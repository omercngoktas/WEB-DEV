import React from 'react'
import { Dimmer, Loader } from 'semantic-ui-react'

const LoaderCircle = (props) => (
      <Dimmer active inverted>
        <Loader content={props.content}/>
      </Dimmer>
)

export default LoaderCircle