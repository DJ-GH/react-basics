import  { React, useEffect, useState } from "react"; 
import './NewsFocus.css'
import { useParams } from "react-router-dom";

const NewsFocus = (props) => {
    const params = useParams();
    const [selectedNews, setSelectedNews] = useState(null);
    const [loaded, setLoaded] = useState(false);

    const loadPost = async () => {
        const responsePosts = await fetch("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=ab003289a1cb45b2a465596fcae97e52");
        const postsJson = await responsePosts.json();
        const found = postsJson.articles?.find(post => post.publishedAt === params.publishedAt);
        if (found) {
            setSelectedNews(found);
        }
        setLoaded(true)
    }   

    useEffect(() => {
        loadPost()

    }, [params.publishedAt])

    if (!selectedNews) {
        return <div>rendering...</div>;
    }

    return(
        <div className="main">
            <div className={`Container ${loaded ? 'fade-in' : ''}`}>
                <div className="title">{selectedNews.title}</div>
                <br></br>
                <div className="description">{selectedNews.description}</div>
                <br></br>
                <div className="description">{selectedNews.content}</div>
                <br></br>
                <div className="description">-{selectedNews.author}</div>
            </div>
        </div>
    )
}

export default NewsFocus;
