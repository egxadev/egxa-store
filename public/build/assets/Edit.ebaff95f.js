import { u as w, r, R as e, H as g, d as C } from "./app.4f71476c.js";
import { L as y } from "./Account.6793dd1a.js";
import { S as k } from "./sweetalert2.all.02b04556.js";
function R() {
    const { errors: t, roles: u, user: m } = w().props,
        [n, E] = r.exports.useState(m.name),
        [o, p] = r.exports.useState(m.email),
        [d, f] = r.exports.useState(""),
        [i, N] = r.exports.useState(""),
        [c, b] = r.exports.useState(m.roles.map((a) => a.name)),
        v = (a) => {
            let l = c;
            l.some((s) => s === a.target.value)
                ? (l = l.filter((s) => s !== a.target.value))
                : l.push(a.target.value),
                b(l);
        },
        h = async (a) => {
            a.preventDefault(),
                C.Inertia.put(
                    `/account/users/${m.id}`,
                    {
                        name: n,
                        email: o,
                        password: d,
                        password_confirmation: i,
                        roles: c,
                    },
                    {
                        onSuccess: () => {
                            k.fire({
                                title: "Success!",
                                text: "Data updated successfully!",
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
            g,
            null,
            e.createElement("title", null, "Edit Users - Egxa Store")
        ),
        e.createElement(
            y,
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
                                " Edit User"
                            )
                        ),
                        e.createElement(
                            "div",
                            { className: "card-body" },
                            e.createElement(
                                "form",
                                { onSubmit: h },
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
                                                value: n,
                                                onChange: (a) =>
                                                    E(a.target.value),
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
                                                value: o,
                                                onChange: (a) =>
                                                    p(a.target.value),
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
                                                value: d,
                                                onChange: (a) =>
                                                    f(a.target.value),
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
                                                value: i,
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
                                    u.map((a, l) =>
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
                                                defaultChecked: c.some(
                                                    (s) => s === a.name
                                                ),
                                                onChange: v,
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
                                        " Update"
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
export { R as default };