import { jsxs as h, jsx as s } from "react/jsx-runtime";
import y from "react";
import { styled as M } from "@mui/material/styles";
import k from "@mui/material/IconButton";
import x from "@mui/material/InputAdornment";
import Y from "@mui/material/TextField";
import U from "@mui/material/Typography";
const G = [
  "B",
  "kB",
  "MB",
  "GB",
  "TB",
  "PB",
  "EB",
  "ZB",
  "YB"
], R = [
  "B",
  "KiB",
  "MiB",
  "GiB",
  "TiB",
  "PiB",
  "EiB",
  "ZiB",
  "YiB"
], Z = [
  "b",
  "kbit",
  "Mbit",
  "Gbit",
  "Tbit",
  "Pbit",
  "Ebit",
  "Zbit",
  "Ybit"
], _ = [
  "b",
  "kibit",
  "Mibit",
  "Gibit",
  "Tibit",
  "Pibit",
  "Eibit",
  "Zibit",
  "Yibit"
], b = (e, t, i) => {
  let n = e;
  return typeof t == "string" || Array.isArray(t) ? n = e.toLocaleString(t, i) : (t === !0 || i !== void 0) && (n = e.toLocaleString(void 0, i)), n;
};
function F(e, t) {
  if (!Number.isFinite(e))
    throw new TypeError(`Expected a finite number, got ${typeof e}: ${e}`);
  t = {
    bits: !1,
    binary: !1,
    space: !0,
    ...t
  };
  const i = t.bits ? t.binary ? _ : Z : t.binary ? R : G, n = t.space ? " " : "";
  if (t.signed && e === 0)
    return ` 0${n}${i[0]}`;
  const l = e < 0, u = l ? "-" : t.signed ? "+" : "";
  l && (e = -e);
  let r;
  if (t.minimumFractionDigits !== void 0 && (r = { minimumFractionDigits: t.minimumFractionDigits }), t.maximumFractionDigits !== void 0 && (r = { maximumFractionDigits: t.maximumFractionDigits, ...r }), e < 1) {
    const f = b(e, t.locale, r);
    return u + f + n + i[0];
  }
  const p = Math.min(Math.floor(t.binary ? Math.log(e) / Math.log(1024) : Math.log10(e) / 3), i.length - 1);
  e /= (t.binary ? 1024 : 1e3) ** p, r || (e = e.toPrecision(3));
  const g = b(Number(e), t.locale, r), a = i[p];
  return u + g + n + a;
}
const j = M("label")`
  position: relative;
  flex-grow: 1;

  input {
    opacity: 0 !important;
  }

  & > span {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 2;
    display: flex;
    align-items: center;
  }

  span.MuiFileInput-placeholder {
    color: gray;
  }
`, O = M("div")`
  display: flex;
  width: 100%;

  & > span {
    display: block;
  }

  & > span:first-of-type {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  & > span:last-of-type {
    flex-shrink: 0;
    display: block;
  }
`, A = {
  Label: j,
  Filename: O
}, W = ({ text: e, isPlaceholder: t, placeholder: i, ...n }, l) => /* @__PURE__ */ h(A.Label, { children: [
  /* @__PURE__ */ s("input", { ...n, ref: l }),
  e ? /* @__PURE__ */ s(
    "span",
    {
      "aria-placeholder": i,
      className: t ? "MuiFileInput-placeholder" : "",
      children: typeof e == "string" ? e : /* @__PURE__ */ h(A.Filename, { children: [
        /* @__PURE__ */ s("span", { children: e.filename }),
        /* @__PURE__ */ h("span", { children: [
          ".",
          e.extension
        ] })
      ] })
    }
  ) : null
] }), H = y.forwardRef(W);
function K(e) {
  return e.length > 0;
}
function V(e) {
  return e.reduce((t, i) => t + i.size, 0);
}
function I(e) {
  return typeof window < "u" && e instanceof File;
}
function q(e) {
  return Array.from(e);
}
function J(e) {
  const i = (I(e) ? e.name : e[0]?.name || "").split("."), n = i.pop();
  return {
    filename: i.join("."),
    extension: n
  };
}
const Q = typeof window < "u" ? y.useLayoutEffect : y.useEffect, ot = (e) => {
  const {
    value: t,
    onChange: i,
    disabled: n,
    getInputText: l,
    getSizeText: u,
    placeholder: r,
    hideSizeText: p,
    ref: g,
    slotProps: a,
    multiple: f,
    className: N,
    clearIconButtonProps: S = {},
    ...E
  } = e, { className: w = "", ...v } = S, d = y.useRef(null), { startAdornment: C } = a?.input || {}, P = f || //@ts-expect-error
  a?.htmlInput?.multiple || !1, B = () => {
    d.current && (d.current.value = "");
  }, z = (o) => {
    const T = o.target.files, m = T ? q(T) : [];
    f ? (i?.(m), m.length === 0 && B()) : (i?.(m[0] || null), m[0] || B());
  }, L = (o) => {
    o.preventDefault(), !n && i?.(f ? [] : null);
  }, c = Array.isArray(t) ? K(t) : I(t);
  Q(() => {
    const o = d.current;
    o && !c && (o.value = "");
  }, [c]);
  const D = () => t === null || Array.isArray(t) && t.length === 0 ? r || "" : typeof l == "function" && t !== void 0 ? l(t) : t && c ? Array.isArray(t) && t.length > 1 ? `${t.length} files` : J(t) : "", $ = () => {
    if (typeof u == "function" && t !== void 0)
      return u(t);
    if (c) {
      if (Array.isArray(t)) {
        const o = V(t);
        return F(o);
      }
      if (I(t))
        return F(t.size);
    }
    return "";
  };
  return /* @__PURE__ */ s(
    Y,
    {
      ref: g,
      type: "file",
      disabled: n,
      onChange: z,
      className: `MuiFileInput-TextField ${N || ""}`,
      slotProps: {
        htmlInput: {
          text: D(),
          multiple: P,
          ref: d,
          isPlaceholder: !c,
          placeholder: r,
          ...a?.htmlInput
        },
        input: {
          startAdornment: /* @__PURE__ */ s(x, { position: "start", children: C }),
          endAdornment: /* @__PURE__ */ h(
            x,
            {
              position: "end",
              style: { visibility: c ? "visible" : "hidden" },
              children: [
                p ? null : /* @__PURE__ */ s(
                  U,
                  {
                    variant: "caption",
                    mr: "2px",
                    lineHeight: 1,
                    className: "MuiFileInput-Typography-size-text",
                    children: $()
                  }
                ),
                /* @__PURE__ */ s(
                  k,
                  {
                    "aria-label": "Clear",
                    title: "Clear",
                    size: "small",
                    disabled: n,
                    className: `${w} MuiFileInput-ClearIconButton`,
                    onClick: L,
                    ...v
                  }
                )
              ]
            }
          ),
          //@ts-expect-error
          inputComponent: H,
          ...a?.input
        }
      },
      ...E
    }
  );
};
export {
  ot as MuiFileInput
};
