import React from 'react';
import PropTypes from 'prop-types';
import styles from './Languages.module.css';

const LanguageListItem = ({ name, iconClass }) => {
  return (
    <li className={styles.languageListItem}>
      <span className={`${styles.languageIcon} ${styles[iconClass]}`}></span>
      {name}
    </li>
  );
};

LanguageListItem.propTypes = {
  name: PropTypes.string.isRequired,
  iconClass: PropTypes.string.isRequired,
};

export default LanguageListItem;
