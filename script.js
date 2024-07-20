document.addEventListener("DOMContentLoaded", () => {
    const recordBtn = document.getElementById("record-btn");
    const recordingStatus = document.getElementById("recording-status");
    const transcribedText = document.getElementById("transcribed-text");
    const languageSelect = document.getElementById("language-select");
    const throbber = document.getElementById("throbber");

    let recognition;
    let isRecording = false;

    if ('webkitSpeechRecognition' in window) {
        recognition = new webkitSpeechRecognition();
    } else if ('SpeechRecognition' in window) {
        recognition = new SpeechRecognition();
    } else {
        alert("Your browser does not support Speech Recognition. Please use Google Chrome.");
        return;
    }

    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => {
        recordingStatus.textContent = "Recording...";
        throbber.hidden = false;
    };

    recognition.onend = () => {
        recordingStatus.textContent = "Recording stopped.";
        throbber.hidden = true;
        isRecording = false;
    };

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        transcribedText.textContent = transcript;
    };

    recordBtn.addEventListener("click", () => {
        if (isRecording) {
            recognition.stop();
            recordBtn.textContent = "Record Audio";
        } else {
            const selectedLanguage = languageSelect.value;
            recognition.lang = selectedLanguage;
            recognition.start();
            recordBtn.textContent = "Stop Recording";
        }
        isRecording = !isRecording;
    });
});
