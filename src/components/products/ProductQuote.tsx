interface ProductQuoteProps {
  primaryColor: string;
  bgColor: string;
  bgColorHover: string;
  borderColor: string;
}

export default function ProductQuote({
  primaryColor,
  bgColor,
  bgColorHover,
  borderColor,
}: ProductQuoteProps) {
  const focusRing =
    primaryColor === "green"
      ? "focus:border-green-500 focus:ring-green-500/20"
      : "focus:border-orange-500 focus:ring-orange-500/20";
  const inputClass = `w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-800 outline-none focus:ring-4 transition-shadow ${focusRing}`;

  return (
    <section id="contact" className="relative py-12 md:py-20 bg-gray-50 overflow-hidden">
      <div
        className={`absolute -top-16 -left-16 w-56 h-56 ${bgColor} opacity-[0.06] rounded-full blur-3xl pointer-events-none`}
        aria-hidden="true"
      />
      <div className="container relative mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Request a Quote
          </h2>
          <p className="text-gray-600 mt-2 text-sm md:text-base">
            Share your requirements and our trade team will respond within 24
            hours.
          </p>
        </div>
        <div className={`max-w-2xl mx-auto bg-white rounded-2xl border-t-2 ${borderColor} border-x border-b border-gray-100 shadow-sm p-6 md:p-10`}>
          <form className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                  htmlFor="name"
                >
                  Name
                </label>
                <input type="text" id="name" className={inputClass} required />
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className={inputClass}
                  required
                />
              </div>
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700 mb-1.5"
                htmlFor="quantity"
              >
                Required Quantity
              </label>
              <input
                type="text"
                id="quantity"
                className={inputClass}
                required
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700 mb-1.5"
                htmlFor="message"
              >
                Additional Requirements
              </label>
              <textarea
                id="message"
                rows={4}
                className={inputClass}
              ></textarea>
            </div>
            <button
              type="submit"
              className={`w-full ${bgColor} text-white px-8 py-3 rounded-lg hover:${bgColorHover} transition-colors font-medium`}
            >
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
