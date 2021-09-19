import React from 'react'
import UserImage from '../UserImage'
import { BottomSection, UserContainer, UserInfo, UserWrapper } from './userStyles';
import { SvgIcons } from '../../utils/icons';
import {BsHeart} from 'react-icons/bs'
import {AiOutlineEdit} from 'react-icons/ai'
import {AiFillDelete} from 'react-icons/ai'
import { useState } from 'react/cjs/react.development';
import { ToastContainer} from 'react-toastify';

const Users = ({name, email, id, onEdit, onDelete ,phone,website}) => {
    const [liked,setLiked]=useState(false)
    const [isEdit, setIsEdit] = useState(false);
    const [userName,setUserName]=useState(name);
    const [userEmail,setUserEmail]=useState(email);
    const [userPhone,setUserPhone]=useState(phone);
    const [userWebsite,setUserWebsite]=useState(website);

    const likePost=()=>{
        setLiked(prev=>!prev)
    }

    const handleOnEditSubmit = (e) => {
        e.preventDefault();
        onEdit(id, userName, userEmail,userPhone,userWebsite);
        setIsEdit(!isEdit);
      };

    return (
        <UserContainer>
                    <UserWrapper>
                        <UserImage/>
                        <UserInfo>
                            {isEdit? (
                                <form onSubmit={handleOnEditSubmit}>
                                <input placeholder="Name" name="name" onChange={(e)=>setUserName(e.target.value)}  value={userName} />
                                <input placeholder="Email" name="email" onChange={(e)=>setUserEmail(e.target.value)}  value={userEmail} />
                                <input placeholder="Phone" name="phone" onChange={(e)=>setUserPhone(e.target.value)}  value={userPhone} />
                                <input placeholder="Website" name="website" onChange={(e)=>setUserWebsite(e.target.value)} value={userWebsite} />
                                <br/>
                                <button onClick={handleOnEditSubmit}>Save</button>
                                <button onClick={()=> setIsEdit(!isEdit)}>Cancel</button>
                              </form>
                            ):(
                                <>
                            <h2>{name}</h2>
                            <p>{SvgIcons.Email}{email}</p>
                            <p>{SvgIcons.Phone}{phone}</p>
                            <p>{SvgIcons.Website}http://{website}</p> 
                            </> 
                            )} 
                        </UserInfo>
                        <BottomSection>
                                <BsHeart style={{color:liked && 'red'}} onClick={likePost} />|
                                <AiOutlineEdit onClick={()=>setIsEdit(!isEdit)} />|
                                <AiFillDelete onClick={()=>onDelete(id)}/>
                        </BottomSection>
                    </UserWrapper>
                    <ToastContainer />
        </UserContainer>
    )
}

export default Users
