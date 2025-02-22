import { Code, Palette, Globe } from 'lucide-react';

const skills = [
  {
    icon: Code,
    title: 'Full Stack Development',
    description: 'Expertise in building end-to-end applications using modern technologies and best practices.'
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Creating intuitive and beautiful user interfaces with attention to detail and user experience.'
  },
  {
    icon: Globe,
    title: 'Web Performance',
    description: 'Optimizing applications for speed, accessibility, and cross-browser compatibility.'
  }
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Passionate about creating innovative digital solutions that make a difference.
            With years of experience in web development, I bring ideas to life through code.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <skill.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{skill.title}</h3>
              <p className="text-gray-600">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}