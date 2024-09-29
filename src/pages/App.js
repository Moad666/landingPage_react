import React from "react";
import Navbar from "../components/Navbar.js";
import developer from "../images/developer.svg";
import logo from "../images/logo.png";
import { FaWhatsapp, FaDiscord, FaEnvelope } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <Navbar />

      {/* Main Content Section */}
      <div className="flex mt-24">
        <div className="flex-1 flex flex-col items-center justify-center p-4 mt-10 ml-5">
          <p className="text-customPurple text-3xl font-myanmar mb-4">
            <button
              className="font-myanmar bg-customPurple hover:bg-hoverPurple text-white font-bold py-2 px-4 rounded"
              onClick={() => {
                document
                  .getElementById("learning")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              Start Learning
            </button>
          </p>
          <p className=" text-lg font-myanmar text-black mt-5">
            Welcome to our website! For just{" "}
            <label className="text-customPurple">$1 a month</label>, you can
            join our vibrant Discord community, where we offer a variety of
            courses and resources to help you learn and grow. Explore our
            offerings, connect with fellow learners, and start your learning
            journey today!
          </p>
        </div>

        {/* Right Side: Image */}
        <div className="flex-1 flex items-center justify-center p-4">
          <img
            src={developer}
            alt="Developer Illustration"
            className="object-cover w-90 h-80"
          />
        </div>
      </div>

      {/* Discord Section */}
      <div className="mt-10">
        {" "}
        <h1 className="font-myanmar mt-36 text-4xl text-center ">
          Join Our Exclusive Discord Channel
        </h1>
        <div className="flex justify-center mt-8">
          {" "}
          <div className="bg-white rounded-lg shadow-xl flex w-full max-w-4xl p-6">
            <div className="flex-shrink-0 w-1/3 flex items-center justify-center">
              <img
                src="https://blog.logomyway.com/wp-content/uploads/2020/12/discord-mascot.png"
                alt="Discord logo"
                className="w-32 h-auto"
              />
            </div>

            {/* Right Side: Description */}
            <div className="w-2/3 pl-6 flex flex-col justify-center">
              <h2 className="font-myanmar text-2xl font-bold mb-4">
                Why choose <b className="text-customPurple"> Discord</b>?
              </h2>
            </div>
          </div>
        </div>
        {/* Features */}
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="font-myanmar text-xl font-semibold mb-4">
                Community
              </h2>
              <p className="font-myanmar text-gray-700">
                Join our <b className="text-customPurple">Discord</b> and
                connect with like-minded learners. Share your experiences, ask
                questions, and collaborate on projects to enhance your learning.
              </p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="font-myanmar text-xl font-semibold mb-4">
                Exclusive Content
              </h2>
              <p className="font-myanmar text-gray-700">
                Our Discord channel is filled with exclusive courses and
                learning materials that you won't find anywhere else. Stay up to
                date with new course drops and special content.
              </p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="font-myanmar text-xl font-semibold mb-4">
                Direct Support
              </h2>
              <p className="font-myanmar text-gray-700">
                Need help with a course? Get direct support from instructors in
                real-time through our{" "}
                <b className="text-customPurple">Discord</b> channel. We’re here
                to help you succeed!
              </p>
            </div>
          </div>
        </div>
      </div>
      <h1 className="font-myanmar mt-36 text-4xl text-center ">Payment</h1>
      <div className="flex justify-center mt-8 mb-8">
        {" "}
        <div className="bg-white rounded-lg shadow-xl flex w-full max-w-4xl p-6">
          <div className="flex-shrink-0 w-1/3 flex items-center justify-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmqejT9pD2DK7az6spi5Br06GqjuLEJffFnA&s"
              alt="Discord logo"
              className="w-32 h-auto"
            />
          </div>
          <div
            className="w-2/3 pl-6 flex flex-col justify-center"
            id="learning"
          >
            <h2 className="font-myanmar text-2xl font-bold mb-4">
              Payment by Bank Transfer
            </h2>
            <p className="font-myanmar text-md mt-4 text-black">
              <b>RIB:</b> 011450000037200000228353
            </p>
            <p className="font-myanmar text-lg text-gray-700 mt-8">
              You can transfer the payment of{" "}
              <b className="text-customPurple">$1</b> to our bank account using
              the RIB information provided below. After the transfer, please
              take a screenshot of the transaction and send it to us in a
              private message on Discord to get access to the courses.
            </p>
          </div>
        </div>
      </div>

      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* WhatsApp Card */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6 flex items-center">
            <FaWhatsapp className="text-green-500 text-3xl mr-4" />
            <div>
              <h2 className="font-myanmar text-xl font-semibold mb-2">
                WhatsApp
              </h2>
              <p className="font-myanmar text-gray-700">+212630487121</p>
            </div>
          </div>
        </div>

        {/* Discord Card */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6 flex items-center">
            <FaDiscord className="text-blue-500 text-3xl mr-4" />
            <div>
              <h2 className="font-myanmar text-xl font-semibold mb-2">
                Discord
              </h2>
              <p className="font-myanmar text-gray-700">moadelotmani666</p>
            </div>
          </div>
        </div>

        {/* Email Card */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6 flex items-center">
            <FaEnvelope className="text-red-500 text-3xl mr-4" />
            <div>
              <h2 className="font-myanmar text-xl font-semibold mb-2">Email</h2>
              <p className="font-myanmar text-gray-700">
                moadelotmani666@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
