import bannerImg from "../../assets/banner.png";

const Banner = () => {
  return (
    <>
        <div className="flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-12">
            <div className="md:w-1/2 w-full flex items-center md:justify-end">
                {/* Image Area */}
                <img src={bannerImg} alt="" />
            </div>
            <div className="md:w-1/2 w-full">
                {/* Text Area */}
                <h1 className="md:text-5xl text-2xl font-medium mb-7 justify-evenly">New Releases This Week</h1>
                <p className="mb-10">It&apos;s time to update your reading list with some of the latest and greatest releases in the literary world. From heart-pumping thrillers to captivating memoirs, this week&apos;s new releases offer something for everyone.</p>

                <button className="btn-primaryfocus:outline-none bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Subscribe</button>
            </div>
        </div>
    </>
  )
}

export default Banner