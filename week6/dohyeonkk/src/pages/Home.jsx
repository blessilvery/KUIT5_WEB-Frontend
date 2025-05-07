import React from 'react'
import {Link} from 'react-router-dom'
import * as B from '../components/Button'

const Home = () => {
  return (
    <div>
      <Link to='/store'>
        <button>가게목록으로 이동</button>
      </Link>
      <Link to='/cart'>
        <button>카트로 이동</button>
      </Link>
      
    </div>
  )
}

export default Home
