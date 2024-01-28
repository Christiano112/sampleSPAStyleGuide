// Anything exported from this file is importable by other in-browser modules.

// Importing the CSS file this way so the CSS is not treated as a module but as a global CSS file.
import "./styles/global.css?modules=false";

// import components
import AppButton from "./components/button";
import AppInput from "./components/input";

// import functions
import { fetchUsers } from "./services/users";

export { AppButton, AppInput, fetchUsers };
