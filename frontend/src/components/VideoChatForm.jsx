import React, { useEffect, useState } from 'react'
import InputField from './InputField'
import Button from './Button'
import { useNavigate } from 'react-router-dom'

function VideoChatForm() {
    const[mail, setMail] = useState('')
    const [roomCode, setRoomcode] = useState('')
    const navigate = useNavigate()

    const handleForm = (e) => {
        e.preventDefault()
        navigate(`/interviews/${roomCode}`)
        console.log(mail, room)
    }

  return (
      <div className="flex flex-col items-center space-y-4">
          <h1 className="text-4xl font-bold text-[#333333]">Video Chat Lobby</h1>
          <p className="text-[#666666]">Join the video call and connect with your team.</p>
          <form className="grid w-full gap-4" onSubmit={handleForm}>
              <InputField onChange={(e)=>{
                setMail(e.target.value)
              }} placeholder={'Enter Email-id'} label={'E-mail id'} />
              
              <InputField onChange={(e)=>{
                setRoomcode(e.target.value)
              }} placeholder={'Enter room id'} label={'Room id'} />

              <Button title={'Join Call'} onClick={handleForm} />
          </form>
      </div>
  )
}

export default VideoChatForm
