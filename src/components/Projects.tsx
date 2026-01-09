import { ExternalLink, Github, Smartphone, HardDrive } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Application for Online Pharmacy',
      description:
        'Developed a comprehensive mobile application for online pharmacy services with product listings, search filters, order tracking, and real-time updates.',
      technologies: [
        'React Native CLI',
        'Node.js',
        'Express.js',
        'MongoDB',
        'JWT',
        'Socket.io',
      ],
      icon: Smartphone,
      period: 'Feb 2025 - May 2025',
      highlights: [
        'Secure user authentication with JWT',
        'Real-time order status updates',
        'Push notifications for delivery tracking',
        'Dynamic product storage and cart management',
      ],
    },
    {
      title: 'Line Follower Robot using Arduino',
      description:
        'Designed and developed an autonomous robot capable of following a pre-defined path using infrared sensors with high precision navigation.',
      technologies: ['Arduino', 'IR Sensors', 'DC Motors', 'Embedded C'],
      icon: HardDrive,
      period: 'Sep 2024 - Oct 2024',
      highlights: [
        'Programmed motor control and direction logic',
        'Calibrated IR sensors for high precision',
        'Optimized response time during motion control',
        'Demonstrated embedded systems expertise',
      ],
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-700 dark:to-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                    <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {project.period}
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Key Highlights:
                  </h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-gray-600 dark:text-gray-300 flex items-start"
                      >
                        <span className="text-blue-600 dark:text-blue-400 mr-2">
                          •
                        </span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                  <button className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </button>
                  <button className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
