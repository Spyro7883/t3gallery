import Link from "next/link";
import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/402d7f80-ff48-4d1d-b649-8f2b2b8ae5c5-ax2ebr.jpg",
  "https://utfs.io/f/3e5d0c16-0cff-41bf-896b-7ab7805806d5-ds0fxn.jpg",
  "https://utfs.io/f/9ab7ff51-46eb-4bd7-a231-59d394e92937-mgbkqj.jpg"
]

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}))

export default async function HomePage() {

  const posts = await db.query.posts.findMany();

  console.log(posts)

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) =>
          <div key={post.id}>{post.name}</div>
        )}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
