import React from "react";
import { Link }  from "react-router-dom";
import articleList from "../articles.json";
import './styles/Insights.scss';

const ArticlesList = () => {
    const excerptList = articleList.map(article => {
        return article.content.split(" ").slice(0, 20).join(" ") + "..."
    })
    return (
        <div className="insights-container">
            <h2 className="title">Recent articles</h2>
            {articleList.length && 
                articleList.map((post, i) => {
                    return (
                        <div key={i} className="article">
                            <Link className="links" to={`/post/${post.id}`}>
                                <div className="article-overlay">
                                    <h3>{post.title}</h3>
                                    <p>{post.description}</p>
                                </div>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ArticlesList;