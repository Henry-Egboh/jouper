import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import Layout from './components/layout/Layout';
import Dashboard from './components/Dashboard';
import Create from './components/Create';
import Profile from './components/Profile';


//create routes to pages
const myRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Dashboard />} />
      <Route path='create' element={<Create />} />
      <Route path='profile' element={<Profile />}/>

    </Route>
  )
)

function App() {

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  )
}

export default App
