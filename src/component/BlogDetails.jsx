import React from 'react'
import { useParams } from 'react-router';
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom"
import "./BlogDetails.css"

const BlogDetails = () => {
    const { id } = useParams();
    const {data,isPending, error} = useFetch("http://localhost:8000/blogs/"+id);
    const history = useHistory(); 

    const DeleteBlog = () =>{
        fetch("http://localhost:8000/blogs/" + data.id,{
            method :"DELETE"
        }).then(()=>{
            history.push("/");
        })
    }
    return (
        <div className="blog-details">
          {isPending && <div> Loading....</div>}
          {error && <div>{error}</div>}
          {data && (
              <article>
                  <h2>{data.title}</h2>
                  <p> written by..{data.author}</p>
                  <div>{data.body}</div>
                  <button onClick={DeleteBlog}> Delete Blog</button>
              </article>
              
          )}
        </div>
    );
}

export default BlogDetails;
