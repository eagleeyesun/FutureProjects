import React from 'react'

const BookCoverSvg = ({ coverColor }: props) => {
    return (
        <svg
            preserveAspectRatio="none"
            fill="none"
            width="100%"
            height="100%"
            viewBox="0 0 143 199"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0"
        >
            <path
                d="M141.851 196.481H140.652V174.61C141.39 173.885 141.851 172.876 141.851 171.763V4.26316C141.851 2.07107 140.068 0.277516 137.889 0.277516H16.7824C16.7824 0.277516 3.06348 -0.381156 0 11.5424V183.921C0 199.797 9.59001 198.993 9.59001 198.993H141.851C142.497 198.886 142.991 198.655 143 197.938C143.018 196.582 141.851 196.481 141.851 196.481Z"
                fill="#CAD7DB"
            />
            <path
                d="M141.851 196.481H140.652V194.036H4.79924C2.20563 190.492 2.50324 184.366 2.50324 184.366C2.76966 174.251 16.7824 175.749 16.7824 175.749H137.888C138.961 175.749 139.937 175.313 140.652 174.61C141.39 173.885 141.851 172.876 141.851 171.763V4.26316C141.851 2.07107 140.068 0.277516 137.888 0.277516H16.7824C16.7824 0.277516 3.06348 -0.381156 0 11.5424V183.921C0 199.797 9.59001 198.993 9.59001 198.993H141.851C142.497 198.886 142.991 198.655 143 197.938C143.018 196.582 141.851 196.481 141.851 196.481Z"
                fill={coverColor}
            />
            <path
                d="M16.7824 173.873V0.277516C16.7824 0.277516 3.06348 -0.381156 0 11.5424V183.921C0 183.921 1.70019e-06 173.27 16.7824 173.873Z"
                fill={coverColor}
            />
            <path
                d="M118.676 34.8091H33.5649V72.9915H118.676V34.8091Z"
                fill={coverColor}
            />
            <path
                d="M6.3468 19.8239C8.70341 18.7114 11.202 18.121 13.1615 17.8225C15.1211 17.5225 16.5391 17.5098 16.7401 17.51H16.7607H16.761L16.7689 17.5102H16.7823V14.0939L16.7402 14.0938C16.1538 14.0991 11.6323 14.136 6.74782 15.955C4.44814 16.8161 2.05989 18.0912 0 19.9928V25.3396C0.569709 24.3755 1.24048 23.5291 1.99482 22.7842C3.26784 21.5331 4.77417 20.5647 6.3468 19.8239Z"
                fill="white"
            />
            <path
                d="M7.17491 29.1211C9.53787 27.7332 11.9814 26.9986 13.8218 26.6228C14.7415 26.4345 15.5093 26.3349 16.0373 26.283C16.3014 26.257 16.5054 26.243 16.6387 26.2354C16.7046 26.2317 16.7524 26.2298 16.7823 26.2286V22.8115H16.7666L16.7495 22.8119C16.6123 22.8205 12.2181 22.8977 7.31586 25.1949C4.86821 26.3461 2.28842 28.0692 0.124461 30.6432C0.0818969 30.6937 0.0422296 30.75 0 30.8013V37.431C0.727262 35.6175 1.6601 34.1105 2.71796 32.849C4.05638 31.2571 5.59793 30.0464 7.17491 29.1211Z"
                fill="white"
            />
            <path
                d="M6.34702 153.638C8.70375 152.525 11.2022 151.935 13.1617 151.636C15.1213 151.336 16.5393 151.324 16.7403 151.324H16.7587H16.7588L16.7667 151.324H16.7823V147.908L16.7402 147.908C16.1538 147.913 11.6324 147.95 6.74782 149.769C4.44826 150.63 2.06 151.905 0 153.807V159.154C0.569709 158.189 1.2407 157.343 1.99504 156.598C3.26806 155.347 4.77439 154.379 6.34702 153.638Z"
                fill="white"
            />
            <path
                d="M7.17491 162.935C9.53787 161.547 11.9814 160.813 13.8218 160.437C14.7415 160.249 15.5093 160.149 16.0373 160.097C16.3014 160.071 16.5054 160.057 16.6387 160.05C16.7046 160.046 16.7524 160.044 16.7823 160.043V156.625H16.7666L16.7495 156.626C16.6123 156.634 12.2181 156.712 7.31586 159.009C4.86821 160.16 2.28842 161.883 0.124461 164.457C0.0818969 164.508 0.0422296 164.564 0 164.615V171.245C0.727262 169.432 1.6601 167.925 2.71796 166.663C4.05638 165.071 5.59793 163.86 7.17491 162.935Z"
                fill="white"
            />
            <path
                d="M141.851 196.481H9.19034C7.1895 196.361 5.78601 195.384 4.79924 194.036C2.20563 190.492 2.50324 184.366 2.50324 184.366C2.76966 174.251 16.7824 175.749 16.7824 175.749H137.888C138.961 175.749 139.937 175.312 140.652 174.61C141.39 173.885 141.851 172.876 141.851 171.763V169.887C141.851 172.079 140.068 173.873 137.888 173.873H16.7824C1.70019e-06 173.27 0 183.921 0 183.921C0 199.797 9.59001 198.993 9.59001 198.993H141.851C142.497 198.885 142.991 198.654 143 197.938C143.018 196.581 141.851 196.481 141.851 196.481Z"
                fill="#03030B"
            />
            <path
                d="M13.9253 184.443C23.7659 181.368 34.4608 180.461 44.7071 180.008C55.8062 179.517 66.919 179.88 78.0178 180.19C89.0344 180.499 99.9894 180.437 111.004 180.14C116.509 179.992 122.108 179.803 127.587 180.459C131.917 180.977 136.279 181.915 140.652 181.968V174.61C139.937 175.313 138.961 175.749 137.888 175.749H16.7822C16.7822 175.749 2.76943 174.252 2.50302 184.367C2.50302 184.367 2.38736 186.75 2.92955 189.403C6.35961 187.354 10.0113 185.666 13.9253 184.443Z"
                fill="#AAB8BC"
            />
        </svg>
    )
}

export default BookCoverSvg