import React from 'react';

function CustomContent({ children, additionalClasses = '' }) {
  return (
    <div className={`content ${additionalClasses}`}>
      {children}
    </div>
  )
}

export default CustomContent;