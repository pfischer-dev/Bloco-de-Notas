import { Header } from "./components/Header";
import { Note } from "./components/Note"
import { Footer } from "./components/Footer";
import { notes } from "./notes.js";

export function App() {
  return (
    <div>
      <Header />
      {notes.map(noteItem => {
        return (
          <Note key={noteItem.key} title={noteItem.title} content={noteItem.content} />
        )
      })}
      <Footer />
    </div>
  )
}
