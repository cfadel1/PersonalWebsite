angular.module('myAppPortfolioService', [])
    .factory('portfolioContent', function () {
        return {
            getProjects: function () {
                var projects = [
                    {
                        projectId: 'project6',
                        githubUrl: 'http://cedricfadel.com/#/Ethereum_Security_1',
                        title: 'Ethereum smart contract security vulnerabilities',
                        description: 'Part of a research position under Professor Vijay Ganesh. Research related to Ethereum smart contract vulnerabilities and documented in numerous blogs under the blog section.',
                        languages: 'Solidity, Ethereum, Ethereum Virtual Machine, Blockchain'
			}, {
                        projectId: 'project5',
                        githubUrl: 'http://cedricfadel.com/#/Cnn',
                        title: 'Convolutional Networks',
                        description: 'Research on convolutional neural networks for image classification. This research is documented in the blog section under Convolutional Neural Networks for image classification. In addition, a simple python script was written that trains a neural network for image classification using TensorFlow',
                        languages: 'Python, TensorFlow Library'
			}, {
                        projectId: 'project4',
                        githubUrl: 'https://github.com/cfadel1/TensorFlow-ImageClassifier',
                        title: 'Keylogger',
                        description: 'A Console Application capable of logging all the keyboard and mouse inputs using Windows API. The logs are then sent to the user by a generated PowerShell script. All the logs emailed are encrypted. The program has also the capability of decrypting these logs.',
                        languages: 'C++, Windows API'
			}, {
                        projectId: 'project3',
                        githubUrl: 'https://github.com/cfadel1',
                        title: 'Pedometer',
                        description: 'An Android Application capable of guiding a user to a destination while correcting the user\'s wrong turns along the way. The algorithm uses a path-finding algorithm similar to Dijkstra\'s algorithm.',
                        languages: 'Java'
    			}, {
                        projectId: 'project2',
                        githubUrl: 'https://github.com/cfadel1/Stocks_To_Date',
                        title: 'Stocks to Date',
                        description: 'Dynamic information interface windows application that fetches the current price in Canadian Dollars of currencies such as Gold, US Dollar and European Euro.',
                        languages: 'C#, Yahoo Finance, WinForms'
    			}, {
                        projectId: 'project1',
                        githubUrl: 'https://github.com/cfadel1/Caesar_Cipher',
                        title: 'Caeser Cipher',
                        description: 'Windows Application that encodes and decodes messages securily using Caesar Cipher.',
                        languages: 'C#, WinForms'
    			}
			];
                return projects;
            }
        };
    });
