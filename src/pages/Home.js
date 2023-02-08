const Home = () => {
    return (
        <div>
            <h1 className="text-red-500 font-bold text-center text-2xl">Home Page</h1>
            <hr className="h-px my-8 mx-auto bg-gray-200 border-0 dark:bg-gray-700 w-3/4"></hr>
            <div className="flex justify-center border border-black m-10 rounded-2xl justify-around">
                
                <div className="border w-1/3 p-5 m-5 border-gray-500 rounded-2xl w-full h-full">
                    <p>Something about the home page</p>
                </div>

                <div className="w-1/4 w-full">
                    <div className="border w-100 p-5 m-5 border-gray-500 rounded-2xl">
                        <p>Other Details</p>
                    </div>

                    <div className="border w-100 p-5 m-5 border-gray-500 rounded-2xl">
                        <p>Some details</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
