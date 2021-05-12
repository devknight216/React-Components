import React from 'react'
import { Pane } from 'evergreen-ui'

interface Props {
  size?: number
}

const SegmentIcon = ({ size = 24 }: Props) => {
  return (
    <Pane
      is="svg"
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0)">
        <path
          d="M0.0950914 10.3673C0.0625919 10.3153 0.0412772 10.2574 0.0324514 10.1972C0.0236256 10.1369 0.0274742 10.0755 0.0437618 10.0168C0.688157 7.52355 2.1298 5.29639 4.1589 3.65939C5.74519 2.38294 7.6418 1.52839 9.66511 1.17846C11.6884 0.828521 13.7699 0.995056 15.708 1.66194C15.7662 1.6823 15.8195 1.71389 15.8649 1.75483C15.9103 1.79577 15.9467 1.84522 15.9721 1.90023C16.0192 2.01254 16.0192 2.13844 15.9721 2.25074L15.3812 3.79008C15.3419 3.89971 15.2598 3.98965 15.1528 4.04014C15.0458 4.09064 14.9227 4.09757 14.8105 4.0594C13.2887 3.54072 11.656 3.41401 10.0696 3.6915C8.48316 3.96899 6.99669 4.64131 5.7535 5.64363C4.17808 6.93249 3.05915 8.67452 2.55621 10.6214C2.53122 10.7173 2.47436 10.8024 2.39454 10.8634C2.31472 10.9243 2.21646 10.9576 2.11518 10.958H2.01252L0.391587 10.5772C0.331822 10.5633 0.27556 10.5378 0.226216 10.502C0.176873 10.4663 0.135478 10.4211 0.104547 10.3692"
          fill="#52BD95"
        />
        <path
          d="M23.6231 14.1924C23.5856 14.1453 23.5388 14.106 23.4854 14.077C23.432 14.0479 23.3732 14.0297 23.3124 14.0235L21.6544 13.8538C21.5368 13.8429 21.4194 13.8768 21.3269 13.9486C21.2344 14.0203 21.1738 14.1243 21.158 14.2387C20.8626 16.4405 19.7838 18.4705 18.1106 19.9729C16.8223 21.1412 15.2241 21.9324 13.4982 22.2562C11.7723 22.5801 9.98794 22.4236 8.34855 21.8047C8.2937 21.7836 8.23514 21.7733 8.17622 21.7744C8.1173 21.7755 8.05917 21.7879 8.00517 21.811C7.95116 21.834 7.90233 21.8672 7.86148 21.9087C7.82062 21.9503 7.78853 21.9992 7.76705 22.0529L7.1207 23.5929C7.09632 23.6481 7.08374 23.7076 7.08374 23.7678C7.08374 23.8279 7.09632 23.8875 7.1207 23.9427C7.14305 23.9992 7.17743 24.0503 7.22156 24.0928C7.2657 24.1352 7.31857 24.168 7.37667 24.1889C8.76235 24.7227 10.2388 24.9957 11.7282 24.9936C14.7396 24.9935 17.6398 23.8814 19.8477 21.8799C21.9758 19.9512 23.3407 17.3514 23.7028 14.537C23.7113 14.4773 23.7073 14.4164 23.691 14.3582C23.6748 14.3 23.6466 14.2457 23.6083 14.1984"
          fill="#52BD95"
        />
        <path
          d="M14.4682 16.4323V14.7735C14.4689 14.6541 14.4212 14.5393 14.3355 14.4541C14.2498 14.369 14.1331 14.3206 14.0109 14.3193H0.453879C0.332299 14.3214 0.216462 14.3703 0.131496 14.4553C0.0465302 14.5403 -0.000711844 14.6546 1.79352e-05 14.7735V16.4323C-0.000516357 16.4915 0.0108917 16.5502 0.0335894 16.605C0.0562872 16.6599 0.0898293 16.7099 0.132297 16.752C0.174764 16.7942 0.225324 16.8278 0.281084 16.8509C0.336844 16.8739 0.396709 16.886 0.457256 16.8865H14.0109C14.0715 16.886 14.1314 16.8739 14.1871 16.8509C14.2429 16.8278 14.2934 16.7942 14.3359 16.752C14.3784 16.7099 14.4119 16.6599 14.4346 16.605C14.4573 16.5502 14.4687 16.4915 14.4682 16.4323Z"
          fill="#52BD95"
        />
        <path
          d="M9.25278 8.75073V10.4095C9.25169 10.5283 9.29863 10.6426 9.38338 10.7277C9.46813 10.8127 9.58383 10.8616 9.70529 10.8637H23.261C23.3215 10.8632 23.3813 10.851 23.437 10.8279C23.4926 10.8048 23.5431 10.7712 23.5855 10.729C23.6279 10.6869 23.6614 10.6369 23.684 10.5821C23.7067 10.5273 23.7181 10.4687 23.7176 10.4095V8.75073C23.7148 8.63392 23.6655 8.52276 23.5803 8.44082C23.4951 8.35888 23.3805 8.31259 23.261 8.31177H9.70326C9.5818 8.31385 9.46611 8.36274 9.38135 8.4478C9.2966 8.53286 9.24966 8.64719 9.25075 8.76591"
          fill="#52BD95"
        />
        <path
          d="M19.1614 3.25141C18.8866 3.24688 18.6165 3.32212 18.3854 3.46761C18.1542 3.61311 17.9724 3.82232 17.863 4.0688C17.7535 4.31527 17.7213 4.58794 17.7704 4.85231C17.8195 5.11668 17.9477 5.36089 18.1388 5.55404C18.3299 5.74719 18.5753 5.88062 18.844 5.93744C19.1127 5.99426 19.3927 5.97193 19.6484 5.87327C19.9041 5.77461 20.1241 5.60405 20.2807 5.38317C20.4372 5.16228 20.5232 4.90099 20.5278 4.63233C20.5278 4.62507 20.5278 4.61715 20.5278 4.60989C20.5299 4.25283 20.3873 3.90947 20.1312 3.65489C19.875 3.40032 19.5261 3.25525 19.1608 3.25141"
          fill="#52BD95"
        />
        <path
          d="M4.07258 19.6765C3.7977 19.6719 3.52762 19.7472 3.29649 19.8927C3.06536 20.0382 2.88357 20.2474 2.77411 20.4938C2.66465 20.7403 2.63243 21.013 2.68153 21.2774C2.73063 21.5417 2.85884 21.7859 3.04995 21.9791C3.24106 22.1722 3.48648 22.3057 3.75518 22.3625C4.02388 22.4193 4.30379 22.397 4.5595 22.2983C4.81522 22.1997 5.03525 22.0291 5.19178 21.8082C5.34831 21.5873 5.4343 21.326 5.43889 21.0574V21.0343C5.44052 20.6775 5.29782 20.3347 5.04189 20.0803C4.78596 19.826 4.43754 19.6808 4.07258 19.6765Z"
          fill="#52BD95"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="24" height="24" fill="white" transform="translate(0 0.998047)" />
        </clipPath>
      </defs>
    </Pane>
  )
}

export default SegmentIcon
