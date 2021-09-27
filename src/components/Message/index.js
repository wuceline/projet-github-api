import { Message } from 'semantic-ui-react';

const MessageComponent = ({ dataCount }) => (
  <Message>
    <p>La recherche a donné {dataCount} résultats</p>
  </Message>
);

export default MessageComponent;
