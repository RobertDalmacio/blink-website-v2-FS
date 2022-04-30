import {Card, CardTitle, CardSubtitle, CardBody} from 'reactstrap'
import Image from 'next/image'
import Carousel from 'react-elastic-carousel'

const AlbumsCarousel = ({albumsData}) => {
    return (
        <Carousel itemsToShow={5} >
            {albumsData.map((album) => {
                return (
                    <Card className="bg-success mt-5" key={album.id} style={{maxWidth:'255px'}}>
                        <CardTitle>
                            <h5 className="text-primary fw-bold">
                                {album.albumTitle}
                            </h5>
                            <CardSubtitle>
                                <blockquote className='blockquote-footer pt-1 mb-1 d-none d-md-block'>
                                    Release date: {album.releaseDate}
                                </blockquote>
                            </CardSubtitle>
                        </CardTitle>
                        <Image  className='mx-auto' src={album.image} alt={album.albumTitle} height={250} width={250} layout='fixed'/>
                        <CardBody>
                            <ol className="list-group list-group-numbered overflow-scroll" style={{maxHeight:'20vh'}}>
                                {album.songsList.map((song)=> {
                                    return (
                                        <li className="list-group-item" key={song.id} style={{fontSize:'0.8rem'}}>
                                            <strong>{song.song}</strong> <em>{song.songDetails}</em>
                                        </li>
                                        )
                                    })}
                            </ol>
                            <div className="d-flex flex-row-reverse mt-2">
                                <a href={album.spotifyPlaylist} target='_blank' rel="noreferrer">
                                    <Image src='/logos/spotify.png' alt='spotify logo' height={20} width={20} />
                                </a>
                            </div>
                        </CardBody>
                    </Card>
                )
            })}
        </Carousel>
    )
}

export default AlbumsCarousel;