import { NavLink } from "react-router";

type NavLinkButtonProps = {
  to: string,
  children: React.ReactNode;
}

const NavLinkButton = ({ to, children }: NavLinkButtonProps) => {
  return (
    <NavLink className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white" to={to}>
      {children}
    </NavLink>
  );
};

export default NavLinkButton;
