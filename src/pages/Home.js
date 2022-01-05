import React, { useState } from "react";
import Layout from "../components/Layout";

const Home = () => {
  const [profileImage, setProfileImage] = useState(
    "/images/profile/profile.jpg"
  );

  const mouseHover = () => {
    setProfileImage("/images/profile/profile-swim.jpg");
  };

  const mouseOut = () => {
    setProfileImage("/images/profile/profile.jpg");
  };

  return (
    <Layout>
      <div className="container mx-auto">
        <div className="grid justify-items-center pt-36 space-y-10">
          {/* profile */}
          <img
            onMouseEnter={mouseHover}
            onMouseOut={mouseOut}
            className="rounded-full object-cover h-44 w-44"
            src={profileImage}
            alt="profile"
          />
          {/* text */}
          <div className="p-4 text-center">
            <h1 className="text-white text-center text-4xl font-bold">
              Hi, I'm Tae
            </h1>
            <h1 className="text-white text-2xl md:text-6xl font-bold mt-8">
              I am a student of
            </h1>
            <h1 className="text-white text-2xl md:text-6xl font-bold md:px-40">
              the University of the Thai Chamber of Commerce.
            </h1>
            <h1 className="text-gray-500 text-xl mt-10">
              I specialize in UX/UI Design, Responsive Web Design.
            </h1>
          </div>
          {/* btn contact */}
          <div className="py-10">
            <button className="animate-bounce px-10 py-4 rounded-full text-black bg-white font-semibold">
              CONTACT ME
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
