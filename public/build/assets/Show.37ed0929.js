import { u, r as o, R as e, H as E, d as p } from "./app.4f71476c.js";
import { L as N } from "./Account.6793dd1a.js";
import { P as b } from "./Pagination.1adc415e.js";
import { D as g } from "./Delete.9abbaacc.js";
import { S as f } from "./sweetalert2.all.02b04556.js";
function S() {
    const { product: a, colors: n, errors: l } = u().props,
        [c, r] = o.exports.useState(""),
        [d, s] = o.exports.useState(""),
        i = async (t) => {
            t.preventDefault(),
                p.Inertia.post(
                    "/account/products/store_image_product",
                    { image: d, color_id: c, product_id: a.id },
                    {
                        onSuccess: () => {
                            f.fire({
                                title: "Success!",
                                text: "Data saved successfully!",
                                icon: "success",
                                showConfirmButton: !1,
                                timer: 1500,
                            }),
                                s(null),
                                r("");
                        },
                    }
                );
        };
    return e.createElement(
        e.Fragment,
        null,
        e.createElement(
            E,
            null,
            e.createElement("title", null, "Detail Product - Egxa Store")
        ),
        e.createElement(
            N,
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
                                    className: "fa fa-shopping-bag",
                                }),
                                " Upload Product Image"
                            )
                        ),
                        e.createElement(
                            "div",
                            { className: "card-body" },
                            e.createElement(
                                "form",
                                { onSubmit: i },
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
                                        onChange: (t) => s(t.target.files[0]),
                                    })
                                ),
                                l.image &&
                                    e.createElement(
                                        "div",
                                        { className: "alert alert-danger" },
                                        l.image
                                    ),
                                e.createElement(
                                    "div",
                                    { className: "mb-3" },
                                    e.createElement(
                                        "label",
                                        { className: "form-label fw-bold" },
                                        "Color"
                                    ),
                                    e.createElement(
                                        "select",
                                        {
                                            className: "form-select",
                                            value: c,
                                            onChange: (t) => r(t.target.value),
                                        },
                                        e.createElement(
                                            "option",
                                            { value: "" },
                                            "-- Select Color --"
                                        ),
                                        n.map((t) =>
                                            e.createElement(
                                                "option",
                                                { value: t.id, key: t.id },
                                                t.name
                                            )
                                        )
                                    )
                                ),
                                l.color_id &&
                                    e.createElement(
                                        "div",
                                        { className: "alert alert-danger" },
                                        l.color_id
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
            ),
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
                                    className: "fa fa-shopping-bag",
                                }),
                                " Product Image"
                            )
                        ),
                        e.createElement(
                            "div",
                            { className: "card-body" },
                            e.createElement(
                                "div",
                                { className: "table-responsive" },
                                e.createElement(
                                    "table",
                                    {
                                        className:
                                            "table table-bordered table-striped table-hovered",
                                    },
                                    e.createElement(
                                        "thead",
                                        null,
                                        e.createElement(
                                            "tr",
                                            null,
                                            e.createElement(
                                                "th",
                                                {
                                                    scope: "col",
                                                    style: { width: "5%" },
                                                },
                                                "No."
                                            ),
                                            e.createElement(
                                                "th",
                                                {
                                                    scope: "col",
                                                    style: { width: "20%" },
                                                },
                                                "Image"
                                            ),
                                            e.createElement(
                                                "th",
                                                {
                                                    scope: "col",
                                                    style: { width: "15%" },
                                                },
                                                "Color"
                                            ),
                                            e.createElement(
                                                "th",
                                                {
                                                    scope: "col",
                                                    style: { width: "15%" },
                                                },
                                                "Color Name"
                                            ),
                                            e.createElement(
                                                "th",
                                                {
                                                    scope: "col",
                                                    style: { width: "15%" },
                                                },
                                                "Actions"
                                            )
                                        )
                                    ),
                                    e.createElement(
                                        "tbody",
                                        null,
                                        a.product_images.data.map((t, m) =>
                                            e.createElement(
                                                "tr",
                                                { key: m },
                                                e.createElement(
                                                    "td",
                                                    {
                                                        className:
                                                            "text-center",
                                                    },
                                                    ++m +
                                                        (a.product_images
                                                            .current_page -
                                                            1) *
                                                            a.product_images
                                                                .per_page
                                                ),
                                                e.createElement(
                                                    "td",
                                                    {
                                                        className:
                                                            "text-center",
                                                    },
                                                    e.createElement("img", {
                                                        src: t.image,
                                                        width: "200",
                                                        className: "rounded-3",
                                                    })
                                                ),
                                                e.createElement(
                                                    "td",
                                                    {
                                                        className:
                                                            "text-center",
                                                    },
                                                    e.createElement("img", {
                                                        src: t.color.image,
                                                        width: "30",
                                                        className:
                                                            "rounded-circle",
                                                    })
                                                ),
                                                e.createElement(
                                                    "td",
                                                    {
                                                        className:
                                                            "text-center",
                                                    },
                                                    t.color.name
                                                ),
                                                e.createElement(
                                                    "td",
                                                    {
                                                        className:
                                                            "text-center",
                                                    },
                                                    e.createElement(g, {
                                                        URL: "/account/products/destroy_image_product",
                                                        id: t.id,
                                                    })
                                                )
                                            )
                                        )
                                    )
                                )
                            ),
                            e.createElement(b, {
                                links: a.product_images.links,
                                align: "end",
                            })
                        )
                    )
                )
            )
        )
    );
}
export { S as default };