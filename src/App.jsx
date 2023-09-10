import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import './App.css'
import Main from './components/Main/Main';
import './scroll.css'
import Animals from './components/Animals/Animals';

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
