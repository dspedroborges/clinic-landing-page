export default function Checks({ content }: { content: string[] }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 px-4 py-16 w-full overflow-x-hidden gap-8 lg:gap-0">
            {
                content.map((c, i) => {
                    return (
                        <div key={i} className="flex flex-col items-center justify-center gap-6 border-gray-300 lg:border-r last:border-r-0">
                            <div className="bg-gray-100 border-gray-600 text-gray-600 shadow-xl hover:scale-105 transition-all w-16 h-16 rounded-full p-2 border">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-check-circle" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                    <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05" />
                                </svg>
                            </div>
                            <p className="md:w-1/2 text-center wrap-break-word">{c}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}