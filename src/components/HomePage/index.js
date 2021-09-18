import React, { useEffect, useState } from 'react'
import { usersApi } from '../../utils/apis';
import Users from '../Users'
import { HomeContainer } from './homeStyle'

const HomePage = () => {
    const [userData,setUserData]=useState([]);

    useEffect(()=>{
        fetch(usersApi).then((res)=>{
            return res.json()
        }).then((data)=>{
            setUserData(data);
        })
    },[])

    console.log('data', userData);
    return (
        <HomeContainer>
            <Users users={userData} />
        </HomeContainer>
    )
}

export default HomePage
