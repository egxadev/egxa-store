import { u as N, r as c, R as e, H as h } from "./app.4f71476c.js";
import { L as v } from "./Web.923f9eb5.js";
import { f as w } from "./FormatPrice.72b07cf2.js";
import S from "./AddToCart.5ad1750a.js";
import "./sweetalert2.all.02b04556.js";
function C() {
    const { product: t } = N().props,
        [s, l] = c.exports.useState(t.product_images[0].image),
        [o, n] = c.exports.useState(t.product_images[0].color.name),
        [d, i] = c.exports.useState(t.product_images[0].color.image),
        [u, p] = c.exports.useState(t.product_sizes[0].size),
        [m, E] = c.exports.useState(t.product_sizes[0].price),
        g = (a) => {
            l(a.image), n(a.color.name), i(a.color.image);
        },
        b = (a, r) => {
            p(a), E(r);
        };
    return e.createElement(
        e.Fragment,
        null,
        e.createElement(
            h,
            null,
            e.createElement(
                "title",
                null,
                `${t.title} - Egxa Store - Where Developer Shopping`
            )
        ),
        e.createElement(
            v,
            null,
            e.createElement(
                "div",
                { className: "container mt-55 mb-5" },
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
                                        "card border-0 bg-gray rounded-0 shadow-sm pt-2 mb-0",
                                },
                                e.createElement(
                                    "div",
                                    { className: "card-body text-center" },
                                    e.createElement("img", {
                                        src: s,
                                        width: "300",
                                        className: "rounded-3",
                                    })
                                )
                            ),
                            e.createElement(
                                "div",
                                {
                                    className:
                                        "card border-0 rounded-top-none rounded shadow-sm mt-0 mb-3",
                                },
                                e.createElement(
                                    "div",
                                    { className: "card-body" },
                                    e.createElement(
                                        "div",
                                        { className: "row" },
                                        e.createElement(
                                            "div",
                                            {
                                                className:
                                                    "col-md-6 col-6 text-start",
                                            },
                                            e.createElement("h5", null, t.title)
                                        ),
                                        e.createElement(
                                            "div",
                                            {
                                                className:
                                                    "col-md-6 col-6 text-end",
                                            },
                                            e.createElement(
                                                "h5",
                                                null,
                                                "Rp. ",
                                                w(m)
                                            )
                                        )
                                    ),
                                    e.createElement(
                                        "div",
                                        { className: "colors mt-4" },
                                        e.createElement("i", null, "Colors"),
                                        e.createElement(
                                            "div",
                                            { className: "mt-2" },
                                            t.product_images.map((a, r) =>
                                                e.createElement(
                                                    "button",
                                                    {
                                                        onClick: () => g(a),
                                                        key: r,
                                                        className:
                                                            "btn btn-transparent btn-sm me-2 border-0 text-center",
                                                    },
                                                    e.createElement("img", {
                                                        src: a.color.image,
                                                        width: "20",
                                                        className:
                                                            "rounded-circle me-3 shadow-sm",
                                                    })
                                                )
                                            )
                                        )
                                    ),
                                    e.createElement("hr", null),
                                    e.createElement(
                                        "div",
                                        { className: "colors mt-4" },
                                        e.createElement("i", null, "Sizes"),
                                        e.createElement(
                                            "div",
                                            { className: "mt-2" },
                                            t.product_sizes.map((a, r) =>
                                                e.createElement(
                                                    "button",
                                                    {
                                                        onClick: () =>
                                                            b(a.size, a.price),
                                                        className:
                                                            "btn btn-success btn-sm me-2 border-0 shadow-sm w-5",
                                                        key: r,
                                                    },
                                                    a.size
                                                )
                                            )
                                        )
                                    )
                                )
                            ),
                            e.createElement(
                                "div",
                                {
                                    className:
                                        "card border-0 rounded shadow-sm mb-5",
                                },
                                e.createElement(
                                    "div",
                                    { className: "card-body" },
                                    e.createElement("h5", null, "Description"),
                                    e.createElement("hr", null),
                                    e.createElement("div", {
                                        dangerouslySetInnerHTML: {
                                            __html: t.description,
                                        },
                                    })
                                )
                            ),
                            e.createElement(S, {
                                product_id: t.id,
                                productImage: s,
                                color: o,
                                colorImage: d,
                                size: u,
                                price: m,
                                weight: t.weight,
                            })
                        )
                    )
                )
            )
        )
    );
}
export { C as default };
