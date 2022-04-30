import React, {useState, useEffect} from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios'
import {toast, ToastContainer} from 'react-toastify'
import { useRouter } from 'next/router'

const initialState = {
    title: '',
    description: '',
    category: '',
    imageUrl: ''
}

const options = ['Music', 'Endorsements', 'ShowAppearances', 'LiveStages', 'MagazineFeatures']

const EditBlog = ({blogs}) => {
    const [formValue, setFormValue] = useState(initialState)
    const [titleErrMsg, setTitleErrMsg] = useState(null)
    const [descriptionErrMsg, setDescriptionErrMsg] = useState(null)
    const [categoryErrMsg, setCategoryErrMsg] = useState(null)
    const {title, description, category, imageUrl} = formValue

    const router = useRouter()
    
    useEffect(()=> {
            getSingleBlog(blogs.id)
    }, [])

    const getSingleBlog = async (id) => {
        const singleBlog = await axios.get(`http://localhost:5000/blogs/${id}`)
        if(singleBlog.status === 200) {
            setFormValue({...singleBlog.data})
        } else {
            toast.error('Something went wrong')
        }
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        if(!title) {
            setTitleErrMsg('Please provide a title')
        }
        if(!description) {
            setDescriptionErrMsg('Please provide a description')
        }
        if(!category) {
            setCategoryErrMsg('Please select a category')
        }
        if(title && description && category) {

            const response = await axios.put(`http://localhost:5000/blogs/${blogs.id}`, formValue)
            if(response.status === 200) {
                toast.success('Blog Updated Successfully')
            } else {
                toast.error('Something went wrong')
            }
            
            setFormValue({title:'', description:'', category:'', imageUrl:''})
            router.push('/news')
        }
    }
    
    const onInputChange = (e) => {
        if(title) {
            setTitleErrMsg(null)
        }
        if(description) {
            setDescriptionErrMsg(null)
        }
        let {name, value} = e.target
        setFormValue({...formValue, [name]: value})
    }
    
    const onCategoryChange = (e) => {
        setCategoryErrMsg(null)
        setFormValue({...formValue, category: e.target.value})
    }

    return (
        <Form className='row g-3' style={{marginTop: '10px', background: '#FFB8C1'}} noValidate onSubmit={handleSubmit}>
            <h1 className='fs-2 fw-bold text-center'>Update Blog</h1>
            <div style={{margin: 'auto',  maxWidth: '1000px', alignContent: 'center',}}>
                <FormGroup>
                    <Label for="title" hidden>Title</Label>
                    <Input 
                        value={title || ''}
                        name ='title'
                        type='text'
                        onChange={onInputChange}
                        id='title'
                        placeholder='Title'
                        style={{background: '#fff'}}
                    />
                    {titleErrMsg && (
                        <div className="emptyErrorMsg">
                            {titleErrMsg}
                        </div>
                    )}
                </FormGroup>
                
                <FormGroup>
                    <Label for="description" hidden>Description</Label>
                    <Input
                        value={description || ''}
                        name ='description'
                        type='textarea'
                        onChange={onInputChange}
                        id='description'
                        placeholder='Description'
                        rows={10}
                        style={{background: '#fff'}}
                    />
                    {descriptionErrMsg && (
                    <div className="emptyErrorMsg">
                        {descriptionErrMsg}
                    </div>
                )}
                
                </FormGroup>
                <select className='categoryDropdown' onChange={onCategoryChange} value={category}>
                    <option>Please select category</option>
                    {options.map((option,index) => (
                        <option key={index} value={option || ''}>{option}</option>
                        ))}
                </select>
                {categoryErrMsg && (
                    <div className="emptyErrorMsg">
                        {categoryErrMsg}
                    </div>
                )}
                <br />
                <br />
                
                <div className="text-center">
                    <Button
                        type='submit' 
                        style={{marginRight: '10px', background:'#0d6efd', marginBottom:'10px'}}
                    >
                        Update
                    </Button>
                    <Button 
                        color='danger' 
                        style={{marginRight: '10px', marginBottom:'10px'}} 
                    >
                        <a style={{color: 'black', textDecoration: 'none'}} href={`/news`}>Go Back</a>
                    </Button>
                </div>

            </div>
            <ToastContainer autoClose={1000}/>
        </Form>
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

export default EditBlog
