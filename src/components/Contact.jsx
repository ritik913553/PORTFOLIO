import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com"; // Import EmailJS
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    document.title = "Contact";
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    // Basic validation
    if (!name || !email || !message) {
      setError("Please fill in all required fields.");
      return;
    }

    setError("");

    // Here you would typically send formData to your email service
    // Send email using EmailJS
    emailjs.send("service_uo5k1pn", "template_zptaisn", formData, "IQZ3MqboRt8UQGgRa")
      .then((response) => {
        console.log("Email sent successfully:", response.status, response.text);
        setIsSubmitted(true);
        setFormData({ name: "", email: "", mobile: "", message: "" }); // Clear the form
      })
      .catch((err) => {
        console.error("Failed to send email:", err);
        setError("Failed to send message. Please try again later.");
      });

    // Simulate successful submission
    setIsSubmitted(true);
    setFormData({ name: "", email: "", mobile: "", message: "" }); // Clear the form
  };

  return (
    <div className="bg-[#390f7c] lg:flex lg:flex-row-reverse gap-72 text-white p-5 mt-10">
      {/* Right section */}
      <div className="lg:w-[50%]">
        <h1 className="text-2xl ml-1">Send me a message</h1>
        <form className="space-y-3 mt-5" onSubmit={handleSubmit}>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full lg:w-[49.5%] p-3 bg-[#0e1130] rounded-md text-lg text-white"
            type="text"
            placeholder="Your name *"
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full lg:w-[49.6%] lg:ml-1 p-3 bg-[#0e1130] rounded-md text-lg"
            type="email"
            placeholder="Your Email *"
            required
          />
          <input
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="w-full p-3 bg-[#0e1130] rounded-md text-lg"
            type="text"
            placeholder="Mobile Number"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 bg-[#0e1130] rounded-md text-lg"
            rows="4"
            placeholder="Your Message *"
            required
          ></textarea>
          {error && <p className="text-red-500">{error}</p>}
          <button type="submit" className="px-4 py-1 bg-[#00EEFF] rounded-full font-bold">
            Send Message
          </button>
          {isSubmitted && <p className="text-green-500">Message sent successfully!</p>}
        </form>
      </div>

      {/* Left section */}
      <div className="mt-10 ml-1">
        <h1 className="text-4xl mb-5">Let's connect</h1>
        <a className="text-lg" href="mailto:ritikgupta913553@gmail.com">
          ritikgupta913553@gmail.com
        </a>
        <h1 className="text-lg">+91 6204572720</h1>
        <div className="flex mt-1 lg:mt-10 text-lg lg:text-xl gap-3">
          {/* Social Media Links */}
          <a
            className="rounded-full border p-[1.5vw] lg:p-[0.5vw] lg:w-[3vw] lg:h-[3vw] flex justify-center items-center border-[#00EEFF]"
            href="https://www.instagram.com/ritikgupta0990/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram color="#00EEFF" />
          </a>

          <a
            className="rounded-full border p-[1.5vw] lg:p-[0.5vw] lg:w-[3vw] lg:h-[3vw] flex justify-center items-center border-[#00EEFF]"
            href="https://wa.me/916204572720"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp color="#00EEFF" />
          </a>
          <a
            className="rounded-full border p-[1.5vw] lg:p-[0.5vw] lg:w-[3vw] lg:h-[3vw] flex justify-center items-center border-[#00EEFF]"
            href="https://www.facebook.com/profile.php?id=100060419000955"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook color="#00EEFF" />
          </a>
          <a
            className="rounded-full border p-[1.5vw] lg:p-[0.5vw] lg:w-[3vw] lg:h-[3vw] flex justify-center items-center border-[#00EEFF]"
            href="https://www.linkedin.com/in/ritik-gupta-52aa982a7/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin color="#00EEFF" />
          </a>

          <a
            className="rounded-full border p-[1.5vw] lg:p-[0.5vw] lg:w-[3vw] lg:h-[3vw] flex justify-center items-center border-[#00EEFF]"
            href="https://x.com/RitikGu24346807"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter color="#00EEFF" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
