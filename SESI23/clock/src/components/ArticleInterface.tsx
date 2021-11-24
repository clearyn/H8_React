export interface Article {
    body: string;
    date: string;
    id: number;
    title: string;
}

export interface Articles extends Array<Article> { }