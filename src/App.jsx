// import logo from './logo.svg';
import './App.css';
// import { Inter } from "next/font/google";
import React from 'react';
import { useRef } from "react";
import Landing from './landing';

import Footer from './footer';

export default function App() {

  return (
    <div className="flex flex-col justify-center items-center bg-white overflow-x-hidden">
      <div><Landing /></div>
      <div><Footer/></div>
    </div>
  );
}
