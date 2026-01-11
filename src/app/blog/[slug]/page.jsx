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
      <div className="w-full h-[492px] relative max-sm:h-[400px]">
        <Image
          src={blog.heroImage}
          alt={blog.heroAlt}
          title={blog.heroTitle}
          fill
          className="object-cover"
        />
      </div>
      <div className="padding-responsive text-start">
        <BackButton  />
        <p className="heading-responsive mb-60">{blog.pageTitle}</p>
        <p className="h4-regular">{blog.description}</p>
      </div>
      {blog.sections.map((section, index) => (
        <div key={index}>
          {section.type === "card" && (
            <div className="card-per-blog-description space-y-4 bg-secondary">
              <p className="h2-bold">{section.title}</p>
              <p className="h4-regular">{section.highlight}</p>

              {section.lists?.map((list, listIndex) => (
                <div key={listIndex} className="space-y-4">
                  {list.title && <p className="h4-regular">{list.title}</p>}

                  {list.items && (
                    <ul className="list-disc pl-5 space-y-5">
                      {list.items.map((item, i) => (
                        <li key={i}>
                          {item.bold && (
                            <span className="h4-bold">{item.bold} </span>
                          )}
                          <span className="h4-regular">{item.text}</span>
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
                      {para}
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
