// Write your JS code here
import Header from '../Header'
import LogoutButton from '../LogoutButton'

const Home = () => {
  console.log('-----')
  return (
    <>
      <Header />
      <h1>Home Route</h1>
      <LogoutButton />
    </>
  )
}

export default Home
