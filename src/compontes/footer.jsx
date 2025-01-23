import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <footer className='h-9  flex justify-center a flex-col pt-9'>
      <div><p>&copy; {currentYear} created by Sarath M.
        
         </p></div>
         <div><span> All rights reserved. ❤️</span></div>
    </footer>
  );
};

export default Footer;
