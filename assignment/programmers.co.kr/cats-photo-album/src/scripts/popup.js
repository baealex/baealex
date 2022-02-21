export const loading = (() => {
    const popup = document.createElement('div');
    popup.className = 'Modal Loading';
    popup.style.display = 'none';
    
    const content = document.createElement('div');
    content.className = 'content';
    popup.appendChild(content);

    const img = document.createElement('img');
    img.src = './assets/nyan-cat.gif';
    content.append(img);

    document.body.appendChild(popup);

    return {
        start() {
            popup.style.display = 'block';
        },
        end() {
            popup.style.display = 'none';
        }
    }
})();

export const imagePopup = (() => {
    const popup = document.createElement('div');
    popup.className = 'Modal ImageViewer';
    popup.style.display = 'none';
    
    const content = document.createElement('div');
    content.className = 'content';
    popup.appendChild(content);

    const img = document.createElement('img');
    content.append(img);

    document.body.appendChild(popup);

    function show(src) {
        img.src = src;
        popup.style.display = 'block';
        popup.addEventListener('click', handleClick),
        window.addEventListener('keydown', handleKeydown);
    }

    function hide() {
        popup.style.display = 'none';
        popup.removeEventListener('click', handleClick),
        window.removeEventListener('keydown', handleKeydown);
    }

    function handleClick(e) {
        if (e.target.nodeName === 'DIV') {
            hide();
        }
    }

    function handleKeydown(e) {
        if (e.key === 'Escape') {
            hide();
        }
    }

    return {
        show,
        hide,
    }
})();