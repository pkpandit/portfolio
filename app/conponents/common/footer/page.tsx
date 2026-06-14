"use client";
import Link from "next/link";
import { BsBluesky } from "react-icons/bs";

import SocialMediaLinks from "../media/page";

const Footer = () => {
  return (
    <footer className="bg-gray-900 w-full">
      <div className="w-full px-8 sm:px-10 lg:px-12 xl:px-24 pt-16 ">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <BsBluesky size={32} className="text-white h-9" />

            <p className="text-balance text-sm/6 text-gray-300">
              Making the world a better place through constructing elegant
              hierarchies.
            </p>
            <SocialMediaLinks />
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm/6 font-semibold text-white">
                  Solutions
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link
                      href="/contact"
                      className="text-sm/6 text-gray-400 hover:text-white"
                    >
                      Marketing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-sm/6 text-gray-400 hover:text-white"
                    >
                      Analytics
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-sm/6 text-gray-400 hover:text-white"
                    >
                      Automation
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-sm/6 text-gray-400 hover:text-white"
                    >
                      Commerce
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-sm/6 text-gray-400 hover:text-white"
                    >
                      Insights
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm/6 font-semibold text-white">Support</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link
                      href="/contact"
                      className="text-sm/6 text-gray-400 hover:text-white"
                    >
                      Submit ticket
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-sm/6 text-gray-400 hover:text-white"
                    >
                      Documentation
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-sm/6 text-gray-400 hover:text-white"
                    >
                      Guides
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm/6 font-semibold text-white">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link
                      href="/contact"
                      className="text-sm/6 text-gray-400 hover:text-white"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-sm/6 text-gray-400 hover:text-white"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-sm/6 text-gray-400 hover:text-white"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-sm/6 text-gray-400 hover:text-white"
                    >
                      Jobs
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-sm/6 text-gray-400 hover:text-white"
                    >
                      Press
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm/6 font-semibold text-white">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link
                      href="/contact"
                      className="text-sm/6 text-gray-400 hover:text-white"
                    >
                      Terms of service
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-sm/6 text-gray-400 hover:text-white"
                    >
                      Privacy policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-sm/6 text-gray-400 hover:text-white"
                    >
                      License
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-sm/6 text-gray-400">
            &copy; 2024 Your Company, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
