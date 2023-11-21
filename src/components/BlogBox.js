import styles from '@/styles/RecentBlogs.module.css'
import Link from 'next/link'


export default function BlogBox(){


    return(
        <>
        <div className={styles.blogBox}>
            <div className={styles.img}></div>
            <div className={styles.title}>Frequently Asked Questions</div>
            <div className={styles.description}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis natus unde asperiores quas eaque quisquam, cupiditate consectetur aliquid labore recusandae explicabo dicta distinctio deserunt fugit id at commodi sit error.</div>
            <Link href={""}>Read More..</Link>
        </div>
        
        </>
    )
}