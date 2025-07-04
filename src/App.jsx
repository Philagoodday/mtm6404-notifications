import { useState } from 'react';
import './App.css';
import initialNotifications from './notifications.js';
import Card from './Card'; // importCard

function App() {
  const [notifications, setNotifications] = useState(initialNotifications);

  // clear one
  const clearNotification = (id) => {
    setNotifications(notifications.filter((notification) => notification.id !== id));
  };

  // clear all
  const clearAllNotifications = () => {
    setNotifications([]);
  };

  return (
  
    <Card className="App">
      <header className="App-header">
        <h1>Notifications</h1>
        {/* notfificaion quantity*/}
        <p>You have {notifications.length} unread messages.</p>
        <button onClick={clearAllNotifications} className="clear-all-btn">Clear All</button>
      </header>
      <main>
     
        {notifications.map((notification) => (
          <Card key={notification.id} className="notification">
            <div className="notification-header">
              <h3>{notification.name}</h3>
              
              <button onClick={() => clearNotification(notification.id)} className="clear-btn">x</button>
            </div>
          <p>{notification.message}</p>
          </Card>
        ))}
      </main>
    </Card>
  );
}

export default App;