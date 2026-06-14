"use client";
import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SocialMediaLinks = () => {
  return (
    <>
      <div className="flex gap-8 items-center">
        <Link href="#" className="text-foreground/80 hover:text-blue-600 transition-colors duration-300">
          <FaGithub size={18} />
        </Link>
        <Link href="#" className="text-foreground/80 hover:text-blue-600 transition-colors duration-300">
          <FaLinkedinIn size={18} />
        </Link>
        <Link href="#" className="text-foreground/80 hover:text-blue-600 transition-colors duration-300">
          <FaXTwitter size={18} />
        </Link>
      </div>
    </>
  );
};

export default SocialMediaLinks;
