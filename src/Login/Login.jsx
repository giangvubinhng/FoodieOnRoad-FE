import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import GoogleButton from 'react-google-button'


function Login() {
  return (

    <GoogleButton onClick={() => { console.log('Google button clicked') }}/>

  );
}







export default Login;