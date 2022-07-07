import { Card, CardBody, CardImg, Col, Row } from 'reactstrap'

const LatestBlog = ({imageUrl, title, id}) => {
    return (
        <div className="text-center">
            <a href={`/news/blog/${id}`} style={{textDecoration: 'none'}}>
                <Card style={{width: '450px', background: '#f34279'}} className="mt-2">
                    <Row style={{maxHeight: '100px'}}>
                        <Col xs='4' style={{backgroundColor: '#000', maxHeight: '100px', margin: '0'}}>
                            <CardImg 
                                src={imageUrl}
                                alt={title}
                                style={{width: 'auto', height: '100%'}}
                            />
                        </Col>
                        <Col xs='8'>
                            <CardBody>
                                <p className="text-center latest-title">{title}</p>
                            </CardBody>
                        </Col>
                    </Row>
                </Card>
            </a>
        </div>
    )
}

export default LatestBlog
