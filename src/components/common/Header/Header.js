import React, { PureComponent } from 'react';

import Anchor from '../Anchor';
import Image from '../Image';

import HeaderContainer from './Header.style';

class Header extends PureComponent {
  render() {
    const imagePath = `images/logo.png`;
    const { className } = this.props;
    return (
      <HeaderContainer className={className}>
        <Anchor>
          <Image src={imagePath} alt="add-new" height={64} width={64} />
        </Anchor>
      </HeaderContainer>
    );
  }
}

export default Header;
