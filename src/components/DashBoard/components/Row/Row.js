import React, { PureComponent } from 'react';
import Popup from 'reactjs-popup';

import Button from '../../../common/Button';
import Image from '../../../common/Image';
import Text from '../../../common/Text';
import GetInfoModal from '../../../common/Modal';

import RowContainer from './Row.style';

import { DateCreator, getDatesDiff } from '../../../../core/utils';

class Row extends PureComponent {
  state = {
    isInfoModalOpen: false,
  };

  showInfo = () => {
    this.setState({
      isInfoModalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      isInfoModalOpen: false,
    }, () => document.body.removeAttribute('style'))
  }

  getDaysLabel = daysLabel => {
    switch (daysLabel) {
      case 'future':
        return 'days ahead';
      case 'past':
        return 'days ago';
      default:
        return 'days, Its Live!!';
    }
  };

  render() {
    const { actionElements, showCampaignType, name, country, logo, date, className, index } = this.props;
    const viewPricingImage = 'images/price.png';
    const viewPricingLabel = 'View Pricing';
    console.log(actionElements);
    return (
      <RowContainer className={className}>
        <td>
          <div className="item-component">
            <Text text={DateCreator(date).displayDate} />
            <Text text={`${getDatesDiff(date)} ${this.getDaysLabel(showCampaignType)}`} Type="p" inheritedClass="campaign-time"/>
          </div >
        </td>
        <td>
          <div  className="item-component name-section">
            <Image src={logo} alt={name} height="40" width="40" />
            <p className="item-name">
              <Text text={name} />
              <Text text={country} Type="p" inheritedClass="campaign-country"/>
            </p>
          </div >
        </td>
        <td>
          <Button onClick={this.showInfo} className="item-component">
            <Image src={viewPricingImage} alt={viewPricingLabel} height="24" width="24"/>
            <Text text={viewPricingLabel} inheritedClass="campaign-price"/>
          </Button>
        </td>
        <td>
          {actionElements.map(({ name, image, onClick }, idx) => {
            console.log(actionElements[idx]);
            return !!onClick ? (
              <span key={idx} onClick={() => onClick(index)} className="item-component item-action">
                <Image src={image} alt={name}  height="24" width="24"/>
                <Text text={name} inheritedClass="campaign-action"/>
              </span>
            ) : (
              
              <span key={idx} className="item-component item-action">
                <Image src={image} alt={name}  height="20" width="20"/>
                <Text text={name} inheritedClass="campaign-action"/>
              </span>
            );
          })}
          <Popup
            open={this.state.isInfoModalOpen}
            closeOnDocumentClick
            onClose={this.closeModal}
            position="center center"
            modal
            lockScroll
            closeOnEscape
            repositionOnResize
            className="modal-container"
          >
            <div className="modal">
              <GetInfoModal name={name} logo={logo} country={country} />
            </div>
          </Popup>
        </td>
      </RowContainer>
    );
  }
}

export default Row;
