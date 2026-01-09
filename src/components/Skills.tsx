import {
  Code2,
  Database,
  Wrench,
  Users,
  Smartphone,
  Server,
} from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code2,
      skills: ['React', 'React Native CLI', 'HTML/CSS', 'JavaScript', 'Tailwind CSS'],
      color: 'blue',
    },
    {
      title: 'Backend',
      icon: Server,
      skills: ['Node.js', 'Express.js', 'Socket.io', 'Kafka', 'JWT'],
      color: 'green',
    },
    {
      title: 'Database',
      icon: Database,
      skills: ['MongoDB', 'Redis', 'SQL'],
      color: 'orange',
    },
    {
      title: 'Programming',
      icon: Code2,
      skills: ['Java', 'C', 'C++', 'Python'],
      color: 'purple',
    },
    {
      title: 'Tools & Platforms',
      icon: Wrench,
      skills: ['GitHub', 'VS Code', 'Postman', 'Android Studio', 'Figma'],
      color: 'red',
    },
    {
      title: 'Soft Skills',
      icon: Users,
      skills: [
        'Problem Solving',
        'Team Collaboration',
        'Communication',
        'Time Management',
      ],
      color: 'teal',
    },
  ];

  const colorMap: Record<string, { bg: string; text: string; border: string }> = {
    blue: {
      bg: 'bg-blue-50 dark:bg-blue-900/20',
      text: 'text-blue-600 dark:text-blue-400',
      border: 'border-blue-200 dark:border-blue-800',
    },
    green: {
      bg: 'bg-green-50 dark:bg-green-900/20',
      text: 'text-green-600 dark:text-green-400',
      border: 'border-green-200 dark:border-green-800',
    },
    orange: {
      bg: 'bg-orange-50 dark:bg-orange-900/20',
      text: 'text-orange-600 dark:text-orange-400',
      border: 'border-orange-200 dark:border-orange-800',
    },
    purple: {
      bg: 'bg-slate-50 dark:bg-slate-900/20',
      text: 'text-slate-600 dark:text-slate-400',
      border: 'border-slate-200 dark:border-slate-800',
    },
    red: {
      bg: 'bg-red-50 dark:bg-red-900/20',
      text: 'text-red-600 dark:text-red-400',
      border: 'border-red-200 dark:border-red-800',
    },
    teal: {
      bg: 'bg-teal-50 dark:bg-teal-900/20',
      text: 'text-teal-600 dark:text-teal-400',
      border: 'border-teal-200 dark:border-teal-800',
    },
  };

  return (
    <section
      id="skills"
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const colors = colorMap[category.color];
            const Icon = category.icon;

            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg ${colors.bg}`}>
                    <Icon className={`w-6 h-6 ${colors.text}`} />
                  </div>
                  <h3 className="ml-4 text-xl font-semibold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-3 py-1 rounded-full text-sm font-medium border ${colors.bg} ${colors.text} ${colors.border}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
