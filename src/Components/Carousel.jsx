import React, { useEffect, useState } from "react";

const Carousel = ({ children }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % React.Children.count(children));
        }, 2000);

        return () => clearInterval(interval);
    }, [children]);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? React.Children.count(children) - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % React.Children.count(children));
    };

    return (
        <div className="carousel relative overflow-hidden h-screen w-full">
            <div className="carousel-inner relative w-full h-full">
                {React.Children.map(children, (child, index) => (
                    <div
                        key={index}
                        className={`absolute w-full h-full transition-opacity duration-700 ease-in-out`}
                        style={{
                            opacity: index === currentIndex ? 1 : 1,
                            zIndex: index === currentIndex ? 1 : 0,
                        }}
                    >
                        {child}
                    </div>
                ))}
            </div>
            <button
                className="absolute z-10 top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2"
                onClick={goToPrevious}
            >
                Prev
            </button>
            <button
                className="absolute z-10 top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2"
                onClick={goToNext}
            >
                Next
            </button>
        </div>
    );
};

export default Carousel;
