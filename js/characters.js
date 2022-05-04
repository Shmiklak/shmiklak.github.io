$(document).ready(function() {
    $.ajax({
        url: "/characters.json",
        method: "GET",
        success: (response) => {
            response.characters.forEach((item) => {
                $(".characters-list").append(`
                    <div class="col-lg-4 character-item" data-image="${item.src}" data-name="${item.name}" data-description="${item.short_description}">
                        <img src="${item.src}" class="character-item-image">
                        
                        <p>
                            ${item.name}
                        </p>
                    </div>
               `)
            });
        }
    }).then(() => {
        $('.character-item').click(function(e) {
            $("#characterModalName").text($(this).data('name'));
            $("#characterModalImage").attr('src', $(this).data('image'));
            $("#characterModalDescription").text($(this).data('description'));
            $("#characterModal").modal("show");
        });
    });
});