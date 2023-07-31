import { ReviewImage, ReviewRectange } from '../../constants';

const TestimonialCard = () => {
  return (
    <div className="relative">
      <div className="absolute left-[50%] translate-x-[-50%] top-0 -z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1005"
          height="718"
          viewBox="0 0 1305 1018"
          fill="none"
        >
          <g filter="url(#filter0_d_1_1325)">
            <path
              d="M71 97C71 80.4315 84.4315 67 101 67H1204C1220.57 67 1234 80.4315 1234 97V778.812C1234 795.381 1220.57 808.812 1204 808.812H321.166C312.278 808.812 303.848 812.753 298.148 819.572L194.975 943L182.341 835.317C180.568 820.204 167.762 808.812 152.546 808.812H101C84.4315 808.812 71 795.381 71 778.812V97Z"
              fill="white"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_1_1325"
              x="0"
              y="0"
              width="1305"
              height="1018"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="35.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1_1325"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_1_1325"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="mx-40 pt-20 grid grid-cols-2 relative">
        <div>
          <h2 className="font-bold text-3xl font-inter mt-10">Freda Collier</h2>{' '}
          <div className="w-20 h-[2px] my-2 bg-black"></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="33"
            viewBox="0 0 30 33"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.57812 16.501V27.7912L7.70874 22.1537L12.8394 16.5161V10.8635V5.21085H7.70874H2.57812V16.501ZM17.1606 16.501V27.7912L22.2913 22.1537L27.4219 16.5161V10.8635V5.21085H22.2913H17.1606V16.501Z"
              fill="black"
            />
          </svg>
          <p className="text-xl">
            Ipsum vel nobis doloremque est aut non accusantium vero molestias.
            Et est minima dolorem eum modi atque sint nobis. Enim quod facere.
            Reiciendis necessitatibus ipsam non aspernatur voluptate id.
          </p>
          <div className="absolute left-40">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="33"
              viewBox="0 0 30 33"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.57812 16.501V27.7912L7.70874 22.1537L12.8394 16.5161V10.8635V5.21085H7.70874H2.57812V16.501ZM17.1606 16.501V27.7912L22.2913 22.1537L27.4219 16.5161V10.8635V5.21085H22.2913H17.1606V16.501Z"
                fill="black"
              />
            </svg>
          </div>
          <div className="mt-14">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="150"
              height="31"
              viewBox="0 0 190 31"
              fill="none"
            >
              <path
                d="M15 0.937744L18.3677 11.3025H29.2658L20.4491 17.7083L23.8168 28.073L15 21.6672L6.18322 28.073L9.55093 17.7083L0.734152 11.3025H11.6323L15 0.937744Z"
                fill="#001E43"
              />
              <path
                d="M55 0.937744L58.3677 11.3025H69.2658L60.4491 17.7083L63.8168 28.073L55 21.6672L46.1832 28.073L49.5509 17.7083L40.7342 11.3025H51.6323L55 0.937744Z"
                fill="#001E43"
              />
              <path
                d="M95 0.937744L98.3677 11.3025H109.266L100.449 17.7083L103.817 28.073L95 21.6672L86.1832 28.073L89.5509 17.7083L80.7342 11.3025H91.6323L95 0.937744Z"
                fill="#001E43"
              />
              <path
                d="M135 0.937744L138.368 11.3025H149.266L140.449 17.7083L143.817 28.073L135 21.6672L126.183 28.073L129.551 17.7083L120.734 11.3025H131.632L135 0.937744Z"
                fill="#001E43"
              />
              <path
                d="M175 0.937744L178.368 11.3025H189.266L180.449 17.7083L183.817 28.073L175 21.6672L166.183 28.073L169.551 17.7083L160.734 11.3025H171.632L175 0.937744Z"
                fill="#001E43"
              />
            </svg>
          </div>
        </div>
        <div className="relative">
          <img
            src={ReviewImage}
            alt="review1"
            className="w-[80%] absolute -right-40"
          />
          <img
            src={ReviewRectange}
            alt="review1"
            className=" top-0 object-contain absolute -z-10 h-full -right-48"
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
