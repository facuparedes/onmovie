import Logo from "../logo/Logo";
import NavbarMenu from "./NavbarMenu";

export default function Navbar() {
  const links = [
    { name: "Home", url: "/" },
    { name: "Films", url: "/films" },
    { name: "Series", url: "/series" },
  ];

  return (
    <nav className="bg-transparent w-full z-999 absolute">
      <div className="flex lg:container lg:mx-auto justify-between items-center h-20 py-1 px-4 md:px-6">
        <Logo />
        <NavbarMenu {...{ links }} />
      </div>
    </nav>
  );
}
