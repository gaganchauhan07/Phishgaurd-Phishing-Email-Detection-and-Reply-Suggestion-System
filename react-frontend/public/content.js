// Listen for a message from your extension popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "GET_EMAIL_CONTENT") {
      const emailBody = document.querySelector("div.a3s"); // Gmail email body div
      if (emailBody) {
        sendResponse({ emailText: emailBody.innerText });
      } else {
        sendResponse({ emailText: "No email found." });
      }
    }
    return true; // async response
  });
  