import React from 'react'
import BookCard from './BookCard';

interface Props {
  title: string;
  books: Book[];
  containerClassName: string
}

const BookList = ({ title, books, containerClassName }: Props) => {
  return (
     <section className= {containerClassName}>
      <h2 className='bebas-neue text-4xl text-[#D6E0FF]'>{title}</h2>
      <ul className='mt-10 flex flex-wrap gap-5 sm:justify-between sm:gap-10'>
        {books.map(book => (
          <BookCard {...book} key={book.title}/>
        ))}
      </ul>
     </section>
  )
}

export default BookList