import { u as c, R as e, H as s, L as n } from "./app.4f71476c.js";
import { L as r, h as m } from "./Account.6793dd1a.js";
import { f as o } from "./FormatPrice.72b07cf2.js";
import { S as d } from "./Search.16b75df2.js";
import { P as i } from "./Pagination.1adc415e.js";
function h() {
    const { transactions: a } = c().props;
    return e.createElement(
        e.Fragment,
        null,
        e.createElement(
            s,
            null,
            e.createElement("title", null, "Transactions - Egxa Store")
        ),
        e.createElement(
            r,
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
                            { class: "col-md-9 col-12 mb-2" },
                            e.createElement(d, { URL: "/account/transactions" })
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
                                    className: "fa fa-shopping-cart",
                                }),
                                " Transactions"
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
                                                "Full Name"
                                            ),
                                            e.createElement(
                                                "th",
                                                {
                                                    scope: "col",
                                                    style: { width: "15%" },
                                                },
                                                "Grand Total"
                                            ),
                                            e.createElement(
                                                "th",
                                                {
                                                    scope: "col",
                                                    style: { width: "15%" },
                                                },
                                                "Status"
                                            ),
                                            e.createElement(
                                                "th",
                                                {
                                                    scope: "col",
                                                    style: { width: "20%" },
                                                },
                                                "Created At"
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
                                        a.data.map((t, l) =>
                                            e.createElement(
                                                "tr",
                                                { key: l },
                                                e.createElement(
                                                    "td",
                                                    {
                                                        className:
                                                            "text-center",
                                                    },
                                                    ++l +
                                                        (a.current_page - 1) *
                                                            a.per_page
                                                ),
                                                e.createElement(
                                                    "td",
                                                    null,
                                                    t.user.name
                                                ),
                                                e.createElement(
                                                    "td",
                                                    null,
                                                    "Rp. ",
                                                    o(t.grand_total)
                                                ),
                                                e.createElement(
                                                    "td",
                                                    {
                                                        className:
                                                            "text-center",
                                                    },
                                                    t.status == "UNPAID" &&
                                                        e.createElement(
                                                            "button",
                                                            {
                                                                className:
                                                                    "btn btn-sm btn-warning",
                                                            },
                                                            e.createElement(
                                                                "i",
                                                                {
                                                                    className:
                                                                        "fa fa-circle-notch fa-spin",
                                                                }
                                                            ),
                                                            " UNPAID"
                                                        ),
                                                    t.status == "PAID" &&
                                                        e.createElement(
                                                            "button",
                                                            {
                                                                className:
                                                                    "btn btn-sm btn-success",
                                                            },
                                                            e.createElement(
                                                                "i",
                                                                {
                                                                    className:
                                                                        "fa fa-check-circle",
                                                                }
                                                            ),
                                                            " PAID"
                                                        ),
                                                    t.status == "CANCELLED" &&
                                                        e.createElement(
                                                            "button",
                                                            {
                                                                className:
                                                                    "btn btn-sm btn-danger",
                                                            },
                                                            e.createElement(
                                                                "i",
                                                                {
                                                                    className:
                                                                        "fa fa-times",
                                                                }
                                                            ),
                                                            " CANCELLED"
                                                        )
                                                ),
                                                e.createElement(
                                                    "td",
                                                    null,
                                                    t.created_at
                                                ),
                                                e.createElement(
                                                    "td",
                                                    {
                                                        className:
                                                            "text-center",
                                                    },
                                                    m(["transactions.show"]) &&
                                                        e.createElement(
                                                            n,
                                                            {
                                                                href: `/account/transactions/${t.invoice}`,
                                                                className:
                                                                    "btn btn-dark btn-sm me-2",
                                                            },
                                                            e.createElement(
                                                                "i",
                                                                {
                                                                    className:
                                                                        "fa fa-list-ul",
                                                                }
                                                            )
                                                        )
                                                )
                                            )
                                        )
                                    )
                                )
                            ),
                            e.createElement(i, { links: a.links, align: "end" })
                        )
                    )
                )
            )
        )
    );
}
export { h as default };
