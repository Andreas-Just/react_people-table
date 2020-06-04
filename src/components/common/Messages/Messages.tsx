import React from 'react';
import { Message } from 'semantic-ui-react';
import './Message.scss';

type PropsWarning = {
  fieldName: string;
};

type PropsSuccess = {
  isValid: boolean;
  required: boolean;
};

export const MessageWarning: React.FC<PropsWarning> = ({ fieldName }) => (
  <Message
    className="Message"
    warning
    header="Warning!"
    content={`
      Fields of the form: "${fieldName}", must be filled out.
      All form fields must be filled in correctly.
    `}
  />
);

export const MessageSuccess: React.FC<PropsSuccess> = ({ isValid, required }) => (
  <Message
    className="Message"
    success={isValid && required}
    header="Success!"
    content="All form fields are filled in correctly."
  />
);
