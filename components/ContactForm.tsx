// ContactForm.tsx
"use client"
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();
  const [notification, setNotification] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kmb4rdi",
        "template_5s5elow",
        form.current,
        "kBOmWIj9O7MTbNeam"
      )
      .then(
        (result) => {
          console.log(result.text);
          setNotification("Email sent successfully!");
        },
        (error) => {
          console.log(error.text);
          setNotification("Error sending email. Please try again later.");
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <h2 className="text-2xl font-bold mb-5 text-white">Contact Me</h2>
      {notification && (
        <div className="mb-3 text-white bg-green-500 p-2 rounded">
          {notification}
        </div>
      )}
      <div className="mb-3">
        <input
          type="text"
          placeholder="Your name"
          name="user_name"
          className="w-full px-3 py-2 text-sm text-black placeholder-gray-400 bg-white border-0 rounded shadow"
        />
      </div>
      <div className="mb-3">
        <input
          type="email"
          placeholder="Email"
          name="user_email"
          className="w-full px-3 py-2 text-sm text-black placeholder-gray-400 bg-white border-0 rounded shadow"
        />
      </div>
      <div className="mb-3">
        <textarea
          placeholder="Your message"
          name="message"
          className="w-full px-3 py-2 text-sm text-black placeholder-gray-400 bg-white border-0 rounded shadow"
        />
      </div>
      <input
        className="px-6 mb-10 py-3 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 hover:bg-blue-400"
        type="submit"
        value={"Send a message"}
      />
    </form>
  );
};

export default ContactForm;
