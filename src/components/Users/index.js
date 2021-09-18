import React from 'react'
import UserImage from '../UserImage'
import { UserContainer, UserWrapper } from './userStyles'

const Users = ({users}) => {
    return (
        <UserContainer>
            {users.map((user)=>{
                return (
                    <UserWrapper key={user.id}>
                        <UserImage/>
                        <h1>{user.name}</h1>
                    </UserWrapper>
                )
            })}
        </UserContainer>
    )
}

export default Users
