export default function CompanyStats() {
  return (
    <section className="bg-red-600 py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Excellence By The Numbers</h2>
          <p className="text-lg text-white/80">
            UAM Construction Management has established a record of excellence in the construction industry.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-white/10 rounded-lg p-6">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">15+</div>
              <p className="text-white font-medium">Years of Excellence</p>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-white/10 rounded-lg p-6">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">500+</div>
              <p className="text-white font-medium">Professionals</p>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-white/10 rounded-lg p-6">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">1000+</div>
              <p className="text-white font-medium">Projects Completed</p>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-white/10 rounded-lg p-6">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">4</div>
              <p className="text-white font-medium">Office Locations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
