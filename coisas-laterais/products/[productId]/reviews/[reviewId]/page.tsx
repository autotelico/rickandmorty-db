import ReviewNotFound from "./not-found";

export default function Reviews({ params }: {
    params: {reviewId: string, productId: string}
}) {
    if (parseInt(params.reviewId) > 1000) {
        return ReviewNotFound()
    }
  return <h1>Review ID {params.reviewId} for Product {params.productId}</h1>;
}
