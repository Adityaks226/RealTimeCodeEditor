
import { useState } from 'react';
import React from 'react'
import {v4 as uuidV4} from 'uuid'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();

  const [roomId,setRoomId]=useState('');
  const [username,setUsername]=useState('');

  const createNewRoom =(e) => {
    e.preventDefault();
    const id = uuidV4();
    setRoomId(id);
    toast.success('Created a new room')
    //console.log(id)
  }
  const joinRoom = (e) => {
    if(!roomId || !username){
        toast.error('ROOM ID and Username is required');
        return;
    }
    navigate(`/editor/${roomId}`,{
        state: {
            username
        }
    })
  }
  const handleInputEnter = (e) => {
    e.preventDefault();
    if(e.code === 'Enter') {
        joinRoom()
    }
  }
  return (
    <div className="homePageWrapper">
        <div className="formWrapper">
            <img 
                className='homePageLogo'
                src="/code-sync.png" 
                alt="code-sync-logo"
            />
            <h4 className='mainLabel'>Paste Invitation ROOM ID</h4>
            <div className='inputGroup'>
                <input 
                    type="text" 
                    className='inputBox' 
                    placeholder='ROOM ID'
                    value={roomId}
                    onChange={(e)=>setRoomId(e.target.value)}
                    onKeyUp={handleInputEnter}
                />
                <input 
                    type="text" 
                    className='inputBox' 
                    placeholder='USERNAME'
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                    onKeyUp={handleInputEnter}
                />
                <button 
                    type='submit' 
                    className='btn joinBtn'
                    onClick={joinRoom}
                >JOIN</button>
                <span className='createInfo'>
                    Create &nbsp;
                    <a onClick={createNewRoom} href='' className='createNewBtn'>new room</a>
                </span>
            </div>
        </div>
        <footer>
            <h4>
                Built By <a href='https://github.com/Adityaks226'>Aditya</a>
            </h4>
        </footer>
    </div>
  )
}

export default Home