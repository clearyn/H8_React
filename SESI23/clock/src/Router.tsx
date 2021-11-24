import ListItem from './components/ListItem';
import ArticleAPI from './components/ArticleAPI';
import RClockClass from './components/RealtimeClockClass';
import RClockFunction from './components/RealtimeClockFunction';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function Router(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListItem />} />
        <Route path=":api" element={<ArticleAPI />} />
        <Route path=":function" element={<RClockFunction />} />
        <Route path=":class" element={<RClockClass />} />
      </Routes>
    </BrowserRouter>
  )
}