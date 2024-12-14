import { notFound } from "next/navigation";
import { Metadata } from "next";
import { resolve } from "path";

type Props = {
  params: {
    productId: string;
    reviewId: string;
  };
};

export let generateMetaData=({params}:Props):Metadata=>{

 return {
  title: `Review ${params.reviewId} `
}
}
export default function ReviewId({ params }: Props) {
  if (parseInt(params?.reviewId) > 100) notFound();
  return (
    <h1>
      Review Id: {params.reviewId} for Product {params.productId}
    </h1>
  );
}
