// // src/components/Book.js
// import { useEffect, useRef } from 'react';
// import PropTypes from 'prop-types';



// const Book = ({ pages }) => {
//   const bookRef = useRef(null);

//   useEffect(() => {
//     const book = new HTMLFlipBook(bookRef.current, {
//       width: 550,
//       height: 733,
//       size: "stretch",
//       minWidth: 315,
//       maxWidth: 1000,
//       minHeight: 420,
//       maxHeight: 1350,
//       maxShadowOpacity: 0.5,
//       showCover: true,
//       mobileScrollSupport: false,
//     });

//     return () => {
//       book.destroy();
//     };
//   }, []);

//   return (
//     <div className="book-container">
//       <div ref={bookRef}>
//         {pages.map((page, index) => (
//           <div key={index} className="page">
//             <div className="page-content">{page.content}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// Book.propTypes = {
//   pages: PropTypes.arrayOf(
//     PropTypes.shape({
//       content: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// };

// export default Book;
