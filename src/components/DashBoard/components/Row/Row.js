import React, { PureComponent } from 'react';
import Popup from 'reactjs-popup';

import Button from '../../../common/Button';
import Image from '../../../common/Image';
import Text from '../../../common/Text';
import GetInfoModal from '../../../common/Modal';

import RowContainer from './Row.style';

import { composeDate, getDatesDiff } from '../../../../core/utils';

class Row extends PureComponent {
  state = {
    isInfo: false,
  };

  handleInfoClick = () => {
    this.setState({
      isInfo: true,
    });
  };

  closeModal = () => {
    this.setState({
      isInfo: false,
    })
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
    return (
      <RowContainer className={className}>
        <td>
          <Button onClick={this.handleInfoClick} className="item-component">
            <Text text={composeDate(date).displayDate} />
            <Text text={`${getDatesDiff(date)} ${this.getDaysLabel(showCampaignType)}`} Type="p" inheritedClass="campaign-time"/>
          </Button>
        </td>
        <td>
          <Button onClick={this.handleInfoClick} className="item-component name-section">
            <Image src={logo} alt={name} height="40" width="40" />
            <p className="item-name">
              <Text text={name} />
              <Text text={country} Type="p" inheritedClass="campaign-country"/>
            </p>
          </Button>
        </td>
        <td>
          <Button onClick={this.handleInfoClick} className="item-component">
            <Image src={viewPricingImage} alt={viewPricingLabel} height="24" width="24"/>
            <Text text={viewPricingLabel} inheritedClass="campaign-price"/>
          </Button>
        </td>
        <td>
          {actionElements.map(({ name, image, onClick }) => {
            return !!onClick ? (
              <span key={index} onClick={() => onClick(index)} className="item-component item-action">
                <Image src={image} alt={name}  height="24" width="24"/>
                <Text text={name} inheritedClass="campaign-action"/>
              </span>
            ) : (
              <span key={index} className="item-component item-action">
                <Image src={image} alt={name}  height="20" width="20"/>
                <Text text={name} inheritedClass="campaign-action"/>
              </span>
            );
          })}
          <Popup
            open={this.state.isInfo}
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
