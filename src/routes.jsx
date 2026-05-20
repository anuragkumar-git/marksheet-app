import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Editor from './pages/Editor'
import Preview from './pages/Preview'

function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/editor' element={<Editor />} />
      <Route path='/preview' element={<Preview />} />
    </Routes>
  )
}

export default AppRoutes