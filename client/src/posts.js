import React from 'react';
import logo from './logo.svg';
import { Container, Row, Col, Button } from 'reactstrap';
import {Card, CardHeader, CardFooter, CardBody, CardTitle, CardText} from 'reactstrap';
import './posts.css'
import { Link } from 'react-router-dom';

function Postview(props){
    return (
        <div>
            <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                <Link to={`/post/${props.postid}`}><h5>{props.title}</h5></Link>
                </Col>
            </Row>
            <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                <p class="datetime">{props.updated_on},🍢 {props.time} min to read</p>
                </Col>
            </Row>
            <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}><p class="simple">{props.introduction}</p></Col>
            </Row>

        </div>
    )
}



class Posts extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            posts_data: [],
        }
    }
    

    render(){
        return(
            
            <Container>
            {/* <Card>
                <CardHeader>雪落下的世界</CardHeader>
                <CardBody>
                    <CardTitle>Jan 1, 2020, 5 min to read</CardTitle>
                    <CardText>Clean code , Special Treetment</CardText>
                </CardBody>
            </Card> */}
            <div style={{marginTop:50 + 'px'}}>
            <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                <Link to={`/post/${0}`}><h5>走过落雪时分</h5></Link>
                </Col>
            </Row>
            <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                    <p class="datetime">Jan 1, 2020, 🍢 5 min to read </p>
                    </Col>
                </Row>
            <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}><p class="simple">小猪说它想那个那个 ....</p></Col>
            </Row>
            </div>
            <Postview  title="一个程序员的自白" updated_on="May 24, 2020" time="4" introduction="嘻嘻嘻😍" postid="0" />
            </Container>
        
        )
    }
}

export default Posts;