import styles from '@/styles/RecentBlogs.module.css'
import BlogBox from './BlogBox'
import Link from 'next/link'


export default function RecentBlogs() {

    return (
        <div className={styles.container}>
            <div className={styles.mainTitle}>RECENT BLOGS</div>
            <div className={styles.blogs}>
                <BlogBox />
                <BlogBox />
                <BlogBox />
            </div>
            <Link href={""}>CHECK ALL</Link>
        </div>
    )
}