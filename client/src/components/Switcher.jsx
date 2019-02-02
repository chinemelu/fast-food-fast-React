import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Switcher = ({
  firstClassName,
  secondClassName,
  listClass,
  firstValue,
  secondValue,
  onClickFirstSwitcher,
  onClickSecondSwitcher,
}) => (
  <ul className={listClass}>
    <li>
      <Link
        to="#"
        onClick={onClickFirstSwitcher}
        className={firstClassName}
      >
        {firstValue}
      </Link>

    </li>
    <li>
      <Link
        to="#"
        className={secondClassName}
        onClick={onClickSecondSwitcher}
      >
        {secondValue}

      </Link>

    </li>
  </ul>
);

Switcher.propTypes = {
  firstClassName: PropTypes.string.isRequired,
  secondClassName: PropTypes.string.isRequired,
  listClass: PropTypes.string,
  firstValue: PropTypes.string.isRequired,
  secondValue: PropTypes.string.isRequired
};

Switcher.defaultProps = {
  listClass: null
};


export default Switcher;
