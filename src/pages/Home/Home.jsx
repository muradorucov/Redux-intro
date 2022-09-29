import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div>
      <ul style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <Link to="/customers">
          <li>Customers</li>
        </Link>
        <Link to="/favorites">
          <li>Favorites</li>
        </Link>
      </ul>
    </div>
  )
}

export default Home
