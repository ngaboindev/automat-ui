import React from 'react';

const ContactUsFormCard = () => {
  return (
    <div className="z-40 -mt-24">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="bg-primary">
          <div className="px-8 py-6 text-white flex justify-center items-center  h-full">
            <div>
              <h4 className="text-2xl font-extralight pb-8">Headquarter</h4>
              <div className="border-2 border-white w-16"></div>

              <div className="py-4">
                <ul className="space-y-3 text-sm">
                  <li>ln Cempaka Wangi No 22, Jakarta - Indonesia</li>
                  <li>support@yourdomain.tld</li>
                  <li>+(62)21 2002-2012</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-tertiary-100 col-span-2">
          <div className="px-8 py-6 text-white">
            <h4 className="text-4xl leading-tight font-extralight">
              Exploring machine learning or have a specific use case? Let’s
              talk.
            </h4>
            <div className="pt-7">
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-1">
                    <label htmlFor="name" className="font-medium block">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Name"
                      className="input"
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="phone" className="font-medium block">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="Phone"
                      className="input"
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="email" className="font-medium block">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Email"
                      className="input"
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <label htmlFor="message" className="font-medium block">
                    Message
                  </label>
                  <textarea
                    className="input"
                    id="message"
                    placeholder="Message"
                    cols={5}
                    rows={4}
                  ></textarea>
                </div>
                <button className="btn btn-primary w-full block">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsFormCard;
