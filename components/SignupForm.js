import { Col, Button, Form, FormGroup, FormFeedback, Label, Input, FormText, Container, Row } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

const SignupForm = () => {
    return ( 
        <Container>
            <h1 className="ms-2 text-center">
                <strong>Blackpink Global Official Fanclub</strong>
            </h1>
            <p className="mx-2 text-center">
                <strong>Fill details below to join a fan community where BLINKs interact, connect, and create torgether!</strong>
            </p>
            <hr/>

            <div className="text-center mb-3">
                <h4>Sign up with:</h4>
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
            </div>

            <Row className="justify-content-center">
                <Col md='10' lg='8' mb='3'>
                    <FormGroup>
                        <Label className='mb-1' for='username' id='name-label'>
                            <strong>Name / Username: </strong>
                        </Label>
                        
                        {/* setup valid and invalid */}
                        <Input id='name' type="text" name="name" required/>
                        <FormFeedback valid>Sweet! that name is available</FormFeedback>
                        <FormFeedback>Oh noes! that name is already taken</FormFeedback>
                    </FormGroup>
                </Col>
            </Row>

            <Row className="justify-content-center">
                <Col xs='6' md='5' lg='4' mb='3'>
                    <FormGroup>
                        <Label className='mb-1' for='password' id='password-label'>
                            <strong>Password: </strong>
                        </Label>
                        <Input id='password' type="password" name="password" required/>
                    </FormGroup>
                </Col>

                <Col xs='6' md='5' lg='4' mb='3'>
                    <FormGroup>
                        <Label className='mb-1' for='verPassword' id='verPassword-label'>
                            <strong>Verify Password: </strong>
                        </Label>
                        
                        {/* setup valid and invalid */}
                        <Input id='verPassword' type="password" name="verPassword" required/>
                        <FormFeedback valid>Password Matches!</FormFeedback>
                        <FormFeedback>Please check that both passwords are te same.</FormFeedback>
                    </FormGroup>
                </Col>
            </Row>

            <Row className="justify-content-center">
                <Col md='10' lg='8' className="mb-3">
                    <Label className='mb-1' for='email' id='email-label'>
                        <strong>E-mail: </strong>
                    </Label>
                    <Input id="email" type="email" name="email" required/>
                </Col>
            </Row>

            <Row className="justify-content-center">
                <Col md='10' lg='8' className="mb-3"> 
                    <Label className='mb-1' for='favouriteSong' id='favouriteSong-label'>
                        <strong> Favorite Song: </strong> 
                    </Label>
                    <Input id='favouriteSong' type="select" name='favouriteSong'>
                        <option value="BOOMBAYAH"> BOOMBAYAH </option>
                        <option value="WHISTLE"> WHISTLE </option>
                        <option value="PLAYING_WITH_FIRE"> PLAYING WITH FIRE </option>
                        <option value="STAY"> STAY </option>
                        <option value="AS_IF_IT'S_YOUR_LAST"> AS IF IT&apos;S YOUR LAST </option>
                        <option value="DDU-DU_DDU-DU"> DDU-DU DDU-DU</option>
                        <option value="FOREVER_YOUNG"> FOREVER YOUNG </option>
                        <option value="REALLY"> REALLY </option>
                        <option value="SEE_U_LATER"> SEE U LATER </option>
                        <option value="KILL_THIS_LOVE"> KILL THIS LOVE </option>
                        <option value="HOW_YOU_LIKE_THAT"> HOW YOU LIKE THAT </option>
                        <option value="ICE_CREAM"> ICE CREAM </option>
                        <option value="PRETTY_SAVAGE"> PRETTY SAVAGE </option>
                        <option value="BET_YOU_WANNA"> BET YOU WANNA </option>
                        <option value="LOVESICK_GIRLS"> LOVESICK GIRLS </option>
                        <option value="CRAZY_OVER_YOU"> CRAZY OVER YOU </option>
                        <option value="LOVE_TO_HATE_ME"> LOVE TO HATE ME </option>
                        <option value="YOU_NEVER_KNOW"> YOU NEVER KNOW </option>
                        <option value="SOLO"> SOLO </option>
                        <option value="ON_THE_GROUND"> ON THE GROUND </option>
                        <option value="GONE"> GONE </option>
                        <option value="LALISA"> LALISA </option>
                        <option value="MONEY"> MONEY </option>
                    </Input>
                </Col>
            </Row>

            <Row className="justify-content-center">
                <Col md='10' lg='8' className="mb-3"> 
                    <Label className="mb-1" for="loyalty" id="loyalty-label"> 
                        <strong> Years as a BLINK: </strong> 
                    </Label> <br />
                    <FormGroup check inline>
                        <Label check>
                            <Input type="radio" name="loyalty" />{' '}
                                &lt; 1 Year
                        </Label>
                    </FormGroup>
                    <FormGroup check inline>
                        <Label check>
                            <Input type="radio" name="loyalty" />{' '}
                            1 - 2 Years
                        </Label>
                    </FormGroup>
                    <FormGroup check inline>
                        <Label check>
                            <Input type="radio" name="loyalty" />{' '}
                            2 - 4 Years
                        </Label>
                    </FormGroup>
                    <FormGroup check inline>
                        <Label check>
                            <Input type="radio" name="loyalty" />{' '}
                            4+ Years
                        </Label>
                    </FormGroup>
                </Col>
            </Row>

            <Row className="justify-content-center">
                <Col md='10' lg='8' className="mb-3"> 
                    <Label for="favoriteMember" className="mb-1" id="favoriteMember-label">
                        <strong> Favorite Member: </strong> (Can Pick More Than One) 
                    </Label> <br />
                    <FormGroup check inline>
                        <Input type="checkbox" />
                            <Label check>
                                Jisoo
                            </Label>
                    </FormGroup>
                    <FormGroup check inline>
                        <Input type="checkbox" />
                            <Label check>
                                Jennie
                            </Label>
                    </FormGroup>
                    <FormGroup check inline>
                        <Input type="checkbox" />
                            <Label check>
                                Rosé
                            </Label>
                    </FormGroup>
                    <FormGroup check inline>
                        <Input type="checkbox" />
                            <Label check>
                                Lisa
                            </Label>
                    </FormGroup>
                </Col>
            </Row>

            <Row>
                <Col xs='11' className='mb-3 text-end'>
                    <button type="button" className="rounded-pill btn-rounded">
                        Submit
                        <span>
                            <FontAwesomeIcon icon={faPaperPlane} className="text-primary mt-2 w-50" />
                        </span>
                    </button>
                </Col>
            </Row>
        </Container>
    )
}

export default SignupForm;