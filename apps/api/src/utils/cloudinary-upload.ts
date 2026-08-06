import { Readable } from "node:stream";
import { v2 as cloudinary } from "cloudinary";

export function uploadBufferToCloudinary(buffer: Buffer, folder: string) {
  return new Promise<{ secure_url: string; public_id: string }>((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream({ folder }, (error, result) => {
      if (error || !result) {
        reject(error ?? new Error("Upload failed"));
        return;
      }

      resolve({ secure_url: result.secure_url, public_id: result.public_id });
    });

    Readable.from(buffer).pipe(stream);
  });
}
