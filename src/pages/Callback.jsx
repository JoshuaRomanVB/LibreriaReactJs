import React, { useEffect } from 'react';
import axios from 'axios';

const CLIENT_ID = '735994510357-bbediuj5gidbadqngan2ke7f0v04h12g.apps.googleusercontent.com';
const CLIENT_SECRET = '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';

const Callback = () => {
  useEffect(() => {
    const fetchAccessToken = async () => {
      const params = new URLSearchParams(window.location.search);
      const code = params.get('code');

      const response = await axios.post('https://oauth2.googleapis.com/token', {
        code: code,
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        redirect_uri: `${window.location.origin}/oauth2callback`,
        grant_type: 'authorization_code'
      });

      console.log(response.data.access_token);
    };

    fetchAccessToken();
  }, []);

  return (
    <div>
      <h1>Callback</h1>
    </div>
  );
};

export default Callback;
