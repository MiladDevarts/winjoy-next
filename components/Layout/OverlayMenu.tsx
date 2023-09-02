"use client"

import { MenuContext } from "@/context/MenuProvider"
import classNames from 'classnames';
import { useContext } from "react";
import Link from "next/link";

const OverlayMenu = () => {

  let menuVisibilty = useContext(MenuContext)

  const OverlayClasses = classNames('block lg:hidden w-full h-full transition-all fixed top-0 z-10', {
    'left-0': menuVisibilty.menu,
    '-left-[1200px]': !menuVisibilty.menu,
  })
  return (
    <section className={OverlayClasses}>
      <div className="w-full h-full bg-white text-black bg-cover" style={{ backgroundImage: `url('/images/menu/overlay-background.png')` }}>
        <div className="container h-24">
          <Link href={"/"}>
          </Link>
        </div>
        <ul className="container flex flex-col items-center gap-y-6 font-opensans text-xl font-medium text-white-shade-10 mt-20">
          <li className="font-semibold text-black">
            <Link href={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link href={"/events"}>
              Event
            </Link>
          </li>
          <li>
            <Link href={"#"}>
              Blog
            </Link>
          </li>
          <li>
            <Link href={"/financial-market"}>
              Financial market
            </Link>
          </li>
          <li>
            <Link href={"#"}>
              ADS reservation
            </Link>
          </li>
          <li>
            <Link href={"#"}>
              Music player
            </Link>
          </li>
          <li>
            <Link href={"#"}>
              Plans
            </Link>
          </li>
          <li>
            <Link href={"/about"}>
              About
            </Link>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default OverlayMenu