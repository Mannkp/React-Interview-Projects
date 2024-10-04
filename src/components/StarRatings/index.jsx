import "./style.css";
import { memo, useState, useCallback } from "react";
import { FaStar } from "react-icons/fa";

// setting default no of stars to 5
const StarRatings = ({ noOfStars = 5 }) => {

    const [selectedStars, setSelectedStars] = useState(0);
    const [hoverStars, setHoverStars] = useState(0);

    const handleRating = useCallback((index) => {
        setSelectedStars(index + 1);
    }, [])

    const handleMouseEnter = useCallback((index) => {
        setHoverStars(index + 1);
    }, [])

    const handleMouseExit = useCallback(() => {
        setSelectedStars(selectedStars);
        setHoverStars(0);
    }, [selectedStars])

    return (
        <section className="StarRatings">
            <h2>StarRatings</h2>
            {[...Array(noOfStars)]?.map((_, index) => (
                <FaStar key={index}
                    className={index < (hoverStars || selectedStars) ? 'active' : ''}
                    onClick={() => handleRating(index)}
                    onMouseOver={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseExit()}
                />
            ))}
            <p>{selectedStars}</p>
        </section>
    )
}

export default memo(StarRatings);
