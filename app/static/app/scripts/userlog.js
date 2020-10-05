userlog(1, 2, 3)

function userlog(user_id, actionType_id, actionName_id) {

        function getCookie(name) {
            var cookieValue = null;
            if (document.cookie && document.cookie != '') {
                var cookies = document.cookie.split(';');
                for (var i = 0; i < cookies.length; i++) {
                    var cookie = jQuery.trim(cookies[i]);
                    // Does this cookie string begin with the name we want?
                    if (cookie.substring(0, name.length + 1) == (name + '=')) {
                        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                        break;
                    }
                }
            }
            return cookieValue;
        }

        $.ajax({
            headers: {
                        'Content-Type':'application/json',
                        'X-CSRFToken': getCookie('csrftoken')
                    },
            type: 'POST',
            url: "/user_log/",
            data : {
             'user_id':user_id,
             'actionType_id':actionType_id,
             'actionName_id':actionName_id,
            },

            success: function (response) {
                // spendData = response.data;
                // resetData(ndx, [TeamDim, SeasonDim, HaDim]);
                // ndx.add(spendData);
                // dc.redrawAll();
            }
        });

}