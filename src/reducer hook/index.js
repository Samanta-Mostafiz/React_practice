import { type } from "@testing-library/user-event/dist/type";
import React, { useReducer, useState } from "react";

const booksData = [
  {
    id: 1,
    name: "English",
  },
  {
    id: 2,
    name: "Bangla",
  },
  {
    id: 3,
    name: "Math",
  },
];

// using useReducer to get all simillar state in one//
const Modal = ({ modalText }) => {
  return <p>{modalText}</p>;
};

// reducer function//
const reducer = (state, action) => {
  // two types of action action.type,action.payload
  if ((action.type = "ADD")) {
    const allBook = [...state.books, action.payload];
    return {
      ...state,
      books: allBook,
      isModalOpen: true,
      modalText: "added",
    };
  }
  if ((action.type = "remove")) {
    const filtered=[...state.books].filter((book)=>book.id!==action.payload);
    return{
      ...state,
      books:filtered,
      isModalOpen:true,
      modalText:"book is removed"
    }
  }
  return state;
};



const UseReducer = () => {
  const [bookState, dispatch] = useReducer(reducer, {
    books: booksData,
    isModalOpen: false,
    modalText: "",
  });
  const [bookName, setAddBook] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(bookName);
    const newBook = { id: new Date().getTime().toString(), name: bookName };
    dispatch({ type: "ADD", payload: newBook });
    setAddBook("");
    
    // const handleRemove=(id)=>{
    //   alert(id);
    //   dispatch({type:"remove",payload:id})
    // }

    // // connect and display the added book name
    // setBooks((prev) => {
    //   const newBook = { id: new Date().getTime().toString(), name: bookName };
    //   return [...prev, newBook];
    // });
    // setModalIsOpen(true);
    // setModalText("book is added");
  };
  return (
    <div>
      <h1 style={{ textAlign: "center", backgroundColor: "greenYellow" }}>
        use reducer hook learning
      </h1>
      <p>Book list</p>

      {/* book name add korte  */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="bookname"
          value={bookName}
          //   inline handle korsi value ta tahole alada function lageni submit clicked hole handle submit function er maddhome change show hobe
          onChange={(e) => {
            setAddBook(e.target.value);
          }}
        />
        <button type="submit">add book</button>
      </form>
      {bookState.isModalOpen && <Modal modalText={bookState.modalText} />}

      {/* mapped the bookdata array for displaying the book name */}
      {bookState.books.map((book) => {
        const { id, name } = book;
        return (
          <li key={id}>
            {name}
            {/* <button
              onClick={() => {
                removeBook(id);
              }}
            >
              remove
            </button> */}
          </li>
        );
      })}
    </div>
  );
};

// traditional method of handling state//

// // to access the modal state
// const Modal=({modalText})=>{
// return <p>{modalText}</p>
// };

// const UseReducer = () => {
//   const [books, setBooks] = useState(booksData);
//   const [bookName, setAddBook] = useState("");
//   const[isModalOpen,setModalIsOpen]=useState(false);
//   const[modalText,setModalText]=useState("")

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(bookName);

//     // connect and display the added book name
//     setBooks((prev)=>{
//       const newBook={id: new Date().getTime().toString(),name:bookName};
//        return [...prev,newBook];
//     })
//     setModalIsOpen(true);
//     setModalText("book is added");
//   };
//   return (
//     <div>
//       <h1 style={{ textAlign: "center", backgroundColor: "greenYellow" }}>
//         use reducer hook learning
//       </h1>
//       <p>Book list</p>

//       {/* book name add korte  */}
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="bookname"
//           value={bookName}
//         //   inline handle korsi value ta tahole alada function lageni submit clicked hole handle submit function er maddhome change show hobe
//           onChange={(e) => {
//             setAddBook(e.target.value);
//           }}
//         />
//         <button type="submit">add book</button>
//       </form>
//       {isModalOpen && <Modal modalText={modalText}/>}

//       {/* mapped the bookdata array for displaying the book name */}
//       {books.map((book) => {
//         const { id, name } = book;
//         return <li key={id}>{name}</li>;
//       })}
//     </div>
//   );
// };

export default UseReducer;
