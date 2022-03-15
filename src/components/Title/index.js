import React from 'react';
import './Title.css';

export default function Title({children, name}){
  return(
    <div className="title">
      {children}
      <span>{name}</span>
    </div>
  )
}