import { useState } from "react";
// import emailjs from "emailjs-com";
import emailjs from "@emailjs/browser";
import { FaWhatsapp, FaFacebookMessenger } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { GrLocation } from "react-icons/gr";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_eq2zub6", // EmailJS service ID
        "template_ifyt9l8", // template ID
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "0-2VBAESePt6jRghL" //EmailJS public key
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          setForm({ name: "", email: "", message: "" });
          setLoading(false);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("❌ Failed to send message. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <div className="bg-gradient-to-b from-purple-50 to-white min-h-screen">
      {/* ✨ Hero Section */}
      <section className="text-center py-20 px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold text-purple-700 mb-6 drop-shadow-md">
          Get in Touch
        </h1>
        <p className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          We’d love to hear from you! Whether planning your next adventure, seeking travel tips, or exploring partnerships, our TourAvels team is here to help you discover Bangladesh with ease.
        </p>
      </section>

      {/* 📨 Contact Section */}
      <section className="container mx-auto px-6 pb-24 grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-8 flex flex-col justify-center">
          <div className="bg-white shadow-lg p-6 rounded-2xl border border-purple-100 hover:shadow-2xl transition-all duration-300">
            <MdEmail className="text-3xl text-purple-600 mb-2" />
            <h3 className="text-xl font-semibold text-purple-700">Email Us</h3>
            <p className="text-gray-600">mirhimel012@gmail.com</p>
          </div>

          <div className="bg-white shadow-lg p-6 rounded-2xl border border-purple-100 hover:shadow-2xl transition-all duration-300">
            <FaWhatsapp className="text-3xl text-green-500 mb-2" />
            <h3 className="text-xl font-semibold text-purple-700">WhatsApp</h3>
            <p className="text-gray-600">+8801764630254</p>
          </div>

          <div className="bg-white shadow-lg p-6 rounded-2xl border border-purple-100 hover:shadow-2xl transition-all duration-300">
            <FaFacebookMessenger className="text-3xl text-blue-600 mb-2" />
            <h3 className="text-xl font-semibold text-purple-700">Messenger</h3>
            <p className="text-gray-600">m.me/touravels</p>
          </div>

          <div className="bg-white shadow-lg p-6 rounded-2xl border border-purple-100 hover:shadow-2xl transition-all duration-300">
            <GrLocation className="text-3xl text-purple-600 mb-2" />
            <h3 className="text-xl font-semibold text-purple-700">Our Office</h3>
            <p className="text-gray-600">Mirpur, Dhaka, Bangladesh</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-xl rounded-2xl border border-purple-100 p-8">
          <h2 className="text-3xl font-bold text-purple-700 mb-6 text-center">
            Send Us a Message
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label className="block text-purple-700 font-semibold mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="w-full px-4 py-3 border border-purple-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div className="mb-5">
              <label className="block text-purple-700 font-semibold mb-2">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3 border border-purple-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div className="mb-6">
              <label className="block text-purple-700 font-semibold mb-2">
                Your Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Type your message..."
                rows="6"
                required
                className="w-full px-4 py-3 border border-purple-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-xl text-white font-bold text-lg transition-all duration-200 shadow-md ${
                loading
                  ? "bg-purple-400 cursor-not-allowed"
                  : "bg-purple-600 hover:bg-purple-800"
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </section>

      {/* 🗺️ Optional Map Section */}
      <section className="w-full h-96 bg-purple-100 mt-12">
        <iframe
          title="TourAvels Location"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2917.5385233835027!2d90.34456509344977!3d23.812742512991953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sbd!4v1760983621566!5m2!1sen!2sbd"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          className="rounded-none"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
