import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";
import AuthcontextProvider from "./contexts/AuthContext";
import ThemeContextProvider from "./contexts/ThemeContext";

//sum comment
function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthcontextProvider>
          <Navbar />
          <BookList />
          <ThemeToggle />
        </AuthcontextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
