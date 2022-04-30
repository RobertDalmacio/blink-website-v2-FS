import Head from 'next/head'
import {Container, Row, Col} from 'reactstrap'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>BLINK | Home</title>
        <meta name="description" content="Blackpink Official Fan page" />
        <link rel="icon" href="/logos/blink-logo.jpg" />
      </Head>

      <Container fluid className='section d-flex flex-column min-vh-100'>
        <Row>
          <video className="d-none d-md-block w-100 mx-auto" src="/videos/Blink-Intro.mp4" autoPlay muted loop></video>
        </Row>

        <Row className="text-center py-5 section-title">
          <h1 className="text-secondary">Follow BLACKPINK&apos;s Official SNS Pages:</h1>
        </Row>

        <Row className="text-center mx-5">
          <Col xs='6' md='2'>
            <a href="https://www.youtube.com/BLACKPINKOFFICIAL" target="_blank" rel="noreferrer">
              <Image width="150px" height="150px" src="/logos/youtube_pink.webp" alt='pink youtube logo'/>
            </a>
          </Col>
          <Col xs='6' md='2'>
            <a href="https://www.facebook.com/BLACKPINKOFFICIAL" target="_blank" rel="noreferrer">
              <Image width="150px" height="150px" src="/logos/facebook_pink.webp" alt='pink facebook logo'/>
            </a>
          </Col>
          <Col xs='6' md='2'>
            <a href="https://www.weibo.com/ygblackpinkofficial" target="_blank" rel="noreferrer">
              <Image width="150px" height="150px" src="/logos/weibo_pink.webp" alt='pink weibo logo'/>
            </a>
          </Col>
          <Col xs='6' md='2'>
            <a href="https://www.instagram.com/BLACKPINKOFFICIAL" target="_blank" rel="noreferrer">
              <Image width="150px" height="150px" src="/logos/instagram_pink.webp" alt='pink instagram logo'/>
            </a>
          </Col>
          <Col xs='6' md='2'>
            <a href="https://twitter.com/BLACKPINK" target="_blank" rel="noreferrer">
              <Image width="150px" height="150px" src="/logos/twitter_pink.webp" alt='pink twitter logo'/>
            </a>
          </Col>
          <Col xs='6' md='2'>
            <a href="https://channels.vlive.tv/F001E5" target="_blank" rel="noreferrer">
              <Image width="150px" height="150px" src="/logos/vlive_pink.webp" alt='pink vlive logo'/>
            </a>
          </Col>

        </Row>
      </Container>

    </>
  )
}
