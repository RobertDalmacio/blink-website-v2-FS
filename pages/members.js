import Head from 'next/head'
import {Container, Row} from 'reactstrap'
import {BiographyData} from '../data/BiographyData'
import BiographyAccordion from '../components/BiographyAccordion'

const Members = () => {
    const membersData = BiographyData
    
    return (
        <>
            <Head>
                <title>BLINK | Members</title>
                <meta name="description" content="Blackpink Official Fan page" />
                <link rel="icon" href="/logos/blink-logo.jpg" />
            </Head>
            
            <Container fluid className='section d-flex flex-column min-vh-100'>
                <Row className='text-center section-title'>
                    <h1 className="text-secondary">Members</h1>
                </Row>
                
                <Row className='justify-content-center'> 
                    <BiographyAccordion membersData={membersData} />
                </Row>
            </Container>
        </>
    )
}

export default Members;