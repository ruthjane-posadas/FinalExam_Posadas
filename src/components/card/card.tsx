interface CardProps {
    name: string;
    description: string;
    image: string;
}

export default function Card({ name, description, image }: CardProps) {
    return (
        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
            <img
                src={image}
                alt={name}
                className="w-full h-48 sm:h-64 md:h-80 object-cover object-center"
            />
            <div className="p-4 md:p-6 text-gray-800">
                <h3 className="font-semibold text-lg sm:text-xl mb-2">{name}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{description}</p>
            </div>
        </div>
    );
}
