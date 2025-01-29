"use client";

import PostItem from "@/components/PostItem";
import { Post } from "@prisma/client";

interface TodosProps {
  todos: Post[];
}
export default function Todos({ todos }: TodosProps) {
  return (
    <main className="my-8">
      {todos.length > 0 ? (
        todos.map((todo: Post) => {
          return <PostItem key={todo.id} {...todo} />;
        })
      ) : (
        <p className="my-8 text-lg text-muted-foreground text-center">
          No Posts
        </p>
      )}
    </main>
  );
}
