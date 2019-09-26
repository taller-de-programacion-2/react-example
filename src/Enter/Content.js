import React from 'react';
import Card from '../Card/Card';
import './Content.css';

function Content({ sections, onSectionClicked }) {
  return (
    <main>
      {
        sections.map(({ name, icon }) => (
          <div key={name} onClick={() => onSectionClicked(name)}>
            <Card title={name} icon={icon} />
          </div>
        ))
      }
    </main>
  );
}

export default Content;