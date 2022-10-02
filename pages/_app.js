import Layuot from "../components/Layuot";
import "../styles/globals.css";
import DataProvider from "../Store/GloBalStore";

function MyApp({ Component, pageProps }) {
  return (
    <DataProvider>
      <Layuot>
        <Component {...pageProps} />
      </Layuot>
    </DataProvider>
  );
}

export default MyApp;
