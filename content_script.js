
const callback = function(mutationsList, observer) {
    const element = document.getElementsByClassName("c-sub-header-nav")[0];
    element.parentElement.removeChild(element);
};

const observer = new MutationObserver(callback);

const targetNode = document.getElementsByClassName("site-header")[0];
const config = { attributes: true, childList: true, subtree: true };

observer.observe(targetNode, config);
