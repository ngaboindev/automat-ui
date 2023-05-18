import React from 'react';

const ServicesSectionNumbersCard = () => {
  return (
    <div className="home__intro_section-card rounded-sm text-white -bottom-14 pb-3 z-40 absolute">
      <div className="px-8 py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="text-center space-y-3 text-white">
            <h3 className="text-4xl lg:text-7xl font-semibold">2010</h3>
            <p className="text-sm">the year of foundation</p>
          </div>
          <div className="text-center space-y-3 text-white">
            <h3 className="text-4xl lg:text-7xl font-semibold">741+</h3>
            <p className="text-sm">solutions delivered</p>
          </div>
          <div className="text-center space-y-3 text-white">
            <h3 className="text-4xl lg:text-7xl font-semibold">411+</h3>
            <p className="text-sm">professionals and growing</p>
          </div>
          <div className="text-center space-y-3 text-white">
            <h3 className="text-4xl lg:text-7xl font-semibold">90%</h3>
            <p className="text-sm">
              hold BS, MS, or PhD in Math/Computer Science
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSectionNumbersCard;
