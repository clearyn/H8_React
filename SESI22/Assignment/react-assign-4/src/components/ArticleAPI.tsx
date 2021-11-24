import { useState, useEffect } from 'react'
import { Articles } from './ArticleInterface';
import configData from "../config.json";
import '../components/Article.css'

export default function ArticleAPI(): JSX.Element {
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
            <div className="text-white text-left">
                <pre className="pre">{JSON.stringify(articles, null, 2)}</pre>
            </div>;
        </>
    )
}