"use client"
import Image from "next/image";
import { useEffect } from "react";
//import { useInView } from "react-intersection-observer";
import { useState, useRef } from "react";
import { fetchAnime } from "@/app/action";

let page = 2;

export type AnimeCard = JSX.Element;

function LoadMore() {
 // const {ref, inView} = useInView();
  const targetRef = useRef(null)
  const [intersecting, setIntersecting] = useState(false)

  const [data, setData] = useState<AnimeCard[]>([])

  useEffect(()=>{
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    }

    const observer = new IntersectionObserver(([entry])=>{
      setIntersecting(entry.isIntersecting)
    },options)

    if(targetRef.current){
      observer.observe(targetRef.current)
    }
    if(intersecting){
      fetchAnime(page).then(res=>setData([...data, ...res]))
      page++;
    }

    return ()=>observer.disconnect()
  },[intersecting,data])

  return (
    <>
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data}
      </section>
      <section className="flex justify-center items-center w-full" ref={targetRef}>
        <div>
          <Image
            src="./spinner.svg"
            alt="spinner"
            width={56}
            height={56}
            className="object-contain"
          />
        </div>
      </section>
    </>
  );
}

export default LoadMore;
