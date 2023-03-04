import CustomLink from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <div>
      <div className="flex justify-between items-center p-[-15px ] bg-[#434344]">
        <div className="flex justify-center items-center md:order-2">
          <div id="On" className="hamburger md:hidden  ">
            <div className="line h-1 w-6 my-2  bg-black" />
            <div className="line h-1 w-6 my-2  bg-black" />
            <div className="line h-1 w-6 my-2  bg-black" />
          </div>
        </div>

        <div className=" md:order-1 flex gap-3 hover:text-red-200  cursor-pointer">
          <Image src="/Icon/R.png " width="120" height="200" />
        </div>
        <div className="order-3 flex gap-3 rounded-full">
          <div className="hover:bg-red-200  cursor-pointer">
            <Image
              src="/Icon/Search.png"
              width={20}
              height={20}
              text-white
            ></Image>
          </div>
          <div className="bg-white rounded-full hover:bg-red-200  cursor-pointer">
            <Image src="/Icon/User.png " width={30} height={30}></Image>
          </div>
        </div>
        {/* navbar start */}
        <div className="logo md:order-1 flex justify-center item-center">
          <div className="text-md gap-5  feature absolute  text-white md:-translate-x-0 md:static md:w-auto inset-0 md:flex md:items-center md:mx-10 md:space-x-3  -translate-x-96">
            <div className="How It Work hover:text-red-200  cursor-pointer">
              How It Work
            </div>
            <div className="Apply hover:text-red-200   hover:cursor-pointer">
              Apply
            </div>
            <div className="Available Program hover:text-red-200  cursor-pointer">
              Available Program
            </div>
            <div className="About hover:text-red-200  cursor-pointer">
              About
            </div>
            <div className="WIT hover:text-red-200  cursor-pointer">WIT</div>
          </div>
        </div>

        {/* navbar end */}
      </div>
    {/*   {/* No we are In the slider */}
      <div className=" container   flex   lg:mx-5 lg:h-80 ">
        <div className="container  bg-gray-500 flex flex-col-reverse justify-center items-center  md:flex-row   text-white    ">
          <div className="left flex flex-col      py-2  m-5 mt-5">
            <h1 className="text-2xl text-black  py-2  font-serif mx-4">
              Presidential Initiative
            </h1>
            <h2 className="md:text-sm md:text-left text-xl text-black font-sans mx-4 ">
              for Artificial Intelligence &amp; Computing (PIAIC)
            </h2>
          
            <span className="text-black py-3 font-sans mx-4">
              The mission of PIAIC is to reshape Pakistan by revolutionizing
              education, research, and business by adopting latest, cutting-edge
              technologies. Experts are calling this the 4th industrial
              revolution. We want Pakistan to become a global hub for AI, data
              science, cloud native computing, edge computing, blockchain,
              augmented reality, and internet of things.
            </span>
            <CustomLink href="https://www.piaic.org/">
              {" "}
              <button className=" mx-4 hover:bg-red-400 bg-[#0067b8] text-white rounded h-10 w-20 my-5 ">
                Apply
              </button>
            </CustomLink>
          </div>
          <div className="right  text-black ">
            <Image src="/Card/bg.png" width={2000} height={4000}></Image>
          </div>
        </div>
      </div>
      {/* Now we are in the Promo */}
      <div className="promo  flex flex-col space-y-5 md:flex-row sm:mt-3 md:justify-center lg:justify-center sm:justify-center">
        {/* div */}
        <div className="item  flex items-center mx-5 text-[#0067b8]  font-medium mt-5">
          <Image src="/Icon/Meta.png" width={40} height={40}></Image>
          <spanc className="mx-2 hover:text-red-400 hover:coursorpointer  cursor-pointer ">
            {" "}
            metaverse
          </spanc>
        </div>
        {/* div */}
        <div className="item  flex items-center mx-5 text-[#0067b8]  font-medium">
          <Image src="/Icon/Block.png" width={40} height={40}></Image>
          <span className="mx-2 hover:text-red-400  hover:coursorpointer  cursor-pointer">
            blockchain
          </span>
        </div>
        {/* div */}
        <div className="item  flex items-center mx-5  text-[#0067b8] font-medium">
          <Image src="/Icon/Ai3.png" width={40} height={40}></Image>
          <span className="mx-2 hover:text-red-400 hover:coursorpointer  cursor-pointer ">
            AI
          </span>
        </div>
        {/* div */}
        <div className="item  flex items-center mx-5 hover:text-red-400  hover:coursorpointer  cursor-pointer text-[#0067b8] font-medium">
          <Image src="/Icon/cloud.png" width={40} height={40}></Image>

          <span className="mx-2">Cloud</span>
        </div>
      </div>
      {/* now the promo end */}
      {/* Our card section */}
      <h1 className="font-mono text-center m-10  capitalize text-2xl font-thin">
        Courses
      </h1>
      <hr className="w-1/2 mx-auto mb-10 h-4" />
      <div className=" grid-cols-1 grid lg:grid-cols-2 gap-2 mx-2 text-white ">
        {/* card 1 */}
        <div className="px-6 py-4 bg-black  ">
          <div className="rounded overflow-hidden max-w-sm justify-items-center sm:block sm:m-auto">
            <Image src="/Card/block.jpg" width={400} height={400}></Image>
          </div>
          <div className=" mt-10 text-center">
            <h1 className="py-4 uppercase  font-mono text-xl">blockchain</h1>
            <div>
              <p className=" text-white  py-4 font-sans  ">
                Blockchain is a decentralized, distributed ledger technology
                that records transactions across multiple devices in a secure
                and transparent way. It is the underlying technology behind
                cryptocurrencies like Bitcoin and is being used in various
                industries for secure data storage and record keeping.
              </p>

              <CustomLink href="https://www.piaic.org/">
                <button className=" hover:bg-red-300   cursor-pointer text-center bg-[#0067b8] text-white rounded h-10 w-20 my-5 ">
                  Apply
                </button>
              </CustomLink>
            </div>
          </div>
          
            <div className=" flex items-center justify-around  mt-16 ">
              <span className="bg-green-500 px-3 py-1 mb-2 rounded-full text-gray-100 ">
                #blockchain
              </span>
              <span className="bg-green-500 px-3 py-1 mb-2 rounded-full text-gray-100 ">
                #crypto
              </span>
              <span className="bg-green-500 px-3 py-1 mb-2 rounded-full text-gray-100 ">
                #tech
              </span>
            </div>
          
        </div>
        {/* card 2 */}
        <div className="py-10   bg-black">
          <div className="rounded overflow-hidden  max-w-sm justify-items-center sm:block sm:m-auto">
            <Image src="/Card/meta.jpg" height="500" width="600"></Image>
          </div>
          <div className="px-6 py-4 text-center ">
            <div className=" py-4 uppercase  font-mono text-xl">Metaverse</div>
            <p className=" text-white  py-4 font-sans  ">
              Metaverse is a virtual world where people can interact using
              avatars in a shared, immersive digital space. It offers new
              experiences beyond physical reality and is seen as the next step
              in internet evolution. It enables new forms of human interaction
              and communication.
            </p>
            <CustomLink href="https://www.piaic.org/">
              <button className=" hover:bg-red-300   cursor-pointer text-center bg-[#0067b8] text-white rounded h-10 w-20 my-5 ">
                Apply
              </button>
            </CustomLink>
          </div>
          <div>
            <div className="flex items-center justify-around  mt-16 s">
              <span className="bg-green-500 px-3 py-1 mb-2 rounded-full text-gray-100  ">
                #metaverse
              </span>
              <span className="bg-green-500 px-3 py-1 mb-2 rounded-full text-gray-100 ">
                #nft
              </span>
              <span className="bg-green-500 px-3 py-1 mb-2 rounded-full text-gray-100 ">
                #vr
              </span>
            </div>
          </div>
        </div>
        {/* card 3 */}
        <div className="py-10 rounded  bg-black ">
          <div className="rounded overflow-hidden  max-w-sm justify-items-center sm:block sm:m-auto ">
            <Image src="/Card/AI1.jpg" height="400" width="600" ></Image>
          </div>
          <div className="px-6 py-4 text-center ">
            <div className="py-4 uppercase  font-sans text-xl ">
              Artificial Intelligence
            </div>
            <p className=" text-white  py-4 font-sans  ">
              AI refers to Artificial Intelligence, the development of
              intelligent machines able to perform tasks requiring human
              intelligence. AI systems use algorithms, data, and computing power
              to learn and make decisions in real-world situations.
            </p>
            <CustomLink href="https://www.piaic.org/">
              <button className=" hover:bg-red-300   cursor-pointer text-center bg-[#0067b8] text-white rounded h-10 w-20 my-5 ">
                Apply
              </button>
            </CustomLink>
          </div>
          <div>
            <div className="flex items-center justify-around  mt-16">
              <span className="bg-green-500 px-3 py-1 mb-2 rounded-full text-gray-100  ">
                #robots
              </span>
              <span className="bg-green-500 px-3 py-1 mb-2 rounded-full text-gray-100 ">
                #chatbot
              </span>
              <span className="bg-green-500 px-3 py-1 mb-2 rounded-full text-gray-100 ">
                #electronics
              </span>
            </div>
          </div>
        </div>
        {/* card 4*/}
        <div className="py-10  bg-black ">
          <div className="rounded overflow-hidden  max-w-sm justify-items-center sm:block sm:m-auto">
            <Image src="/Card/cyber.png" width="400" height="600"></Image>
          </div>
          <div className="px-6 py-4 text-center ">
            <div className="py-4 uppercase  font-mono text-xl">
              Cloud computing
            </div>
            <p className=" text-white  py-4 font-sans  ">
              Cloud computing is a delivery model for IT services via the
              internet, providing on-demand access to resources such as servers,
              storage, and applications. It eliminates the need for expensive
              in-house infrastructure, offering cost-effective and scalable
              solutions.
            </p>
            <CustomLink href="https://www.piaic.org/">
              <button className=" hover:bg-red-300   cursor-pointer text-center bg-[#0067b8] text-white rounded h-10 w-20 my-5 ">
                Apply
              </button>
            </CustomLink>
          </div>
          <div>
            <div className="flex items-center justify-around  mt-10">
              <span className="bg-green-500 px-3 py-1 mb-2 rounded-full text-gray-100  ">
                #cloud
              </span>
              <span className="bg-green-500 px-3 py-1 mb-2 rounded-full text-gray-100 ">
                #internet
              </span>
              <span className="bg-green-500 px-3 py-1 mb-2 rounded-full text-gray-100 ">
                #tech
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* now card section is end */}

