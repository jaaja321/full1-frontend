import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import CreatePost from './components/CreatePost';
import Post from './components/Post';
function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/createpost' element={<CreatePost />}/>
        <Route path='/post/:id' element={<Post />}/>
      </Routes>
    </div>
  );
}

export default App;
