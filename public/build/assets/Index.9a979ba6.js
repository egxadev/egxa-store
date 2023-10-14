import { u as r, R as e, H as s } from "./app.4f71476c.js";
import { L as c } from "./Account.6793dd1a.js";
import { S as m } from "./Search.16b75df2.js";
import { P as n } from "./Pagination.1adc415e.js";
function p() {
    const { permissions: t } = r().props;
    return e.createElement(
        e.Fragment,
        null,
        e.createElement(
            s,
            null,
            e.createElement("title", null, "Permissions - Egxa Store")
        ),
        e.createElement(
            c,
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
                            e.createElement(m, { URL: "/account/permissions" })
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
                                    className: "fa fa-key",
                                }),
                                " Permissions"
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
                                                { scope: "col" },
                                                "Permission Name"
                                            )
                                        )
                                    ),
                                    e.createElement(
                                        "tbody",
                                        null,
                                        t.data.map((l, a) =>
                                            e.createElement(
                                                "tr",
                                                { key: a },
                                                e.createElement(
                                                    "td",
                                                    {
                                                        className:
                                                            "text-center",
                                                    },
                                                    ++a +
                                                        (t.current_page - 1) *
                                                            t.per_page
                                                ),
                                                e.createElement(
                                                    "td",
                                                    null,
                                                    l.name
                                                )
                                            )
                                        )
                                    )
                                )
                            ),
                            e.createElement(n, { links: t.links, align: "end" })
                        )
                    )
                )
            )
        )
    );
}
export { p as default };
