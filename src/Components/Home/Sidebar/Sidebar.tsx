import { Link, useNavigate } from "react-router-dom";
import indi_title from "../../../Assets/Indi-title.svg";
import styles from "./Sidebar.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setSearchQuery,
  toggleLogout,
} from "../../../Actions/SidebarActions/SidebarActions";
import { logOutAction } from "../../../Actions/UserRegistrationActions/LogInAction";

interface SidebarProps {
  onSearch: (query: string) => void;
}

const Sidebar = ({ onSearch }: SidebarProps) => {
  const dispatch = useDispatch();
  const { searchQuery, showLogout } = useSelector(
    (state: any) => state.sidebar
  );
  const navigate = useNavigate();

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    dispatch(setSearchQuery(value));
    onSearch(value);
  };

  const handleUserIconClick = () => {
    dispatch(toggleLogout());
  };

  function handleIndiLogoClick() {
    navigate("/home");
  }

  const logOut = () => {
    localStorage.setItem("signedIn", "false");
    localStorage.removeItem("user");
    dispatch(logOutAction())
    navigate("/login");
  };

  return (
    <div className={styles.sidebarMenu}>
      <div className={styles.menuStrip} />
      <img
        className={styles.indiLogoIcon}
        alt=""
        src={indi_title}
        onClick={handleIndiLogoClick}
      />
      <div className={styles.iconDivWrap}>
        <div className={styles.menuIcoDesktop}>
          <div className={styles.searchBox}>
            <input
              className={styles.searchText}
              type="text"
              placeholder="Search Anything"
              value={searchQuery}
              onChange={handleSearch}
            />
            <div className={styles.searchBtn}>
              <i className={`${styles.btn} fas fa-search`}></i>
            </div>
          </div>
        </div>
        <div className={styles.menuIcoDesktop1}>
          <div className={styles.btn}>
            <i className={`${styles.btn} fa-solid fa-film menu-film-icon`}></i>
          </div>
        </div>
        <div className={styles.menuIcoDesktop2}>
          <div className={styles.btn} title="Wishlist">
            <Link to={"/wishlist"}>
              <i className={`${styles.btn} fa-regular fa-star`}></i>
            </Link>
          </div>
        </div>
        <div className={styles.menuIcoDesktop3}>
          <div
            className={styles.btn}
            onClick={handleUserIconClick}
            title="Account"
          >
            <i className={`${styles.btn} fa-regular fa-circle-user`}></i>
          </div>
          {showLogout && (
            <div className={styles.logOut} onClick={logOut} title="Log Out">
              <i
                className={`${styles.logOutBtn} fa-solid fa-arrow-right-from-bracket`}
              ></i>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
