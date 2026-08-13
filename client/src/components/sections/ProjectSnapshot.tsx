import { Building, Home, LayoutGrid, Sparkles } from "lucide-react";

function ProjectSnapshot() {
    return (
        <section id="#overview" className="px-7.5">
            <div className="py-16">
                <div className="grid grid-cols-2 gap-12 items-start">
                    {/* LEFT SIDE - Image + Stats Grid */}
                    <div>
                        {/* Image placeholder */}
                        <div className="mb-8 min-h-[400px] rounded-lg bg-gray-100 flex items-center justify-center">
                            <span className="text-gray-400">Project Image</span>
                        </div>

                        {/* Stats in 2x2 Grid */}
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <Building className="w-6 h-6 text-black mb-3" />
                                <p className="text-sm text-gray-500">Total Area</p>
                                <p className="text-2xl font-bold">45 acres</p>
                            </div>

                            <div>
                                <Home className="w-6 h-6 text-black mb-3" />
                                <p className="text-sm text-gray-500">Number of Units</p>
                                <p className="text-2xl font-bold">800+</p>
                            </div>

                            <div>
                                <LayoutGrid className="w-6 h-6 text-black mb-3" />
                                <p className="text-sm text-gray-500">Configurations</p>
                                <p className="text-2xl font-bold">4 Types</p>
                            </div>

                            <div>
                                <Sparkles className="w-6 h-6 text-black mb-3" />
                                <p className="text-sm text-gray-500">Amenities</p>
                                <p className="text-2xl font-bold">25+</p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE - Text */}
                    <div>
                        <h2 className="text-4xl font-bold">Project Overview</h2>
                        <p className="mt-4 text-gray-600">
                            Discover the essence of modern living with our thoughtfully designed community that brings together premium architecture and sustainable living.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProjectSnapshot;