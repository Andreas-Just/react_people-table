import React from 'react';
import { Message } from 'semantic-ui-react';
import './Message.scss';

type PropsSuccess = {
  isValid: boolean;
  allFilled: boolean;
};

export const MessageWarning = () => (
  <Message
    className="Message"
    warning
    header="Warning!"
    content="All form fields must be filled out."
  />
);

export const MessageSuccess: React.FC<PropsSuccess> = ({ isValid, allFilled }) => (
  <Message
    className="Message"
    success={isValid && allFilled}
    header="Success!"
    content="All form fields are filled in correctly."
  />
);
