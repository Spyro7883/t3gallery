import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/402d7f80-ff48-4d1d-b649-8f2b2b8ae5c5-ax2ebr.jpg",
  "https://utfs.io/f/3e5d0c16-0cff-41bf-896b-7ab7805806d5-ds0fxn.jpg",
  "https://utfs.io/f/9ab7ff51-46eb-4bd7-a231-59d394e92937-mgbkqj.jpg"
]

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}))

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
