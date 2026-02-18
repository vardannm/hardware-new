"use client";
import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { BLOG_DETAILS } from "../../../data/blogDetail";
import BackButton from "../../../components/ui/BackButton";

export default function BlogPage({ params }) {
  const resolvedParams = React.use(params);

  const slug = resolvedParams.slug;
  const blog = BLOG_DETAILS[slug];

  if (!blog) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-60 mb-60 w-full">
      <div className="w-full h-[492px] relative max-sm:hidden">
        <Image
          src={blog.heroImage}
          alt={blog.heroAlt}
          title={blog.heroTitle}
          fill
          className="object-cover"
        />
      </div>
      <div className="padding-responsive text-start max-sm:pt-10">
        <BackButton  />
        <h1 className="heading-responsive mb-60">{blog.pageTitle}</h1>
        <p className="h4-regular">
  {Array.isArray(blog.description)
    ? blog.description.map((para, i) => (
        Array.isArray(para)
          ? para.map((part, index) => {
              if (typeof part === "string") return part;

              if (part.type === "link") {
                return (
                  <a
                    key={index}
                    href={part.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-inherit underline hover:opacity-70 transition"
                  >
                    {part.text}
                  </a>
                );
              }

              return null;
            })
          : para
      ))
    : blog.description}
</p>


      </div>
      {blog.sections.map((section, index) => (
        <div key={index}>
          {section.type === "card" && (
            <div className="card-per-blog-description space-y-4 bg-secondary">
              <h2 className="h2-bold">{section.title}</h2>
              <p className="h4-regular">
  {Array.isArray(section.highlight)
    ? section.highlight.map((part, index) => {
        if (typeof part === "string") return part;

        if (part.type === "link") {
          return (
            <a
              key={index}
              href={part.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-inherit underline hover:opacity-70 transition"
            >
              {part.text}
            </a>
          );
        }

        return null;
      })
    : section.highlight}
</p>


              {section.lists?.map((list, listIndex) => (
                <div key={listIndex} className="space-y-4">
                  {list.title && (
  <h3 className="h4-regular">
    {Array.isArray(list.title)
      ? list.title.map((part, index) => {
          if (typeof part === "string") return part;

          if (part.type === "link") {
            return (
              <a
                key={index}
                href={part.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-inherit underline hover:opacity-70 transition"
              >
                {part.text}
              </a>
            );
          }

          return null;
        })
      : list.title}
  </h3>
)}

              {list.items && (
  <ul className="list-disc pl-5 space-y-5">
    {list.items.map((item, i) => (
      <li key={i}>
        {item.bold && (
          item.url ? (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="h4-bold text-inherit underline hover:opacity-70 transition"
            >
              {item.bold}
            </a>
          ) : (
            <span className="h4-bold">{item.bold}</span>
          )
        )}{" "}

        {/* Text Part (supports inline links) */}
        <span className="h4-regular">
          {Array.isArray(item.text)
            ? item.text.map((part, index) => {
                if (typeof part === "string") return part;

                if (part.type === "link") {
                  return (
                    <a
                      key={index}
                      href={part.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-inherit underline hover:opacity-70 transition"
                    >
                      {part.text}
                    </a>
                  );
                }

                return null;
              })
            : item.text}
        </span>
      </li>
    ))}
  </ul>
)}



                  {list.example && (
                    <p className="mt-4 h4-regular text-muted-foreground">
                      <span>Example: </span>
                      {list.example}
                    </p>
                  )}
                </div>
              ))}

              {section.paragraphs && (
  <div className="space-y-5">
    {section.paragraphs.map((para, i) => (
      <p key={i} className="h4-regular">
        {Array.isArray(para)
          ? para.map((part, index) => {
              if (typeof part === "string") return part;

              if (part.type === "link") {
                return (
                  <a
                    key={index}
                    href={part.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" underline"
                  >
                    {part.text}
                  </a>
                );
              }

              return null;
            })
          : para}
      </p>
    ))}
  </div>
)}

              {section.takeaway && (
                <div>
                  <span className="h4-bold">Key Takeaway: </span>
                  <span className="h4-regular">{section.takeaway}</span>
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
