import React from "react";

import { AiFillGithub, AiFillLinkedin, AiOutlineInstagram } from "react-icons/ai";

function SocialLinkSection() {
  return (
    <div className="flex flex-col  w-1/6 p-2 space-y-2">
      <a
        href="https://github.com/shubh-kohar"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillGithub size={40} />
      </a>


      <a
        href="https://www.linkedin.com/in/shubhajeet-kohar-86bba4218/"
        target="_blank"
        rel="noopener noreferrer"
      >
    <AiFillLinkedin size={40}/>
    </a>

    <a
        href="https://www.instagram.com/shubh.kohar/"
        target="_blank"
        rel="noopener noreferrer"
      >
    <AiOutlineInstagram size={40}/>
    </a>
    </div>
  );
}

export default SocialLinkSection;
