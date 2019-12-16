import React, { PureComponent } from 'react';

import Image from '../Image';
import TextGroup from '../KeyValuePair';

import InfoModalContainer from './Modal.style';

class GetInfoModal extends PureComponent {

  render() {
    const { logo, name, country, className, closeModal } = this.props;
    const imgConfig = {
      src: logo,
      alt: name,
      height: '70',
      width: '50',
    };

    const formattedTextFile = [
      {
        key: 'Name',
        value: name,
      },
      {
        key: 'Country',
        value: country,
      },
    ]

    return (
      <InfoModalContainer className={className}>
        <div>
          <h2 className="modal-title">
            Campaign Info
          </h2>
          <em className="cross-icon close" onClick={closeModal}/>
        </div>
        <Image {...imgConfig} />

        <div className="text-group">
          <TextGroup textList={formattedTextFile}/>
        </div>
      </InfoModalContainer>
    );
  }
}

GetInfoModal.defaultProps = {
  type: 'file',
  name: '',
  size: '',
  creatorName: '',
  createdOn: '',
  className: '',
  closeModal: () => {}
};

export default GetInfoModal;
