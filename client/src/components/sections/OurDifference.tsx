
const data =[
    "Integrated End-to-End Solutions",
    "International Standards, Local Expertise",
    "Client-Focused Delivery Model",
    "Confidential & Accountable Operations",
    "Scalable & Sustainable Approach",
    "Partnership Driven Mindset"
]


export function OurDifference(){
    return(
        <section className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        
        <div className="text-5xl mb-14 pl-5 text-primary font-medium">
            <h1 > What Makes Us Different</h1>
        </div>
        <div className="flex flex-col items-start pl-25 justify-center gap-10">
                {
                    data.map((item, index) => (
                        <div key={index} className="text-3xl w-full text-primary flex items-center gap-5  font-normal">

                            <div className=" w-18  mr-2 font-medium text-5xl text-accent-darker"> <span>0{index + 1}</span></div>
                            <div className="  text-6xl">|</div>
                            <p className="  "> {item}</p>

                        </div>
                    ))
                }
        

        </div>
        </section>
    )
}