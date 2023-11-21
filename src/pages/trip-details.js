import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Gallery } from "react-grid-gallery";
import styles from '@/styles/TripDetails.module.css';
import Link from 'next/link';
import { Head } from 'next/document';

export default function TripDetails() {

    const images = [
        {
            src: "https://images.pexels.com/photos/19017576/pexels-photo-19017576/free-photo-of-sunflowers-photograpy.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
        },
        {
            src: "https://images.pexels.com/photos/2915263/pexels-photo-2915263.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
        },
        {
            src: "https://images.pexels.com/photos/18964014/pexels-photo-18964014/free-photo-of-a-view-of-a-courtyard-through-an-archway.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            src: "https://images.pexels.com/photos/18698400/pexels-photo-18698400/free-photo-of-a-woman-sitting-on-a-stool-in-an-empty-parking-lot.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            src: "https://images.pexels.com/photos/2915263/pexels-photo-2915263.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
        },
        {
            src: "https://images.pexels.com/photos/15118791/pexels-photo-15118791/free-photo-of-a-person-holding-a-picture.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        }
    ];


    return (
        <>

            <Navbar staticNav={true} />
            <div className={styles.tripDetailsContainer}>
                <p className={styles.title}>New Year's coworking trip to 🇮🇸 Island: natural spectacle, New Year's celebration, adventure and relaxation 🌋🎉🧗🏼🧖🏼‍♀️</p>
                <div className={styles.hostInfo}>
                    <span>Hosted By</span>
                    <Link href={""}>Sahil Rao</Link>
                    <button>Message</button>
                </div>
                <div className={styles.summaryInfo}>
                    <div>
                        <i class="fa-solid fa-clock"></i>
                        <span>13 days</span>
                    </div>
                    <div>
                        <i class="fa-solid fa-flag"></i>
                        <span>9 Stops</span>
                    </div>
                    <div>
                        <i class="fa-solid fa-user"></i>
                        <span>5 Mates</span>
                    </div>
                    <div>
                        <i class="fa-solid fa-location-dot"></i>
                        <span>Chandigarh</span>
                    </div>
                </div>
                <div className={styles.stylesspecial}>
                    <p>What's special?</p>
                    <div>
                        <p><i class="fa-solid fa-bolt"></i><span>Lorem ipsum dolor sit amet.</span></p>
                        <p><i class="fa-solid fa-bolt"></i><span>Lorem ipsum dolor sit amet.</span></p>
                        <p><i class="fa-solid fa-bolt"></i><span>Lorem ipsum dolor sit amet.</span></p>
                    </div>
                </div>
                <div className={styles.description}>
                    <p>Hey guys,</p>
                    <br />
                    <p>You are cordially invited to join my mega exciting New Year's coworking trip to 🇮🇸 Island! Celebrate 🎉 the New Year with us amidst breathtaking 🌋 natural spectacles, experience unforgettable 🧗🏼 adventures, marvel at the magical 🟩 Northern Lights, relax in the cool 🧖🏼‍♀️ Blue Lagoon and enjoy a unique mix of work, relaxation and party!</p>
                    <br />
                    <p>🗓 Travel period: our coworking trip will take place over the New Year, so we can start the new year really fat together. We will spend the holidays together from (12/26/2013) to (01/07/2014).</p>
                    <br />
                    <p>Highlights of the trip:</p>
                    <br />
                    <p>👨🏽‍💻 Coworking in Paradise:</p>
                    <p>Take advantage of the mega inspiring natural setting to get some really productive work done. We have super cool coworking spaces that offers a perfect environment for creative collaboration.</p>
                    <br />
                    <p>🌋 Adventurous natural spectacles:</p>
                    <p>Be enchanted by the beautiful surroundings as we explore the incredible natural wonders of Iceland together. We will go on exciting hikes, enjoy breathtaking views and be impressed by the diversity of the landscapes. As an absolute highlight, an unforgettable glacier/lava hike is on the program.</p>
                    <br />
                    <p>👨🏽‍💻 Coworking in Paradise:</p>
                    <p>Take advantage of the mega inspiring natural setting to get some really productive work done. We have super cool coworking spaces that offers a perfect environment for creative collaboration.</p>
                    <br />
                    <p>🌋 Adventurous natural spectacles:</p>
                    <p>Be enchanted by the beautiful surroundings as we explore the incredible natural wonders of Iceland together. We will go on exciting hikes, enjoy breathtaking views and be impressed by the diversity of the landscapes. As an absolute highlight, an unforgettable glacier/lava hike is on the program.</p>
                    <br />
                    <p>👨🏽‍💻 Coworking in Paradise:</p>
                    <p>Take advantage of the mega inspiring natural setting to get some really productive work done. We have super cool coworking spaces that offers a perfect environment for creative collaboration.</p>
                    <br />
                    <p>🌋 Adventurous natural spectacles:</p>
                    <p>Be enchanted by the beautiful surroundings as we explore the incredible natural wonders of Iceland together. We will go on exciting hikes, enjoy breathtaking views and be impressed by the diversity of the landscapes. As an absolute highlight, an unforgettable glacier/lava hike is on the program.</p>
                    <br />
                    <p>👨🏽‍💻 Coworking in Paradise:</p>
                    <p>Take advantage of the mega inspiring natural setting to get some really productive work done. We have super cool coworking spaces that offers a perfect environment for creative collaboration.</p>
                    <br />
                    <p>🌋 Adventurous natural spectacles:</p>
                    <p>Be enchanted by the beautiful surroundings as we explore the incredible natural wonders of Iceland together. We will go on exciting hikes, enjoy breathtaking views and be impressed by the diversity of the landscapes. As an absolute highlight, an unforgettable glacier/lava hike is on the program.</p>
                    <p>Best regards,</p>
                    <p>Christian Hübsch :) </p>
                </div>
                <div className={styles.included}>
                    <div className="title">What's Included?</div>
                    <div>
                        <p><i class="fa-solid fa-check"></i><span>Lorem ipsum dolor sit amet.</span></p>
                        <p><i class="fa-solid fa-check"></i><span>Lorem ipsum dolor sit amet.</span></p>
                        <p><i class="fa-solid fa-check"></i><span>Lorem ipsum dolor sit amet.</span></p>
                        <p><i class="fa-solid fa-check"></i><span>Lorem ipsum dolor sit amet.</span></p>
                        <p><i class="fa-solid fa-check"></i><span>Lorem ipsum dolor sit amet.</span></p>
                        <p><i class="fa-solid fa-check"></i><span>Lorem ipsum dolor sit amet.</span></p>
                    </div>
                </div>
                <div className={styles.video}>
                    <div className="title">Trip Highligts Video</div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/zFiqZMTmolY?si=eaSrK8giZtA8JH34" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className={styles.tripMates}>
                    <div>
                        <div className={styles.img}></div>
                        <div className="name">Sahil</div>
                    </div>
                </div>
                <div className={styles.itinerary}>

                </div>
                <Gallery
                    images={images}
                />


            </div>
            <Footer />

        </>
    )
}