/* eslint-disable no-undef */

chrome.runtime.onInstalled.addListener(() => {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [
                new chrome.declarativeContent.PageStateMatcher({
                    pageUrl: { hostEquals: 'stadia.google.com' },
                }),
            ],
            actions: [
                new chrome.declarativeContent.ShowPageAction(),
            ],
        }]);
    });
});
