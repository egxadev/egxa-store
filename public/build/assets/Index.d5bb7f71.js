import { u as c, R as e, H as s, L as n } from "./app.4f71476c.js";
import { L as d } from "./Web.923f9eb5.js";
import { D as o } from "./Delete.9abbaacc.js";
import { f as l } from "./FormatPrice.72b07cf2.js";
import "./sweetalert2.all.02b04556.js";
function g() {
    const { dataCarts: m, carts: a } = c().props;
    return e.createElement(
        e.Fragment,
        null,
        e.createElement(
            s,
            null,
            e.createElement(
                "title",
                null,
                "Carts - Egxa Store - Where Developer Shopping"
            )
        ),
        e.createElement(
            d,
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
                            a.length > 0
                                ? e.createElement(
                                      "div",
                                      { className: "row mb-2" },
                                      e.createElement(
                                          "div",
                                          { className: "col-md-12" },
                                          e.createElement(
                                              "div",
                                              {
                                                  className:
                                                      "card border-0 shadow-sm rounded-3 mb-3",
                                              },
                                              e.createElement(
                                                  "div",
                                                  { className: "card-body" },
                                                  a.map((t, r) =>
                                                      e.createElement(
                                                          "div",
                                                          { key: r },
                                                          e.createElement(
                                                              "div",
                                                              {
                                                                  className:
                                                                      "row g-0",
                                                              },
                                                              e.createElement(
                                                                  "div",
                                                                  {
                                                                      className:
                                                                          "col-md-4 col-4",
                                                                  },
                                                                  e.createElement(
                                                                      "img",
                                                                      {
                                                                          src: t.product_image,
                                                                          className:
                                                                              "img-fluid rounded-3",
                                                                      }
                                                                  )
                                                              ),
                                                              e.createElement(
                                                                  "div",
                                                                  {
                                                                      className:
                                                                          "col-md-8 col-8",
                                                                  },
                                                                  e.createElement(
                                                                      "div",
                                                                      {
                                                                          className:
                                                                              "card-body",
                                                                      },
                                                                      e.createElement(
                                                                          "h4",
                                                                          {
                                                                              className:
                                                                                  "card-title",
                                                                          },
                                                                          t
                                                                              .product
                                                                              .title
                                                                      ),
                                                                      e.createElement(
                                                                          "div",
                                                                          {
                                                                              className:
                                                                                  "row",
                                                                          },
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
                                                                                      t.qty
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
                                                                                      t.size
                                                                                  )
                                                                              )
                                                                          ),
                                                                          e.createElement(
                                                                              "div",
                                                                              {
                                                                                  className:
                                                                                      "col-md-6 col-6",
                                                                              },
                                                                              e.createElement(
                                                                                  "div",
                                                                                  null,
                                                                                  "Color : ",
                                                                                  e.createElement(
                                                                                      "img",
                                                                                      {
                                                                                          src: t.color_image,
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
                                                                                      t.color
                                                                                  )
                                                                              )
                                                                          ),
                                                                          e.createElement(
                                                                              "div",
                                                                              {
                                                                                  className:
                                                                                      "col-md-3 col-12 text-end",
                                                                              },
                                                                              e.createElement(
                                                                                  o,
                                                                                  {
                                                                                      URL: "/carts",
                                                                                      id: t.id,
                                                                                  }
                                                                              )
                                                                          )
                                                                      ),
                                                                      e.createElement(
                                                                          "hr",
                                                                          null
                                                                      ),
                                                                      e.createElement(
                                                                          "h5",
                                                                          null,
                                                                          "Rp. ",
                                                                          l(
                                                                              t.price
                                                                          )
                                                                      )
                                                                  )
                                                              )
                                                          ),
                                                          e.createElement(
                                                              "hr",
                                                              null
                                                          )
                                                      )
                                                  )
                                              )
                                          )
                                      )
                                  )
                                : e.createElement(
                                      "div",
                                      {
                                          className:
                                              "card border-0 rounded-3 shadow-sm mt-4 mb-4",
                                      },
                                      e.createElement(
                                          "div",
                                          { className: "card-body" },
                                          e.createElement(
                                              "div",
                                              {
                                                  className:
                                                      "col-sm-12 empty-cart-cls text-center",
                                              },
                                              e.createElement("img", {
                                                  src: "/assets/images/shopping-cart.png",
                                                  width: "150",
                                                  height: "150",
                                                  className:
                                                      "img-fluid mb-4 mr-3",
                                              }),
                                              e.createElement(
                                                  "h6",
                                                  null,
                                                  e.createElement(
                                                      "strong",
                                                      null,
                                                      "Shopping Carts is Empty \u{1F601}"
                                                  )
                                              )
                                          )
                                      )
                                  ),
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
                                                "card border-0 rounded-3 shadow-sm",
                                        },
                                        e.createElement(
                                            "div",
                                            { className: "card-body" },
                                            e.createElement(
                                                "h6",
                                                { className: "mb-0" },
                                                "Total Orders : ",
                                                e.createElement(
                                                    "strong",
                                                    null,
                                                    "Rp. ",
                                                    l(m.price)
                                                )
                                            )
                                        )
                                    )
                                ),
                                e.createElement(
                                    "div",
                                    { className: "col-md-12 mt-4" },
                                    a.length > 0
                                        ? e.createElement(
                                              n,
                                              {
                                                  href: "/checkouts",
                                                  className:
                                                      "btn btn-success btn-md border-0 shadow rounded-3 w-100",
                                              },
                                              "Next Payment ",
                                              e.createElement("i", {
                                                  className:
                                                      "fa fa-long-arrow-alt-right",
                                              })
                                          )
                                        : e.createElement(
                                              "button",
                                              {
                                                  className:
                                                      "btn btn-success btn-md border-0 shadow rounded-3 w-100",
                                                  disabled: !0,
                                              },
                                              "Next Payment ",
                                              e.createElement("i", {
                                                  className:
                                                      "fa fa-long-arrow-alt-right",
                                              })
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
export { g as default };
