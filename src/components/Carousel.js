import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';
import profileImage from '../../public/leader.jpg';
import star from '../../public/star.png';
import flag from '../../public/flag.png';
import leftArrow from '../../public/left-arrow.png';
import rightArrow from '../../public/right-arrow.png';
import TripLeaderBox from './TripLeaderBox';

function Carousel() {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    return (
        <div className='carousel'>
            <ReactSimplyCarousel
                activeSlideIndex={activeSlideIndex}
                onRequestChange={setActiveSlideIndex}
                itemsToShow={1}
                itemsToScroll={1}
                forwardBtnProps={{
                    className: "carousel-btns carousel-btn2",
                    children: <Image className='arrows' src={rightArrow} width="auto" height={"auto"} />
                }}
                backwardBtnProps={{
                    className: "carousel-btns carousel-btn1",
                    children: <Image className='arrows' src={leftArrow} width="auto" height={"auto"} />
                }}
                responsiveProps={[
                    {
                        itemsToShow: 4,
                        itemsToScroll: 2,
                        minWidth: 768,
                    },
                ]}
                speed={400}
                easing="linear"
            >
                <div className="carousel-margin">
                    <TripLeaderBox />
                </div>
                <div className="carousel-margin">
                    <TripLeaderBox />
                </div>
                <div className="carousel-margin">
                    <TripLeaderBox />
                </div>
                <div className="carousel-margin">
                    <TripLeaderBox />
                </div>
                <div className="carousel-margin">
                    <TripLeaderBox />
                </div>
                <div className="carousel-margin">
                    <TripLeaderBox />
                </div>
                <div className="carousel-margin">
                    <TripLeaderBox />
                </div>

            </ReactSimplyCarousel>
        </div>
    );
}

export default Carousel;