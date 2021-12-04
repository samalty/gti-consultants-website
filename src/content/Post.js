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
    const fetchedPost = {};
    let postExists = false;
    postlist.forEach((post, i) => {
        if (validId === post.id) {
            fetchedPost.title = post.title ? post.title : "Title not found";
            fetchedPost.category = post.category ? post.category : "";
            fetchedPost.description = post.description ? post.description : "Description not found";
            fetchedPost.date = post.date ? post.date : "Date not found";
            fetchedPost.thumbnail = post.thumbnail ? post.thumbnail : "Image not found";
            fetchedPost.content = post.content ? post.content : "Content not found";
            postExists = true;
        }
        if (fetchedPost.category === "Accounting\r") {
            fetchedPost.categoryRoute = `/insights/accounting`
        }
    })
    if (postExists === false) {
        return <Redirect to="/404" />
    }
    return (
            <div className="background">
                <Navbar />
                    <div className="post">
                        <div className="title-container">
                            <h1>{fetchedPost.title}</h1>
                        </div>
                        <img src={fetchedPost.thumbnail}/>
                        <h3>{fetchedPost.description}</h3>
                        <Link to="/insights" className="insights-link">Back to Insights</Link><Link to={fetchedPost.categoryRoute} className="insights-link">Back to {fetchedPost.category}</Link>
                        <p className="date">Published on {fetchedPost.date}</p>
                        <hr/>
                        <Markdown source={fetchedPost.content} escapeHtml={false} />
                    </div>
                <Footer />
            </div>
    )
}

export default Post;