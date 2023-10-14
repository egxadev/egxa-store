import { u as l, R as e, H as n } from "./app.4f71476c.js";
import { L as m } from "./Web.923f9eb5.js";
import { C as c } from "./CardProduct.f980363f.js";
import { P as s } from "./Pagination.1adc415e.js";
import "./FormatPrice.72b07cf2.js";
function p() {
    const { products: t } = l().props;
    return e.createElement(
        e.Fragment,
        null,
        e.createElement(
            n,
            null,
            e.createElement(
                "title",
                null,
                "Products - Egxa Store - Where Developer Shopping"
            )
        ),
        e.createElement(
            m,
            null,
            e.createElement(
                "div",
                { className: "container mt-80 mb-5" },
                e.createElement(
                    "div",
                    { className: "fade-in" },
                    e.createElement(
                        "div",
                        { className: "row justify-content-center" },
                        e.createElement(
                            "div",
                            { className: "col-md-8" },
                            e.createElement(
                                "div",
                                { className: "row justify-content-center" },
                                e.createElement(
                                    "div",
                                    { className: "col-md-12" },
                                    e.createElement(
                                        "div",
                                        {
                                            className:
                                                "alert alert-warning border-0 shadow-sm rounded-3",
                                        },
                                        e.createElement(
                                            "strong",
                                            null,
                                            "All Products"
                                        )
                                    )
                                ),
                                t.data.map((a, r) =>
                                    e.createElement(c, { product: a, key: r })
                                ),
                                e.createElement(
                                    "div",
                                    { className: "col-md-12 mt-4 mb-5" },
                                    e.createElement(s, {
                                        links: t.links,
                                        align: "center",
                                    })
                                )
                            )
                        )
                    )
                )
            )
        )
    );
}
export { p as default };
