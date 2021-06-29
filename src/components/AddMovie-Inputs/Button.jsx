import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { buttonTitle, dataTestid, click } = this.props;
    return (
      <section>
        <button
          type="button"
          data-testid={ dataTestid }
          onClick={ click }
        >
          { buttonTitle }
        </button>
      </section>
    );
  }
}

Button.propTypes = {
  buttonTitle: PropTypes.string.isRequired,
  dataTestid: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
};

export default Button;
