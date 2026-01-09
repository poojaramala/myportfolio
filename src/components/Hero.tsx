
import { ChevronDown, Download, Briefcase } from 'lucide-react';
import profileImg from '../../src/profilephoto.png';

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    alert('Resume download functionality can be integrated with your actual PDF file.');
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="animate-fade-in">

          {/* Profile Image */}
          <div className="flex justify-center mb-8">
            <img
              src={profileImg}
              alt="Profile"
              className="
                w-28 h-27 sm:w-40 sm:h-44
                rounded-full
                object-cover
                border-4 border-blue-600
                shadow-xl
                transition-transform duration-300
                hover:scale-105
              "
            />
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Ramala Poojitha
          </h1>
          <p className="text-2xl sm:text-3xl text-blue-600 dark:text-blue-400 font-semibold mb-4">
            Full Stack Developer
          </p>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Building innovative solutions with React, Node.js, and MongoDB.
            Passionate about creating seamless user experiences and scalable
            applications.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToProjects}
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Briefcase className="w-5 h-5 mr-2" />
              View Projects
            </button>
            <button
              onClick={handleDownloadResume}
              className="inline-flex items-center justify-center px-8 py-4 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-600 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={() => {
          const element = document.querySelector('#about');
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="w-8 h-8 text-gray-600 dark:text-gray-400" />
      </button>
    </section>
  );
}
