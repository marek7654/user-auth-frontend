import { settings } from '../actions/settings';
import { getAuthToken } from '../actions/util';

export const loadDashboard = async () => {
  const token = getAuthToken();

  const response = await fetch(settings.backendURL + settings.dashboardURI, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });

  const resData = await response.json();
  return resData;
};
