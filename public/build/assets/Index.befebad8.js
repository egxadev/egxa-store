import { u as r, R as e, H as c } from "./app.4f71476c.js";
import { L as s } from "./Account.6793dd1a.js";
import { D as m } from "./Delete.9abbaacc.js";
import n from "./Create.42bd9a99.js";
import "./sweetalert2.all.02b04556.js";
function u() {
    const { sliders: t } = r().props;
    return e.createElement(
        e.Fragment,
        null,
        e.createElement(
            c,
            null,
            e.createElement("title", null, "Sliders - Egxa Store")
        ),
        e.createElement(
            s,
            null,
            e.createElement(n, null),
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
                                    className: "fa fa-images",
                                }),
                                " Image Sliders"
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
                                                "Link"
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
                                        t.data.map((a, l) =>
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
                                                        (t.current_page - 1) *
                                                            t.per_page
                                                ),
                                                e.createElement(
                                                    "td",
                                                    {
                                                        className:
                                                            "text-center",
                                                    },
                                                    e.createElement("img", {
                                                        src: a.image,
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
                                                    a.link
                                                ),
                                                e.createElement(
                                                    "td",
                                                    {
                                                        className:
                                                            "text-center",
                                                    },
                                                    e.createElement(m, {
                                                        URL: "/account/sliders",
                                                        id: a.id,
                                                    })
                                                )
                                            )
                                        )
                                    )
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