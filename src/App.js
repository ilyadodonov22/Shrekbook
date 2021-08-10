
import './App.css';
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import { BrowserRouter, Route } from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div class='app-wrapper-content'>
          <Route path='/Profile'
            render={() => <Profile state={props.state.profilePage} />} />
          <Route path='/Dialogs'
            render={() => <Dialogs state={props.state.dialogsPage} />} />
          <Route path='/News' render={() => <News />} />
          <Route path='/Music' render={() => <Music />} />
          <Route path='/Settings' render={() => <Settings />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
