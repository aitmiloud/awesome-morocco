import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../styles/Navbar.module.scss";
import useGithubRepoStarsCount from "../../hooks/github-stars";

const Navbar = () => {
  const router = useRouter();
  const count = useGithubRepoStarsCount('DevC-Casa/awesome-morocco')

  return (
    <div className={styles.navbar}>

      <div className={styles.leftCentent}>
        <div className={styles.logo}>
            <Link href="/">
              <img src="/site-icon.svg" alt="Awesome Morocco" />
            </Link>
        </div>
        <ul className={styles.mianMenu}>
            <li title="Open Source">
              <Link href="/" legacyBehavior>
                <a className={router.route == "/" ? styles.active : null}>
                  Open Source
                </a>
              </Link>
            </li>
            <li title="Blogs">
              <Link href="/blogs" legacyBehavior>
                <a className={router.route == "/blogs" ? styles.active : null}>
                  Blogs
                </a>
              </Link>
            </li>
            {/* <li title="Communities">
              <Link href="/communities" legacyBehavior>
                <a
                  className={
                    router.route == "/communities" ? styles.active : null
                  }
                >
                  Communities
                </a>
              </Link>
            </li> */}
            <li title="Podcasts">
              <Link href="/podcasts" legacyBehavior>
                <a className={router.route == "/podcasts" ? styles.active : null}>
                  Podcasts
                </a>
              </Link>
            </li>
            <li title="Mentors">
              <Link href="/mentors" legacyBehavior>
                <a className={router.route == "/mentors" ? styles.active : null}>
                  Mentors
                </a>
              </Link>
            </li>
        </ul>
      </div>

      <div className={styles.rightContent}>
        <div className={styles.searchForm}>
          <div className={styles.inputField}>
            <input
              type="search"
              placeholder="Searching for something?"
              autoComplete="off"
            />
            <button>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.0582 9.64436L10.3243 9.82126L10.7279 10.065C11.8541 8.75184 12.436 6.96032 12.1169 5.05624C11.6758 2.44869 9.49841 0.366395 6.87055 0.0474853C2.90061 -0.440259 -0.440517 2.89891 0.0475131 6.86652C0.36661 9.49284 2.45012 11.6689 5.05921 12.1098C6.9644 12.4287 8.75698 11.8471 10.0709 10.7216L9.71159 10.3808L9.37826 10.9842L14.313 15.7116C14.6978 16.0961 15.3266 16.0961 15.7114 15.7116C16.0962 15.327 16.0962 14.6986 15.7114 14.314L11.0582 9.64436ZM6.10097 10.3183C3.76405 10.3183 1.87763 8.43293 1.87763 6.09739C1.87763 3.76184 3.76405 1.87653 6.10097 1.87653C8.43788 1.87653 10.3243 3.76184 10.3243 6.09739C10.3243 8.43293 8.43788 10.3183 6.10097 10.3183Z"
                  fill="#6B7280"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className={styles.contribution}>
          <div className={styles.stars}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xlink="http://www.w3.org/1999/xlink"
            >
              <rect width="16" height="16" fill="url(#pattern0)" />
              <defs>
                <pattern
                  id="pattern0"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use href="#image0_672_628" transform="scale(0.00195312)" />
                </pattern>
                <image
                  id="image0_672_628"
                  width="512"
                  height="512"
                  href="data:image/png;base64,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"
                />
              </defs>
            </svg>
            <span className={styles.count}>{ count }</span> <span>stars</span>
          </div>
          <Link href="https://github.com/DevC-Casa/awesome-morocco" className={styles.contributeLink} >Contribute</Link>
        </div>
      </div>

    </div>
  );
};

export default Navbar;
