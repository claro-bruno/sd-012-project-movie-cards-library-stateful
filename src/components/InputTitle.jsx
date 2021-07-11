import React from 'react';
import { string, func } from 'prop-types';

class InputTitle extends React.Component {
  render() {
    const { title, updateTitle } = this.props;
    return (
      <label data-testid="title-input-label" htmlFor>
        Título
        <input
          type="text"
          onChange={ updateTitle }
          data-testid="title-input"
          value={ title }
        />
      </label>
    );
  }
}

InputTitle.propTypes = {
  updateTitle: func.isRequired,
  title: string.isRequired,
};

export default InputTitle;
