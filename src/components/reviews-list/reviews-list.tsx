import { JSX } from 'react';
import ReviewsItem from '../reviews-item/reviews-item';
import { Review, Reviews } from '../../types/reviews';

interface ReviewsListProps {
  reviews: Reviews;
}

function ReviewsList({ reviews }: ReviewsListProps): JSX.Element {
  return (
    <>
      <h2 className="reviews__title">
        Reviews &middot;<span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviews.slice(0, 10).map((review: Review) => (
          <ReviewsItem key={review.id} review={review} />
        ))}
      </ul>
    </>
  );
}

export default ReviewsList;
