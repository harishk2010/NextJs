import Link from "next/link";

export default function Home(){
  return (
    <>
    <h1>Hello world</h1>

    <h2><Link href={"/blog"}>Blog</Link></h2>
    <h2><Link href={"/products"}>Products</Link></h2>
    </>
  )
}