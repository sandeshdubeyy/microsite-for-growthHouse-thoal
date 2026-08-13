function Footer() {
    return (
        <footer className="bg-black text-white mt-20">
            <div className="py-16">
                {/* Logos Section */}
                <div className="flex items-center justify-center gap-12 mb-12 pb-12 border-b border-gray-700">
                    <div className="w-32 h-20 bg-gray-800 rounded-lg flex items-center justify-center">
                        <span className="text-gray-500 text-sm">Logo 1</span>
                    </div>
                    <div className="w-32 h-20 bg-gray-800 rounded-lg flex items-center justify-center">
                        <span className="text-gray-500 text-sm">Logo 2</span>
                    </div>
                </div>

                {/* Disclaimer & Links */}
                <div className="max-w-4xl mx-auto">
                    <p className="text-m text-gray-400 mb-8 leading-relaxed">
                        The House of Abhinandan Lodha has been established in 2020 and is not, in any manner, associated with 'Lodha' or 'Lodha Group'.
                    </p>

                    <p className="text-m text-gray-400 mb-8 leading-relaxed">
                        <strong className="text-white">Disclaimer:</strong> Terms and Conditions Apply. The offer is valid for a limited period and the Promoter reserves the right to modify and withdraw the same without prior notice. Sale is subject to the terms of application form, agreement for sale and such other documents to be executed between the parties. All images, information, drawings, and sketches shown in advertisements and promotional materials are for representation purposes only.
                    </p>

                    {/* Copyright */}
                    <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-500">
                        <p>&copy; 2024 The House of Abhinandan Lodha. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;