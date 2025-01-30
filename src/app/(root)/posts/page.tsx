import { getPosts } from "@/actions/post";
import Todos from "@/components/Posts";
import { buttonVariants } from "@/components/ui/button";
import { Post } from "@prisma/client";
import { PlusCircle } from "lucide-react";
import Link from "next/link";

export const revalidate = 0;

const TodosPage = async () => {
  const response = await getPosts();
  const posts: Post[] =
    response?.data?.map((post: any) => ({
      id: post.id,
      name: post.name,
    })) || [];
  return (
    <div>
      <div className="mt-3 mb-5 flex items-center justify-center">
        <div>
          <h2 className="text-3xl font-semibold my-4">Posts</h2>
          <p className="my-3 text-muted-foreground">
            Be Productive by managing posts efficiently.
          </p>
        </div>
        <div>
          <Link href="/" className={buttonVariants()}>
            Add New <PlusCircle className="ml-2" />
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center gap-16 flex-wrap">
        <div className="lg:w-1/3 md:w-2/5 w-[95%] p-6 overflow-scroll no-scrollbar border h-[25rem]">
          <h3 className="text-2xl font-semibold text-center text-gray-700">
            Pending Tasks
          </h3>
          <Todos todos={posts} />
        </div>
      </div>
    </div>
  );
};

export default TodosPage;
