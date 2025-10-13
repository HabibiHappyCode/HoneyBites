

function AboutSub({icons, text}) {
    return (
        <main className="w-[48%] max-md:w-full flex items-center gap-3 border-b-1 border-[#FFE700]">
            <p className="h-18 max-lg:h-12">{icons}</p>
            <p className="text-[15px]">{text}</p>
        </main>
    )
}

export default AboutSub
