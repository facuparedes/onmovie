import { AnimateSharedLayout, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { NavbarLinkInterface } from "../../interfaces/navbar";

export default function NavbarMenu({ links }: { links: Array<NavbarLinkInterface> }) {
  const [navIndex, setNavIndex] = useState({ actual: -1, hovering: -1 });

  const _handleActualPathname = () => {
    const indexInNav = links.findIndex((e) => location.pathname.includes(e.url));
    setNavIndex({ actual: indexInNav, hovering: indexInNav });
  };

  useEffect(() => _handleActualPathname(), []);

  return (
    <div className="flex">
      <AnimateSharedLayout>
        {links.map((link, i: number) => (
          <motion.div
            onHoverStart={() => setNavIndex({ ...navIndex, hovering: i })}
            onHoverEnd={() => setNavIndex({ ...navIndex, hovering: navIndex.actual })}
            className="flex flex-col items-center px-3 py-1 sm:mx-8"
            key={`${link.url}-ID${i}`}
          >
            <Link href={link.url}>
              <a className="text-custom-first font-poppins">{link.name}</a>
            </Link>
            {navIndex.hovering === i && <motion.div layoutId="navbarUnderlineAnim" className="w-2/3 h-0.5 border-1 border-custom-accent shadow-navItem rounded-lg" />}
          </motion.div>
        ))}
      </AnimateSharedLayout>
    </div>
  );
}
