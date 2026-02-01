// app/blog/[slug]/page.js
import Image from "next/image";
import Head from "next/head";
import { notFound } from "next/navigation";
import img1 from "@/assets/image/blogImg1.jpg";




import { ImTextColor } from "react-icons/im";
import { color } from "framer-motion";
import { Playwrite_CA } from "next/font/google";

const blogData = [



  

  {
    slug: "embracing-tomorrows-innovations",
    heading: "Embracing Tomorrow's Innovations: What's Next in Technology",
    date: "2024-09-09", // Add this field for the date
    author: "Charchit Sharma", // Add this field for the author
    image: img1,
    content:
      " Innovation drives progress, always pushing us towards a better tomorrow. As we look ahead, it's important to explore the new trends and technologies that will shape our future. Join us as we uncover the potential of tomorrow's innovations.",
    keywords: [
      "AI",
      "Quantum Computing",
      "Technology Trends",
      "Machine Learning",
      "Future Technology",
    ],
    description:
      "Discover the next big things in technology, from AI to quantum computing, and how they will impact our future.",
    post: [
      {
        title1: "Artificial Intelligence (AI) and Machine Learning:",
        about:
          "Technology like AI and machine learning is transforming industries by enabling computers to learn from data, anticipate results, and automate processes. In sectors such as healthcare, finance, and manufacturing, the integration of these tools has revolutionized operations, fostering efficiency and unlocking new creative avenues. For instance, in the realm of assignment writing services, AI-powered tools can aid in research, generate content, and refine writing, streamlining the writing process and enhancing productivity. This not only saves time but also elevates the quality of written assignments, offering students and professionals alike valuable support in their academic and professional endeavors.",
      },

      {
        title1: "Internet of Things (IoT): ",
        about:
          "The Internet of Things (IoT) revolutionizes the way we interact with our environment by connecting everyday objects to the internet. From smart homes equipped with thermostats, lighting systems, and security cameras that can be controlled remotely via smartphones to smart cities implementing intelligent infrastructure for efficient energy management, waste reduction, and traffic optimization, IoT is reshaping our daily lives. By seamlessly integrating technology into various aspects of our environment, IoT enhances convenience, efficiency, and sustainability. This interconnected network of devices not only provides real-time data insights but also enables automation and decision-making, ultimately leading to smarter, more adaptive environments. Whether it's monitoring energy usage in our homes or streamlining transportation systems in our cities, IoT is driving transformative changes and paving the way for a more connected and intelligent future.",
      },
      {
        title: "Blockchain technology:",
        about:
          "Blockchain, the technology behind cryptocurrencies like Bitcoin, is about more than just money. It's a secure way to verify transactions and identities. This can be used in many areas, like supply chain management and voting systems, to make sure things are done safely and transparently. ",
      },
      {
        title: "5G Technology: ",
        about:
          " With 5G technology, the internet is getting faster than ever. This means quicker connections, almost no delay, and more devices connected at once. It'll change how we communicate, use our phones, and even how things like self-driving cars work. ",
      },
      {
        title: "Health and Agriculture Breakthroughs:",
        about:
          "Advances in biotechnology and genomics are changing how we approach healthcare and farming. Personalized medicine, gene editing, and sustainable agriculture are just some of the ways these technologies are making a difference in our lives. ",
      },
      {
        title: "Quantum computing: ",
        about:
          "Quantum computing is a game-changer in computer technology, taking us beyond the limits of traditional computing. Its immense power allows it to tackle incredibly complex problems that were previously impossible to solve. This breakthrough opens doors to major advancements in critical fields like medicine, where it could accelerate drug discovery processes, leading to new treatments for diseases. Similarly, in encryption, quantum computing presents both challenges and opportunities, potentially revolutionizing how we secure information. Moreover, its ability to simulate molecular structures could fast-track discoveries in materials science. As we navigate this frontier, quality content writing services can offer insightful materials that effectively communicate the significance of quantum computing's impact across industries.  ",
      },
      {
        title: "Conclusion: ",
        about:
          "The future of innovation is bright, with endless possibilities. From smart machines and connected devices to secure transactions and powerful computers, technology is changing the way we live and work. By embracing these innovations, we can create a better world for ourselves and future generations. Innovation isn't just about making new things; it's about dreaming big and pushing boundaries. Let's journey together into a future filled with promise, where anything is possible.",
      },
    ],
  },

 
    
  
];
// Async function to generate metadata for the page
export async function generateMetadata({ params }) {
  // Ensure the params are awaited
  const { slug } = await params;

  // Find the blog post using the slug
  const post = blogData.find((blog) => blog.slug === slug);

  if (!post) {
    return notFound(); // Handle 404 if the slug is not found
  }

  // Return metadata for the blog post
  return {
    title: post.heading, // Use the blog heading as the title
    description: post.description, // Use the blog description for the meta description
    keywords: post.keywords.join(", "), // Convert keywords array to a comma-separated string
  };
}

// Main component for the blog post page
export default function BlogPostPage({ params }) {
  // Await the params to ensure we can access `slug`
  const { slug } = params; // Fix by awaiting `params`

  // Find the blog post using the slug
  const blog = blogData.find((b) => b.slug === slug);

  if (!blog) {
    return notFound(); // Handle 404 if the blog is not found
  }

 return (
  <div className="bg-white text-[#111]">
    <div className="max-w-[900px] mx-auto px-5 sm:px-8 lg:px-0 pt-10 pb-16">

      {/* Category Label */}
      <p className="text-sm tracking-widest text-green-700 font-semibold uppercase mb-3">
        Blog
      </p>

      {/* Blog Heading */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 font-serif">
        {blog.heading}
      </h1>

      {/* Author + Date */}
      <div className="flex items-center justify-between border-y border-gray-200 py-4 mb-8 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <span className="text-gray-500">By</span>
          <span className="font-semibold text-gray-900">{blog.author}</span>
        </div>
        <div className="italic">{blog.date}</div>
      </div>

      {/* Blog Image */}
      <div className="mb-10">
        <Image
          className="rounded-md w-full h-auto object-cover shadow-sm"
          src={blog.image}
          alt={blog.heading}
          priority
        />
      </div>

      {/* Intro Content */}
      <div className="text-lg leading-8 text-gray-800 mb-10 font-serif">
        {blog.content}
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 my-10"></div>

      {/* Blog Sections */}
      <div className="space-y-10">
        {blog.post.map((item, index) => (
          <div key={index}>

            {item.title1 && (
              <h2 className="text-2xl font-bold mb-3 font-serif text-gray-900">
                {item.title1}
              </h2>
            )}

            {item.title && (
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                {item.title}
              </h3>
            )}

            {item.title4 && (
              <h4 className="text-lg font-semibold mb-2 text-gray-700">
                {item.title4}
              </h4>
            )}

            {item.about && (
              <p className="text-base leading-7 text-gray-700">
                {item.about}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Bottom Author Box */}
      <div className="mt-16 border-t border-gray-300 pt-6 flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-500">Written by</p>
          <p className="font-semibold text-gray-900">{blog.author}</p>
        </div>
        <p className="text-gray-500 italic text-sm">{blog.date}</p>
      </div>

    </div>
  </div>


);
}