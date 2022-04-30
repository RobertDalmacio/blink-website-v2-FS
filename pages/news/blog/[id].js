import React, {useState, useEffect} from 'react'
import {Col, Row, Card, CardTitle, CardBody, CardImg, Container, Button} from 'reactstrap'
import {FaCalendarAlt} from 'react-icons/fa'
import axios from 'axios'
import BadgeComp from '../../../components/NewsPage/BadgeComp'
import { toast, ToastContainer } from 'react-toastify'

const Blog = ({blogs}) => {
    const [blog, setBlog] = useState()
    const [relatedPost, setRelatedPost] = useState([])

    useEffect(() => {
        getSingleBlog()
    }, [])
    
    const getSingleBlog = async () => {
        const response = await axios.get(`http://localhost:5000/blogs/${blogs.id}`)
        const relatedPostData = await axios.get(`http://localhost:5000/blogs?category=${response.data.category}&_start=0&_end=3`)
        if(response.status === 200 || relatedPostData.status === 200) {
            console.log(response.data)
            setBlog(response.data)
            setRelatedPost(relatedPostData.data)
        } else {
            toast.error('Something went wrong')
        }
    }

    // excerpt for description function
    // const excerpt = (str) => {
    //     if(str.length > 50) {
    //         str = str.substring(0, 50) + "..."
    //     }
    //     return str
    // }

    const styleInfo = {
        display: 'inline',
        marginLeft: '5px',
        float: 'right',
        marginTop: '7px'
    }

    return (
        <Container style={{border: '1px solid #d1ebe8', background: '#FFB8C1'}} className='text-center'>
            <Button size='lg' style={{background: '#000', position: 'absolute', top: '150px', left: '210px'}}>
                <a style={{color: 'white', textDecoration: 'none'}} href={`/news`}>Go Back</a>
            </Button>
            <h2 className='my-4 text-center fw-bold'>
                {blog && blog.title}
            </h2>
            
            <div style={{background: '#000'}}>
                <img
                    src={blog && blog.imageUrl}
                    className='img-fluid rounded'
                    alt={blog && blog.title}
                    style={{width:'50%', height: 'auto'}}
                />
            </div>
            
            <div style={{marginTop: '20px'}}>
                <div style={{height: '40px', background: '#f34279'}} className=''>
                    <FaCalendarAlt
                        style={{float:'left', marginTop:'8px', marginLeft:'2px'}}
                        icon='calendar-alt'
                        size={20}
                    />
                    <strong style={{float: 'left', marginTop:'7px', marginLeft:'2px'}}>
                        {blog && blog.date}
                    </strong>
                    <BadgeComp styleInfo={styleInfo}>{blog && blog.category}</BadgeComp>
                </div>
                <p className='lead md-0' style={{background: '#f8f9fa'}}>
                    {blog && blog.description}
                </p>
            </div>
            
            {relatedPost && relatedPost.length > 0 && (
                <>
                    {relatedPost.length > 1 && <h1>Related Posts</h1>}
                    <Row className='row-cols-1 row-cols-md-3 g-4'>
                        {relatedPost
                        .filter((item) => item.id != blogs.id)
                        .map((item, index) => (
                            <Col key={index}>
                                <Card>
                                    <a href={`/news/blog/${item.id}`} style={{backgroundColor: '#000'}}>
                                        <CardImg src={item.imageUrl} alt={item.title} position='top'
                                        style={{width: 'auto', height: '200px', margin:'auto'}}/>
                                    </a>
                                    <CardBody style={{backgroundColor: '#f34279', height: '90px'}}>
                                        <CardTitle><h5>{item.title}</h5></CardTitle>
                                        {/* <CardText>{excerpt(item.description)}</CardText> */}
                                    </CardBody>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </>
            )}
            <ToastContainer autoClose={1000}/>
        </Container>
    )
}

export const getStaticPaths = async () => {
    const response = await fetch('http://localhost:5000/blogs/')
    const data = await response.json()

    const paths = data.map(blog => {
        return {
            params: {id: blog.id.toString()}
        }
    })

    return {
        paths: paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id
    const response = await fetch('http://localhost:5000/blogs/' + id)
    const data = await response.json()

    return {
        props: {blogs:data}
    }
}

export default Blog
