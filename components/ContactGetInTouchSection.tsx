import React from 'react';
import { AiOutlineWechat } from 'react-icons/ai';

import { BiSupport } from 'react-icons/bi';
import { FaTools } from 'react-icons/fa';

const ContactGetInTouchSection = () => {
  const list = [
    {
      title: 'Marketing & Sales',
      description:
        ' Vivamus condimentum praesent duis himenaeos netus diam gravida tempor tristique',
      icon: <BiSupport />,
      buttonTitle: 'chat now!',
    },
    {
      title: 'Technical Support',
      description:
        ' Vivamus condimentum praesent duis himenaeos netus diam gravida tempor tristique',
      icon: <FaTools />,
      buttonTitle: 'send ticket',
    },
    {
      title: 'Help Center',
      description:
        ' Vivamus condimentum praesent duis himenaeos netus diam gravida tempor tristique',
      icon: <AiOutlineWechat />,
      buttonTitle: 'find answer',
    },
  ];

  return (
    <div className="bg-accent py-24">
      <div className="wrapper">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col gap-6 justify-between">
            {list.map((item) => (
              <div
                key={item.title}
                className="bg-tertiary-100 group rounded-sm text-white"
              >
                <div className="px-8 py-6">
                  <div className="grid  grid-cols-4 lg:grid-cols-6 gap-3">
                    <div>
                      <div className="bg-neutral w-16 h-16 rounded-sm flex items-center justify-center text-primary text-4xl">
                        {item.icon}
                      </div>
                    </div>
                    <div className="col-span-3 lg:col-span-5 space-y-4">
                      <h4 className="text-primary text-2xl font-light">
                        {item.title}
                      </h4>
                      <p>{item.description}</p>
                      <button className="btn btn-primary group-hover:bg-secondary">
                        {item.buttonTitle}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-tertiary-100 group rounded-sm text-white">
            <div className="px-8 py-6">
              <div className="space-y-5 pb-6">
                <h2 className="text-3xl lg:text-5xl font-medium">
                  Get in touch
                </h2>
                <p className="text-sm md:text-base font-light leading-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
                </p>
              </div>
              <div className="pt-7">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
                    <div className="space-y-1">
                      <label htmlFor="phone" className="font-medium block">
                        Departement
                      </label>
                      <select
                        name="departement"
                        id="departement"
                        className="input focus:bg-neutral text-white"
                      >
                        <option value="bill">Billing & Payment</option>
                        <option value="account">Accounting</option>
                        <option value="account">Management</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="subject" className="font-medium block">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      placeholder="Subject"
                      className="input"
                    />
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
                  <button className="btn btn-primary w-full block">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactGetInTouchSection;
