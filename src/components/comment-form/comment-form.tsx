import { JSX, useState, ChangeEvent, FormEvent } from 'react';
import Rating from '../rating/rating';
import Textarea from '../textarea/textarea';

function CommentForm(): JSX.Element {
  const [rating, setRating] = useState<number | null>(null);
  const [review, setReview] = useState<string>('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // eslint-disable-next-line no-console
    console.log('handleSubmit', {rating, review});
  };

  const isSubmitDisabled = rating === null || review.length < 50;

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <Rating rating={rating} onChange={setRating} />
      <Textarea
        value={review}
        onChange={(event: ChangeEvent<HTMLTextAreaElement>) => setReview(event.target.value)}
        placeholder="Tell how was your stay, what you like and what can be improved"
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set
          <span className="reviews__star">rating</span> and describe your stay with
          at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isSubmitDisabled}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default CommentForm;