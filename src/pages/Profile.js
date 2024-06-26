import Navbar from "../components/Navbar";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { me, updateProfile } from "../api/auth";
import { useState } from "react";
import ProfileLoader from "../components/ProfileLoader";
import Footer from "../components/Footer";

const Profile = () => {
  const [image, setImage] = useState();
  const queryClient = useQueryClient();

  const { data: user, isLoading } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => me(),
    onSuccess: (data) => {
      console.log(data);
    },
  });

  const { mutate } = useMutation({
    mutationKey: ["updateProfile"],
    mutationFn: async () => updateProfile(image),
    onSuccess: () => {
      queryClient.invalidateQueries(["profile"]);
    },
  });

  const handleChange = (e) => {
    setImage(e.target.files[0]);
  };

  if (isLoading) {
    return (
      <div className=" w-full h-[100vh] flex flex-col j items-center font-bold">
        <Navbar />
        <div className=" w-[100%] h-[80vh]  flex justify-center items-center gap-12 p-4">
          <div className=" w-[90%] h-[80%] lg:w-[400px] lg:h-[480px]  rounded-3xl p-4 wrap flex flex-col justify-center items-center text-center gap-6 shadow-lg shadow-slate-500 ">
            <ProfileLoader />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className=" w-full h-[100vh] flex flex-col j items-center font-bold">
      <Navbar />
      <div className=" w-[100%] h-[80vh]  flex justify-center items-center gap-12 p-4">
        <div className=" w-[90%] h-[80%] lg:w-[400px] lg:h-[480px]  rounded-3xl p-4 wrap flex flex-col justify-center items-center text-center gap-6 shadow-lg shadow-slate-500 ">
          <img
            src={`https://react-bank-project.eapi.joincoded.com/${user?.image}`}
            alt="userimage"
            className="w-[50%] h-[50%] rounded-full mr-2"
          />
          <p className="text-xl">{user?.username}</p>
          <p className="text-lg font-semibold">balance : {user?.balance} </p>

          <div>
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
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-black"
              required
            />
          </div>

          <button
            onClick={mutate}
            className=" hover:bg-green-700  hover:text-white font-bold py-2 px-4 rounded text-md font-bold sm:text-sm"
          >
            save
          </button>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Profile;
