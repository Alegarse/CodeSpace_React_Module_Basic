import React from 'react'

const UserDetailsComponent = (props) => {

    const {
        user
    } = props

  return (
    <div>
        <div>
            <span>ID:</span>
            <span>{user.id}</span>
        </div>
        <div>
            <span>Name:</span>
            <span>{user.name}</span>
        </div>
        <div>
            <span>Username:</span>
            <span>{user.username}</span>
        </div>
        <div>
            <span>Email</span>
            <span>{user.email}</span>
        </div>
    </div>
  )
}

export default UserDetailsComponent