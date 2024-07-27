import React from 'react';
import PropTypes from 'prop-types';
import LanguageListItem from './LanguageListItem';
import styles from './Languages.module.css';

const LanguageList = ({ languages }) => {
  return (
    <ul className={styles.languageList}>
      {languages.map((language, index) => (
        <LanguageListItem
          key={index}
          name={language.name}
          iconClass={language.iconClass}
        />
      ))}
    </ul>
  );
};

LanguageList.propTypes = {
  languages: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      iconClass: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default LanguageList;
