import StarRating from "./starRating";

interface Review {
   rating: number;
   comment: string;
   date: string;
   reviewerName: string;
   reviewerEmail: string;
}

interface ProductReviewProps {
   reviews: Review[];
}
const ProductReviews: React.FC<ProductReviewProps> = ({ reviews }) => {
   return (
      <div className="flex flex-col gap-4">
         {reviews.map((review, index) => (
            <div
               key={index}
               className="text-xs md:text-sm lg:text-base shadow-md p-4 rounded-lg"
            >
               <StarRating rating={review.rating} />
               <p>
                  <b>{review.reviewerName}</b>
               </p>
               <p>{review.comment}</p>
               <div className="md:flex justify-between">
                  <p>{review.reviewerEmail}</p>
                  <p>{new Date(review.date).toLocaleDateString()}</p>
               </div>
            </div>
         ))}
      </div>
   );
};
export default ProductReviews;
