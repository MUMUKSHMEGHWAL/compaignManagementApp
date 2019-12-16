import React, { PureComponent } from 'react';
import { addLocaleData, IntlProvider } from "react-intl";
import ja from 'react-intl/locale-data/ja';
import en from 'react-intl/locale-data/en';

import Dashboard from '../DashBoard/Dashboard';

addLocaleData([...en, ...ja]);

class App extends PureComponent  {
  render() {
    const { className, localeProp="en" } = this.props;
    return (
      <div className={`${className} row`}>
        <IntlProvider locale={localeProp} key={localeProp}>
          <Dashboard />
        </IntlProvider>
      </div>
    )
  }
}

App.defaultProps = {
  className: '',
}

export default App;
