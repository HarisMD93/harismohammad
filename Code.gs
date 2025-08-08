function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('Haris Mohammad – Proven Leadership Portfolio')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
