import { notFound } from "next/navigation";

export default function ReviewId({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) {
  if (parseInt(params?.reviewId) > 100)  notFound();
  return (
    <h1>
      Review Id: {params.reviewId} for Product {params.productId}
    </h1>
  );
}
