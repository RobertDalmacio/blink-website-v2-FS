import { Card, ListGroup, ListGroupItem } from 'reactstrap'

const Category = ({handleCategory, options, loadBlogsData}) => {
    return (
        <div className="text-center">
            <Card style={{width: '450px', marginTop: '20px', background: '#f34279' }}>
                <h4>Categories</h4>
                <ListGroup flush>
                    <ListGroupItem 
                        style={{cursor: 'pointer', background: '#FFB8C1', fontWeight: 'bold'}}
                        onClick={() => loadBlogsData(0, 5, 0)}
                    >
                        All
                    </ListGroupItem>
                    {options.map((item, index) => (
                        <ListGroupItem 
                        key={index} 
                        style={{cursor: 'pointer', background: '#FFB8C1', fontWeight: 'bold'}}
                        onClick={() => handleCategory(item)}
                        >
                            {item}
                        </ListGroupItem>
                    ))}
                </ListGroup>
            </Card>
        </div>
    )
}

export default Category
