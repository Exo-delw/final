import styles from "./Footer.module.css";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import Link from "next/link";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

       
        <div className={styles.formBox}>
          <p className={styles.feedback}>FEEDBACK</p>
          <h2>
            Have any questions?<br />Contact us
          </h2>

          <form>
            <input type="text" placeholder="FULL NAME" />
            <input type="text" placeholder="PHONE NUMBER" />
            <input type="email" placeholder="YOUR EMAIL" />
            <textarea placeholder="YOUR MESSAGE" />
            <button type="submit">Send message</button>
          </form>

          <p className={styles.privacy}>Privacy</p>
        </div>

        
        <div className={styles.rightGroup}>
          <div className={styles.middleColumn}>
            <div className={styles.services}>
              <h4>SERVICES</h4>
              <ul>
                <li><Link href="/services/outsourcing">Outsourcing</Link></li>
                <li><Link href="/services/marketingandcommunication">Marketing and Communication</Link></li>
                <li><Link href="/services/technology">Technology solutions</Link></li>
                <li><Link href="/services/academy">Academy</Link></li>
                <li><Link href="/services/investment">Investment, Business and Social Affairs Consultancy</Link></li>
                <li><Link href="/services/startupincubation">Startup Incubation</Link></li>
                <li><Link href="/services/eventmanagement">Event Management</Link> </li>
              </ul>
            </div>

            <div className={styles.info}>
              <h4>CONTACT US</h4>
              <p>+251-979-103-145 / +251-937-625-078</p>
              <p>info@stenartrading.com</p>
              <p>Addis Ababa, Ethiopia</p>

              <div className={styles.socials}>
  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
    <FaFacebookF />
  </a>
  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
    <FaInstagram />
  </a>
  <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
    <FaYoutube />
  </a>
  <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
    <FaTwitter />
  </a>
</div>

            </div>
          </div>

          <div className={styles.logoBox}>
            <div className={styles.logo}>
              <Image
                src="/whitelogo.png"
                alt="Stenar Trading Logo"
                width={140}
                height={140}
              />
            </div>
          </div>
        </div>

      </div>

      <div className={styles.copyright}>
        Copyright © 2025 Stenar Trading. All rights reserved.
      </div>
    </footer>
  );
}

