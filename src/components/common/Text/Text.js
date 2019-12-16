import React from 'react';
import { FormattedMessage} from 'react-intl';

const Text = ({ text, inheritedClass, Type }) => {
  return (
  <Type className={`${inheritedClass}`}>
    <FormattedMessage
      id="welcome"
      values={{text}}
      defaultMessage={text}
    />
  </Type>
  );
}

Text.defaultProps = {
  inheritedClass: '',
  text: '',
  Type: 'span',
};

export default Text;
