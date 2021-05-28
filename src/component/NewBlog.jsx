import React,{useState} from "react";
import "./NewBlog.css";
import {useHistory} from "react-router-dom";

function NewBlog() {
   const [title, setTitle] = useState("");
   const [body, setBody] = useState("");
   const [author, setAuthor] = useState("");
   const history = useHistory();
   
   const HandleSubmit = (e) =>{
     e.preventDefault();
    const blog = {title, body, author};
    fetch("http://localhost:8000/blogs",{
      method : "POST",
      headers : {
            "Content-Type" : " application/json"
      },
      body : JSON.stringify(blog)
    }).then(()=>{
      console.log("new Blog added")
      history.push("/")
    })
   }

  return(
  <div className="create">
  <h2>Add a New Blog..!</h2>

  <form  onSubmit={ HandleSubmit }>
   <label> Blog Title:</label>
   <input 
     type="text"
     required
     value={title}
     onChange={(e)=>setTitle(e.target.value)}
   />
    <label> Blog Body:</label>
   <textarea 
     type="text"
     required
     value={body}
     onChange={(e)=>setBody(e.target.value)}
   />
    <label> Blog Author</label>
   <input 
     type="text"
     required
     value={author}
     onChange={(e)=>setAuthor(e.target.value)}
   />
  
   <button onClick={()=>alert("adding new  blog to the database")}> Add Blog</button>

  </form>
  </div>
    );
}

export default NewBlog;
