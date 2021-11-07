import React from "react";
import { Redirect } from "react-router-dom";
import Markdown from "react-markdown";
import postlist from "../articles.json";
import './styles/Post.scss';
import Navbar from "./Navbar";
import Footer from "./Footer";

const Post = (props) => {
    const validId = parseInt(props.match.params.id)
    if (!validId) {
        return <Redirect to="/404" />
    }
    const fetchedPost = {}
    let postExists = false
    postlist.forEach((post, i) => {
        if (validId === post.id) {
            fetchedPost.title = post.title ? post.title : "No title given"
            fetchedPost.category = post.category ? post.category : "No date given"
            fetchedPost.description = post.description ? post.description : "No date given"
            fetchedPost.date = post.date ? post.date : "No date given"
            fetchedPost.body = post.body ? post.body : "No content given"
            postExists = true
        }
    })
    if (postExists === false) {
        return <Redirect to="/404" />
    }
    return (
        <div>
            <Navbar />
            <div className="post">
                <h2>{fetchedPost.title}</h2>
                <h3>{fetchedPost.category}</h3>
                <p>Published on {fetchedPost.date}</p>
                <hr/>
                <Markdown source={fetchedPost.body} escapeHtml={false} />
            </div>
            <Footer />
        </div>
    )
}

export default Post