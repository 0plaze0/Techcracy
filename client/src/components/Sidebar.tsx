import { Link } from "react-router-dom";
import { navigation } from "../constants";

const Sidebar = () => {
  return (
    <nav className="flex flex-col justify-center gap-2 rounded border-solid border-2 border-black px-2 py-2">
      {navigation.map((link) => (
        <li
          key={link.title}
          className="list-none flex justify-center align-center font-semibold hover:bg-slate-400"
        >
          <Link to={link.path}>{link.title}</Link>
          <hr />
        </li>
      ))}
    </nav>
  );
};

export default Sidebar;
