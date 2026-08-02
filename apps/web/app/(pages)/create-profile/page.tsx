"use client"
import { useState } from "react";
import Image from "next/image";
import { Input } from "../../components/input";
import { IoSchoolOutline } from "react-icons/io5";
import { LiaSchoolSolid } from "react-icons/lia";
import { GrCertificate } from "react-icons/gr";
import { GiSchoolBag } from "react-icons/gi";
import { GoArrowRight } from "react-icons/go";
import isEqual from 'lodash/isEqual';

export const ColoredVectorDash = () => <div className="flex items-center">
  <span className="border-3 border-red-400 w-7 h-1" ></span>
  <span className="border-3 border-yellow-400 w-7 h-1" ></span>
  <span className="border-3 border-green-800 w-7 h-1" ></span>
</div>

export default function CreateProfile() {
  const [currentLevel, setCurrentLevel] = useState<object>({ icon: <GrCertificate />, title: "JHS 3" });

  const beceCourses = [
    "ARABIC",
    "CAREER TECHNOLOGY",
    "COMPUTING",
    "CREATIVE ART AND DESIGN",
    "ENGLISH LANGUAGE",
    "FRENCH",
    "GHANAIAN LANGUAGE",
    "MATHEMATICS",
    "RELIGIOUS AND MORAL EDUCATION",
    "SCIENCE",
    "SOCIAL STUDIES",
  ];


  const grades = ["None",1, 2, 3, 4, 5, 6, 7, 8, 9]


  return (
    <div className="bg-background h-screen px-100 py-15">
      <div className="mb-8">
        <div className="text-primary-green-500 text-[2rem] font-semibold">Let&lsquo;s get to know you</div>
        <div className="mb-3">Help us personalize your career pathway recommendations.</div>

        <ColoredVectorDash />
      </div>

      <div className="grid grid-cols-2 gap-5">
        <div className="bg-white p-3 rounded-2xl">
          <div className="text-primary-green-500 font-semibold mb-5">Your profile</div>
          <div className="flex gap-3 mb-8">
            <div>
              <Image src="/profileimage.png" alt="profile" width={100} height={100} />
            </div>

            <div>
              <div className="w-80">
                <Input inputSize="sm" label="Enter you name:" placeholder="Eg. Yaa Mansah" />
              </div>
            </div>
          </div>

          <div>
            <div className="text-primary-green-500 text-sm font-semibold mb-4">Current Level</div>

            <div className="grid grid-cols-4 gap-3 mb-5">
              {[{ icon: <LiaSchoolSolid />, title: "JHS 1" }, { icon: <GiSchoolBag />, title: "JHS 2" }, { icon: <GrCertificate />, title: "JHS 3" }, { icon: <IoSchoolOutline />, title: "Graduate" },].map((item, index) => (
                <div onClick={() => setCurrentLevel(item)} key={index} className={`${isEqual(item, currentLevel) ? "bg-primary-green-500 text-white" : "hover:bg-stone-100"} flex flex-col text-primary-green-500 font-semibold border py-3 rounded-lg hover:cursor-pointer  items-center gap-3 mb-3`}>
                  <div className="">{item.icon}</div>
                  <div>{item.title}</div>
                </div>
              ))}
            </div>


            <div className="w-full">
              <Input inputSize="sm" label="Preferred School (optional):" placeholder="Enter preferred senior high school you would like to attend" />
            </div>
          </div>

        </div>
        <div className=" px-5 py-6 rounded-2xl">
          <div className=" mb-2 text-xl font-semibold text-primary-green-500">Add School Results <span className="text-sm text-stone-600">(optional)</span></div>
          <div className="mb-3 text-sm">Enter your BECE results or most recent academic performance</div>
          <div className="flex mb-10"> <ColoredVectorDash /> </div>


          <div>
            <div className="flex justify-between text-sm text-primary-green-500 font-semibold mb-3">
              <div>Subject</div>
              <div className="pr-9">Grade</div>
            </div>

            <div className="h-50 overflow-y-auto mb-5 pr-5">
              {
                beceCourses.map((course, index) => (
                  <div key={index} className="flex justify-between text-sm  font-semibold mb-3">
                    <div className="text-xs">{course}</div>
                    <div>
                      <select className="border border-gray-200 rounded-lg bg-white text-gray-900 w-full px-2 py-1 text-xs">
                        {grades.map((grade, index) => (
                          <option key={index} value={grade}>{grade}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                ))}

            </div>

            <div>
              <button className="bg-primary-green-500 w-full p-3 flex items-center justify-between gap-2 rounded-full text-stone-100 hover:bg-primary-green-500/90 ">
                <span className="w-full">Continue </span> <span className="justify-self-end"><GoArrowRight /></span>
              </button>
            </div>

          </div>

        </div>


      </div>
    </div>
  );
}