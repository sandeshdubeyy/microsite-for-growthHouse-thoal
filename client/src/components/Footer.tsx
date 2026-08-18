import { ArrowUp, Phone, Mail, ShieldCheck } from "lucide-react";
import mittal from "../assets/images/mittal.webp";
import logo from "../assets/images/logo.webp";

const quickLinks = [
    { label: "Overview", href: "#overview" },
    { label: "Amenities", href: "#amenities" },
    { label: "Floor Plans", href: "#floor-plans" },
    { label: "Gallery", href: "#gallery" },
    { label: "Location", href: "#location" },
    { label: "FAQ", href: "#faq" },
];

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="mt-16 bg-black text-white sm:mt-20">
            <div className="py-10 sm:py-12">
                {/* Logos Section */}
                <div className="mb-10 flex items-end justify-center gap-10 border-b border-gray-700 pb-8 sm:gap-12 px-6">
                    <div className="flex h-16 items-center rounded-lg bg-white px-4 py-2">
                        <img src={logo} alt="Logo 1" className="h-10 w-auto object-contain" />
                    </div>

                    <div className="flex flex-col items-center gap-2">
                        <span className="text-xs uppercase tracking-wide text-gray-400">
                            In Association With
                        </span>
                        <div className="flex h-8 items-center">
                            <img src={mittal} alt="Logo 2" className="h-full w-auto object-contain" />
                        </div>
                    </div>
                </div>

                {/* Quick Links / Contact / Registration - three columns */}
                <div className="mx-auto mb-10 grid max-w-4xl grid-cols-1 gap-8 px-4 sm:grid-cols-3 sm:px-6">
                    {/* Quick Links */}
                    <div>
                        <h4 className="mb-4 text-sm font-bold uppercase tracking-wide text-white">
                            Quick Links
                        </h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-gray-400 transition-colors hover:text-white"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="mb-4 text-sm font-bold uppercase tracking-wide text-white">
                            Contact
                        </h4>
                        <div className="space-y-3">
                            <a
                                href="tel:+919930502720"
                                className="flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
                            >
                                <Phone className="h-4 w-4 shrink-0" />
                                +91-9930502720
                            </a>
                            <a
                                href="mailto:enquiry@houseofabl.com"
                                className="flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
                            >
                                <Mail className="h-4 w-4 shrink-0" />
                                enquiry@houseofabl.com
                            </a>
                        </div>
                    </div>

                    {/* Registration */}
                    <div>
                        <h4 className="mb-4 text-sm font-bold uppercase tracking-wide text-white">
                            Registration
                        </h4>
                        <div className="flex items-start gap-2 text-sm text-gray-400">
                            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                            <span>
                                MahaRERA No.
                                <br />
                                P99000080106
                            </span>
                        </div>
                    </div>
                </div>

                {/* Disclaimer & Links */}
                <div className="mx-auto max-w-4xl px-4 sm:px-6">
                    <p className="mb-5 text-sm leading-relaxed text-gray-400">
                        The House of Abhinandan Lodha has been established in 2020 and is not, in any manner,
                        associated with 'Lodha' or 'Lodha Group'.
                    </p>

                    <p className="mb-5 text-sm leading-relaxed text-gray-400">
                        <strong className="text-white">Disclaimer:</strong> Terms and Conditions Apply. The
                        offer is valid for a limited period and the Promoter reserves the right to modify and
                        withdraw the same without prior notice. Sale is subject to the terms of application
                        form, agreement for sale and such other documents to be executed between the parties.
                        All images, information, drawings, and sketches shown in advertisements and
                        promotional materials are for representation purposes only.
                    </p>

                    {/* Copyright + Back to top */}
                    <div className="flex flex-col items-center gap-4 border-t border-gray-700 pt-5 sm:flex-row sm:justify-between">
                        <p className="text-sm text-gray-500">
                            &copy; 2024 The House of Abhinandan Lodha. All rights reserved.
                        </p>

                        <button
                            onClick={scrollToTop}
                            className="flex items-center gap-2 rounded-full border border-gray-700 px-4 py-2 text-xs text-gray-400 transition-colors hover:border-white hover:text-white"
                        >
                            Back to Top
                            <ArrowUp className="h-3.5 w-3.5" />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;