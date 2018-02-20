angular.module('myAppBlogService', [])
    .factory('blogContent', function () {
        return {
            getBlogs: function () {
                var blogs = [
                    {
                        projectId: 'project2',
                        githubUrl: 'https://github.com/cfadel1/TensorFlow-ImageClassifier',
                        title: 'Keylogger',
                        description: 'A Console Application capable of logging all the keyboard and mouse inputs using Windows API. The logs are then sent to the user by a generated PowerShell script. All the logs emailed are encrypted. The program has also the capability of decrypting these logs.',
                        languages: 'C++, Windows API'
			}]
                return blogs;
            }
        };
    });
