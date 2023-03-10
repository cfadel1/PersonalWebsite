angular.module('myAppTimelineService', [])
    .factory('timelineContent', function () {
        return {
            getTerms: function () {
                var terms = [
                    {
                        position: 'Software Engineer - Qualcomm',
                        date: 'Novermber 2019',
                        description: 'Full time position as a Cloud Software Engineer.'
                    },
                    {
                        position: 'AWS Certified Cloud Practitioner',
                        date: 'July 2019',
                        description: 'Succesfully completed the requirements and passed the exam for the AWS Certified Cloud Practitioner.',
                        termNumb: 'AWSCCP',
                        btnLabel: 'View Certificate'
                    }, {
                        position: 'Computer Engineering - University of Waterloo',
                        date: 'June 2019',
                        description: 'Graduated from the University of Waterloo with a Bachelors of Applied Sciences in Computer Engineering',
                        termNumb: '4B',
                        btnLabel: 'View Details'
                    }, {
                        position: 'Cloud Software Engineering - NVIDIA',
                        date: 'Sept 2018',
                        description: 'Four month internship as a Software Engineer on the Provision Manager\'s team for GeForce Now at NVIDIA in Santa Clara, California.',
                        termNumb: 'COOP7',
                        btnLabel: 'View Details'
                    }, {
                        position: 'Research Assistant - University of Waterloo',
                        date: 'Jan 2018',
                        description: 'Research assistance on the topic of Euthereum smart contracts security vulnerabilities at the University of Waterloo in Waterloo, Ontario.',
                        termNumb: 'COOP6',
                        btnLabel: 'View Details'
                    }, {
                        position: 'Software Engineer - NVIDIA',
                        date: 'Sept 2017',
                        description: 'Four month internship as a Software Engineer on the Data Platform team at NVIDIA in Santa Clara, California.',
                        termNumb: 'COOP5',
                        btnLabel: 'More Details'
                    }, {
                        position: 'Full Stack Developer - BDO',
                        date: 'Jan 2017',
                        description: 'Four month internship as a Microsoft Full Stack Developer at BDO Canada in Toronto, Ontario.',
                        termNumb: 'COOP4',
                        btnLabel: 'More Details'
                    }, {
                        position: 'Software Developer - MedAvail',
                        date: 'May 2016',
                        description: 'Four month internship as a Software Developer at a startup called MedAvail in Mississauga, Ontario.',
                        termNumb: 'COOP3',
                        btnLabel: 'More Details'
                    }, {
                        position: 'Quality Assurance - MedAvail',
                        date: 'Sept 2015',
                        description: 'Four month internship as a Quality Assurance at a startup called MedAvail in Mississauga, Ontario.',
                        termNumb: 'COOP2',
                        btnLabel: 'More Details'
                    }, {
                        position: 'Project Coordinator - TJX',
                        date: 'Jan 2015',
                        description: 'Four month internship as a Project Coordinator for the Systems Implementation team at TJX Canada in Mississauga, Ontario.',
                        termNumb: 'COOP1',
                        btnLabel: 'More Details'
                    }
                ];
                return terms;
            },
            getCoopTerms: function () {
                var coopTerms = [
                    {
                        term: 'COOP7',
                        descriptions: [
                                "- Accelerated the Provision Manager's global deployments by 400% by implementing a multithreaded Jenkins pipeline that ensures safe deployment and generates a report analysis",
                                "- Designed and implemented integration tests between services using the NUnit framework",
                                "- Ease process of analysing logs by automating the download from Amazon S4 and merging logs depending on user specification using Python  "
                            ],
                        languages: [
                                "Python, C#, C++, AWS, Jenkins"
                        ]
                    }, {
                        term: 'COOP6',
                        descriptions: [
                                "- Researched Ethereum smart contract security vulnerabilities under professsor Vijay Ganesh",
                                "- Held seminars as well as code reviews to educate the department on research findings of Soliditity, Ethereum Virtual Machine, and Blockchain vulnerabilities on smart contracts"
                            ],
                        languages: [
                                "Smart Contracts, BlockChain, Solidity"
                        ]
                    }, {
                        term: 'COOP5',
                        descriptions: [
                                "- Designed and implemented a Data Health Monitoring Platform for existing data pipelines which optimized data pipeline diagnostic by 60%",
                                "- Built front-end user interface using primarily D3.js and AngularJs to visualize data hierarchies as tree structures and graphically represented their key performance indicators",
                                "- Built back-end services that interact with data pipeline components such as Hadoop, Kafka, Logstash, ElasticSearch, Kibana and Kangaroo to fetch and store their status using Java Spring framework and PostgreSQL"
                            ],
                        languages: [
                                "Java, JavaScript, TypeScript, Postgres, CSS, HTML, AngularJS"
                        ]
                    }, {
                        term: 'COOP4',
                        descriptions: [
                                "- Designed and implemented security features for a web portal such as its audit trail, the reset password page and login page amongst others using C#, SQL, JavaScript and AngularJS",
                                "- Enhanced web portal’s performance by 60% by making audit trail’s design multithreaded",
                                "- Built end-to-end MVC features such as user management using C#, SQL and JavaScript"
                        ],
                        languages: [
                                'C#, ', 'SQL, ', 'JavaScript, ', 'AngularJS, ', 'HTML5, ', 'CSS3, ', 'ASP.Net MVC5'
                        ]
                    }, {
                        term: 'COOP3',
                        descriptions: [
                                "- Implemented a web-service platform that periodically fetched and displayed the status of existing development branches as well as their their virtual appliances on a webpage",
                                "- Created .msi installers with WIX to accelerate the installation of web-services by 150%",
                                "Fixed bugs and implemented new features on embedded software and various websites primarily using C#, SQL, HTML, CSS, KendoUI, JQuery and JavaScript"
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
                        studyId: '4B',
                        terms: [
                            {
                                termNumb: '4B Courses',
                                courses: [
                                    {
                                        code: "ECE 406",
                                        description: "Algorithm Design and Analysis"
                                            }, {
                                        code: "ECE 459",
                                        description: "Programming for Performance"
                                            }, {
                                        code: "ECE 493 T21",
                                        description: "Autonomous Vehicules"
                                            }, {
                                        code: "ECE 498B",
                                        description: "Engineering Design Project"
                                            }, {
                                        code: "HRM 200",
                                        description: "Basic Human Resrouces Management"
                                            }
                                        ],
                                    },
                            {
                                termNumb: '4A Courses',
                                courses: [
                                    {
                                        code: "ECE 454",
                                        description: "Distributed Computing"
                                }, {
                                        code: "ECE 458",
                                        description: "Computer Security"
                                }, {
                                        code: "ECE 498A",
                                        description: "Engineering Design Project"
                                }, {
                                        code: "ENVS 200",
                                        description: "Field Ecology"
                                }, {
                                        code: "FR 151",
                                        description: "Basic French"
                                }
                            ],
                                    },
                            {
                                termNumb: '3B Courses',
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
                                    },
                            {
                                termNumb: '3A Courses',
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
                                    },
                            {
                                termNumb: '2B Courses',
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
                                    },
                            {
                                termNumb: '2A Courses',
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
                                    },
                            {
                                termNumb: '1B Courses',
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
                                    },
                            {
                                termNumb: '1A Courses',
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
                            ]
                    }
                    ];
                return studyTerms;
            },
            getCertificates: function () {
                var certificates = [
                    {
                        certificateId: 'AWSCCP',
                        certificatePic: 'AWSCertification'
                    }
                ];
                return certificates;
            }
        };
    });
