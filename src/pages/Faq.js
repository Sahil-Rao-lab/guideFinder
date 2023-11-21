
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import styles from '@/styles/Faq.module.css'
import Link from "next/link";
import Trust from "@/components/Trust";
import RecentBlogs from "@/components/RecentBlogs";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';


export default function Faq() {

    return (
        <>
            <Navbar staticNav={true} />
            <div className={styles.container}>
                <div class={styles.dedicated_team}>
                    <p class={styles.small_txt}>GUIDEFINDER</p>
                    <h5 class={styles.bg_txt} id="agileTxt">HELP / F&Q</h5>
                </div>
                <div className={styles.questionsSection}>
                    <p className={styles.mainTitle}>Basic</p>
                    <div>
                        <div>
                            <p class={styles.big_small_txt}>1. What is guide finder and how its work?</p>
                            <p class={styles.big_small_txt2}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, iure delectus nisi sunt aliquam, reprehenderit cum labore dolore quidem esse aliquid. Quo sit a necessitatibus dolore unde sapiente repellat placeat!</p>
                        </div>
                        <div>
                            <p class={styles.big_small_txt}>2. What is guide finder and how its work?</p>
                            <p class={styles.big_small_txt2}>Lorem ipsum dolorquidem esse aliquid. Quo sit a necessitatibus dolore unde sapiente repellat placeat!</p>
                        </div>
                        <div>
                            <p class={styles.big_small_txt}>3. What is guide finder and how its work?</p>
                            <p class={styles.big_small_txt2}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, iure delectus nisi sunt aliquam, reprehenderit cum labore dolore quidem esse aliquid. Quo sit a necessitatibus dolore unde sapiente repellat placeat!</p>
                        </div>
                        <div>
                            <p class={styles.big_small_txt}>4. What is guide finder and how its work?</p>
                            <p class={styles.big_small_txt2}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, iure delectus nisi sunt aliquam, reprehenderit cum labore dolore quidem esse aliquid. Quo sit a necessitatibus dolore unde sapiente repellat placeat!</p>
                        </div>
                    </div>
                    <p className={styles.mainTitle}>Lorem ipshum</p>
                    <div>
                        <div>
                            <p class={styles.big_small_txt}>1. What is guide finder and how its work?</p>
                            <p class={styles.big_small_txt2}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, iure delectus nisi sunt aliquam, reprehenderit cum labore dolore quidem esse aliquid. Quo sit a necessitatibus dolore unde sapiente repellat placeat!</p>
                        </div>
                        <div>
                            <p class={styles.big_small_txt}>2. What is guide finder and how its work?</p>
                            <p class={styles.big_small_txt2}>Lorem ipsum dolorquidem esse aliquid. Quo sit a necessitatibus dolore unde sapiente repellat placeat!</p>
                        </div>
                        <div>
                            <p class={styles.big_small_txt}>3. What is guide finder and how its work?</p>
                            <p class={styles.big_small_txt2}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, iure delectus nisi sunt aliquam, reprehenderit cum labore dolore quidem esse aliquid. Quo sit a necessitatibus dolore unde sapiente repellat placeat!</p>
                        </div>
                        <div>
                            <p class={styles.big_small_txt}>4. What is guide finder and how its work?</p>
                            <p class={styles.big_small_txt2}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, iure delectus nisi sunt aliquam, reprehenderit cum labore dolore quidem esse aliquid. Quo sit a necessitatibus dolore unde sapiente repellat placeat!</p>
                        </div>
                    </div>
                    <p className={styles.mainTitle}>Lorem ipshum</p>
                    <div>
                        <div>
                            <p class={styles.big_small_txt}>1. What is guide finder and how its work?</p>
                            <p class={styles.big_small_txt2}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, iure delectus nisi sunt aliquam, reprehenderit cum labore dolore quidem esse aliquid. Quo sit a necessitatibus dolore unde sapiente repellat placeat!</p>
                        </div>
                        <div>
                            <p class={styles.big_small_txt}>2. What is guide finder and how its work?</p>
                            <p class={styles.big_small_txt2}>Lorem ipsum dolorquidem esse aliquid. Quo sit a necessitatibus dolore unde sapiente repellat placeat!</p>
                        </div>
                        <div>
                            <p class={styles.big_small_txt}>3. What is guide finder and how its work?</p>
                            <p class={styles.big_small_txt2}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, iure delectus nisi sunt aliquam, reprehenderit cum labore dolore quidem esse aliquid. Quo sit a necessitatibus dolore unde sapiente repellat placeat!</p>
                        </div>
                        <div>
                            <p class={styles.big_small_txt}>4. What is guide finder and how its work?</p>
                            <p class={styles.big_small_txt2}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, iure delectus nisi sunt aliquam, reprehenderit cum labore dolore quidem esse aliquid. Quo sit a necessitatibus dolore unde sapiente repellat placeat!</p>
                        </div>
                        <div>
                            <p class={styles.big_small_txt}>4. What is guide finder and how its work?</p>
                            <p class={styles.big_small_txt2}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, iure delectus nisi sunt aliquam, reprehenderit cum labore dolore quidem esse aliquid. Quo sit a necessitatibus dolore unde sapiente repellat placeat!</p>
                        </div>
                        <div>
                            <p class={styles.big_small_txt}>4. What is guide finder and how its work?</p>
                            <p class={styles.big_small_txt2}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, iure delectus nisi sunt aliquam, reprehenderit cum labore dolore quidem esse aliquid. Quo sit a necessitatibus dolore unde sapiente repellat placeat!</p>
                        </div>
                        <div>
                            <p class={styles.big_small_txt}>4. What is guide finder and how its work?</p>
                            <p class={styles.big_small_txt2}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, iure delectus nisi sunt aliquam, reprehenderit cum labore dolore quidem esse aliquid. Quo sit a necessitatibus dolore unde sapiente repellat placeat!</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <RecentBlogs />
            <hr />
            <Footer />

        </>
    )
}