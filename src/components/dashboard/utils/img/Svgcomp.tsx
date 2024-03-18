import React from "react";

function Svgcomp({ type, fill }: { type: string; fill: string }) {
  if (type == "Profile") {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill={`${fill}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1138_4844)">
          <path
            d="M8 7.99997C8.79113 7.99997 9.56449 7.76538 10.2223 7.32585C10.8801 6.88632 11.3928 6.26161 11.6955 5.53071C11.9983 4.7998 12.0775 3.99553 11.9231 3.21961C11.7688 2.44369 11.3878 1.73095 10.8284 1.17154C10.269 0.612134 9.55629 0.231171 8.78036 0.0768302C8.00444 -0.0775107 7.20017 0.00170263 6.46927 0.304453C5.73836 0.607204 5.11365 1.11989 4.67412 1.77769C4.2346 2.43549 4 3.20885 4 3.99997C4.00106 5.06051 4.42283 6.07731 5.17274 6.82723C5.92266 7.57715 6.93946 7.99891 8 7.99997ZM8 1.3333C8.52742 1.3333 9.04299 1.4897 9.48152 1.78272C9.92005 2.07574 10.2618 2.49221 10.4637 2.97948C10.6655 3.46675 10.7183 4.00293 10.6154 4.52021C10.5125 5.0375 10.2586 5.51265 9.88562 5.88559C9.51268 6.25853 9.03752 6.51251 8.52024 6.6154C8.00296 6.71829 7.46678 6.66548 6.97951 6.46365C6.49224 6.26182 6.07577 5.92002 5.78275 5.48149C5.48973 5.04296 5.33333 4.52739 5.33333 3.99997C5.33333 3.29273 5.61428 2.61445 6.11438 2.11435C6.61448 1.61426 7.29276 1.3333 8 1.3333Z"
            fill={`${fill}`}
            style={{ transition: "all 0.3s ease-in-out" }}
          />
          <path
            d="M8 9.33374C6.40924 9.3355 4.88414 9.96821 3.75931 11.093C2.63447 12.2179 2.00176 13.743 2 15.3337C2 15.5106 2.07024 15.6801 2.19526 15.8051C2.32029 15.9302 2.48986 16.0004 2.66667 16.0004C2.84348 16.0004 3.01305 15.9302 3.13807 15.8051C3.2631 15.6801 3.33333 15.5106 3.33333 15.3337C3.33333 14.0961 3.825 12.9091 4.70017 12.0339C5.57534 11.1587 6.76232 10.6671 8 10.6671C9.23768 10.6671 10.4247 11.1587 11.2998 12.0339C12.175 12.9091 12.6667 14.0961 12.6667 15.3337C12.6667 15.5106 12.7369 15.6801 12.8619 15.8051C12.987 15.9302 13.1565 16.0004 13.3333 16.0004C13.5101 16.0004 13.6797 15.9302 13.8047 15.8051C13.9298 15.6801 14 15.5106 14 15.3337C13.9982 13.743 13.3655 12.2179 12.2407 11.093C11.1159 9.96821 9.59076 9.3355 8 9.33374Z"
            fill={`${fill}`}
            style={{ transition: "all 0.3s ease-in-out" }}
          />
        </g>
        <defs>
          <clipPath id="clip0_1138_4844">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  } else if (type == "Order History") {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill={`${fill}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1139_5092)">
          <path
            d="M14 8H12C11.6464 8 11.3072 8.14048 11.0572 8.39052C10.8071 8.64057 10.6667 8.97971 10.6667 9.33333C10.6667 9.68696 10.5262 10.0261 10.2761 10.2761C10.0261 10.5262 9.68696 10.6667 9.33333 10.6667H6.66667C6.31305 10.6667 5.97391 10.5262 5.72386 10.2761C5.47381 10.0261 5.33333 9.68696 5.33333 9.33333C5.33333 8.97971 5.19286 8.64057 4.94281 8.39052C4.69276 8.14048 4.35362 8 4 8H2C1.46957 8 0.960859 8.21071 0.585786 8.58579C0.210714 8.96086 0 9.46957 0 10L0 12.6667C0.00105857 13.5504 0.352588 14.3976 0.97748 15.0225C1.60237 15.6474 2.4496 15.9989 3.33333 16H12.6667C13.5504 15.9989 14.3976 15.6474 15.0225 15.0225C15.6474 14.3976 15.9989 13.5504 16 12.6667V10C16 9.46957 15.7893 8.96086 15.4142 8.58579C15.0391 8.21071 14.5304 8 14 8ZM14.6667 12.6667C14.6667 13.1971 14.456 13.7058 14.0809 14.0809C13.7058 14.456 13.1971 14.6667 12.6667 14.6667H3.33333C2.8029 14.6667 2.29419 14.456 1.91912 14.0809C1.54405 13.7058 1.33333 13.1971 1.33333 12.6667V10C1.33333 9.82319 1.40357 9.65362 1.5286 9.5286C1.65362 9.40357 1.82319 9.33333 2 9.33333H4C4 10.0406 4.28095 10.7189 4.78105 11.219C5.28115 11.719 5.95942 12 6.66667 12H9.33333C10.0406 12 10.7189 11.719 11.219 11.219C11.719 10.7189 12 10.0406 12 9.33333H14C14.1768 9.33333 14.3464 9.40357 14.4714 9.5286C14.5964 9.65362 14.6667 9.82319 14.6667 10V12.6667Z"
            fill={`${fill}`}
            style={{ transition: "all 0.3s ease-in-out" }}
          />
          <path
            d="M2.00016 6.66646H14.0002C14.177 6.66646 14.3465 6.59622 14.4716 6.4712C14.5966 6.34617 14.6668 6.17661 14.6668 5.9998C14.6668 5.82298 14.5966 5.65342 14.4716 5.52839C14.3465 5.40337 14.177 5.33313 14.0002 5.33313H2.00016C1.82335 5.33313 1.65378 5.40337 1.52876 5.52839C1.40373 5.65342 1.3335 5.82298 1.3335 5.9998C1.3335 6.17661 1.40373 6.34617 1.52876 6.4712C1.65378 6.59622 1.82335 6.66646 2.00016 6.66646Z"
            fill={`${fill}`}
            style={{ transition: "all 0.3s ease-in-out" }}
          />
          <path
            d="M2.00016 4.0002H14.0002C14.177 4.0002 14.3465 3.92996 14.4716 3.80494C14.5966 3.67991 14.6668 3.51035 14.6668 3.33354C14.6668 3.15672 14.5966 2.98716 14.4716 2.86213C14.3465 2.73711 14.177 2.66687 14.0002 2.66687H2.00016C1.82335 2.66687 1.65378 2.73711 1.52876 2.86213C1.40373 2.98716 1.3335 3.15672 1.3335 3.33354C1.3335 3.51035 1.40373 3.67991 1.52876 3.80494C1.65378 3.92996 1.82335 4.0002 2.00016 4.0002Z"
            fill={`${fill}`}
            style={{ transition: "all 0.3s ease-in-out" }}
          />
        </g>
        <defs>
          <clipPath id="clip0_1139_5092">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  } else if (type == "Downloads") {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill={`${fill}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1139_5101)">
          <path
            d="M6.58565 12.0813C6.77138 12.2672 6.99192 12.4146 7.23465 12.5152C7.47738 12.6158 7.73756 12.6676 8.00031 12.6676C8.26306 12.6676 8.52324 12.6158 8.76598 12.5152C9.00871 12.4146 9.22925 12.2672 9.41498 12.0813L11.5556 9.94067C11.6704 9.81373 11.732 9.64752 11.7276 9.47644C11.7232 9.30536 11.6532 9.14253 11.532 9.02165C11.4109 8.90077 11.2479 8.8311 11.0768 8.82707C10.9058 8.82304 10.7397 8.88496 10.613 9L8.66231 10.9513L8.66698 0.666667C8.66698 0.489856 8.59674 0.320286 8.47172 0.195262C8.34669 0.0702379 8.17712 0 8.00031 0V0C7.8235 0 7.65393 0.0702379 7.52891 0.195262C7.40388 0.320286 7.33365 0.489856 7.33365 0.666667L7.32765 10.9387L5.38765 9C5.26255 8.875 5.09292 8.8048 4.91608 8.80486C4.73923 8.80493 4.56965 8.87524 4.44465 9.00033C4.31964 9.12543 4.24945 9.29506 4.24951 9.4719C4.24957 9.64875 4.31989 9.81833 4.44498 9.94333L6.58565 12.0813Z"
            fill={`${fill}`}
            style={{ transition: "all 0.3s ease-in-out" }}
          />
          <path
            d="M15.3333 10.6666C15.1565 10.6666 14.987 10.7368 14.8619 10.8618C14.7369 10.9869 14.6667 11.1564 14.6667 11.3332V13.9999C14.6667 14.1767 14.5964 14.3463 14.4714 14.4713C14.3464 14.5963 14.1768 14.6666 14 14.6666H2C1.82319 14.6666 1.65362 14.5963 1.5286 14.4713C1.40357 14.3463 1.33333 14.1767 1.33333 13.9999V11.3332C1.33333 11.1564 1.2631 10.9869 1.13807 10.8618C1.01305 10.7368 0.843478 10.6666 0.666667 10.6666C0.489856 10.6666 0.320286 10.7368 0.195262 10.8618C0.0702379 10.9869 0 11.1564 0 11.3332L0 13.9999C0 14.5303 0.210714 15.039 0.585786 15.4141C0.960859 15.7892 1.46957 15.9999 2 15.9999H14C14.5304 15.9999 15.0391 15.7892 15.4142 15.4141C15.7893 15.039 16 14.5303 16 13.9999V11.3332C16 11.1564 15.9298 10.9869 15.8047 10.8618C15.6797 10.7368 15.5101 10.6666 15.3333 10.6666Z"
            fill={`${fill}`}
            style={{ transition: "all 0.3s ease-in-out" }}
          />
        </g>
        <defs>
          <clipPath id="clip0_1139_5101">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  } else if (type == "Support") {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill={`${fill}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.9998 8.28246V7.33313C13.9998 5.74183 13.3677 4.21571 12.2424 3.09049C11.1172 1.96527 9.5911 1.33313 7.9998 1.33313C6.40851 1.33313 4.88238 1.96527 3.75716 3.09049C2.63195 4.21571 1.9998 5.74183 1.9998 7.33313V8.28246C1.30058 8.59035 0.728338 9.1291 0.378885 9.80851C0.0294327 10.4879 -0.0760217 11.2668 0.080176 12.0146C0.236374 12.7625 0.644743 13.434 1.23692 13.9168C1.82909 14.3995 2.56913 14.6642 3.33314 14.6665C3.68676 14.6665 4.0259 14.526 4.27595 14.2759C4.526 14.0259 4.66647 13.6868 4.66647 13.3331V9.33313C4.66647 8.97951 4.526 8.64037 4.27595 8.39032C4.0259 8.14027 3.68676 7.9998 3.33314 7.9998V7.33313C3.33314 6.09545 3.8248 4.90847 4.69997 4.0333C5.57514 3.15813 6.76213 2.66646 7.9998 2.66646C9.23748 2.66646 10.4245 3.15813 11.2996 4.0333C12.1748 4.90847 12.6665 6.09545 12.6665 7.33313V7.9998C12.3128 7.9998 11.9737 8.14027 11.7237 8.39032C11.4736 8.64037 11.3331 8.97951 11.3331 9.33313V13.3331H9.33314C9.15633 13.3331 8.98676 13.4034 8.86173 13.5284C8.73671 13.6534 8.66647 13.823 8.66647 13.9998C8.66647 14.1766 8.73671 14.3462 8.86173 14.4712C8.98676 14.5962 9.15633 14.6665 9.33314 14.6665H12.6665C13.4305 14.6642 14.1705 14.3995 14.7627 13.9168C15.3549 13.434 15.7632 12.7625 15.9194 12.0146C16.0756 11.2668 15.9702 10.4879 15.6207 9.80851C15.2713 9.1291 14.699 8.59035 13.9998 8.28246ZM3.33314 13.3331C2.8027 13.3331 2.294 13.1224 1.91892 12.7473C1.54385 12.3723 1.33314 11.8636 1.33314 11.3331C1.33314 10.8027 1.54385 10.294 1.91892 9.91892C2.294 9.54384 2.8027 9.33313 3.33314 9.33313V13.3331ZM12.6665 13.3331V9.33313C13.1969 9.33313 13.7056 9.54384 14.0807 9.91892C14.4558 10.294 14.6665 10.8027 14.6665 11.3331C14.6665 11.8636 14.4558 12.3723 14.0807 12.7473C13.7056 13.1224 13.1969 13.3331 12.6665 13.3331Z"
          fill={`${fill}`}
          style={{ transition: "all 0.3s ease-in-out" }}
        />
      </svg>
    );
  } else if (type == "FAQ") {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill={`${fill}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1139_5123)">
          <path
            d="M9.00004 4.33326C9.00004 4.59848 8.89468 4.85283 8.70714 5.04037C8.51961 5.2279 8.26525 5.33326 8.00004 5.33326C7.73482 5.33326 7.48047 5.2279 7.29293 5.04037C7.10539 4.85283 7.00004 4.59848 7.00004 4.33326C7.00004 4.06804 7.10539 3.81369 7.29293 3.62615C7.48047 3.43862 7.73482 3.33326 8.00004 3.33326C8.26525 3.33326 8.51961 3.43862 8.70714 3.62615C8.89468 3.81369 9.00004 4.06804 9.00004 4.33326ZM16 12.6666V8.22659C16.0249 6.17156 15.2714 4.18319 13.8909 2.66071C12.5104 1.13823 10.605 0.194352 8.55737 0.0185934C7.41447 -0.0613682 6.26773 0.105086 5.19473 0.506695C4.12173 0.908304 3.14751 1.5357 2.33798 2.34643C1.52845 3.15715 0.902503 4.1323 0.502485 5.2059C0.102468 6.27949 -0.0622869 7.42648 0.0193688 8.56926C0.314036 12.8053 4.0547 15.9999 8.72204 15.9999H12.6667C13.5504 15.9989 14.3977 15.6473 15.0226 15.0224C15.6475 14.3976 15.999 13.5503 16 12.6666ZM8.4667 1.34926C10.1777 1.50062 11.768 2.29387 12.9181 3.56963C14.0682 4.84539 14.6929 6.50914 14.6667 8.22659V12.6666C14.6667 13.197 14.456 13.7057 14.0809 14.0808C13.7058 14.4559 13.1971 14.6666 12.6667 14.6666H8.72204C4.69937 14.6666 1.60004 12.0666 1.35004 8.47726C1.2844 7.56298 1.40802 6.64499 1.71316 5.78064C2.0183 4.91629 2.4984 4.12415 3.12348 3.45371C3.74856 2.78327 4.50519 2.24894 5.34608 1.88409C6.18698 1.51925 7.09407 1.33173 8.0107 1.33326C8.16204 1.33326 8.3147 1.33926 8.4667 1.34926ZM9.33337 11.9999V7.99993C9.33337 7.64631 9.19289 7.30717 8.94285 7.05712C8.6928 6.80707 8.35366 6.66659 8.00004 6.66659H7.33337C7.15656 6.66659 6.98699 6.73683 6.86197 6.86186C6.73694 6.98688 6.6667 7.15645 6.6667 7.33326C6.6667 7.51007 6.73694 7.67964 6.86197 7.80467C6.98699 7.92969 7.15656 7.99993 7.33337 7.99993H8.00004V11.9999C8.00004 12.1767 8.07027 12.3463 8.1953 12.4713C8.32032 12.5964 8.48989 12.6666 8.6667 12.6666C8.84351 12.6666 9.01308 12.5964 9.13811 12.4713C9.26313 12.3463 9.33337 12.1767 9.33337 11.9999Z"
            fill={`${fill}`}
            style={{ transition: "all 0.3s ease-in-out" }}
          />
        </g>
        <defs>
          <clipPath id="clip0_1139_5123">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
}

export default Svgcomp;