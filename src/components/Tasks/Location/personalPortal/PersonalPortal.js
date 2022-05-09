import React, {useEffect, useState} from 'react';
import axios from "axios";
import {URL} from "../../../../data/Data";
import messageIcon from '../../../../assets/image/element/icons/personal/message.svg'

const PersonalPortal = () => {
    const [message, setMessage] = useState(0)

    /*GET fake request */
    useEffect( async () =>{
        const {data} = await axios(`${URL}/auth/login`)
        if (data){
            setMessage(data)
        }
    }, [])
    /*Show count of messages*/
    if (message){
        return (
            <div>
                <p>У вас 1 сообщений</p>
            </div>
        );
    } else{
        return(
            <div className='message'>
                <img src={messageIcon} alt="message"/>
                <p>У вас Нет ожидающих обработки задач </p>
            </div>
        )
    }
};

export default PersonalPortal;