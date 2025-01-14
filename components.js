export { togglepassword };

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
