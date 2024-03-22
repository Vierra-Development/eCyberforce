"use client";

import { Archivo } from "next/font/google";
import styles from "./Modal.module.css";
import { motion } from "framer-motion";
import Image from "next/image";
import Product from "./img/Product.png";
import { useState, CSSProperties } from "react";
import useModalStore from "./Store";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

function Modal({ debug }: { debug: any }) {
  const { opened, openModal, closeModal } = useModalStore();
  const container = {
    open: { opacity: 1 },
    close: { opacity: 0 },
  };
  const modal = {
    open: { x: 0 },
    close: { x: 400 },
  };
  const noShow = {
    pointerEvents: opened
      ? ("auto" as CSSProperties["pointerEvents"])
      : ("none" as CSSProperties["pointerEvents"]),
  };
  return (
    <motion.div
      className={styles.Container}
      variants={container}
      animate={opened ? "open" : "close"}
      initial={{ opacity: 0 }}
      style={noShow}
    >
      <motion.div
        className={styles.Modal}
        variants={modal}
        animate={opened ? "open" : "close"}
        initial={{ x: 200 }}
      >
        <div className={styles.ModalTitle}>
          <div>
            <p className={archivo.className}>Order Details {debug}</p>
          </div>
          <div className={styles.Close} onClick={closeModal}>
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1157_3507)">
                <path
                  d="M15.9999 8.50031C15.8124 8.31284 15.5581 8.20752 15.2929 8.20752C15.0278 8.20752 14.7735 8.31284 14.5859 8.50031L11.9999 11.0863L9.41395 8.50031C9.22534 8.31815 8.97274 8.21735 8.71055 8.21963C8.44835 8.22191 8.19754 8.32708 8.01213 8.51249C7.82672 8.6979 7.72155 8.94871 7.71928 9.2109C7.717 9.4731 7.81779 9.7257 7.99995 9.91431L10.5859 12.5003L7.99995 15.0863C7.81779 15.2749 7.717 15.5275 7.71928 15.7897C7.72155 16.0519 7.82672 16.3027 8.01213 16.4881C8.19754 16.6735 8.44835 16.7787 8.71055 16.781C8.97274 16.7833 9.22534 16.6825 9.41395 16.5003L11.9999 13.9143L14.5859 16.5003C14.7745 16.6825 15.0271 16.7833 15.2893 16.781C15.5515 16.7787 15.8023 16.6735 15.9878 16.4881C16.1732 16.3027 16.2783 16.0519 16.2806 15.7897C16.2829 15.5275 16.1821 15.2749 15.9999 15.0863L13.4139 12.5003L15.9999 9.91431C16.1874 9.72678 16.2927 9.47247 16.2927 9.20731C16.2927 8.94214 16.1874 8.68783 15.9999 8.50031Z"
                  fill="#888E9C"
                />
                <path
                  d="M12 0.5C9.62663 0.5 7.30655 1.20379 5.33316 2.52236C3.35977 3.84094 1.8217 5.71509 0.913451 7.9078C0.00519943 10.1005 -0.232441 12.5133 0.230582 14.8411C0.693605 17.1689 1.83649 19.3071 3.51472 20.9853C5.19295 22.6635 7.33115 23.8064 9.65892 24.2694C11.9867 24.7324 14.3995 24.4948 16.5922 23.5866C18.7849 22.6783 20.6591 21.1402 21.9776 19.1668C23.2962 17.1935 24 14.8734 24 12.5C23.9966 9.31846 22.7312 6.26821 20.4815 4.01852C18.2318 1.76883 15.1815 0.503441 12 0.5V0.5ZM12 22.5C10.0222 22.5 8.08879 21.9135 6.4443 20.8147C4.79981 19.7159 3.51809 18.1541 2.76121 16.3268C2.00433 14.4996 1.8063 12.4889 2.19215 10.5491C2.578 8.60929 3.53041 6.82746 4.92894 5.42893C6.32746 4.03041 8.10929 3.078 10.0491 2.69215C11.9889 2.3063 13.9996 2.50433 15.8268 3.2612C17.6541 4.01808 19.2159 5.29981 20.3147 6.9443C21.4135 8.58879 22 10.5222 22 12.5C21.9971 15.1513 20.9426 17.6931 19.0679 19.5679C17.1931 21.4426 14.6513 22.4971 12 22.5Z"
                  fill="#EAE9F7"
                />
              </g>
              <defs>
                <clipPath id="clip0_1157_3507">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <div className={styles.Product}>
          <div className={styles.ProductImage}>
            <Image src={Product} alt={""} />
          </div>
          <div className={styles.ProductNameContainer}>
            <div className={styles.ProductName}>MacroProbe v1.3</div>
            <div className={styles.ProductContext}>
              Software Supports on Windows 11, 10 and 8.
            </div>
          </div>
        </div>
        <div className={styles.ProductInfo}>
          <div className={styles.ProductContent}>
            <div className={styles.ContentTitle}>Product</div>
            <div className={styles.ContentContext}>MACROPROBEML v1.3</div>
          </div>
          <div className={styles.ProductContent}>
            <div className={styles.ContentTitle}>Order Number</div>
            <div className={styles.ContentContext}>#1145653</div>
          </div>
          <div className={styles.ProductContent}>
            <div className={styles.ContentTitle}>Date</div>
            <div className={styles.ContentContext}>December 1,2023</div>
          </div>
          <div className={styles.ProductContent}>
            <div className={styles.ContentTitle}>Email</div>
            <div className={styles.ContentContext}>Somebody@gmail.com</div>
          </div>
          <div className={styles.ProductContent}>
            <div className={styles.ContentTitle}>Payment Method</div>
            <div className={styles.ContentContext}>Mastercard 1062</div>
          </div>
          <div className={styles.ProductContent}>
            <div className={styles.ContentTitle}>Total Paid</div>
            <div className={styles.ContentContext}>$1500</div>
          </div>
        </div>
        <div className={styles.Billing}>
          <div className={styles.BillingTitle}>Billing Information</div>
          <div className={styles.ProductContent}>
            <div className={styles.ContentTitle}>Name</div>
            <div className={styles.ContentContext}>John Doe</div>
          </div>
          <div className={styles.ProductContent}>
            <div className={styles.ContentTitle}>Address</div>
            <div className={styles.ContentContext}>
              New York, 4 Street, United States
            </div>
          </div>
          <div className={styles.ProductContent}>
            <div className={styles.ContentTitle}>Contact #</div>
            <div className={styles.ContentContext}>1+ (244) 222-4546</div>
          </div>
          <div className={styles.ProductContent}>
            <div className={styles.ContentTitle}>Email</div>
            <div className={styles.ContentContext}>Somebody@gmail.com</div>
          </div>
        </div>
        <div className={styles.Buttons}>
          <button className={styles.Help}>Help</button>
          <button className={styles.Track}>Track Order</button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Modal;
