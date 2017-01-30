import React from 'react';
import API from './API';
import Video from './Video';
import './bootstrap.css';
import { Row , Col } from 'reactstrap';


class VideosList extends React.Component {
    constructor(){
        super();
        this.state = {
            videos: []
        }
    }

    componentDidMount(){
        API.getVideos().then( (data) => {
            console.log(data);
            this.setState({
                videos: data
            })
        })
    }

    render(){
         return ( <Row className="ContentContainer">  {
             this.state.videos.map( (video, index) => {
                 return <Video key={index} video={video} />
             } )
         } </Row>  )

     }
}

export default VideosList;
