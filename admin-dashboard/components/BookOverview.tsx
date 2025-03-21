import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import BookCover from './BookCover'

const BookOverview =
  ({ title,
    author,
    genre,
    description,
    color,
    cover,
    rating,
    total_copies,
    available_copies }: Book) => {

    return (
      <section className='book-overview flex flex-col items-center gap-12'>
        <div className='relative flex flex-1 justify-center'>
          <div className='relative'>
            <BookCover
              variant='wide'
              className='z-10'
              coverColor={color}
              coverImage={cover}
            />
            <div className='absolute left-16 top-10 rotate-12 opacity-40 max-sm:hidden'>
              <BookCover variant='wide' coverColor={color} coverImage={cover} />
            </div>
          </div>
        </div>
        <div className='flex flex-1 flex-col gap-5'>
          <h1>{title}</h1>

          <div className='mt-7 flex flex-row flex-wrap gap-4 text-xl text-[#D6E0FF]'>
            <p>by <span className='font-semibold text-[#EED1AC]'>{author}</span></p>
            <p>category: <span className='font-semibold text-[#EED1AC]'>{genre}</span></p>

            <div className='flex flex-row gap-1'>
              <Image src='/icons/star.svg' alt='star' width={22} height={22} />
              <p>{rating}</p>
            </div>
            <div className='flex gap-4'>
              <p>Total Books: <span className='font-semibold text-[#EED1AC]'>{total_copies}</span></p>
              <p>Available Books: <span className='font-semibold text-[#EED1AC]'>{available_copies}</span></p>
            </div>
            <p className='mt-7 flex flex-row flex-wrap gap-4 text-xl text-[#D6E0FF];'>{description}</p>
          </div>
          <Button className='mt-4 min-h-14 w-fit bg-[#EED1AC] text-[#16191E] hover:bg-primary/90 max-md:w-full'>
            <Image src='/icons/book.svg' alt='button' width={20} height={20} />
            <p className='bebas-neue text-xl text-[#16191E]'>Borrow</p>
          </Button>
        </div>
        
      </section>
    )
  }

export default BookOverview