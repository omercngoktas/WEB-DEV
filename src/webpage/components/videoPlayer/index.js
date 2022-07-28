import React, {Component} from 'react';
import 'video-react/dist/video-react.css';
import { Player } from 'video-react';

class VideoPlayer extends Component {
    // constructor(props){
    //     super(props)
    // }
    render(){
        return(
                <Player playsInline fluid={false} width={'100vw'} height={500}
                    poster={this.props.poster}
                    src={this.props.video}
                />
        )
    }
}

export default VideoPlayer