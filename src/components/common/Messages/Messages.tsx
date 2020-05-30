import React from 'react';
import { Message } from 'semantic-ui-react';

export const MessageWarning = () => (
  <Message
    warning
    header="Warning!"
    content="All form fields must be filled out."
  />
);

export const MessageSuccess = ({ isValid, isFetching }) => (
  <Message
    success={isValid && isFetching}
    header="Success!"
    content="All form fields are filled in correctly."
  />
);
