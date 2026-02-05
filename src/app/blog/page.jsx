import BlogCard from "../../components/ui/BlogCard";
import { blogMetadata, blogCards, blogHeader } from "../../data/blog";
import { blogStructuredData } from "../../data/blog";
export const metadata = blogMetadata;

function BlogStructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(blogStructuredData)
      }}
    />
  );
}

export default function Blog() {
  return (
    <div className="flex flex-col gap-60 max-xl:gap-10 max-md:gap-8 max-sm:gap-6 mb-5">
      <div className="flex flex-col py-4 gap-[26px] max-sm:gap-4 padding-responsive">
        <h1 className="heading-responsive">
          {blogHeader.title}
        </h1>
        <p className="text-[20px] mb-6 max-sm:text-[14px]">
          {blogHeader.description}
        </p>
      </div>

      <div className="flex flex-col gap-60 max-sm:gap-20">
        {blogCards.map((card, index) => (
          <BlogCard
            key={index}
            src={card.src}
            alt={card.alt}
            imageTitle={card.imageTitle}
            title={card.title}
            description={card.description}
            href={card.href}
          />
        ))}
      </div>
    </div>
  );
}