$(function() {
    let $list = $('.tab-list');

    $list.on('click', 'li', function(e) {
        e.preventDefault();
        let $tab = $(this);
        let $link = $tab.find('a').attr('href');
        let $panel = $($link);

        if (!$tab.hasClass('active')) {
            deactivateCurrent();
            $panel.addClass('active');
            $tab.addClass('active');
        }
    });
    
    function deactivateCurrent() {
        let $currentTab = $list.find('li.active');
        let $currentPanel = $($currentTab.find('a').attr('href'));
        $currentPanel.removeClass('active');
        $currentTab.removeClass('active');
    }
});