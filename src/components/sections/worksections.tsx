import Card from "../card/card";

export default function WorksSection() {
    const works = [
        {
            name: "2D Illustration",
            description: "With proficiency in ClipStudioPaint, I create 2D illustrations based on my original concepts.",
            image: "/images/2D_illustration.png",
        },
        {
            name: "3D Modelling",
            description: "With proficiency in Blender, I create 3D models mostly for inanimate objects and texture them using Adobe Substance Painter.",
            image: "/images/3d_models_textures.png",
        },
        {
            name: "Animation",
            description: "With proficiency in both Blender and Adobe Animate, I create 2D and 3D animations sharing my own stories.",
            image: "/images/Animation.png",
        },
    ];

    return (
        <section
            id="works"
            className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat text-white text-center px-6 py-20"
            style={{
                backgroundImage: "url('/images/works_bg.jpg')",
            }}
        >
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative z-10 w-full max-w-6xl mx-auto">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-10 drop-shadow-lg">
                    My Works
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {works.map((work) => (
                        <Card
                            key={work.name}
                            name={work.name}
                            description={work.description}
                            image={work.image}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
