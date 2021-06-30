import React from 'react';
import PropTypes from 'prop-types';

export default class AddMovieSubtitle extends React.Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <label 
        htmlFor="subtitle" 
        data-testid="subtitle-input-label"
      >
        Subtítulo
        <input 
          onChange={ this.changeHandler } 
          type="text" 
          data-testid="subtitle-input" 
          value={ this.state.subtitle } 
          id="subtitle" 
        />
      </label>
    );
  }
}

AddMovieSubtitle.propTypes = {
  onSearchTextChange: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
};
