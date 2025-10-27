export default function ServicesSection() {
  const services = [
    {
      icon: "fas fa-ship",
      title: "Import Products",
      description:
        "We import products from various countries to meet the needs of our clients.",
    },
    {
      icon: "fas fa-box",
      title: "Export Products",
      description:
        "We export products to various countries to meet the needs of our clients.",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-gray-50"
      aria-label="Our Services"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
          Our Services
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="text-orange-700 text-4xl mb-4">
                <i className={service.icon}></i>
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
