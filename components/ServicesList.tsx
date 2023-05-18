/* eslint-disable @next/next/no-img-element */
import React from 'react';
import ServicesListItem from './ServicesListItem';
import { BsFillGearFill, BsFillLayersFill } from 'react-icons/bs';
import { IoAnalyticsSharp } from 'react-icons/io5';
import { IoMdAnalytics } from 'react-icons/io';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { VscSettingsGear } from 'react-icons/vsc';

const ServicesList = () => {
  const list = [
    {
      title: 'Data Engineering',
      description:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit dolor',
      icon: <BsFillGearFill />,
    },
    {
      title: 'Data & Analytics',
      description:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit dolor',
      icon: <IoAnalyticsSharp />,
    },
    {
      title: 'Natural Language Processing(NLP)',
      description:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit dolor',
      icon: <BsFillLayersFill />,
    },
    {
      title: 'Object Tracking',
      description:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit dolor',
      icon: <HiOutlineLightBulb />,
    },
    {
      title: 'Prediction System',
      description:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit dolor',
      icon: <IoMdAnalytics />,
    },
    {
      title: 'Automations',
      description:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit dolor',
      icon: <VscSettingsGear />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-20 mt-4">
      {list.map((item) => (
        <ServicesListItem
          key={item.title}
          title={item.title}
          description={item.description}
          icon={list.icon}
        />
      ))}
    </div>
  );
};

export default ServicesList;
