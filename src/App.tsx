import styles from "./App.module.css";
import { Sidebar } from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className={styles.App}>
      <Sidebar />
    </div>
  );
}

export default App;
