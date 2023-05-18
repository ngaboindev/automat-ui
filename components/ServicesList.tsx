/* eslint-disable @next/next/no-img-element */
import React from 'react';
import ServicesListItem from './ServicesListItem';

const ServicesList = () => {
  const list = [
    {
      title: 'Data Engineering',
      description:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit dolor',
    },
    {
      title: 'Data & Analytics',
      description:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit dolor',
    },
    {
      title: 'Natural Language Processing(NLP)',
      description:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit dolor',
    },
    {
      title: 'Object Tracking',
      description:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit dolor',
    },
    {
      title: 'Prediction System',
      description:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit dolor',
    },
    {
      title: 'Automations',
      description:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit dolor',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-20 mt-4">
      {list.map((item) => (
        <ServicesListItem
          key={item.title}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default ServicesList;
