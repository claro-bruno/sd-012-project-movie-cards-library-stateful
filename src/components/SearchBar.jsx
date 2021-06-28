// implement SearchBar component here
import React from 'react';
// import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    // const { searchText } = this.props;
    return (
      <form data-testid="search-bar-form">
        <div>
          {/* <label data-testid="text-input-label">
            Inclui o texto:

          </label>
          <input
            data-testid="text-input"
            type={ searchText }
            onChange="onSearchTextChange"
          /> */}
        </div>
      </form>
    );
  }
}

// SearchBar.propTypes = {
//   searchText: PropTypes.shape({
//     searchText: PropTypes.string,
//   }).isRequired,
// };

export default SearchBar;
