import { Col, Button, Form, FormGroup, Label, Input, FormText, Container, Row } from 'reactstrap'
import Image from 'next/image'

const LoginForm = () => {
    return ( 
        <Container fluid>
            <Row>
                <Col lg={6}>
                    <Form>
                        <div className="text-center mb-3">
                            <h4>Sign in with:</h4>
                            <Button color='secondary' className="mx-0">
                                <Image src='/logos/facebook.svg' alt='facebook logo' width={30} height={30}/>
                            </Button>
                            <Button color='secondary' className="mx-0">
                                <Image src='/logos/twitter.svg' alt='twitter logo' width={30} height={30}/>
                            </Button>
                            <Button color='secondary' className="mx-0">
                                <Image src='/logos/reddit.svg' alt='reddit logo' width={30} height={30}/>
                            </Button>
                            <h4 className="text-center my-2">or:</h4>

                            <Container>
                                <Row className="justify-content-center">
                                    <Col xs='8'>
                                        <FormGroup>
                                            <Input type='email' name='email' id='email' placeholder='Email or Username'/>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </Container>
                            <Container>
                                <Row className="justify-content-center">
                                    <Col xs='8'>
                                        <FormGroup>
                                            <Input type='password' name='password' id='password' placeholder='Password'/>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </Container>

                            <Container fluid>
                                <Row className='mb-2'>
                                    <Col xs='4' lg='5' className='d-flex justify-content-end'>
                                    <FormGroup check>
                                        <Label check size='sm'>
                                            <Input type="checkbox" />{' '}
                                            Remember Me
                                        </Label>
                                    </FormGroup>
                                    </Col>
                                    <Col xs='4' lg='2'></Col>
                                    <Col xs='4' lg='5' className='d-flex justify-content-start'>
                                        <Label size='sm'>
                                            <a href='#'>Forgot Password?</a>
                                        </Label>
                                    </Col>
                                </Row>
                            </Container>

                            <Button size='lg' color='primary' className='mb-5'>Sign In</Button>

                            <p>Not a member? <a href="#register">Register</a></p>
                        </div>
                    </Form>
                </Col>
                <Col lg={6} className='d-none d-lg-block' style={{position: 'relative'}}>
                    <Image src='/members/blackpink-group.png' alt='blackpink group' layout='fill' resizeMode="stretch"/>
                </Col>
            </Row>
        </Container>
    );
}

export default LoginForm;