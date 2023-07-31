import Image from "next/image";
import React from "react";

const contact = () => {
  return (
    <div>
      <div className="bg-gray-200 w-full min-h-screen flex items-center justify-center">
        <div className="lg:flex items-center space-x-16">
          <div className="w-5/6 md:w-3/4 lg:w-2/3 xl:w-[500px] 2xl:w-[550px] mt-8 mx-auto px-16 py-8 rounded-lg">
            <h2 className="text-center text-2xl font-bold tracking-wide text-gray-800">
              Sign Up
            </h2>
            <p className="text-center text-sm text-gray-600 mt-2">
              Already have an account?{" "}
              <a
                href="#"
                className="text-blue-600 hover:text-blue-700 hover:underline"
                title="Sign In"
              >
                Sign in here
              </a>
            </p>

            <form className="my-8 text-sm">
              <div className="flex flex-col my-4">
                <label for="name" className="text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900"
                  placeholder="Enter your name"
                />
              </div>

              <div className="flex flex-col my-4">
                <label for="email" className="text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900"
                  placeholder="Enter your email"
                />
              </div>
              <div className="flex flex-col my-4">
                <label for="email" className="text-gray-700">
                  Message
                </label>
                <textarea
                  placeholder="message"
                  cols="30"
                  rows="10"
                  className="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900"
                ></textarea>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="remember_me"
                  id="remember_me"
                  className="mr-2 focus:ring-0 rounded"
                />
                <label for="remember_me" className="text-gray-700">
                  I accept the{" "}
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-700 hover:underline"
                  >
                    terms
                  </a>{" "}
                  and{" "}
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-700 hover:underline"
                  >
                    privacy policy
                  </a>
                </label>
              </div>

              <div className="my-4 flex items-center justify-end space-x-4">
                <button className="bg-blue-600 hover:bg-blue-700 rounded-lg px-8 py-2 text-gray-100 hover:shadow-xl transition duration-150 uppercase">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
          <div className="flex items-center justify-center">
            {" "}
            <Image
              src="/images/contact.png"
              alt="contact"
              width={"500"}
              height={"500"}
              className={"w-[]"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;
