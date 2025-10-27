import Link from "next/link";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50" aria-label="About Us">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
          About Us
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600">
              K.H. Infinity is your trusted partner in international trade,
              specializing in importing essential commodities and exporting
              quality Bangladeshi products to global markets. Our
              <Link
                href="/services"
                className="text-orange-500 hover:text-orange-600 font-semibold"
              >
                {" "}
                comprehensive services
              </Link>{" "}
              include
              <Link
                href="/products"
                className="text-orange-500 hover:text-orange-600 font-semibold"
              >
                {" "}
                premium products
              </Link>{" "}
              like sunflower oil, milk powder, and potatoes.
            </p>
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-4xl font-bold text-orange-500">5+</h3>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold text-orange-500">10+</h3>
                <p className="text-gray-600">Global Partners</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold text-orange-500">70+</h3>
                <p className="text-gray-600">Successful Deliveries</p>
              </div>
            </div>
          </div>
          <div className="relative aspect-[3/2] w-full">
            <Image
              src="/images/cover/kh4.webp"
              alt="About K.H. Infinity"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={75}
              className="rounded-lg shadow-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
