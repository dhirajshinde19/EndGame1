import React,{Component} from 'react';
import bookservice from '../service/bookservice';
import {Link} from 'react-router-dom';
import bookForm from './bookform';

class BookTable extends React.Component{
    constructor(props){
        super(props);
        this.state={
            barr:[]
        }
    }
    fetchData=()=>{
        bookservice.getBooks().then((result)=>{
            console.log(result.data)
            this.setState({...this.state,barr:result.data})
        }).catch(()=>{})
    }
    componentDidMount(){
        this.fetchData();
    }
    deleteProd=(bid)=>{
        bookservice.deleteById(bid).then(()=>{
            this.fetchData()
        }).catch();
    }
    render(){
        return(
            <div>
                <Link to="/form">
                    <button type="button" id="btn" value="btn" name="btn">Add new Book</button>
                </Link>
                <br></br>
                <table border={2} className='table'>
                    <thead>
                        <tr>
                            <th>BookId</th>
                            <th>Book Name</th>
                            <th>Book Author</th>
                            <th>Book Language</th>
                            <th>Book Price</th>
                        </tr>
                        
                    </thead>
                    <tbody>
                        {this.state.barr.map((book)=><tr key={book.bookid}>
                            <td>{book.bookid}</td>
                            <td>{book.bookname}</td>
                            <td>{book.bookauthor}</td>
                            <td>{book.booklang}</td>
                            <td>{book.price}</td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default BookTable;