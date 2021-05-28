import React from 'react';
import { useHistory }  from "react-router-dom";
import "./PageNotFound.css"


function PageNotFound() {
    const history = useHistory();

    const BackHomePage =()=>{
        history.push("/");
    }
    return (
        <div className="not-found">
            <h2>Oops.! Sorry</h2><br />
            <p> That Page can not be found.</p><br />
            <button onClick={BackHomePage}> Back to Home </button>

        </div>
    )
}

export default PageNotFound
