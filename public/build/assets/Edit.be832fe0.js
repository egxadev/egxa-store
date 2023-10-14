import { u as d, r, R as e, H as i, d as u } from "./app.4f71476c.js";
import { L as E } from "./Account.6793dd1a.js";
import { S as f } from "./sweetalert2.all.02b04556.js";
function g() {
    const { errors: a, color: l } = d().props,
        [s, m] = r.exports.useState(l.name),
        [c, n] = r.exports.useState(null),
        o = async (t) => {
            t.preventDefault(),
                u.Inertia.post(
                    `/account/colors/${l.id}`,
                    { name: s, image: c, _method: "PUT" },
                    {
                        onSuccess: () => {
                            f.fire({
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
            i,
            null,
            e.createElement("title", null, "Edit Color - Egxa Store")
        ),
        e.createElement(
            E,
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
                                    className: "fa fa-palette",
                                }),
                                " Edit Color"
                            )
                        ),
                        e.createElement(
                            "div",
                            { className: "card-body" },
                            e.createElement(
                                "form",
                                { onSubmit: o },
                                e.createElement(
                                    "div",
                                    { className: "mb-3" },
                                    e.createElement(
                                        "label",
                                        { className: "form-label fw-bold" },
                                        "Image"
                                    ),
                                    e.createElement("input", {
                                        type: "file",
                                        className: "form-control",
                                        onChange: (t) => n(t.target.files[0]),
                                    })
                                ),
                                a.image &&
                                    e.createElement(
                                        "div",
                                        { className: "alert alert-danger" },
                                        a.image
                                    ),
                                e.createElement(
                                    "div",
                                    { className: "mb-3" },
                                    e.createElement(
                                        "label",
                                        { className: "form-label fw-bold" },
                                        "Color Name"
                                    ),
                                    e.createElement("input", {
                                        type: "text",
                                        className: "form-control",
                                        value: s,
                                        onChange: (t) => m(t.target.value),
                                        placeholder: "Enter Color Name",
                                    })
                                ),
                                a.name &&
                                    e.createElement(
                                        "div",
                                        { className: "alert alert-danger" },
                                        a.name
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
export { g as default };
