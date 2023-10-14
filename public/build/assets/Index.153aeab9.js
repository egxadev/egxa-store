import { u as n, R as e, H as m, L as c } from "./app.4f71476c.js";
import { L as o } from "./Web.923f9eb5.js";
import { C as i } from "./CardCategory.fb75dcfe.js";
import { C as d } from "./CardProduct.f980363f.js";
import "./FormatPrice.72b07cf2.js";
function u() {
    const { sliders: a } = n().props;
    return e.createElement(
        e.Fragment,
        null,
        e.createElement(
            "div",
            { className: "container", style: { marginTop: "80px" } },
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
                            {
                                id: "carouselExampleControls",
                                className: "carousel slide",
                                "data-bs-ride": "carousel",
                            },
                            e.createElement(
                                "div",
                                { className: "carousel-inner" },
                                a.map((l, t) =>
                                    e.createElement(
                                        "div",
                                        {
                                            className: `${
                                                t == 0
                                                    ? "active carousel-item"
                                                    : "carousel-item"
                                            }`,
                                            key: t,
                                        },
                                        e.createElement("img", {
                                            src: l.image,
                                            className:
                                                "d-block img-carousel rounded-3",
                                        })
                                    )
                                )
                            ),
                            e.createElement(
                                "button",
                                {
                                    className: "carousel-control-prev",
                                    type: "button",
                                    "data-bs-target":
                                        "#carouselExampleControls",
                                    "data-bs-slide": "prev",
                                },
                                e.createElement("i", {
                                    className:
                                        "fa fa-long-arrow-alt-left carousel-custom text-dark shadow",
                                }),
                                e.createElement(
                                    "span",
                                    { className: "visually-hidden" },
                                    "Previous"
                                )
                            ),
                            e.createElement(
                                "button",
                                {
                                    className: "carousel-control-next",
                                    type: "button",
                                    "data-bs-target":
                                        "#carouselExampleControls",
                                    "data-bs-slide": "next",
                                },
                                e.createElement("i", {
                                    className:
                                        "fa fa-long-arrow-alt-right carousel-custom text-dark shadow",
                                }),
                                e.createElement(
                                    "span",
                                    { className: "visually-hidden" },
                                    "Next"
                                )
                            )
                        )
                    )
                )
            )
        )
    );
}
function g() {
    const { sliders: a, categories: l, products: t } = n().props;
    return e.createElement(
        e.Fragment,
        null,
        e.createElement(
            m,
            null,
            e.createElement(
                "title",
                null,
                "Egxa Store - Where Developer Shopping"
            )
        ),
        e.createElement(
            o,
            null,
            e.createElement(u, { sliders: a }),
            e.createElement(
                "div",
                { className: "container mt-4 mb-5" },
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
                                {
                                    className:
                                        "row justify-content-between mb-3",
                                },
                                e.createElement(
                                    "div",
                                    { className: "col-md-6 col-6 text-start" },
                                    e.createElement(
                                        "strong",
                                        null,
                                        " Categories"
                                    )
                                ),
                                e.createElement(
                                    "div",
                                    { className: "col-md-6 col-6 text-end" },
                                    e.createElement(
                                        c,
                                        {
                                            href: "/categories",
                                            className: "text-dark",
                                        },
                                        e.createElement(
                                            "strong",
                                            null,
                                            "See More ",
                                            e.createElement("i", {
                                                className:
                                                    "fa fa-long-arrow-alt-right",
                                            })
                                        )
                                    )
                                )
                            ),
                            e.createElement(
                                "div",
                                { className: "row justify-content-center" },
                                l.map((r, s) =>
                                    e.createElement(i, { category: r, key: s })
                                )
                            ),
                            e.createElement(
                                "div",
                                {
                                    className:
                                        "row justify-content-between mb-3 mt-4",
                                },
                                e.createElement(
                                    "div",
                                    { className: "col-md-6 col-6 text-start" },
                                    e.createElement(
                                        "strong",
                                        null,
                                        " Latest Products"
                                    )
                                ),
                                e.createElement(
                                    "div",
                                    { className: "col-md-6 col-6 text-end" },
                                    e.createElement(
                                        c,
                                        {
                                            href: "/products",
                                            className: "text-dark",
                                        },
                                        e.createElement(
                                            "strong",
                                            null,
                                            "See More ",
                                            e.createElement("i", {
                                                className:
                                                    "fa fa-long-arrow-alt-right",
                                            })
                                        )
                                    )
                                )
                            ),
                            e.createElement(
                                "div",
                                { className: "row mb-5" },
                                t.map((r, s) =>
                                    e.createElement(d, { product: r, key: s })
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
