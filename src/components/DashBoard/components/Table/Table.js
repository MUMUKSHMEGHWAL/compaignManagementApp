import React from 'react';
import { connect } from 'react-redux';
import Popup from 'reactjs-popup';
import Calendar from 'react-calendar';

import { createNewItemAction } from './action';
import Text from '../../../common/Text';
import Row from '../Row';

import {CompaignContainer} from './Table.style';

import { DateCreator } from '../../../../core/utils';

class CampaignTable extends React.Component {
  constructor() {
    super();
    this.state = {
      isDateModalOpen: false,
      date: new Date(),
      selectedIndex: undefined,
    };
    this.getCompaignData = this.getCompaignData.bind(this);
  }

  closeModal = () => {
    this.setState({
      isDateModalOpen: false,
    }, () => document.body.removeAttribute('style'));
  };

  onChangeDate = date => {
    const { addNewCompaign, campaignsData } = this.props;
    const { selectedIndex } = this.state;
    this.setState({
      date,
    }, () => {
      this.closeModal();
      const selectedCampaign = campaignsData.find((item, itemIndex) => item.id === selectedIndex);
      addNewCompaign({
        ...selectedCampaign,
        date: (new Date(date)).getTime(),
      });
    });
  }

  getCompaignData () {
    const { campaignsData, showCampaignType} = this.props;
    switch(showCampaignType) {
      case 'future':
        return campaignsData.filter(({date}) => {
          return DateCreator(date).formattedDate !== DateCreator().formattedDate && DateCreator(date).date.getTime() > DateCreator().date.getTime()
        });
      case 'live':
        return campaignsData.filter(({date}) => DateCreator(date).formattedDate === DateCreator().formattedDate);
      case 'past':
          return campaignsData.filter(({date}) => {
            return DateCreator(date).formattedDate !== DateCreator().formattedDate && DateCreator(date).date.getTime() < DateCreator().date.getTime()
          });
      default:
        return campaignsData;
    }
  }


  render() {
    const { className, showCampaignType } = this.props;
    const tableHeader = ['Date', 'Campaign', 'View', 'Actions'];
    const filteredCampaignData = this.getCompaignData();

    const actionElements = [
      {
        name: 'CSV',
        image: 'images/csv.png',
      },
      {
        name: 'Report',
        image: 'images/report.png',
      },
      {
        name: 'Schdeule Again',
        image: 'images/schedule.png',
        onClick: index =>
          this.setState({
            isDateModalOpen: true,
            selectedIndex: index,
          }),
      },
    ];

    return (
      <CompaignContainer className={className}>
        {!filteredCampaignData.length ? (
          <Text text="no data found" />
        ) : (
          <table>
            <thead>
              <tr>
                {tableHeader.map((tableHead, index) => (
                  <th key={index}>{tableHead}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredCampaignData.map((campaign, index) => (
                <Row
                  actionElements={actionElements}
                  showCampaignType={showCampaignType}
                  {...campaign}
                  index={campaign.id}
                  key={index}
                />
              ))}
            </tbody>
          </table>
        )}
        <Popup
          open={this.state.isDateModalOpen}
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
            <Calendar
              onChange={this.onChangeDate}
              value={this.state.date}
              minDate={new Date()}
              className='datepicker-component'
            />
          </div>
        </Popup>
      </CompaignContainer>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  addNewCompaign: payload => dispatch(createNewItemAction(payload)),
});

CampaignTable.defaultProps = {
  className: '',
};

export default connect(
  null,
  mapDispatchToProps
)(CampaignTable);
