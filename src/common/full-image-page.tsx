import { clerkClient } from "@clerk/nextjs/server";
import { deleteImage, getImage } from "~/server/queries";
import { Button } from "../components/ui/button";

export default async function FullPageImageView(props: { id: number }) {
    const image = await getImage(props.id);
    const uploaderInfo = await clerkClient.users.getUser(image.userId)
    return <div className="flex h-full w-full min-w-0">
        <div className="flex flex-shrink items-center justify-center">
            <img src={image.url} className="flex-shrink object-contain" />
        </div>
        <div className="flex w-48 flex-col flex-shrink-0 gap-2 border-l">
            <div className="border-b text-lg text-center p-2">{image.name}</div>
            <div className="p-2">
                <div>Uploaded By:</div>
                <div>{uploaderInfo.fullName}</div>
            </div>
            <div className="p-2">
                <div>Created On:</div>
                <div>{image.createdAt.toLocaleDateString()}</div>
            </div>
            <div className="p-2">
                <form action={async () => {
                    "use server";
                    await deleteImage(props.id)
                }}>
                    <Button type="submit" variant="destructive">Delete</Button>
                </form>
            </div>
        </div>
    </div>
}