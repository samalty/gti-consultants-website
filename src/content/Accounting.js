import React from "react";
import { Link }  from "react-router-dom";
import postList from "../posts.json";
import Markdown from "react-markdown";
import './styles/Category.scss';
import CategoryTemplate from "./CategoryTemplate";

const Accounting = () => {
    const excerptList = postList.map(post => {
        return post.content.split(" ").slice(0, 20).join(" ") + "..."
    });
    return (
        <CategoryTemplate>
            <div className="articles-container">
                <h1>Accounting</h1>
                {postList.length && 
                    postList.filter(post => post.category === "Accounting\r").map((post, i) => {
                        return (
                            <div key={i} className="article">
                                <h2>{post.title}</h2>
                                <hr />
                                <p>{post.description}</p>
                                <Link className="links" to={`/insights/${post.category}/${post.id}`} style={{ textDecoration: 'none' }}>
                                    <p className="read-more">Read more</p>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </CategoryTemplate>
    )
}

export default Accounting;