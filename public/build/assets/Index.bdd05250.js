import { u as n, R as e, H as o, L as s } from "./app.4f71476c.js";
import { L as d, h as c } from "./Account.6793dd1a.js";
import { S as i } from "./Search.16b75df2.js";
import { P as E } from "./Pagination.1adc415e.js";
import { D as b } from "./Delete.9abbaacc.js";
import "./sweetalert2.all.02b04556.js";
function w() {
    const { roles: t } = n().props;
    return e.createElement(
        e.Fragment,
        null,
        e.createElement(
            o,
            null,
            e.createElement("title", null, "Roles - Egxa Store")
        ),
        e.createElement(
            d,
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
                                s,
                                {
                                    href: "/account/roles/create",
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
                            e.createElement(i, { URL: "/account/roles" })
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
                                    className: "fa fa-shield-alt",
                                }),
                                " Roles"
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
                                                    style: { width: "15%" },
                                                },
                                                "Role Name"
                                            ),
                                            e.createElement(
                                                "th",
                                                {
                                                    scope: "col",
                                                    style: { width: "50%" },
                                                },
                                                "Permissions"
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
                                                    null,
                                                    a.name
                                                ),
                                                e.createElement(
                                                    "td",
                                                    null,
                                                    a.permissions.map((r, m) =>
                                                        e.createElement(
                                                            "span",
                                                            {
                                                                className:
                                                                    "btn btn-success btn-sm shadow-sm border-0 ms-2 mb-2",
                                                                key: m,
                                                            },
                                                            r.name
                                                        )
                                                    )
                                                ),
                                                e.createElement(
                                                    "td",
                                                    {
                                                        className:
                                                            "text-center",
                                                    },
                                                    c(["roles.edit"]) &&
                                                        e.createElement(
                                                            s,
                                                            {
                                                                href: `/account/roles/${a.id}/edit`,
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
                                                    c(["roles.delete"]) &&
                                                        e.createElement(b, {
                                                            URL: "/account/roles",
                                                            id: a.id,
                                                        })
                                                )
                                            )
                                        )
                                    )
                                )
                            ),
                            e.createElement(E, { links: t.links, align: "end" })
                        )
                    )
                )
            )
        )
    );
}
export { w as default };
