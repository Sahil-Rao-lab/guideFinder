import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Trust from '@/components/Trust';
import styles from '@/styles/About.module.css'
import Link from 'next/link'


export default function About() {

    const images = [
        {
            src: "https://images.pexels.com/photos/19017576/pexels-photo-19017576/free-photo-of-sunflowers-photograpy.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
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
        },
    ];

    return (
        <>
            <Navbar staticNav={true} />
            <div className={styles.container}>
                <h5 class={styles.bg_txt} id="agileTxt">ABOUT US !</h5>
                <p className={styles.mainTitle}>Travel Solo in a Group!</p>
                <p className={styles.mainDescription}>At JoinMyTrip, we connect travelers worldwide with our unique group trips. We are here to give everyone a chance to experience amazing trips around the world! When traveling with us, you'll travel insanely authentic and in incredibly small groups with forever memorable experiences. We are driven by passion. We're here to change lives - trip by trip! Become part of the change and join our trip!</p>
                <iframe className={styles.video} src="https://www.youtube.com/embed/trNgxcvqvII?si=dAjPNC5O3Eo8MvkN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <div className={styles.values} style={{marginTop:"5rem"}}>
                    <p className={styles.title}>Our Values</p>
                    <p className={styles.description}>When all the parts come together, extraordinary things can happen</p>
                    <div className={styles.containerValues}>
                        <div className={styles.circle1}>EXICTING</div>
                        <div className={styles.circle2}>CONNECTED</div>
                        <div className={styles.circle3}>UNIQUE</div>
                        <div className={styles.circle4}>OPEN-MINDED</div>
                    </div>
                </div>
            </div>
            <div className={styles.images}>
                {
                    images.map((item, index) => (
                        <img src={item.src} />
                    ))
                }
            </div>
            <div className={styles.carrer}>
                <div className={styles.title}>Join our crew.</div>
                <div className={styles.description}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate repellat sapiente quis, similique nostrum repudiandae debitis nihil tenetur omnis fuga recusandae porro. Incidunt nihil at itaque sit fugit numquam dolor?
                </div>
                <Link href={""}>CHECK CAREERS</Link>
            </div>
            <Footer />
        </>
    )
}