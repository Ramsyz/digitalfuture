import Image from "next/image";
import { aboutData } from "./data";

const About = () => {
  return (
    <>
      <div className="container px-5 py-14 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-sm text-gray-500 tracking-widest font-medium">
            ABOUT US
          </h2>
          <p className="sm:text-3xl text-2xl font-semibold text-slate-900">
            Smart Solutions, Seamless Operations
          </p>
        </div>

        <div className="flex flex-wrap -m-4 gap-10 md:gap-0">
          {aboutData.map(({ id, title, text, icon }) => (
            <div key={id} className="p-4 md:w-1/3">
              <div className="flex flex-col h-full rounded-lg bg-white p-6 shadow-md">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-gray-500 text-white flex-shrink-0">
                    {icon}
                  </div>
                  <h2 className="text-gray-900 text-lg font-medium">{title}</h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">{text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden flex items-center">
          <Image
            src="/about1.jpg"
            alt="About us"
            width={400}
            height={400}
            className="w-full"
          />
        </div>
        <div className="flex flex-col lg:py-6 -mb-10 lg:w-1/2 lg:pl-12">
          {aboutData.map(({ id, title, text, icon }) => (
            <div
              key={id + title}
              className="flex flex-col mb-10 lg:item-start items-center"
            >
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-100 text-gray-500 mb-5">
                {icon}
              </div>

              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg font-semibold mb-3">
                  {title}
                </h2>
                <p className="leading-relaxed text-base">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
