### Updating Files on GitHub

This guide will help you update the reports, policies, and winners for the website.

---

## 1\. Update Reports and Policies

### 1.1 File Names

- The **name of the file** you upload is what will be displayed on the website.
- For example, if you upload a file named `2023 Year-End Report.pdf`, it will appear on the website as `2023 Year-End Report`.

### 1.2 Folder to Add/Remove Files

- Reports are located in the `public/documents/reports` folder.
- Policies are located in the `public/documents/policies` folder.

### How to Add/Remove Files in GitHub

1.  Go to the **GitHub repository** for the website.
2.  Navigate to the correct folder:
    - For reports: `public/documents/reports`.
    - For policies: `public/documents/policies`.
3.  **To add a file**:
    - Click the **`Add file`** button.
    - Select **Upload files**.
    - Drag and drop the file you want to add or click **Choose your files** to select the file from your computer.
    - Scroll down and click **Commit changes** to save the file.
4.  **To remove a file**:
    - Navigate to the file you want to remove.
    - Click on the file name to open it.
    - Click the **Trash bin icon** or select **Delete this file**.
    - Scroll down and click **Commit changes** to confirm the deletion.

---

## 2\. Update the Winners JSON File

### How to Update `winners.json`

1.  Navigate to `public/documents/winners.json` in the GitHub repository.

2.  Click the pencil icon (**Edit file**) to make changes.

3.  Add or update winner entries in the following format:

    json

    Copy code

    `[
  {
    "name": "Ian Louis",
    "description": "The Denis G. McComber Scholarship helped assist me with paying the ever-mounting cost of gaining a higher education",
    "imageURL": "/images/ian.jpg"
  },
  {
    "name": "Bryce Aufrecht",
    "description": "I would like to thank the board for this scholarship. This will really help me out with paying for college and my future career path",
    "imageURL": "/images/bryce.jpg"
  }
]`

    - **`name`**: Winner's name.
    - **`description`**: Short message from the winner.
    - **`imageURL`**: The path to the winner's image in the `/public/images` folder.

4.  Scroll down and click **Commit changes** to save the updates.

### How to Add/Delete Images in the Images Folder

1.  Navigate to the `public/images` folder in the GitHub repository.
2.  **To add an image**:
    - Click the **`Add file`** button.
    - Select **Upload files**.
    - Drag and drop the image or click **Choose your files** to select it from your computer.
    - Scroll down and click **Commit changes** to save the image.
3.  **To delete an image**:
    - Navigate to the image you want to delete.
    - Click on the file name to open it.
    - Click the **Trash bin icon** or select **Delete this file**.
    - Scroll down and click **Commit changes** to confirm the deletion.

---

## Tips and Best Practices

- **File Naming**: Use meaningful names for files and images, as they will appear on the website.
  - Example: Use `2023 Financial Report.pdf` instead of `report1.pdf`.
- **Keep Descriptions Short**: When updating the winners' descriptions, keep them concise and focused.
