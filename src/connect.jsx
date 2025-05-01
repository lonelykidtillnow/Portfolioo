import "./tailwind.css";
//icons
import { FaGithub, FaLinkedin} from "react-icons/fa";

const Connect = () => {
    return (
        <div className="2xl:container mx-auto py-[10px]">
            <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 h-[70vh] p-[10px]">
                <div>
                    {/* Left - Contact Info */}
                    <div>
                        <h2 className="text-4xl font-bold text-black mb-6">Let's Connect</h2>

                        <div className="space-y-6 text-[18px]">
                            <div>
                                <p className="text-gray-600">Location:</p>
                                <p className="text-xl font-semibold text-black">Madurai, Tamil Nadu</p>
                                <hr className="my-2" />
                            </div>

                            <div>
                                <p className="text-gray-600">Phone:</p>
                                <p className="text-xl font-bold text-black">+91 9443686944</p>
                                <hr className="my-2" />
                            </div>

                            <div>
                                <p className="text-gray-600">Email:</p>
                                <p className="text-xl font-bold text-black">rmrajesh1034@gmail.com</p>
                                <hr className="my-2" />
                            </div>

                            <div>
                                <p className="text-gray-600">Follow Me:</p>
                                <div className="flex gap-3 mt-2">
                                    <a href="https://github.com/lonelykidtillnow" target="_blank" rel="noreferrer" className="bg-[#6244c5] p-2 rounded-lg text-white">
                                        <FaGithub size={20} />
                                    </a>
                                    <a href="https://www.linkedin.com/in/rajesh-r-m/" target="_blank" rel="noreferrer" className="bg-[#6244c5] p-2 rounded-lg text-white">
                                        <FaLinkedin size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    {/* Right - Message Section */}
                    <div className="m-[50px]">
                        <p className="text-gray-600 text-[18px] leading-relaxed">
                            I'm actively looking for exciting new job opportunities. Please feel free to reach out to me via any of the methods below, or use the form to send me a message directly!
                        </p>

                        <p className="text-gray-600 text-[18px] mt-4">
                            You can email me directly by clicking the button below to pre-fill your email.
                        </p>

                        <div className="mt-8 flex gap-4">
                            <a href="tel:+919443686944" className="bg-[#6244c5] text-white px-6 py-3 rounded-lg font-medium">
                                Call Now
                            </a>
                            <a href="mailto:rmrajesh1034@gmail.com" className="bg-[#6244c5] text-white px-6 py-3 rounded-lg font-medium">
                                Email Me
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Connect;