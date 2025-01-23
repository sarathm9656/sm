import React, { useState } from "react";
import { database } from "./config/firebase_config";
import { ref, push } from "firebase/database";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const dbRef = ref(database, "contacts"); // 'contacts' is the collection name
    push(dbRef, formData)
      .then(() => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Reset form
      })
      .catch((error) => {
        console.error("Error sending message: ", error);
        alert("Failed to send message.");
      });
  };

  return (
    <section
      className="text-center py-20"
      style={{ backgroundColor: "black" }}
    >
      <h3 className="text-xl font-semibold text-green-500 mb-4 text-left pl-5">
        05. CONTACT
      </h3>

      <h2 className="text-4xl font-semibold mb-6 text-white flex items-center justify-center space-x-4">
        <div className="bg-gray-900 w-20 h-2 rounded-[10px]"></div>
        <span className="my-10"> Contact Me</span>
        <div className="bg-gray-900 w-20 h-2 rounded-[10px]"></div>
      </h2>
      <p className="text-lg max-w-2xl mx-auto mb-8 text-gray-300">
        I would love to hear from you! Whether it's a project collaboration, a
        job opportunity, or just a friendly chat, feel free to reach out.
      </p>
      <p className="text-lg mb-4 text-gray-300">
        Email:{" "}
        <a
          href="mailto:sarathmullath2003@gmail.com"
          className="text-yellow-500"
        >
          sarathmullath2003@gmail.com
        </a>
      </p>
      <p className="text-lg mb-4 text-gray-300">Phone: 9544587196</p>
      <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full mb-4 p-3 bg-gray-600 rounded-lg text-white"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full mb-4 p-3 bg-gray-600 rounded-lg text-white"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full mb-4 p-3 bg-gray-600 rounded-lg text-white"
        ></textarea>
        <button
          type="submit"
          className="bg-yellow-500 text-black px-6 py-3 rounded-full text-lg hover:bg-yellow-400 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
