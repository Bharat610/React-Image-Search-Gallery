import React from "react";
import {nanoid} from "nanoid";
import { FaRegEye } from "react-icons/fa";
import { GoDownload } from "react-icons/go";
import { AiOutlineLike } from "react-icons/ai";


export default function ImageBox(props) {
let newArr = [];
  return (
    <div className="overflow-hidden basis-[30%] bg-white border border-gray-200">
      <img src={props.image.webformatURL} className="w-full h-[250px] object-cover" />
      <div className="px-6 py-4">
        <div className="flex justify-between items-center mb-4">
          <a target="_blank" href={`https://pixabay.com/users/${props.image.user}-${props.image.user_id}`} className="flex items-center gap-1.5">
            <img src={props.image.userImageURL}  className="rounded-full w-10 h-10"/>
            <h3 className="text-black text-medium">{props.image.user}</h3>
          </a>
         <a href={props.image.pageURL} target="_blank"
         className=" basis-[40%] text-teal-500 rounded-full border-2 border-teal-500 text-center py-1.5 cursor-pointer leading-4	hover:bg-teal-500 hover:text-white">
          <GoDownload className="-mt-1 mr-2 inline-block align-text-bottom" />Download</a>
        </div>
        <ul className="text-gray-700">
          <li className="flex justify-between">
            <span><FaRegEye className="mr-2 inline-block align-text-bottom"/>Views</span> {props.image.views}
          </li>
          <li className="flex justify-between">
            <span><GoDownload className="mr-2 inline-block align-text-bottom" />Downloads</span> {props.image.downloads}
          </li>
          <li className="flex justify-between">
          <span><AiOutlineLike className="mr-2 inline-block align-text-bottom" />Likes</span> {props.image.likes}
          </li>
        </ul>
      </div>
      <div className="px-6 pb-4 mb">
        {newArr = props.image.tags.split(",").map(tag => {
          return(
            <span key={nanoid()} className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm  text-gray-700 mr-2">
            #{tag}
          </span>
          )
        })}
      </div>
    </div>
  );
}
