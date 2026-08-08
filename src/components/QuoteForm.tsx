"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { getProducts } from "@/lib/products";
import { getLocalizedProductName } from "@/lib/localized-products";
import type { Locale } from "@/i18n/routing";

interface QuoteFormProps {
  defaultProduct?: string;
  compact?: boolean;
}

export default function QuoteForm({
  defaultProduct = "",
  compact = false,
}: QuoteFormProps) {
  const t = useTranslations("quote");
  const tc = useTranslations("common");
  const locale = useLocale() as Locale;
  const products = getProducts();
  const defaultProductName =
    getLocalizedProductName(defaultProduct, locale) ??
    products.find((p) => p.id === defaultProduct)?.name ??
    "";

  const [formData, setFormData] = useState({
    product: defaultProductName,
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
        product: defaultProductName,
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
      alert(t("submitError"));
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
    <div className={compact ? "" : "bg-white p-8 rounded-lg shadow-md"}>
      {!compact && (
        <h2 className="text-3xl font-bold mb-8 text-gray-800">{t("title")}</h2>
      )}

      {submitted ? (
        <div className="bg-green-50 border border-green-500 text-green-700 px-6 py-4 rounded-lg mb-6">
          <div className="flex items-center">
            <i className="fas fa-check-circle text-2xl mr-3"></i>
            <div>
              <h3 className="font-bold text-lg">{t("thankYou")}</h3>
              <p>{t("thankYouMessage")}</p>
            </div>
          </div>
        </div>
      ) : (
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="product">
              {t("productCategory")} <span className="text-red-500">*</span>
            </label>
            <select
              id="product"
              name="product"
              value={formData.product}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-orange-500"
              required
            >
              <option value="">{t("selectProduct")}</option>
              {products.map((product) => {
                const name =
                  getLocalizedProductName(product.id, locale) ?? product.name;
                return (
                  <option key={product.id} value={name}>
                    {name} (
                    {product.type === "import" ? tc("import") : tc("export")})
                  </option>
                );
              })}
            </select>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="quantity">
                {t("quantity")} <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="quantity"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                placeholder={t("quantityPlaceholder")}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-orange-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="destination">
                {t("destination")} <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="destination"
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                placeholder={t("destinationPlaceholder")}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-orange-500"
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="name">
                {t("fullName")} <span className="text-red-500">*</span>
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
                {t("email")} <span className="text-red-500">*</span>
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
                {t("phone")} <span className="text-red-500">*</span>
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
                {t("company")}
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
            <label className="block text-gray-700 mb-2" htmlFor="specifications">
              {t("specifications")}
            </label>
            <textarea
              id="specifications"
              name="specifications"
              rows={4}
              value={formData.specifications}
              onChange={handleChange}
              placeholder={t("specificationsPlaceholder")}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-orange-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition-colors font-medium"
          >
            {t("submit")}
          </button>
        </form>
      )}

      {!compact && (
        <div className="mt-8 p-6 bg-orange-50 rounded-lg">
          <h3 className="text-xl font-bold mb-4 text-gray-800">
            {t("whatHappensNext")}
          </h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <i className="fas fa-check-circle text-orange-500 mt-1 mr-3"></i>
              <span>{t("step1")}</span>
            </li>
            <li className="flex items-start">
              <i className="fas fa-check-circle text-orange-500 mt-1 mr-3"></i>
              <span>{t("step2")}</span>
            </li>
            <li className="flex items-start">
              <i className="fas fa-check-circle text-orange-500 mt-1 mr-3"></i>
              <span>{t("step3")}</span>
            </li>
          </ul>
        </div>
      )}

      {!compact && (
        <p className="mt-6 text-sm text-gray-600">
          {t("needHelp")}{" "}
          <Link
            href="/contact"
            className="text-orange-500 hover:text-orange-600 font-semibold"
          >
            {t("contactDirectly")}
          </Link>
          .
        </p>
      )}
    </div>
  );
}
