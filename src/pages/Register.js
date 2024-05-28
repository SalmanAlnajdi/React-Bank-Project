import React from 'react'

const Register = () => {
 
  return (
    <div className='w-full h-[100vh]  flex-col justify-center items-center'>
      <div className='w-full h-[90px]  flex justify-start items-center p-5'>
      {/* https://cdn.imgbin.com/10/5/9/imgbin-computer-programming-computer-icons-programmer-software-development-computer-code-XtAFGvEJMikFXtGQsknWiXj7F.jpg */}
      <img
      alt=""
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFvoCzaRO2NbZPaVvr9IY2Zltp6evQIt1X0clcmPW27PDVIlhlstUgjcJd2E6qL-EhVww&usqp=CAU"
      className=" h-full  object-cover"
    />

      <h1 className="text-green-700 text-2xl font-bold sm:text-3xl">Full Stack Bank</h1>


      </div>

     
      <section className="relative flex flex-wrap lg:h-screen lg:items-center p-8">
<div className=" h-full w-full sm:h-96 lg:h-full lg:w-1/2 ">
    <img
      alt=""
      src="https://bournemouth.foodbank.org.uk/wp-content/uploads/sites/64/2023/03/Credit-card-bro-768x768.png"
      className="h-full w-full object-fill"
    />
  </div>
  
  <div className="text-green-700 w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
    <div className="mx-auto max-w-lg text-center">
      <h1 className="text-2xl font-bold sm:text-3xl">Register your account</h1>

      <p className="text-sm text-black">
          If you already have an account,
          <a className="underline" href="#">Sign in</a>
        </p>
    </div>

    <form action="#" className="p-8 w-full  space-y-4">
      <div>
        <label htmlFor="username" className="block text-black text-sm font-medium mb-2">Username</label>

        <div className="relative">
          <input
            type="username"
            className="w-full rounded-lg border-gray-700 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter username"
          />

          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8.5 21H4C4 17.134 7.13401 14 11 14C11.1681 14 11.3348 14.0059 11.5 14.0176M15 7C15 9.20914 13.2091 11 11 11C8.79086 11 7 9.20914 7 7C7 4.79086 8.79086 3 11 3C13.2091 3 15 4.79086 15 7ZM12.5898 21L14.6148 20.595C14.7914 20.5597 14.8797 20.542 14.962 20.5097C15.0351 20.4811 15.1045 20.4439 15.1689 20.399C15.2414 20.3484 15.3051 20.2848 15.4324 20.1574L19.5898 16C20.1421 15.4477 20.1421 14.5523 19.5898 14C19.0376 13.4477 18.1421 13.4477 17.5898 14L13.4324 18.1574C13.3051 18.2848 13.2414 18.3484 13.1908 18.421C13.1459 18.4853 13.1088 18.5548 13.0801 18.6279C13.0478 18.7102 13.0302 18.7985 12.9948 18.975L12.5898 21Z"
              />
            </svg>

          </span>
        </div>
      </div>

      <div>
        <label htmlFor="password" className="block text-black text-sm font-medium mb-2">Password</label>

        <div className="relative">
          <input
            type="password"
            className="w-full rounded-lg border-gray-700 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter password"
          />

          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </span>
        </div>
      </div>

      <div className="mb-6">
          <label
            htmlFor="image"
            className="block text-black text-sm font-medium mb-2"
          >
            UpLoad a Profile Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={""}
            className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
            required
          />
        </div>

      <div className="w-full">
      

        <button
          type="submit"
          className="w-full inline-block rounded-lg bg-green-700 px-5 py-3 text-lg font-medium text-white"
        >
         Register
        </button>
      </div>
    </form>
  </div>

  
</section>
    </div>
  )
}

export default Register