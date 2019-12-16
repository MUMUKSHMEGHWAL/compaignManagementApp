import React from 'react';

const Anchor = ({ pathname, inheritedClass, children }) => {
  return (
    <a
      href={pathname}
      className={inheritedClass}
    >
      { children }
    </a>
  );
}

Anchor.defaultProps = {
  pathname: '/',
  inheritedClass: '',
};

export default Anchor;
