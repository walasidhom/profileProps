import './App.css';
import { Container } from 'react-bootstrap';
import ProfilePhoto from './images/profilePhoto.webp';
import ProfileComponent from './profile/ProfileComponent';



function App() {
	const Profile = { fullName:'wala' , bio:'walaaaaaa' , profession:'ingenieure'};
  return (
    <Container className='auth-inner'>
	    <ProfileComponent fullName='wala' bio='walaaaaaa' profession='ingenieure'>
			  <div className='div--center'>
			  	<img
      				src={ProfilePhoto}
      				className='img-fluid rounded-circle'
      				alt='profile'
					height='200px' />
			  </div>
	    </ProfileComponent>
    </Container>
  );
}

export default App;
