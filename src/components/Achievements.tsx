import { useState } from 'react';
import { Award, Code, Briefcase, GraduationCap, Trophy } from 'lucide-react';

const achievements = [
  {
    year: 2024,
    title: "Master's Degree",
    description: "Completed Master's in Computer Science with honors",
    icon: GraduationCap,
    color: 'red',
  },
  // {
  //   year: 2022,
  //   title: 'Open Source Recognition',
  //   description:
  //     'Created a popular React component library with 5k+ GitHub stars',
  //   icon: Code,
  //   color: 'green',
  // },
  // {
  //   year: 2021,
  //   title: 'Industry Award',
  //   description: "Received 'Developer of the Year' award at TechSummit 2021",
  //   icon: Trophy,
  //   color: 'purple',
  // },
  {
    year: 2020,
    title: 'Full Stack Developer',
    description: 'TCS',
    icon: Award,
    color: 'orange',
  },
  {
    year: 2019,
    title: 'Server Administrator',
    description: 'TCS',
    icon: GraduationCap,
    color: 'red',
  },
];

export default function Achievements() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Professional Journey</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A timeline of key milestones and achievements throughout my career
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200" />

          {/* Achievement items */}
          <div className="space-y-24">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.year}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                {/* Year bubble */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white rounded-full border-4 border-blue-600 z-10 flex items-center justify-center">
                  <span className="text-sm font-bold">{achievement.year}</span>
                </div>

                {/* Content card */}
                <div
                  className={`w-5/12 ${index % 2 === 0 ? 'pr-16' : 'pl-16'} 
                    transition-all duration-300 transform ${
                      activeIndex === index ? 'scale-105' : 'scale-100'
                    }`}
                >
                  <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div
                        className={`p-3 rounded-xl bg-${achievement.color}-100`}
                      >
                        <achievement.icon
                          className={`w-6 h-6 text-${achievement.color}-600`}
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">
                          {achievement.title}
                        </h3>
                        <p className="text-gray-600">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
