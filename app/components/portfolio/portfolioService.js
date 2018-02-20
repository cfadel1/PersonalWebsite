angular.module('myAppPortfolioService', [])
    .factory('portfolioContent', function () {
        return {
            getProjects: function () {
                var projects = [
                    {
                        projectId: 'project2',
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
                        projectId: 'project4',
                        githubUrl: 'https://github.com/cfadel1/Stocks_To_Date',
                        title: 'Stocks to Date',
                        description: 'Dynamic information interface windows application that fetches the current price in Canadian Dollars of currencies such as Gold, US Dollar and European Euro.',
                        languages: 'C#, Yahoo Finance'
    			}
			];
                return projects;
            }
        };
    });
