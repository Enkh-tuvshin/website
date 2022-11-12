import { Navbar } from 'react-bootstrap';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import { BlogPage, HomePage } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="blog" element={<BlogPage />} />
        {/* <Route path="post" element={<PostPage />} /> */}
      </Routes>
    </BrowserRouter>

  );
}

export default App;
