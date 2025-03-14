import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const featuredProjects = [
  {
    id: 1,
    title: "Modern Office Transformation",
    category: "Corporate",
    imageUrl: "https://www.jrmcm.com/content/uploads/2024/08/Construction-Mgmt-1-scaled.jpeg",
    link: "/projects/corporate",
  },
  {
    id: 2,
    title: "Luxury Retail Experience",
    category: "Retail",
    imageUrl: "https://www.jrmcm.com/content/uploads/2022/04/Screenshot-2022-04-14-at-21.53.21.jpg",
    link: "/projects/retail",
  },
  {
    id: 3,
    title: "Healthcare Facility Design",
    category: "Healthcare",
    imageUrl: "https://www.jrmcm.com/content/uploads/2022/04/Screenshot-2022-04-14-at-22.02.08.png",
    link: "/projects/healthcare",
  },
]

export default function ProjectsShowcase() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Featured Projects</h2>
            <p className="text-lg text-zinc-600">Explore our diverse portfolio of exceptional work</p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button asChild variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featuredProjects.map((project) => (
            <Link href={project.link} key={project.id} className="group">
              <div className="relative overflow-hidden rounded-lg shadow-md transition-all duration-300 group-hover:shadow-lg">
                <div className="aspect-video relative">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80" />
                </div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <div className="mb-2 text-sm font-medium uppercase tracking-wider text-red-400">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
