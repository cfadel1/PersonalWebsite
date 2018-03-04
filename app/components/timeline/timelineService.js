angular.module('myAppTimelineService', [])
    .factory('timelineContent', function () {
        return {
            getTerms: function () {
                var terms = [
                    {
                        position: 'Computer Engineering',
                        date: 'Jan 2018',
                        description: 'Second term of my third year in Computer Engineering at the University of Waterloo',
                        termNumb: '3B',
                        btnLabel: 'View Courses'
                    }, {
                        position: 'Software Engineer - NVIDIA',
                        date: 'Sept 2017',
                        description: 'Fifth internship as a Software Engineer on the Data Platform Team',
                        termNumb: 'COOP5',
                        btnLabel: 'More Details'
                    }, {
                        position: 'Computer Engineering',
                        date: 'May 2017',
                        description: 'First term of my third year in Computer Engineering at the University of Waterloo',
                        termNumb: '3A',
                        btnLabel: 'View Courses'
                    }, {
                        position: 'Full Stack Developer - BDO',
                        date: 'Jan 2017',
                        description: 'Fourth internship as a Microsoft Full Stack Developer',
                        termNumb: 'COOP4',
                        btnLabel: 'More Details'
                    }, {
                        position: 'Computer Engineering',
                        date: 'Sept 2016',
                        description: 'Second term of my second year in Computer Engineering at the University of Waterloo',
                        termNumb: '2B',
                        btnLabel: 'View Courses'
                    }, {
                        position: 'Software Developer - MedAvail',
                        date: 'May 2016',
                        description: 'Third internship as a Software Developer',
                        termNumb: 'COOP3',
                        btnLabel: 'More Details'
                    }, {
                        position: 'Computer Engineering',
                        date: 'Jan 2016',
                        description: 'First term of my second year in Computer Engineering at the University of Waterloo',
                        termNumb: '2A',
                        btnLabel: 'View Courses'
                    }, {
                        position: 'Quality Assurance - MedAvail',
                        date: 'Sept 2015',
                        description: 'Second internship as a Quality Assurance',
                        termNumb: 'COOP2',
                        btnLabel: 'More Details'
                    }, {
                        position: 'Computer Engineering',
                        date: 'May 2015',
                        description: 'Second term of my first year in Computer Engineering at the University of Waterloo',
                        termNumb: '1B',
                        btnLabel: 'View Courses'
                    }, {
                        position: 'Project Coordinator - TJX',
                        date: 'Jan 2015',
                        description: 'First internship as a Project Coordinator for the Systems Implementation Team',
                        termNumb: 'COOP1',
                        btnLabel: 'More Details'
                    }, {
                        position: 'Computer Engineering',
                        date: 'Sept 2014',
                        description: 'First term of my first year in Computer Engineering at the University of Waterloo',
                        termNumb: '1A',
                        btnLabel: 'View Courses'
                    }
                ];
                return terms;
            },
            getCoopTerms: function () {
                var coopTerms = [
                    {
                        term: 'COOP5',
                        descriptions: [
                                "- Designed and implemented a Data Health Monitoring Platform for exis ng data pipelines",
                                "- Built front end experience using primarily D3.js and AngularJs for tree representation of data pipelines and graph representation of the key performance indicators",
                                "- Built backend services that interacts with data pipeline components to fetch and store data using Java Spring framework and Postgres"
                            ],
                        languages: [
                                "Java, JavaScript, TypeScript, Postgres, CSS, HTML, AngularJS"
                        ]
                    }, {
                        term: 'COOP4',
                        descriptions: [
                                "- Designed and implemented security features for a Web Portal such as the Audit Trail, Reset    Password and Login pages amongst others ",
                                "- Enhanced web portal's performance by 60% by making Audit Trail's desgin multithreaded",
                                "- Built end-to-end MVC features such as User Management",
                                "- Improved the front-end performance by implementing AngularJS"
                        ],
                        languages: [
                                'C#, ', 'SQL, ', 'JavaScript, ', 'AngularJS, ', 'HTML5, ', 'CSS3, ', 'ASP.Net MVC5'
                        ]
                    }, {
                        term: 'COOP3',
                        descriptions: [
                                "- Implemented a web-service platform that periodically fetches information and status of a development branch and its virtual appliance and displays it on a web-page",
                                "- Created .msi installers with WIX to accelerate the installation of web-services by 150%"
                        ],
                        languages: [
                                'C#, ', 'SQL, ', 'JavaScript, ', 'HTML5, ', 'CSS3, ', 'XML, ', 'WIX, ', 'ASP.Net MVC5'
                        ]
                    }, {
                        term: 'COOP2',
                        descriptions: [
                                "- Accelerated average QA cycle testing turn-around time by 250% by developing C# Automation Cycle Testing Scripts using Coded UI",
                                "- Created C# winform application to automate build deployment",
                                "- Accelerated average QA cycle testing turn-around time by 25% or more, allowing company to accept more testing projects without increasing staff",
                                "- Developed a C# Windows Configuration Verification Application which accelerated build deployment by 35%"
                        ],
                        languages: [
                                'C#, ', 'Python, ', 'Coded-UI, ', 'Selenium, ', 'Windows Application'
                        ]
                    }, {
                        term: 'COOP1',
                        descriptions: [
                                "- Proactively managed and coordinated the systems aspects for all new stores in a timely manner",
                                "- Voted co-op leader to manage end of year co-op presentation to the Systems department",
                                "- Successfully communicated with vendors, construction team and customers in French and English"
                        ],
                        languages: [
                                'Adobe, ', 'Office 365, ', 'SharePoint, '
                        ]
                    }
                ];
                return coopTerms;
            },
            getStudyTerms: function () {
                var studyTerms = [
                    {
                        term: '3B',
                        courses: [
                            {
                                code: "ECE 318",
                                description: "Analog and Digital Communication"
                                }, {
                                code: "ECE 356",
                                description: "Database Systems"
                                }, {
                                code: "ECE 358",
                                description: "Computer Networks"
                                }, {
                                code: "ECE 390",
                                description: "Engineering Design, Economics, and Impact on Society"
                                }, {
                                code: "CHEM 123",
                                description: "Chemical Reactions, Equilibria and Kinetics"
                                }
                            ],
                    }, {
                        term: '3A',
                        courses: [
                            {
                                code: "ECE 316",
                                description: "Probability Theory & Stats",
                                }, {
                                code: "ECE 327",
                                description: "Digital Hardware Systems"
                                }, {
                                code: "ECE 351",
                                description: "Compilers"
                                }, {
                                code: "ECE 380",
                                description: "Analog Control Systems"
                                }, {
                                code: "MSCI 211",
                                description: "Organizational Behaviour"
                                }
                            ],
                    }, {
                        term: '2B',
                        courses: [
                            {
                                code: "ECE 205",
                                description: "Advanced Calculus"
                                }, {
                                code: "ECE 222",
                                description: "Digital Computers"
                                }, {
                                code: "ECE 240",
                                description: "Electronic Circuits 1"
                                }, {
                                code: "ECE 250",
                                description: "Algorithms & Data Structures"
                                }, {
                                code: "ECE 290",
                                description: "Eng Profession, Ethics, Law"
                                }, {
                                code: "ECE 215",
                                description: "Linear Alg for Engineering"
                                }
                            ],
                    }, {
                        term: '2A',
                        courses: [
                            {
                                code: "ECE 205",
                                description: "Advanced Calculus"
                                }, {
                                code: "ECE 222",
                                description: "Digital Computers"
                                }, {
                                code: "ECE 240",
                                description: "Electronic Circuits 1"
                                }, {
                                code: "ECE 250",
                                description: "Algorithm & Data Structures"
                                }, {
                                code: "ECE 290",
                                description: "Eng. Profession, Ethics, Law"
                                }, {
                                code: "MATH 215",
                                description: "Linear Algebra for Eng."
                                }
                            ],
                    }, {
                        term: '1B',
                        courses: [
                            {
                                code: "ECE 103",
                                description: "Discrete Mathematics"
                                }, {
                                code: "ECE 106",
                                description: "Physics of Electrical Engineering 2"
                                }, {
                                code: "ECE 124",
                                description: "Digital Circuits and Systems"
                                }, {
                                code: "ECE 155",
                                description: "Embedded Systems"
                                }, {
                                code: "MATH 119",
                                description: "Calculus 2 for Engineering"
                                }
                            ],
                    }, {
                        term: '1A',
                        courses: [
                            {
                                code: "ECE 105",
                                description: "Physics of Electrical Engineering"
                                }, {
                                code: "ECE 140",
                                description: "Linear Circuits"
                                }, {
                                code: "ECE 150",
                                description: "Fundamentals of Programming"
                                }, {
                                code: "MATH 117",
                                description: "Calculus 1 for Engineering"
                                }, {
                                code: "CHEM 102",
                                description: "Chemistry for Engineers"
                                }
                            ],
                    }
                ];
                return studyTerms;
            }
        };
    });
