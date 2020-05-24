import React from 'react';
import logo from './logo.svg';
import { Container, Row, Col, Button, Media } from 'reactstrap';
import {Card, CardHeader, CardFooter, CardBody, CardTitle, CardText} from 'reactstrap';
import "./postdetail.css"
import {Link} from 'react-router-dom';

function Splitcontent(props){
    const paras = String(props.content).trim().split("\n");
    console.log(paras);
    const items = []
    for(const [index, value] of paras.entries()){
        items.push(<p class="para">{value}</p>)
    }
    console.log(items)
    return (
        <div>
            {items}
        </div>
    )
}



function Postview(props){
    return (
        <div>
            <Row>
                <Col sm="12" md={{ size: 8, offset: 2}}>
                <h1>{props.title}</h1>
                </Col>
            </Row>
            <Row>
                <Col sm="12" md={{ size: 8, offset: 2 }}>
                <Media>
                    <Media body>
                    <p class="datetime">{props.updated_on},🍢 {props.time} min to read</p>
                    < Splitcontent content={props.content} />
                    </Media>
                </Media>
                
                </Col>
            </Row>
           
        </div>
    )
}



class PostDetail extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            post_data: [],
        }
    }
    

    render(){
        return(
            
           <Container>
               {/* <Row>
               <Col sm="12" md={{ size: 8, offset: 2 }}>
                   <h1>走过落雪时分</h1>
                </Col>
                
               </Row>
               <Row>
               <Col sm="12" md={{ size: 8, offset: 2 }}>
                   <Media>
                       <Media body>
                       <p class="datetime">Jan 1, 2020, 🍢 5 min to read </p>
                       <p class="para">从来没有想过一部科幻片可以略去打斗、血腥转向慢条斯理的哲学命题的探索，但是
毫无疑问，《银翼杀手2049》做到了。时隔三十五年，接棒公认的科幻第一经典，即便是
有斯科特的大力支持，依然要佩服导演丹尼斯的勇气与才华，将复制人与人类的故事延续
下去。既对前作不失敬意又保持不卑不亢的态度讲述新的内容，这是不容易的。
</p>
                        <p class="para">
                        其实如果仅仅只谈影片的故事情节、人物形象甚至是颇具诚意的场景设置，《银翼杀手
2049》都顶多可算是没有拉低电影档次，但也无法挑出能够成为影坛经典的地方了。毕竟
前一部《银翼杀手》已经深入人心，又是赛博朋克风格的开山祖师，原本视听就已经具有
相当的高度，颠覆或者超越几乎没有可能。难得的是丹尼斯花费了大气力去延续外在水准
之外，仍然能够将作品重心放在主题内核之上，准确找到前作的薄弱之处然后在续集中精
雕细琢，使《银翼杀手2049》相较第一部而言显得作品内涵更为丰厚，冲突更为复杂，人
物的内心情感更为曲折细腻，更具备让观影者反复推敲的资本。
                        </p>
                       </Media>
                   </Media>
                   </Col>
               </Row> */}
                <Postview  title="走过落雪时分" updated_on="May 24, 2020" time="20" content="从来没有想过一部科幻片可以略去打斗、血腥转向慢条斯理的哲学命题的探索，但是毫无疑问，《银翼杀手2049》做到了。时隔三十五年，接棒公认的科幻第一经典，即便是有斯科特的大力支持，依然要佩服导演丹尼斯的勇气与才华，将复制人与人类的故事延续下去。既对前作不失敬意又保持不卑不亢的态度讲述新的内容，这是不容易的. 其实如果仅仅只谈影片的故事情节、人物形象甚至是颇具诚意的场景设置，《银翼杀手 2049》都顶多可算是没有拉低电影档次，但也无法挑出能够成为影坛经典的地方了。
毕竟 前一部《银翼杀手》已经深入人心，又是赛博朋克风格的开山祖师，原本视听就已经具有 相当的高度，颠覆或者超越几乎没有可能。难得的是丹尼斯花费了大气力去延续外在水准 之外，仍然能够将作品重心放在主题内核之上，准确找到前作的薄弱之处然后在续集中精雕细琢，使《银翼杀手2049》相较第一部而言显得作品内涵更为丰厚，冲突更为复杂，人 物的内心情感更为曲折细腻，更具备让观影者反复推敲的资本。
                " postid="0" />
           </Container>
        
        )
    }
}
export default PostDetail;