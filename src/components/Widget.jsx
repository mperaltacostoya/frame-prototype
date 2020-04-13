import React, { useState, useEffect } from 'react';
import random from 'lodash/random';
import noop from 'lodash/noop';

function Widget({
  children,
  additionalClasses = '',
  interval,
  maxInterval = 2000,
  skeleton,
  onClick = noop,
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const finalInterval = interval || random(0, maxInterval);  
    setTimeout(() => setLoading(false), finalInterval);
  }, [interval, maxInterval]);


  if (loading) {
    return skeleton;
  }

  return (
    <div className={`${additionalClasses}`} onClick={onClick}>
      {children}
    </div>
  )
}

export default Widget;