import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    //if (!validate.username(username) || !validate.password(password)) {
   /*   setError('Invalid username or password');
    } else {
      // Simulate login API call
      setTimeout(() => {
        localStorage.setItem('token', ' dummy-token');
        history.push('/');
      }, 1000);
    }*/
  };

  return (
    
    <div className="bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-md px-6 py-12 rounded-lg border border-input shadow-lg">
        <div className="space-y-6">
          <div className="flex flex-col items-center space-y-2">
            <h1 className="text-4xl font-bold tracking-tight">MelodyVerse</h1>
            <p className="text-muted-foreground">Welcome to the future of music</p>
          </div>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="email">Username</Label>
              <Input id="email" type="text" placeholder="Enter your username" value={username} className="bg-muted text-foreground" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link href="#" className="text-sm font-medium text-primary hover:underline" prefetch={false}>
                  Forgot password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                value={password}
                placeholder="Enter your password"
                className="bg-muted text-foreground"
              />
            </div>
            <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              Sign In
            </Button>
          </form>
          <p className="text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link href="#" className="font-medium text-primary hover:underline" prefetch={false}>
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;