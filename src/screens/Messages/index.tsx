import { useState } from 'react'
import Inbox from './components/Inbox'
import Requests from './components/Requests'

const Messages = () => {
    const [isInbox, setInbox] = useState(true)
    return (
        isInbox ? (<Inbox isInbox={isInbox} setInbox={setInbox}/>) : (<Requests isInbox={isInbox} setInbox={setInbox}/>)
    )
}

export default Messages