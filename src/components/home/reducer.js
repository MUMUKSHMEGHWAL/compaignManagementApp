import { ADD_NEW_COMPAIGN } from '../DashBoard/components/Table/constants';

import initialState from './initialState';

export default (state = initialState, action ) => {
  const { type, payload } = action;

  switch(type) {
    case ADD_NEW_COMPAIGN:
        const campaignsData = state.campaignsData.slice();
        const length = campaignsData.length;
        for (let i = 0; i < length; i++)
        if (campaignsData[i].id && campaignsData[i].id === payload.id) {
          campaignsData.splice(i, 1);
          campaignsData.splice(i, 0, payload)
            break;
        }
      return Object.assign({}, state, {
        campaignsData: [ ...campaignsData],
      })
    default:
        return state;
  }
}
