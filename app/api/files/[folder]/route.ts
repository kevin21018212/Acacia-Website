import path from "path";
import fs from "fs";

export async function GET(req: Request, { params }: { params: { folder: string } }) {
  const { folder } = params;

  // Get folder path in `public/documents`
  const directoryPath = path.join(process.cwd(), "public/documents", folder);

  try {
    const files = fs.readdirSync(directoryPath).map((fileName) => ({
      title: fileName.replace(/\.[^/.]+$/, ""), // Remove file extension for display title
      file: fileName,
    }));

    return new Response(JSON.stringify(files), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to read files" }), { status: 500 });
  }
}
