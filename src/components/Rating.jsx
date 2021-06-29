import React from 'react';
import { number } from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <div className="movie-card-rating" data-testid="rating">
        <span className="rating">{rating}</span>
      </div>
    );
  }
}

Rating.propTypes = { rating: number };

Rating.defaultProps = {
  rating: 0,
};

export default Rating;
