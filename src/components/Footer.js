import Link from "next/link";


export default function Footer() {


    return (
        <footer>
            <div className="footer-top">

                <div className="footer-categories">
                    <div className="footer-category">
                        <div className="category-heading">TRAVEL</div>
                        <ul>
                            <li><Link href="/How-it-works">How it works</Link></li>
                            <li><Link href="/all-trips">Find a trip</Link></li>
                            <li><Link href="/all-trip-leaders">Find a trip leader</Link></li>
                            {/* <li><Link href="">Create a trip</Link></li> */}
                        </ul>
                    </div>
                    <div className="footer-category">
                        <div className="category-heading">LATEST NEWS</div>
                        <ul>
                            <li><Link href="/Blogs">Blog</Link></li>
                            <li><Link href="/Events">Event</Link></li>
                        </ul>
                    </div>
                    <div className="footer-category">
                        <div className="category-heading">GUIDEFINDER</div>
                        <ul>
                            <li><Link href="/About">About Us</Link></li>
                            <li><Link href="/Careers">Careers</Link></li>
                            <li><Link href="/Privacy">Privacy</Link></li>
                            <li><Link href="/Terms">Terms</Link></li>
                        </ul>
                    </div>
                    <div className="footer-category">
                        <div className="category-heading">SUPPORT</div>
                        <ul>
                            <li><Link href="/Faq">Help & FAQ</Link></li>
                            <li><Link href="/Contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>

            </div>
            <div className="footer-botton">
                <p>&copy; <Link href="">guidefinder | All rights are reserved</Link></p>
                <div className="social">
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-linkedin-in"></i>
                    <i class="fa-brands fa-youtube"></i>
                    <i class="fa-brands fa-x-twitter"></i>
                </div>
            </div>
        </footer>
    )
}