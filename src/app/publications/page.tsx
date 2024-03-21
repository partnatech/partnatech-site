import Link from "next/link";
import React from "react";

import { publicationsCopy } from "@/utils/i18n/publications";
import Image from "next/image";

export default function page() {
  return (
    <div className="mt-12 space-y-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Videos</h2>
        </div>
        <div className="mx-auto mt-6 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {publicationsCopy.videos.map((video, index) => (
            <div
              key={`video-${index}`}
              className="flex flex-col items-start justify-between ring-1 ring-gray-400/20 py-8 px-4 ring-inset rounded-md bg-gray-400/10"
            >
              <Link href={video.href} target="_blank">
                <div className="relative w-full">
                  <iframe
                    width="560"
                    height="240"
                    src={video.embedUrl}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    className="aspect-[16/9] w-full bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  ></iframe>
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
              </Link>

              <div className="max-w-xl">
                <time dateTime={video.datetime} className="text-xs">
                  {video.date}
                </time>
                <div className="flex items-center gap-x-4 text-xs mt-8">
                  {video.categories.map((category, index) => (
                    <p
                      key={`category-${index}`}
                      className="relative z-10 rounded-full bg-primary-900/10 px-3 py-1.5 font-medium text-primary-300 ring-1 ring-inset ring-primary-700/30"
                    >
                      {category.title}
                    </p>
                  ))}
                </div>

                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6">
                    <Link href={video.href}>
                      <span className="absolute inset-0" />
                      {video.title}
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6">{video.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Blog</h2>
        </div>
        <div className="mx-auto mt-6 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-gray-200 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {publicationsCopy.blogs.map((blog) => (
            <Link href={blog.mediumUrl} key={blog.id} target="_blank">
              <div className="flex max-w-xl flex-col items-start justify-between bg-gray-400/10 ring-1 ring-gray-400/20 rounded-md py-8 px-4">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={blog.datetime}>{blog.date}</time>
                  <p className="relative z-10 rounded-full px-3 py-1.5 font-medium text-primary-300 ring-1 ring-inset ring-primary-700/30 bg-primary-900/10">
                    {blog.category.title}
                  </p>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6">
                    <p>
                      <span className="absolute inset-0" />
                      {blog.title}
                    </p>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6">{blog.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <Image
                    src={blog.author.imageUrl}
                    alt=""
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full"
                  />
                  <div className="text-sm leading-6">
                    <p className="font-semibold">{blog.author.name}</p>
                    <p>{blog.author.role}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
