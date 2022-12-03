import './App.css';
import { Container } from 'react-bootstrap';
import ProfilePhoto from './images/profilePhoto.webp';
import ProfileComponent from './profile/ProfileComponent';



function App() {
	const profile =
	{
		fullName: 'Wala Sidhom',
		bio: "Innovative optimized solution seeker. Excited to be a Frontend web developer as a new career. I am ambitious, adventurous, animated, and assiduous. Thus, I am passionate about learning new technologies, bringing ideas to life, and working with dedicated teams to build efficient and robust applications suited to the user's needs.",
		profession: 'Frontend Developer Engineer'
	};
  return (
    <Container className='auth-inner'>
		  <ProfileComponent fullName={profile.fullName} bio={profile.bio} profession={profile.profession}>
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
