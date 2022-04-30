import React from 'react'
import {Pagination, PaginationItem, PaginationLink, Button} from 'reactstrap'

const PaginationComp = ({currentPage, pageLimit, loadBlogsData, data, totalBlog}) => {
    
    const renderPagination = () => {
        if ((currentPage === 0 && data.length < 5) || (totalBlog === pageLimit && currentPage === 0)) {
            return null
        }
        if (currentPage === 0) {
            return (
                <Pagination className='mb-0 d-flex justify-content-center'>
                    <PaginationItem>
                        <PaginationLink>1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <Button 
                            rounded 
                            onClick={()=> loadBlogsData(5, 10, 1)}
                            color='primary'
                        >
                            Next
                        </Button>
                    </PaginationItem>
                </Pagination>
            )
        } else if (
            currentPage < pageLimit - 1 && 
            data.length === pageLimit && 
            (totalBlog - data.length) !== pageLimit
        ) {
            return (
                <Pagination className="mb-0 d-flex justify-content-center">
                    <PaginationItem>
                        <Button 
                            rounded 
                            onClick={()=> loadBlogsData((currentPage - 1) * 5, currentPage * 5, -1)}
                            color='primary'
                        >
                            Prev
                        </Button>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink>
                            {currentPage + 1}
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <Button 
                            rounded 
                            onClick={()=> loadBlogsData((currentPage + 1) * 5, (currentPage + 2) * 5, 1)}
                            color='primary'
                        >
                            Next
                        </Button>
                    </PaginationItem>
                </Pagination>
            )
        } else {
            return (
                <Pagination className="mb-0 d-flex justify-content-center">
                    <PaginationItem>
                        <Button 
                            rounded 
                            onClick={()=> loadBlogsData((currentPage - 1) * 5, currentPage * 5, -1)}
                            color='primary'
                        >
                            Prev
                        </Button>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink>
                            {currentPage + 1}
                        </PaginationLink>
                    </PaginationItem>
                </Pagination>
            )
        }
    }

    return (
        <div>
            {renderPagination()}
        </div>
    )
}

export default PaginationComp