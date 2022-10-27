import Sidebar from "./components/Sidebar/Sidebar";
import Feed from './components/Feed/Feed.jsx'
import Widgets from './components/Widgets/Widgets.jsx'
import Modal from "./components/Modal/Modal";

function App() {
  return (
    <div className='app'>
    {/* sidebar */}
    <Sidebar/>
    {/* feed scrolleable */}
    <Feed/>
    {/* Widgets */}
    <Widgets/>
    </div>
  );
}

export default App;
