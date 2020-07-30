import React, { useState } from 'react'
import '../css/form.css'
import axios from 'axios';


export default function Form() {
    const [url,setUrl] = useState('');


    const submitHandler = async (e)=>{
        e.preventDefault();
        const  {data}  = await axios.get('http://localhost:3001?url='+url);
        alert("Shortend URL : "+data)
        document.getElementById('url_field').value = ''
    }

    return (
        <div>

            <form className="box" action="#">
                <h1>URL SHORTNER</h1>
                <div>
                    <i className="user"></i>
                    <input type="text" placeholder="Enter Your URL Here !" id="url_field" onChange={(e)=>setUrl(e.target.value)} />
                </div>
                <input type="submit" value="submit" onClick={(e)=>submitHandler(e)} />
            </form>
        </div>
    )
}
