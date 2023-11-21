import Head from 'next/head';
import Navbar from '@/components/Navbar';
import { useEffect, useState } from 'react';
import Footer from '@/components/Footer';
import Link from 'next/link';
import reviewStar from '../../public/review-star.png';
import trend from '../../public/trend.png';
import star from '../../public/star.png';
import flag from '../../public/flag.png';
import emptyHeart from '../../public/empty-heart.png';
import fillHeart from '../../public/fill-heart.png';
import confirmed from '../../public/confirmed.png';
import trust1 from '../../public/trust1.svg';
import trust2 from '../../public/trust2.svg';
import trust3 from '../../public/trust3.svg';
import locationBlack from '../../public/location-black.png';
import profileImage from '../../public/leader.jpg';
import Image from 'next/image';
import TripLeaderBox from '@/components/TripLeaderBox';


export default function AllTripLeaders() {

    const [showFillter, setShowFillter] = useState(false);

    const languagesWithFlags = [
        { language: 'Mandarin Chinese', flag: '🇨🇳', country: 'China' },
        { language: 'Hindi', flag: '🇮🇳', country: 'India' },
        { language: 'Urdu', flag: '🇵🇰', country: 'Pakistan' }, // Added Urdu
        { language: 'Arabic', flag: '🇸🇦', country: 'Saudi Arabia' },
        { language: 'Bengali', flag: '🇧🇩', country: 'Bangladesh' },
        { language: 'Japanese', flag: '🇯🇵', country: 'Japan' },
        { language: 'Filipino', flag: '🇵🇭', country: 'Philippines' },
        { language: 'Indonesian', flag: '🇮🇩', country: 'Indonesia' },
        { language: 'Malaysian', flag: '🇲🇾', country: 'Malaysia' },
        { language: 'Thai', flag: '🇹🇭', country: 'Thailand' },
        { language: 'Telugu', flag: '🇮🇳', country: 'India' },
        { language: 'Vietnamese', flag: '🇻🇳', country: 'Vietnam' },
        { language: 'Chinese', flag: '🇨🇳', country: 'China' },
        { language: 'Russian', flag: '🇷🇺', country: 'Russia' },
        { language: 'Afrikaans', flag: '🇿🇦', country: 'South Africa' },
        { language: 'Swahili', flag: '🇰🇪', country: 'Kenya' },
        { language: 'English', flag: '🇺🇸', country: 'United States' },
        { language: 'Spanish', flag: '🇲🇽', country: 'Mexico' },
        { language: 'Spanish', flag: '🇦🇷', country: 'Argentina' },
        { language: 'Portuguese', flag: '🇧🇷', country: 'Brazil' },
        { language: 'English', flag: '🇬🇧', country: 'United Kingdom' },
        { language: 'Spanish', flag: '🇪🇸', country: 'Spain' },
        { language: 'German', flag: '🇩🇪', country: 'Germany' },
        { language: 'Italian', flag: '🇮🇹', country: 'Italy' },
        { language: 'French', flag: '🇫🇷', country: 'France' },
        { language: 'Portuguese', flag: '🇵🇹', country: 'Portugal' },
        { language: 'Dutch', flag: '🇳🇱', country: 'Netherlands' },
        { language: 'Croatian', flag: '🇭🇷', country: 'Croatia' },
        { language: 'Hungarian', flag: '🇭🇺', country: 'Hungary' },
        { language: 'Romanian', flag: '🇷🇴', country: 'Romania' },
        { language: 'Greek', flag: '🇬🇷', country: 'Greece' },
        { language: 'Serbian', flag: '🇷🇸', country: 'Serbia' },
        { language: 'Turkish', flag: '🇹🇷', country: 'Turkey' },
        { language: 'Bulgarian', flag: '🇧🇬', country: 'Bulgaria' },
        { language: 'Bengali', flag: '🇧🇩', country: 'Bangladesh' },
        { language: 'Catalan', flag: '🇪🇸', country: 'Spain' },
        { language: 'Danish', flag: '🇩🇰', country: 'Denmark' },
        { language: 'Nepali', flag: '🇳🇵', country: 'Nepal' },
        { language: 'Slovak', flag: '🇸🇰', country: 'Slovakia' },
        { language: 'Swedish', flag: '🇸🇪', country: 'Sweden' },
        { language: 'English', flag: '🇦🇺', country: 'Australia' },
        { language: 'Maori', flag: '🇳🇿', country: 'New Zealand' },
    ];


    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            </Head>
            <Navbar />
            <section className='page-description'>
                <h2 className="title">Find Trip Leaders</h2>
                <h4 className='description'>Discover your next big adventure, hosted by experts</h4>
                <ul className="breadcam">
                    <li><Link href={""}>Home</Link></li>
                    <li><i class="fa-solid fa-chevron-right"></i></li>
                    <li><Link href={""}>All Trip Leaders</Link></li>
                </ul>
            </section>
            <div className="two-grid-colums">
                <div className="colum-one">
                    <div className="find-trips-title">
                        <span>175</span> Trip Leaders
                    </div>
                    <div className='fillter-sort-main'>
                        <div className="fillter-main" onClick={() => setShowFillter(true)}>
                            <span>Fillter</span>
                            <i class="fa-solid fa-chevron-down"></i>
                        </div>
                        <div className="fillter-main">
                            <span>Sort By</span>
                            <i class="fa-solid fa-chevron-down"></i>
                        </div>
                    </div>
                </div>
                <div className="colum-two all-trip-leaders-grid">
                    <TripLeaderBox />
                    <TripLeaderBox />
                    <TripLeaderBox />
                    <TripLeaderBox />
                    <TripLeaderBox />
                    <TripLeaderBox />
                    <TripLeaderBox />
                    <TripLeaderBox />
                    <TripLeaderBox />
                    <TripLeaderBox />
                </div>
                <button>LOAD MORE..</button>
            </div>
            <div className="trust">
                <h2 className='title'>Book Hassel Free</h2>
                <div className="trust-container">
                    <div className="truct-box">
                        <Image src={trust1} width="auto" height={"auto"} />
                        <p className="title">Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
                        <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, omnis.</p>
                    </div>
                    <div className="truct-box">
                        <Image src={trust2} width="auto" height={"auto"} />
                        <p className="title">Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
                        <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, omnis.</p>
                    </div>
                    <div className="truct-box">
                        <Image src={trust3} width="auto" height={"auto"} />
                        <p className="title">Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
                        <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, omnis.</p>
                    </div>
                </div>
            </div>
            <hr />
            {
                showFillter &&
                <div className="fillter-model">
                    <div className="fillter-model-heading">
                        <div className="title">FILLTER <span>02</span></div>
                        <i class="fa-solid fa-xmark"></i>
                    </div>
                    <div className="fillter-model-content">
                        <div className="type-of-tip">
                            <p className="fillter-heading">Type of trip</p>
                            <div className="fillter-content">
                                <label htmlFor="guideTrip">Guided Trip <input type="checkbox" name="guideTrip" id="guideTrip" /></label>
                                <label htmlFor="coWorking">Coworking Trip <input type="checkbox" name="coWorking" id="coWorking" /></label>
                            </div>
                        </div>
                        <div className="departure-main">
                            <div className="fillter-heading">Departure month</div>
                            <div className="departure-content">
                                <button className="selectable-boxes">Nov 2023</button>
                                <button className="selectable-boxes">Nov 2023</button>
                                <button className="selectable-boxes">Nov 2023</button>
                                <button className="selectable-boxes">Nov 2023</button>
                                <button className="selectable-boxes">Nov 2023</button>
                                <button className="selectable-boxes">Nov 2023</button>
                                <button className="selectable-boxes">Nov 2023</button>
                                <button className="selectable-boxes">Nov 2023</button>
                                <button className="selectable-boxes">Nov 2023</button>
                                <button className="selectable-boxes">Nov 2023</button>
                                <button className="selectable-boxes">Nov 2023</button>
                                <button className="selectable-boxes">Nov 2023</button>
                                <button className="selectable-boxes">Nov 2023</button>
                                <button className="selectable-boxes">Nov 2023</button>
                                <button className="selectable-boxes">Nov 2023</button>
                            </div>
                        </div>
                        <div className="trip-type">
                            <div className="fillter-heading">Trip Style</div>
                            <div className="trip-type-content">
                                <button className="selectable-boxes">
                                    <i class="fa-solid fa-umbrella"></i>
                                    <span>Beach</span>
                                </button>
                                <button className="selectable-boxes">
                                    <i class="fa-solid fa-umbrella"></i>
                                    <span>Beach</span>
                                </button>
                                <button className="selectable-boxes">
                                    <i class="fa-solid fa-umbrella"></i>
                                    <span>Beach</span>
                                </button>
                                <button className="selectable-boxes">
                                    <i class="fa-solid fa-umbrella"></i>
                                    <span>Beach</span>
                                </button>
                                <button className="selectable-boxes">
                                    <i class="fa-solid fa-umbrella"></i>
                                    <span>Beach</span>
                                </button>
                                <button className="selectable-boxes">
                                    <i class="fa-solid fa-umbrella"></i>
                                    <span>Beach</span>
                                </button>
                            </div>
                        </div>
                        <div className="continent-main">
                            <div className="fillter-heading">Continent</div>
                            <div className="fillter-content">
                                <label htmlFor="asia">Asia <input type="checkbox" name="coWorking" id="coWorking" /></label>
                                <label htmlFor="coWorking">Africa <input type="checkbox" name="coWorking" id="coWorking" /></label>
                                <label htmlFor="coWorking">North America <input type="checkbox" name="coWorking" id="coWorking" /></label>
                                <label htmlFor="coWorking">South America <input type="checkbox" name="coWorking" id="coWorking" /></label>
                                <label htmlFor="coWorking">Europe <input type="checkbox" name="coWorking" id="coWorking" /></label>
                                <label htmlFor="coWorking">Australia (Oceania) <input type="checkbox" name="coWorking" id="coWorking" /></label>
                                <label htmlFor="coWorking">Antarctica <input type="checkbox" name="coWorking" id="coWorking" /></label>
                            </div>
                        </div>
                        <div className="tripLeader-language">
                            <div className="fillter-heading">TripLeader language</div>
                            <div className="fillter-content">
                                {
                                    languagesWithFlags.map((item, index) => (
                                        <label htmlFor={item.language.replaceAll(" ", "")} key={index} >{item.flag}{" "}{item.language} <input type="checkbox" name={item.language.replaceAll(" ", "")} id={item.language.replaceAll(" ", "")} /></label>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="fillter-actions">
                        <button>CLEAR FILLTER</button>
                        <button>APPLY</button>
                    </div>
                </div>
            }



            <Footer />
        </>
    )
}
