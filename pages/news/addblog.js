import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

const initialState = {
    title: '',
    description: '',
    category: '',
    imageUrl: ''
}

const CLOUDINARY_URL = process.env.NEXT_PUBLIC_CLOUDINARY_URL
const CLOUDINARY_UPLOAD_PRESET = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET

const options = ['Music', 'Endorsements', 'ShowAppearances', 'LiveStages', 'MagazineFeatures']

const AddBlog = () => {
    const [formValue, setFormValue] = useState(initialState)
    const [titleErrMsg, setTitleErrMsg] = useState(null)
    const [descriptionErrMsg, setDescriptionErrMsg] = useState(null)
    const [imageErrMsg, setImageErrMsg] = useState(null)
    const [categoryErrMsg, setCategoryErrMsg] = useState(null)
    const {title, description, category, imageUrl} = formValue

    const router = useRouter()
    
    useEffect(()=> {
            setFormValue({...initialState})
    }, [])

    const getDate = () => {
        let today = new Date()
        let dd = String(today.getDate()).padStart(2,'0')
        let mm = String(today.getMonth() + 1).padStart(2,'0')
        let yyyy = today.getFullYear()

        today= mm + '/' + dd + '/' + yyyy
        return today
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        if(!title) {
            setTitleErrMsg('Please provide a title.')
        }
        if(!description) {
            setDescriptionErrMsg('Please provide a description.')
        }
        if(!imageUrl) {
            setImageErrMsg('Please provide an image.')
        }
        if(!category) {
            setCategoryErrMsg('Please select a category.')
        }
        if(title && description && category && imageUrl) {
            const currentDate = getDate()

            const updatedBlogData = {...formValue, date: currentDate}
            const response = await axios.post('http://localhost:4000/blogs', updatedBlogData)
            if(response.status === 201) {
                toast.success('Blog Created Successfully')
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
    
    const onUploadImage = (file) => {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET)
        axios.post(CLOUDINARY_URL, formData).then((response) => {
            toast.info('Image Uploaded Successfully')
            setFormValue({...formValue, imageUrl: response.data.url})
            setImageErrMsg(null)
        }).catch((err)=> {
            toast.error('Something went wrong')
            console.log(err)
        })
    }
    
    const onCategoryChange = (e) => {
        setCategoryErrMsg(null)
        setFormValue({...formValue, category: e.target.value})
    }

    return (
        <Form className='row g-3' style={{marginTop: '10px', background: '#FFB8C1'}} onSubmit={handleSubmit}>
            <h1 className='fs-2 fw-bold text-center'>Add Blog</h1>
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
                
                <FormGroup>
                    <Label for="image" hidden>Image</Label>
                    <Input 
                        type='file'
                        id='image'
                        onChange={(e)=> onUploadImage(e.target.files[0])}
                        style={{background: '#fff'}}
                    />
                    {imageErrMsg && (
                        <div className="emptyErrorMsg">
                            {imageErrMsg}
                        </div>
                    )}
                </FormGroup>

                <select className='categoryDropdown' onChange={onCategoryChange} value={category}>
                    <option>Please select a category</option>
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
                        Add
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

export default AddBlog
