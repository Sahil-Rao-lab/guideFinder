import BlogBox from "@/components/BlogBox";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import styles from '@/styles/Blogs.module.css'

export default function Events() {


    return (
        <>
            <Navbar staticNav={true} />
            <div className={styles.Container}>
                <div class={styles.dedicated_team}>
                    <p class={styles.small_txt}>GUIDEFINDER</p>
                    <h5 class={styles.bg_txt} id="agileTxt">EVENTS</h5>
                </div>
                <div className={styles.blogsContainer}>
                    <div>
                        <BlogBox/>
                        <BlogBox/>
                        <BlogBox/>
                        <BlogBox/>
                        <BlogBox/>
                        <BlogBox/>
                        <BlogBox/>
                        <BlogBox/>
                        <BlogBox/>
                    </div>
                    <button>SEE MORE</button>
                </div>

            </div>
            <hr />
            <Footer />
        </>
    )
}