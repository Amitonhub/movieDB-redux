import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import registration_wallpaper from "../../../Assets/registration-wallpaper.svg";
import google_logo from "../../../Assets/google-logo.png";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { RootState } from "../../../store";
import styles from "./SignIn.module.css";
import { SignUpData } from "../../../Types/types";
import { signUpSubmit } from "../../../Api/Api";

const SignUp = () => {
  const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();
  const { register, handleSubmit } = useForm<SignUpData>();
  const navigate = useNavigate();

  const onSubmit = async (data: SignUpData) => {
    const userId = uuidv4();
    const userData = { ...data, id: userId };

    try {
      dispatch(signUpSubmit(userData));
      console.log(userData);
      localStorage.setItem("userId", userId);
      localStorage.setItem("signedIn", "true");
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.signInMacbookAir}>
      <div className={styles.signInComponent}>
        <div className={styles.signInRectangle1} />
        <div className={styles.signInCreateAnAccount}>Create an account</div>
        <div className={styles.signInLetsGetStarted}>
          Let's get started with your 30 day free trial.
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.signInNameInput}>
            <div className={styles.signInNameInput} />
            <input
              type="text"
              id="signInNameInput"
              className={styles.signInNameInputChild}
              placeholder="Name"
              {...register("name", {
                required: true,
                pattern: /^[A-Za-z]+$/i,
              })}
              name="name"
            />
          </div>
          <div className={styles.signInEmailInput2}>
            <div className={styles.signInEmailInput2} />
            <input
              type="text"
              id="signInEmailInput"
              className={styles.signInEmailInputChild}
              placeholder="Email"
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
              })}
              name="email"
            />
          </div>
          <div className={styles.signInPasswordInput1}>
            <div className={styles.signInNameInputChild} />
            <input
              type="password"
              id="signInPasswordInput"
              className={styles.signInPassword}
              placeholder="Password"
              {...register("password", {
                required: true,
                minLength: 8,
              })}
              name="password"
            />
          </div>
          <div className={styles.signInSubmitButton1}>
            <button className={styles.signInSubmit}>
              <span className={styles.signInCreateAccount}>Create account</span>
            </button>
          </div>
        </form>
        <div className={styles.signInGoogleButton}>
          <button className={styles.signInGoogleButtonItem}>
            <img className={styles.signInGoogleIcon} alt="" src={google_logo} />
            <span className={styles.signInGoogleText}>Sign up with Google</span>
          </button>
        </div>
        <div className={styles.signInAlreadyHaveAnContainer}>
          <span>
            <span>Already have an account ?</span>
            <span className={styles.signInLogIn}>{` `}</span>
          </span>
          <span className={styles.signInLogIn}>
            <Link className={styles.signInLogIn1} to={"/login"}>
              Log in
            </Link>
          </span>
        </div>
        <img
          className={styles.signInComponentIcon}
          alt="registration-wallpaper"
          src={registration_wallpaper}
        />
      </div>
    </div>
  );
};

export default SignUp;
