"use client";
import { deletePost, updatePost } from "@/actions/post";
import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
interface TodoProps {
  name: string;
  id: number;
}
const PostItem = ({ id, name }: TodoProps) => {
  const router = useRouter();

  const handleDelete = (id: number) => {
    try {
      deletePost(id);
      router.refresh();
      toast.success("Todo deleted successfully.");
    } catch {
      toast.error("Something went wrong.");
    }
  };
  function changeName(id: number, newName: string) {
    try {
      updatePost({ id, name: newName });
      router.refresh();
    } catch {
      toast.error("Something went wrong");
    }
  }
  return (
    <div className="flex items-center justify-normal gap-12">
      <section className="flex-1 my-4">
        <Label>Post</Label>
        <Input
          placeholder="Enter Post"
          defaultValue={name}
          onChange={(e) => changeName(id, e.target.value)}
        />
      </section>
      <section>
        <Button
          size="sm"
          variant="destructive"
          onClick={() => handleDelete(id)}
        >
          <Trash />
        </Button>
      </section>
    </div>
  );
};

export default PostItem;
