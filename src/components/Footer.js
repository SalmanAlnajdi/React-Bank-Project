import React from "react";

const Footer = () => {
  return (
    <div class=" w-full mx-auto">
      <footer class=" p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-800">
        <div class="sm:flex  sm:items-center sm:justify-between">
          <div className="w-[50%] h-[70px]  flex justify-start items-center p-1 gap-3">
            <img
              alt=""
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFvoCzaRO2NbZPaVvr9IY2Zltp6evQIt1X0clcmPW27PDVIlhlstUgjcJd2E6qL-EhVww&usqp=CAU"
              className="  h-full object-cover"
            />

            <p className="text-green-700 text-xl font-bold sm:text-sm">
              Full Stack Bank
            </p>
          </div>
          <ul class="flex flex-wrap items-center mb-6 sm:mb-0">
            <li>
              <a class="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">
                About
              </a>
            </li>
            <li>
              <a class="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">
                Privacy Policy
              </a>
            </li>
            <li>
              <a class="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">
                Licensing
              </a>
            </li>
            <li>
              <a class="text-sm text-gray-500 hover:underline dark:text-gray-400">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024 CODED . All Rights Reserved.
        </span>
      </footer>
    </div>
  );
};

export default Footer;
