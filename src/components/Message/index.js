import { Message } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const MessageComponent = ({ nbArticles, isSearch }) => (
  <Message>
    <p className="message-content">
      {isSearch ? `La recherche a donné ${nbArticles} résultats` : 'Veuillez lancer une recherche'}
    </p>
  </Message>
);

MessageComponent.propTypes = {
  isSearch: PropTypes.bool.isRequired,
};

export default MessageComponent;
