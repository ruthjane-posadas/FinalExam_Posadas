export function AboutSection() {
    return (
        <section
            id="about"
            className="relative w-full min-h-screen flex items-center py-16 md:py-0 bg-cover bg-center bg-no-repeat text-white"
            style={{ backgroundImage: "url('/images/Contact BG.png')" }}
        >
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6">

                <div className="flex justify-center md:justify-start items-center">
                    <img
                        src="/images/about_pic.JPG"
                        alt="About Profile"
                        className="w-60 sm:w-72 md:w-[420px] rounded-lg object-cover shadow-2xl"
                    />
                </div>

                <div className="flex flex-col justify-center text-left max-w-xl">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-xl leading-tight">
                        Learn more about me!
                    </h2>

                    <p className="text-base sm:text-lg leading-relaxed mb-8 drop-shadow">
                        Hi, I&aposm Ruth, sometimes Ruru! I&aposm an illustrator and animator based in the Philippines.
                        In my downtimes, my hobbies include gaming, watching films, series, and anime.
                        I also like reading e-books and Japanese comics (mangas).
                    </p>

                    <div className="mb-8">
                        <div className="px-5 py-2 bg-white/30 w-fit rounded-md font-semibold mb-4 backdrop-blur-md text-sm sm:text-base">
                            SKILLS:
                        </div>
                        <ul className="list-disc list-inside space-y-2 text-base sm:text-lg">
                            <li>Production and project management</li>
                            <li>Presentation and pitching</li>
                            <li>Story and visual development</li>
                            <li>Video editing and compositing</li>
                        </ul>
                    </div>

                    <div>
                        <div className="px-5 py-2 bg-white/30 w-fit rounded-md font-semibold mb-4 backdrop-blur-md text-sm sm:text-base">
                            SOFTWARES:
                        </div>
                        <ul className="list-disc list-inside space-y-2 text-base sm:text-lg">
                            <li>Clip Studio Paint</li>
                            <li>Adobe Premiere Pro</li>
                            <li>Blender</li>
                            <li>Adobe Photoshop</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
