import React from "react";
import service1 from "../../assets/images/service1.png";
import service2 from "../../assets/images/service2.png";
import service4 from "../../assets/images/service4.png";
import service5 from "../../assets/images/service5.png";
import service6 from "../../assets/images/service6.png";
import { useNavigate } from "react-router-dom";

import { useEffect } from "react";
import { useState } from "react";

const Projects = () => {
  const navigate = useNavigate();

  const [expand, setexpand] = useState(false);
  const view = () => {
    setexpand(!expand);
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const Serviceimg = [service1, service2, service4, service5, service6];

  useEffect(() => {
    if (isPaused) return; // Stop auto-slide when paused

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Serviceimg.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <>
      <section id="projects" className="lg:pt-23">
        <h1
          className="text-[#f4f4f4]  w-full text-center text-[28px] 
                leading-13 md:text-[40px] lg:text-[50px]  font-extrabold md:leading- "
        >
          {" "}
          Projects
        </h1>
        <div
          className="  lg:flex mx-4  lg:mx-8 gap-4 md:gap-10 md:justify-center mt-3  md:mt-15"
          id="home"
        >
          <div className="lg:w-full lg:max-w-5xl">
            <div className=" ">
              <p className=" text-[#fcbb38]  font-[700] leading-7 text-[25px] md:text-[30px]">
                All-in-One Service{" "}
                <span className=" text-[#d41010] font-[700]">Booking</span>{" "}
                website
              </p>

              <div>
                <div>
                  <h1 className="text-white text-[20px] font-[700]">
                    Overview
                  </h1>
                  <p className="text-gray-400 md:text-[15px]  md:mt-0 leading- ">
                    This service booking application connects users with trusted
                    professionals across various categories such as home repair,
                    cleaning, beauty, and wellness. Designed with a
                    user-friendly interface and a secure backend, it simplifies
                    the process of finding, booking, and managing service
                    appointments. Users can explore verified profiles, view
                    ratings and availability, and schedule services in just a
                    few clicks—making everyday tasks more convenient and
                    efficient.
                  </p>
                </div>

                <div className="">
                  <div
                    className={` md:block max-w-[900px] rounded-2xl md:mt-5 overflow-hidden mt-`}
                  >
                    {" "}
                    <figure
                      style={{
                        transform: `translateX(-${currentIndex * 100}%)`,
                      }}
                      className="max-w-[900px]  relative   
                          flex transition-transform duration-1000 ease-in-out shadow  rounded-3xl shadow-amber-400"
                    >
                      {" "}
                      {Serviceimg.map((img, index) => (
                        <img key={index} className="  " src={img} alt="" />
                      ))}
                    </figure>
                  </div>
                </div>

                <div className={`mt-4  `}>
                  <h1 className="text-white text-[20px] font-[700]">
                    Key features
                  </h1>
                  <h2 className="text-[#fcbb38] font-semibold text-[18px]">
                    For Customer :
                  </h2>
                  <p className="text-gray-400 md:text-[15px]  md:mt-0 leading- ">
                    ✅ Secure authentication for both users and service
                    providers using JWT-based login. <br />
                    ✅Easily find professionals by category, location, ratings,
                    and availability. <br />
                    ✅Book services with live availability and receive instant
                    confirmations. <br />
                    ✅ Track past and upcoming bookings for better planning and
                    organization.
                    <br />
                    ✅ Users can rate and review service providers to ensure
                    quality and trust. <br />
                    ✅ Both users and providers can manage profiles, update
                    details, and view activity history. <br />✅ Secure Payments
                    (Optional): Integration with payment gateways for online
                    consultation fees.
                  </p>
                </div>

                <div className={expand ? "block" : "hidden"}>
                  <h2 className="text-[#fcbb38] font-semibold text-[18px]">
                    For Service Providers :
                  </h2>
                  <p className="text-gray-400 md:text-[15px]  md:mt-0 leading- ">
                    ✅ Profile Creation: Add specialization, experience,
                    consultation fees, and availability. <br />
                    ✅ Booking Management: Accept, decline, or reschedule client
                    appointments. <br />
                    ✅Use modals for viewing appointment details and form inputs
                    for rescheduling. <br />
                    ✅ Review & Ratings: Gain credibility through client
                    feedback and reviews. <br />
                  </p>
                </div>

                <div className={` mt-4 ${expand ? "block" : "hidden"}`}>
                  <h1 className="text-white text-[20px] font-[700]">
                    Technology Stack (MERN)
                  </h1>
                  <p className="text-gray-400 md:text-[15px]  md:mt-0 leading- ">
                    ✅ MongoDB: Stores user, doctor, and appointment data
                    efficiently. <br />
                    ✅ Express.js: Handles backend logic, routes, and API
                    endpoints. <br />
                    ✅ React.js: Provides a dynamic and responsive frontend for
                    a smooth user experience. <br />
                    ✅ Node.js: Manages server-side logic and handles requests
                    efficiently. <br />
                  </p>
                </div>

                <div className={` mt-4 ${expand ? "block" : "hidden"}`}>
                  <h1 className="text-white text-[20px] font-[700]">
                    Conclusion
                  </h1>
                  <p className="text-gray-400 md:text-[15px]  md:mt-0 leading- ">
                    Our Service Booking Application is designed to revolutionize
                    the booking system by making it more convenient for customer
                    and efficient for service-povider. With its user-centric
                    approach and scalable architecture, this platform ensures a
                    seamless servicing consultation experience.
                  </p>
                </div>
              </div>

              <div className="flex md:gap-8 gap-4 mt-3">
                <button
                  onClick={view}
                  className="bg-[#187895] font-[700] px-2 md:px-4 md:py-2 py-1 border  border-amber-50   rounded-3xl cursor-pointer"
                >
                  View <span className="text-[#f4f4f4] ">More</span>
                </button>
                {/* <button className="text-[#f4f4f4] border hover:bg-white hover:text-black hover:border-black border-amber-50 font-[700] px-5 py-2 rounded-3xl cursor-pointer">
                Code
              </button> */}
                <a
                  href="https://github.com/yashika2244/Serivce"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <button className="text-[#f4f4f4] border border-amber-50 font-bold px-5 py-2 rounded-3xl cursor-pointer hover:bg-white hover:text-black hover:border-black text-sm sm:text-base whitespace-nowrap">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
