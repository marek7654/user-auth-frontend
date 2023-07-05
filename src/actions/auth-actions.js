import { json } from "react-router-dom";
import { settings } from "./settings";

export const action = async ({ request }) => {

  const loginPage = window.location.pathname === '/login';
  const uri = loginPage ? settings.loginURI : settings.registerURI;
  const authUserPropertyName = loginPage ? 'username' : 'email';

  const data = await request.formData();

  const authData = {}
  authData.password = data.get('password');
  authData[authUserPropertyName] = data.get('email');

  const response = await fetch(settings.backendURL + uri, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(authData),
  });

  if (response.status === 422 || response.status === 401) {
    return response;
  }

  if (!response.ok) {
    const errorMessage = loginPage ? 'zalogować' : 'zrejestrować';
    throw json(
      { message: `Nie można ${errorMessage} użytkownika :(` },
      { status: 500 }
    );
  }
  console.log(response);
  return response;
};
