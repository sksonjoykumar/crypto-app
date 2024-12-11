import React from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  ViberShareButton,
  VKShareButton,
  PinterestIcon,
  PocketIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  ViberIcon,
  VKIcon,
} from "react-share";

function ShareSocialMedia({ url, title }) {
  return (
    <div className="mt-3 ">
      <div className="flex gap-2 flex-wrap justify-center  items-center overflow-y-scroll md:overflow-y-hidden w-auto sm:w-[400px] h-40 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg px-4 py-3 border border-[#3A80E9]">
        {/* Facebook Share */}
        <FacebookShareButton url={url} quote={title}>
          <FacebookIcon size={40} round />
        </FacebookShareButton>
        {/* Twitter Share */}
        <TwitterShareButton url={url} title={title}>
          <TwitterIcon size={40} round />
        </TwitterShareButton>
        {/* LinkedIn Share */}
        <LinkedinShareButton url={url} title={title}>
          <LinkedinIcon size={40} round />
        </LinkedinShareButton>
        {/* WhatsApp Share */}
        <WhatsappShareButton url={url} title={title}>
          <WhatsappIcon size={40} round />
        </WhatsappShareButton>
        {/* PinterestShare */}
        <PinterestShareButton url={url} title={title}>
          <PinterestIcon size={40} round />
        </PinterestShareButton>
        {/* PocketShareButton */}
        <PocketShareButton url={url} title={title}>
          <PocketIcon size={40} round />
        </PocketShareButton>
        {/* RedditShareButton */}
        <RedditShareButton url={url} title={title}>
          <RedditIcon size={40} round />
        </RedditShareButton>
        {/* TelegramShareButton */}
        <TelegramShareButton url={url} title={title}>
          <TelegramIcon size={40} round />
        </TelegramShareButton>
        {/* TumblrShareButton */}
        <TumblrShareButton url={url} title={title}>
          <TumblrIcon size={40} round />
        </TumblrShareButton>
        {/* ViberShareButton */}
        <ViberShareButton url={url} title={title}>
          <ViberIcon size={40} round />
        </ViberShareButton>
        {/* VKShareButton */}
        <VKShareButton url={url} title={title}>
          <VKIcon size={40} round />
        </VKShareButton>
        {/* TwitterShareButton */}
        <TwitterShareButton url={url} title={title}>
          <TwitterIcon size={40} round />
        </TwitterShareButton>
      </div>
    </div>
  );
}

export default ShareSocialMedia;
