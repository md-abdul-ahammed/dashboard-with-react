import React from "react";
import logo from "../../util/assets/images/logo.png";
import logoName from "../../util/assets/images/OSTELLO.png";
import { Link, NavLink } from "react-router-dom";

const allData = [
  {
    title: "Overview",
    route: "overview",
    icon: (
      <svg
        width="20"
        height="21"
        className="transition duration-700 group-hover:fill-[#7D23E0] group-hover:scale-125"
        viewBox="0 0 21 19"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.6042 4.47355H6.14583C6.04085 4.47355 5.94017 4.42752 5.86594 4.34558C5.7917 4.26364 5.75 4.1525 5.75 4.03662V1.85197C5.75 1.73609 5.7917 1.62495 5.86594 1.54301C5.94017 1.46107 6.04085 1.41504 6.14583 1.41504H19.6042C19.7091 1.41504 19.8098 1.46107 19.8841 1.54301C19.9583 1.62495 20 1.73609 20 1.85197V4.03662C20 4.1525 19.9583 4.26364 19.8841 4.34558C19.8098 4.42752 19.7091 4.47355 19.6042 4.47355ZM19.6042 11.0275H6.14583C6.04085 11.0275 5.94017 10.9815 5.86594 10.8995C5.7917 10.8176 5.75 10.7065 5.75 10.5906V8.40592C5.75 8.29004 5.7917 8.1789 5.86594 8.09696C5.94017 8.01502 6.04085 7.96899 6.14583 7.96899H19.6042C19.7091 7.96899 19.8098 8.01502 19.8841 8.09696C19.9583 8.1789 20 8.29004 20 8.40592V10.5906C20 10.7065 19.9583 10.8176 19.8841 10.8995C19.8098 10.9815 19.7091 11.0275 19.6042 11.0275ZM19.6042 17.5815H6.14583C6.04085 17.5815 5.94017 17.5354 5.86594 17.4535C5.7917 17.3715 5.75 17.2604 5.75 17.1445V14.9599C5.75 14.844 5.7917 14.7329 5.86594 14.6509C5.94017 14.569 6.04085 14.5229 6.14583 14.5229H19.6042C19.7091 14.5229 19.8098 14.569 19.8841 14.6509C19.9583 14.7329 20 14.844 20 14.9599V17.1445C20 17.2604 19.9583 17.3715 19.8841 17.4535C19.8098 17.5354 19.7091 17.5815 19.6042 17.5815ZM3.375 4.47355H1.39583C1.29085 4.47355 1.19017 4.42752 1.11594 4.34558C1.0417 4.26364 1 4.1525 1 4.03662V1.85197C1 1.73609 1.0417 1.62495 1.11594 1.54301C1.19017 1.46107 1.29085 1.41504 1.39583 1.41504H3.375C3.47998 1.41504 3.58066 1.46107 3.6549 1.54301C3.72913 1.62495 3.77083 1.73609 3.77083 1.85197V4.03662C3.77083 4.1525 3.72913 4.26364 3.6549 4.34558C3.58066 4.42752 3.47998 4.47355 3.375 4.47355ZM3.375 11.0275H1.39583C1.29085 11.0275 1.19017 10.9815 1.11594 10.8995C1.0417 10.8176 1 10.7065 1 10.5906V8.40592C1 8.29004 1.0417 8.1789 1.11594 8.09696C1.19017 8.01502 1.29085 7.96899 1.39583 7.96899H3.375C3.47998 7.96899 3.58066 8.01502 3.6549 8.09696C3.72913 8.1789 3.77083 8.29004 3.77083 8.40592V10.5906C3.77083 10.7065 3.72913 10.8176 3.6549 10.8995C3.58066 10.9815 3.47998 11.0275 3.375 11.0275ZM3.375 17.5815H1.39583C1.29085 17.5815 1.19017 17.5354 1.11594 17.4535C1.0417 17.3715 1 17.2604 1 17.1445V14.9599C1 14.844 1.0417 14.7329 1.11594 14.6509C1.19017 14.569 1.29085 14.5229 1.39583 14.5229H3.375C3.47998 14.5229 3.58066 14.569 3.6549 14.6509C3.72913 14.7329 3.77083 14.844 3.77083 14.9599V17.1445C3.77083 17.2604 3.72913 17.3715 3.6549 17.4535C3.58066 17.5354 3.47998 17.5815 3.375 17.5815Z"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Requests",
    route: "requests",
    icon: (
      <svg
        width="18"
        height="20"
        className="transition duration-700 group-hover:fill-[#7D23E0] group-hover:scale-125"
        viewBox="0 0 16 18"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10.9714 12.5025V15.9668H1.21905V2.10982H7.31429V0.955078H1.21905C0.895736 0.955078 0.585666 1.07674 0.357051 1.29329C0.128435 1.50985 0 1.80357 0 2.10982V15.9668C0 16.273 0.128435 16.5667 0.357051 16.7833C0.585666 16.9998 0.895736 17.1215 1.21905 17.1215H10.9714C11.2947 17.1215 11.6048 16.9998 11.8334 16.7833C12.062 16.5667 12.1905 16.273 12.1905 15.9668V12.5025H10.9714Z" />
        <path d="M15.5673 3.12545L13.5558 1.22013C13.3735 1.05086 13.1284 0.956055 12.8732 0.956055C12.6179 0.956055 12.3728 1.05086 12.1905 1.22013L3.65717 9.30333V12.502H7.02783L15.5612 4.41877C15.7399 4.24608 15.8399 4.01392 15.8399 3.77211C15.8399 3.5303 15.7399 3.29814 15.5612 3.12545H15.5673ZM6.52193 11.3472H4.87621V9.78832L10.6301 4.33216L12.2819 5.89684L6.52193 11.3472ZM13.1414 5.08274L11.4895 3.51807L12.8732 2.20743L14.525 3.77211L13.1414 5.08274Z" />
      </svg>
    ),
  },
  {
    title: "Institutes",
    route: "institutes",
    icon: (
      <svg
        width="18"
        height="20"
        className="transition group-hover:fill-[#7D23E0] duration-700 group-hover:scale-125"
        viewBox="0 0 20 19"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M3.4375 1.8854V17.1677H15.8125V1.8854H3.4375ZM2.75 0.496094H16.5C16.6823 0.496094 16.8572 0.56928 16.9861 0.699552C17.1151 0.829825 17.1875 1.00651 17.1875 1.19075V17.8624C17.1875 18.0466 17.1151 18.2233 16.9861 18.3536C16.8572 18.4839 16.6823 18.557 16.5 18.557H2.75C2.56766 18.557 2.3928 18.4839 2.26386 18.3536C2.13493 18.2233 2.0625 18.0466 2.0625 17.8624V1.19075C2.0625 1.00651 2.13493 0.829825 2.26386 0.699552C2.3928 0.56928 2.56766 0.496094 2.75 0.496094Z" />
        <path d="M0 17.1674H19.25V18.5567H0V17.1674ZM5.5 3.27441H8.25V5.35837H5.5V3.27441Z" />
        <path d="M6.875 17.1674H12.375V15.7781C12.375 15.0412 12.0853 14.3345 11.5695 13.8134C11.0538 13.2923 10.3543 12.9995 9.625 12.9995C8.89565 12.9995 8.19618 13.2923 7.68046 13.8134C7.16473 14.3345 6.875 15.0412 6.875 15.7781V17.1674ZM9.625 11.6102C10.719 11.6102 11.7682 12.0493 12.5418 12.831C13.3154 13.6126 13.75 14.6727 13.75 15.7781V18.5567H5.5V15.7781C5.5 14.6727 5.9346 13.6126 6.70818 12.831C7.48177 12.0493 8.53098 11.6102 9.625 11.6102ZM5.5 7.44232H8.25V9.52628H5.5V7.44232ZM11 3.27441H13.75V5.35837H11V3.27441ZM11 7.44232H13.75V9.52628H11V7.44232Z" />
      </svg>
    ),
  },
  {
    title: "Students",
    route: "students",
    icon: (
      <svg
        width="20"
        height="21"
        className="transition group-hover:fill-[#7D23E0] duration-700 group-hover:scale-125"
        viewBox="0 0 19 19"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M18.4974 2.99214L9.7288 0.0820417C9.58001 0.0364548 9.42089 0.0364548 9.2721 0.0820417L0.512594 2.99214H0.494325L0.402985 3.03761H0.393851L0.302511 3.09217C0.302511 3.10127 0.293377 3.10127 0.284243 3.11036L0.211171 3.17402L0.147233 3.24677C0.147233 3.25587 0.138099 3.25587 0.138099 3.26496L0.0832953 3.34681C0.0832953 3.3559 0.0832952 3.3559 0.0741612 3.36499L0.0376253 3.44684L0.0102233 3.54688V3.57416C0.00121389 3.60979 -0.00187166 3.64666 0.00108928 3.68329V10.9585C0.00108928 11.1515 0.0780756 11.3365 0.215112 11.473C0.352149 11.6094 0.53801 11.6861 0.73181 11.6861C0.925609 11.6861 1.11147 11.6094 1.24851 11.473C1.38554 11.3365 1.46253 11.1515 1.46253 10.9585V4.69273L4.53155 5.71126C3.95498 6.63012 3.65101 7.69252 3.65469 8.77595C3.65503 9.7613 3.90662 10.7304 4.38589 11.5925C4.86516 12.4546 5.55642 13.1815 6.39489 13.7049C4.65249 14.3612 3.16498 15.5524 2.14758 17.1061C2.04388 17.2694 2.00875 17.4667 2.04975 17.6555C2.09075 17.8443 2.20461 18.0095 2.3668 18.1155C2.44639 18.168 2.53565 18.2043 2.62942 18.2222C2.72318 18.2401 2.81958 18.2393 2.91304 18.2199C3.00649 18.2004 3.09514 18.1627 3.17384 18.1089C3.25255 18.0551 3.31974 17.9862 3.37154 17.9064C4.03478 16.8892 4.94289 16.0533 6.01329 15.4745C7.08368 14.8958 8.28241 14.5926 9.50045 14.5926C10.7185 14.5926 11.9172 14.8958 12.9876 15.4745C14.058 16.0533 14.9661 16.8892 15.6294 17.9064C15.6961 18.0072 15.7869 18.09 15.8938 18.1471C16.0006 18.2043 16.1201 18.2341 16.2413 18.2338C16.3813 18.2352 16.5184 18.194 16.6341 18.1155C16.7963 18.0095 16.9102 17.8443 16.9512 17.6555C16.9922 17.4667 16.957 17.2694 16.8533 17.1061C15.8359 15.5524 14.3484 14.3612 12.606 13.7049C13.4445 13.1815 14.1357 12.4546 14.615 11.5925C15.0943 10.7304 15.3459 9.7613 15.3462 8.77595C15.3499 7.69252 15.0459 6.63012 14.4694 5.71126L18.4974 4.37443C18.6436 4.32659 18.7709 4.23402 18.8612 4.10991C18.9514 3.98581 19 3.8365 19 3.68329C19 3.53007 18.9514 3.38077 18.8612 3.25666C18.7709 3.13255 18.6436 3.03998 18.4974 2.99214ZM13.8848 8.77595C13.8848 9.93366 13.4229 11.044 12.6006 11.8626C11.7784 12.6812 10.6632 13.1411 9.50045 13.1411C8.33766 13.1411 7.22249 12.6812 6.40027 11.8626C5.57805 11.044 5.11613 9.93366 5.11613 8.77595C5.11789 7.84448 5.4152 6.93738 5.96559 6.18415L9.2721 7.28453C9.42043 7.33311 9.58048 7.33311 9.7288 7.28453L13.0353 6.18415C13.5857 6.93738 13.883 7.84448 13.8848 8.77595ZM13.0353 4.65635H13.0262L9.50045 5.82948L5.97473 4.65635H5.96559L3.04271 3.68329L9.50045 1.53709L15.9582 3.68329L13.0353 4.65635Z" />
      </svg>
    ),
  },
  {
    title: "Coupons",
    route: "coupons",
    icon: (
      <svg
        width="20"
        height="21"
        className="transition group-hover:fill-[#7D23E0] duration-700 group-hover:scale-125"
        viewBox="0 0 20 19"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 1.61978C0 1.3518 0.105357 1.0948 0.292893 0.905315C0.48043 0.715828 0.734784 0.609375 1 0.609375H19C19.2652 0.609375 19.5196 0.715828 19.7071 0.905315C19.8946 1.0948 20 1.3518 20 1.61978V7.17698C19.337 7.17698 18.7011 7.44312 18.2322 7.91683C17.7634 8.39055 17.5 9.03305 17.5 9.70299C17.5 10.3729 17.7634 11.0154 18.2322 11.4891C18.7011 11.9629 19.337 12.229 20 12.229V17.7862C20 18.0542 19.8946 18.3112 19.7071 18.5007C19.5196 18.6901 19.2652 18.7966 19 18.7966H1C0.734784 18.7966 0.48043 18.6901 0.292893 18.5007C0.105357 18.3112 0 18.0542 0 17.7862V1.61978ZM6.085 17.281C6.18807 16.985 6.37955 16.2233 6.63301 16.042C6.88647 15.8606 7.1894 15.7631 7.5 15.7631C7.8106 15.7631 8.11353 15.8606 8.36699 16.042C8.62045 16.2233 8.89693 16.985 9 17.281H18.5V13.7446C17.7488 13.3684 16.942 12.9488 16.5 12.229C16.058 11.5092 16 10.5501 16 9.70299C16 8.85586 16.058 8.03645 16.5 7.31664C16.942 6.59682 17.7488 6.03755 18.5 5.66138V2.12498H9C8.89693 2.42102 8.62045 3.18263 8.36699 3.36402C8.11353 3.54541 7.8106 3.64283 7.5 3.64283C7.1894 3.64283 6.88647 3.54541 6.63301 3.36402C6.37955 3.18263 6.18807 2.42102 6.085 2.12498H1.5V17.281H6.085ZM7.5 8.69259C7.10218 8.69259 6.72064 8.53291 6.43934 8.24868C6.15804 7.96445 6 7.57895 6 7.17698C6 6.77502 6.15804 6.38952 6.43934 6.10529C6.72064 5.82106 7.10218 5.66138 7.5 5.66138C7.89782 5.66138 8.27936 5.82106 8.56066 6.10529C8.84196 6.38952 9 6.77502 9 7.17698C9 7.57895 8.84196 7.96445 8.56066 8.24868C8.27936 8.53291 7.89782 8.69259 7.5 8.69259ZM7.5 13.7446C7.10218 13.7446 6.72064 13.5849 6.43934 13.3007C6.15804 13.0165 6 12.631 6 12.229C6 11.827 6.15804 11.4415 6.43934 11.1573C6.72064 10.8731 7.10218 10.7134 7.5 10.7134C7.89782 10.7134 8.27936 10.8731 8.56066 11.1573C8.84196 11.4415 9 11.827 9 12.229C9 12.631 8.84196 13.0165 8.56066 13.3007C8.27936 13.5849 7.89782 13.7446 7.5 13.7446Z" />
      </svg>
    ),
  },
  {
    title: "Blogs",
    route: "blogs",
    icon: (
      <svg
        width="20"
        height="21"
        className="transition group-hover:fill-[#7D23E0] duration-700 group-hover:scale-125"
        viewBox="0 0 18 19"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 15.3162H7.5V16.8318H0V15.3162ZM0 10.7694H7.5V12.285H0V10.7694ZM16.5 7.73815H1.5C1.10218 7.73815 0.720644 7.57847 0.43934 7.29425C0.158035 7.01002 0 6.62452 0 6.22255V1.67576C0 1.27379 0.158035 0.888295 0.43934 0.604065C0.720644 0.319835 1.10218 0.160156 1.5 0.160156H16.5C16.8978 0.160156 17.2794 0.319835 17.5607 0.604065C17.842 0.888295 18 1.27379 18 1.67576V6.22255C18 6.62452 17.842 7.01002 17.5607 7.29425C17.2794 7.57847 16.8978 7.73815 16.5 7.73815ZM1.5 1.67576V6.22255H16.5V1.67576H1.5ZM16.5 18.3474H12C11.6022 18.3474 11.2206 18.1877 10.9393 17.9034C10.658 17.6192 10.5 17.2337 10.5 16.8318V12.285C10.5 11.883 10.658 11.4975 10.9393 11.2133C11.2206 10.929 11.6022 10.7694 12 10.7694H16.5C16.8978 10.7694 17.2794 10.929 17.5607 11.2133C17.842 11.4975 18 11.883 18 12.285V16.8318C18 17.2337 17.842 17.6192 17.5607 17.9034C17.2794 18.1877 16.8978 18.3474 16.5 18.3474ZM12 12.285V16.8318H16.5V12.285H12Z" />
      </svg>
    ),
  },
  {
    title: "Events",
    route: "events",
    icon: (
      <svg
        width="20"
        height="21"
        className="transition group-hover:fill-[#7D23E0] duration-700 group-hover:scale-125"
        viewBox="0 0 18 18"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M3.9375 0C4.08668 0 4.22976 0.0592632 4.33525 0.164752C4.44074 0.270242 4.5 0.413316 4.5 0.5625V1.125H13.5V0.5625C13.5 0.413316 13.5593 0.270242 13.6648 0.164752C13.7702 0.0592632 13.9133 0 14.0625 0C14.2117 0 14.3548 0.0592632 14.4602 0.164752C14.5657 0.270242 14.625 0.413316 14.625 0.5625V1.125H15.75C16.3467 1.125 16.919 1.36205 17.341 1.78401C17.7629 2.20597 18 2.77826 18 3.375V15.75C18 16.3467 17.7629 16.919 17.341 17.341C16.919 17.7629 16.3467 18 15.75 18H2.25C1.65326 18 1.08097 17.7629 0.65901 17.341C0.237053 16.919 0 16.3467 0 15.75V3.375C0 2.77826 0.237053 2.20597 0.65901 1.78401C1.08097 1.36205 1.65326 1.125 2.25 1.125H3.375V0.5625C3.375 0.413316 3.43426 0.270242 3.53975 0.164752C3.64524 0.0592632 3.78832 0 3.9375 0V0ZM2.25 2.25C1.95163 2.25 1.66548 2.36853 1.4545 2.5795C1.24353 2.79048 1.125 3.07663 1.125 3.375V4.5H16.875V3.375C16.875 3.07663 16.7565 2.79048 16.5455 2.5795C16.3345 2.36853 16.0484 2.25 15.75 2.25H2.25ZM16.875 5.625H1.125V15.75C1.125 16.0484 1.24353 16.3345 1.4545 16.5455C1.66548 16.7565 1.95163 16.875 2.25 16.875H15.75C16.0484 16.875 16.3345 16.7565 16.5455 16.5455C16.7565 16.3345 16.875 16.0484 16.875 15.75V5.625Z" />
        <path d="M12.375 8.4375C12.375 8.28832 12.4343 8.14524 12.5398 8.03975C12.6452 7.93426 12.7883 7.875 12.9375 7.875H14.0625C14.2117 7.875 14.3548 7.93426 14.4602 8.03975C14.5657 8.14524 14.625 8.28832 14.625 8.4375V9.5625C14.625 9.71168 14.5657 9.85476 14.4602 9.96025C14.3548 10.0657 14.2117 10.125 14.0625 10.125H12.9375C12.7883 10.125 12.6452 10.0657 12.5398 9.96025C12.4343 9.85476 12.375 9.71168 12.375 9.5625V8.4375Z" />
      </svg>
    ),
  },
  {
    title: "Careers",
    route: "careers",
    icon: (
      <svg
        width="20"
        height="21"
        className="transition group-hover:fill-[#7D23E0] duration-700 group-hover:scale-125"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.90552 0.316697C7.39007 0.455031 6.97462 0.810481 6.79097 1.27028C6.69982 1.49846 6.69613 1.55528 6.68429 2.92598L6.67199 4.34538H4.21933C1.45137 4.34538 1.49432 4.34103 0.996824 4.67112C0.576537 4.94994 0.309528 5.28413 0.114774 5.77514L0.0161672 6.02379L0.0051016 12.023C-0.00711153 18.6512 -0.0196935 18.3049 0.252643 18.8252C0.421905 19.1486 0.806988 19.538 1.12654 19.7091C1.64059 19.9842 1.0974 19.9679 9.74978 19.9679C18.4022 19.9679 17.859 19.9842 18.373 19.7091C18.6926 19.538 19.0777 19.1486 19.2469 18.8252C19.5193 18.3049 19.5067 18.6512 19.4945 12.023L19.4834 6.02379L19.3851 5.77514C19.135 5.1429 18.6884 4.6901 18.0681 4.43999C17.9019 4.37298 17.6588 4.36428 15.426 4.34542L12.967 4.32466L12.9447 3.01923C12.9251 1.87294 12.9127 1.68603 12.8432 1.48587C12.7172 1.12271 12.4656 0.784207 12.1741 0.585367C11.7094 0.2685 11.7036 0.267671 9.83175 0.255777C8.36851 0.246452 8.14036 0.253663 7.90552 0.316697ZM11.1606 1.58466C11.6979 1.78479 11.7226 1.85959 11.7079 3.24716L11.6965 4.32466H9.74978H7.80306L7.79126 3.22644C7.77843 2.03104 7.80056 1.85143 7.98158 1.68106C8.17601 1.49809 8.26191 1.48873 9.64732 1.49942C10.7962 1.50824 10.9838 1.51885 11.1606 1.58466ZM17.8134 5.69582C17.9755 5.7758 18.0564 5.84982 18.1412 5.99578L18.2539 6.18956V8.92475V11.6599H14.9752H11.6965L11.6745 11.3284C11.639 10.7932 11.3994 10.4284 10.9433 10.2151C10.7661 10.1323 10.689 10.1266 9.74978 10.1266C8.8106 10.1266 8.73343 10.1323 8.55626 10.2151C8.10015 10.4284 7.8606 10.7932 7.82507 11.3284L7.80306 11.6599L5.79765 11.6707C4.0033 11.6803 3.78441 11.6886 3.71773 11.7497C3.61801 11.8409 3.62256 12.0366 3.7265 12.1266C3.8024 12.1923 3.98629 12.2005 5.80642 12.2194L7.80306 12.2401L7.82536 12.7789C7.84384 13.2248 7.86318 13.3475 7.93773 13.4914C8.0599 13.7272 8.29388 13.9512 8.54076 14.0688C8.73855 14.163 8.78064 14.1664 9.74978 14.1664C10.7208 14.1664 10.7608 14.1631 10.963 14.0679C11.2106 13.9513 11.4357 13.7349 11.5612 13.4926C11.6365 13.3474 11.6557 13.2261 11.6742 12.7789L11.6965 12.2401L14.9865 12.2295L18.2765 12.2189L18.2652 15.1305C18.2545 17.881 18.2497 18.0501 18.1774 18.1871C18.0699 18.3909 17.952 18.5125 17.7621 18.6159L17.5982 18.7051L9.85224 18.7178C4.33752 18.7268 2.04588 18.7173 1.8965 18.6849C1.76023 18.6554 1.62764 18.5883 1.51826 18.4936C1.21928 18.2349 1.22518 18.3039 1.22518 15.0714V12.2194H1.69039C1.94625 12.2194 2.21404 12.1988 2.28551 12.1736C2.48424 12.1035 2.54916 11.9364 2.43764 11.7818C2.38642 11.7109 2.31281 11.6989 1.81264 11.6807L1.24568 11.6599L1.2349 9.02835C1.22359 6.26925 1.23318 6.08591 1.40256 5.82951C1.58965 5.54625 0.911988 5.56681 9.66782 5.57878L17.5982 5.58964L17.8134 5.69582ZM10.8407 10.7508C11.1214 10.963 11.1215 10.9633 11.1351 12.0829L11.1474 13.1009L10.9502 13.2921C10.642 13.5912 10.4866 13.6289 9.56536 13.6285C8.66818 13.6281 8.57827 13.6008 8.43683 13.2857C8.36646 13.1289 8.35806 13.0071 8.35724 12.1323C8.35638 11.1854 8.35929 11.1498 8.44855 11.0172C8.66958 10.6888 8.83331 10.6489 9.92109 10.6583C10.6658 10.6648 10.7363 10.6719 10.8407 10.7508Z"
        />
      </svg>
    ),
  },
];

const Sidebar = () => {
  return (
    <div className="h-screen sticky top-0 left-0 bg-white">
      <div className=" flex justify-between items-center py-5 lg:px-2 xl:px-4 md:px-2">
        <img src={logo} alt="" />
        <img src={logoName} alt="" />
      </div>
      <div className="h-[70%]">
        {allData.map((data, index) => (
          <NavLink
            className={(navInfo) =>
              navInfo.isActive
                ? "text-[#7D23E0] bg-gradient-to-r from-[#f3e8ff] fill-[#7D23E0] via-[#fff] to-[#fff] flex items-center cursor-pointer gap-x-3 py-2 "
                : "flex items-center text-[#828095] cursor-pointer fill-[#828095] hover:text-[#7D23E0] gap-x-3 py-2 hover:bg-gradient-to-r hover:from-[#f3e8ff]  hover:via-[#fff] hover:to-[#fff]"
            }
            key={index}
            to={data.route}
          >
            <div className="group">
              <div className="flex items-center gap-x-3 py-1 sm:pl-[15px] lg:pl-[30px]">
                {data.icon}
                <p className="font-semibold">{data.title}</p>
              </div>
            </div>
          </NavLink>
        ))}
      </div>

      <Link to="#">
        <div className="flex w-full items-center gap-x-3 px-[25px]">
          <div>
            <svg
              width="23"
              height="20"
              viewBox="0 0 23 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.59973 5.34359V3.14763C7.59973 2.56522 7.84806 2.00667 8.2901 1.59484C8.73214 1.18302 9.33167 0.95166 9.9568 0.95166H19.3851C20.0102 0.95166 20.6097 1.18302 21.0518 1.59484C21.4938 2.00667 21.7421 2.56522 21.7421 3.14763V16.3234C21.7421 16.9058 21.4938 17.4644 21.0518 17.8762C20.6097 18.288 20.0102 18.5194 19.3851 18.5194H10.4282C9.12652 18.5194 7.59973 17.5362 7.59973 16.3234V14.1275"
                stroke="#9A9A9A"
                stroke-width="1.3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.2567 5.34375L15.6138 7.53972L17.9709 9.73568L13.2567 14.1276M1 9.73568H17.0281"
                stroke="#9A9A9A"
                stroke-width="1.3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-[#828095]">Logout</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
