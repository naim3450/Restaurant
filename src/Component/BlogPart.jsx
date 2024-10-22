import React from "react";
import Container from "./Container";
import BlogCard from "./BlogCard";
import Blog_one from '../assets/blog_one.jpg'


const BlogPart = () => {
  return (
    <section className="py-20 mt-[6vw]">
      <Container>
        <div className="">
          <h3 className="text-[70px] text-prh2 font-serif leading-9 font-regular text-center mx-auto">
            Our Blog & Articles
          </h3>
          <p className="text-[20px] text-prh2 w-[750px] text-center font-montserrat font-medium mx-auto leading-7 pt-12">
            We consider all the drivers of change gives you the components you
            need to change to create a truly happens.
          </p>
        </div>
        <div className="mt-14 flex flex-wrap gap-5 justify-center">
          <BlogCard
            src={Blog_one}
            ptext={`January 3, 2023`}
            headding={`How to prepare a delicious gluten free sushi`}
          />
          <BlogCard
            src={Blog_one}
            ptext={`January 3, 2023`}
            headding={`Exclusive baking lessons from the pastry king`}
          />
          <BlogCard
            src={Blog_one}
            ptext={`January 3, 2023`}
            headding={`5 great cooking gadgets you can buy to save time`}
          />
          <BlogCard
            src={Blog_one}
            ptext={`January 3, 2023`}
            headding={`How to prepare a delicious gluten free sushi`}
          />
          <BlogCard
            src={Blog_one}
            ptext={`January 3, 2023`}
            headding={`Exclusive baking lessons from the pastry king`}
          />
          <BlogCard
            src={Blog_one}
            ptext={`January 3, 2023`}
            headding={`5 great cooking gadgets you can buy to save time`}
          />
          <BlogCard
            src={Blog_one}
            ptext={`January 3, 2023`}
            headding={`Exclusive baking lessons from the pastry king`}
          />
          <BlogCard
            src={Blog_one}
            ptext={`January 3, 2023`}
            headding={`Exclusive baking lessons from the pastry king`}
          />
          <BlogCard
            src={Blog_one}
            ptext={`January 3, 2023`}
            headding={`7 delicious cheesecake recipes you can prepare`}
          />
          <BlogCard
            src={Blog_one}
            ptext={`January 3, 2023`}
            headding={`How to prepare a delicious gluten free sushi`}
          />
          <BlogCard
            src={Blog_one}
            ptext={`January 3, 2023`}
            headding={`Top 20 simple and quick desserts for kids`}
          />
          <BlogCard
            src={Blog_one}
            ptext={`January 3, 2023`}
            headding={`5 great cooking gadgets you can buy to save time`}
          />


        </div>
      </Container>
    </section>
  );
};

export default BlogPart;