{/* slider */}
{/* No we are In the slider */}
<div className=" container   flex   lg:mx-10 lg:h-80 m-20 ml-2  ">
        <div className="container flex flex-col justify-center items-center  md:flex-row bg-white  text-white    ">
          <div className="right  text-black flex   justify-center items-center  ">
            <Image src="/Card/study.jpg" width={2000} height={3000}></Image>
          </div>
          <div className="left flex flex-col  bg-white ">
            <h1 className=" text-black text-4xl font-mono py-5">
              Program of Studies
            </h1>

            <span className="text-black py-4 font-sans text-xl ">
              The first three quarters are shared by all specialties and are
              dedicated to studying Object-Oriented Programming and cutting-edge
              Full-Stack Web 2.0 development The graduates of this program will
              own products (Full-Stack App Templates, AR and VR Experiences, and
              APIs) that are marketed globally by the Panaverse DAO and, if they
              like, will also be able to start off by offering services at a
              rate of $50 per hour ($96,000 per year).
            </span>
            < CustomLink href="/syllabus">
              <button className=" font-serif hover:bg-red-300   cursor-pointer text-center bg-[#0067b8] text-white rounded h-10 w-40 my-6 uppercase ">
                roadmap
              </button>
            </ CustomLink>
          </div>
        </div>
      </div>
      {/*  */}
{/* slider */}




