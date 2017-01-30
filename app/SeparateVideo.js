import React from 'react';
import YouTube from 'react-youtube';
import { Row , Col } from 'reactstrap';
import {withRouter} from 'react-router'

class SeparateVideo extends React.Component {
    componentDidMount(){
        console.log(this.props.params.id)
    }

    render() {
        return (
            <Row className="ContentContainer">
                <YouTube  />
            </Row>
        )
    }
}

export default SeparateVideo;