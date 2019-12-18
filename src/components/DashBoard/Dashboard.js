import React from 'react';
import { connect } from 'react-redux';

import Tabs from './components/Tabs';
import TopNav from '../common/Header';
import CampaignTable from './components/Table';

import { DashboardContainer } from './Dashboard.style';

class Campaign extends React.Component {
  constructor() {
    super();
    this.state = {
      showCampaignType: 'future',
    };

  }

  onTypeSelection = showCampaignType => {
    this.setState({
      showCampaignType
    },() => document.body.removeAttribute('style'));
  }

  render() {
    const { className, campaignsData } = this.props;
    const { showCampaignType } = this.state;

    return (
      <DashboardContainer className={`${className} col-sm-12 col-md-12 col-lg-12`}>
        <section>
          <div className="top-nav">
            <TopNav />
          </div>
          <div className="main-container">
            <Tabs onTypeSelection={this.onTypeSelection} showCampaignType={showCampaignType} />
            <CampaignTable showCampaignType={showCampaignType} campaignsData={campaignsData} />
          </div>
        </section>
      </DashboardContainer>
    )
  }
}

Campaign.defaultProps = {
  campaignsData: [],
  className: '',
};

const mapStateToProps = state => ({
  campaignsData: state.AppState.campaignsData,
});


export default connect(mapStateToProps)(Campaign);
