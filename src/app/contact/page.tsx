import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Contact K.H. Infinity | Global Trade Solutions - Import Export Company Bangladesh",
  description:
    "Get in touch with K.H. Infinity for all your import-export needs. Contact our team for inquiries about our products and services. Located in Dhaka, Bangladesh.",
  keywords:
    "contact K.H. Infinity, import export contact, global trade contact, Bangladesh trade contact, business inquiry",
  openGraph: {
    title: "Contact K.H. Infinity | Global Trade Solutions",
    description:
      "Get in touch with K.H. Infinity for all your import-export needs. Contact our team for inquiries about our products and services. Located in Dhaka, Bangladesh.",
    images: ["/images/cover/kh1.webp"],
    url: "https://khi.com.bd/contact",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact K.H. Infinity | Global Trade Solutions",
    description:
      "Get in touch with K.H. Infinity for all your import-export needs. Contact our team for inquiries about our products and services. Located in Dhaka, Bangladesh.",
    images: ["/images/cover/kh1.webp"],
  },
};

export default function ContactPage() {
  return (
    <div>
      {/* Contact Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-6 text-gray-800">
            Contact Us
          </h1>
          <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Get in touch with us for any inquiries about our{" "}
            <Link
              href="/products"
              className="text-orange-500 hover:text-orange-600 font-semibold"
            >
              products
            </Link>{" "}
            and{" "}
            <Link
              href="/services"
              className="text-orange-500 hover:text-orange-600 font-semibold"
            >
              services
            </Link>
            . We&apos;re here to help you with your import/export needs.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold mb-8 text-gray-800">
                Send Us a Message
              </h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="name">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
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
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-orange-500"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
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
                    rows={6}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-orange-500"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">
                  Office Location
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <i className="fas fa-map-marker-alt text-orange-500 mt-1 mr-4 text-xl"></i>
                    <div>
                      <h4 className="font-bold mb-1">Head Office</h4>
                      <p className="text-gray-600">
                        Kader Tropical Height, Shop- G5, 10 Hatkhola Road,
                        Tikatuli, Wari, Dhaka 1203, Bangladesh
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-phone text-orange-500 mt-1 mr-4 text-xl"></i>
                    <div>
                      <h4 className="font-bold mb-1">Phone</h4>
                      <p className="text-gray-600">+880 1577081856</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-envelope text-orange-500 mt-1 mr-4 text-xl"></i>
                    <div>
                      <h4 className="font-bold mb-1">Email</h4>
                      <p className="text-gray-600">info@khi.com.bd</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">
                  Business Hours
                </h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="text-gray-600">Thursday - Tuesday</span>
                    <span className="font-bold">9:00 AM - 8:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Wednesday</span>
                    <span className="font-bold">Closed</span>
                  </li>
                </ul>
              </div>

              {/* Social Media */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">
                  Connect With Us
                </h3>
                <div className="flex space-x-6">
                  <a
                    href="#"
                    className="text-gray-600 hover:text-orange-500 transition-colors"
                  >
                    <i className="fab fa-facebook text-3xl"></i>
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-orange-500 transition-colors"
                  >
                    <i className="fab fa-linkedin text-3xl"></i>
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-orange-500 transition-colors"
                  >
                    <i className="fab fa-instagram text-3xl"></i>
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-orange-500 transition-colors"
                  >
                    <i className="fab fa-twitter text-3xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
            Find Us
          </h2>
          <div className="h-96 bg-white rounded-lg shadow-md overflow-hidden">
            <div className="w-full h-full">
              <iframe
                src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Kader Tropical Height, Shop- G5, 10 Hatkhola Road, Tikatuli, Wari, Dhaka 1203, Bangladesh&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
