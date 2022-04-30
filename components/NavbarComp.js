import React, {useState} from 'react';
import {Nav, Navbar, NavbarBrand, NavItem, NavLink, Button, Container, NavbarToggler, Collapse, Modal, ModalHeader, ModalBody, TabContent, TabPane} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import classnames from 'classnames'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import Link from 'next/link'

const NavbarComp = () => {
    const [isCollapsed, setCollapsed] = useState(false)
    const [modal, setModal] = useState(false)
    const [activeTab, setActiveTab] = useState('1')

    const toggleMenuMobile = () => {
        setCollapsed(!isCollapsed)
    }

    const toggleLoginModal = () => {
        setModal(!modal)
    }

    return (
        <Container fluid>
            <Navbar dark expand='lg' className='menu'>
                <NavbarBrand>
                    <Image src="/logos/BP_LOGO_x150.png" alt="BlackPink Logo" width={240} height={75}/>
                    <h4 className="px-4 text-secondary">Official Fan Page</h4>
                </NavbarBrand>
                <NavbarToggler onClick={toggleMenuMobile}/>
                    <Collapse navbar className="navbar-collapse justify-content-end" isOpen={isCollapsed}>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className='text-secondary active' href='/'>
                                    Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="text-secondary" href="/members">
                                    Members
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="text-secondary" href="/albums">
                                    Discography
                                </NavLink>
                            </NavItem>        
                            <NavItem>
                                <NavLink className="text-secondary" href="/news">
                                    Latest News
                                </NavLink>
                            </NavItem>        
                            <NavItem>
                                <NavLink className="text-secondary" href="/forum">
                                    Forum
                                </NavLink>
                            </NavItem>
                            {/* <Button 
                                type="button" 
                                className="rounded-pill btn-rounded" 
                                onClick={toggleLoginModal}
                            >
                                Login / Sign Up
                                <span>
                                    <FontAwesomeIcon icon={faUser} className="text-primary mt-2 w-50" />
                                </span>
                            </Button>
                            <Modal isOpen={modal} toggle={toggleLoginModal} size='lg' >
                                <ModalHeader toggle={toggleLoginModal} className='bg-secondary justify-content-center' >
                                    <Nav pills tabs>
                                        <NavItem >
                                            <NavLink 
                                                className={classnames({active: activeTab === '1'})}
                                                onClick={()=> setActiveTab('1')}
                                            >
                                                Login
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink 
                                                className={classnames({active: activeTab === '2'})}
                                                onClick={()=> setActiveTab('2')}
                                            >
                                                Sign Up
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                </ModalHeader>
                                <ModalBody className='bg-secondary'>
                                    <TabContent activeTab={activeTab}>
                                        <TabPane tabId='1'>
                                            <LoginForm />
                                        </TabPane>
                                        <TabPane tabId='2'>
                                            <SignupForm />
                                        </TabPane>
                                    </TabContent>
                                </ModalBody>
                            </Modal> */}
                        </Nav>
                    </Collapse>
            </Navbar>
        </Container>
    )
}

export default NavbarComp;