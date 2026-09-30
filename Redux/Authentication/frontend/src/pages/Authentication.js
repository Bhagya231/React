import { redirect } from 'react-router-dom';
import AuthForm from '../components/AuthForm';

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export async function action({ request }) {
  console.log('AUTH ACTION STARTED');

  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get('mode') || 'login';

  console.log('MODE:', mode);

  if (mode !== 'login' && mode !== 'signup') {
    throw new Response(
      JSON.stringify({
        message: 'Unsupported mode.',
      }),
      {
        status: 422,
      }
    );
  }

  const data = await request.formData();

  const authData = {
    email: data.get('email'),
    password: data.get('password'),
  };

  console.log('AUTH DATA:', authData);

  const response = await fetch('http://localhost:8080/' + mode, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(authData),
  });

  console.log('BACKEND STATUS:', response.status);

  if (response.status === 422 || response.status === 401) {
    return response;
  }

  if (!response.ok) {
    throw new Response(
      JSON.stringify({
        message: 'Could not authenticate user.',
      }),
      {
        status: 500,
      }
    );
  }

  const responseData = await response.json();

      console.log(responseData.message+ " meassage")
  const token = responseData.token;
          console.log('token:', token);
          console.log('token TYPE:', typeof token);

  localStorage.setItem('token', token);

        console.log('STORED token:', localStorage.getItem('token'));
        console.log('stored token TYPE:', typeof localStorage.getItem('token'));

        const expiration = new Date();
        expiration.setHours(expiration.getHours() +1);
        localStorage.setItem('expiration', expiration.toISOString());




        console.log('Aauth SUCCESS - REDIRECTING');

  return redirect('/');
}