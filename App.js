import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import store from './utils/store';
import Demo from "./components/Demo";
import Demo2 from "./components/Demo2";
import { createBrowserRouter ,RouterProvider} from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
const appRouter=createBrowserRouter([
  {
  path:"/",
  element:<Body/>,
  children:[
    {
      path:"/",
      element:<MainContainer/>
    },
    {
      path:"watch",
      element:<WatchPage/>,
    },
    {
      path: "demo",
      element: (
        <>
          <Demo />
          <Demo2 />
        </>
      ),
    },
  ]
}]);
function App() {
  return (
    <Provider store={store}>
    <div>
    
      {
        /**
         * head
         * body
         * Sidebar
         * MenuItems
         * MainContainer
         * ButtonList
         * VideoContainer
         * VideoCard 
         */
      }
      <Head/>
      <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
}

export default App;
