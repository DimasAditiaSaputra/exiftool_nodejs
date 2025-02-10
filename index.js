import { exiftool } from "exiftool-vendored";

const printMetadata = (metadata, prefix = "") => {
  for (const key in metadata) {
    const value = metadata[key];

    if (typeof value === "object" && value !== null) {
      console.log(`${prefix}${key}:`);
      printMetadata(value, `${prefix}  `);
    } else {
      console.log(`${prefix}${key}: ${value}`);
    }
  }
};

const fileSystem = async () => {
  try {
    const filePath = "YOUR_IMAGE";

    const metadata = await exiftool.read(filePath);

    console.log("Metadata:");
    printMetadata(metadata);
  } catch (err) {
    console.error("Error:", err.message);
  } finally {
    await exiftool.end();
  }
};

fileSystem();
