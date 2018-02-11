const keyCode = {
  leftArrow: 123,
  rightArrow: 124,
  upArrow: 126,
  downArrow: 125,
};
const repeat = 60;
const interval = 7.6;
const chrome = Application("Chrome");
const systemEvents = Application("System Events");

chrome.activate();

for (let i = 0; i < repeat; i += 1) {
  delay(interval);
  systemEvents.keyCode(keyCode.leftArrow);
}
