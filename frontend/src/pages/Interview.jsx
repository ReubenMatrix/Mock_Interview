import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt'
import { AuthContext } from '../Context/AuthContext';

function Interview() {
  const {id} = useParams();
  const { currentUser } = useContext(AuthContext);

  const myMeet= async(element)=>{
    const appID = 431614972;
    const serverSecret = "0a4a3e8d5dac1f097639bc993a5edcfb";

    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, id, Date.now().toString(), currentUser.email)

    const zp = ZegoUIKitPrebuilt.create(kitToken)
    zp.joinRoom({
      container:element,
      scenario:{
        mode:ZegoUIKitPrebuilt.VideoConference,
      }
    })

  }

  return (
    <div>

    <div ref={myMeet}>

    </div>
      
    </div>
  )
}

export default Interview
