import { Dumbbell, Waves, Car, Utensils, Gamepad2, Book, Trees, Accessibility } from "lucide-react";

function Amenities() {
    return (
        <section className="px-7.5">
            <div className="py-16">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold">Amenities</h2>
                    <p className="mt-2 text-gray-600">World-class facilities for every lifestyle</p>
                </div>

                {/* Amenities Grid */}
                <div className="grid grid-cols-4 gap-6">
                    <div className="text-center p-6 rounded-lg bg-gray-50">
                        <Dumbbell className="w-10 h-10 text-black mx-auto mb-4" />
                        <h3 className="font-bold text-lg">Fitness Center</h3>
                        <p className="text-sm text-gray-600 mt-2">Fully equipped gym and workout facilities</p>
                    </div>

                    <div className="text-center p-6 rounded-lg bg-gray-50">
                        <Waves className="w-10 h-10 text-black mx-auto mb-4" />
                        <h3 className="font-bold text-lg">Swimming Pool</h3>
                        <p className="text-sm text-gray-600 mt-2">Olympic-size pool with heating system</p>
                    </div>

                    <div className="text-center p-6 rounded-lg bg-gray-50">
                        <Car className="w-10 h-10 text-black mx-auto mb-4" />
                        <h3 className="font-bold text-lg">Parking</h3>
                        <p className="text-sm text-gray-600 mt-2">Dedicated parking spaces for residents</p>
                    </div>

                    <div className="text-center p-6 rounded-lg bg-gray-50">
                        <Utensils className="w-10 h-10 text-black mx-auto mb-4" />
                        <h3 className="font-bold text-lg">Community Dining</h3>
                        <p className="text-sm text-gray-600 mt-2">Multi-cuisine restaurant and cafes</p>
                    </div>

                    <div className="text-center p-6 rounded-lg bg-gray-50">
                        <Gamepad2 className="w-10 h-10 text-black mx-auto mb-4" />
                        <h3 className="font-bold text-lg">Recreation</h3>
                        <p className="text-sm text-gray-600 mt-2">Gaming zone and entertainment hub</p>
                    </div>

                    <div className="text-center p-6 rounded-lg bg-gray-50">
                        <Book className="w-10 h-10 text-black mx-auto mb-4" />
                        <h3 className="font-bold text-lg">Library</h3>
                        <p className="text-sm text-gray-600 mt-2">Well-stocked reading and study area</p>
                    </div>

                    <div className="text-center p-6 rounded-lg bg-gray-50">
                        <Trees className="w-10 h-10 text-black mx-auto mb-4" />
                        <h3 className="font-bold text-lg">Green Spaces</h3>
                        <p className="text-sm text-gray-600 mt-2">Parks and landscaped gardens</p>
                    </div>

                    <div className="text-center p-6 rounded-lg bg-gray-50">
                        <Accessibility className="w-10 h-10 text-black mx-auto mb-4" />
                        <h3 className="font-bold text-lg">Accessibility</h3>
                        <p className="text-sm text-gray-600 mt-2">Wheelchair accessible areas</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Amenities;