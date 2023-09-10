import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import './App.css'
import Main from './components/Main/Main';
import './scroll.css'
import Animals from './components/Animals/Animals';
import Alphabet from './components/Alphabet/Alphabet';
import Tales from './components/Tales/Tales';
import Quiz from './components/Quiz/Quiz';

function App() {

  window.addEventListener("mousewheel", function (e) {
    if (e.ctrlKey) {
      e.preventDefault();
      return false;
    }
  }, { passive: false });

  const router = createBrowserRouter([
    {
      path: 'kidsapp-v2.0/',
      element: <Main />
    },
    {
      path: 'kidsapp-v2.0/zhan',
      element: <Animals />
    },
    {
      path: 'kidsapp-v2.0/tamgalar',
      element: <Alphabet />
    },
    {
      path: 'kidsapp-v2.0/zhomoktor',
      element: <Tales />
    },
    {
      path: 'kidsapp-v2.0/test',
      element: <Quiz />
    },
    // {
    //   path: '*',
    //   element: Error Page
    // }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
