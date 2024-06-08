// Write your JS code here
import './index.css'
import LogoutButton from '../LogoutButton'
import Header from '../Header'

const About = () => {
  console.log('-----')
  return (
    <div>
      <Header />

      <h1>About Route</h1>
      <LogoutButton />
    </div>
  )
}

export default About
