import "../styles/globals.css";
import { Provider } from "react-redux";
import { store } from "../src/app/store";
import SideBar from "../components/SideBar";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <SideBar />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
