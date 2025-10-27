export default function ContactFormSkeleton() {
  return (
    <section id="contact" className="py-20" aria-label="Contact Information">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
          Contact Us
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="space-y-6">
              {/* Name Field Skeleton */}
              <div>
                <div className="h-4 w-20 bg-gray-200 rounded mb-2 animate-pulse"></div>
                <div className="w-full h-12 bg-gray-100 rounded-lg animate-pulse"></div>
              </div>
              {/* Email Field Skeleton */}
              <div>
                <div className="h-4 w-16 bg-gray-200 rounded mb-2 animate-pulse"></div>
                <div className="w-full h-12 bg-gray-100 rounded-lg animate-pulse"></div>
              </div>
              {/* Message Field Skeleton */}
              <div>
                <div className="h-4 w-20 bg-gray-200 rounded mb-2 animate-pulse"></div>
                <div className="w-full h-32 bg-gray-100 rounded-lg animate-pulse"></div>
              </div>
              {/* Button Skeleton */}
              <div className="w-32 h-12 bg-gray-200 rounded-lg animate-pulse"></div>
            </div>
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
                  className="text-orange-500 hover:text-orange-600"
                >
                  info@khi.com.bd
                </a>
              </p>
              <p className="text-gray-600">
                Phone:{" "}
                <a
                  href="tel:+8801400893882"
                  className="text-orange-500 hover:text-orange-600"
                >
                  +880 1400893882
                </a>
              </p>
            </div>
            <div className="w-full overflow-hidden rounded-lg">
              <div className="relative w-full h-64 sm:h-80 md:h-96 bg-gray-100 animate-pulse"></div>
            </div>
          </address>
        </div>
      </div>
    </section>
  );
}
