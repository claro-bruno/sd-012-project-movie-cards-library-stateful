import React from 'react';
import { string, func } from 'prop-types';

class Sinopse extends React.Component {
  render() {
    const { storyline, changeTextHandle } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor="search" className="col-12">
        Sinopse
        <textarea
          className="form-control"
          type="text"
          placeholder="Insira uma sinopse"
          data-testid="storyline-input"
          value={ storyline }
          onChange={ changeTextHandle }
        />
      </label>
    );
  }
}

Sinopse.propTypes = {
  storyline: string.isRequired,
  changeTextHandle: func.isRequired,
};

export default Sinopse;
