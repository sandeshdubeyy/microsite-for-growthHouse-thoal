import { Zap, Shield, TreePine, Users, Award } from "lucide-react";

function ProjectHighlights() {
    return (
        <section className="px-7.5">
            <div className="py-16">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold">Project Highlights</h2>
                    <p className="mt-2 text-gray-600">Discover what makes this project exceptional</p>
                </div>

                {/* Highlight Cards Grid */}
                <div className="grid grid-cols-5 gap-6 mb-12">
                    <div className="text-center">
                        <Zap className="w-10 h-10 text-black mx-auto mb-4" />
                        <h3 className="font-bold text-lg mb-2">Modern Infrastructure</h3>
                        <p className="text-sm text-gray-600">State-of-the-art facilities and utilities</p>
                    </div>

                    <div className="text-center">
                        <Shield className="w-10 h-10 text-black mx-auto mb-4" />
                        <h3 className="font-bold text-lg mb-2">24/7 Security</h3>
                        <p className="text-sm text-gray-600">Advanced surveillance and gated access</p>
                    </div>

                    <div className="text-center">
                        <TreePine className="w-10 h-10 text-black mx-auto mb-4" />
                        <h3 className="font-bold text-lg mb-2">Green Spaces</h3>
                        <p className="text-sm text-gray-600">Lush gardens and eco-friendly design</p>
                    </div>

                    <div className="text-center">
                        <Users className="w-10 h-10 text-black mx-auto mb-4" />
                        <h3 className="font-bold text-lg mb-2">Community Living</h3>
                        <p className="text-sm text-gray-600">Social spaces and events for residents</p>
                    </div>

                    <div className="text-center">
                        <Award className="w-10 h-10 text-black mx-auto mb-4" />
                        <h3 className="font-bold text-lg mb-2">Award Winning</h3>
                        <p className="text-sm text-gray-600">Recognized for excellence and design</p>
                    </div>
                </div>

                {/* Explore More Button */}
                <div className="flex justify-center">
                    <a
                        href="#enquire"
                        className="inline-flex items-center justify-center rounded-lg bg-black px-8 py-4 text-sm font-medium text-white transition-opacity hover:opacity-80"
                    >
                        Explore More Amenities
                    </a>
                </div>
            </div>
        </section>
    );
}

export default ProjectHighlights;