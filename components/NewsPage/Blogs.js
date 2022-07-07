import { FaEdit, FaTrash } from 'react-icons/fa'
import { Button, Card, CardBody, CardImg, CardTitle, Col, Row } from 'reactstrap'
import BadgeComp from '../NewsPage/BadgeComp'

const Blogs = ({title,category, imageUrl, id, handleDelete}) => {
    return (
        <Col>
            <Card style={{backgroundColor: '#FFB8C1', width:'1080px'}} className="mb-2 text-center">
                <Row style={{maxHeight: '200px'}}>
                    <Col xs='4' style={{backgroundColor: '#000', maxHeight: '200px', margin: '0'}}>
                        <CardImg 
                            src={imageUrl} 
                            alt={title} 
                            style={{width: 'auto', height: '200px', margin:'auto'}}
                        />
                    </Col>
                    <Col xs='8' className='d-flex' style={{maxHeight: '200px'}}>
                        <CardBody style={{margin: 'auto'}}>
                            <CardTitle>
                                <h3 className='fw-bold text-center'>{title}</h3>
                            </CardTitle>
                            <Row>
                                <Col xs={4} style={{position: 'absolute', left:'535px', top:'10px'}}>
                                    <BadgeComp>{category}</BadgeComp>
                                </Col>
                                <Col xs={4}>
                                </Col>
                                <Col xs={4} className='d-flex'>
                                    <Button style={{backgroundColor: '#000', position: 'absolute', left:'665px', bottom:'10px'}} >
                                        <a style={{color: 'white', textDecoration: 'none'}} href={`/news/blog/${id}`}>Read More</a>
                                    </Button>
                                </Col>

                            </Row>
                            {/* <CardText>{excerpt(description)}</CardText> */}
                        </CardBody>
                        <span>
                            <Button className="mt-1" tag='a' color='none' onClick={()=> handleDelete(id)} style={{backgroundColor: '#000', position: 'absolute', top: '1px', right: '50px'}}>
                                <FaTrash style={{color: '#dd4b39'}} size={20}/>             
                            </Button>
                            <Button style={{backgroundColor: '#000', position: 'absolute', top: '5px', right:'0px'}}>
                                <a href={'/news/editblog/' + id} passHref>
                                    <FaEdit style={{color: '#55acee'}} size={23}/>  
                                </a>
                            </Button>
                        </span>
                    </Col>
                </Row>
            </Card>
        </Col>
    )
}


export default Blogs
