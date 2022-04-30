import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import axios from 'axios'
import {Row, Col, Container, Button} from 'reactstrap'
import {toast, ToastContainer} from 'react-toastify'
import Blogs from '../../components/NewsPage/Blogs'
import Search from '../../components/NewsPage/Search'
import Category from '../../components/NewsPage/Category'
import LatestBlog from '../../components/NewsPage/LatestBlog'
import PaginationComp from '../../components/NewsPage/Pagination'

const News = () => {
    const [data,setData] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const [latestBlog, setLatestBlog] = useState([])
    const [currentPage, setCurrentPage] = useState(0)
    const [totalBlog, setTotalBlog] = useState(null)
    const [pageLimit] = useState(5)
    
    useEffect(() => {
        loadBlogsData(0, 5, 0)
        fetchLatestBlog()
    }, [totalBlog])

    const options = ['Music', 'Endorsements', 'ShowAppearances', 'LiveStages', 'MagazineFeatures']

    const loadBlogsData = async (start, end, increase, operation) => {
        const totalBlog = await axios.get(`http://localhost:5000/blogs`)
        setTotalBlog(totalBlog.data.length)
    
        const response = await axios.get(`http://localhost:5000/blogs?_start=${start}&_end=${end}`)
        if(response.status === 200) {
            setData(response.data)
            if (operation) {
                setCurrentPage(0)
            } else {
                setCurrentPage(currentPage + increase)
            }
        } else {
            toast.error("Something went wrong")
        }
    }

    const handleDelete = async (id) => {
        if(window.confirm('Are you sure you want to delete that blog?')) {
            const response = await axios.delete(`http://localhost:5000/blogs/${id}`)
                if(response.status === 200) {
                    toast.success('Blog Deleted Successfully')
                    loadBlogsData(0, 5, 0, 'delete')
                } else {
                    toast.error("Something went wrong")
                }
        }
    }

    const excerpt = (str) => {
        if(str.length > 200) {
            str = str.substring(0, 200) + "..."
        }
        return str
    }

    const onInputChange = (e) => {
        if(!e.target.value) {
            loadBlogsData(0, 5, 0)
        }
        setSearchValue(e.target.value)
    }

    const handleSearch = async (e) => {
        e.preventDefault()
        const response = await axios.get(`http://localhost:5000/blogs?q=${searchValue}`)
        if (response.status === 200) {
            setData(response.data)
        } else {
            toast.error("Something went wrong")
        }
    }

    const handleCategory = async (category) => {
        const response = await axios.get(`http://localhost:5000/blogs?category=${category}`)
        console.log(response.data)
        if (response.status === 200) {
            setData(response.data)
        } else {
            toast.error("Something went wrong")
        }
    }

    const fetchLatestBlog = async () => {
        const totalBlog = await axios.get(`http://localhost:5000/blogs`)
        const start = totalBlog.data.length - 4
        const end = totalBlog.data.length
        const response =  await axios.get(`http://localhost:5000/blogs?_start=${start}&_end=${end}`)
        if (response.status === 200) {
            setLatestBlog(response.data)
        } else {
            toast.error("Something went wrong")
        }
    }

    return (
        <>
            <Head>
                <title>BLINK | Latest News</title>
                <meta name="description" content="Blackpink Official Fan page" />
                <link rel="icon" href="/logos/blink-logo.jpg" />
            </Head>
            
            <Row className='text-center section-title'>
                <h1 className="text-secondary">Latest News</h1>           
            </Row>

            <div style={{textAlign: 'center'}}>
                <Button size='lg' className='mt-3' style={{background: '#FFB8C1'}}>
                    <a href={'/news/addblog'} style={{color: '#000', textDecoration: 'none', fontWeight: 'bold'}}>
                        Add New Blog
                    </a>
                </Button>
            </div>
            
            <Search searchValue={searchValue} onInputChange={onInputChange} handleSearch={handleSearch}/>
            
            <Row>
                {data.length === 0 && (
                    <div className="text-center mb-0">
                        <h2 style={{color: '#fff'}}>No Blog Found</h2>
                    </div>
                )}

                <Col>
                    <Container>
                        <Row>
                            {data && data.map((item, index)=> (
                                <Blogs 
                                    key={index} 
                                    {...item} 
                                    excerpt={excerpt}
                                    handleDelete={handleDelete}
                                />
                            ))}
                        </Row>
                    </Container>
                </Col>
                
                <Col xs='4'>
                    <h4 className='text-start' style={{color: '#f34279', textDecoration: 'underline'}}>Latest Post</h4>
                    {latestBlog && latestBlog.map((item, index)=> (
                        <LatestBlog key={index} {...item}/>
                    ))}
                    <Category options={options} handleCategory={handleCategory} loadBlogsData={loadBlogsData}/>
                </Col>
            </Row>
            
            <div className="mt-3">
                <PaginationComp currentPage={currentPage} loadBlogsData={loadBlogsData} pageLimit={pageLimit} data={data} totalBlog={totalBlog}/>
            </div>
        
            <ToastContainer autoclose={1000}/>
        </>
    )
}

export default News
