import { u as z, r as s, R as e, H as C, d as P } from "./app.4f71476c.js";
import { L as D } from "./Account.6793dd1a.js";
import { R as x } from "./quill.snow.96e2fb5a.js";
import { S as _ } from "./sweetalert2.all.02b04556.js";
function I() {
    const { errors: l, categories: b, product: c } = z().props,
        [o, N] = s.exports.useState(c.title),
        [i, f] = s.exports.useState(c.category_id),
        [d, v] = s.exports.useState(c.description),
        [u, g] = s.exports.useState(c.weight),
        [E, h] = s.exports.useState(c.discount),
        [m, n] = s.exports.useState(c.product_sizes),
        w = () => {
            n([...m, { size: "", price: 0 }]);
        },
        y = (t) => {
            let a = [...m];
            a.splice(t, 1), n(a);
        },
        p = (t, a) => {
            let r = [...m];
            (r[t][a.target.name] = a.target.value), n(r);
        },
        S = async (t) => {
            t.preventDefault(),
                P.Inertia.put(
                    `/account/products/${c.id}`,
                    {
                        title: o,
                        category_id: i,
                        description: d,
                        weight: u,
                        discount: E,
                        product_sizes: m,
                    },
                    {
                        onSuccess: () => {
                            _.fire({
                                title: "Success!",
                                text: "Data updated successfully!",
                                icon: "success",
                                showConfirmButton: !1,
                                timer: 1500,
                            });
                        },
                    }
                );
        };
    return e.createElement(
        e.Fragment,
        null,
        e.createElement(
            C,
            null,
            e.createElement("title", null, "Edit Product - Egxa Store")
        ),
        e.createElement(
            D,
            null,
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
                                    className: "fa fa-shopping-bag",
                                }),
                                " Edit Product"
                            )
                        ),
                        e.createElement(
                            "div",
                            { className: "card-body" },
                            e.createElement(
                                "form",
                                { onSubmit: S },
                                e.createElement(
                                    "div",
                                    { className: "mb-3" },
                                    e.createElement(
                                        "label",
                                        { className: "form-label fw-bold" },
                                        "Title"
                                    ),
                                    e.createElement("input", {
                                        type: "text",
                                        className: "form-control",
                                        value: o,
                                        onChange: (t) => N(t.target.value),
                                        placeholder: "Enter Title Product",
                                    })
                                ),
                                l.title &&
                                    e.createElement(
                                        "div",
                                        { className: "alert alert-danger" },
                                        l.title
                                    ),
                                e.createElement(
                                    "div",
                                    { className: "mb-3" },
                                    e.createElement(
                                        "label",
                                        { className: "form-label fw-bold" },
                                        "Category"
                                    ),
                                    e.createElement(
                                        "select",
                                        {
                                            className: "form-select",
                                            value: i,
                                            onChange: (t) => f(t.target.value),
                                        },
                                        e.createElement(
                                            "option",
                                            { value: "" },
                                            "-- Select Category --"
                                        ),
                                        b.map((t) =>
                                            e.createElement(
                                                "option",
                                                { value: t.id, key: t.id },
                                                t.name
                                            )
                                        )
                                    )
                                ),
                                l.category_id &&
                                    e.createElement(
                                        "div",
                                        { className: "alert alert-danger" },
                                        l.category_id
                                    ),
                                e.createElement(
                                    "div",
                                    { className: "mb-3" },
                                    e.createElement(
                                        "label",
                                        { className: "form-label fw-bold" },
                                        "Description"
                                    ),
                                    e.createElement(x, {
                                        theme: "snow",
                                        rows: "5",
                                        value: d,
                                        onChange: (t) => v(t),
                                    })
                                ),
                                l.description &&
                                    e.createElement(
                                        "div",
                                        { className: "alert alert-danger" },
                                        l.description
                                    ),
                                e.createElement(
                                    "div",
                                    { className: "row" },
                                    e.createElement(
                                        "div",
                                        { className: "col-md-6" },
                                        e.createElement(
                                            "div",
                                            { className: "mb-3" },
                                            e.createElement(
                                                "label",
                                                {
                                                    className:
                                                        "form-label fw-bold",
                                                },
                                                "Weight (Gram)"
                                            ),
                                            e.createElement("input", {
                                                type: "number",
                                                className: "form-control",
                                                value: u,
                                                onChange: (t) =>
                                                    g(t.target.value),
                                                placeholder:
                                                    "Enter Weight (Gram)",
                                            })
                                        ),
                                        l.phone &&
                                            e.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "alert alert-danger",
                                                },
                                                l.weight
                                            )
                                    ),
                                    e.createElement(
                                        "div",
                                        { className: "col-md-6" },
                                        e.createElement(
                                            "div",
                                            { className: "mb-3" },
                                            e.createElement(
                                                "label",
                                                {
                                                    className:
                                                        "form-label fw-bold",
                                                },
                                                "Discount"
                                            ),
                                            e.createElement("input", {
                                                type: "number",
                                                className: "form-control",
                                                value: E,
                                                onChange: (t) =>
                                                    h(t.target.value),
                                                placeholder: "Enter Discount",
                                            })
                                        ),
                                        l.discount &&
                                            e.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "alert alert-danger",
                                                },
                                                l.discount
                                            )
                                    )
                                ),
                                e.createElement("hr", null),
                                e.createElement(
                                    "div",
                                    { className: "row mt-3 mb-5" },
                                    e.createElement(
                                        "div",
                                        { className: "col-md-12" },
                                        e.createElement(
                                            "div",
                                            {
                                                className:
                                                    "alert alert-warning",
                                            },
                                            e.createElement("i", {
                                                className: "fa fa-info-circle",
                                            }),
                                            "  add size and price for you product."
                                        )
                                    ),
                                    m.map((t, a) =>
                                        e.createElement(
                                            "div",
                                            { className: "row", key: a },
                                            e.createElement(
                                                "div",
                                                { className: "col-md-5" },
                                                e.createElement(
                                                    "div",
                                                    { className: "mb-3" },
                                                    e.createElement(
                                                        "label",
                                                        {
                                                            className:
                                                                "form-label fw-bold",
                                                        },
                                                        "Size"
                                                    ),
                                                    e.createElement("input", {
                                                        type: "text",
                                                        name: "size",
                                                        value: t.size || "",
                                                        onChange: (r) =>
                                                            p(a, r),
                                                        className:
                                                            "form-control",
                                                        placeholder:
                                                            "Enter Size",
                                                    })
                                                )
                                            ),
                                            e.createElement(
                                                "div",
                                                { className: "col-md-5" },
                                                e.createElement(
                                                    "div",
                                                    { className: "mb-3" },
                                                    e.createElement(
                                                        "label",
                                                        {
                                                            className:
                                                                "form-label fw-bold",
                                                        },
                                                        "Price"
                                                    ),
                                                    e.createElement("input", {
                                                        type: "number",
                                                        name: "price",
                                                        value: t.price || "",
                                                        onChange: (r) =>
                                                            p(a, r),
                                                        className:
                                                            "form-control",
                                                        placeholder:
                                                            "Enter Price",
                                                    })
                                                )
                                            ),
                                            a
                                                ? e.createElement(
                                                      "div",
                                                      { className: "col-md-2" },
                                                      e.createElement(
                                                          "div",
                                                          { className: "mb-3" },
                                                          e.createElement(
                                                              "label",
                                                              {
                                                                  className:
                                                                      "form-label fw-bold text-white",
                                                              },
                                                              "."
                                                          ),
                                                          e.createElement(
                                                              "button",
                                                              {
                                                                  type: "button",
                                                                  className:
                                                                      "btn btn-danger btn-md border-0 shadow-sm w-100",
                                                                  onClick: () =>
                                                                      y(a),
                                                              },
                                                              e.createElement(
                                                                  "i",
                                                                  {
                                                                      className:
                                                                          "fa fa-trash",
                                                                  }
                                                              )
                                                          )
                                                      )
                                                  )
                                                : null
                                        )
                                    ),
                                    e.createElement(
                                        "div",
                                        { className: "col-md-12" },
                                        e.createElement(
                                            "button",
                                            {
                                                type: "button",
                                                className:
                                                    "btn btn-primary btn-md border-0 shadow-sm",
                                                onClick: () => w(),
                                            },
                                            e.createElement("i", {
                                                className: "fa fa-plus-circle",
                                            })
                                        )
                                    )
                                ),
                                e.createElement(
                                    "div",
                                    null,
                                    e.createElement(
                                        "button",
                                        {
                                            type: "submit",
                                            className:
                                                "btn btn-md btn-success me-2",
                                        },
                                        e.createElement("i", {
                                            className: "fa fa-save",
                                        }),
                                        " Update"
                                    ),
                                    e.createElement(
                                        "button",
                                        {
                                            type: "reset",
                                            className: "btn btn-md btn-warning",
                                        },
                                        e.createElement("i", {
                                            className: "fa fa-redo",
                                        }),
                                        " Reset"
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
export { I as default };