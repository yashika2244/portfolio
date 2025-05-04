import React from "react";
import my_pic from "../../assets/images/my_pic.jpg";

function Home() {
  return (
    <>
      <section id="home" className=" text-white    flex justify-center">
        <div className="  flex mx-4 md:mx-8 gap-4 md:gap-20 md:justify-center md:mt-20">
          <div className="md:mt-16 mt-7">
            <p className=" text-[#fcbb38] font-[700] md:text-[20px]">
              Hey <span className="text-[#f4f4f4] font-[700]">!</span>
            </p>
            <h1 className="text-[#f4f4f4] text-[30px] leading- md:text-[60px] lg:text-[60px] font-extrabold md:leading- ">
              {" "}
              I am <span className="text-[#fcbb38]">Yashika chauhan</span>{" "}
            </h1>

            <div className="block md:hidden ">
              {" "}
              <figure className="max-w-[300px] w-[290px] hover:shadow-white border-2 border-white    shadow rounded-2xl shadow-white">
                {" "}
                <img
                  src={my_pic}
                  alt=""
                  className="cursor-pointer border- border-white  rounded-2xl"
                />
              </figure>
            </div>
            <h1 className="text-slate-300 md:text-[25px] mt-2 md:mt-8 ">
              Mern Stack Web-Developer
            </h1>
            <h1 className="text-slate-300 md:text-[19px] text-[13px] md:mt-2  ">
              Crafting Scalable & Modern Web Applications !
            </h1>
            <div className="flex md:gap-8 gap-4 mt-3 md:mt-6 ">
              <a
                href="#contact"
                className="bg-[#fcbb38] font-[700]  px-2 hover:bg-[#e0a728] py-1 text-black transition md:px-4 md:py-2 border border-amber-50   rounded-3xl cursor-pointer"
              >
                Hire <span className="text-[#f4f4f4] ">Me</span>
              </a>
              <a
                // target="_blank"
                // rel="noopener noreferrer"
                href="#projects"
                className="text-[#f4f4f4] border border-amber-50  hover:bg-white hover:text-black px-3 py-[5px] transition font-[700] md:px-3 md:py-2 rounded-3xl cursor-pointer"
              >
                Projects
              </a>
            </div>
          </div>

          <div className="hidden md:block md:mt-8 w-[380px] h-[380px] rounded-full overflow-hidden border- hover:shadow-white transition border  outline outline-white-500 hover:shadow-xl  duration-300">
            <figure className="w-full h-full rounded-full outline-2 ">
              <img
                src={my_pic}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </figure>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
