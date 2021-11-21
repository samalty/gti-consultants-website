import React from "react";
import { Redirect } from "react-router-dom";
import Markdown from "react-markdown";
import postlist from "../posts.json";
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import './styles/Post.scss';

const Post = (props) => {
    const validId = parseInt(props.match.params.id)
    if (!validId) {
        return <Redirect to="/404" />
    }
    const fetchedPost = {}
    let postExists = false
    postlist.forEach((post, i) => {
        if (validId === post.id) {
            fetchedPost.title = post.title ? post.title : "No title given";
            fetchedPost.category = post.category ? post.category : "No category given";
            fetchedPost.description = post.description ? post.description : "No description given";
            fetchedPost.date = post.date ? post.date : "No date given";
            fetchedPost.content = post.content ? post.content : "No content given";
            postExists = true;
        }
    })
    if (postExists === false) {
        return <Redirect to="/404" />
    }
    return (
            <div className="background">
                <Navbar />
                    <div className="post">
                        <h1>{fetchedPost.title}</h1>
                        <h2>{fetchedPost.description}</h2>
                        <Link to="/insights" className="insights-link">Back to Insights</Link><Link to="/insights" className="insights-link">{fetchedPost.category}</Link>
                        <p className="date">Published on {fetchedPost.date}</p>
                        <hr/>
                        <Markdown source={fetchedPost.content} escapeHtml={false} />
                    </div>
                <Footer />
            </div>
    )
}

export default Post;