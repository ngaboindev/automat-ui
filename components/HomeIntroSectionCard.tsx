import React from 'react';

const HomeIntroSectionCard = () => {
  return (
    <div className="home__intro_section-card rounded-sm text-white -mt-52 z-40 relative">
      <div className="px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2  lg:divide-x">
          <div>
            <div className="py-3 lg:py-14  px-10">
              <h3 className="text-2xl lg:text-4xl font-extralight leading-10">
                Millions of people have used our artificial intelligence
                services.
              </h3>
            </div>
          </div>
          <div>
            <p className="leading-6 font-light px-10 lg:py-14 text-sm lg:text-base">
              Tortor mollis accumsan gravida pulvinar at curae rhoncus commodo.
              Morbi venenatis enim natoque aliquet letius eget quam ac lacus
              litora. Ut diam habitasse hendrerit turpis potenti. Elementum
              nullam parturient pede ornare integer gravida habitant lacinia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeIntroSectionCard;
