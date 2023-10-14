import { u as o, r, R as e, H as d, L as i, d as u } from "./app.4f71476c.js";
function p() {
    const { errors: a } = o().props,
        [s, n] = r.exports.useState(""),
        [l, c] = r.exports.useState(""),
        m = async (t) => {
            t.preventDefault(),
                u.Inertia.post("/login", { email: s, password: l });
        };
    return e.createElement(
        e.Fragment,
        null,
        e.createElement(
            d,
            null,
            e.createElement("title", null, "Login Account - Egxa Store")
        ),
        e.createElement(
            "div",
            { className: "container" },
            e.createElement(
                "div",
                { className: "row justify-content-center" },
                e.createElement(
                    "div",
                    { className: "col-md-4 mt-80" },
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
                                    "LOGIN ACCOUNT"
                                ),
                                e.createElement("hr", null)
                            ),
                            e.createElement(
                                "form",
                                { onSubmit: m },
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
                                        { className: "input-group-text" },
                                        e.createElement("i", {
                                            className: "fa fa-envelope",
                                        })
                                    ),
                                    e.createElement("input", {
                                        type: "text",
                                        className: "form-control",
                                        value: s,
                                        onChange: (t) => n(t.target.value),
                                        placeholder: "Email Address",
                                    })
                                ),
                                a.email &&
                                    e.createElement(
                                        "div",
                                        { className: "alert alert-danger" },
                                        a.email
                                    ),
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
                                        { className: "input-group-text" },
                                        e.createElement("i", {
                                            className: "fa fa-lock",
                                        })
                                    ),
                                    e.createElement("input", {
                                        type: "password",
                                        className: "form-control",
                                        value: l,
                                        onChange: (t) => c(t.target.value),
                                        placeholder: "Password",
                                    })
                                ),
                                a.password &&
                                    e.createElement(
                                        "div",
                                        { className: "alert alert-danger" },
                                        a.password
                                    ),
                                e.createElement(
                                    "button",
                                    {
                                        className:
                                            "btn btn-success shadow-sm rounded-sm px-4 w-100",
                                        type: "submit",
                                    },
                                    "LOGIN"
                                )
                            )
                        )
                    ),
                    e.createElement(
                        "div",
                        { className: "register text-center mt-3" },
                        "Need an account? ",
                        e.createElement(i, { href: "/register" }, "Register!")
                    )
                )
            )
        )
    );
}
export { p as default };
