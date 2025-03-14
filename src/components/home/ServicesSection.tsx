import Link from "next/link"
import { ArrowRight, Building2, Construction, FileStack, HardHat, Lightbulb } from "lucide-react"

const services = [
  {
    icon: <Construction className="h-10 w-10 text-red-600" />,
    title: "Construction Management",
    description: "Comprehensive oversight of your construction project from inception to completion.",
    link: "/expertise/construction-management",
  },
  {
    icon: <Building2 className="h-10 w-10 text-red-600" />,
    title: "General Contracting",
    description: "Expert execution of construction plans with attention to detail, quality, and timeline.",
    link: "/expertise/general-contracting",
  },
  {
    icon: <FileStack className="h-10 w-10 text-red-600" />,
    title: "Preconstruction",
    description: "Strategic planning and analysis to ensure your project starts with a solid foundation.",
    link: "/expertise/preconstruction",
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-red-600" />,
    title: "Design Build",
    description: "Streamlined project delivery with integrated design and construction services.",
    link: "/expertise/design-build",
  },
  {
    icon: <HardHat className="h-10 w-10 text-red-600" />,
    title: "Environmental Health & Safety",
    description: "Prioritizing safety and environmental responsibility on every project.",
    link: "/expertise/environmental-health-safety",
  },
]

export default function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-zinc-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Expertise</h2>
          <p className="text-lg text-zinc-600 max-w-3xl mx-auto">
            The cornerstones of our business are solid construction and excellence in on-site management.
            We bring our clients the expertise and full capabilities of a premier construction management firm.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border border-zinc-100 hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-zinc-600 mb-4">{service.description}</p>
              <Link
                href={service.link}
                className="inline-flex items-center text-red-600 hover:text-red-700 font-medium"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
