import { useState, useEffect, useRef } from "react";
import { feedbacks } from "./info";




function Feedback() {
	const scrollContainer = useRef(null);
	const [scrollCard, setScrollCard] = useState(0);

	function handleScroll(e) {
		// console.log(e.target.scrollLeft);

		const currentCard = Math.min(Math.round(e.target.scrollLeft / 250), 2);
		setScrollCard(currentCard);
	}


	useEffect(() => {
		const scrollDiv = scrollContainer.current;
		scrollDiv.addEventListener('scroll', handleScroll);

		return () => {
			scrollDiv.removeEventListener('scroll', handleScroll)
		}

	}, []);


	return ( 
		<div className="bg-[#FFF7E2] py-12">
			<div className="text-center mb-12">
				<h3 className="text-[#3A643B] inline-block text-[32px] lg:text-[48px] px-4 text-center font-bold font-robo my-8">
					Stories from our valued customers!
					<hr className='hidden lg:block -mt-[20px] -z-10 bg-[#C3D0C4] h-2' />
				</h3>

			</div>

	
			

			<div
				ref={scrollContainer}
				className="flex items-center gap-8 px-12 md:px-0 overflow-x-scroll scrollbar-hide mx-auto max-w-[1230px] snap-x snap-mandatory"
			>
				{
					feedbacks.slice(0, 3).map((feedback, index) => {
						return (
							<FeedbackCard key={index} feedback={feedback} />
						)

					})
				}

			</div>

			<div className="mx-auto flex items-center justify-center mt-12 gap-4">
				{
					Array.from({ length: 3 }).map((_, index) => {
						return <div key={index}  className={`w-[12px] h-[12px] rounded-[50%] ${index === scrollCard ? 'bg-[#3A643B]' : 'bg-[#C3C3C3]'} `}></div>
					})
				}
			</div>
		</div>

	);
}


function FeedbackCard({feedback}) {
	return (
		<div className="flex-none w-[304px] h-[390px] lg:w-[388px] lg:h-[371px]  rounded-[20px] mx-auto bg-white snap-center">
			<div className={`${feedback.consultedFor === 'Skin'? 'bg-[#F5F3FC]': 'bg-[#ECFEE7]'} font-semibold rounded-t-[20px] h-[55px] flex items-center px-8 lg:text-[18px]`}>
				<p>Consulted for {feedback.consultedFor}</p>
			</div>

			<div className="flex items-center my-8 px-6 gap-4">
				<div className="w-[50px]  h-[50px] rounded-[50%] bg-[#515151]"></div>
				<div>
					<p className="text-[#414141] font-medium lg:text-[20px]">{feedback.patientDetails.name}</p>
					<p className="text-[15px] font-extralight lg:text-[18px]">{feedback.patientDetails.city}</p>
				</div>
				<div className="text-[12px] lg:text-[16px] self-start mt-1.5 ml-2">{feedback.date}</div>
			</div>

			<div>
				<div className="flex items-center px-8 gap-1">
					
					{
						Array.from({ length: feedback.rating }).map((item, index) => {
							return (
								<img key={index} src='/images/star.png' alt='star' />
							)
						})
					}
				

				</div>
				<div className="mt-2">
					<h3 className="text-[#333333] text-[20px] lg:text-[22px] font-bold mb-2 font-dm pl-8">{feedback.title}</h3>
					<p className="text-[#555555] font-dm px-4 lg:text-[18px] leading-[30px]">
						{feedback.text}
					</p>
				</div>
			</div>
		</div>
	)
}

export default Feedback;