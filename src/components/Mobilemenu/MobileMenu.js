import React from "react";
import { IoLogOut } from "react-icons/io5";
import { ImCross } from "react-icons/im";
import { ImSearch } from "react-icons/im";
import user from "../../util/assets/images/user.png";
import logo from "../../util/assets/images/logo.png";
import logoName from "../../util/assets/images/OSTELLO.png";

const allData = [
  {
    title: "Overview",
    icon: (
      <svg
        width="20"
        height="21"
        className="transition duration-700 fill-[#7D23E0] scale-125"
        viewBox="0 0 20 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.53988 0.880859H5.91988C7.32988 0.880859 8.45988 2.03086 8.45988 3.44186V6.85086C8.45988 8.27086 7.32988 9.41086 5.91988 9.41086H2.53988C1.13988 9.41086 -0.00012207 8.27086 -0.00012207 6.85086V3.44186C-0.00012207 2.03086 1.13988 0.880859 2.53988 0.880859ZM2.53988 12.3506H5.91988C7.32988 12.3506 8.45988 13.4916 8.45988 14.9116V18.3206C8.45988 19.7306 7.32988 20.8806 5.91988 20.8806H2.53988C1.13988 20.8806 -0.00012207 19.7306 -0.00012207 18.3206V14.9116C-0.00012207 13.4916 1.13988 12.3506 2.53988 12.3506ZM17.46 0.880859H14.08C12.67 0.880859 11.54 2.03086 11.54 3.44186V6.85086C11.54 8.27086 12.67 9.41086 14.08 9.41086H17.46C18.86 9.41086 20 8.27086 20 6.85086V3.44186C20 2.03086 18.86 0.880859 17.46 0.880859ZM14.08 12.3506H17.46C18.86 12.3506 20 13.4916 20 14.9116V18.3206C20 19.7306 18.86 20.8806 17.46 20.8806H14.08C12.67 20.8806 11.54 19.7306 11.54 18.3206V14.9116C11.54 13.4916 12.67 12.3506 14.08 12.3506Z"
        />
      </svg>
    ),
  },
  {
    title: "Approval",
    icon: (
      <svg
        width="18"
        height="20"
        className="transition fill-[#828095] duration-700 group-hover:fill-[#7D23E0] group-hover:scale-125"
        viewBox="0 0 18 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.81 0H13.191C16.28 0 18 1.78 18 4.83V15.16C18 18.26 16.28 20 13.191 20H4.81C1.77 20 0 18.26 0 15.16V4.83C0 1.78 1.77 0 4.81 0ZM5.08 4.66V4.65H8.069C8.5 4.65 8.85 5 8.85 5.429C8.85 5.87 8.5 6.22 8.069 6.22H5.08C4.649 6.22 4.3 5.87 4.3 5.44C4.3 5.01 4.649 4.66 5.08 4.66ZM5.08 10.74H12.92C13.35 10.74 13.7 10.39 13.7 9.96C13.7 9.53 13.35 9.179 12.92 9.179H5.08C4.649 9.179 4.3 9.53 4.3 9.96C4.3 10.39 4.649 10.74 5.08 10.74ZM5.08 15.31H12.92C13.319 15.27 13.62 14.929 13.62 14.53C13.62 14.12 13.319 13.78 12.92 13.74H5.08C4.78 13.71 4.49 13.85 4.33 14.11C4.17 14.36 4.17 14.69 4.33 14.95C4.49 15.2 4.78 15.35 5.08 15.31Z"
        />
      </svg>
    ),
  },
  {
    title: "Accountancy",
    icon: (
      <svg
        width="18"
        height="20"
        className="transition fill-[#828095] scale-125 duration-700 group-hover:fill-[#7D23E0] group-hover:scale-150"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.33043 2.00043H16.6694C20.0704 2.00043 21.9904 3.92943 22.0004 7.33043V16.6704C22.0004 20.0704 20.0704 22.0004 16.6694 22.0004H7.33043C3.92943 22.0004 2.00043 20.0704 2.00043 16.6704V7.33043C2.00043 3.92943 3.92943 2.00043 7.33043 2.00043ZM12.0494 17.8604C12.4804 17.8604 12.8394 17.5404 12.8794 17.1104V6.92043C12.9194 6.61043 12.7704 6.29943 12.5004 6.13043C12.2194 5.96043 11.8794 5.96043 11.6104 6.13043C11.3394 6.29943 11.1904 6.61043 11.2194 6.92043V17.1104C11.2704 17.5404 11.6294 17.8604 12.0494 17.8604ZM16.6504 17.8604C17.0704 17.8604 17.4294 17.5404 17.4804 17.1104V13.8304C17.5094 13.5094 17.3604 13.2104 17.0894 13.0404C16.8204 12.8704 16.4804 12.8704 16.2004 13.0404C15.9294 13.2104 15.7804 13.5094 15.8204 13.8304V17.1104C15.8604 17.5404 16.2194 17.8604 16.6504 17.8604ZM8.21943 17.1104C8.17943 17.5404 7.82043 17.8604 7.38943 17.8604C6.95943 17.8604 6.59943 17.5404 6.56043 17.1104V10.2004C6.53043 9.88943 6.67943 9.58043 6.95043 9.41043C7.21943 9.24043 7.56043 9.24043 7.83043 9.41043C8.09943 9.58043 8.25043 9.88943 8.21943 10.2004V17.1104Z"
        />
      </svg>
    ),
  },
  {
    title: "Promo Codes",
    icon: (
      <svg
        width="20"
        height="21"
        className="transition fill-[#828095] duration-700 group-hover:fill-[#7D23E0] group-hover:scale-125"
        viewBox="0 0 20 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.1798 3.2225C15.1798 1.8925 16.2598 0.8125 17.5898 0.8125C18.9198 0.8125 19.9998 1.8925 19.9998 3.2225C19.9998 4.5525 18.9198 5.6325 17.5898 5.6325C16.2598 5.6325 15.1798 4.5525 15.1798 3.2225ZM11.3297 13.5718L14.2197 9.8428L14.1797 9.8628C14.3397 9.6428 14.3697 9.3628 14.2597 9.1128C14.1507 8.8628 13.9097 8.6928 13.6507 8.6728C13.3797 8.6428 13.1107 8.7628 12.9497 8.9828L10.5307 12.1128L7.75969 9.9328C7.58969 9.8028 7.38969 9.7518 7.18969 9.7728C6.99069 9.8028 6.81069 9.9118 6.68969 10.0718L3.73069 13.9228L3.66969 14.0128C3.49969 14.3318 3.57969 14.7418 3.87969 14.9628C4.01969 15.0528 4.16969 15.1128 4.33969 15.1128C4.57069 15.1228 4.78969 15.0018 4.92969 14.8128L7.43969 11.5818L10.2897 13.7228L10.3797 13.7818C10.6997 13.9518 11.0997 13.8728 11.3297 13.5718ZM13.4497 2.5928C13.4097 2.8428 13.3897 3.0928 13.3897 3.3428C13.3897 5.5928 15.2097 7.4118 17.4497 7.4118C17.6997 7.4118 17.9397 7.3828 18.1897 7.3428V15.4118C18.1897 18.8028 16.1897 20.8128 12.7897 20.8128H5.40069C1.99969 20.8128 -0.000305176 18.8028 -0.000305176 15.4118V8.0128C-0.000305176 4.6128 1.99969 2.5928 5.40069 2.5928H13.4497Z"
        />
      </svg>
    ),
  },
  {
    title: "Referral Points",
    icon: (
      <svg
        width="18"
        height="20"
        viewBox="0 0 24 25"
        className="transition fill-[#828095] duration-700 group-hover:fill-[#7D23E0] scale-125 group-hover:scale-150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.4109 3.39557L16.4119 4.1452C19.1665 4.36109 20.9862 6.23815 20.9891 9.1167L21 17.5425C21.0039 20.6809 19.0322 22.6119 15.8718 22.6169L8.15188 22.6269C5.01119 22.6309 3.01482 20.6539 3.01087 17.5065L3.00001 9.17967C2.99606 6.28212 4.75153 4.41006 7.50617 4.15719L7.50518 3.40756C7.5042 2.96778 7.83001 2.63695 8.26444 2.63695C8.69886 2.63595 9.02468 2.96579 9.02567 3.40557L9.02666 4.10522L14.8914 4.09722L14.8904 3.39757C14.8894 2.95779 15.2152 2.62795 15.6496 2.62696C16.0742 2.62596 16.4099 2.95579 16.4109 3.39557ZM4.52148 9.48852L19.4696 9.46853V9.1187C19.4272 6.96978 18.349 5.84234 16.4138 5.67443L16.4148 6.44404C16.4148 6.87383 16.0801 7.21466 15.6556 7.21466C15.2211 7.21566 14.8943 6.87583 14.8943 6.44604L14.8934 5.63645L9.02863 5.64444L9.02962 6.45304C9.02962 6.88382 8.70479 7.22365 8.27036 7.22365C7.83594 7.22465 7.50913 6.88582 7.50913 6.45504L7.50815 5.68542C5.58286 5.87833 4.51753 7.00976 4.52049 9.17767L4.52148 9.48852ZM15.2399 14.0312V14.0422C15.2498 14.502 15.625 14.8508 16.0801 14.8408C16.5244 14.8298 16.8789 14.449 16.869 13.9893C16.8483 13.5495 16.4918 13.1907 16.0485 13.1917C15.5944 13.2017 15.2389 13.5715 15.2399 14.0312ZM16.0554 18.519C15.6013 18.509 15.235 18.1302 15.234 17.6704C15.2241 17.2107 15.5884 16.8298 16.0426 16.8188H16.0525C16.5165 16.8188 16.8927 17.1977 16.8927 17.6674C16.8937 18.1372 16.5185 18.518 16.0554 18.519ZM11.1721 14.0472C11.1919 14.507 11.568 14.8658 12.0222 14.8458C12.4665 14.8248 12.821 14.445 12.8012 13.9853C12.7903 13.5355 12.425 13.1857 11.9807 13.1867C11.5266 13.2067 11.1711 13.5875 11.1721 14.0472ZM12.0262 18.474C11.572 18.494 11.1968 18.1352 11.1761 17.6754C11.1761 17.2157 11.5305 16.8358 11.9847 16.8149C12.429 16.8139 12.7953 17.1637 12.8052 17.6125C12.8259 18.0732 12.4705 18.453 12.0262 18.474ZM7.10433 14.0822C7.12408 14.542 7.50025 14.9018 7.95442 14.8808C8.39872 14.8608 8.75317 14.48 8.73243 14.0202C8.72256 13.5705 8.35725 13.2206 7.91196 13.2216C7.45779 13.2416 7.10334 13.6224 7.10433 14.0822ZM7.95837 18.479C7.5042 18.5 7.12901 18.1402 7.10828 17.6804C7.10729 17.2206 7.46273 16.8398 7.9169 16.8198C8.3612 16.8188 8.7275 17.1687 8.73737 17.6184C8.7581 18.0782 8.40365 18.459 7.95837 18.479Z"
        />
      </svg>
    ),
  },
  {
    title: "Careers",
    icon: (
      <ImSearch className="w-[18px] transition duration-700 group-hover:scale-125 h-[20px]" />
    ),
  },
  {
    title: "Blogs",
    icon: (
      <svg
        width="18"
        height="20"
        className="transition fill-[#828095] duration-700 group-hover:fill-[#7D23E0] group-hover:scale-125"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="blueprint_een"
          d="M30.707,9.293L26,4.586V1c0-0.552-0.448-1-1-1H3C2.448,0,2,0.448,2,1v30c0,0.552,0.448,1,1,1
      h22c0.552,0,1-0.448,1-1V15.414l4.707-4.707C31.098,10.317,31.098,9.683,30.707,9.293z M11.921,17.628l4.452,4.452l-5.194,0.742
      L11.921,17.628z M17.146,21.439l-4.586-4.586l8.293-8.293l4.586,4.586L17.146,21.439z M26.146,12.439l-4.586-4.586L24,5.414v0
      L28.586,10L26.146,12.439z M4,30V2h20v2l-4,4H8v1h11l-2,2H8v1h8l-2,2H8v1h5l-1.764,1.764c-0.069,0.069-0.124,0.15-0.17,0.236H8v1
      h2.857l-0.286,2H8v1h2.429l-0.286,2H8v1h2l6.67-0.953c0.214-0.031,0.413-0.13,0.566-0.283L24,16v14H4z"
        />
      </svg>
    ),
  },
  {
    title: "Notification",
    icon: (
      <svg
        width="18"
        height="20"
        className="transition fill-[#828095] duration-700 group-hover:fill-[#7D23E0] group-hover:scale-125"
        viewBox="0 0 18 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.7071 6.79633C15.7071 8.05226 16.039 8.79253 16.7695 9.64559C17.3231 10.2741 17.5 11.0808 17.5 11.956C17.5 12.8302 17.2128 13.6601 16.6373 14.3339C15.884 15.1417 14.8215 15.6573 13.7372 15.747C12.1659 15.8809 10.5937 15.9937 9.0005 15.9937C7.40634 15.9937 5.83505 15.9263 4.26375 15.747C3.17846 15.6573 2.11602 15.1417 1.36367 14.3339C0.78822 13.6601 0.5 12.8302 0.5 11.956C0.5 11.0808 0.677901 10.2741 1.23049 9.64559C1.98384 8.79253 2.29392 8.05226 2.29392 6.79633V6.3703C2.29392 4.68834 2.71333 3.58852 3.577 2.51186C4.86106 0.941697 6.91935 0 8.95577 0H9.04522C11.1254 0 13.2502 0.987019 14.5125 2.62466C15.3314 3.67916 15.7071 4.73265 15.7071 6.3703V6.79633ZM6.07367 18.0608C6.07367 17.5573 6.53582 17.3266 6.96318 17.2279C7.46309 17.1222 10.5093 17.1222 11.0092 17.2279C11.4366 17.3266 11.8987 17.5573 11.8987 18.0608C11.8738 18.5402 11.5926 18.9653 11.204 19.2352C10.7001 19.628 10.1088 19.8767 9.49057 19.9664C9.14868 20.0107 8.81276 20.0117 8.48279 19.9664C7.86362 19.8767 7.27227 19.628 6.76938 19.2342C6.37978 18.9653 6.09852 18.5402 6.07367 18.0608Z"
        />
      </svg>
    ),
  },
  {
    title: "Settings",
    icon: (
      <svg
        width="20"
        height="21"
        viewBox="0 0 20 21"
        className="transition fill-[#828095] duration-700 group-hover:fill-[#7D23E0] group-hover:scale-125"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.4022 12.3945C18.7599 12.5845 19.0358 12.8845 19.23 13.1845C19.6081 13.8045 19.5775 14.5645 19.2096 15.2345L18.4942 16.4345C18.1161 17.0745 17.4109 17.4745 16.6853 17.4745C16.3277 17.4745 15.9291 17.3745 15.6021 17.1745C15.3364 17.0045 15.0298 16.9445 14.7027 16.9445C13.691 16.9445 12.8428 17.7745 12.8121 18.7645C12.8121 19.9145 11.8719 20.8145 10.6967 20.8145H9.3068C8.12133 20.8145 7.18113 19.9145 7.18113 18.7645C7.16069 17.7745 6.31247 16.9445 5.30073 16.9445C4.96348 16.9445 4.6569 17.0045 4.40141 17.1745C4.07438 17.3745 3.6656 17.4745 3.31813 17.4745C2.58232 17.4745 1.87717 17.0745 1.49905 16.4345L0.793898 15.2345C0.415773 14.5845 0.395334 13.8045 0.773459 13.1845C0.936972 12.8845 1.24356 12.5845 1.59102 12.3945C1.87717 12.2545 2.06112 12.0245 2.23486 11.7545C2.74584 10.8945 2.43925 9.76454 1.57059 9.25454C0.558848 8.68454 0.231821 7.41454 0.814337 6.42454L1.49905 5.24454C2.09178 4.25454 3.35901 3.90454 4.38097 4.48454C5.27007 4.96454 6.42488 4.64454 6.94608 3.79454C7.10959 3.51454 7.20157 3.21454 7.18113 2.91454C7.16069 2.52454 7.27311 2.15454 7.46728 1.85454C7.8454 1.23454 8.53012 0.834545 9.27614 0.814545H10.7171C11.4734 0.814545 12.1581 1.23454 12.5362 1.85454C12.7201 2.15454 12.8428 2.52454 12.8121 2.91454C12.7917 3.21454 12.8837 3.51454 13.0472 3.79454C13.5684 4.64454 14.7232 4.96454 15.6225 4.48454C16.6342 3.90454 17.9117 4.25454 18.4942 5.24454L19.1789 6.42454C19.7716 7.41454 19.4446 8.68454 18.4227 9.25454C17.554 9.76454 17.2474 10.8945 17.7686 11.7545C17.9321 12.0245 18.1161 12.2545 18.4022 12.3945ZM7.10959 10.8245C7.10959 12.3945 8.40748 13.6445 10.012 13.6445C11.6164 13.6445 12.8837 12.3945 12.8837 10.8245C12.8837 9.25455 11.6164 7.99454 10.012 7.99454C8.40748 7.99454 7.10959 9.25455 7.10959 10.8245Z"
        />
      </svg>
    ),
  },
];

