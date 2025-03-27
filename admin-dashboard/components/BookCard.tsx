import Link from 'next/link'
import React from 'react'
import BookCover from './BookCover'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { Button } from './ui/button'

const BookCard = ({
    id,
    title,
    genre,
    cover,
    isLoanedBook = false,
    color }: Book) => (
    <li className={cn(isLoanedBook && 'sm:w-52 w-full')}>
        <Link href={`/book/${id}`} className={cn(isLoanedBook && 'w-full flex flex-col items-center')}>
            <BookCover coverColor={color} coverImage={cover} variant='wide' />
            <div className={cn(!isLoanedBook && 'sm-max-w-40 max-w-28')}>
                <p className='mt-2 line-clamp-1 font-bold text-base text-white sm:text-lg'>{title}</p>
                <span className='mt-1 line-clamp-1 italic sm:text-base text-[#D6E0FF] text-sm'>{genre}</span>
            </div>
            {isLoanedBook && (
                <div className='mt-3 w-full'>
                    <div className=' flex flex-row items-center gap-1 max-sm:justify-center'>
                        <Image src='/icons/calendar.svg' alt='calender' width={18} height={18}
                            className='object-contain'
                        />
                        <p className='text-[#D6E0FF]'>9 Days left to return</p>

                    </div>
                    <Button className='bg-[#F8F8FF] mt-3 min-h-14 w-full bebas-neue text-base text-[#E7C9A5]'>Download receipt</Button>
                </div>
            )}
        </Link>
    </li>
)
export default BookCard