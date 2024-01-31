# 2Auth Safer

This is a Firefox extension that allows you to store and manage two-factor authentication (2FA) entries. It uses the browser's local storage to save the entries, enabling you to access them at any time.

**Note for Developers:** If you are going to contribute with the project, please, read all the `.txt` and `.md` files I leave there. It says a bunch of important information about the development process.

## Installation

1. Download the `.xpi` file for this extension.
2. Open Firefox and go to `about:addons`.
3. Click the gear icon and choose "Install Add-on From File".
4. Select the downloaded `.xpi` file and click "Open".
5. The extension will be installed and ready to use.

## Usage

1. Click on the extension icon now available in the Firefox toolbar.
2. Fill in the "Name" and "Secret" fields with the corresponding details for your 2FA entry.
3. Click the "Save Entry" button to save the entry.
4. The entry will be added to the existing entries table, displaying the name and an OTP (One-Time Password) generated using the provided secret.
5. To remove an entry, click the "Remove" button in the corresponding entry row.
6. Any success or error messages will be displayed at the top of the page.

## Customization

You can modify the style of the extension by adjusting the CSS rules in the `style.css` file. Feel free to change the colors, spacing, or any other aspect to suit your preferences.

## Security Note

This extension can be used for actual two-factor authentication purposes, although it is still in development and will receive further updates. It should be noted that security is a complex and evolving field, and caution should be exercised when relying on any software for sensitive authentication purposes. 

While efforts are made to provide secure functionality, it is recommended to use established and trusted libraries or services for critical authentication needs.
