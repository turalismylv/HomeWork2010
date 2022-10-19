$(function () {
    var skipRow = 1;
    $(document).on('click', '#loadMore', function () {
        $.ajax({
            method: "GET",
            url: "/home/loadmore",
            data: {
                skipRow: skipRow
            },
            success: function (result) {
                $('#recentWorkComponents').append(result);
                skipRow++;
            }
        })
    })

    var skipRoww = 0;
    $(document).on('click', '#load', function () {
        console.log("salam")
        $.ajax({
            method: "GET",
            url: "/pricing/loadmore",
            data: {
                skipRoww: skipRoww
            },
            success: function (result) {
                $('#pricingcomponent').append(result);
                skipRoww++;
            }
        })
    })
})

