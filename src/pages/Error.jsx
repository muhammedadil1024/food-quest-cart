import { Link, useRouteError } from "react-router-dom";

const Error = () => {
    const { status, data } = useRouteError();

    return (
        <section className="flex items-center h-full p-8 sm:p-16">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div className="max-w-md text-center">
                    <h2 className="mb-8 font-extrabold text-9xl text-gray-600">
                        <span className="sr-only">Error</span>
                        {status}
                    </h2>
                    <p className="text-2xl font-semibold md:text-3xl">
                        {status === 404 ? "Sorry, we couldn't find this page." : data ?? "Something went wrong!"}
                    </p>
                    <p className="mt-4 mb-8 text-gray-500">
                        But dont worry, you can find plenty of other things on our homepage.
                    </p>
                    <Link to={"/"} className="px-4  sm:px-8 py-3 font-semibold rounded bg-[#1c9a16] hover:bg-[#20ab19] text-white">
                        Back to homepage
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Error;