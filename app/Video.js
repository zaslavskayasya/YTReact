import React from 'react';
import YouTube from 'react-youtube';
import LinearProgress from 'material-ui/LinearProgress';
import './bootstrap.css';
import { Button } from 'reactstrap';
import {  Link } from 'react-router'
import { Progress } from 'reactstrap';
import { Row , Col } from 'reactstrap';
import { Card, CardImg, CardText, CardBlock,
    CardTitle, CardSubtitle } from 'reactstrap';
import {withRouter} from 'react-router'



class Video extends  React.Component {



    constructor(){
        super();
        this.state = {
            loading: true
        }
    }
    changeLoading(){
        this.setState({
            loading: false,
            to: '/SeparateVideo/'
        })
    }
    goToOneVideo() {
    }
   render() {
       const opts = {
           height: '400px',
           width: '100%',
       };

       return (
                     <Card className="Card ">
                         <Col xs="flex" >
                          <YouTube class="video" opts={opts} onReady={this.changeLoading.bind(this)} videoId={this.props.video.id} />
                          {this.state.loading ?  <Progress animated color="warning" value={75} /> : null }
                           <h2>Title<span>{this.props.video.snippet.title}</span></h2>
                              <p >Description<span > {this.props.video.snippet.title}</span></p>

                             <Link  to={"/SeparateVideo/" + this.props.video.id} ><Button   color="danger" >on!{this.props.video.id}</Button></Link>
                         </Col>
                     </Card>
       )
   }
}

export default Video;