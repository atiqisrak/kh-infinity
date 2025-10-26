"use client";

import { useState } from "react";
import {
  getEvents,
  getLocalEvents,
  getInternationalEvents,
  getEventCategories,
  EventLocation,
  EventCategory,
} from "@/lib/events";

export default function EventsPage() {
  const [locationFilter, setLocationFilter] = useState<"All" | EventLocation>(
    "All"
  );
  const [categoryFilter, setCategoryFilter] = useState<EventCategory>("All");

  const categories = getEventCategories();
  const allEvents = getEvents();

  const filteredEvents = getEvents(
    locationFilter === "All" ? undefined : locationFilter,
    categoryFilter === "All" ? undefined : categoryFilter
  );

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-orange-50 via-orange-100 to-white overflow-hidden">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
              Trade Events & Exhibitions
            </h1>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Discover upcoming trade shows, exhibitions, and industry events in
              Bangladesh and across Asia.
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-4 justify-center">
              {/* Location Filter */}
              <div className="flex flex-col">
                <label className="text-sm font-semibold text-gray-700 mb-2">
                  Location
                </label>
                <select
                  value={locationFilter}
                  onChange={(e) =>
                    setLocationFilter(e.target.value as "All" | EventLocation)
                  }
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="All">All Locations</option>
                  <option value="Local">Local (Bangladesh)</option>
                  <option value="International">International</option>
                </select>
              </div>

              {/* Category Filter */}
              <div className="flex flex-col">
                <label className="text-sm font-semibold text-gray-700 mb-2">
                  Category
                </label>
                <select
                  value={categoryFilter}
                  onChange={(e) =>
                    setCategoryFilter(e.target.value as EventCategory)
                  }
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Reset Button */}
              <div className="flex flex-col justify-end">
                <button
                  onClick={() => {
                    setLocationFilter("All");
                    setCategoryFilter("All");
                  }}
                  className="px-6 py-2 text-orange-600 hover:bg-orange-50 rounded-lg transition-colors font-semibold"
                >
                  Reset Filters
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2">
                Upcoming Events ({filteredEvents.length})
              </h2>
              <p className="text-gray-600">
                Showing{" "}
                {locationFilter !== "All" && categoryFilter !== "All"
                  ? `${locationFilter} ${categoryFilter}`
                  : locationFilter !== "All"
                  ? locationFilter
                  : categoryFilter !== "All"
                  ? categoryFilter
                  : "all"}{" "}
                events
              </p>
            </div>

            {filteredEvents.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredEvents.map((event) => (
                  <div
                    key={event.id}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-100"
                  >
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            event.locationType === "Local"
                              ? "bg-orange-100 text-orange-600"
                              : "bg-blue-100 text-blue-600"
                          }`}
                        >
                          {event.locationType}
                        </span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-semibold">
                          {event.category}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold mb-2 text-gray-800">
                        {event.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-2">
                        {event.dates}
                      </p>
                      <p className="text-gray-500 text-sm mb-3 flex items-center">
                        <i className="fas fa-map-marker-alt mr-2"></i>
                        {event.location}
                      </p>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {event.description}
                      </p>

                      {event.website && (
                        <a
                          href={event.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block text-orange-500 hover:text-orange-600 text-sm font-semibold"
                        >
                          Learn more <i className="fas fa-arrow-right ml-1"></i>
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <i className="fas fa-calendar-times text-6xl text-gray-300 mb-4"></i>
                <h3 className="text-2xl font-bold text-gray-600 mb-2">
                  No Events Found
                </h3>
                <p className="text-gray-500">
                  Try adjusting your filters to see more events.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Interested in Attending?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Our team regularly attends trade shows and exhibitions to stay
              updated with industry trends and connect with partners worldwide.
              Contact us to arrange a meeting at any of these events.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
