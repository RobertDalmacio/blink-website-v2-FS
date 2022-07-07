import { LayoutProps } from 'framer-motion';
import { PropsWithChildren } from 'react';
import NavbarForum from '../NavbarForum/NavbarForum';

const Layout:React.FC<PropsWithChildren<LayoutProps>> = ({children} ) => {
    return (
        <>  
            <NavbarForum />
            <main>{children}</main>
        </>
    )
}
export default Layout;