import React from "react";
import styled from "styled-components";
import { AiOutlinePlus } from "react-icons/ai";
export default function Header({
  setMakeRoom,
}: {
  setMakeRoom: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <StyledContainer>
      <svg
        width="125"
        height="19"
        viewBox="0 0 125 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_0_129)">
          <path
            d="M42.9424 9.92392C42.9424 15.6917 39.3498 18.9998 33.6092 18.9998C27.8686 18.9998 24.3065 15.6917 24.3065 9.92392V-0.0144348H29.3133V9.99136C29.3133 12.8309 30.9911 14.6659 33.6092 14.6659C36.2272 14.6659 37.9357 12.8344 37.9357 9.99136V-0.00023955H42.9424V9.92392Z"
            fill="white"
          />
          <path
            d="M67.7816 18.5918H62.8131V9.26751L58.3681 15.6565V15.6813H55.601V15.6565L51.1255 9.23202L51.1561 18.6096H46.1875V0H49.8681L56.9922 9.93835L64.0858 0H67.7931L67.7816 18.5918Z"
            fill="white"
          />
          <path
            d="M88.9738 13.4239C88.9738 16.5119 86.2984 18.5918 81.7923 18.5918H71.3125V0H81.2038C85.5302 0 88.0833 1.91313 88.0833 4.94788C88.0833 6.66935 87.0552 8.44761 85.2894 9.02261C87.7393 9.51243 88.9738 11.4291 88.9738 13.4239ZM76.2887 7.57445H80.4394C82.293 7.57445 83.3249 6.77938 83.3249 5.57613C83.3249 4.37288 82.3504 3.77303 80.4394 3.77303H76.2887V7.57445ZM81.1464 14.7656C83.1759 14.7656 84.0893 13.9172 84.0893 12.824C84.0893 11.6776 83.0574 11.1026 81.2343 11.1026H76.2887V14.7656H81.1464Z"
            fill="white"
          />
          <path
            d="M106.623 18.5918H91.7402V0H96.7088V14.5171H106.623V18.5918Z"
            fill="white"
          />
          <path
            d="M113.935 7.40763H122.795V11.3475H113.935V14.5703H124.09V18.5918H108.959V0H124.09V4.01794H113.935V7.40763Z"
            fill="white"
          />
          <path
            d="M19.8685 0V10.5311L0.0898438 0V0.745376V7.93294V18.5883H0.326806V8.06071L20.1055 18.5883V17.9316V10.6553V0H19.8685Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_0_129">
            <rect
              width="124"
              height="19"
              fill="white"
              transform="translate(0.0898438)"
            />
          </clipPath>
        </defs>
      </svg>
      <AiOutlinePlus
        size={30}
        className="icon"
        onClick={() => setMakeRoom(true)}
      />
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  margin-top: 40px;
  width: 85%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .icon {
    :hover {
      cursor: pointer;
      color: #393939;
    }
  }
`;
