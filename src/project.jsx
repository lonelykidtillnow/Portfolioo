const Project = () => {
    const projects = [
        {
          title: "Automated Early Detection System for Alzheimer's Disease Using Medical Data Analysis",
          description: "Developed an automated early detection system for Alzheimer's disease using advanced medical data analysis techniques. Utilized machine learning algorithms to analyze patient data, enabling accurate and early diagnosis to improve treatment outcomes.",
          githubLink: "https://github.com/username/alumni-connect"
        },
        {
          title: "Derbis Flow & Landslide Detection/Prediction",
          description: "Developed an AI-powered real-time detection and prediction system for debris flow and landslides using YOLO object detection models combined with remote sensing data. Leveraged advanced deep learning techniques and satellite imagery analysis to accurately identify high-risk areas, enabling early warnings and proactive disaster management.",
          githubLink: "https://github.com/username/buy-tracking"
        },
        {
          title: "Blog Platform",
          description: "Built a full-stack blog platform using the MERN stack (MongoDB, Express.js, React.js, and Node.js) with Tailwind CSS for styling and a modern, responsive UI. The application allows users to securely register, log in, and manage their blog posts with a clean and intuitive interface. Blog content and user data are efficiently stored and retrieved from MongoDB, ensuring persistence and scalability. Enhanced with React Icons and Google Fonts (Inter/Poppins), the platform offers a smooth user experience suitable for both desktop and mobile devices.",
          githubLink: "https://github.com/lonelykidtillnow/Blog"
        },
        {
          title: "Food Store Website",
          description: "Developed a responsive and visually appealing food store website using HTML and Tailwind CSS, featuring clean UI components, category-wise food item listings, and smooth hover effects. Integrated high-quality images via ImageKit.io CDN, utilized free SVG and flat icons for enhanced user experience, and applied the Poppins font from Google Fonts for modern typography. The project emphasizes performance, accessibility, and mobile-first design, making it suitable for showcasing food products in an engaging and efficient manner.",
          githubLink: "https://lonelykidtillnow.github.io/Mern-Projects/foodstore/"
        },
        {
          title: "HRX Website Clone",
          description: "Built a responsive fashion e-commerce website inspired by HRX using HTML5, Tailwind CSS, JavaScript, and React.js. Implemented reusable components, smooth navigation, and modern UI/UX design with a mobile-first approach. Integrated high-quality images using ImageKit.io CDN, styled modern typography with Google Fonts, and enhanced visuals with React SVG icons. The project showcases strong frontend development skills and clean component-based architecture.",
          githubLink: "https://rajeshproject.netlify.app/"   
        },
        {
            "title": "My Frontend Project Showcase",
            "description": "A collection of web projects I built while practicing frontend development, all deployed on Neocities. These projects demonstrate my learning and skills in HTML, CSS, and JavaScript.",
            "githubLink": "https://neocities.org/site/rajeshrm"
        },          
      ];
    return (
        <>
            <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-[90%] mx-auto">
                    <h1 className="text-[36px] font-bold text-gray-900 mb-8">My Projects</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                            >
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4">
                                        {project.description}
                                    </p>
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block px-4 py-2 bg-[#6244c5] text-white rounded-md hover:bg-blue-700 transition-colors"
                                    >
                                        View on GitHub
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Project;