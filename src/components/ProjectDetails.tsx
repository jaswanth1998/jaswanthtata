import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Github, Globe, Calendar, Tag } from 'lucide-react';
import { projects } from './Gallery';

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p, index) => index.toString() === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project not found</h2>
          <button
            onClick={() => navigate('/')}
            className="text-blue-600 hover:text-blue-700 flex items-center"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 pb-16">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto">
            <button
              onClick={() => navigate('/')}
              className="text-white mb-4 hover:text-blue-300 transition-colors flex items-center"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </button>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-4 text-white/90">
              <div className="flex items-center">
                <Tag className="w-4 h-4 mr-2" />
                {project.category}
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                2024
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
              <p className="text-gray-600">
                {project.description}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Key Features</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Responsive Design</li>
                <li>Modern UI/UX</li>
                <li>Performance Optimized</li>
                <li>SEO Friendly</li>
                <li>Cross-browser Compatible</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB'].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* <div className="bg-gray-50 p-6 rounded-2xl">
              <h3 className="text-lg font-semibold mb-4">Project Links</h3>
              <div className="space-y-3">
                <a
                  href="#"
                  className="flex items-center text-gray-600 hover:text-blue-600"
                >
                  <Globe className="w-5 h-5 mr-2" />
                  Live Demo
                </a>
                <a
                  href="#"
                  className="flex items-center text-gray-600 hover:text-blue-600"
                >
                  <Github className="w-5 h-5 mr-2" />
                  Source Code
                </a>
              </div>
            </div> */}

            <div className="bg-gray-50 p-6 rounded-2xl">
              <h3 className="text-lg font-semibold mb-4">Project Details</h3>
              <div className="space-y-3 text-gray-600">
                <div>
                  <strong className="block text-gray-900">Client</strong>
                  TechCorp Inc.
                </div>
                <div>
                  <strong className="block text-gray-900">Timeline</strong>
                  3 months
                </div>
                <div>
                  <strong className="block text-gray-900">Role</strong>
                  Lead Developer
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}