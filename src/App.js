import React from 'react';
import { users } from './User';
import User from './components/User';
import Divider from './components/Divider';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="users-container">
        {users.map(user => (
          <div key={user.username}>
            <User user={user} />
            <Divider />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
