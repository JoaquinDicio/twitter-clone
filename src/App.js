import Sidebar from "./components/Sidebar/Sidebar";
import Feed from './components/Feed/Feed.jsx'
import Widgets from './components/Widgets/Widgets.jsx'

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
