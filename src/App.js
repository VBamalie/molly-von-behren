import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import Header from "./components/header/header"
import Sidebar from "./components/sidebar/sidebar";
import Aboutme from './components/aboutMe/aboutMe';
import Work from "./components/works/works"
import Main from "./components/main/main"
import Contactme from './components/contactMe/contactMe';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='sidebar-container'>
        <Sidebar />
        <div className='columns'>
        <Main />
        <Work />
        <Aboutme />
        <Contactme />
        </div>
      </div>
    </div>
  );
}

export default App;
