import React, {Fragment} from "react";
import SimplePage from "../Components/SimplePage";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import {
    Button,
    Card,
    CardBody,
    CardTitle,
    Col,
    Container,
    Form,
    FormFeedback,
    FormGroup, FormText,
    Input,
    Label,
    Row
} from "reactstrap";
import { IoIosMail } from "react-icons/io";

class Contact extends React.Component {
    render() {
        return (
            <SimplePage>
                <Fragment>
                    <ReactCSSTransitionGroup
                        component="div"
                        transitionName="TabsAnimation"
                        transitionAppear={true}
                        transitionAppearTimeout={0}
                        transitionEnter={false}
                        transitionLeave={false}>
                        <h2 className="mb-4" style={{textAlign: "center", fontWeight: "bold", textDecorationLine: "underline", textUnderlinePosition: "under"}}>Indoor<span style={{color: "#e67e22"}}>Plus+</span> 문의하기</h2>
                        <div className="row">
                            <div className="col-6"></div>
                            <Container fluid className={"col-6 text-white"}>
                                <Card className="main-card mb-3" style={{backgroundColor: "#273238", fontWeight: "bold"}}>
                                    <CardBody>
                                        <CardTitle className={"text-white mb-2"} style={{fontSize: "1.5rem"}}>
                                            <IoIosMail size="2.5rem" color="#fff" style={{verticalAlign: "top", marginRight: "5px"}}/>문의하기
                                        </CardTitle>
                                        <Form>
                                            <Row form>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label for="name">이름 *</Label>
                                                        <Input type="text" name="name" id="name"/>
                                                        {/*<FormFeedback>You will not be able to see this</FormFeedback>
                                                        <FormText>Example help text that remains unchanged.</FormText>*/}
                                                    </FormGroup>
                                                </Col>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label for="phone">전화번호</Label>
                                                        <Input type="text" name="phone" id="phone"/>
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <FormGroup>
                                                <Label for="email">이메일 *</Label>
                                                <Input type="email" name="email" id="email"/>
                                                {/*<FormFeedback>You will not be able to see this</FormFeedback>
                                                <FormText>Example help text that remains unchanged.</FormText>*/}
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="msg">메시지 *</Label>
                                                <Input type="textarea" name="msg" id="msg" rows={5}/>
                                                {/*<FormFeedback>You will not be able to see this</FormFeedback>
                                                <FormText>Example help text that remains unchanged.</FormText>*/}
                                            </FormGroup>
                                            <FormGroup check>
                                                <Input type="checkbox" name="reqSample" id="reqSample"/>
                                                <Label for="reqSample" check>샘플 신청</Label>
                                            </FormGroup>
                                            <FormGroup style={{textAlign: "center"}}>
                                                <Button style={{backgroundColor: "#e67e22", borderColor: "#e67e22"}} className="mt-2" onClick={(e)=>{e.preventDefault();}}>보내기</Button>
                                            </FormGroup>
                                        </Form>

                                    </CardBody>
                                </Card>
                            </Container>
                        </div>


                    </ReactCSSTransitionGroup>
                </Fragment>
            </SimplePage>
        );
    }
}

export default Contact;