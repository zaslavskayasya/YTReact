import React from 'react';
import YouTube from 'react-youtube';
import { Row , Col } from 'reactstrap';
import {withRouter} from 'react-router';
import {  Link } from 'react-router';

class SeparateVideo extends React.Component {
    componentDidMount(){
        console.log(this.props.params.id)
    }

    render() {
        return (
            <Row className="ContentContainer">
                {this.props.params.id}

                <YouTube  videoId={this.props.params.id} />
            </Row>
        )
    }
}

export default SeparateVideo;