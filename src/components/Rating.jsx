import React from 'react';
import PropTypes from 'prop-types';

import '../styles/rating.css';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <div className="movie-card-rating" data-testid="rating">
        <span className="rating">{ parseFloat(rating).toFixed(1) }</span>
      </div>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Rating;
