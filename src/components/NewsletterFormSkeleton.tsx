export default function NewsletterFormSkeleton() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="h-8 w-64 bg-orange-400 rounded mx-auto mb-4 animate-pulse"></div>
        <div className="h-6 w-96 bg-orange-400 rounded mx-auto mb-6 animate-pulse max-w-2xl"></div>
        <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3 sm:gap-4">
          <div className="flex-1 h-12 bg-orange-400 rounded-lg animate-pulse"></div>
          <div className="w-32 h-12 bg-orange-400 rounded-lg animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
