"use server";

import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma";

// Create a new post

export async function createPost({
  name,
  createdById,
}: {
  name: string;
  createdById: string;
}) {
  try {
    const post = await prisma.post.create({
      data: {
        name,
        createdById,
      },
    });

    revalidatePath("/posts"); // Adjust the path based on your routing
    return { success: true, data: post };
  } catch (error) {
    return { success: false, error: "Failed to create post" };
  }
}

// Get all posts
export async function getPosts() {
  try {
    const posts = await prisma.post.findMany({
      include: {
        createdBy: true, // Include user data
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return { success: true, data: posts };
  } catch (error) {
    return { success: false, error: "Failed to fetch posts" };
  }
}

// Get a single post by ID
export async function getPost(id: number) {
  try {
    const post = await prisma.post.findUnique({
      where: { id },
      include: {
        createdBy: true,
      },
    });

    if (!post) {
      return { success: false, error: "Post not found" };
    }

    return { success: true, data: post };
  } catch (error) {
    return { success: false, error: "Failed to fetch post" };
  }
}

// Update a post
export async function updatePost({ id, name }: { id: number; name: string }) {
  try {
    const post = await prisma.post.update({
      where: { id },
      data: { name },
    });

    revalidatePath("/posts");
    return { success: true, data: post };
  } catch (error) {
    return { success: false, error: "Failed to update post" };
  }
}

// Delete a post
export async function deletePost(id: number) {
  try {
    await prisma.post.delete({
      where: { id },
    });

    revalidatePath("/posts");
    return { success: true };
  } catch (error) {
    return { success: false, error: "Failed to delete post" };
  }
}

// Search posts by name
export async function searchPosts(searchTerm: string) {
  try {
    const posts = await prisma.post.findMany({
      where: {
        name: {
          contains: searchTerm,
          mode: "insensitive", // Case-insensitive search
        },
      },
      include: {
        createdBy: true,
      },
    });

    return { success: true, data: posts };
  } catch (error) {
    return { success: false, error: "Failed to search posts" };
  }
}
