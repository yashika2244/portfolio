import React from "react";

export default function Contact() {
  return (
    <div id="contact" className=" bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-2xl p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Contact Info Section */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-6">
            Fill free to reach out for collaborations, inquiries, or just to say
            hello!
          </p>
          <ul className="space-y-3  ">
            <li>
              <strong>Email:</strong> chauhanyashika820@gmail.com
            </li>
            <li>
              <strong>Phone:</strong> +91-XXXXXXXXXX
            </li>
            <li>
              <strong>Location:</strong> Bijnor,Uttar pradesh,India
            </li>
          </ul>
          <div className="mt-3   ">
            <a
              href="https://github.com/yashika2244"
              target="_blank"
              className="mx-4 text-blue-600 hover:text-blue-800"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/yashika-chauhan-46ab49318/"
              target="_blank"
              className="mx-4 text-blue-600 hover:text-blue-800"
            >
              LinkedIn
            </a>
            <a
              href=""
              target="_blank"
              className="mx-4 text-blue-600 hover:text-blue-800"
            >
              Twitter
            </a>
          </div>
        </div>

        {/* Contact Form Section */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border p-3 rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border p-3 rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full border p-3 rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
