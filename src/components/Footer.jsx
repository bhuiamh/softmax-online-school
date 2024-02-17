import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className=" bg-white shadow-xl hover:shadow-2xl border-t-2 border-black">
      <footer className="p-10 footer">
        <aside>
          <img className="h-[70px] w-auto" src="/logo/logo.png" alt="" />
          <p className="text-black font-semibold ">
            <span className="text-2xl font-bold text-green-500">
              {" "}
              Softmax Online School
            </span>
            <br />
            DUET, Gazipur, Bangladesh.
          </p>
        </aside>
        <nav>
          <h6 className=" text-xl font-bold text-green-500">Classes</h6>
          <Link
            href="/"
            className="text-black font-semibold hover:text-green-500 duration-300"
          >
            Diploma
          </Link>
          <Link
            href="/"
            className="text-black font-semibold hover:text-green-500 duration-300"
          >
            Duet Admission
          </Link>
        </nav>
        <nav>
          <h6 className=" text-xl font-bold text-green-500">Company</h6>
          <Link
            href="/"
            className="text-black font-semibold hover:text-green-500 duration-300"
          >
            About us
          </Link>
          <Link
            href="/"
            className="text-black font-semibold hover:text-green-500 duration-300"
          >
            Contact
          </Link>
          <Link
            href="/"
            className="text-black font-semibold hover:text-green-500 duration-300"
          >
            Youtube Channel
          </Link>
        </nav>
        <nav>
          <h6 className=" text-xl font-bold text-green-500">Legal</h6>
          <Link
            href="/"
            className="text-black font-semibold hover:text-green-500 duration-300"
          >
            Terms of use
          </Link>
          <Link
            href="/"
            className="text-black font-semibold hover:text-green-500 duration-300"
          >
            Privacy policy
          </Link>
          <Link
            href="/"
            className="text-black font-semibold hover:text-green-500 duration-300"
          >
            Cookie policy
          </Link>
        </nav>
      </footer>
      <footer className="footer footer-center p-4 bg-green-500">
        <aside>
          <p className="text-white font-semibold">
            Copyright © 2024 - All right reserved by{" "}
            <span className="font-bold">Softmax Online School</span>
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
