// ctrl +bto toggle side bar
//my first component -> function normal or arrow
// star with capital letter and return html jsx
// css import kro toh .css lgao with js u dont need the lst extension
// sometime you have to add inline styles we have to change them
// we can create a js object of inlin estyles and just pass them
// structure is same but values is diffrent so output diffrent
// there is no right or wrong they are multiple ways to do props
// destructuring se can pick the objects keys directly
import React from 'react'
import ReactDOM from 'react-dom/client'
import { books } from './books'
import Book from './Book'
// this is a named export so name must match
import './index.css'
// new video 1//
const title = "Little Blue Truck's Valentine:"
const author = 'Alice Schertle'
const img =
  'https://images-na.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/817-Vrzp+tL._AC_UL600_SR600,400_.jpg'
const firstBook = {
  author: 'Alice Schertle',
  title: "Little Blue Truck's Valentine:",
  img: 'https://images-na.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/817-Vrzp+tL._AC_UL600_SR600,400_.jpg',
}

const secondBook = {
  author: 'Alice Schertle',
  title: "Little Blue Truck's Valentine:",
  img: 'https://images-na.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81Oa54UCQoL._AC_UL300_SR300,200_.jpg',
}
// const names = ['john', 'peter', 'hello']
// const newNames = names.map((name) => {
//   console.log(name)
//   return <h1>{name}</h1>
// })

const BookList = () => {
  const someValue = 'rishi'
  const displayValue = () => {
    console.log(someValue)
  }
  const getBook = (id) => {
    const book = books.find((book) => book.id === id)
    console.log(book)
  }
  return (
    <>
      <h1>amazon best sellers</h1>
      <section className="booklist">
        {/* <EventExamples /> */}
        {/* componenets by default are independent */}
        {/* whenever   you  write a componment first see whetehr its rendering or not  */}
        {books.map((book, index) => {
          {
            /* const { img, title, author, id } = book */
          }
          {
            /* for every item we pull out the properties and pass it  */
          }
          //key prop proovide id to the elements in map in the books array  but they should be unique
          // since we are returning the book  object we  should put key here
          // in js second obj is index so u can also pass key in index but it only works in which list doesnt change but in general doesnt work
          // how to pass objects while iterating over  the list
          // we can use spread operator or just pass directly the book obj
          {
            /* return <Book img={img} title={title} author={author} key={id} /> */
          }
          {
            /* return <Book book={book} key={book.id} /> */
          }
          return (
            <Book
              {...book}
              key={book.id}
              index={index}
              displayValue={displayValue}
              getBook={getBook}
            />
          )
          //   i can just pass the book  object as a copy by spread operator
        })}
        {/* <SomeComponent someValue={someValue}  /> */}

        {/* {newNames}  new  arrays with some shtml can directly put the  map code here since it return cvalue  */}
        {/* possiblity because of map that i can iterate any data and display it with whaterver htmli like */}
        {/* {books} objects cant be directly renderred  we iterate over and pass the components  */}
        {/* {names we can render array but we could wrap in some kind of html map comes there  map creates  a new element  for eachj element by calling a function and at the end returns a new array } */}
        {/* <Book
        job="developer"
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
          saepe? Porro sapiente autem vitae sint?
        </p>
        <button>click me</button>
      </Book>
      <Book
        number={22}
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      /> */}
        {/* <Book number={22} author={author} title={title} img={img} /> */}
        {/* variable ke liye use curlies so for number  */}
      </section>
    </>
  )
}
// const EventExamples = () => {
//   const hanldeFormInput = (e) => {
//     console.log(e.target.value)
//     console.log(e.target.name)
//     console.log('handle form input')
//   }
//   const handleButtonClick = (e) => {
//     alert('handle button click')
//   }
//   const handleFormSubmision = (e) => {
//     e.preventDefault()
//     // this means  we will handle the form submission by overselves
//     console.log('form')
//   }
//   return (
//     <section>
//       <form onSubmit={handleFormSubmision}>
//         {/* default  behaviour of form is to sent those values to some url */}
//         <h2>typical form</h2>
//         <input
//           type="text"
//           name="example"
//           style={{ margin: '1rem 0' }}
//           onChange={(e) => console.log(e.target.value)}
//         />
//         <button type="submit">click me2</button>
//         {/* if  i want to detech change use onChange for click use onClick */}
//         {/* <button onClick={handleButtonClick}>click me</button> */}
//         <button onClick={() => console.log('click me')}>click me</button>
//       </form>

