"use client";

import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(false);

    try {
      const response = await fetch("/api/send-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      setFormData({ name: "", email: "", message: "" });
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    } catch {
      setError(true);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20" aria-label="Contact Information">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
          Contact Us
        </h2>
        {submitted && (
          <div className="max-w-xl mx-auto mb-8 bg-green-50 border border-green-500 text-green-700 px-6 py-4 rounded-lg">
            Thank you for your message. We will get back to you soon!
          </div>
        )}
        {error && (
          <div className="max-w-xl mx-auto mb-8 bg-red-50 border border-red-500 text-red-700 px-6 py-4 rounded-lg">
            Unable to send message. Please email info@khi.com.bd directly.
          </div>
        )}
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <form
              className="space-y-6"
              aria-label="Contact Form"
              onSubmit={handleSubmit}
            >
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-orange-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-orange-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-orange-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
          <address className="space-y-6 not-italic">
            <div>
              <h3 className="text-xl font-bold mb-4">Our Location</h3>
              <p className="text-gray-600">
                Kader Tropical Height, Shop- G5, 10 Hatkhola Road, Tikatuli,
                Wari, Dhaka 1203, Bangladesh
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <p className="text-gray-600">
                Email:{" "}
                <a
                  href="mailto:info@khi.com.bd"
                  className="text-orange-700 hover:text-orange-800"
                >
                  info@khi.com.bd
                </a>
              </p>
              <p className="text-gray-600">
                Phone:{" "}
                <a
                  href="tel:+8801577081856"
                  className="text-orange-700 hover:text-orange-800"
                >
                  +880 1577081856
                </a>
              </p>
            </div>
            <div className="w-full overflow-hidden rounded-lg">
              <div className="relative w-full h-64 sm:h-80 md:h-96">
                <iframe
                  className="absolute inset-0 w-full h-full border-0"
                  src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Kader Tropical Height, Shop- G5, 10 Hatkhola Road, Tikatuli, Wari, Dhaka 1203, Bangladesh&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  title="Our Location"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </address>
        </div>
      </div>
    </section>
  );
}
