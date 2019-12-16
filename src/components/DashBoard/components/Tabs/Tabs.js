import React, { PureComponent } from 'react';

import Button from '../../../common/Button';
import Text from '../../../common/Text';

import TabContainer from './Tabs.style';

class Tabs extends PureComponent {
  render() {
    const buttonList = [
      {
        name: 'Upcoming Campaigns',
        value: 'future',
      },
      {
        name: 'Live Campaigns',
        value: 'live',
      },
      {
        name: 'Past Campaigns',
        value: 'past',
      },
    ];
    const { headTextPrimary = 'Manage Campaigns', onTypeSelection, showCampaignType, className } = this.props;
    return (
      <TabContainer className={className}>
        <Text text={headTextPrimary} Type="h1" />
        <ul className="button-group">
          {
            buttonList.map((buttonItem, index) => (
              <Button
                onClick={() => onTypeSelection(buttonItem.value)}
                key={index}
                inheritedClass={`${showCampaignType === buttonItem.value ? 'selected-button': ''} campaign-button`}
              >
                <Text text={buttonItem.name} />
              </Button>
            ))
          }
        </ul>
      </TabContainer>
    );
  }
}

export default Tabs;
