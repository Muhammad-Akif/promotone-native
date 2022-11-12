import { useState } from 'react'
import Inbox from './components/Inbox'
import Requests from './components/Requests'

const ChatListScreen = (props: any) => {
    const { navigation } = props
    const [isInbox, setInbox] = useState(true)
    return (
        isInbox ? (<Inbox isInbox={isInbox} setInbox={setInbox} navigation={navigation} />) : (<Requests isInbox={isInbox} setInbox={setInbox} navigation={navigation} />)
    )
}

export default ChatListScreen