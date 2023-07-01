import {useState} from 'react';
import { useNavigate } from 'react-router-dom/dist/umd/react-router-dom.development';
import bookservice from '../service/bookservice';

const bookForm=()=>{
    let navigate = useNavigate();
    let [formDetails,setFormdetails]=useState({bookid:"",bookname:"",bookauthor:"",booklang:"",price:""})
    let addBook=()=>{
        bookservice.insertBook(formDetails).then((result)=>{
            console.log(result.data);
            navigate("/");
        }).catch(()=>{});

    }
    return(
        <div>
            <form>
                <label htmlfor='bid'>Book id</label>
                <input type="text" id="bid" name="bid" value={formDetails.bookid} 
                onChange={(event)=>{setFormdetails({...formDetails,bid:event.target.value})}}></input>

                <label htmlfor='bname'>Book name</label>
                <input type="text" id="bname" name="bname" value={formDetails.bookname}
                onChange={(event)=>{setFormdetails({...formDetails,bname:event.target.value})}}></input>

                <label htmlfor='bauthor'>Book Author</label>
                <input type="text" id="bauthor" name="bauthor" value={formDetails.bookauthor}
                onChange={(event)=>{setFormdetails({...formDetails,bauthor:event.target.value})}}></input>

                <label htmlfor="blang">Book Language</label>
                <input type="text" id="blang" name="bname" value={formDetails.booklang}>
                    onChange={(event)=>{setFormdetails({...formDetails,blang:event.target.value})}}
                </input>

                <label htmlFor='bprice'>Book Price</label>
                <input type="text" id="bprice" name="bprice" value={formDetails.price}>
                    onChange={(event)=>{setFormdetails({...formDetails,bprice:event.target.value})}}
                </input>
            </form>
        </div>
    )
}
export default bookForm;