const MobileMenu = ({ setOpen }) => {
  return (
    <div className="width-[220px]">
      <div className="h-screen shadow-[0_35px_800px_-10px_rgba(0,0,0,0.3)] fixed top-0 left-0 bg-white">
        <div className=" flex justify-between items-center px-5 py-7">
          <img src={logo} alt="" />
          <img src={logoName} alt="" />
        </div>
        <div className="h-[70%]">
          {allData.map((data, index) => (
            <div key={index} className="group">
              <div
                className={` ${
                  index === 0 &&
                  "text-[#7D23E0] bg-gradient-to-r from-[#f3e8ff] via-[#fff] to-[#fff] "
                } flex items-center text-[#828095] cursor-pointer hover:text-[#7D23E0] gap-x-3 py-2 hover:bg-gradient-to-r hover:from-[#f3e8ff]  hover:via-[#fff] hover:to-[#fff]`}
              >
                <div className="flex items-center gap-x-3 py-1 pl-[30px]">
                  {data.icon}
                  <p className="font-semibold">{data.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex w-full items-center gap-x-1.5 px-[30px]">
          <div className="bg-pink-300 rounded-xl">
            <img src={user} alt="" />
          </div>
          <div>
            <p className="text-[12px] capitalize">easin arafat</p>
            <p className="text-[10px] uppercase text-gray-400">xyz classes</p>
          </div>
          <div>
            <IoLogOut className="text-2xl text-gray-400" />
          </div>
        </div>
        <span className="absolute top-3 right-3 ">
          <ImCross onClick={() => setOpen(false)} className="text-orange-400" />
        </span>
      </div>
    </div>
  );
};

export default MobileMenu;
