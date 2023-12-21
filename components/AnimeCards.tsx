import { fetchAnime, searchAnime } from "@/app/action"
import Search from "./Search"
import LoadMore from "./LoadMore"


type Prop = {
    search: string
}

const AnimeCards = async ({search}: Prop) => {

    let data = await fetchAnime(1)
    if (search){
        data = searchAnime(search)
    }
  return (
    <>
        <h2 className="text-3xl text-white font-bold">{search?`Search: ${search}`:"Explore Anime"}</h2>
        <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data}
        </section>
        {search ? <LoadMore search={search} /> : <LoadMore search={''}/>}
    </>
  )
}

export default AnimeCards