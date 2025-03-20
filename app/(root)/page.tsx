import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilter from "@/components/search/HomeFilter";
import LocalSearch from "@/components/search/LocalSearch";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import { Link } from "lucide-react";
import React from "react";

const questions = [
  {
    _id: "1",
    title: "How to use Next.js?",
    content: "I am new to Next.js and I want to learn how to use it.",
    tags: [
      {
        _id: "1",
        name: "Next.js",
      },
    ],
    author: {
      _id: "1",
      name: "John Doe",
      image: "https://randomuser.me/api/portraits/lego/1.jpg",
    },
    createdAt: new Date(),
    upvotes: 10,
    downvotes: 5,
    answers: 3,
    views: 100,
  },
  {
    _id: "2",
    title: "How to use Next.js?",
    content: "I am new to Next.js and I want to learn how to use it.",
    tags: [
      {
        _id: "1",
        name: "Next.js",
      },
    ],
    author: {
      _id: "1",
      name: "John Doe",
      image: "https://randomuser.me/api/portraits/lego/1.jpg",
    },
    createdAt: new Date(),
    upvotes: 10,
    downvotes: 5,
    answers: 3,
    views: 100,
  },
];
const Home = () => {
  return (
    <>
      <section className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>

        <Button
          className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900"
          asChild
        >
          <Link href={ROUTES.ASK_QUESTION}>Ask a Question</Link>
        </Button>
      </section>
      <section className="mt-11">
        <LocalSearch
          route="/"
          imgSrc="/icons/search.svg"
          placeholder="Search questions..."
          otherClasses="flex-1"
        />
      </section>
      <HomeFilter />

      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.map((question) => (
          <QuestionCard key={question._id} question={question} />
        ))}
      </div>
    </>
  );
};

export default Home;
