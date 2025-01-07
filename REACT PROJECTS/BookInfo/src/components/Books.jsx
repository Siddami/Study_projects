import data from '../../data.json'
import { Card } from './Card';

export const Books = () => {
  const BookData = data;

  return (
    <div className='books'>
        {BookData.map((book, index) => (
            <Card 
                key = {index}
                title = {book.title}
                author = {book.author}
                description = {book.description}
                date = {book.date}
                imageUrl = {book.imageUrl}
            />
        ))}
    </div>
  )
}
