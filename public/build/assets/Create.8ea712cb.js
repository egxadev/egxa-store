import { u as o, r, R as e, H as d, d as i } from "./app.4f71476c.js";
import { L as u } from "./Account.6793dd1a.js";
import { S as f } from "./sweetalert2.all.02b04556.js";
function g() {
    const { errors: t } = o().props,
        [s, l] = r.exports.useState(""),
        [m, c] = r.exports.useState(null),
        n = async (a) => {
            a.preventDefault(),
                i.Inertia.post(
                    "/account/categories",
                    { name: s, image: m },
                    {
                        onSuccess: () => {
                            f.fire({
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
            d,
            null,
            e.createElement("title", null, "Create Category - Egxa Store")
        ),
        e.createElement(
            u,
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
                                    className: "fa fa-folder",
                                }),
                                " Add New Category"
                            )
                        ),
                        e.createElement(
                            "div",
                            { className: "card-body" },
                            e.createElement(
                                "form",
                                { onSubmit: n },
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
                                        onChange: (a) => c(a.target.files[0]),
                                    })
                                ),
                                t.image &&
                                    e.createElement(
                                        "div",
                                        { className: "alert alert-danger" },
                                        t.image
                                    ),
                                e.createElement(
                                    "div",
                                    { className: "mb-3" },
                                    e.createElement(
                                        "label",
                                        { className: "form-label fw-bold" },
                                        "Category Name"
                                    ),
                                    e.createElement("input", {
                                        type: "text",
                                        className: "form-control",
                                        value: s,
                                        onChange: (a) => l(a.target.value),
                                        placeholder: "Enter Category Name",
                                    })
                                ),
                                t.name &&
                                    e.createElement(
                                        "div",
                                        { className: "alert alert-danger" },
                                        t.name
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
export { g as default };
