$(document).ready(function() {
    $('.flex-column a').on('click', function(e) {
        e.preventDefault();
        
        // Скрываем все вкладки
        $('.right-block').hide();
        
        // Получаем id вкладки, которую нужно показать
        var target = $(this).attr('href');
        
        // Показываем выбранную вкладку
        $(target).show();
        
        // Убираем класс активного состояния у всех ссылок
        $('.flex-column a').removeClass('active');
        
        // Добавляем класс активного состояния к текущей вкладке
        $(this).addClass('active');
    });

    // Инициализация: показываем первый таб при загрузке страницы
    $('.flex-column a').first().trigger('click');


});

