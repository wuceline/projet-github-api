import './reposresults.scss';
import { Grid, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const ReposResults = ({ data }) => (
  <Grid columns={3} divided>
    <Grid.Row className="grid-row">
      {data.map((item) => (
        <Grid.Column className="article" key={item.id}>
          <Image className="article-img" src={item.owner.avatar_url} />
          <div className="article-text">
            <h1>
              {item.name}
            </h1>
            <em>
              {item.owner.login}
            </em>
            <p>
              {item.description}
            </p>

          </div>
        </Grid.Column>
      ))}
    </Grid.Row>
  </Grid>
);

ReposResults.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default ReposResults;
