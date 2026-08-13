import { MapPin, Train, Bus, Landmark } from "lucide-react";

function LocationConnectivity() {
    return (
        <section className="px-7.5">
            <div className="py-16">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold">Location & Connectivity</h2>
                    <p className="mt-2 text-gray-600">Perfectly connected to everything you need</p>
                </div>

                <div className="grid grid-cols-2 gap-12 items-start">
                    {/* LEFT - Map */}
                    <div className="rounded-lg overflow-hidden">
                        <iframe
                            className="w-full h-[450px]"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.9287845269256!2d72.76234!3d19.16395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7a0000001!2sNaigaon%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1234567890"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                    {/* RIGHT - Location Info */}
                    <div>
                        <h3 className="text-2xl font-bold mb-8">Connectivity Highlights</h3>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <Train className="w-6 h-6 text-black mt-1 flex-shrink-0" />
                                <div>
                                    <p className="font-bold">Railway Station</p>
                                    <p className="text-sm text-gray-600">2 km away • Easy access to local trains</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Bus className="w-6 h-6 text-black mt-1 flex-shrink-0" />
                                <div>
                                    <p className="font-bold">Bus Connectivity</p>
                                    <p className="text-sm text-gray-600">Multiple bus routes • Connected to city center</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Landmark className="w-6 h-6 text-black mt-1 flex-shrink-0" />
                                <div>
                                    <p className="font-bold">Near Landmarks</p>
                                    <p className="text-sm text-gray-600">Shopping malls, hospitals, schools nearby</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <MapPin className="w-6 h-6 text-black mt-1 flex-shrink-0" />
                                <div>
                                    <p className="font-bold">Easy Access</p>
                                    <p className="text-sm text-gray-600">5 mins to highway • 20 mins to airport</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LocationConnectivity;