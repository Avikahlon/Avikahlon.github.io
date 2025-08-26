import React from 'react';
import Dock from '../Dock/Dock';
import { IoHomeOutline, IoFolderOpenOutline } from "react-icons/io5";
import { CgCodeSlash } from "react-icons/cg";
import { HiOutlineMail } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    const items = [
        {
            icon: <IoHomeOutline size={36} color="grey" />,
            label: "Home",
            href: "/",
            onClick: () => handleClick("/"),
        },
        {
            icon: <CgCodeSlash size={36} color="grey" />,
            label: "Skills",
            href: "/skills",
            onClick: () => handleClick("/skills"),
        },
        {
            icon: <IoFolderOpenOutline size={36} color="grey" />,
            label: "Projects",
            href: "/projects",
            onClick: () => handleClick("/projects"),
        },
        {
            icon: <HiOutlineMail size={36} color="grey" />,
            label: "Contact Me",
            href: "/contact",
            onClick: () => handleClick("/contact"),
        },
    ];


  const handleClick = (href) => {
    if (href.startsWith('/')) {
      navigate(href);
    } else if (href.startsWith('#')) {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Dock 
      items={items}
      panelHeight={60}
      baseItemSize={55}
      magnification={80}
    />
  );
};

export default Navbar;