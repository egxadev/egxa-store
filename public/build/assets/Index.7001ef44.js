import { u as F, r, R as e, H as G } from "./app.4f71476c.js";
import { L as $, a as p } from "./Web.923f9eb5.js";
import { f as l } from "./FormatPrice.72b07cf2.js";
import j from "./StoreCheckout.cf223fe5.js";
import "./sweetalert2.all.02b04556.js";
function z() {
    const { provinces: E, dataCarts: s } = F().props,
        [h, v] = r.exports.useState(""),
        [c, g] = r.exports.useState(""),
        [b, f] = r.exports.useState([]),
        [N, k] = r.exports.useState(!1),
        [w, S] = r.exports.useState(""),
        [C, n] = r.exports.useState(!1),
        [y, o] = r.exports.useState(!1),
        [x, I] = r.exports.useState([]),
        [_, O] = r.exports.useState(0),
        [m, P] = r.exports.useState(0),
        [i, L] = r.exports.useState(0),
        [d, R] = r.exports.useState(""),
        D = async (t) => {
            v(t),
                p.get(`/checkouts/cities?province_id=${t}`).then((a) => {
                    f(a.data);
                });
        },
        T = (t) => {
            g(t), k(!0);
        },
        u = (t) => {
            n(!0),
                o(!1),
                S(t.target.value),
                p
                    .post("/checkouts/checkOngkir", {
                        destination: c,
                        weight: s.weight,
                        courier: t.target.value,
                    })
                    .then((a) => {
                        I(a.data), n(!1), o(!0);
                    });
        },
        A = (t) => {
            let a = t.target.value.split("|");
            P(a[0]), O(a[1]), L(parseInt(s.price) + parseInt(a[0]));
        };
    return e.createElement(
        e.Fragment,
        null,
        e.createElement(
            G,
            null,
            e.createElement(
                "title",
                null,
                "Checkouts - Egxa Store - Where Developer Shopping"
            )
        ),
        e.createElement(
            $,
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
                                {
                                    className:
                                        "card border-0 rounded-3 shadow-sm",
                                },
                                e.createElement(
                                    "div",
                                    { className: "card-header" },
                                    e.createElement("i", {
                                        className: "fa fa-shopping-cart",
                                    }),
                                    " Shipping Information"
                                ),
                                e.createElement(
                                    "div",
                                    { className: "card-body" },
                                    e.createElement(
                                        "div",
                                        { className: "mb-3" },
                                        e.createElement(
                                            "label",
                                            { className: "mb-2 fw-bold" },
                                            "Province"
                                        ),
                                        e.createElement(
                                            "select",
                                            {
                                                className: "form-select",
                                                onChange: (t) =>
                                                    D(t.target.value),
                                            },
                                            e.createElement(
                                                "option",
                                                { value: "" },
                                                "-- Select Province --"
                                            ),
                                            E.map((t, a) =>
                                                e.createElement(
                                                    "option",
                                                    { key: a, value: t.id },
                                                    t.name
                                                )
                                            )
                                        )
                                    ),
                                    e.createElement(
                                        "div",
                                        { className: "mb-3" },
                                        e.createElement(
                                            "label",
                                            { className: "mb-2 fw-bold" },
                                            "City"
                                        ),
                                        e.createElement(
                                            "select",
                                            {
                                                className: "form-select",
                                                onChange: (t) =>
                                                    T(t.target.value),
                                            },
                                            e.createElement(
                                                "option",
                                                { value: "" },
                                                "-- Select City --"
                                            ),
                                            b.map((t, a) =>
                                                e.createElement(
                                                    "option",
                                                    { key: a, value: t.id },
                                                    t.name
                                                )
                                            )
                                        )
                                    ),
                                    N &&
                                        e.createElement(
                                            "div",
                                            { className: "mb-3" },
                                            e.createElement(
                                                "label",
                                                { className: "mb-2 fw-bold" },
                                                "Shipping Expedition"
                                            ),
                                            e.createElement("br", null),
                                            e.createElement(
                                                "div",
                                                { className: "form-check" },
                                                e.createElement(
                                                    "label",
                                                    {
                                                        className:
                                                            "form-check-label font-weight-bold me-5",
                                                        htmlFor:
                                                            "ongkos_kirim_tiki",
                                                    },
                                                    e.createElement("input", {
                                                        className:
                                                            "form-check-input select-courier",
                                                        name: "courier",
                                                        type: "radio",
                                                        id: "ongkos_kirim_tiki",
                                                        value: "tiki",
                                                        onChange: u,
                                                    }),
                                                    "TIKI"
                                                ),
                                                e.createElement(
                                                    "label",
                                                    {
                                                        className:
                                                            "form-check-label font-weight-bold",
                                                        htmlFor:
                                                            "ongkos_kirim_pos",
                                                    },
                                                    e.createElement("input", {
                                                        className:
                                                            "form-check-input select-courier",
                                                        name: "courier",
                                                        type: "radio",
                                                        id: "ongkos_kirim_pos",
                                                        value: "pos",
                                                        onChange: u,
                                                    }),
                                                    "POS"
                                                )
                                            )
                                        ),
                                    C &&
                                        e.createElement(
                                            "div",
                                            {
                                                className:
                                                    "justify-content-center mb-3 text-center",
                                            },
                                            e.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "spinner-border text-success",
                                                    role: "status",
                                                },
                                                e.createElement(
                                                    "span",
                                                    {
                                                        className:
                                                            "visually-hidden",
                                                    },
                                                    "Loading..."
                                                )
                                            ),
                                            e.createElement(
                                                "h6",
                                                { className: "mt-2" },
                                                "Loading..."
                                            )
                                        ),
                                    y &&
                                        e.createElement(
                                            "div",
                                            {
                                                className: "mb-3",
                                                "v-if": "courier.showService",
                                            },
                                            e.createElement("hr", null),
                                            e.createElement(
                                                "label",
                                                { className: "fw-bold" },
                                                "Shipping Cost"
                                            ),
                                            e.createElement("br", null),
                                            e.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "form-check form-check-inline mt-2",
                                                },
                                                x.map((t, a) =>
                                                    e.createElement(
                                                        "label",
                                                        {
                                                            className:
                                                                "form-check-label font-weight-normal me-5",
                                                            htmlFor: t.service,
                                                            key: a,
                                                        },
                                                        e.createElement(
                                                            "input",
                                                            {
                                                                className:
                                                                    "form-check-input",
                                                                id: t.serrvice,
                                                                type: "radio",
                                                                name: "cost",
                                                                value: `${t.cost[0].value}|${t.service}`,
                                                                onChange: A,
                                                            }
                                                        ),
                                                        t.service,
                                                        " - Rp. ",
                                                        l(t.cost[0].value)
                                                    )
                                                )
                                            )
                                        ),
                                    e.createElement(
                                        "div",
                                        { className: "mb-3" },
                                        e.createElement(
                                            "label",
                                            { className: "mb-2 fw-bold" },
                                            "Address"
                                        ),
                                        e.createElement("textarea", {
                                            className: "form-control",
                                            value: d,
                                            onChange: (t) => R(t.target.value),
                                            rows: "3",
                                            placeholder: "Address",
                                        })
                                    )
                                )
                            ),
                            e.createElement(
                                "div",
                                {
                                    className:
                                        "card border-0 rounded-3 shadow-sm mt-3 mb-3",
                                },
                                e.createElement(
                                    "div",
                                    { className: "card-body" },
                                    e.createElement(
                                        "div",
                                        { className: "table-responsive" },
                                        e.createElement(
                                            "table",
                                            { className: "table mb-0 mt-0" },
                                            e.createElement(
                                                "tbody",
                                                null,
                                                e.createElement(
                                                    "tr",
                                                    null,
                                                    e.createElement(
                                                        "td",
                                                        {
                                                            style: {
                                                                width: "25%",
                                                            },
                                                        },
                                                        "Total Orders"
                                                    ),
                                                    e.createElement(
                                                        "td",
                                                        {
                                                            style: {
                                                                width: "1%",
                                                            },
                                                        },
                                                        ":"
                                                    ),
                                                    e.createElement(
                                                        "td",
                                                        null,
                                                        e.createElement(
                                                            "strong",
                                                            null,
                                                            "Rp. ",
                                                            l(s.price)
                                                        )
                                                    )
                                                ),
                                                e.createElement(
                                                    "tr",
                                                    null,
                                                    e.createElement(
                                                        "td",
                                                        {
                                                            style: {
                                                                width: "25%",
                                                            },
                                                        },
                                                        "Shipping Cost"
                                                    ),
                                                    e.createElement(
                                                        "td",
                                                        {
                                                            style: {
                                                                width: "1%",
                                                            },
                                                        },
                                                        ":"
                                                    ),
                                                    e.createElement(
                                                        "td",
                                                        null,
                                                        e.createElement(
                                                            "strong",
                                                            null,
                                                            "Rp. ",
                                                            l(m)
                                                        )
                                                    )
                                                ),
                                                e.createElement(
                                                    "tr",
                                                    null,
                                                    e.createElement(
                                                        "td",
                                                        {
                                                            style: {
                                                                width: "25%",
                                                            },
                                                        },
                                                        "Grand Total"
                                                    ),
                                                    e.createElement(
                                                        "td",
                                                        {
                                                            style: {
                                                                width: "1%",
                                                            },
                                                        },
                                                        ":"
                                                    ),
                                                    e.createElement(
                                                        "td",
                                                        null,
                                                        e.createElement(
                                                            "strong",
                                                            null,
                                                            "Rp. ",
                                                            l(i)
                                                        )
                                                    )
                                                )
                                            )
                                        )
                                    )
                                )
                            ),
                            e.createElement(j, {
                                provinceID: h,
                                cityID: c,
                                courierName: w,
                                courierService: _,
                                courierCost: m,
                                weight: s.weight,
                                grandTotal: i,
                                address: d,
                            })
                        )
                    )
                )
            )
        )
    );
}
export { z as default };
