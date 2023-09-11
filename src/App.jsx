import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import './App.css'
import Main from './components/Main/Main';
import './scroll.css'
import Animals from './components/Animals/Animals';
import Alphabet from './components/Alphabet/Alphabet';
import Tales from './components/Tales/Tales';
import Quiz from './components/Quiz/Quiz';
import UrlError from './components/Error/UrlError';

function App() {

  window.addEventListener("mousewheel", function (e) {
    if (e.ctrlKey) {
      e.preventDefault();
      return false;
    }
  }, { passive: false });

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />
    },
    {
      path: '/zhan',
      element: <Animals />
    },
    {
      path: '/tamgalar',
      element: <Alphabet />
    },
    {
      path: '/zhomoktor',
      element: <Tales />
    },
    {
      path: '/test',
      element: <Quiz />
    },
    {
      path: '*',
      element: <UrlError />
    }
  ],
    { basename: '/kidsapp-v2.0' })

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
