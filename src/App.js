import "./output.css"

const App = () => {
  return (
    <div className="bg-black">
      <header class="p-3 text-white">
        <div class="">
        </div>
        <div class="w-full">
            <ul class="flex justify-center gap-x-20">
                <li class="list-none">Chalo bhaijan</li>
                <li class="list-none">Socials</li>
                <li class="list-none">About Us</li>
            </ul>
        </div>
      </header>
      <main class="w-[100vw]">
        <div class="px-32 text-white">
            <div class="w-full grid grid-cols-1 place-items-center gap-5">
                <h1 class="mt-14">University College of Business Studies</h1>
                <div class="flex m-auto gap-5">
                    <div class="">
                        <p>HPU SITE</p>
                    </div>
                    <div class="">
                        <p>HPU SITE</p>
                    </div>
                </div>
                <p>(Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidun)</p>
            </div>
            <div class="w-2/5 mt-16 ml-5 grid grid-cols-1 gap-y-3 place-content-start">
                <p>A <span>DigitCrib</span> Solution</p>
                <p>The UCBS library is now available online</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dolor earum nihil quibusdam fugit voluptate voluptates inventore! Rerum tempore fugit debitis ut consectetur, illum sunt quis quidem! Inventore omnis temporibus commodi</p>
                <button class="text-left bg-white w-fit py-1.5 px-4 rounded-md text-black">Read More</button>
            </div>
            <div class="flex mt-7 items-center">
                <div class="bg-red-700 w-1/4 h-11 py-2 px-5 text-white flex justify-between items-center">
                    <span class="">Announcement</span>
                    <div class="flex gap-5">
                        <span><i class="fa-solid fa-chevron-left"></i></span>
                        <span><i class="fa fa-pause"></i></span>
                        <span><i class="fa-solid fa-chevron-right"></i></span>
                    </div>
                </div>
                <div class="bg-white w-3/4 h-10 text-right py-2 px-5 rounded-r-full">
                    <button>View All <i class="fa-solid fa-arrow-right-long ml-1"></i></button>
                </div>
            </div>
        </div>
      </main>
    </div>
  );
}

export default App;