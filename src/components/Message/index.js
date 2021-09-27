import { Message } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const MessageComponent = ({ nbArticles }) => (
  <Message>
    <p>La recherche a donné {nbArticles} résultats</p>
  </Message>
);

// MessageComponent.propTypes = {
//   nbArticles: PropTypes.number.isRequired,
// };

export default MessageComponent;
