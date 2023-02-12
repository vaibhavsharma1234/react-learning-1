const Book = (props) => {
  // create a diffrent functiona nd pass getbook there imean call
  // i  can destructured directly in parameters
  // { book: { img, title, author, children } } this when book passed as object now by spread operator book is passsed as props so just use props
  // console.log(props)
  // adfter destructuring in paramertsr props will not be defined so cant do console.log of props
  const { img, title, author, displayValue, getBook, id, index } = props
  const getSingleBook = () => {
    getBook(id)
  }

  // const { img, title, author,children } = props // sice w epassed the book object u can destructed by props.book or directly in parameters
  // if you do console log one boojk will have children other not
  // props is also an object
  // children props used in context api
  // if i want use something beteween the component like book ke andar
  const displayTitle = () => {
    console.log(title)
  }
  // jo functionality component ki hogi woh sirf uski  khud ki hogi
  // like display title will show title of that particular comppoent
  return (
    <article className="book">
      <img src={img} alt="same" />
      <h2>{title}</h2>
      {/* <h4>{let x=6}</h4> // error dega */}
      {/* {6+6} this will not give error has it gives value  */}
      {/* <button onClick={displayTitle}>display title</button> */}
      {/* <button onClick={getSingleBook}>display value</button> */}
      <button onClick={() => getBook(id)}>display value</button>
      {/* undefined  aa rha hai after passing functiom directly how to inv=oke this functionand now if i provid ethe id it works but not on cbutton click but when appilication loads  */}
      <h4>{author.toUpperCase()}</h4>
      <span className="number">{`#${index + 1}`}</span>
      {/* {children} */}
      {/* {console.log(props)} */}
      {/* <p>{props.job}</p> */}
      {/* <p>{props.number}</p> */}
    </article>
    // props will only be displayed where they are provide3d like book 1 has job but not title one
  )
}
export default Book
