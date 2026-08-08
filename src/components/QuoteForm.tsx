"use client";

import { useState } from "react";
import Link from "next/link";
import { getProducts } from "@/lib/products";

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    product: "",
    quantity: "",
    destination: "",
    name: "",
    email: "",
    phone: "",
    company: "",
    specifications: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/send-quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      setFormData({
        product: "",
        quantity: "",
        destination: "",
        name: "",
        email: "",
        phone: "",
        company: "",
        specifications: "",
      });
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    } catch {
      alert("Unable to submit your request. Please email info@khi.com.bd directly.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Request a Quote</h2>

      {submitted ? (
        <div className="bg-green-50 border border-green-500 text-green-700 px-6 py-4 rounded-lg mb-6">
          <div className="flex items-center">
            <i className="fas fa-check-circle text-2xl mr-3"></i>
            <div>
              <h3 className="font-bold text-lg">Thank You!</h3>
              <p>
                We&apos;ve received your inquiry. Our team will get back to you
                within 24 hours.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="product">
              Product / Category <span className="text-red-500">*</span>
            </label>
            <select
              id="product"
              name="product"
              value={formData.product}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-orange-500"
              required
            >
              <option value="">Select a product</option>
              {getProducts().map((product) => (
                <option key={product.id} value={product.name}>
                  {product.name} (
                  {product.type === "import" ? "Import" : "Export"})
                </option>
              ))}
            </select>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="quantity">
                Quantity Required <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="quantity"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                placeholder="e.g., 10 MT, 1000 units"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-orange-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="destination">
                Destination Country/Port <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="destination"
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                placeholder="e.g., Bangladesh, Chittagong Port"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-orange-500"
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="name">
                Full Name <span className="text-red-500">*</span>
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
                Email <span className="text-red-500">*</span>
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
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="phone">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-orange-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="company">
                Company Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-orange-500"
              />
            </div>
          </div>

          <div>
            <label
              className="block text-gray-700 mb-2"
              htmlFor="specifications"
            >
              Additional Specifications
            </label>
            <textarea
              id="specifications"
              name="specifications"
              rows={4}
              value={formData.specifications}
              onChange={handleChange}
              placeholder="Please provide any additional details, specifications, or requirements..."
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-orange-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition-colors font-medium"
          >
            Submit Request
          </button>
        </form>
      )}

      <div className="mt-8 p-6 bg-orange-50 rounded-lg">
        <h3 className="text-xl font-bold mb-4 text-gray-800">
          What Happens Next?
        </h3>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start">
            <i className="fas fa-check-circle text-orange-500 mt-1 mr-3"></i>
            <span>We&apos;ll review your request within 24 hours</span>
          </li>
          <li className="flex items-start">
            <i className="fas fa-check-circle text-orange-500 mt-1 mr-3"></i>
            <span>Our team will prepare a detailed quote for you</span>
          </li>
          <li className="flex items-start">
            <i className="fas fa-check-circle text-orange-500 mt-1 mr-3"></i>
            <span>
              You&apos;ll receive pricing, delivery details, and next steps
            </span>
          </li>
        </ul>
      </div>

      <p className="mt-6 text-sm text-gray-600">
        Need immediate assistance?{" "}
        <Link
          href="/contact"
          className="text-orange-500 hover:text-orange-600 font-semibold"
        >
          Contact us directly
        </Link>
        .
      </p>
    </div>
  );
}
