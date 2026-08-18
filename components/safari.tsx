"use client";

import {
  ChevronLeft,
  ChevronRight,
  Copy,
  MoveRight,
  PanelLeft,
  Plus,
  Search,
  Share,
  ShieldHalf,
} from "lucide-react";
import WindowControls from "./window-controls";
import WindowWrapper from "./window-wrapper";
import { blogPosts } from "@/constants/safari";
import Image from "next/image";
import Link from "next/link";

const Safari = () => {
  return (
    <>
      <div className="window-header">
        <WindowControls target="safari" />

        <PanelLeft className="ml-10 icon" size={20} />

        <div className="flex items-center gap-1 ml-5">
          <ChevronLeft className="icon" size={20} />
          <ChevronRight className="icon" size={20} />
        </div>

        <div className="flex-1 flex-center gap-3">
          <ShieldHalf className="icon" size={20} />

          <div className="search">
            <Search className="icon" size={20} />
            <input
              type="text"
              placeholder="search or enter website name"
              className="flex-1"
            />
          </div>
        </div>

        <div className="flex items-center gap-5">
          <Share className="icon" size={20} />
          <Plus className="icon" size={20} />
          <Copy className="icon" size={20} />
        </div>
      </div>
      <div className="blog">
        <h2>My Developer Blog</h2>
        <div className="space-y-8">
          {blogPosts.map(({ id, image, title, date, link }) => (
            <div key={id} className="blog-post">
              <div className="col-span-2">
                <Image src={image} alt={image} width={100} height={100} />
              </div>

              <div className="content">
                <p>{date}</p>
                <h3>{title}</h3>
                <Link href={link} target="_blank">
                  Check out the full post{" "}
                  <MoveRight className="icon icon-hover" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const SafariWindow = WindowWrapper({ Component: Safari, windowKey: "safari" });

export default SafariWindow;
