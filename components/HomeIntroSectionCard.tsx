import React from 'react';

const HomeIntroSectionCard = () => {
  return (
    <div className="home__intro_section-card rounded-sm text-white -mt-52 z-40 relative">
      <div className="px-8 py-10">
        <div className="grid grid-cols-2 divide-x">
          <div>
            <div className="py-14  px-10">
              <h3 className="text-4xl font-extralight leading-10">
                Millions of people have <br /> used our artificial
                <br /> intelligence services.
              </h3>
            </div>
          </div>
          <div>
            <p className="leading-6 font-light px-10 py-14">
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
