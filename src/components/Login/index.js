// Write your JS code here
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

const Login = () => {
  const toNavHomePage = async () => {
    const url = 'https://apis.ccbp.in/login'
    const jwtToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MTk2Mjg2MTN9.nZDlFsnSWArLKKeF0QbmdVfLgzUbx1BGJsqa2kc_21Y'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    console.log('logged in paa')
    const response = await fetch(url, options)
    console.log(response)
  }
  return (
    <div>
      <h1>Please Login</h1>
      <button onClick={toNavHomePage} type="button">
        Login with Sample Creds
      </button>
    </div>
  )
}

export default Login
