import s from './Dialogs.module.css'
import { NavLink } from "react-router-dom"
import React from 'react'

const DialogItem = (props) => {

    let path = "/dialogs/" + props.id;



    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogsData.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = props.state.messagesData.map(m => <Message message={m.message} />);

    let newMessage = React.createRef();

    let sendMessage = () => {
        let text = newMessage.current.value;
        alert(text);
    }

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                </div>
                <div>
                    <input ref={newMessage} className={s.input}></input>
                    <button onClick={sendMessage} className={s.button}>Send Message</button>
                </div>

            </div>

        </div >
    )
}

export default Dialogs;