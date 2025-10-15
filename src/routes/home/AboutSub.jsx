

function AboutSub({icons, text}) {
    return (
        <main className="w-[48%] max-md:w-full flex item-center  py-3 gap-3 border-b-1 border-[#FFE700]">
            <p className="">{icons}</p>
            <p className="text-[15px]">{text}</p>
        </main>
    )
}

export default AboutSub
