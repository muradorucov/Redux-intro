import { Provider } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import { createStore } from 'redux'
import { Reducers } from './redux/reducers/reducers'
import Customers from './pages/Customers/Customers'
import Favorites from './pages/Favorites/Favorites'
import Home from './pages/Home/Home'
const customerStore = createStore(Reducers)
function App() {
  return (
    <Provider store={customerStore}>
      <Home />
      <Routes>
        <Route path="/customers" element={<Customers />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Provider>
  )
}

export default App
