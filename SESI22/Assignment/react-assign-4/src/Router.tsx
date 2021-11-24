import ListItem from './components/ListItem';
import ArticleAPI from './components/ArticleAPI';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function Router(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListItem />} />
        <Route path=":api" element={<ArticleAPI />} />
      </Routes>
    </BrowserRouter>
  )
}