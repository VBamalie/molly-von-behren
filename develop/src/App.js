import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import Header from "./components/header/header"
import Sidebar from "./components/sidebar/sidebar";
import Aboutme from './components/aboutMe/aboutMe';
import Work from "./components/works/works"

function App() {
  return (
    <div className="App">
      <Header />
      <Work />
      <Sidebar />
      <Aboutme />
    </div>
  );
}

export default App;
