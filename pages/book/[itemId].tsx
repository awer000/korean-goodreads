import { NextPage } from 'next';
import { informationMock } from '../../mock/bookInfoMock';
import './[itemId].scss';

const IndexPage: NextPage = () => {
  const bookInfo = informationMock.item[0];
  const { author, pubDate, publisher, title, description, isbn13, categoryName } = bookInfo;
  const [bookTitle, bookSubTitle] = title.split(' - ');
  return (
    <div className="Book-id">
      <img className="book-cover" src={bookInfo.cover} />
      <div className="book-information">
        <div className="book-title">{bookTitle}</div>
        <div className="book-subTitle">{bookSubTitle}</div>
        <div className="book-pub-information">
          {author} {publisher} {pubDate}
        </div>
        <div className="book-isbn">ISBN: {isbn13}</div>
        <div className="book-category">
          <a>주제 분류</a>
          {categoryName}
        </div>
        <div className="book-description">
          <a>책 소개</a>
          {description}
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
