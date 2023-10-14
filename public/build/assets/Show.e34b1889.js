import { u as l, R as e, H as m } from "./app.4f71476c.js";
import { L as n } from "./Web.923f9eb5.js";
import { C as c } from "./CardProduct.f980363f.js";
import "./FormatPrice.72b07cf2.js";
function u() {
    const { category: t } = l().props;
    return e.createElement(
        e.Fragment,
        null,
        e.createElement(
            m,
            null,
            e.createElement(
                "title",
                null,
                `${t.name} - Egxa Store - Where Developer Shopping`
            )
        ),
        e.createElement(
            n,
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
                                { className: "row mb-5" },
                                e.createElement(
                                    "div",
                                    { className: "col-md-12" },
                                    e.createElement(
                                        "div",
                                        {
                                            className:
                                                "alert alert-warning border-0 shadow-sm rounded-3",
                                        },
                                        "Products Category : ",
                                        e.createElement("strong", null, t.name)
                                    )
                                ),
                                t.products.map((a, r) =>
                                    e.createElement(c, { product: a, key: r })
                                )
                            )
                        )
                    )
                )
            )
        )
    );
}
export { u as default };