{/* START */}
<div className="flex flex-col lg:flex-row">



{/* Q1 start */}
<div class="flex flex-row md:flex-col justify-center items-center gap-4 ">
  <div
    class="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700 ">
   <div className="flex justify-center items-center">
   <Image src="/Q/JtoT.png" height={300} width={300} className="py-3">
</Image>
   </div>
    <div class="p-6">
    <h5 class="text-gray-900 text-xl font-medium mb-2">Quarter I</h5>
    <p class="text-gray-700 text-base mb-4">
                CS-101: Object-Oriented Programming using TypeScript
              </p>
      <div className="flex justify-center  ">
                  <button
                    type="button"
                    class="     hover:bg-red-300   cursor-pointer   inline-block px-4 py-2.5 bg-blue-600 text-white uppercase font-medium text-xs rounded  "
                  >
                    <CustomLink href="/Q1">See More</CustomLink>
                  </button>
                </div>
    </div>
  </div>
</div>
{/* Q1 End */}


{/* Q2 start */}
<div class="flex justify-center">
  <div
    class="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700 ">
   <div className="flex justify-center items-center">
   <Image src="/Q/R.Jpg" height={200} width={300} className="">
</Image>
   </div>
    <div class="p-6">
    <h5 class="text-gray-900 text-xl font-medium mb-2">Quarter II</h5>
    <p class="text-gray-700 text-base mb-4">
    Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and
  APIs using Next.js 13
              </p>
      <div className="flex justify-center m ">
                  <button
                    type="button"
                    class="     hover:bg-red-300   cursor-pointer   inline-block px-4 py-2.5 bg-blue-600 text-white uppercase font-medium text-xs rounded  "
                  >
                    <CustomLink href="/Q1">See More</CustomLink>
                  </button>
                </div>
    </div>
  </div>
