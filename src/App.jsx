import { Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

const App = () => (
  <Routes>
    <Route path="/" element={ <Layout /> } >
      <Route path="/" element={ <Home /> } />
      <Route path="*" element={ <NotFound /> } />
    </Route>
  </Routes>
)

export default App