// Write your JS code here
import {Link} from 'react-router-dom'

const Header = () => {
  console.log('-----')
  return (
    <div>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
      </ul>
    </div>
  )
}

export default Header