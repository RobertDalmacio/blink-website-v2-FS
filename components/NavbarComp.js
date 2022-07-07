import Image from 'next/image';
import { useState } from 'react';
import { Collapse, Container, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';

const NavbarComp = () => {
    const [isCollapsed, setCollapsed] = useState(false)

    const toggleMenuMobile = () => {
        setCollapsed(!isCollapsed)
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
                        </Nav>
                    </Collapse>
            </Navbar>
        </Container>
    )
}

export default NavbarComp;