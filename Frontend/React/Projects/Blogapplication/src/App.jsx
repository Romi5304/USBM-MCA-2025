// src/App.jsx
import 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostsList from './components/PostsList';
import PostDetail from './components/PostDetail';
import './App.css';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<PostsList />} />
                    <Route path="/posts/:postId" element={<PostDetail />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;