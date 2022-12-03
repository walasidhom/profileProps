import React from 'react'

const ProfileComponent = (props) => {
    const styleCenter = { display: 'flex', justifyContent: 'center'};
    return (
        <>
            {props.children}
            <div style={ styleCenter} className='name-style'>{ props.fullName }</div>
            <p style={ styleCenter}>{ props.bio }</p>
            <div style={ styleCenter} className='address-style'>{ props.profession }</div>
        </>
  )
}

export default ProfileComponent