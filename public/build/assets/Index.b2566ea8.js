import { u as s, R as e, H as n, L as c } from "./app.4f71476c.js";
import { L as m, h as l } from "./Account.6793dd1a.js";
import { S as o } from "./Search.16b75df2.js";
import { P as d } from "./Pagination.1adc415e.js";
import { D as i } from "./Delete.9abbaacc.js";
import "./sweetalert2.all.02b04556.js";
function N() {
    const { products: a } = s().props;
    return e.createElement(
        e.Fragment,
        null,
        e.createElement(
            n,
            null,
            e.createElement("title", null, "Products - Egxa Store")
        ),
        e.createElement(
            m,
            null,
            e.createElement(
                "div",
                { class: "row mt-5" },
                e.createElement(
                    "div",
                    { class: "col-md-8" },
                    e.createElement(
                        "div",
                        { class: "row" },
                        e.createElement(
                            "div",
                            { class: "col-md-3 col-12 mb-2" },
                            e.createElement(
                                c,
                                {
                                    href: "/account/products/create",
                                    class: "btn btn-md btn-success border-0 shadow w-100",
                                    type: "button",
                                },
                                e.createElement("i", {
                                    class: "fa fa-plus-circle me-2",
                                }),
                                "Add"
                            )
                        ),
                        e.createElement(
                            "div",
                            { class: "col-md-9 col-12 mb-2" },
                            e.createElement(o, { URL: "/account/products" })
                        )
                    )
                )
            ),
            e.createElement(
                "div",
                { className: "row mt-2 mb-4" },
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
                                " Products"
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
                                                "Title"
                                            ),
                                            e.createElement(
                                                "th",
                                                {
                                                    scope: "col",
                                                    style: { width: "20%" },
                                                },
                                                "Category"
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
                                        a.data.map((t, r) =>
                                            e.createElement(
                                                "tr",
                                                { key: r },
                                                e.createElement(
                                                    "td",
                                                    {
                                                        className:
                                                            "text-center",
                                                    },
                                                    ++r +
                                                        (a.current_page - 1) *
                                                            a.per_page
                                                ),
                                                e.createElement(
                                                    "td",
                                                    null,
                                                    t.title
                                                ),
                                                e.createElement(
                                                    "td",
                                                    null,
                                                    t.category.name
                                                ),
                                                e.createElement(
                                                    "td",
                                                    {
                                                        className:
                                                            "text-center",
                                                    },
                                                    l(["products.show"]) &&
                                                        e.createElement(
                                                            c,
                                                            {
                                                                href: `/account/products/${t.id}`,
                                                                className:
                                                                    "btn btn-dark btn-sm me-2",
                                                            },
                                                            e.createElement(
                                                                "i",
                                                                {
                                                                    className:
                                                                        "fa fa-plus-circle",
                                                                }
                                                            )
                                                        ),
                                                    l(["products.edit"]) &&
                                                        e.createElement(
                                                            c,
                                                            {
                                                                href: `/account/products/${t.id}/edit`,
                                                                className:
                                                                    "btn btn-primary btn-sm me-2",
                                                            },
                                                            e.createElement(
                                                                "i",
                                                                {
                                                                    className:
                                                                        "fa fa-pencil-alt",
                                                                }
                                                            )
                                                        ),
                                                    l(["products.delete"]) &&
                                                        e.createElement(i, {
                                                            URL: "/account/products",
                                                            id: t.id,
                                                        })
                                                )
                                            )
                                        )
                                    )
                                )
                            ),
                            e.createElement(d, { links: a.links, align: "end" })
                        )
                    )
                )
            )
        )
    );
}
export { N as default };
