/*
var Login = function () {

    return {
        //main function to initiate the abmodule
        init: function () {

            var v = $('.login-form').validate({
                onsubmit:true,// 是否在提交是验证
                //errorElement: 'label', //default input error message container
                //errorClass: 'help-inline', // default input error message class
                //focusInvalid: false, // do not focus the last invalid input
                rules: {
                    username: {
                        required: true
                    },
                    password: {
                        required: true
                    },
                    remember: {
                        required: false
                    }
                },

                messages: {
                    username: {
                        required: "Username is required."
                    },
                    password: {
                        required: "Password is required."
                    }
                },

                action: 'ajax/login',   // TODO: Config


                invalidHandler: function (event, validator) { //display error alert on form submit
                    $('.alert-error', $('.login-form')).show();
                },

                highlight: function (element) { // hightlight error inputs
                    $(element)
                        .closest('.control-group').addClass('error'); // set error class to the control group
                },

                handler: function () {
                    // console.log(3, this);
                },

                success: function (label) {
                    // console.log(2, label);
                    label.closest('.control-group').removeClass('error');
                    label.remove();
                },

                errorPlacement: function (error, element) {
                    // console.log(4, error);
                    error.addClass('help-small no-left-padding').insertAfter(element.closest('.input-icon'));
                },

                submitHandler: function (form) {

                    // return false;
                    $(form).ajaxSubmit({
                        url: this.settings.action,
                        type: 'post',
                        success: function(data) {
                            console.log(5, data);

                            //window.location.href = form.attr('action');
                        }
                    });

                }
            });

            $('.login-form input').keypress(function (e) {
                if (e.which == 13) {
                    if ($('.login-form').validate().form()) {
                        console.log(form.attr('action'))
                        //window.location.href = "index.html";
                    }
                    return false;
                }
            });

            //$("#login").

            $('.forget-form').validate({
                errorElement: 'label', //default input error message container
                errorClass: 'help-inline', // default input error message class
                focusInvalid: false, // do not focus the last invalid input
                ignore: "",
                rules: {
                    email: {
                        required: true,
                        email: true
                    }
                },

                messages: {
                    email: {
                        required: "Email is required."
                    }
                },

                invalidHandler: function (event, validator) { //display error alert on form submit

                },

                highlight: function (element) { // hightlight error inputs
                    $(element)
                        .closest('.control-group').addClass('error'); // set error class to the control group
                },

                success: function (label) {
                    label.closest('.control-group').removeClass('error');
                    label.remove();
                },

                errorPlacement: function (error, element) {
                    error.addClass('help-small no-left-padding').insertAfter(element.closest('.input-icon'));
                },

                submitHandler: function (form) {
                    window.location.href = "index.html";
                }
            });

            $('.forget-form input').keypress(function (e) {
                if (e.which == 13) {
                    if ($('.forget-form').validate().form()) {
                        window.location.href = "index.html";
                    }
                    return false;
                }
            });

            jQuery('#forget-password').click(function () {
                jQuery('.login-form').hide();
                jQuery('.forget-form').show();
            });

            jQuery('#back-btn').click(function () {
                jQuery('.login-form').show();
                jQuery('.forget-form').hide();
            });

            $('.register-form').validate({
                errorElement: 'label', //default input error message container
                errorClass: 'help-inline', // default input error message class
                focusInvalid: false, // do not focus the last invalid input
                ignore: "",
                rules: {
                    username: {
                        required: true
                    },
                    password: {
                        required: true
                    },
                    rpassword: {
                        equalTo: "#register_password"
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    tnc: {
                        required: true
                    }
                },

                messages: { // custom messages for radio buttons and checkboxes
                    tnc: {
                        required: "Please accept TNC first."
                    }
                },

                invalidHandler: function (event, validator) { //display error alert on form submit

                },

                highlight: function (element) { // hightlight error inputs
                    $(element)
                        .closest('.control-group').addClass('error'); // set error class to the control group
                },

                success: function (label) {
                    label.closest('.control-group').removeClass('error');
                    label.remove();
                },

                errorPlacement: function (error, element) {
                    if (element.attr("name") == "tnc") { // insert checkbox errors after the container
                        error.addClass('help-small no-left-padding').insertAfter($('#register_tnc_error'));
                    } else {
                        error.addClass('help-small no-left-padding').insertAfter(element.closest('.input-icon'));
                    }
                },

                submitHandler: function (form) {
                    window.location.href = "index.html";
                }
            });

            jQuery('#register-btn').click(function () {
                jQuery('.login-form').hide();
                jQuery('.register-form').show();
            });

            jQuery('#register-back-btn').click(function () {
                jQuery('.login-form').show();
                jQuery('.register-form').hide();
            });
        }

    };

}();*/
