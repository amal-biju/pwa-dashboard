import React from "react";
import "../Styles/SideBar.css";

const SideBar = () => {
   return (
      <div className="sidebar">
         <div className="logo">
            <svg width="42" height="41" viewBox="0 0 42 41" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path
                  d="M27.8843 0.886257C28.183 1.35559 28.439 1.99559 28.6523 2.80626C28.9083 3.57426 29.0363 4.38492 29.0363 5.23825C29.0363 6.90226 28.6737 8.09692 27.9483 8.82226C27.2657 9.50492 26.327 9.84626 25.1323 9.84626H11.6923V17.0783H25.7083C26.0497 17.5476 26.327 18.1663 26.5403 18.9343C26.7963 19.7023 26.9243 20.5129 26.9243 21.3663C26.9243 22.9876 26.5617 24.1609 25.8363 24.8863C25.1537 25.5689 24.215 25.9103 23.0203 25.9103H11.8203V39.4143C11.351 39.5423 10.6043 39.6703 9.58033 39.7983C8.59899 39.9263 7.61766 39.9903 6.63633 39.9903C5.65499 39.9903 4.78033 39.9049 4.01233 39.7343C3.28699 39.6063 2.66833 39.3503 2.15633 38.9663C1.64433 38.5823 1.26033 38.0489 1.00433 37.3663C0.748327 36.6836 0.620327 35.7876 0.620327 34.6783V6.83826C0.620327 5.00359 1.15366 3.55292 2.22033 2.48626C3.28699 1.41959 4.73766 0.886257 6.57233 0.886257H27.8843ZM29.3058 34.4863C29.3058 32.6943 29.8605 31.2009 30.9698 30.0063C32.0792 28.8116 33.5938 28.2143 35.5138 28.2143C37.4338 28.2143 38.9485 28.8116 40.0578 30.0063C41.1672 31.2009 41.7218 32.6943 41.7218 34.4863C41.7218 36.2783 41.1672 37.7716 40.0578 38.9663C38.9485 40.1609 37.4338 40.7583 35.5138 40.7583C33.5938 40.7583 32.0792 40.1609 30.9698 38.9663C29.8605 37.7716 29.3058 36.2783 29.3058 34.4863Z"
                  fill="white"
               />
            </svg>
         </div>
         <div className="menu">
            <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path
                  d="M25.6399 11.3087C25.6394 11.3082 25.6388 11.3076 25.6382 11.307L15.0322 0.701416C14.5802 0.249146 13.9791 0 13.3398 0C12.7005 0 12.0994 0.248947 11.6471 0.701218L1.04675 11.3014C1.04318 11.305 1.03961 11.3087 1.03604 11.3123C0.107693 12.246 0.10928 13.7609 1.0406 14.6922C1.46609 15.1179 2.02806 15.3645 2.6289 15.3903C2.6533 15.3927 2.6779 15.3939 2.70269 15.3939H3.12541V23.1989C3.12541 24.7434 4.38205 26 5.92691 26H10.0763C10.4968 26 10.838 25.659 10.838 25.2383V19.1191C10.838 18.4144 11.4113 17.8411 12.1161 17.8411H14.5635C15.2683 17.8411 15.8415 18.4144 15.8415 19.1191V25.2383C15.8415 25.659 16.1825 26 16.6033 26H20.7527C22.2975 26 23.5541 24.7434 23.5541 23.1989V15.3939H23.9461C24.5852 15.3939 25.1863 15.1449 25.6388 14.6926C26.5711 13.7597 26.5715 12.2422 25.6399 11.3087Z"
                  fill="white"
               />
            </svg>
            <svg width="29" height="23" viewBox="0 0 29 23" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path
                  d="M26.5611 14.2815V6.80342L26.8716 6.71027C28.0649 6.35212 28.3154 5.74576 28.3154 5.30014C28.3154 4.85452 28.0648 4.24817 26.8715 3.89018L16.6597 0.826582C16.0307 0.637895 15.2064 0.533997 14.3387 0.533997C13.471 0.533997 12.6468 0.637895 12.0177 0.826582L1.80585 3.89018C0.612362 4.24817 0.361816 4.85452 0.361816 5.3002C0.361816 5.74582 0.612307 6.35223 1.8058 6.71033L5.62501 7.8561V14.0298C5.62501 14.7964 6.12332 15.8763 8.49725 16.6676C10.0696 17.1917 12.1442 17.4804 14.3386 17.4804C16.533 17.4804 18.6076 17.1917 20.18 16.6676C22.5539 15.8762 23.0522 14.7964 23.0522 14.0298V7.85615L24.9232 7.29484V14.2815C23.9047 14.6245 23.1688 15.5878 23.1688 16.7205V20.2292C23.1688 21.6482 24.3231 22.8026 25.7421 22.8026C27.161 22.8026 28.3154 21.6482 28.3154 20.2292V16.7205C28.3155 15.5878 27.5796 14.6244 26.5611 14.2815ZM12.4883 2.39542C12.9619 2.25331 13.6363 2.17185 14.3387 2.17185C15.041 2.17185 15.7155 2.25331 16.189 2.39537L25.8716 5.3002L21.9939 6.46355C21.9917 6.46426 21.9895 6.46486 21.9873 6.46557L16.1891 8.20508C15.7155 8.34714 15.0411 8.4286 14.3388 8.4286C13.6365 8.4286 12.962 8.34714 12.4884 8.20508L6.6902 6.46557C6.68796 6.46486 6.68578 6.46426 6.68354 6.46355L2.80585 5.3002L12.4883 2.39542ZM21.4144 11.8791C21.4144 14.1353 21.1171 14.6287 19.6621 15.1136C18.2523 15.5836 16.3617 15.8424 14.3387 15.8424C12.3156 15.8424 10.425 15.5836 9.01526 15.1136C7.56036 14.6287 7.26292 14.1353 7.26292 14.0297V8.34742L12.0177 9.77387C12.6467 9.96256 13.471 10.0665 14.3387 10.0665C15.2064 10.0665 16.0306 9.96256 16.6597 9.77387L21.4144 8.34742V11.8791ZM26.6776 20.2292C26.6776 20.745 26.258 21.1646 25.7422 21.1646C25.2264 21.1646 24.8068 20.745 24.8068 20.2292V16.7205C24.8068 16.2046 25.2263 15.7849 25.7422 15.7849C26.258 15.7849 26.6776 16.2046 26.6776 16.7205V20.2292Z"
                  fill="white"
               />
            </svg>
            <svg width="24" height="27" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path
                  d="M12.3396 0.0975571C8.5533 0.0975571 5.4729 3.17796 5.4729 6.96425C5.4729 10.7506 8.5533 13.8309 12.3396 13.8309C16.1259 13.8309 19.2063 10.7506 19.2063 6.96425C19.2063 3.17796 16.1259 0.0975571 12.3396 0.0975571ZM12.3396 12.305C9.3947 12.305 6.99883 9.90915 6.99883 6.96425C6.99883 4.01936 9.3947 1.62349 12.3396 1.62349C15.2845 1.62349 17.6804 4.01936 17.6804 6.96425C17.6804 9.90915 15.2845 12.305 12.3396 12.305Z"
                  fill="white"
               />
               <path
                  d="M20.8831 18.3169C19.0032 16.4081 16.511 15.3569 13.8656 15.3569H10.8137C8.16835 15.3569 5.67609 16.4081 3.79614 18.3169C1.9254 20.2164 0.895142 22.7237 0.895142 25.3772C0.895142 25.7985 1.23675 26.1401 1.65811 26.1401H23.0212C23.4425 26.1401 23.7841 25.7985 23.7841 25.3772C23.7841 22.7237 22.7539 20.2164 20.8831 18.3169ZM2.45464 24.6142C2.83689 20.2864 6.43992 16.8828 10.8137 16.8828H13.8656C18.2393 16.8828 21.8424 20.2864 22.2246 24.6142H2.45464Z"
                  fill="white"
               />
            </svg>

            <svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path
                  d="M23.3354 0.986023H2.97195C1.43573 0.986023 0.185913 2.23584 0.185913 3.77206V17.1451C0.185913 18.6813 1.43573 19.9311 2.97195 19.9311H9.53252C9.6126 19.9311 9.68874 19.9695 9.7363 20.034L12.1299 23.2791C12.3698 23.6044 12.7391 23.792 13.1432 23.7939H13.1493C13.5511 23.7939 13.9197 23.6099 14.1613 23.2885L16.6093 20.0321C16.6568 19.9688 16.7326 19.931 16.8117 19.931H23.3354C24.8716 19.931 26.1214 18.6812 26.1214 17.145V3.77201C26.1214 2.23579 24.8716 0.986023 23.3354 0.986023ZM24.6017 17.1451C24.6017 17.2647 24.5847 17.3803 24.5536 17.4901L16.7473 10.6472L24.6017 4.12898V17.1451ZM23.3354 2.50568C23.567 2.50568 23.7842 2.56849 23.9711 2.67755L13.9645 10.9818C13.4959 11.3707 12.8157 11.3707 12.3471 10.9818L2.33871 2.67608C2.52512 2.56794 2.74137 2.50568 2.97195 2.50568H23.3354ZM1.75374 17.4901C1.72259 17.3803 1.70557 17.2646 1.70557 17.1451V4.12543L9.5621 10.6453L1.75374 17.4901ZM15.3946 19.119L13.151 22.1034L10.9593 19.132C10.6266 18.6808 10.0931 18.4114 9.53247 18.4114H3.00807L10.7463 11.6281L11.3766 12.1512C11.8921 12.579 12.5238 12.7928 13.1558 12.7928C13.7876 12.7928 14.4195 12.5788 14.9349 12.1512L15.563 11.6299L23.2991 18.4114H16.8117C16.2575 18.4114 15.7277 18.6759 15.3946 19.119Z"
                  fill="white"
               />
            </svg>
            <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path
                  d="M13.9695 26.9771H12.3378C11.018 26.9771 9.94426 25.9033 9.94426 24.5836V24.0315C9.38318 23.8523 8.83804 23.626 8.31433 23.355L7.92312 23.7462C6.97559 24.6949 5.45779 24.6671 4.53778 23.7458L3.38449 22.5926C2.46286 21.672 2.43635 20.1547 3.3848 19.2073L3.77571 18.8164C3.50469 18.2926 3.27846 17.7476 3.09915 17.1864H2.54716C1.22746 17.1864 0.153687 16.1127 0.153687 14.793V13.1611C0.153687 11.8414 1.22746 10.7677 2.54721 10.7677H3.0992C3.27851 10.2065 3.50474 9.66146 3.77576 9.13775L3.38454 8.74658C2.43666 7.79972 2.46281 6.28227 3.38485 5.36125L4.53824 4.20791C5.46038 3.2845 6.97782 3.26145 7.92352 4.20821L8.31439 4.59907C8.83809 4.32811 9.38323 4.10182 9.94431 3.92252V3.37052C9.94431 2.05077 11.018 0.977051 12.3378 0.977051H13.9696C15.2893 0.977051 16.3631 2.05077 16.3631 3.37052V3.92257C16.9241 4.10182 17.4693 4.32811 17.993 4.59913L18.3842 4.20791C19.3317 3.25921 20.8495 3.28704 21.7695 4.20826L22.9228 5.3615C23.8445 6.28212 23.871 7.79941 22.9225 8.74684L22.5316 9.13775C22.8026 9.66146 23.0289 10.2065 23.2082 10.7677H23.7602C25.0799 10.7677 26.1537 11.8414 26.1537 13.1611V14.793C26.1537 16.1127 25.0799 17.1864 23.7602 17.1864H23.2082C23.0289 17.7476 22.8026 18.2926 22.5316 18.8164L22.9228 19.2076C23.8707 20.1544 23.8446 21.6719 22.9225 22.5929L21.7691 23.7462C20.847 24.6697 19.3295 24.6927 18.3839 23.7459L17.993 23.3551C17.4693 23.626 16.9241 23.8523 16.3631 24.0316V24.5837C16.3631 25.9033 15.2893 26.9771 13.9695 26.9771ZM8.569 21.7552C9.29655 22.1855 10.0796 22.5105 10.8964 22.7213C11.2327 22.8081 11.4677 23.1115 11.4677 23.4589V24.5836C11.4677 25.0633 11.8581 25.4536 12.3378 25.4536H13.9696C14.4493 25.4536 14.8397 25.0633 14.8397 24.5836V23.4589C14.8397 23.1115 15.0747 22.8081 15.4111 22.7213C16.2278 22.5105 17.0109 22.1855 17.7384 21.7552C18.0378 21.5782 18.4189 21.6263 18.6648 21.8723L19.4615 22.669C19.805 23.0129 20.3566 23.0049 20.6916 22.6693L21.8457 21.5153C22.18 21.1814 22.1911 20.6297 21.846 20.2851L21.049 19.4881C20.8031 19.2422 20.755 18.861 20.932 18.5617C21.3622 17.8342 21.6872 17.0512 21.898 16.2344C21.9849 15.898 22.2882 15.663 22.6356 15.663H23.7602C24.2399 15.663 24.6303 15.2727 24.6303 14.793V13.1612C24.6303 12.6815 24.2399 12.2912 23.7602 12.2912H22.6356C22.2882 12.2912 21.9849 12.0561 21.898 11.7198C21.6872 10.903 21.3622 10.12 20.932 9.39247C20.755 9.09316 20.8031 8.712 21.049 8.46612L21.8457 7.66941C22.1901 7.32542 22.1811 6.77393 21.846 6.43923L20.692 5.28523C20.3575 4.95028 19.8058 4.94048 19.4618 5.28493L18.6649 6.08194C18.419 6.32787 18.0377 6.37601 17.7385 6.19899C17.0109 5.76872 16.2279 5.44367 15.4111 5.23287C15.0747 5.14609 14.8397 4.84272 14.8397 4.49533V3.37052C14.8397 2.89079 14.4494 2.50049 13.9696 2.50049H12.3379C11.8582 2.50049 11.4678 2.89079 11.4678 3.37052V4.49523C11.4678 4.84262 11.2328 5.14599 10.8964 5.23277C10.0796 5.44357 9.2966 5.76862 8.56905 6.19889C8.26965 6.37586 7.88853 6.32772 7.64265 6.08184L6.846 5.28513C6.50251 4.94124 5.95087 4.94921 5.61587 5.28477L4.46176 6.43883C4.12752 6.77266 4.11635 7.3243 4.46146 7.669L5.25847 8.46602C5.50435 8.7119 5.5525 9.09306 5.37552 9.39237C4.94525 10.1199 4.62025 10.9029 4.40946 11.7197C4.32262 12.0561 4.01926 12.2911 3.67191 12.2911H2.54721C2.06748 12.2911 1.67712 12.6814 1.67712 13.1611V14.793C1.67712 15.2727 2.06748 15.663 2.54721 15.663H3.67186C4.01926 15.663 4.32257 15.898 4.40941 16.2343C4.6202 17.0511 4.94525 17.8342 5.37547 18.5617C5.55244 18.861 5.5043 19.2422 5.25842 19.488L4.46171 20.2847C4.11732 20.6287 4.1263 21.1802 4.46141 21.5149L5.61541 22.6689C5.94991 23.0039 6.5016 23.0137 6.84559 22.6692L7.64255 21.8722C7.82374 21.6911 8.20069 21.5374 8.569 21.7552Z"
                  fill="white"
               />
               <path
                  d="M13.1536 19.6341C10.0343 19.6341 7.49658 17.0963 7.49658 13.977C7.49658 10.8577 10.0343 8.32001 13.1536 8.32001C16.273 8.32001 18.8106 10.8577 18.8106 13.977C18.8106 17.0963 16.273 19.6341 13.1536 19.6341ZM13.1536 9.84345C10.8743 9.84345 9.02002 11.6978 9.02002 13.977C9.02002 16.2563 10.8743 18.1106 13.1536 18.1106C15.4329 18.1106 17.2872 16.2563 17.2872 13.977C17.2872 11.6978 15.4329 9.84345 13.1536 9.84345Z"
                  fill="white"
               />
            </svg>
         </div>
         <div className="back">
            <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path
                  d="M18.6939 20.5155V22.555C18.6939 24.8042 16.8641 26.634 14.6149 26.634H4.36628C2.11703 26.634 0.287231 24.8042 0.287231 22.555V4.60719C0.287231 2.35793 2.11703 0.528137 4.36628 0.528137H14.6149C16.8641 0.528137 18.6939 2.35793 18.6939 4.60719V6.64671C18.6939 7.20997 18.2374 7.66647 17.6742 7.66647C17.1109 7.66647 16.6544 7.20997 16.6544 6.64671V4.60719C16.6544 3.48266 15.7394 2.56766 14.6149 2.56766H4.36628C3.24175 2.56766 2.32676 3.48266 2.32676 4.60719V22.555C2.32676 23.6795 3.24175 24.5945 4.36628 24.5945H14.6149C15.7394 24.5945 16.6544 23.6795 16.6544 22.555V20.5155C16.6544 19.9522 17.1109 19.4957 17.6742 19.4957C18.2374 19.4957 18.6939 19.9522 18.6939 20.5155ZM25.6464 11.8294L23.3629 9.54586C22.9646 9.14752 22.3189 9.14752 21.9207 9.54586C21.5224 9.94401 21.5224 10.5897 21.9207 10.9879L23.545 12.6123H11.3007C10.7374 12.6123 10.2809 13.0688 10.2809 13.6321C10.2809 14.1953 10.7374 14.6518 11.3007 14.6518H23.545L21.9207 16.2763C21.5224 16.6744 21.5224 17.3202 21.9207 17.7183C22.1199 17.9175 22.3808 18.0171 22.6417 18.0171C22.9028 18.0171 23.1638 17.9175 23.3629 17.7183L25.6464 15.4348C26.6405 14.4407 26.6405 12.8234 25.6464 11.8294Z"
                  fill="white"
               />
            </svg>
         </div>
      </div>
   );
};

export default SideBar;