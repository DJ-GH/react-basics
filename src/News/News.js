import { React, useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import './News.css'
import ThemeContext from '../Contexts/ThemeContext'
const News = () => {
    const [loadedPost, isLoadedPost] = useState(false)
    const [posts, setposts] = useState([])
    const loadPost = async () => {
        const resposnsePosts = await fetch("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=ab003289a1cb45b2a465596fcae97e52")
        const postsJson = await resposnsePosts.json()
        if (postsJson.articles) { 
            isLoadedPost(true)
            setposts(postsJson.articles)
        }
    }    
    
    const themeValue = useContext(ThemeContext)
    useEffect(() => {
        loadPost()
    }, [])
    return (
        
        <div className='panel-main'>
            <div className='newsContainer'>
                { !loadedPost && <div>Connection failed or loading...</div>}
                { loadedPost && posts.map((post) => {
                    return (
                        <div className='newContainer' style={{borderLeftColor:themeValue.darkpurple}} key={post.publishedAt}>
                            <Link to={`/news/${post.publishedAt}`}>
                                <h3 className='newTitle'>{post.title}</h3>
                                <br />
                                <div className='newDescription'>{post.description}</div>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
        )
}

export default News
