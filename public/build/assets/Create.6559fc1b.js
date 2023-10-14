import { u as v, r as s, R as e, H as w, d as h } from "./app.4f71476c.js";
import { L as g } from "./Account.6793dd1a.js";
import { S as C } from "./sweetalert2.all.02b04556.js";
function k() {
    const { errors: t, roles: d } = v().props,
        [r, i] = s.exports.useState(""),
        [c, u] = s.exports.useState(""),
        [m, E] = s.exports.useState(""),
        [n, N] = s.exports.useState(""),
        [o, p] = s.exports.useState([]),
        f = (a) => {
            let l = o;
            l.push(a.target.value), p(l);
        },
        b = async (a) => {
            a.preventDefault(),
                h.Inertia.post(
                    "/account/users",
                    {
                        name: r,
                        email: c,
                        password: m,
                        password_confirmation: n,
                        roles: o,
                    },
                    {
                        onSuccess: () => {
                            C.fire({
                                title: "Success!",
                                text: "Data saved successfully!",
                                icon: "success",
                                showConfirmButton: !1,
                                timer: 1500,
                            });
                        },
                    }
                );
        };
    return e.createElement(
        e.Fragment,
        null,
        e.createElement(
            w,
            null,
            e.createElement("title", null, "Create Users - Egxa Store")
        ),
        e.createElement(
            g,
            null,
            e.createElement(
                "div",
                { className: "row mt-4" },
                e.createElement(
                    "div",
                    { className: "col-12" },
                    e.createElement(
                        "div",
                        {
                            className:
                                "card border-0 rounded shadow-sm border-top-success",
                        },
                        e.createElement(
                            "div",
                            { className: "card-header" },
                            e.createElement(
                                "span",
                                { className: "font-weight-bold" },
                                e.createElement("i", {
                                    className: "fa fa-users",
                                }),
                                " Add New User"
                            )
                        ),
                        e.createElement(
                            "div",
                            { className: "card-body" },
                            e.createElement(
                                "form",
                                { onSubmit: b },
                                e.createElement(
                                    "div",
                                    { className: "row" },
                                    e.createElement(
                                        "div",
                                        { className: "col-md-6" },
                                        e.createElement(
                                            "div",
                                            { className: "mb-3" },
                                            e.createElement(
                                                "label",
                                                {
                                                    className:
                                                        "form-label fw-bold",
                                                },
                                                "Full Name"
                                            ),
                                            e.createElement("input", {
                                                type: "text",
                                                className: "form-control",
                                                value: r,
                                                onChange: (a) =>
                                                    i(a.target.value),
                                                placeholder: "Enter Full Name",
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
                                            "div",
                                            { className: "mb-3" },
                                            e.createElement(
                                                "label",
                                                {
                                                    className:
                                                        "form-label fw-bold",
                                                },
                                                "Email Address"
                                            ),
                                            e.createElement("input", {
                                                type: "text",
                                                className: "form-control",
                                                value: c,
                                                onChange: (a) =>
                                                    u(a.target.value),
                                                placeholder:
                                                    "Enter Email Address",
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
                                            "div",
                                            { className: "mb-3" },
                                            e.createElement(
                                                "label",
                                                {
                                                    className:
                                                        "form-label fw-bold",
                                                },
                                                "Password"
                                            ),
                                            e.createElement("input", {
                                                type: "password",
                                                className: "form-control",
                                                value: m,
                                                onChange: (a) =>
                                                    E(a.target.value),
                                                placeholder: "Enter Password",
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
                                            "div",
                                            { className: "mb-3" },
                                            e.createElement(
                                                "label",
                                                {
                                                    className:
                                                        "form-label fw-bold",
                                                },
                                                "Password Confirmation"
                                            ),
                                            e.createElement("input", {
                                                type: "password",
                                                className: "form-control",
                                                value: n,
                                                onChange: (a) =>
                                                    N(a.target.value),
                                                placeholder:
                                                    "Enter Password Confirmation",
                                            })
                                        )
                                    )
                                ),
                                e.createElement(
                                    "div",
                                    { className: "mb-3" },
                                    e.createElement(
                                        "label",
                                        { className: "fw-bold" },
                                        "Roles"
                                    ),
                                    e.createElement("br", null),
                                    d.map((a, l) =>
                                        e.createElement(
                                            "div",
                                            {
                                                className:
                                                    "form-check form-check-inline",
                                                key: l,
                                            },
                                            e.createElement("input", {
                                                className: "form-check-input",
                                                type: "checkbox",
                                                value: a.name,
                                                onChange: f,
                                                id: `check-${a.id}`,
                                            }),
                                            e.createElement(
                                                "label",
                                                {
                                                    className:
                                                        "form-check-label",
                                                    htmlFor: `check-${a.id}`,
                                                },
                                                a.name
                                            )
                                        )
                                    ),
                                    t.roles &&
                                        e.createElement(
                                            "div",
                                            {
                                                className:
                                                    "alert alert-danger mt-2",
                                            },
                                            t.roles
                                        )
                                ),
                                e.createElement(
                                    "div",
                                    null,
                                    e.createElement(
                                        "button",
                                        {
                                            type: "submit",
                                            className:
                                                "btn btn-md btn-success me-2",
                                        },
                                        e.createElement("i", {
                                            className: "fa fa-save",
                                        }),
                                        " Save"
                                    ),
                                    e.createElement(
                                        "button",
                                        {
                                            type: "reset",
                                            className: "btn btn-md btn-warning",
                                        },
                                        e.createElement("i", {
                                            className: "fa fa-redo",
                                        }),
                                        " Reset"
                                    )
                                )
                            )
                        )
                    )
                )
            )
        )
    );
}
export { k as default };