export function ContactsSection() {
    return (
        <section
            id="contacts"
            className="relative w-full min-h-screen flex items-center bg-cover bg-center bg-no-repeat text-white py-16 px-6"
            style={{ backgroundImage: "url('/images/Contact BG.png')" }}
        >
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

                <div className="flex justify-center md:justify-start items-center">
                    <img
                        src="/images/Contact.png"
                        alt="Contact Profile"
                        className="w-48 h-48 sm:w-60 sm:h-60 md:w-96 md:h-96 rounded-lg object-cover shadow-2xl"
                    />
                </div>

                <div className="flex flex-col justify-center text-left">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-xl">
                        Get in touch!
                    </h2>

                    <p className="text-base sm:text-lg md:text-xl max-w-md mb-8 leading-relaxed drop-shadow">
                        For commissions and project inquiries, please use these contact details.
                    </p>

                    <div className="flex flex-col gap-6">

                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                            <a
                                href="mailto:ruthjanesanchoposadas@gmail.com"
                                className="px-6 py-3 bg-white/20 hover:bg-white/30 rounded-full font-semibold backdrop-blur-md transition-all w-fit"
                            >
                                E-MAIL
                            </a>
                            <span className="text-sm sm:text-base break-all">
                                ruthjanesanchoposadas@gmail.com
                            </span>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                            <a
                                href="https://facebook.com/ruru.rutopia"
                                target="_blank"
                                className="px-6 py-3 bg-white/20 hover:bg-white/30 rounded-full font-semibold backdrop-blur-md transition-all w-fit"
                            >
                                FACEBOOK
                            </a>
                            <span className="text-sm sm:text-base break-all">
                                fb.com/ruru.rutopia
                            </span>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                            <a
                                href="https://instagram.com/ruru.rutopia"
                                target="_blank"
                                className="px-6 py-3 bg-white/20 hover:bg-white/30 rounded-full font-semibold backdrop-blur-md transition-all w-fit"
                            >
                                INSTAGRAM
                            </a>
                            <span className="text-sm sm:text-base break-all">
                                instagram.com/ruru.rutopia
                            </span>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
