import React, { useState } from 'react';
import st from './Form.module.css';

const Form = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://movie-platform2.netlify.app/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, password }),
      });

      if (response.ok) {
        const result = await response.text();
        console.log(result);
        window.location.href = '/contacts';
      } else {
        console.error('Failed to register user');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form className={st.form_container} method="post" onSubmit={handleSubmit}>
      <label htmlFor="name">Username</label>
      <input
        type="text"
        placeholder="e.g zhamal"
        name="username"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        placeholder="e.g 12345678"
        name="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Sign up</button>
    </form>
  );
};

export default Form;
