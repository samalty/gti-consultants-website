import React from "react";
import { Link }  from "react-router-dom";
import postList from "../posts.json";
import './styles/AllArticles.scss';
import AllArticlesTemplate from "./AllArticlesTemplate";

const AllArticles = () => {
    window.scrollTo(0,0);
    return (
        <AllArticlesTemplate>
            <div className="articles-container">
                <h1>All Articles</h1>
                {postList.length && 
                    postList.map((post, i) => {
                        return (
                            <div key={i} className="article">
                                <h2>{post.title}</h2>
                                <hr />
                                <p>{post.description}</p>
                                <Link className="links" to={`/insights/${post.category.toLowerCase()}/${post.id}`} style={{ textDecoration: 'none' }}>
                                    <p className="read-more">Read more</p>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </AllArticlesTemplate>
    )
}

export default AllArticles;