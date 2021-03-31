import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';

const projectID = '4128f67f-e3fa-4b00-ae15-44dd253f3d33';

function App() {
  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName="pirateking"
      userSecret="123123"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  )
}

// infinite scroll, logout, more customizations...

export default App;
