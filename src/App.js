import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import NewBlog from "./component/NewBlog";
import BlogDetails from "./component/BlogDetails";
import  PageNotFound from "./component/PageNotFound";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div style={{
        maxWidth:"1200px",
        margin:"40px auto",
        padding:"20px"
      }}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/newblog">
            <NewBlog />
          </Route>
          <Route path="/blogs/:id">
            <BlogDetails />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>

        </Switch>
      </div>
    </Router>
  );
};
export default App;
