export function HeroSection() {
    return (
        <section
            id="home"
            className="relative flex flex-col items-center justify-center min-h-screen md:justify-start pt-28 md:pt-24 bg-cover bg-center bg-no-repeat text-white text-center px-6"
            style={{
                backgroundImage: "url('/images/hero-bg.png')",
            }}
        >
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative flex flex-col items-center">
                <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 drop-shadow-lg">
                    Hey there!
                </h2>

                <img
                    src="/images/portfolio_pfp.jpg"
                    alt="Profile"
                    className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full border-4 border-white shadow-xl object-cover mb-6"
                />

                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 drop-shadow-md leading-snug">
                    Welcome to RUTOPIA
                    <br />
                    <span className="text-lg sm:text-xl md:text-2xl">
                        by Ruth Jane Posadas
                    </span>
                </h3>

                <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                    I am Ruru, an animation student from Jose Rizal University. <br />
                    From traditional & digital illustration, 3D modelling to 3D animation, <br />
                    I love creating and experiencing the world of art.
                </p>
            </div>
        </section>
    );
}
