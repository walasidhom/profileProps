import React from 'react'

const ProfileComponent = ({ props, fullName, bio, profession }) => {
    const styleCenter = { display: 'flex', justifyContent: 'center'};
    return (
        <>
            {props.children}
            <div style={ styleCenter} className='name-style'>{ fullName }</div>
            <p style={ styleCenter}>{ bio }</p>
            <div style={ styleCenter} className='address-style'>{ profession }</div>
        </>
  )
}

export default ProfileComponent