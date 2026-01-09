import { GraduationCap, Award } from 'lucide-react';

export default function Education() {
  const education = [
    {
      degree: 'Bachelor of Technology',
      field: 'Electronics & Communication Engineering',
      institution: 'Sreenidhi Institute of Science and Technology',
      location: 'Hyderabad, Telangana',
      period: 'Dec 2021 - June 2025',
      achievement: 'CGPA: 8.84',
      icon: GraduationCap,
    },
    {
      degree: 'Intermediate (MPC)',
      field: 'Mathematics, Physics, Chemistry',
      institution: 'Dr. B.R.A.C.T.S.W. Residential Jr. College (Girls)',
      location: 'Khammam, Telangana',
      period: 'June 2019 - May 2021',
      achievement: 'Marks: 938',
      icon: Award,
    },
    {
      degree: 'Secondary School Certificate',
      field: 'General Education',
      institution: 'TSSWRS (G) School, Yerrupalem',
      location: 'Khammam, Telangana',
      period: 'June 2018 - May 2019',
      achievement: 'CGPA: 9.0',
      icon: Award,
    },
  ];

  return (
    <section
      id="education"
      className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => {
            const Icon = edu.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-700 dark:to-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-start">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                    <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="ml-6 flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {edu.degree}
                      </h3>
                      <span className="text-sm text-gray-500 dark:text-gray-400 mt-1 sm:mt-0">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                      {edu.field}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                      {edu.location}
                    </p>
                    <div className="inline-block px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-sm font-semibold">
                      {edu.achievement}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
