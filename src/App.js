import Sidebar from "./components/Sidebar/Sidebar";
import Feed from './components/Feed/Feed.jsx'
import Widgets from './components/Widgets/Widgets.jsx'
import Modal from "./components/Modal/Modal";
import MyContextProvider, { MyContext } from "./context/MyContextProvider";


function App() {
  return (
    <div className='app'>
      <MyContextProvider >
        {/* sidebar */}
        <Sidebar />
        {/* feed scrolleable */}
        <Feed />
        {/* Widgets */}
        <Widgets />
      </MyContextProvider>
    </div>
  );
}

export default App;
