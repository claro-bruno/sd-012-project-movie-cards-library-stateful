import React from 'react';
// import PropTypes from 'prop-types';

export default class AddMovieInputImagePath extends React.Component {
  render() {
    // const { searchText, onSearchTextChange } = this.props;
    return (
      <label
        htmlFor="imagePath"
        data-testid="image-input-label"
      >
        Imagem
        <input
          // onChange={ this.changeHandler }
          type="text"
          data-testid="image-input"
          // value={ this.state.imagePath }
          id="imagePath"
        />
      </label>
    );
  }
}

// AddMovieInputImagePath.propTypes = {
//   onSearchTextChange: PropTypes.func.isRequired,
//   searchText: PropTypes.string.isRequired,
// };
