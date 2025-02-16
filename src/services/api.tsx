import { useQuery } from "@tanstack/react-query";
import { Post } from "../types";


const fetchPosts = async (): Promise<Post[]> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    if (!response.ok) throw new Error("Failed to fetch posts")
    return response.json()
}

export const usePosts = () => {
    return useQuery<Post[]>({ queryKey: ["posts"], queryFn: fetchPosts })
}