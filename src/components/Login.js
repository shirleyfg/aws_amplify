import React from 'react';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

const Login = () => (
  <div>
     Login Successfully
     <br />
     <button>
     <AmplifySignOut />
     </button>
  </div>
);

export default withAuthenticator(Login);
