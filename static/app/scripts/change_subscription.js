$(document).ready(function() {
    // $('#id_time').datetimepicker({
    //    showSecond: true,
    //    showMillisec: true,
    //    timeFormat: 'hh:mm:ss'
    // });



    $('#bookmaker-class').select2();
    $('.like').click(function(){
          var pk = $(this).attr('name');
          $.ajax({
                   type: "POST",
                   url: "/like_button/",
                   data: {'pk': pk, 'csrfmiddlewaretoken': getCookie('csrftoken')},
                   // dataType: "json",
                   success: function(response) {
                          // alert('Company likes count is now ' + response.count_likes);
                       var count_likes = response.count_likes;
                       if(count_likes !== "no-loggedin-user"){
                        $('.like-count'+pk).text(count_likes+" likes")
                       }else{
                           $("#login-for-comment").addClass('show')
                            $("#login-for-comment").removeClass('fade')
                            $("#login-for-comment").focus()
                            $('html, body').animate({
                                scrollTop: $('#login-for-comment').offset()
                            }, 600);
                           // window.location.href = "http://localhost:8000/login/"
                       }

                    },
                   error: function(rs, e) {
                          alert('Something went wrong.');
                   }
              });
            })


    $(".profile_update").click(function(e){

        // alert("hi")
        if($('#id_receive_occational_email').is(':checked')){

        }else{
            e.preventDefault();
        e.stopPropagation();
            $("#check_update").addClass('show')
            $("#check_update").removeClass('fade')
            $("#check_update").focus()
            $('html, body').animate({
                scrollTop: $('#check_update').offset()
            }, 600);

        }
    })
    var promocode_is_active = 0;
    var promocode_is_unactive = 0;
    var promo_code = '';
    var promo_discount = 0;
    var promosubscription_id;
    $("#apply_promocode").click(function(e){
        promocode_is_active = 0;
        promocode_is_unactive = 0;
        promo_code = $("#promocode").val();
        $('[id^=subscription_type]').each(function(){
        var subscription_id = $(this).attr("id");
        subscription_id = subscription_id.replace('subscription_type', '')
        $('#subscription_length'+subscription_id+' option').each(function() {
            if ($(this).is(':selected')) {
                var radioValue = $(this).val()
                // alert(radioValue)
                var month_length_name = $("input[name='subscription_details_name" +subscription_id+radioValue+ "']").val();
                // alert(month_length_name)
                var month_length = $("input[name='subscription_details_length" +subscription_id+radioValue+ "']").val();
                var promodiscount = $("input[name='subscription_details_promodiscount" +subscription_id+radioValue+ "']").val();
                var promocode = $("input[name='subscription_type_promocode" +subscription_id+radioValue+ "']").val();
                if(promocode == promo_code){
                    promo_discount = promodiscount
                    promocode_is_active = 1
                    promosubscription_id = subscription_id
                    }else{
                        promocode_is_unactive = 1
                    }

                $('#month_length'+subscription_id).text(month_length_name)
                var period_month = parseInt(month_length)
                var d=new Date();
                var dat= d.getDate() < 10 ? '0' + d.getDate() : d.getDate();
                var mon=d.getMonth()+period_month+1
                var year=d.getFullYear();
                if(mon > 12){
                    var remainder = mon % 12
                    var adding_year = (mon - remainder)/12
                    year = year + adding_year
                    mon= remainder
                }
                mon = mon <10 ? '0' + mon : mon;
                if(month_length_name=='forever'){
                    var finishdate = "2999-12-31";
                }else{
                    var finish_dat= d.getDate() < 10 ? '0' + (d.getDate()-1) : d.getDate()-1;
                    var finishdate = year+"-"+mon+"-"+ finish_dat;
                }

                $(".finish_date"+subscription_id).text(finishdate)
                var discount = $("input[name='subscription_details_discount" +subscription_id+radioValue+ "']").val()
                if(promocode_is_active==1&&subscription_id==promosubscription_id){
                    discount = parseInt(discount) + parseInt(promo_discount)
                }
                $(".discount"+subscription_id).text(parseInt(discount))
                var month_price = $("input[name='subscription_type_price" +subscription_id+radioValue+ "']").val();
                var yearly_price = (month_price - month_price * parseInt(discount) / 100)*12
                $(".yearly_price"+subscription_id).text(yearly_price.toFixed(2))
                var changeable_discount = $("input[name='subscription_details_discount" +subscription_id+radioValue+ "']").val();
                if(promocode_is_active==1&&subscription_id==promosubscription_id){
                    changeable_discount = parseInt(changeable_discount) + parseInt(promo_discount)
                }
                var new_month_price = month_price - month_price * changeable_discount / 100
                $('.new_month_price'+subscription_id).text(new_month_price.toFixed(2))
            }
        });
        });

        if(promocode_is_active == 1){
            $("#appliedpromo").fadeTo(2000, 600).slideUp(600, function() {
              $("#appliedpromo").slideUp(600);
            });
            // $("#appliedpromo").addClass('show')
            // $("#appliedpromo").attr('height', '15px')
            // $("#appliedpromo").removeClass('fade')
            // $("#appliedpromo").focus()
            $('html, body').animate({
                scrollTop: $('#appliedpromo').offset()
            }, 600);
           // alert("Your promotion code has been applied")
        }else if(promocode_is_unactive == 1){
            $("#invalidpromo").fadeTo(2000, 600).slideUp(600, function() {
              $("#invalidpromo").slideUp(600);
            });
            // $("#invalidpromo").addClass('show')
            // $("#invalidpromo").attr('height', '15px')
            // $("#invalidpromo").removeClass('fade')
            // $("#invalidpromo").focus()
            $('html, body').animate({
                scrollTop: $('#invalidpromo').offset()
            }, 600);
            // // alert("The promotion code is invalid")
        }
    });

    $("#change_subscription").click(function(){
        if($('#id_username').val() && $('#id_email').val() && $('#id_firstname').val() &&
        $('#id_lastname').val() ){
            window.location.replace("http://localhost:8000/subscription/");
        }else{
            $("#buttonAlert").fadeTo(2000, 600).slideUp(600, function() {
              $("#buttonAlert").slideUp(600);
            });
            // $("#buttonAlert").addClass('show')
            // $("#buttonAlert").attr('height', '15px')
            // $("#buttonAlert").removeClass('fade')
            // $("#buttonAlert").focus()
            $('html, body').animate({
                scrollTop: $('#buttonAlert').offset()
            }, 600);
        }
    });

    $(".subscription_menu").on('click', function(e){
        e.preventDefault();
        e.stopPropagation();

        $.ajax({
              url: '/user_get/',
              error: function() {
              },
              success: function(data) {
                  // alert(data.profile_status)
                  if(data.profile_status == 'No'){
                    $("#buttonAlert").addClass('show')
                    $("#buttonAlert").removeClass('fade')
                    $("#buttonAlert").focus()
                    $('html, body').animate({
                        scrollTop: $('#buttonAlert').offset()
                    }, 600);

                  }else{
                    window.location.href = "http://localhost:8000/subscription/"
                  }

              },
              type: 'GET'
            });
    });

    function addMonths(date, months) {
        var d = date.getDate();
        date.setMonth(date.getMonth() + +months);
        if (date.getDate() != d) {
          date.setDate(0);
        }
        return date;
    }

    $('[id^=subscription_type]').each(function(){
        var subscription_id = $(this).attr("id");
        subscription_id = subscription_id.replace('subscription_type', '')
        $('#subscription_length'+subscription_id+' option').each(function() {
            if ($(this).is(':selected')) {
                var radioValue = $(this).val()
                // alert(radioValue)
                var month_length_name = $("input[name='subscription_details_name" +subscription_id+radioValue+ "']").val();
                // alert(month_length_name)
                var month_length = $("input[name='subscription_details_length" +subscription_id+radioValue+ "']").val();
                var promodiscount = $("input[name='subscription_details_promodiscount" +subscription_id+radioValue+ "']").val();
                var promocode = $("input[name='subscription_type_promocode" +subscription_id+radioValue+ "']").val();
                // if(promocode_is_active==1){
                //     if(promocode ==promo_code){
                //     promo_discount = promodiscount
                //     alert("Your promotion code has been applied")
                //     }else{
                //         alert("The promotion code is invalid")
                //     }
                // }

                $('#month_length'+subscription_id).text(month_length_name)
                var period_month = parseInt(month_length)
                var d=new Date();
                var dat= d.getDate() < 10 ? '0' + d.getDate() : d.getDate();
                var mon=d.getMonth()+period_month+1
                // d.setMonth(d .getMonth() +1+period_month);

                var year=d.getFullYear();
                if(mon > 12){
                    var remainder = mon % 12
                    var adding_year = (mon - remainder)/12
                    year = year + adding_year
                    mon= remainder

                }
                mon = mon <10 ? '0' + mon : mon;
                // alert(period_month)
                if(month_length_name=='forever'){
                    var finishdate = "2999-12-31";
                }else{
                    // d = new Date(year, mon + 1, 0);
                    // if(mon ===2){
                    //     var last_day = 28;
                    // }else{
                    //     var last_day = d.getDate();
                    // }
                    //
                    // if(d.getDate() ===1){
                    //
                    // }else{
                    //     var finish_dat= d.getDate() < 10 ? '0' + (d.getDate()-1) : d.getDate()-1;
                    //     if(finish_dat)
                    //     var finishdate = year+"-"+mon+"-"+ finish_dat;
                    // }
                    var d = addMonths(new Date(year,d.getMonth(),dat),period_month)
                    var new_month = d.getMonth() + 1
                    var finishdate = d.getFullYear()+"-"+new_month+"-"+ d.getDate();
                }

                $(".finish_date"+subscription_id).text(finishdate)
                var discount = $("input[name='subscription_details_discount" +subscription_id+radioValue+ "']").val()
                // if(promocode_is_active==1){
                //     discount = discount + promo_discount
                // }
                $(".discount"+subscription_id).text(parseInt(discount))
                var month_price = $("input[name='subscription_type_price" +subscription_id+radioValue+ "']").val();
                var yearly_price = (month_price - month_price * parseInt(discount) / 100)*12
                $(".yearly_price"+subscription_id).text(yearly_price.toFixed(2))
                var changeable_discount = $("input[name='subscription_details_discount" +subscription_id+radioValue+ "']").val();
                // if(promocode_is_active==1){
                //     changeable_discount = changeable_discount + promo_discount
                // }
                var new_month_price = month_price - month_price * changeable_discount / 100
                $('.new_month_price'+subscription_id).text(new_month_price.toFixed(2))
            }
        });
    })

    $('[id^=subscription_length]').on("change", function(){

        $('[id^=subscription_type]').each(function(){
        var subscription_id = $(this).attr("id");
        subscription_id = subscription_id.replace('subscription_type', '')
        $('#subscription_length'+subscription_id+' option').each(function() {
            if ($(this).is(':selected')) {
                var radioValue = $(this).val()
                var subscription_pid = $('#subscription_pid').val()
                if(radioValue!=subscription_pid){
                    $('#'+subscription_id).removeAttr("disabled");
                    $('#'+subscription_id).text('select');
                    $('#'+subscription_id).attr('background-color', 'none');
                }else{
                    $('#'+subscription_id).prop("disabled", true);
                    $('#'+subscription_id).text('selected');
                    $('#'+subscription_id).attr('background-color', 'darkorange');
                }
                // alert(radioValue)
                var month_length_name = $("input[name='subscription_details_name" +subscription_id+radioValue+ "']").val();
                var month_length = $("input[name='subscription_details_length" +subscription_id+radioValue+ "']").val();
                $('#month_length'+subscription_id).text(month_length_name)
                var period_month = parseInt(month_length)
                var d=new Date();
                var dat= d.getDate() < 10 ? '0' + d.getDate() : d.getDate();
                var mon=d.getMonth()+period_month+1
                // d.setMonth(d .getMonth() +1+period_month);
                mon = mon <10 ? '0' + mon : mon;
                var year=d.getFullYear();
                if(mon > 12){
                    var remainder = mon % 12
                    var adding_year = (mon -remainder)/12
                    year = year + adding_year
                    mon = remainder
                }
                var promodiscount = $("input[name='subscription_details_promodiscount" +subscription_id+radioValue+ "']").val();
                var promocode = $("input[name='subscription_type_promocode" +subscription_id+radioValue+ "']").val();
                if(promocode_is_active==1){
                    if(promocode ==promo_code){
                    promo_discount = promodiscount
                    // alert("Your promotion code has been applied")
                    }else{
                        // alert("The promotion code is invalid")
                    }
                }


                if(month_length_name=='forever'){
                    var finishdate = "2999-12-31";
                }else{
                    // var finish_dat= d.getDate() < 10 ? '0' + (d.getDate()-1) : d.getDate()-1;
                    // var finishdate = year+"-"+mon+"-"+ finish_dat;
                    var d = addMonths(new Date(year,d.getMonth(),dat),period_month)
                    var new_month = d.getMonth() + 1
                    var finishdate = d.getFullYear()+"-"+new_month+"-"+ d.getDate();
                }
                $(".finish_date"+subscription_id).text(finishdate)
                var discount = $("input[name='subscription_details_discount" +subscription_id+radioValue+ "']").val()
                if(promocode_is_active==1){
                    discount = parseInt(discount) + parseInt(promo_discount)
                }
                $(".discount"+subscription_id).text(parseInt(discount))
                var month_price = $("input[name='subscription_type_price" +subscription_id+radioValue+ "']").val();
                var yearly_price = (month_price - month_price * parseInt(discount) / 100)*12
                $(".yearly_price"+subscription_id).text(yearly_price.toFixed(2))
                var changeable_discount = $("input[name='subscription_details_discount" +subscription_id+radioValue+ "']").val();
                if(promocode_is_active==1){
                    changeable_discount = parseInt(changeable_discount) + parseInt(promo_discount)
                }

                var new_month_price = month_price - month_price * changeable_discount / 100
                $('.new_month_price'+subscription_id).text(new_month_price.toFixed(2))
            }
        });
    })
    })

    $(".subscription_select").on("click", function(){

        var subscription_type_id = $(this).attr("id");

        $('#subscription_length'+subscription_type_id+' option').each(function() {
            if ($(this).is(':selected')){
                var radioValue = $(this).val()
                console.log(radioValue)
                var month_length_name = $("input[name='subscription_details_name" +subscription_type_id+radioValue+ "']").val();
                var renew = $("input[name='subscription_details_renew" +subscription_type_id+radioValue+ "']").val();

                var length = $("input[name='subscription_details_length" +subscription_type_id+radioValue+ "']").val();
                var user_id = $("input[name='subscription_user_id']").val();
                var month_price = $("input[name='subscription_type_price" +subscription_type_id+radioValue+ "']").val();
                var promodiscount = $("input[name='subscription_details_promodiscount" +subscription_type_id+radioValue+ "']").val();
                var promocode = $("input[name='subscription_type_promocode" +subscription_type_id+radioValue+ "']").val();
                var trialDays = $("input[name='subscription_details_trialDays" +subscription_type_id+radioValue+ "']").val();
                console.log(trialDays)
                if(promocode_is_active==1){
                    if(promocode ==promo_code){
                    promo_discount = promodiscount
                    }else{
                    }
                }
                var discount = $("input[name='subscription_details_discount" +subscription_type_id+radioValue+ "']").val();
                discount = parseInt(discount) + parseInt(promo_discount);
                var new_month_price = month_price - month_price * discount / 100

                var period_month = parseInt(length)

                var d=new Date();
                var dat= d.getDate() < 10 ? '0' + d.getDate() : d.getDate();
                var mon=d.getMonth()+period_month+1
                var start_mon = d.getMonth()+1
                var year=d.getFullYear();
                var end_year=year
                if(mon > 12){
                    var remainder = mon % 12
                    var adding_year = (mon -remainder)/12
                    mon = remainder
                    end_year = year + adding_year

                }
                mon = mon <10 ? '0' + mon : mon;

                start_mon = start_mon <10 ? '0' + start_mon : start_mon;

                if(month_length_name=='forever'){
                    var finishdate = "2999-12-31";
                     var re_new = "3000-01-01"
                }else{
                    // var finish_dat= d.getDate() < 10 ? '0' + (d.getDate()-1) : d.getDate()-1;
                    // var finishdate = year+"-"+mon+"-"+ finish_dat;
                     var re_new = d.getDate()
                    re_new = re_new <10 ? '0'+re_new: re_new
                    re_new = end_year+"-"+mon+"-"+ re_new;
                    var d = addMonths(new Date(year,d.getMonth(),dat),period_month)
                    var new_month = d.getMonth() + 1
                    var finishdate = d.getFullYear()+"-"+new_month+"-"+ d.getDate();

                }
                var startdate = year+"-"+start_mon+"-"+ dat;
                console.log(new_month_price, parseInt(discount), validfrom, validto)
                $('.month_length').val(length)
                $('.new_month_price').val(new_month_price.toFixed(2))
                $('.validfrom').val(startdate)
                $('.validto').val(finishdate)
                $('.renews_on').val(re_new)
                $('.subscription_final_type_id').val(subscription_type_id)
                $('.subscription_final_detail_id').val(radioValue)
                $('.trialDays').val(trialDays)


            }else{
                // alert("You didn't select subscription length");
            }
        })

    })


});
