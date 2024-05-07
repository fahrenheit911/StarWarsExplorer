import React from 'react';
import {ThreeDots} from 'react-loader-spinner';
import './loader.css';

export const Loader = () => {
  return (
    <div className="loader">
      <ThreeDots type="ThreeDots" color="#00BFFF" height={80} width={80} />
    </div>
  );
};
