import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, ListMusic, Laptop2, Volume, Maximize2 } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
  <div className="h-screen flex flex-col">
  <div className="flex flex-1">
    <aside className="w-72 bg-zinc-950 p-6">
      <div className='flex items-center gap-2'>
        <div className='w-3 h-3 bg-red-500 rounded-full' />
        <div className='w-3 h-3 bg-yellow-500 rounded-full' />
        <div className='w-3 h-3 bg-green-500 rounded-full' />
      </div>

     <nav className='space-y-5 mt-10'>
      <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
        <HomeIcon />
        Home
      </a>
      <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
        <Search />
        Search
      </a>
      <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
        <Library />
        Your Library
      </a>
     </nav>

     <nav className='mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3'>
        <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'> 日本の歌 </a>
        <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'> 2th & 3th gen </a>
        <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'> to the hellfire </a>
        <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'> Khip hop and R&B </a>
        <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'> Chill and study</a>
        <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'> Angostura </a>
        <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'> Hip hop and Black </a>
        <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'> Agust D and RM </a>
     </nav>

    </aside>
    <main className="flex-1 p-6">
      <div className='flex items-center gap-4'>
        <button className='rounded-full bg-black/40 p-1'>
          <ChevronLeft />
        </button>
        <button className='rounded-full bg-black/40 p-1'>
          <ChevronRight />
        </button>
      </div>
      <h1 className='font-semibold text-3xl mt-10'> Good Night </h1>
      <div className='grid grid-cols-3 gap-4 mt-4'>
      <a href='#' className='bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors' >
            <Image src='/album.png' width={72} height={72} alt='album from the gazette' />
            <strong> DOGMA </strong>
            <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible'>
              <Play />
            </button>
           </a>
           <a href='#' className='bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors' >
            <Image src='/album.png' width={72} height={72} alt='album from the gazette' />
            <strong> DOGMA </strong>
            <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible'>
              <Play />
            </button>
           </a>
           <a href='#' className='bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors' >
            <Image src='/album.png' width={72} height={72} alt='album from the gazette' />
            <strong> DOGMA </strong>
            <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible'>
              <Play />
            </button>
           </a>
           <a href='#' className='bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors' >
            <Image src='/album.png' width={72} height={72} alt='album from the gazette' />
            <strong> DOGMA </strong>
            <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible'>
              <Play />
            </button>
           </a>
           <a href='#' className='bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors' >
            <Image src='/album.png' width={72} height={72} alt='album from the gazette' />
            <strong> DOGMA </strong>
            <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible'>
              <Play />
            </button>
           </a>
           <a href='#' className='bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors' >
            <Image src='/album.png' width={72} height={72} alt='album from the gazette' />
            <strong> DOGMA </strong>
            <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible'>
              <Play />
            </button>
           </a> 
      </div>

      <h2 className='font-semibold text-3xl mt-10'> Made for Gabriel Israel </h2>

      <div className='grid grid-cols-5 mt-4'>
        <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 mr-3 hover:bg-white/10'>
        <Image src='/album.png' className='w-full' width={104} height={104} alt='album from the gazette' />
        <strong className='font-semibold'>Daly mix 1</strong>
        <span className='text-sm text-zinc-400 '>the GazettE, Exo and more</span>
        </a>
        <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 mr-3 hover:bg-white/10'>
        <Image src='/album.png' className='w-full' width={104} height={104} alt='album from the gazette' />
        <strong className='font-semibold'>Daly mix 2</strong>
        <span className='text-sm text-zinc-400 '>the GazettE, Exo and more</span>
        </a>
        <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 mr-3 hover:bg-white/10'>
        <Image src='/album.png' className='w-full' width={104} height={104} alt='album from the gazette' />
        <strong className='font-semibold'>Daly mix 3</strong>
        <span className='text-sm text-zinc-400 '>the GazettE, Exo and more</span>
        </a>
        <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 mr-3 hover:bg-white/10'>
        <Image src='/album.png' className='w-full' width={104} height={104} alt='album from the gazette' />
        <strong className='font-semibold'>Daly mix 4</strong>
        <span className='text-sm text-zinc-400 '>the GazettE, Exo and more</span>
        </a>
      </div>
    </main>
  </div>
  
  <footer className="bg-zinc-800 border-zinc-700 px-4 py-2 flex items-center justify-between fixed bottom-0 w-full">
    <div className='flex items-center gap-2'>
    <Image src='/album.png' width={48} height={48} alt='album from the gazette' />
    <div className='flex flex-col'>
    <strong className='font-normal'>BLEMISH</strong>
    <span className='text-xs text-zinc-400'>the GazettE</span>
    </div>
    </div>
    <div className='flex flex-col items-center gap-2'>
      <div className='flex items-center gap-5'>
        <Shuffle size={16} className='text-zinc-200' />
        <SkipBack size={16} className='text-zinc-200' />
        <button className='w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black'>
            <Play />
          </button>
          <SkipForward size={16} className='text-zinc-200' />
          <Repeat size={16} className='text-green-700' />
      </div>
      <div className='flex items-center gap-2'>
       <span className='text-sm text-zinc-400'>0:58</span>
       <div className='h-1 rounded-full w-96 bg-zinc-600'>
        <div className='bg-zinc-200 w-40 h-1 rounded-full'></div>
       </div>
       <span className='text-sm text-zinc-400'>3:25</span>
      </div>
    </div>
    <div className='flex items-center gap-4'>
    <Mic2 size={16} />
    <ListMusic size={16} />
    <Laptop2 size={16} />
    <div className='flex items-center gap-2'>
      <Volume size={16} />
      <div className='h-1 rounded-full w-24 bg-zinc-600'>
        <div className='bg-zinc-200 w-10 h-1 rounded-full'></div>
       </div>
    </div>
    <Maximize2 size={16} />
    </div>
  </footer>
  </div>
  )
}
