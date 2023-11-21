import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import styles from '@/styles/Security.module.css'

export default function Terms() {


    return (
        <>
            <Navbar staticNav={true} />
            <div className={styles.Container}>
                <div class={styles.dedicated_team}>
                    <p class={styles.small_txt}>GUIDEFINDER</p>
                    <h5 class={styles.bg_txt} id="agileTxt">TERMS & CONDITIONS</h5>
                    <p class={styles.dedicated_right_para}>You're only a few clicks away from your next unique adventure with like-minded travel buddies.</p>
                </div>
                <h2 className={styles.h2} style={{ color: "black", marginBottom: "2rem" }}>Last Updated: [12/12/2023]</h2>

                <h2 className={styles.h2}>1. Introduction</h2>
                <p className={styles.p}>Welcome to [Your Guide Tracking Website] ("we," "us," or "our"). This Privacy Policy explains how we collect,
                    use, disclose, and protect your personal information when you use our website and services.</p>

                <h2 className={styles.h2}>2. Information We Collect</h2>

                <h3 className={styles.h3}>2.1 Personal Information:</h3>
                <p className={styles.p}>We may collect personal information such as your name, email address, and contact details when you register
                    for an account or use our services.</p>

                <h3 className={styles.h3}>2.2 Usage Data:</h3>
                <p className={styles.p}>We may collect information about your interactions with our website, including pages visited, features used,
                    and other usage data.</p>

                <h3 className={styles.h3}>2.3 Location Data:</h3>
                <p className={styles.p}>With your consent, we may collect and process information about your approximate location based on IP address
                    or more precise location data if you enable location services.</p>

                <h2 className={styles.h2}>3. How We Use Your Information</h2>

                <h3 className={styles.h3}>3.1 Providing Services:</h3>
                <p className={styles.p}>We use your personal information to provide and improve our services, including tracking and displaying guide
                    information.</p>

                <h3 className={styles.h3}>3.2 Communication:</h3>
                <p className={styles.p}>We may use your contact details to communicate with you about our services, updates, and relevant
                    information.</p>

                <h3 className={styles.h3}>3.3 Analytics:</h3>
                <p className={styles.p}>We may use analytics tools to analyze user behavior and improve our website's performance and user
                    experience.</p>

                <h2 className={styles.h2}>4. Sharing Your Information</h2>

                <h3 className={styles.h3}>4.1 Third-Party Service Providers:</h3>
                <p className={styles.p}>We may share your information with third-party service providers that help us deliver our services (e.g.,
                    hosting providers, analytics services).</p>

                <h3 className={styles.h3}>4.2 Legal Compliance:</h3>
                <p className={styles.p}>We may disclose your information if required by law or in response to legal requests.</p>

                <h2 className={styles.h2}>5. Your Choices</h2>

                <h3 className={styles.h3}>5.1 Account Information:</h3>
                <p className={styles.p}>You can review and update your account information by logging into your account settings.</p>

                <h3 className={styles.h3}>5.2 Communication Preferences:</h3>
                <p className={styles.p}>You can choose to opt-out of receiving promotional emails by following the instructions in those
                    emails.</p>

                <h2 className={styles.h2}>6. Security</h2>
                <p className={styles.p}>We take reasonable measures to protect your personal information from unauthorized access or
                    disclosure.</p>

                <h2 className={styles.h2}>7. Changes to This Privacy Policy</h2>
                <p className={styles.p}>We may update this Privacy Policy to reflect changes in our practices. We will notify you of any material
                    changes by posting the new Privacy Policy on this page.</p>

                <h2 className={styles.h2}>8. Contact Us</h2>
                <p className={styles.p}>If you have any questions or concerns about this Privacy Policy, please contact us at <a className={styles.a} href="mailto:contact@email.com">contact@email.com</a>.</p>
            </div>
            <hr />
            <Footer />
        </>
    )
}