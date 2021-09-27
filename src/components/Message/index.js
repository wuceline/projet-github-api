import { Message } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const MessageComponent = ({ dataCount }) => (
  <Message>
    <p>La recherche a donné {dataCount} résultats</p>
  </Message>
);

MessageComponent.propTypes = {
  dataCount: PropTypes.number.isRequired,
};

export default MessageComponent;
