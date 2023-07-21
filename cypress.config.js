const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,
  videoUploadOnPasses: false,

  videoUploadOptions: {
    rootDir: "cypress/videos",
    fileExtension: ".mp4",
    uploadUrl: "your_video_upload_endpoint",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});





