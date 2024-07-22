# Audio Transcription Web Application

This web application allows users to record audio and transcribe it into text using the browser's Speech Recognition API. The user can select the language of the transcription from a dropdown menu.

## Files Overview

- `index.html`: The HTML structure of the web application.
- `style.css`: The CSS file for styling the web application.
- `script.js`: The JavaScript file containing the functionality for recording and transcribing audio.

## Prerequisites

- A modern web browser with support for the Speech Recognition API (e.g., Google Chrome).

## How to Run the Application

### Clone the Repository or Download the Files

Ensure you have all three files (`index.html`, `style.css`, and `script.js`) in the same directory.

### Open `index.html` in a Web Browser

Right-click on `index.html` and select "Open with" -> "Google Chrome" (or any other compatible browser).

## Step-by-Step Execution

### HTML Structure

The `index.html` file sets up the basic structure of the web application:

- A dropdown menu for selecting the language.
- A button to start and stop the recording.
- A section to display the recording status.
- A section to display the transcribed text.

### CSS Styling

The `style.css` file contains the styles for the web application:

- Styles for the body, container, labels, and record button.
- A throbber (spinner) to indicate recording in progress.

### JavaScript Functionality

The `script.js` file contains the logic for handling audio recording and transcription:

- When the document is loaded, event listeners are set up.
- The `recordBtn` button toggles recording on and off.
- When recording starts, the recognition object is configured with the selected language and starts listening.
- The recognition results are displayed in the `transcribedText` element.

## Conclusion

This web application demonstrates how to use the browser's Speech Recognition API to record and transcribe audio in real-time. By following the instructions above, you can easily set up and run the application on your local machine.
