import './App.css';
import { Container } from 'react-bootstrap';
import ProfilePhoto from './images/profilePhoto.webp';
import ProfileComponent from './profile/ProfileComponent';



function App() {
  
  return (
    <Container className='auth-inner'>
	    <ProfileComponent fullName='wala' bio='walaaaaaa' profession='ingenieure'>
		    <img
      		src={ProfilePhoto}
      		className='img-fluid rounded-circle'
      		alt='profile'
    		  height='200px'/>
	    </ProfileComponent>
    </Container>
  );
}

export default App;
