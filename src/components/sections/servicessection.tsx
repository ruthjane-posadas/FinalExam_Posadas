import Card from "@/components/card/card";

export default function ServicesSection() {
    const services = [
        {
            name: "2D Illustration",
            description:
                "With proficiency in ClipStudioPaint, I offer illustrating services for Spotify album covers.",
            image: "/images/2D illustration_services.jpg",
        },
        {
            name: "Video Editing",
            description:
                "With proficiency in Adobe Premiere Pro, I offer video editing services for lyric videos.",
            image: "/images/Video Editing.png",
        },
        {
            name: "Motion Graphics",
            description:
                "With proficiency in Adobe Animate and Adobe After Effects, I offer motion graphics services for promotional materials.",
            image: "/images/Motion Graphics.jpg",
        },
    ];

    return (
        <section
            id="services"
            className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat text-white text-center px-6 py-20"
            style={{
                backgroundImage: "url('/images/services_bg.png')",
            }}
        >
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative z-10 w-full max-w-6xl mx-auto">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-10 drop-shadow-lg">
                    My Services
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <Card
                            key={service.name}
                            name={service.name}
                            description={service.description}
                            image={service.image}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}