import React from 'react'
import {Button} from 'reactstrap'

const Search = ({handleSearch, searchValue, onInputChange}) => {
    return (
        <div className="searchForm">
            <form className="d-flex" onSubmit={handleSearch}>
                <input 
                    type="search" 
                    className="form-control" 
                    placeholder="Search Blog..." 
                    value={searchValue} 
                    onChange={onInputChange}
                />
                {/* <MDBBtn type='submit'>Search</MDBBtn> */}
                <Button style={{backgroundColor: '#f34279', color: '#000', fontWeight: 'bold'}}type='submit'>Search</Button>
            </form>
        </div>
    )
}

export default Search