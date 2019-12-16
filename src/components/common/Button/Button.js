import React from 'react';

import ButtonContainer from './Button.style';

const Button = ({ className, inheritedClass, type, disabled, children, ...others }) => {
  return (
    <ButtonContainer
      className={`${inheritedClass} ${className}`}
      type={type}
      disabled={disabled}
      {...others}
    >
      {children}
    </ButtonContainer>
  );
}

Button.defaultProps = {
  className: '',
  inheritedClass: '',
  type: 'button',
  disabled: false,
};

export default Button;
