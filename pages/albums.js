import Head from 'next/head'
import {Container, Row} from 'reactstrap'
import { AlbumsData } from '../data/AlbumsData'
import AlbumsCarousel from '../components/AlbumsCarousel'

const Albums = () => {
    const albumsData = AlbumsData
    
    return (
        <>
            <Head>
                <title>BLINK | Discography</title>
                <meta name="description" content="Blackpink Official Fan page" />
                <link rel="icon" href="/logos/blink-logo.jpg" />
            </Head>
            
            <Container fluid className='section d-flex flex-column min-vh-100'>
                <Row className='text-center section-title'>
                    <h1 className="text-secondary">Discography</h1>
                </Row>

                <AlbumsCarousel albumsData={albumsData}/>
            </Container>
        </>
    )
}

export default Albums;