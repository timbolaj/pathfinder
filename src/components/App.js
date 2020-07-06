import React from 'react';
import Nav from './Nav';
import Description from './Description';
import Grid from './Grid';
import Legend from './Legend';
import '../styles/App.css';

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Description />
      <Grid />
      <Legend />
    </div>
  );
}