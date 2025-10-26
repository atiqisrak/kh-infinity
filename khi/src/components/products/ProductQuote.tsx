interface ProductQuoteProps {
  primaryColor: string;
  bgColor: string;
  bgColorHover: string;
}

export default function ProductQuote({
  primaryColor,
  bgColor,
  bgColorHover,
}: ProductQuoteProps) {
  return (
    <section id="contact" className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center text-gray-800">
          Request a Quote
        </h2>
        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
                    primaryColor === "green"
                      ? "focus:border-green-500"
                      : "focus:border-orange-500"
                  }`}
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
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
                    primaryColor === "green"
                      ? "focus:border-green-500"
                      : "focus:border-orange-500"
                  }`}
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="quantity">
                Required Quantity
              </label>
              <input
                type="text"
                id="quantity"
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
                  primaryColor === "green"
                    ? "focus:border-green-500"
                    : "focus:border-orange-500"
                }`}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="message">
                Additional Requirements
              </label>
              <textarea
                id="message"
                rows={4}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
                  primaryColor === "green"
                    ? "focus:border-green-500"
                    : "focus:border-orange-500"
                }`}
              ></textarea>
            </div>
            <button
              type="submit"
              className={`w-full ${bgColor} text-white px-8 py-3 rounded-lg hover:${bgColorHover} transition-colors`}
            >
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
