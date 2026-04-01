// F11Fullscreen — переключение полноэкранного режима по нажатию F11
(function () {
    // Предотвращаем повторную инициализацию при перезагрузке настроек
    if (window.__f11FullscreenLoaded) return;
    window.__f11FullscreenLoaded = true;

    document.addEventListener('keydown', function (e) {
        if (e.key !== 'F11') return;

        e.preventDefault();

        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(err => {
                console.error('[F11Fullscreen] Не удалось войти в полноэкранный режим:', err);
            });
        } else {
            document.exitFullscreen().catch(err => {
                console.error('[F11Fullscreen] Не удалось выйти из полноэкранного режима:', err);
            });
        }
    });

    console.log('[F11Fullscreen] Аддон загружен. Нажмите F11 для переключения полноэкранного режима.');
})();
