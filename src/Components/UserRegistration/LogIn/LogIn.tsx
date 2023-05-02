import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import registration_wallpaper from "../../../Assets/registration-wallpaper.svg";
import google_logo from "../../../Assets/google-logo.png";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { logIn } from "../../../Actions/UserRegistrationActions/LogInAction";
import styles from "./LogIn.module.css";
import { LogInData } from "../../../Types/types";
import { RootState } from "../../../store";

const LogIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<LogInData>();
  const { isSignedIn } = useSelector((state: RootState) => state.logIn);
  const trueValue = "true";

  const onSubmit = async (data: LogInData) => {
    try {
      const url = "https://6448e4bfb88a78a8f0f6d394.mockapi.io/users";
      const response = await axios.get(url);
      const users = response.data;
      const matchedUser = users.find(
        (user: LogInData) =>
          user.email === data.email && user.password === data.password
      );

      if (matchedUser) {
        localStorage.setItem("signedIn", trueValue);
        localStorage.setItem("user", JSON.stringify(matchedUser));
        localStorage.setItem("userId", matchedUser.userid);

        dispatch(logIn(matchedUser));
        navigate("/home");
      } else {
        alert("Invalid email or password.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (isSignedIn) {
    navigate("/home");
  }

  return (
    <div className={styles.logInBody}>
      <div className={styles.componentLogIn}>
        <img
          className={styles.component1Icon1}
          alt=""
          src={registration_wallpaper}
        />
        <div className={styles.rectangle2} />
        <div className={styles.login}>Login</div>
        <div className={styles.welcomeBackPlease}>
          Welcome back Please enter your details .
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.emailInput1}>
            <div className={styles.emailInputLogin} />
            <input
              type="text"
              id="email-login"
              className={styles.emailInputLogin}
              placeholder="Email"
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
              })}
              name="email"
            />
          </div>
          <div className={styles.passwordInput1}>
            <div className={styles.emailInputLogin} />
            <input
              type="password"
              id="password-login"
              className={styles.emailInputLogin}
              placeholder="Password"
              {...register("password", {
                required: true,
                minLength: 8,
              })}
              name="password"
            />
          </div>
          <button className={styles.submitButton1}>
            <button className={styles.submitButtonItem}>
              <span className={styles.login1}>Log In</span>
            </button>
          </button>
        </form>

        <div className={styles.googleButton1}>
          <button className={styles.googleButtonItem}>
            <img
              className={styles.pxGoogleGLogo1Icon1}
              alt=""
              src={google_logo}
            />
            <span className={styles.loginWithGoogle}>Login with Google</span>
          </button>
        </div>
        <div className={styles.dontHaveAnContainer}>
          <span>
            <span>Don't have an account?</span>
            <span className={styles.signUp}>{` `}</span>
          </span>
          <span className={styles.signUp}>
            <Link className={styles.logInSignIn} to={"/"}>
              Sign Up
            </Link>
          </span>
        </div>

        <div className={styles.forgotPassword}>Forgot password ?</div>
      </div>
    </div>
  );
};

export default LogIn;
