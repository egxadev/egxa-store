import { u as r, R as e, H as n } from "./app.4f71476c.js";
import { L as m } from "./Account.6793dd1a.js";
import { f as l } from "./FormatPrice.72b07cf2.js";
function E() {
    const { transaction: t } = r().props;
    return e.createElement(
        e.Fragment,
        null,
        e.createElement(
            n,
            null,
            e.createElement("title", null, "Detail Transaction - Egxa Store")
        ),
        e.createElement(
            m,
            null,
            e.createElement(
                "div",
                { className: "row mt-4 mb-4" },
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
                                    className: "fa fa-shopping-cart",
                                }),
                                " Detail Transaction"
                            )
                        ),
                        e.createElement(
                            "div",
                            { className: "card-body" },
                            e.createElement(
                                "table",
                                { className: "table table-bordered" },
                                e.createElement(
                                    "tr",
                                    null,
                                    e.createElement(
                                        "td",
                                        { style: { width: "25%" } },
                                        "NO. INVOICE"
                                    ),
                                    e.createElement(
                                        "td",
                                        { style: { width: "1%" } },
                                        ":"
                                    ),
                                    e.createElement(
                                        "td",
                                        { className: "p-2" },
                                        t.invoice
                                    )
                                ),
                                e.createElement(
                                    "tr",
                                    null,
                                    e.createElement("td", null, "FULL NAME"),
                                    e.createElement("td", null, ":"),
                                    e.createElement(
                                        "td",
                                        { className: "p-2" },
                                        t.user.name
                                    )
                                ),
                                e.createElement(
                                    "tr",
                                    null,
                                    e.createElement(
                                        "td",
                                        null,
                                        "COURIER / SERVICE / COST"
                                    ),
                                    e.createElement("td", null, ":"),
                                    e.createElement(
                                        "td",
                                        { className: "p-2" },
                                        t.courier_name,
                                        " / ",
                                        t.courier_service,
                                        " / Rp.",
                                        l(t.courier_cost)
                                    )
                                ),
                                e.createElement(
                                    "tr",
                                    null,
                                    e.createElement("td", null, "CITY"),
                                    e.createElement("td", null, ":"),
                                    e.createElement(
                                        "td",
                                        { className: "p-2" },
                                        t.city.name
                                    )
                                ),
                                e.createElement(
                                    "tr",
                                    null,
                                    e.createElement("td", null, "PROVINCE"),
                                    e.createElement("td", null, ":"),
                                    e.createElement(
                                        "td",
                                        { className: "p-2" },
                                        t.province.name
                                    )
                                ),
                                e.createElement(
                                    "tr",
                                    null,
                                    e.createElement("td", null, "ADDRESS"),
                                    e.createElement("td", null, ":"),
                                    e.createElement(
                                        "td",
                                        { className: "p-2" },
                                        t.address
                                    )
                                ),
                                e.createElement(
                                    "tr",
                                    null,
                                    e.createElement("td", null, "GRAND TOTAL"),
                                    e.createElement("td", null, ":"),
                                    e.createElement(
                                        "td",
                                        { className: "p-2" },
                                        "Rp. ",
                                        l(t.grand_total)
                                    )
                                ),
                                e.createElement(
                                    "tr",
                                    null,
                                    e.createElement("td", null, "STATUS"),
                                    e.createElement("td", null, ":"),
                                    e.createElement(
                                        "td",
                                        { className: "p-3" },
                                        t.status == "UNPAID" &&
                                            e.createElement(
                                                "a",
                                                {
                                                    href: `https://app-sandbox.duitku.com/redirect_checkout?reference=${t.reference}&lang=id`,
                                                    className:
                                                        "btn btn-success btn-sm border-0 shadow-sm",
                                                },
                                                "PAY NOW"
                                            ),
                                        t.status == "PAID" &&
                                            e.createElement(
                                                "button",
                                                {
                                                    className:
                                                        "btn btn-sm btn-success border-0 shadow-sm",
                                                },
                                                e.createElement("i", {
                                                    className:
                                                        "fa fa-check-circle",
                                                }),
                                                " PAID"
                                            ),
                                        t.status == "CANCELLED" &&
                                            e.createElement(
                                                "button",
                                                {
                                                    className:
                                                        "btn btn-sm btn-danger border-0 shadow-sm",
                                                },
                                                e.createElement("i", {
                                                    className: "fa fa-times",
                                                }),
                                                " CANCELLED"
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
                                "card border-0 rounded shadow-sm border-top-success mt-4",
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
                                " Detail Product"
                            )
                        ),
                        e.createElement(
                            "div",
                            { className: "card-body" },
                            t.transaction_details.map((a, c) =>
                                e.createElement(
                                    "div",
                                    { key: c },
                                    e.createElement(
                                        "div",
                                        { className: "row g-0" },
                                        e.createElement(
                                            "div",
                                            { className: "col-md-3 col-3" },
                                            e.createElement("img", {
                                                src: a.product_image,
                                                className:
                                                    "img-fluid rounded-3",
                                            })
                                        ),
                                        e.createElement(
                                            "div",
                                            { className: "col-md-9 col-9" },
                                            e.createElement(
                                                "div",
                                                { className: "card-body" },
                                                e.createElement(
                                                    "h4",
                                                    { className: "card-title" },
                                                    a.product.title
                                                ),
                                                e.createElement(
                                                    "div",
                                                    { className: "row" },
                                                    e.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "col-md-3 col-6",
                                                        },
                                                        e.createElement(
                                                            "div",
                                                            null,
                                                            "Qty : ",
                                                            e.createElement(
                                                                "strong",
                                                                null,
                                                                a.qty
                                                            )
                                                        ),
                                                        e.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "mt-3",
                                                            },
                                                            "Size : ",
                                                            e.createElement(
                                                                "strong",
                                                                null,
                                                                a.size
                                                            )
                                                        )
                                                    ),
                                                    e.createElement(
                                                        "div",
                                                        {
                                                            className:
                                                                "col-md-9 col-6",
                                                        },
                                                        e.createElement(
                                                            "div",
                                                            null,
                                                            "Color : ",
                                                            e.createElement(
                                                                "img",
                                                                {
                                                                    src: a.color_image,
                                                                    width: "20",
                                                                    className:
                                                                        "rounded-circle mb-1",
                                                                }
                                                            )
                                                        ),
                                                        e.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "mt-3",
                                                            },
                                                            "Color Name : ",
                                                            e.createElement(
                                                                "strong",
                                                                null,
                                                                a.color
                                                            )
                                                        )
                                                    )
                                                ),
                                                e.createElement("hr", null),
                                                e.createElement(
                                                    "h5",
                                                    null,
                                                    "Rp. ",
                                                    l(a.price)
                                                )
                                            )
                                        )
                                    ),
                                    e.createElement("hr", null)
                                )
                            )
                        )
                    )
                )
            )
        )
    );
}
export { E as default };
