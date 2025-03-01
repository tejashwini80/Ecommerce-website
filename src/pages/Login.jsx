import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username);
  };

  return (
    <div className="p-4 max-w-sm mx-auto bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username" className="block mb-2">Username</label>
        <input
          type="text"
          id="username"
          className="w-full p-2 border border-gray-300 rounded-lg mb-4"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-lg">Login</button>
      </form>
    </div>
  );
};

export default Login;
