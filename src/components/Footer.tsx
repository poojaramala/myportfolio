import { Github, Linkedin, Mail, Download, Heart } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/poojaramala',
      color: 'hover:text-gray-900 dark:hover:text-white',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'www.linkedin.com/in/ramala-poojitha-05251626a',
      color: 'hover:text-blue-600 dark:hover:text-blue-400',
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:poojitharamala@gmail.com',
      color: 'hover:text-red-600 dark:hover:text-red-400',
    },
  ];

  const handleDownloadResume = () => {
    alert('Resume download functionality can be integrated with your actual PDF file.');
  };

  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ramala Poojitha
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Full Stack Developer passionate about building innovative solutions
              and creating seamless user experiences.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h4>
            <div className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => {
                      const element = document.querySelector(
                        `#${item.toLowerCase()}`
                      );
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Connect
            </h4>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-600 dark:text-gray-300 ${social.color} transition-all duration-200 transform hover:scale-110`}
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
            <button
              onClick={handleDownloadResume}
              className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </button>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 sm:mb-0">
              &copy; {new Date().getFullYear()} Ramala Poojitha. All rights reserved.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-sm flex items-center">
              Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> using React
              & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
