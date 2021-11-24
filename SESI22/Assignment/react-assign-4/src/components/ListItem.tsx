import { useState, useEffect } from 'react'
import { Articles } from './ArticleInterface';
import { Link } from "react-router-dom";
import configData from "../config.json";
import '../components/Article.css'

export default function ListItem(): JSX.Element {
    const [baseURL] = useState(configData.BASE_PROXY)
    const [articles, setArticles] = useState<Articles>([])

    useEffect(() => {
        fetch(`${baseURL}/articles`)
            .then(response => response.json())
            .then(result => setArticles(result))
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <>
            <div>
                <ul className="tilesWrap">
                    <h2 className="text-white">Hover article to show button</h2>
                    {
                        articles.map((artilce, index) => (

                            <li key={index}>
                                <h2>0{index + 1}</h2>
                                <h3>{artilce.title}</h3>
                                <p>
                                    {artilce.body}
                                </p>
                                <p>
                                    {new Date(artilce.date).toDateString()}
                                </p>
                                <Link to="api"><button>API Result</button></Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}
