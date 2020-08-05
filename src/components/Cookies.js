import React from 'react';

import '../styles/Cookies.css';

const onAcceptClick = () => {
  const cookies = document.querySelector('.cookies');
  cookies.classList.remove('active');
};

const Cookies = () => {
  return (
    <div className='cookies active'>
      <span className='cookiesInfo'>
        Ta strona korzysta z ciasteczek Google aby świadczyć usługi na
        najwyższym poziomie. Dalsze korzystanie ze strony oznacza, że zgadzasz
        się na ich użycie.
      </span>
      <button onClick={onAcceptClick} className='cookiesBtn cookiesAccept'>
        Zgoda
      </button>
    </div>
  );
};

export default Cookies;
