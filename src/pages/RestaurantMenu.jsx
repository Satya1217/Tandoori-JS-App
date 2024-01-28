import React from "react";
import { useParams } from "react-router-dom";
import { RestaurantMenuShimmerUI } from "../shimmers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faRupeeSign,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import useRestaurantMenu from "../custom-hooks/useRestaurantMenu.js";
import { IMG_URL } from "../constants.js";
import { DiscountOfferCard } from "../components";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { restaurantInfo } = useRestaurantMenu(resId);
  // console.log(restaurantInfo, resId);
  return restaurantInfo === null ? (
    <RestaurantMenuShimmerUI />
  ) : (
    <div className="md:w-2/3 w-9/12 min-h-screen flex flex-col items-center mt-12">
      <div className=" w-full h-36 rounded-xl p-2 bg-gray-100 flex items-center justify-between">
        <div className="flex flex-col gap-1 px-4">
          <div className="font-bold text-xl">{restaurantInfo?.name}</div>
          <div className="text-xs text-gray-400 font-medium">
            {restaurantInfo?.cuisines?.join(", ")}
          </div>

          <div className="text-xs text-gray-400 font-medium">
            {restaurantInfo?.areaName +
              ", " +
              restaurantInfo?.sla?.lastMileTravelString}
          </div>
          <div className="mt-2 flex items-center gap-2 text-gray-500 font-medium text-xs md:text-sm">
            {restaurantInfo?.feeDetails?.message && (
              <>
                <img
                  className="h-5 mix-blend-multiply"
                  src={IMG_URL + restaurantInfo?.feeDetails?.icon}
                  alt="icon"
                />
                <span>{restaurantInfo?.feeDetails?.message}</span>
              </>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-1 mr-4 rounded-lg border-2 p-1 h-14 text-center bg-gray-50">
          <div className="rounded-lg  text-green-500 text-sm font-bold border-b-2 pb-1">
            <FontAwesomeIcon icon={faStar} />
            {restaurantInfo?.avgRatingString}
          </div>
          <div className=" rounded-lg text-gray-400 text-[0.6rem] font-semibold truncate">
            {restaurantInfo?.totalRatingsString}
          </div>
        </div>
      </div>
      <div className="mt-1  w-full h-32 rounded-xl px-3 py-2 bg-gray-100  flex flex-col justify-around overflow-hidden">
        <div className="flex w-full md:gap-8 gap-5 ml-6 font-semibold">
          <p className="flex gap-3 items-center">
            <FontAwesomeIcon icon={faClock} />
            {restaurantInfo?.sla?.slaString}
          </p>
          <p className="flex gap-3 items-center">
            <FontAwesomeIcon icon={faRupeeSign} />
            {restaurantInfo?.costForTwoMessage}
          </p>
        </div>
        <div className="flex items-center overflow-x-auto w-screen h-28  no-scrollbar scroll-smooth">
          <div className="w-[2000px] flex  items-center gap-4">
            <DiscountOfferCard />
          </div>
        </div>
      </div>
    </div>
  );
};
export default RestaurantMenu;
