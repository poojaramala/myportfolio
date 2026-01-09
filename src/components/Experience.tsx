import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  const experience = {
    company: 'Mompharmacy',
    role: 'Full Stack Developer',
    location: 'Hyderabad, Telangana',
    period: 'Feb 2025 - Present',
    responsibilities: [
      'Developed and deployed multiple applications for an online pharmacy platform including the E-commerce Website, User App, Delivery Partner App, and Admin Dashboard',
      'Built responsive, user-friendly interfaces using React, React Native, HTML, CSS, and JavaScript',
      'Designed and implemented RESTful APIs with Node.js and Express.js, managing data through MongoDB and caching with Redis',
      'Integrated Socket.io for real-time updates and implemented Kafka for microservice-based communication',
      'Used JWT authentication for secure user sessions and improved backend performance with efficient pagination and indexing',
      'Collaborated with UI/UX designers, testers, and backend developers to deliver seamless product features',
      'Performed API testing and debugging using Postman, ensuring efficient request handling and data integrity',
    ],
  };

  return (
    <section
      id="experience"
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-600"></div>

            <div className="relative bg-white dark:bg-gray-800 rounded-xl p-8 shadow-xl ml-8 md:ml-0 md:mr-auto md:w-[calc(50%-2rem)] hover:shadow-2xl transition-all duration-300">
              <div className="absolute -left-8 md:-left-4 top-8 w-8 h-8 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900"></div>

              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {experience.role}
                  </h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">
                    {experience.company}
                  </p>
                </div>
              </div>

              <div className="flex items-center text-gray-600 dark:text-gray-300 mb-4">
                <Calendar className="w-4 h-4 mr-2" />
                <span className="text-sm">{experience.period}</span>
                <span className="mx-2">•</span>
                <span className="text-sm">{experience.location}</span>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Key Responsibilities:
                </h4>
                <ul className="space-y-2">
                  {experience.responsibilities.map((responsibility, index) => (
                    <li
                      key={index}
                      className="text-gray-600 dark:text-gray-300 flex items-start"
                    >
                      <span className="text-blue-600 dark:text-blue-400 mr-2 mt-1">
                        •
                      </span>
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
