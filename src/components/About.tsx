import { User, Code, Rocket } from 'lucide-react';

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                <User className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Professional Background
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Full Stack Developer with hands-on experience in building
                  scalable web and mobile applications. Currently working at
                  Mompharmacy, developing comprehensive solutions for online
                  pharmacy services including e-commerce platforms, mobile apps,
                  and admin dashboards.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Technical Expertise
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Proficient in modern web technologies including React, React
                  Native, Node.js, Express.js, and MongoDB. Experienced in
                  implementing real-time features with Socket.io, microservices
                  with Kafka, and secure authentication with JWT.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                <Rocket className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Passion & Goals
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Passionate about creating seamless user experiences and
                  building efficient, maintainable code. Strong believer in
                  collaborative development and continuous learning. Actively
                  engaged in both technical and creative pursuits, including
                  dancing and drawing.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-gray-50 dark:from-gray-700 dark:to-gray-800 p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Quick Facts
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-600">
                <span className="text-gray-600 dark:text-gray-300 font-medium">
                  Location
                </span>
                <span className="text-gray-900 dark:text-white font-semibold">
                  Hyderabad, India
                </span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-600">
                <span className="text-gray-600 dark:text-gray-300 font-medium">
                  Degree
                </span>
                <span className="text-gray-900 dark:text-white font-semibold">
                  B.Tech in ECE
                </span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-600">
                <span className="text-gray-600 dark:text-gray-300 font-medium">
                  CGPA
                </span>
                <span className="text-gray-900 dark:text-white font-semibold">
                  8.84
                </span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-gray-600 dark:text-gray-300 font-medium">
                  Languages
                </span>
                <span className="text-gray-900 dark:text-white font-semibold">
                  Telugu, English
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
