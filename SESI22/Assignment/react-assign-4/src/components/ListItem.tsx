import { useState, useEffect } from 'react'
import configData from "../config.json";
import '../components/Article.css'

export default function ListItem(): JSX.Element {
    interface Article {
        body: string;
        date: string;
        id: number;
        title: string;
    }

    interface Articles extends Array<Article> { }

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
        <div>
            <ul className="tilesWrap">
                {
                    articles.map((artilce, index) => (

                        <li>
                            <h2>0{index + 1}</h2>
                            <h3>{artilce.title}</h3>
                            <p>
                                {artilce.body}
                            </p>
                            <p>
                                {new Date(artilce.date).toDateString()}
                            </p>
                            <button>Read more</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
