import React from "react";
import {
  FaGraduationCap,
  FaRocket,
  FaUsers,
  FaQuestionCircle,
  FaMobile,
  FaMoneyBillAlt,
} from "react-icons/fa";
import SectionTitle from "./SectionTitle";

const AboutUs = () => {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto p-6 md:p-10">
        <SectionTitle
          title={"About Us"}
          subTitle={"Get to know more about our mission, vision, and values."}
        />
        <div className="">
          <h2 className="text-2xl font-semibold text-green-700">
            Help Polytechnic Students Succeed with Online Learning!
          </h2>

          <p className="text-base md:text-xl">
            Thinking of becoming an engineer? Softmax Online School is here to
            help! We are the top online learning platform in Bangladesh, built
            just for diploma students like you.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 group">
            <div className="bg-white/10 flex items-center shadow-xl hover:shadow-2xl p-5 h-64 md:h-48 rounded duration-300">
              <FaGraduationCap
                size={400}
                className="hidden md:block text-green-700 group-hover:text-green-900 duration-300"
              />
              <div className="ml-3">
                <h3 className="text-xl font-bold text-green-700">
                  Boost Your Studies
                </h3>
                <p className="text-base text-gray-700 font-semibold">
                  We have got tons of courses that match your Polytechnic
                  classes. Expert teachers explain everything clearly, so no
                  more confusion! We shall also help you solve problems like a
                  pro and learn study tricks to get the best grades.
                </p>
              </div>
            </div>

            <div className="bg-white/10 flex items-center shadow-xl hover:shadow-2xl p-5 h-72 md:h-48 rounded duration-300 group">
              <FaRocket
                size={400}
                className="hidden md:block text-green-700 group-hover:text-green-900 duration-300"
              />
              <div className="ml-3">
                <h3 className="text-xl font-bold text-green-700">
                  Land Your Dream Job
                </h3>
                <p className="text-base text-gray-700 font-semibold">
                  Want to be an Assistant or Sub-Assistant Engineer? We can
                  help! Learn about different engineering fields, practice
                  interview questions with confidence, and write resumes and
                  cover letters that impress anyone. We shall even teach you
                  teamwork, communication, and leadership skills to shine in
                  front of employers.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 md:mt-16">
            <p className="text-2xl font-semibold text-green-700 mb-3">
              Softmax is more than just courses:
            </p>

            <ul className="grid gap-3 gr">
              <li className="text-gray-700 text-base md:text-xl font-semibold flex items-start md:items-center group hover:text-gray-900 duration-300">
                <FaUsers className="mr-2 text-green-700 group-hover:text-green-900 duration-300 text-2xl" />
                Join our friendly online community and connect with other
                students.
              </li>
              <li className="text-gray-700 text-base md:text-xl font-semibold flex items-start md:items-center group hover:text-gray-900 duration-300">
                <FaQuestionCircle className="mr-2 text-green-700 group-hover:text-green-900 duration-300 text-xl" />
                Ask us any questions - we are always here to help!
              </li>
              <li className="text-gray-700 text-base md:text-xl font-semibold flex items-start md:items-center group hover:text-gray-900 duration-300">
                <FaMobile className="mr-2 text-green-700 group-hover:text-green-900 duration-300 text-xl" />
                Study anytime, anywhere with our handy SOS mobile app.
              </li>
              <li className="text-gray-700 text-base md:text-xl font-semibold flex items-start md:items-center group hover:text-gray-900 duration-300">
                <FaMoneyBillAlt className="mr-2 text-green-700 group-hover:text-green-900 duration-300 text-2xl" />
                Our courses are affordable so you can get a great education
                without breaking the bank.
              </li>
            </ul>
          </div>
          <a
            href="classes"
            className="mt-6 relative inline-block text-lg group"
          >
            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-green-700 transition-colors duration-300 ease-out border-2 border-green-700 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-white"></span>
              <span className="absolute left-0 w-[270px] h-[270px] -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-green-700 group-hover:-rotate-180 ease"></span>
              <span className="relative"> Start Your Journey Now!</span>
            </span>
            <span
              className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-green-700 rounded-lg group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
