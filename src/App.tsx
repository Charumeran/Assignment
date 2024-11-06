import { useState } from "react";
import {BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import { Post } from "./types";
import PostPage from "./PostPage";

const App = () => {
    const[posts, setPosts] = useState<Post[]>([]);
    const[filterCategory, setFilterCategory] = useState<string[]>([]);
    const[filterIncome, setFilterIncome] = useState<number | null>(null);

    const addPost = (post: Post) => {
        setPosts(( prevPosts ) => [...prevPosts, post]);
    };

    return(
        <BrowserRouter basename={ process.env.NODE_ENV === "production" ? "/Assignment" : "/"}>
            <div>
                <nav>
                    <Link to = "/search"></Link>
                </nav>
                <Routes>
                    <Route 
                    path="/" 
                    element = {
                        <HomePage 
                            posts = {posts}
                            filterCategory={filterCategory}
                            filterIncome={filterIncome}
                            setFilterCategory={setFilterCategory}
                            setFilterIncome={setFilterIncome}
                        />
                    } />                  
                    <Route 
                    path="/post" 
                    element = {<PostPage addPost={addPost} />}
                    />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App;
                

    
