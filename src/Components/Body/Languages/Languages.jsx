import React from 'react';
import styles from './Languages.module.css';
import Reveal from '../../Utils/reveal';
import LanguageList from './LanguageList';

const Languages = () => {
  const frontendLanguages = [
    { name: 'CSS', iconClass: 'css' },
    { name: 'React', iconClass: 'react' },
    { name: 'JavaScript', iconClass: 'js' },
    { name: 'TypeScript', iconClass: 'ts' },
    { name: 'Blazor', iconClass: 'blazor' },
  ];

  const backendLanguages = [
    { name: 'Java', iconClass: 'java' },
    { name: 'C#', iconClass: 'csharp' },
    { name: '.NET', iconClass: 'dotnet' },
    { name: 'Azure', iconClass: 'azure' },
  ];

  return (
    <div className={styles.languagesContainer}>
      <div className={styles.languagesTitle}>
        <h1>
          <Reveal>Languages</Reveal>
        </h1>
      </div>
      <div className={styles.languages}>
        <div className={styles.frontendLanguages}>
          <h1>Frontend</h1>
          <LanguageList languages={frontendLanguages} />
        </div>
        <div className={styles.backendLanguages}>
          <h1>Backend</h1>
          <LanguageList languages={backendLanguages} />
        </div>
      </div>
    </div>
  );
};

export default Languages;
