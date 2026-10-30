import { useState } from "react";
import "./App.css";
// import { MyAlert } from "./components/MyAlert/MyAlert";
// import { TodoState } from "./components/ToDo/TodoState";
import { TodoReducer } from "./components/ToDo/TodoReducer";
import { UserList } from "./components/UserList";
// import { Header } from "./components/Header/Header";
// import { Main } from "./components/mainC/Main"
// import { ThemeContext } from "./context/ThemeContext";
// import { UserContext } from "./context/UserContext";
// import { AuthContext } from "./context/AuthContext";
// import { Counter } from "./components/counter/Counter";
// import { Products } from "./components/products/Products";
// import { WindowWidth } from "./components/WindowWidth";
// import { PrevCount } from "./components/counter/PrevCount";
// import { ProfileCard } from "./components/ui-lib/profile-card/ProfileCard";
// import avatarImg from "./components/ui-lib/avatar_img.jpg";
//import { CounterTwo } from "./components/counter/CounterTwo";
// import { useSelector, useDispatch } from "react-redux";
// import { toggleTheme } from "./state/themeSlice";
// import { increment, decrement, incrementByAmount } from "./state/counterSlice";
//import { Tabs } from "./components/Tabs/Tabs";
// import { ControlledContactForm } from "./components/ControlledContactForm/ControlledContactForm";
// import { InfiniteScrollList } from "./components/InfiniteScroll/InfiniteScrollList";
// import { ContextApiEx } from "./components/ContextApiEx";
// import { Accordion } from "./components/Accordion/Accordion";
// import { SignupForm } from "./components/SignupForm/SignupForm";

function App() {
  // const user = {
  //   // imgSrc: avatarImg,
  //   name: "Debjani Ghosh",
  //   isAdmin: true,
  //   jobRole: "Senior Software Engineer at Microsoft India",
  //   skills: ["Angular", "RxjS", "TypeScript"],
  // };
  // const [theme, setTheme] = useState("dark");
  // function toggleTheme() {
  //   setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  // }
  // const [user, setUser] = useState(null);

  // function login() {
  //   setUser({
  //     name: "Debjani",
  //     isAdmin: true,
  //   });
  // }

  // function logout() {
  //   setUser(null);
  // }

  // const mode = useSelector((state) => state.theme.mode);
  // const count = useSelector((state) => state.counter.value);

  // const dispatch = useDispatch();

  const [isAlertOpen, setAlertOpen] = useState(true);
  const handleAlert = () => {
    setAlertOpen(true);
  };
  const closeAlert = () => {
    setAlertOpen(false);
  };
  return (
    <>
      <div>
        {/* <div>
          {mode}
          <button onClick={() => dispatch(toggleTheme())}>Change Theme</button>
        </div>
        <div>
          {count}
          <button onClick={() => dispatch(increment())}>Increment count</button>
          <button onClick={() => dispatch(decrement())}>Decrement count</button>
          <button onClick={() => dispatch(incrementByAmount(10))}>
            Increment by 10
          </button>
        </div> */}
        {/* <button onClick={handleAlert}>Show Alert</button>
        {isAlertOpen && (
          <MyAlert
            title="This is an alert!"
            type="error"
            onClose={() => closeAlert()}
          >
            <p>This needs your attention.</p>
          </MyAlert>
        )} */}
        {/* <ControlledContactForm /> */}
        {/* <InfiniteScrollList /> */}
        {/* <ContextApiEx /> */}
        {/* <Accordion /> */}
        {/* <SignupForm /> */}
      </div>

      {/* <Counter />
      <WindowWidth /> */}
      {/* <Products />
      <PrevCount /> */}
      {/* <ProfileCard user={user} /> */}
      {/* <CounterTwo /> */}

      {/* <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <Header />
        <Main />
      </ThemeContext.Provider> */}
      {/* <AuthContext.Provider value={{ user, login, logout }}>
        <Header />
        <Main />
      </AuthContext.Provider> */}
      {/* <TodoState /> */}
      <TodoReducer />
      <UserList />
    </>
  );
}

export default App;
