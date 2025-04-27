import React from 'react';

const ResumeBuild = () => {
  return (
    <>
      <div className="border-b-1 ml-66 mt-30 w-[70%] border-[#BCBCBC]"></div>
      <div className="mt-20">
        <h2 className="text-secondary text-[40px] pl-66">Resume Building & Coaching</h2>
        <p className="text-secondary text-[16px] pl-66 leading-none">
          Let’s talk about where you’re headed — and how your resume can get you there. <br />
          Schedule a call to get started.
        </p>
      </div>

      <section className="grid grid-cols-4 grid-rows-5 gap-12 mt-16 text-secondary leading-none">
        <div className="row-span-3 col-start-2 border-2 border-secondary rounded-4xl px-6 py-4">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <h3 className="text-[32px]">Resume Rebuild</h3>
              <p className="text-[16px]">Crafted for senior to VP-level professionals ready for their next big step.</p>
              <h1 className="text-[56px] font-bold py-6">
                $1000 <span className="text-[24px]">one time</span>
              </h1>
            </div>
            <div className="border-b-1 border-[#BCBCBC]"></div>
            <div className="flex gap-2 pt-2">
              <img src="/truegreen.png" alt="" className="w-5 h-5" />
              <p className="text-[16px]">3× 30-min coaching</p>
            </div>
            <div className="flex gap-2">
              <img src="/truegreen.png" alt="" className="w-5 h-5" />
              <p className="text-[16px] whitespace-nowrap">Focused on storytelling, not just formatting</p>
            </div>
            <div className="flex gap-2">
              <img src="/truegreen.png" alt="" className="w-5 h-5" />
              <p className="text-[16px]">Analyst + full application team on Pacific hours</p>
            </div>
            <div className="flex gap-2">
              <img src="/truegreen.png" alt="" className="w-5 h-5" />
              <p className="text-[16px]">Tailored to your target industry, company, or role</p>
            </div>
            <div className="flex gap-2">
              <img src="/truegreen.png" alt="" className="w-5 h-5" />
              <p className="text-[16px]">Direct work with our co-founder (ex- Google, JP Morgan)</p>
            </div>
            <div className="flex gap-2">
              <img src="/truegreen.png" alt="" className="w-5 h-5" />
              <p className="text-[16px]">Executive coaching from UC Berkeley alum with 10+ yrs experience</p>
            </div>
            <div className="flex gap-2">
              <img src="/truegreen.png" alt="" className="w-5 h-5" />
              <p className="text-[16px]">Resume Rebuild portfolio available upon request</p>
            </div>
            <div className="pt-16">
              <button className="text-primary text-[22px] bg-secondary rounded-full px-7 py-3">Get Started →</button>
            </div>
          </div>
        </div>

        <div className="row-span-3 col-start-3">
          <div className="flex flex-col gap-4 border-2 border-secondary rounded-4xl px-6 py-4">
            <div className="flex flex-col">
              <h3 className="text-[32px]">Interview Prep</h3>
              <p className="text-[16px]">Two sessions to sharpen your story, confidence, and clarity — fast.</p>
              <h1 className="text-[56px] font-bold py-6">
                $500 <span className="text-[24px]">one time</span>
              </h1>
            </div>
            <div className="border-b-1 border-[#BCBCBC]"></div>
            <div className="flex gap-4 pt-2">
              <img src="/truegreen.png" alt="" className="w-5 h-5" />
              <p className="text-[16px]">2× 45-min live coaching with our co-founder</p>
            </div>
            <div className="flex gap-2">
              <img src="/truegreen.png" alt="" className="w-5 h-5" />
              <p className="text-[16px]">Real-time, practical feedback</p>
            </div>
            <div className="flex gap-2">
              <img src="/truegreen.png" alt="" className="w-5 h-5" />
              <p className="text-[16px]">Build clarity, empathy & executive presence</p>
            </div>
            <div className="flex gap-2">
              <img src="/truegreen.png" alt="" className="w-5 h-5" />
              <p className="text-[16px] whitespace-nowrap">For senior and leadership roles — technical <br /> & non-technical</p>
            </div>
            <div className="pt-48 pb-2">
              <button className="text-primary text-[22px] bg-secondary rounded-full px-7 py-3">Get Started →</button>
            </div>
          </div>
        </div>

        <div className="col-span-4 row-span-2 row-start-4 text-primary bg-secondary border-secondary mx-36 py-14 px-14 flex justify-between items-center rounded-4xl">

            <div>
                <h2 className='text-[40px]'>STILL HAVE <br />
                DOUBTS?</h2>
            </div>
            <div>
                <h1 className='text-[80px] font-semibold'>Contact us</h1>
            </div>
            <div className='border-1 border-primary px-8 py-8 bg-primary rounded-full'>
                <img src="/forwardArrow.svg" alt="arrow" />
            </div>

        </div>
      </section>
    </>
  );
};

export default ResumeBuild;