angular.module('myAppPortfolioService', [])
    .factory('portfolioContent', function () {
        return {
            getProjects: function () {
                var projects = [
                    {
                        projectId: 'project5',
                        title: 'AWS Certified Cloud Practitioner',
                        description: 'This certification provides individuals in a larger variety of cloud and technology roles with a way to validate their AWS Cloud knowledge and enhance their professional credibility. This exam covers four domains, including cloud concepts, security, technology, and billing and pricing.',
			}, {
                        projectId: 'project4',
                        title: 'Owl - Text to Braille',
                        description: 'Owl is an accessible system that allows visually impaired people to read printed and electronic text. It uses an Android mobile application to which text can be supplied either from a digital format or a photograph. The text is discerned using image processing and then via Bluetooth, displayed on a portable refreshable braille cell. This project was created as our fourth-year design project and received an Award for Most Potential Futuristic Application.'
			}, {
                        projectId: 'project3',
                        title: 'Machine Learning',
                        description: 'Completed a course in Autonomous vehicles where we developed a trajectory planner that can handle highway driving while surrounded by dynamic obstacles moving at various speeds. Researched on convolutional neural networks for image classification. This research is documented in the blog section under Convolutional Neural Networks for image classification. A simple python script was also written that trains a neural network for image classification using TensorFlow.'
            }, {
                        projectId: 'project2',
                        title: 'Security',
                        description: 'Completed numerous courses in security including Computer security at the University of Waterloo, Cryptography I on Coursera and Ethical Hacking on Udemy. Also, designed a console application Keylogger capable of logging all the keyboard and mouse inputs using Windows API. The logs are then sent to the user by a generated PowerShell script. All the logs emailed are encrypted. Many more projects were developed including Timing Attack on Passwords, Vigenère Cipher and Caesar Cipher.'
			}, {
                        projectId: 'project1',
                        title: 'Finance',
                        description: 'Implemented an Arbitrage python script that exploits the discrepancies in currency exchange rates by transforming one unit of currency into more than one unit of the same currency. Also, designed a Dynamic information interface windows application called Stock to Date, that fetches the current price in Canadian Dollars of currencies such as Gold, US Dollar and European Euro.'
			}
			];
                return projects;
            }
        };
    });
