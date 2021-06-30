import React from 'react';
// import PropTypes from 'prop-types';

export default class AddMovieInput extends React.Component {
  render() {
    // const { searchText, onSearchTextChange } = this.props;
    return (
      <label
        htmlFor="title"
        data-testid="title-input-label"
      >
        Título
        <input
          // onChange={  }
          type="text"
          data-testid="title-input"
          // value={ this.state.title }
          id="title"
        />
      </label>
    );
  }
}

// AddMovieInput.propTypes = {
//   onSearchTextChange: PropTypes.func.isRequired,
//   searchText: PropTypes.string.isRequired,
// };
