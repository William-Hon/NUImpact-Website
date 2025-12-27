import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="w-full text-white px-8 py-10" style={{backgroundColor: "var(--color-nuimpact-dark-gray)"}}>
            {/* Top divider */}
            <div className="max-w-7xl mx-auto px-8">
                <div className="border-t border-white/30 pt-10 pb-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8">

                        {/* Left: Contact */}
                        <div className="text-sm text-left">
                            <div className="font-regular text-2xl">Contact us at:</div>
                            <Link
                                to="mailto:leadership@nuimpactinvesting.com"
                                className="underline underline-offset-2 hover:opacity-80"
                            >
                                leadership@nuimpactinvesting.com
                            </Link>
                        </div>

                        {/* Center: Social icons */}
                        <div className="flex justify-center gap-6 text-xl">
                            <Link
                                to="https://www.instagram.com/nuimpact/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:opacity-80"
                            >
                                <FaInstagram />
                            </Link>
                            <Link
                                to="https://www.linkedin.com/company/nuimpact/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:opacity-80"
                            >
                                <FaLinkedinIn />
                            </Link>
                        </div>

                        {/* Right: Address + logo */}
                        <div className="flex justify-end items-center gap-6 text-sm text-right">
                            <div className="leading-relaxed">
                                <div>360 Huntington Ave</div>
                                <div>Boston, MA 02115</div>
                            </div>
                            <img
                                src="/assets/images/northeastern-logo-with-text.png"
                                alt="Northeastern University"
                                className="h-20 w-auto p-3"
                            />
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
