import { DefaultAzureCredential } from "@azure/identity";
import { BlobServiceClient } from "@azure/storage-blob";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const accountName = process.env.AZURE_STORAGE_ACCOUNT_NAME;
    const containerName = process.env.AZURE_STORAGE_CONTAINER_NAME;

    if (!accountName || !containerName) {
      throw new Error("Azure Storage configuration is missing");
    }

    const credential = new DefaultAzureCredential();

    const blobServiceClient = new BlobServiceClient(
      `https://${accountName}.blob.core.windows.net`,
      credential
    );

    const containerClient =
      blobServiceClient.getContainerClient(containerName);

    const blobs: string[] = [];

    for await (const blob of containerClient.listBlobsFlat()) {
      blobs.push(blob.name);
    }

    return NextResponse.json({
      success: true,
      container: containerName,
      blobs,
    });
  } catch (error) {
    console.error("Storage test failed:", error);

    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