</div>
{/* Q4 End */}


{/* Q3 start */}
<div class="flex justify-center">
  <div
    class="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
      <div className="flex justify-center items-center">
      <Image src="/Q/Ser.png" height={300} width={300}>
</Image>

      </div>

    <div class="p-6">
    <h5 class="text-gray-900 text-xl font-medium mb-2">Quarter III</h5>
    <p class="text-gray-700 text-base mb-4">
    $-101: Dollar Making Bootcamp - Full-Stack Template and API
                Product Development
              </p>
      <div className="flex justify-center m ">
                  <button
                    type="button"
                    class="     hover:bg-red-300   cursor-pointer   inline-block px-4 py-2.5 bg-blue-600 text-white uppercase font-medium text-xs rounded  "
                  >
                    <CustomLink href="/Q1">See More</CustomLink>
                  </button>
                </div>
    </div>
  </div>
</div>
{/* Q3 End */}


{/* Q4 start */}
<div class="flex justify-center">
  <div
    class="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
      <div className="flex justify-center items-center">

   <Image src="/Q/B.jpg" height={300} width={300}>
</Image>
      </div>
    <div class="p-6">
    <h5 class="text-gray-900 text-xl font-medium mb-2"> Quarter IV, V (Specialized)</h5>
    <p class="text-gray-700 text-base mb-4">
    Web 3.0 & Metaverse Specialization AI, Cloud-Native, IoT
              </p>
      <div className="flex justify-center m ">
                  <button
                    type="button"
                    class="     hover:bg-red-300   cursor-pointer   inline-block px-4 py-2.5 bg-blue-600 text-white uppercase font-medium text-xs rounded  "
                  >
                    <CustomLink href="/Q1">See More</CustomLink>
                  </button>
                </div>
    </div>
  </div>
</div>
{/* Q4 End */}
</div>
{/* End */}











      

      {/*  */}
      <footer>
        <footer className="sub footer">
          <h1 className="font-mono text-center mt-10 mb-5 capitalize text-2xl font-thin">
            Our Partner
          </h1>
          <hr className="w-1/2 mx-auto" />
         <div className="subfooter flex items-center justify-center gap-2">
            <div>
              <Image src="/Icon/R.jpg" width={200} height={200}></Image>
            </div>
            <div>
              <Image
                src="/Icon/pana.jpg"
                width={200}
                height={200}
                alt="background image"
              />
            </div>
          </div>
        </footer>
        <div className=" main footer flex items-start justify-around  bg-white p-7">
          <a href="#">
            <Image src="/Icon/R.png" width={200} height={200}></Image>
          </a>
          <div className="link-col flex  flex-col items-start gap-3 p-7 text-sm text-gray-400">
            <h1 className="text-black py-1 font-serif text-[1rem]">Company</h1>
            <a href="#">About us</a>
            <a href="#">Blog</a>
            <a href="#">Instructors</a>
            <a href="#">Testimonials</a>
            <a href="#">Build Career</a>
            <a href="#">Become Instructor</a>
          </div>
          <div className="link-col flex flex-col items-start gap-3 p-7 text-sm text-gray-400 ">
            <h1 className="text-black py-1 font-serif text-[1rem]">Program</h1>
            <a href="#" />
            <a href="#">Web 3</a>
            <a href="#">Blockchain</a>
            <a href="#">Artificial Intelligence </a>
            <a href="#">Cloud Computing</a>
            <a href="#">Internet of Things</a>
          </div>
          <div className="link-col flex  flex-col items-start gap-3  h-14">
            <h3 className="text-black  py-1 font-serif pt-[2.20rem] text-[1rem] ">
              Follow us
            </h3>
            <a href="#">
              <Image src="/Icon/You.png" width={20} height={20}></Image>
            </a>
            <a href="#">
              <Image src="/Icon/Twit.png" width={20} height={20}></Image>
            </a>
            <a href="#">
              <Image src="/Icon/Git.png" width={20} height={20}></Image>
            </a>
            <a href="#">
              <Image src="/Icon/fb.png" width={20} height={20}></Image>
            </a>
          </div>
        </div>
      </footer>
      {/*  */}
    </div>

   
  )
}

