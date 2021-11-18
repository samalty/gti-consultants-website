import React from "react";
import { Link }  from "react-router-dom";
import postList from "../posts.json";
import Markdown from "react-markdown";
import './styles/Insights.scss';

const ArticlesList = () => {
    const excerptList = postList.map(post => {
        return post.content.split(" ").slice(0, 20).join(" ") + "..."
    });
    return (
        <div className="latest-articles">
            <h2 className="title">Recent articles</h2>
            {postList.length && 
                postList.map((post, i) => {
                    return (
                        <div key={i} className="article">
                            <Link className="links" to={`/insights/${post.id}`}>
                                <div className="article-overlay">
                                    <h2>{post.title}</h2>
                                    <p>{post.description}</p>
                                </div>
                                <Markdown source={excerptList[i]} escapeHtml={false} className="markdown" />
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ArticlesList;