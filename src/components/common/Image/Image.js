import React from 'react';

const Image = ({ src, inheritedClass, height, width, placeholderSrc, alt }) => {
  return (
    <img
      src={`/${src}`}
      alt={alt}
      className={`${inheritedClass}`}
      height={height}
      width={width}
      onError={(event) => {
        event.target.src = placeholderSrc;
      }}
    />
  );
}

Image.defaultProps = {
  placeholderSrc: 'images/files/logo.svg',
  inheritedClass: '',
  height: 50,
  width: 50,
};


export default Image;
