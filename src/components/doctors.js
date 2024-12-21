import { useState, useRef, useEffect } from "react";
import { experts } from "./info";



function Doctors() {
	const scrollContainerSmall = useRef(null);

	const [scrollCard, setScrollCard] = useState(0);
	const [marginLeft, setMarginLeft] = useState(0);


	function handleScroll(e) {
		const currentCard = Math.min(Math.round(e.target.scrollLeft / 250), 2);
		setScrollCard(currentCard);
	}

	function handleLeftClick() {
		const margin = Math.min(marginLeft + 990, 0);
		setMarginLeft(margin);
		setScrollCard(margin / -990);
	}

	function handleRightClick() {
		const margin = Math.max(marginLeft - 990, -1980);
		setMarginLeft(margin);
		setScrollCard(margin / -990);
	}


	useEffect(() => {
		const scrollDiv = scrollContainerSmall.current;
		scrollDiv.addEventListener('scroll', handleScroll);

		return () => {
			scrollDiv.removeEventListener('scroll', handleScroll)
		}

	}, []);

	

	return (
		<div className="py-12">
			<div className="text-center mb-12">
				<h3 className="text-[#3A643B] inline-block px-4 text-[32px] lg:text-[48px] font-bold font-robo">
					Meet Our Ayurveda Experts
					<hr className='hidden lg:block -mt-[19px] -z-10 bg-[#C3D0C4] h-2' />
				</h3>
			</div>


			<div
				ref={scrollContainerSmall}
				className="lg:hidden flex overflow-scroll max-w-[1000px] mx-auto scrollbar-hide gap-14 md:gap-x-96 px-20 snap-x snap-mandatory "
			>
				{
					experts.slice(0, 3).map((expert, index) => {
						return <ExpertCard key={index} expert={expert} />
					})
				}

			</div>
	

			<div className="hidden lg:flex items-center justify-center gap-10">
				<img
					onClick={handleLeftClick}
					className="cursor-pointer"
					src="/images/left-arrow.png"
					alt='left arrow'
				/>
				<div className="max-w-[990px] overflow-hidden">
					<div
						className={`flex gap-10 px-6 ml-[${marginLeft}px] transition-all duration-500 ease-linear`}
					>
						{
							experts.map((expert, index) => {
								return <ExpertCard key={index} expert={expert} />
							})
						}

					</div>
				</div>
			
				
				<img
					onClick={handleRightClick}
					className="cursor-pointer z-10"
					src='/images/right-arrow.png'
					alt='right arrow'
				/>

			</div>

			<div className="mx-auto flex items-center justify-center mt-12 gap-4">
				{
					Array.from({ length: 3 }).map((_, index) => {
						return <div key={index} className={`w-[12px] h-[12px] rounded-[50%] ${index === scrollCard ? 'bg-[#3A643B]' : 'bg-[#C3C3C3]'} `}></div>
					})
				}
			</div>

	


			<button className="hidden lg:flex mx-auto items-center gap-4 px-[25px] py-[15px] my-12 bg-[#DBE3DC63] text-[#3A643B] rounded-[7px] border border-[#3A643B]">
				<p className="text-[24px] font-medium">Find more experts</p>
				<img src='/images/arrow-right.png' alt='right arrow' />
			</button>
			
		</div>

	);
}



function ExpertCard({ expert }) {
	return (
		<div className="flex-none bg-[#FFF7E2] w-[295px] h-[446px] rounded-[40px] pt-8 relative snap-center">
			<div className="relative w-[150px] h-[150px] overflow-hidden rounded-[50%] mb-4 mx-auto">
				<img  src='/images/expert.png' alt='expert' />
			</div>
			<div className="hidden  lg:flex items-center top-[160px] left-[120px] absolute px-1 w-[55px] h-[25px] rounded-full bg-gradient-to-b from-[#0B0B0B] to-[#0B0B0BC9]">
				<p className="text-white leading-none font-bold">{expert.rating}</p>
				<img className="scale-75" src='/images/star.png' alt='star' />
			</div>
			<p className="text-[20px] text-center font-semibold">{expert.name}</p>
			<p className="text-[#838383] mt-2 text-center text-[15px] font-medium">{expert.study}</p>
			<div className="flex items-center justify-center gap-1 mt-2 mx-auto">
				<img src='/images/hat.png' alt='hat' />
				<p className="text-[#0C0C0C]">{expert.experience} years of experience</p>
			</div>

			<div className="flex items-center justify-center gap-1 mt-4 bg-[#3A643B1F] w-[160px] h-[30px] mx-auto rounded-[18px]">
				<img src='/images/link.png' alt='link' />
				<p className="text-[#3A643B] font-semibold ">{expert.specialization} Specialist</p>
			</div>

			<div className="absolute bottom-0 text-white cursor-pointer bg-[#3A643B] h-[65px] w-full rounded-b-[40px] flex items-center justify-center">
				<p className="text-[20px] font-medium">Book a session</p>
			</div>
		</div>
	);
}
export default Doctors;