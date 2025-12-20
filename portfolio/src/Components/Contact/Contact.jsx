import React, { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "yashika123",
        "template_8trbs77",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "ZQQdhRIPdRbJM19pF"
      )
      .then(
        () => {
          toast.success("Message sent successfully ✨");
          setFormData({ name: "", email: "", message: "" });
          setLoading(false);
        },
        () => {
          toast.error("Failed to send message . Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-[#f9fafb] px-4 py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full max-w-5xl bg-white border border-gray-200 rounded-2xl p-6 md:p-14 grid grid-cols-1 md:grid-cols-2 gap-14"
      >
        {/* Left Section */}
        <div>
          <h2 className="text-3xl font-semibold text-gray-900">Contact</h2>

          <div className="w-12 h-[2px] bg-black mt-3 mb-6" />

          <p className="text-gray-600 leading-relaxed max-w-md">
            I’m always open to discussing new opportunities, meaningful
            projects, or professional collaborations.
          </p>

          <div className="mt-10 space-y-5 text-sm text-gray-700">
            <div>
              <p className="font-medium text-gray-900">Email</p>
              <p className="text-gray-600">chauhanyashika820@gmail.com</p>
            </div>

            <div>
              <p className="font-medium text-gray-900">Location</p>
              <p className="text-gray-600">Bijnor, Uttar Pradesh, India</p>
            </div>
          </div>

          <div className="flex gap-8 mt-10 text-sm">
            <a
              href="https://github.com/yashika2244"
              target="_blank"
              className="text-gray-600 hover:text-black transition"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/yashika22"
              target="_blank"
              className="text-gray-600 hover:text-black transition"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Right Section */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm
                         focus:outline-none focus:border-black transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm
                         focus:outline-none focus:border-black transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm
                         focus:outline-none focus:border-black transition resize-none"
            />
          </div>

          <motion.button
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.97 }}
            disabled={loading}
            type="submit"
            className={`w-full py-3 rounded-lg text-sm font-medium transition
              ${
                loading
                  ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                  : "bg-black text-white hover:bg-gray-900"
              }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
}
