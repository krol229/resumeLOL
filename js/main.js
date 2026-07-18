(function() {
    var trigger = document.getElementById('vibe-trigger');
    var statusText = document.getElementById('status-text');
    var body = document.body;
    var isVapor = false;

    trigger.addEventListener('click', function() {
        isVapor = !isVapor;
        body.classList.toggle('vaporwave', isVapor);
        statusText.textContent = isVapor ? 'ВАПОРВЕЙВ' : 'БУНКЕР';
    });

    console.log('%c[SYSTEM] %cПривет, хакер!', 'color: #00FF00; font-size: 18px;', 'color: #FFFFFF; font-size: 15px;');
    console.log('%cВведи %cvibe() %cдля переключения темы', 'color: #AAAAAA;', 'color: #00FFFF; font-weight: bold;', 'color: #AAAAAA;');
    console.log('%cTelegram: %c@maltegoValidUser', 'color: #808080;', 'color: #00FFFF; font-size: 14px;');
    
    window.vibe = function() {
        trigger.click();
        console.log('%c[OK] Тема переключена', 'color: #00FF00;');
    };
})();