import React from 'react';
import { animations } from '../utils/style';

const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary ourline-none ${styles} rounded-[10px] hover:${animations.scale} focus:opacity-[0.5] trasnition ease-linear duration-100`}
    >
      Get Started
    </button>
  );
};

export default Button;
