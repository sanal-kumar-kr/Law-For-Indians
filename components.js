export { togglepassword,loginValidation,advocateValidation,publicValidation};

const togglepassword = () => {
    $("#togglePassword1").click(function () {
        $(this).toggleClass("fa-eye fa-eye-slash");
        var input1 = $("#floatingPassword1");
        var type1 = input1.attr("type") === "password" ? "text" : "password";
        input1.attr("type", type1);
    });

    $("#togglePassword2").click(function () {
        $(this).toggleClass("fa-eye fa-eye-slash");
        var input2 = $("#floatingPassword2");
        var type2 = input2.attr("type") === "password" ? "text" : "password";
        input2.attr("type", type2);
    });
};


const loginValidation=()=>{
    $("#loginForm").validate({
        rules: {
            username: {
                required: true,
                minlength: 3,
            },
            password: {
                required: true,
            },
        },
        messages: {
            username: {
                required: "Please enter your username",
                minlength: "Name must be at least 3 characters long",
            },
            password: {
                required: "Please provide a password",
            },
        },
        errorPlacement: function(error, element) {
            error.insertAfter(element.closest('.form-floating'));
        }
    });
}

const advocateValidation=()=>{
    $.validator.addMethod(
        "passwordStrength",
        function (value, element) {
            return (
                this.optional(element) ||
                /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.*\s).*$/.test(value)
            );
        },
        "Password must contain at least one number, one uppercase letter, one lowercase letter, and one special character."
    );

    $("#advocateForm").validate({
        rules: {
            username: {
                required: true,
                minlength: 5,
                maxlength: 15,
            },
            profile:{
                required:true
            },
            email: {
                required: true,
                email: true,
            },
            contact: {
                required: true,
                digits: true,
                minlength: 10,
                maxlength: 10,
            },
            LicenseNumber: {
                required: true,
                minlength: 6
            },
            Specialization: {
                required: true,
                minlength: 3
            },
            password: {
                required: true,
                minlength: 8,
                maxlength: 15,
                passwordStrength: true,
            },
            confirmPassword: {
                required:true,
                equalTo: "#password"
            }
        },
        messages: {
            username: {
                required: "Please enter username",
                minlength: "Name must be at least 5 characters long",
                maxlength: "Name must be at most 15 characters long",
            },
            profile:{
                required:"Please Upload Your Profile"
            },
            email: {
                required: "Please provide an email",
                email: "Enter a valid email",
            },
            contact: {
                required: "Please enter your contact number",
                digits: "Contact number should contain only digits",
                minlength: "Contact number should be at least 10 digits",
                maxlength: "Contact number should not exceed 10 digits"
            },
            license: {
                required: "Please enter your license number",
                minlength: "License number should be at least 6 characters long"
            },
            specializations: {
                required: "Please enter your areas of specialization",
                minlength: "Specializations should be at least 3 characters long"
            },
            password: {
                required: "Please enter a password",
                minlength: "Password must be at least 8 characters long",
                maxlength: "Password must be at most 15 characters long."
            },
            password: {
                required: "Please Confirm Your Password",
                equalTo: "Passwords are Mis matching",
            },

        },
        errorPlacement: function(error, element) {
            error.insertAfter(element.closest('.form-floating'));
        }
    });
};


const publicValidation=()=>{
    $.validator.addMethod(
        "passwordStrength",
        function (value, element) {
            return (
                this.optional(element) ||
                /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.*\s).*$/.test(value)
            );
        },
        "Password must contain at least one number, one uppercase letter, one lowercase letter, and one special character."
    );

    $("#publicForm").validate({
        rules: {
            username: {
                required: true,
                minlength: 5,
                maxlength: 15,
            },
            email: {
                required: true,
                email: true,
            },
            password: {
                required: true,
                minlength: 8,
                maxlength: 15,
                passwordStrength: true,
            },
            confirmPassword: {
                required:true,
                equalTo: "#password"
            }
        },
        messages: {
            username: {
                required: "Please enter username",
                minlength: "Name must be at least 5 characters long",
                maxlength: "Name must be at most 15 characters long",
            },
            email: {
                required: "Please provide an email",
                email: "Enter a valid email",
            },
            password: {
                required: "Please enter a password",
                minlength: "Password must be at least 8 characters long",
                maxlength: "Password must be at most 15 characters long."
            },
            password: {
                required: "Please Confirm Your Password",
                equalTo: "Passwords are Mis matching",
            },

        },
        errorPlacement: function(error, element) {
            error.insertAfter(element.closest('.form-floating'));
        }
    });
}
