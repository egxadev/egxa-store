import { u, r as s, R as e, H as p, L as N, d as g } from "./app.4f71476c.js";
function f() {
    const { errors: t } = u().props,
        [l, c] = s.exports.useState(""),
        [r, o] = s.exports.useState(""),
        [m, i] = s.exports.useState(""),
        [n, d] = s.exports.useState(""),
        E = async (a) => {
            a.preventDefault(),
                g.Inertia.post("/register", {
                    name: l,
                    email: r,
                    password: m,
                    password_confirmation: n,
                });
        };
    return e.createElement(
        e.Fragment,
        null,
        e.createElement(
            p,
            null,
            e.createElement("title", null, "Register Account - Egxa Store")
        ),
        e.createElement(
            "div",
            { className: "container" },
            e.createElement(
                "div",
                { className: "row justify-content-center" },
                e.createElement(
                    "div",
                    { className: "col-md-6 mt-80" },
                    e.createElement(
                        "div",
                        { className: "text-center mb-4" },
                        e.createElement("img", {
                            src: "/assets/images/logo.png",
                            width: "60",
                        }),
                        e.createElement(
                            "h4",
                            null,
                            e.createElement("strong", null, "GEEK"),
                            " STORE"
                        )
                    ),
                    e.createElement(
                        "div",
                        {
                            className:
                                "card border-0 rounded-3 shadow-sm border-top-success",
                        },
                        e.createElement(
                            "div",
                            { className: "card-body" },
                            e.createElement(
                                "div",
                                { className: "text-center" },
                                e.createElement(
                                    "h6",
                                    { className: "fw-bold" },
                                    "REGISTER ACCOUNT"
                                ),
                                e.createElement("hr", null)
                            ),
                            e.createElement(
                                "form",
                                { onSubmit: E },
                                e.createElement(
                                    "div",
                                    { className: "row" },
                                    e.createElement(
                                        "div",
                                        { className: "col-md-6" },
                                        e.createElement(
                                            "label",
                                            { className: "mb-1" },
                                            "Full Name"
                                        ),
                                        e.createElement(
                                            "div",
                                            { className: "input-group mb-3" },
                                            e.createElement(
                                                "span",
                                                {
                                                    className:
                                                        "input-group-text",
                                                },
                                                e.createElement("i", {
                                                    className: "fa fa-user",
                                                })
                                            ),
                                            e.createElement("input", {
                                                type: "text",
                                                className: "form-control",
                                                value: l,
                                                onChange: (a) =>
                                                    c(a.target.value),
                                                placeholder: "Full Name",
                                            })
                                        ),
                                        t.name &&
                                            e.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "alert alert-danger",
                                                },
                                                t.name
                                            )
                                    ),
                                    e.createElement(
                                        "div",
                                        { className: "col-md-6" },
                                        e.createElement(
                                            "label",
                                            { className: "mb-1" },
                                            "Email Address"
                                        ),
                                        e.createElement(
                                            "div",
                                            { className: "input-group mb-3" },
                                            e.createElement(
                                                "span",
                                                {
                                                    className:
                                                        "input-group-text",
                                                },
                                                e.createElement("i", {
                                                    className: "fa fa-envelope",
                                                })
                                            ),
                                            e.createElement("input", {
                                                type: "text",
                                                className: "form-control",
                                                value: r,
                                                onChange: (a) =>
                                                    o(a.target.value),
                                                placeholder: "Email Address",
                                            })
                                        ),
                                        t.email &&
                                            e.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "alert alert-danger",
                                                },
                                                t.email
                                            )
                                    )
                                ),
                                e.createElement(
                                    "div",
                                    { className: "row" },
                                    e.createElement(
                                        "div",
                                        { className: "col-md-6" },
                                        e.createElement(
                                            "label",
                                            { className: "mb-1" },
                                            "Password"
                                        ),
                                        e.createElement(
                                            "div",
                                            { className: "input-group mb-3" },
                                            e.createElement(
                                                "span",
                                                {
                                                    className:
                                                        "input-group-text",
                                                },
                                                e.createElement("i", {
                                                    className: "fa fa-lock",
                                                })
                                            ),
                                            e.createElement("input", {
                                                type: "password",
                                                className: "form-control",
                                                value: m,
                                                onChange: (a) =>
                                                    i(a.target.value),
                                                placeholder: "Password",
                                            })
                                        ),
                                        t.password &&
                                            e.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "alert alert-danger",
                                                },
                                                t.password
                                            )
                                    ),
                                    e.createElement(
                                        "div",
                                        { className: "col-md-6" },
                                        e.createElement(
                                            "label",
                                            { className: "mb-1" },
                                            "Password Confirmation"
                                        ),
                                        e.createElement(
                                            "div",
                                            { className: "input-group mb-3" },
                                            e.createElement(
                                                "span",
                                                {
                                                    className:
                                                        "input-group-text",
                                                },
                                                e.createElement("i", {
                                                    className: "fa fa-lock",
                                                })
                                            ),
                                            e.createElement("input", {
                                                type: "password",
                                                className: "form-control",
                                                value: n,
                                                onChange: (a) =>
                                                    d(a.target.value),
                                                placeholder:
                                                    "Password Confirmation",
                                            })
                                        )
                                    )
                                ),
                                e.createElement(
                                    "button",
                                    {
                                        className:
                                            "btn btn-success shadow-sm rounded-sm px-4 w-100",
                                        type: "submit",
                                    },
                                    "REGISTER"
                                )
                            )
                        )
                    ),
                    e.createElement(
                        "div",
                        { className: "register text-center mt-3" },
                        "Have an account? ",
                        e.createElement(N, { href: "/login" }, "Login!")
                    )
                )
            )
        )
    );
}
export { f as default };
