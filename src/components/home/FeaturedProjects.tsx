import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const featuredProjects = [
  {
    id: 1,
    title: "Modern Corporate Office",
    category: "Corporate",
    imageUrl: null,
    link: "/projects/corporate",
  },
  {
    id: 2,
    title: "Luxury Retail Experience",
    category: "Retail",
    imageUrl: null,
    link: "/projects/retail",
  },
  {
    id: 3,
    title: "Healthcare Facility",
    category: "Healthcare",
    imageUrl: null,
    link: "/projects/healthcare",
  },
]

export default function FeaturedProjects() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-zinc-600 max-w-2xl">
              Explore some of our recent construction and management projects across various industries.
            </p>
          </div>
          <Button asChild className="mt-6 md:mt-0 self-start md:self-auto bg-red-600 hover:bg-red-700">
            <Link href="/projects" className="inline-flex items-center">
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <Link
              href={project.link}
              key={project.id}
              className="group block overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block bg-red-600 text-white text-xs px-2 py-1 rounded mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
