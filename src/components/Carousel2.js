import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';
import profileImage from '../../public/leader.jpg';
import star from '../../public/star.png';
import flag from '../../public/flag.png';

function Carousel2() {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    return (
        <div className='carousel'>
            <ReactSimplyCarousel
                activeSlideIndex={activeSlideIndex}
                onRequestChange={setActiveSlideIndex}
                itemsToShow={1}
                itemsToScroll={1}
                forwardBtnProps={{
                    //here you can also pass className, or any other button element attributes
                    style: {
                        alignSelf: 'center',
                        background: 'white',
                        border: 'none',
                        borderRadius: '50%',
                        color: 'black',
                        cursor: 'pointer',
                        fontSize: '20px',
                        height: 30,
                        lineHeight: 1,
                        textAlign: 'center',
                        width: 30,
                        position: "absolute",
                        top: "50%",
                        right: "0",
                        zIndex: "99",
                        boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
                    },
                    children: <span>{`>`}</span>,
                }}
                backwardBtnProps={{
                    //here you can also pass className, or any other button element attributes
                    style: {
                        alignSelf: 'center',
                        background: 'white',
                        border: 'none',
                        borderRadius: '50%',
                        color: 'black',
                        cursor: 'pointer',
                        fontSize: '20px',
                        height: 30,
                        lineHeight: 1,
                        textAlign: 'center',
                        width: 30,
                        position: "absolute",
                        top: "50%",
                        left: "0",
                        zIndex: "99",
                        boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"

                    },
                    children: <span>{`<`}</span>,
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
                {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
                <div className='carousel-margin'>
                    <div className="carousel-slide">
                        <Image src={profileImage} width="200" height={"200"} />
                        <div className="grid-2-main">
                            <div>
                                <Link href={""}>Preeti Shani</Link>
                                <p>Delhi/India</p>
                            </div>
                            <div className='rate'>
                                <span className="small">₹</span>
                                <span className='big'>500/hour</span>
                            </div>
                        </div>
                        <div className="star">
                            <Image src={star} width="15" height={"15"} />
                            <span className='bold'>Rated</span>
                            <span className='bold'>5</span>
                        </div>
                        <div className="flag">
                            <Image src={flag} width="10" height={"10"} />
                            <span className='bold'>3 Trips</span>
                            <span className='gray'>Completed</span>
                        </div>
                    </div>
                </div>
                <div className='carousel-margin'>
                    <div className="carousel-slide">
                        <Image src={profileImage} width="200" height={"200"} />
                        <div className="grid-2-main">
                            <div>
                                <Link href={""}>Preeti Shani</Link>
                                <p>Delhi/India</p>
                            </div>
                            <div className='rate'>
                                <span className="small">₹</span>
                                <span className='big'>500/hour</span>
                            </div>
                        </div>
                        <div className="star">
                            <Image src={star} width="15" height={"15"} />
                            <span className='bold'>Rated</span>
                            <span className='bold'>5</span>
                        </div>
                        <div className="flag">
                            <Image src={flag} width="10" height={"10"} />
                            <span className='bold'>3 Trips</span>
                            <span className='gray'>Completed</span>
                        </div>
                    </div>
                </div>
                <div className='carousel-margin'>
                    <div className="carousel-slide">
                        <Image src={profileImage} width="200" height={"200"} />
                        <div className="grid-2-main">
                            <div>
                                <Link href={""}>Preeti Shani</Link>
                                <p>Delhi/India</p>
                            </div>
                            <div className='rate'>
                                <span className="small">₹</span>
                                <span className='big'>500/hour</span>
                            </div>
                        </div>
                        <div className="star">
                            <Image src={star} width="15" height={"15"} />
                            <span className='bold'>Rated</span>
                            <span className='bold'>5</span>
                        </div>
                        <div className="flag">
                            <Image src={flag} width="10" height={"10"} />
                            <span className='bold'>3 Trips</span>
                            <span className='gray'>Completed</span>
                        </div>
                    </div>
                </div>
                <div className='carousel-margin'>
                    <div className="carousel-slide">
                        <Image src={profileImage} width="200" height={"200"} />
                        <div className="grid-2-main">
                            <div>
                                <Link href={""}>Preeti Shani</Link>
                                <p>Delhi/India</p>
                            </div>
                            <div className='rate'>
                                <span className="small">₹</span>
                                <span className='big'>500/hour</span>
                            </div>
                        </div>
                        <div className="star">
                            <Image src={star} width="15" height={"15"} />
                            <span className='bold'>Rated</span>
                            <span className='bold'>5</span>
                        </div>
                        <div className="flag">
                            <Image src={flag} width="10" height={"10"} />
                            <span className='bold'>3 Trips</span>
                            <span className='gray'>Completed</span>
                        </div>
                    </div>
                </div>
                <div className='carousel-margin'>
                    <div className="carousel-slide">
                        <Image src={profileImage} width="200" height={"200"} />
                        <div className="grid-2-main">
                            <div>
                                <Link href={""}>Preeti Shani</Link>
                                <p>Delhi/India</p>
                            </div>
                            <div className='rate'>
                                <span className="small">₹</span>
                                <span className='big'>500/hour</span>
                            </div>
                        </div>
                        <div className="star">
                            <Image src={star} width="15" height={"15"} />
                            <span className='bold'>Rated</span>
                            <span className='bold'>5</span>
                        </div>
                        <div className="flag">
                            <Image src={flag} width="10" height={"10"} />
                            <span className='bold'>3 Trips</span>
                            <span className='gray'>Completed</span>
                        </div>
                    </div>
                </div>
                <div className='carousel-margin'>
                    <div className="carousel-slide">
                        <Image src={profileImage} width="200" height={"200"} />
                        <div className="grid-2-main">
                            <div>
                                <Link href={""}>Preeti Shani</Link>
                                <p>Delhi/India</p>
                            </div>
                            <div className='rate'>
                                <span className="small">₹</span>
                                <span className='big'>500/hour</span>
                            </div>
                        </div>
                        <div className="star">
                            <Image src={star} width="15" height={"15"} />
                            <span className='bold'>Rated</span>
                            <span className='bold'>5</span>
                        </div>
                        <div className="flag">
                            <Image src={flag} width="10" height={"10"} />
                            <span className='bold'>3 Trips</span>
                            <span className='gray'>Completed</span>
                        </div>
                    </div>
                </div>
            </ReactSimplyCarousel>
        </div>
    );
}

export default Carousel2;