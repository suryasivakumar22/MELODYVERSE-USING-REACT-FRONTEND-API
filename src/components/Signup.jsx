import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { validate } from '../utils/validate';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !validate.username(username) ||
      !validate.email(email) ||
      !validate.password(password) ||
      password !== confirmPassword
    ) {
      setError('Invalid input');
    } else {
      // Simulate signup API call
      setTimeout(() => {
        setSuccess('A welcome email has been sent to your email address.');
        localStorage.setItem('token', ' dummy-token');
        history.push('/login');
      }, 1000);
    }
  };

  return (
    <div className="container">
      <h1 className="text-3xl font-bold mb-4">Sign up for MelodyVerse</h1>
      {success && <p className="text-green-500">{success}</p>}
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">
          Name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 pl-10 text-sm text-gray-700"
          />
        </label>
        <label className="block mb-2">
          Username or Email
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 pl-10 text-sm text-gray-700"
          />
        </label>
        <label className="block mb-2">
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 pl-10 text-sm text-gray-700"
          />
        </label>
        <label className="block mb-2">
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 pl-10 text-sm text-gray-700"
          />
        </label>
        <label className="block mb-2">
          Confirm Password
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-2 pl-10 text-sm text-gray-700"
          />
        </label>
        <label className="block mb-2">
          Profile Picture
          <input
            type="file"
            onChange={(e) => setProfilePicture(e.target.files[0])}
            className="w-full p-2 pl-10 text-sm text-gray-700"
          />
        </label>
        {error && <p className="text-red-500">{error}</p>}
        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
          Sign Up
        </button>
        <p className="text-sm text-gray-600">
          Already have an account? <Link to="/login">Login</Link>
        </p>
        <label className="block mb-2">
          <input type="checkbox" id="terms" />
          <span className="ml-2">
            I agree to the <Link to="/terms">Terms and Conditions</Link>
          </span>
        </label>
      </form>
    </div>
  );
};

export default Signup;