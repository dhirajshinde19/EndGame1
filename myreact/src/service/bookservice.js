import axios from 'axios';
const baseUrl = "http://localhost:3002"

class BookService{
    getBooks(){
        return axios.get(baseUrl+"/books");
    }

    insertBook(book){
        return axios.post(baseUrl+"/books/"+bookid)
    }

    deleteById(bid){
        return axios.get(baseUrl+"/books/:bookid")
    }
}
export default new BookService();