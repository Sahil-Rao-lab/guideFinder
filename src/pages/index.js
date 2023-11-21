import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import Navbar from '@/components/Navbar';
import { useEffect, useState } from 'react';
import location from '../../public/location.png';
import world from '../../public/world.png';
import Link from 'next/link';
import Carousel from '@/components/Carousel';
import star from '../../public/star.png';
import verifiedStar from '../../public/verified-star.png';
import reviewStar from '../../public/review-star.png';
import trend from '../../public/trend.png';
import emptyHeart from '../../public/empty-heart.png';
import fillHeart from '../../public/fill-heart.png';
import confirmed from '../../public/confirmed.png';
import locationBlack from '../../public/location-black.png';

import profileImage from '../../public/leader.jpg';
import Footer from '@/components/Footer';
import TripBox from '@/components/TripBox';
import Trust from '@/components/Trust';
import RecentBlogs from '@/components/RecentBlogs';


export default function Home() {

  const slides = [
    {
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      image: 'https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg',
    },
    {
      image: 'https://images.pexels.com/photos/1531660/pexels-photo-1531660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      image: 'https://images.pexels.com/photos/2647722/pexels-photo-2647722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);


  return (
    <>
      <div className="homeSlides">
        <Navbar />
        {slides.map((slide, index) => (
          <div className={`homeSlide ${index === currentSlideIndex ? 'active' : ''}`} key={index}>
            <img src={slide.image} alt={`homeSlide${index + 1}`} />
          </div>
        ))}
        <div className="homeSlideContent">
          <p>The World is Waiting For You</p>
          <h1>Discover amzaing places at exclusive deals</h1>
          <form>
            <label htmlFor="location"><Image src={location} width={"25"} height={"25"} /></label>
            <input type="text" name="location" id="location" placeholder='Anywhere' />
            <button type='submit'>Find Places</button>
          </form>
        </div>
      </div>
      <div className="create-trip">
        <div className="create-trip-content">
          <p className='title-main'>SAVE TIME: CREATE A TRIP & GET OFFERS FROM LOCALS</p>
          <div>
            <p className='title'>How GuideFinder Works</p>
            <p className='description'>Choose from over 300 unique trips from all around the world.</p>
            <p className='title'>How GuideFinder Works</p>
            <p className='description'>Reserve a spot on your dream trip by paying a 20% deposit and send a message to your TripLeader to introduce yourself.</p>
            <p className='title'>How GuideFinder Works</p>
            <p className='description'>The TripLeader can now accept you as a TripMate and will start your adventure together!</p>
          </div>
          <Link className='fill-link' href={""}>CREATE A TRIP</Link>
        </div>
        <Image src={world} height="auto" width={"auto"} />
        <div className="create-trip-content">
          <p className='title-main'>WHY YOU SHOULD TRAVEL WITH GUIDEFINDER!</p>
          <div>
            <p className='title'>Secure Payment</p>
            <p className='description'>Your Money is safe with us! We make sure you're going on the trip you paid for and if there's a problem we'll fix it for you!</p>
            <p className='title'>24/7 Customer Service</p>
            <p className='description'>Any questions regarding trips? You can't quite figure JoinMyTrip out? We're here to help! Click here to contact us.</p>
            <p className='title'>Handpicked Trips</p>
            <p className='description'>All of our trips are handpicked and reviewed by our Trip Designers. These unique trips are unlike any other trip you'll find anywhere! Unique trips, unique experiences, amazing travel companions!z</p>
          </div>
          <Link href={""}>VIEW ALL TRIPS</Link>
        </div>
      </div>

      <div className="featured feature-bg">
        <h2 className='title'>Featured TripLeaders</h2>
        <Carousel />
        <Link className='fill-link' href={""}>ALL TRIPLEADERS</Link>
      </div>

      <div className="featured featured-trips">
        <h2 className="title">Featured Trips</h2>

        <div className="featured-grid-container">
          <TripBox />
          <TripBox />
          <TripBox />
          <TripBox />
          <TripBox />
          <TripBox />
        </div>

        <Link className='fill-link' href={""}>VIEW ALL TRIPS</Link>
      </div>

      <RecentBlogs/>
      <hr />

      <Trust />
      <hr />

      <Footer />
    </>
  )
}
