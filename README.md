# Read Metadata from Image using ExifTool

## Description
This project reads metadata from an image file using the `exiftool-vendored` library in Node.js. It extracts and prints the metadata in a structured format.

## Prerequisites
Ensure you have the following installed on your system:
- Node.js (>= 14.x)
- npm or yarn

## Installation
1. Clone this repository or create a new Node.js project.
2. Run the following command to install dependencies:
   ```sh
   npm install exiftool-vendored
   ```

## Usage
1. Place the image file you want to analyze in your project directory.
2. Update the `filePath` variable in `fileSystem` function with the actual image file name.
3. Run the script using:
   ```sh
   node index.js
   ```

## Code Explanation
- The script imports `exiftool` from `exiftool-vendored`.
- The `printMetadata` function recursively prints all metadata properties.
- The `fileSystem` function reads metadata from the specified image file and prints it to the console.
- The script handles errors and ensures `exiftool` is properly closed.

## Example Output
```
Metadata:
ExifVersion: 0221
Make: Canon
Model: EOS 5D Mark IV
...
```


