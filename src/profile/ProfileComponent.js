import React from 'react';
import PropTypes from 'prop-types';

const ProfileComponent = (props) => {
    
    const styleCenter = { display: 'flex', justifyContent: 'center'};
    return (
        <>
            {props.children}
            <div style={styleCenter} className='name-style'>{props.fullName}</div>
            <div style={ styleCenter} className='address-style'>{ props.profession }</div>
            <p style={ styleCenter}>{ props.bio }</p>
        </>
  )
}

ProfileComponent.propTypes ={
    fullName: PropTypes.string,
    profession: PropTypes.string,
    bio: PropTypes.string,
        
}

export default ProfileComponent