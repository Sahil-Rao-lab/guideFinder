import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Trust from '@/components/Trust';
import styles from '@/styles/About.module.css'
import Link from 'next/link'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';



export default function Careers() {

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
                <h5 class={styles.bg_txt} id="agileTxt">CAREER !</h5>
                <p className={styles.mainTitle}>Lorem, ipsum dolor.</p>
                <p className={styles.mainDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex expedita delectus harum quibusdam amet neque. Sunt pariatur reprehenderit ex aperiam, quam enim exercitationem molestiae maxime? Obcaecati beatae quidem quisquam suscipit?</p>
                <iframe className={styles.video} src="https://www.youtube.com/embed/trNgxcvqvII?si=dAjPNC5O3Eo8MvkN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <div className={styles.openRoles}>
                    <div className={styles.title}>OPEN POSITIONS</div>
                    <div className={styles.content}>
                        {
                            false ?
                                <p className={styles.alert}>No opening yet !</p>
                                :
                                <Accordion>
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                Position 1
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel className={styles.accordionContent}>
                                            <p className={styles.description}>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat eligendi neque rem veniam consectetur dolores alias aliquid temporibus quae! Id sapiente quo aliquam. Esse adipisci sunt praesentium magnam assumenda vel?
                                            </p>
                                            <form>
                                                <label htmlFor="file">Upload resume to apply:</label>
                                                <input type="file" name="file" id="file" />
                                                <input type="submit" value="APPLY" />
                                            </form>

                                        </AccordionItemPanel>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                Position 2
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel className={styles.accordionContent}>
                                            <p className={styles.description}>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat eligendi neque rem veniam consectetur dolores alias aliquid temporibus quae! Id sapiente quo aliquam. Esse adipisci sunt praesentium magnam assumenda vel?
                                            </p>
                                            <form>
                                                <label htmlFor="file">Upload resume to apply:</label>
                                                <input type="file" name="file" id="file" />
                                                <input type="submit" value="APPLY" />
                                            </form>

                                        </AccordionItemPanel>
                                    </AccordionItem>
                                </Accordion>
                        }
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
            <div className={styles.carrerMain}>
                <div className={styles.values}>
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

            <Footer />
        </>
    )
}