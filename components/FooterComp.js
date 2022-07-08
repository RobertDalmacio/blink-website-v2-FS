/* eslint-disable @next/next/no-html-link-for-pages */
import Image from 'next/image'
import { Button, Col, Container, Form, FormGroup, Input, Row } from 'reactstrap'

const FooterComp = () => {
    
    return (
        <footer className="mt-auto">
            <div className="bg-secondary mt-5 pt-5">
                <Container>
                    <Row>
                        <Col lg='4' className='mb-5 mb-lg-0 text-center' >
                            <h5 className="fw-bold text-uppercase text-decoration-underline  mb-3">About Us</h5>
                            <p>We aim to be your No. 1 and most reliable source for all things BLACKPINK.</p>
                            <p>We will do our best to provide you the latest news and media of the girls, for BLINKs, by BLINKs.</p>
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <a className="me-1" href="#">
                                        <Image src='/logos/facebook.svg' alt='facebook logo' width={30} height={30}/>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="me-1" href="#">
                                        <Image src='/logos/twitter.svg' alt='twitter logo' width={30} height={30}/>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="me-1" href="#">
                                        <Image src='/logos/youtube.svg' alt='youtube logo' width={30} height={30}/>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="me-1" href="#">
                                        <Image src='/logos/instagram.svg' alt='instagram logo' width={30} height={30}/>
                                    </a>
                                </li>
                            </ul>
                        </Col>

                        <Col md='6' lg='4' className='mb-5 mb-lg-0 text-center'>
                            <h5 className="fw-bold text-uppercase text-decoration-underline mb-3">Forum Pages</h5>
                            <ul className="list-unstyled">
                                <li><a className="text-decoration-none" href="/forum/b/BLACKPINK">BLACKPINK</a></li>
                                <li><a className="text-decoration-none" href="/forum/b/Jisoo">Jisoo</a></li>
                                <li><a className="text-decoration-none" href="/forum/b/Jennie">Jennie</a></li>
                                <li><a className="text-decoration-none" href="/forum/b/Lisa">Lisa</a></li>
                                <li><a className="text-decoration-none" href="/forum/b/Rose">Rosé</a></li>
                                <li><a className="text-decoration-none" href="/forum/b/BLINK">BLINK</a></li>
                            </ul>
                        </Col>

                        <Col md='6' lg='4' className='mb-5 mb-lg-0 text-center'>
                            <h5 className="fw-bold text-uppercase text-decoration-underline mb-3">Sign Up For Our Newsletter</h5>
                            <p>Join for a weekly curated email with all the latest news surrounding BLACKPINK.</p>
                            <Form id='newsletter-form' className='d-flex justify-content-center'>
                                <FormGroup className="mb-3">
                                    <Input type='email' className='border border-success border-end-0 mt-3 ' placeholder="Your Email Address"/>
                                </FormGroup>
                                <Button className='btn-secondary py-0 my-0' type='submit' style={{fontSize: '0.1rem'}}>
                                    <Image src='/logos/newsletter.svg' alt='newsletter icon' height={30} width={30}/>
                                </Button>
                            </Form>

                        </Col>
                    </Row>
                </Container>
            </div>
        </footer>
    )
}

export default FooterComp;