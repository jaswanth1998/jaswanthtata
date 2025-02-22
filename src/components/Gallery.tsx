import { ExternalLink, Code, Layout, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export const projects = [
  {
    title: "E-Commerce Platform",
    description: "A modern shopping experience built with React and Node.js",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c",
    category: "Full Stack",
    icon: Globe,
    size: "large"
  },
  {
    title: "Portfolio Website",
    description: "Clean and minimal portfolio design",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    category: "Frontend",
    icon: Layout,
    size: "small"
  },
  {
    title: "API Gateway",
    description: "Microservices architecture implementation",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
    category: "Backend",
    icon: Code,
    size: "small"
  },
  {
    title: "Mobile App",
    description: "Cross-platform mobile application",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
    category: "Mobile",
    icon: Layout,
    size: "medium"
  },
  {
    title: "Dashboard Analytics",
    description: "Real-time data visualization platform",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    category: "Data",
    icon: Globe,
    size: "medium"
  }
];

export default function Gallery() {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore some of my recent work and creative endeavors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[320px]">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-3xl bg-gray-900 
                ${project.size === 'large' ? 'md:col-span-2 md:row-span-2' : 
                  project.size === 'medium' ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              {/* Background Image */}
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover opacity-75 transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />

              {/* Content */}
              <div className="relative h-full p-8 flex flex-col justify-end">
                <div className="mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-600/20 text-blue-200">
                    <project.icon className="w-4 h-4 mr-2" />
                    {project.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                {/* View Project Button */}
                <div className="transform translate-y-8 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <Link 
                    to={`/project/${index}`}
                    className="inline-flex items-center text-white hover:text-blue-400 transition-colors"
                  >
                    <span className="mr-2">View Project</span>
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}