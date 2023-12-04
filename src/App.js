import './App.css';
import { Bookmarks } from './Bookmarks';
import { Explore } from './Explore';
import { Lists } from './Lists';
import { Messages } from './Messages';
import { More } from './More';
import { Notifications } from './Notifications';
import { Profile } from './Profile';
import { Header } from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/explore' element={< Explore/>} />
      <Route path='/notifications' element={< Notifications/>}/>
      <Route path='/messages' element={<Messages/>}/>
      <Route path='/bookmarks' element={<Bookmarks/>} />
      <Route path='/lists' element={<Lists/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/more' element={<More/>}/>
    </Routes>

    
    </BrowserRouter>
  );
}

export default App;
