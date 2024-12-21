import React from 'react';
import { card } from './info';


function About() {
	return ( 
		<div className='pt-16 pb-12'>
			<div className="text-center">
				<h2 className='text-[#3A643B] inline-block mt-4  text-center text-[32px] lg:text-[48px] leading-none font-bold font-robo'>
					Discover Ayurveda’s Magic With Us
					<hr className='hidden lg:block -mt-[7px] text-center -z-10 bg-[#C3D0C4] h-2' />
				</h2>
			</div>
			
			<p className='text-[#666666] w-[90%] max-w-[750px] mt-6 text-[14px] lg:text-[20px] mx-auto text-center '>
				Ayurvedic treatment aims to balance your body and mind, bringing harmony and vitality.
				It's like a journey to better health using ancient wisdom, a totally effective approach for a better life.
			</p>	

			<div className="xl:hidden">
				<img className='mx-auto mt-12' src='/images/main.png' alt='Main logo' />
				<div className="flex items-center justify-center flex-wrap gap-4 mt-4">
					{
						card.map((item, index) => {
							return (
								<div key={index}  className="w-[154px] h-[218px] flex flex-col justify-center py-4 gap-2 rounded-xl border border-[#E4E4E4]">
									<img src={item.logo} className="mx-auto" alt='logo' />
									<h3 className="text-[15px] px-2 font-robo font-semibold text-center">{item.title}</h3>
									<p className="text-[#6D6B6B] w-[90%] mx-auto text-[12px] font-medium text-center">{item.text}</p>
								</div>
							)
						})
					}

				</div>
			</div>
			<div className="hidden xl:flex items-center justify-center mx-auto mt-12">
				<div className="space-y-24 flex-none relative">
					{
						card.slice(0, card.length / 2).map((item, index) => {
							return (
								<div key={index} className={`flex items-center gap-2 justify-end w-[370px] relative right-16 ${(index === 0 || index === 2) && 'relative left-1'}`}>
									<div className="text-right">
										<p className="text-[18px] font-bold font-robo">{item.title}</p>
										<p className="text-[#515151] text-[13px] w-[80%] ml-auto">{item.text}</p>
									</div>
									<img src={item.logo} alt='logo' />
								</div>
							)
						})
					}
				</div>

				<img src='/images/main-lg.png' className='flex-none mt-8' alt='Main logo' />

				<div className="space-y-24 flex-none relative">
					{
						card.slice(card.length / 2).map((item, index) => {
							return (
								<div key={index} className={`flex items-center gap-2 justify-end w-[370px] ${(index === 0 || index === 2) && 'relative right-3'}`}>
									<img src={item.logo} alt='logo' />
									<div className="text-left">
										<p className="text-[18px] font-bold font-robo">{item.title}</p>
										<p className="text-[#515151] text-[13px] w-[80%] mr-auto">{item.text}</p>
									</div>
								</div>
							)
						})
					}
				</div>
			</div>		
			
		</div>

	);
}

export default About;