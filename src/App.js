import BookList from "./components/BookList";
import EditingModal from "./components/EditingModal";
import Modal from "./components/Modal";
import { useSelector } from 'react-redux'
function App() {
  const modal = useSelector((state) => state.modal.value)
  const editModal = useSelector((state) => state.editModal.value)
  const book = useSelector((state)=> state.book.value.payload)
  return (
   <div>
    <BookList/>
    {modal?
    <Modal/>:null}
 {editModal?   <EditingModal book={book}/>:null}
   </div>
  );
}

export default App;