//       {/* type button  will not submit the form type submit will */}
//       {/* agar u will use button toh put onclick and pass the nhandlesubmist ot it and if you use onsubmit on form to make the buttpn type submit */}
//     </section>
//   )
// }
// jsx ke andar agar use {} toh usme expresssion ho jo ki value return kre na ki statement
// when u think of dynamic think of less hardcoding
// const Book = (props) => {
//   // create a diffrent functiona nd pass getbook there imean call
//   // i  can destructured directly in parameters
//   // { book: { img, title, author, children } } this when book passed as object now by spread operator book is passsed as props so just use props
//   // console.log(props)
//   // adfter destructuring in paramertsr props will not be defined so cant do console.log of props
//   const { img, title, author, displayValue, getBook, id } = props
//   const getSingleBook = () => {
//     getBook(id)
//   }

//   // const { img, title, author,children } = props // sice w epassed the book object u can destructed by props.book or directly in parameters
//   // if you do console log one boojk will have children other not
//   // props is also an object
//   // children props used in context api
//   // if i want use something beteween the component like book ke andar
//   const displayTitle = () => {
//     console.log(title)
//   }
//   // jo functionality component ki hogi woh sirf uski  khud ki hogi
//   // like display title will show title of that particular comppoent
//   return (
//     <article className="book">
//       <img src={img} alt="same" />
//       <h2>{title}</h2>
//       {/* <h4>{let x=6}</h4> // error dega */}
//       {/* {6+6} this will not give error has it gives value  */}
//       {/* <button onClick={displayTitle}>display title</button> */}
//       {/* <button onClick={getSingleBook}>display value</button> */}
//       <button onClick={() => getBook(id)}>display value</button>
//       {/* undefined  aa rha hai after passing functiom directly how to inv=oke this functionand now if i provid ethe id it works but not on cbutton click but when appilication loads  */}
//       <h4>{author.toUpperCase()}</h4>
//       {/* {children} */}
//       {/* {console.log(props)} */}
//       {/* <p>{props.job}</p> */}
//       {/* <p>{props.number}</p> */}
//     </article>
//     // props will only be displayed where they are provide3d like book 1 has job but not title one
//   )
// }
// const Image = () => {
//   return (
//     <img src="https://images-na.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/817-Vrzp+tL._AC_UL600_SR600,400_.jpg" />
//   )
// }
// const Title = () => <h2>Little Blue Truck's Valentine:</h2>
// const Author = () => {
//   return (
//     <h4 style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.5rem' }}>
//       Alice Schertle
//     </h4>
//   )
// }

//new video 1//
// way to pass data to components  using props
// every automaticalty components get props --> paramenters

// function Greeting() {
//   return (
//     <>
//       <div>
//         <h2>My first component</h2>
//         <ul>
//           <Name1 />
//           <Message />
//           <a href="#">hello world</a>
//         </ul>
//       </div>
//       <h1>outside</h1>
//     </>
//   )
// }
// const Name1 = () => <li>vaibhav sharma</li>
// const Message = () => {
//   return <h2>this is my message </h2>
// }
// const Greeting = () => {
//   return React.createElement('h2', {}, 'hello world')
// }
// above one is what happens under the hood
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList />)
// events  our app needs to respomd to events
// u can just see all the evensts no need to memeorize
// onClcik this is  the event now pass the callback fucntionn
// react me prop driling hoti ha data goes from top to bottom not the other way around
// alternative are contexta pi redux
// topmost pr A componet hai  FIR A ke andar B amd B ke andar c now i want to pass data from A to C i have to go through B
