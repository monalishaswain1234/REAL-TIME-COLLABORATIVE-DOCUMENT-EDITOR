// import { useEffect, useRef } from 'react';
// import { io } from 'socket.io-client';

// const socket = io("http://localhost:4000");

// function App() {
//   const editorRef = useRef();

//   useEffect(() => {
//     socket.on("load-document", (data) => {
//       editorRef.current.innerText = data;
//     });

//     socket.on("receive-changes", (delta) => {
//       editorRef.current.innerText = delta;
//     });

//     const interval = setInterval(() => {
//       socket.emit("save-document", editorRef.current.innerText);
//     }, 2000);

//     return () => clearInterval(interval);
//   }, []);

//   const handleChange = () => {
//     const content = editorRef.current.innerText;
//     socket.emit("send-changes", content);
//   };

//   return (
//     <div className="container">
//       <h2>Real-Time Collaborative Editor</h2>
//       <div
//         ref={editorRef}
//         contentEditable
//         onInput={handleChange}
//         style={{
//           border: "1px solid gray",
//           padding: "10px",
//           height: "300px",
//           overflowY: "scroll",
//         }}
//       ></div>
//     </div>
//   );
// }

// export default App;
