import { useEffect, useState } from 'react'
import "./style.css";
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

function ImageSlider({ url }) {
    const [loading, setLoading] = useState(false);
    const [imageData, setImageData] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    // fetch logic to fetch image data 
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    setImageData(data)
                    setLoading(false);
                })
                .catch(error => {
                    console.error("Error occured while fetching Image Data: ", error)
                    setLoading(false);
                })
        }, 500);


    }, [url])

    const handlePrev = () => {
        setCurrentSlide(currentSlide === 0 ? imageData?.length - 1 : currentSlide - 1)
    }
    const handleNext = () => {
        setCurrentSlide(currentSlide === imageData?.length - 1 ? 0 : currentSlide + 1)
    }

    if (loading) {
        return (<div>Loading..</div>)
    }
    return (
        <section className='Image-Slider' aria-label='Gallery slider'>
            <h2>Image Slider</h2>
            <div className="slider">
                <button className='sliderButtons left-sliderButton' onClick={handlePrev}>
                    <BsArrowLeft size={40} className='' />
                </button>
                <div className="images">
                    {imageData && imageData?.map((item, index) => {
                        return (
                            <div className={`imageContainer ${currentSlide === index ? ' visible ' : ' hidden '}`} key={index}>
                                <img src={item?.download_url} alt={item?.download_url} />
                            </div>
                        )
                    })}
                </div>
                <button className='sliderButtons right-sliderButton' onClick={handleNext}>
                    <BsArrowRight size={40} className='' />
                </button>

                <span className='buttons'>
                    {
                        imageData && imageData?.map((_, index) => (
                            <button key={index} onClick={() => setCurrentSlide(index)} className={`currentSlideButton ${currentSlide === index ? ' darkButton ' : ' '}`}></button>
                        ))
                    }
                </span>
            </div>
            <div className="logic">
                <p>we have a state, currentSlide, where we store the id of current image, and is used for both images and mini-buttons, so on clicking next/prev button on selecting the mini-button at bottom of slider, the currentSlide number updates and div containing image corresponding to that id is set as visible. </p>
            </div>
        </section>
    )
}

export default ImageSlider