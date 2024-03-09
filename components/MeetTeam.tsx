import React from "react";
import { title, subtitle } from "@/components/primitives";
const MeetTeam = () => {
  return (
    <div
      className="inline-block max-w-lg text-center mt-[6rem] justify-center"
      id="aabout"
    >
      <h1 className={`${title()} text-6xl md:text-9xl font-black `}>
        Meet The Team
      </h1>
      <div
        className={subtitle({
          class:
            "mt-11 flex flex-col justify-center items-center md:grid md:grid-cols-3 md:grid-flow-row gap-4 md:gap-8    ",
        })}
      >
        <div className="">
          <img
            src="/images/cto-removebg-preview.png"
            alt=""
            className="border rounded-full w-[10rem] "
          />
          <div className="flex flex-col gap-3">
            <h1 className="font-semibold">CTO</h1>
            <h3>Yocor, Angelo</h3>
          </div>
        </div>
        <div className="">
          <img
            src="/images/ceo-removebg-preview.png"
            alt=""
            className="border rounded-full w-[10rem] "
          />
          <div className="flex flex-col gap-3">
            <h1 className="font-semibold">CEO</h1>
            <h3>Saturno, M-jey</h3>
          </div>
        </div>
        <div className="">
          <img
            src="/images/coo-removebg-preview.png"
            alt=""
            className="border rounded-full w-[8rem] "
          />
          <div className="flex flex-col gap-3">
            <h1 className="font-semibold">COO</h1>
            <h3>Garcia, Charles</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetTeam;
