import { Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'

const App = () => (
  <Routes>
    <Route path="/" element={ <Layout /> } >
      <Route path="/" element={ <Home /> } />
    </Route>
  </Routes>
)

export default App