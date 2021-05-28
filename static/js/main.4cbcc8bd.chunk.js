(this["webpackJsonpreact-blog-app"]=this["webpackJsonpreact-blog-app"]||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),o=n(16),s=n.n(o),a=(n(22),n(7)),i=n(2),l=(n(23),n(0));var j=function(){return Object(l.jsxs)("nav",{className:"navbar",children:[Object(l.jsx)("h1",{children:"Vikas Blogs"}),Object(l.jsxs)("div",{className:"links",children:[Object(l.jsx)(a.b,{to:"/",className:"homebutton",children:"Home"}),Object(l.jsx)(a.b,{to:"/newblog",className:"newblogbutton",children:"Add New Blog"})]})]})},b=function(e){var t=e.data;return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:" All Blogs.!"}),t.map((function(e){return Object(l.jsx)("div",{className:"blog-preview",children:Object(l.jsxs)(a.b,{to:"/blogs/".concat(e.id),children:[Object(l.jsx)("h2",{children:e.title}),Object(l.jsxs)("p",{children:["Written by ",e.author]})]})},e.id)}))]})},d=(n(30),n(8)),h=function(e){var t=Object(c.useState)(null),n=Object(d.a)(t,2),r=n[0],o=n[1],s=Object(c.useState)(!0),a=Object(d.a)(s,2),i=a[0],l=a[1],j=Object(c.useState)(null),b=Object(d.a)(j,2),h=b[0],u=b[1];return Object(c.useEffect)((function(){var t=new AbortController;return setTimeout((function(){fetch(e,{signal:t.signal}).then((function(e){if(!e.ok)throw Error("could not fetch the data for that resources");return e.json()})).then((function(e){o(e),l(!1),u(null)})).catch((function(e){"AbortError"===e.name?console.log("fetch Abourted"):(u(e.message),l(!1))}))}),1e3),function(){return t.abort()}}),[e]),{data:r,isPending:i,error:h}},u=function(){var e=h("http://localhost:8000/blogs"),t=e.data,n=e.isPending,c=e.error;return Object(l.jsxs)("div",{className:"home",children:[c&&Object(l.jsx)("p",{children:c}),n&&Object(l.jsx)("p",{children:" Loading...."}),t&&Object(l.jsx)(b,{data:t})]})};n(31);var O=function(){var e=Object(c.useState)(""),t=Object(d.a)(e,2),n=t[0],r=t[1],o=Object(c.useState)(""),s=Object(d.a)(o,2),a=s[0],j=s[1],b=Object(c.useState)(""),h=Object(d.a)(b,2),u=h[0],O=h[1],x=Object(i.f)();return Object(l.jsxs)("div",{className:"create",children:[Object(l.jsx)("h2",{children:"Add a New Blog..!"}),Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={title:n,body:a,author:u};fetch("http://localhost:8000/blogs",{method:"POST",headers:{"Content-Type":" application/json"},body:JSON.stringify(t)}).then((function(){console.log("new Blog added"),x.push("/")}))},children:[Object(l.jsx)("label",{children:" Blog Title:"}),Object(l.jsx)("input",{type:"text",required:!0,value:n,onChange:function(e){return r(e.target.value)}}),Object(l.jsx)("label",{children:" Blog Body:"}),Object(l.jsx)("textarea",{type:"text",required:!0,value:a,onChange:function(e){return j(e.target.value)}}),Object(l.jsx)("label",{children:" Blog Author"}),Object(l.jsx)("input",{type:"text",required:!0,value:u,onChange:function(e){return O(e.target.value)}}),Object(l.jsx)("button",{onClick:function(){return alert("adding new  blog to the database")},children:" Add Blog"})]})]})},x=(n(32),function(){var e=Object(i.g)().id,t=h("http://localhost:8000/blogs/"+e),n=t.data,c=t.isPending,r=t.error,o=Object(i.f)();return Object(l.jsxs)("div",{className:"blog-details",children:[c&&Object(l.jsx)("div",{children:" Loading...."}),r&&Object(l.jsx)("div",{children:r}),n&&Object(l.jsxs)("article",{children:[Object(l.jsx)("h2",{children:n.title}),Object(l.jsxs)("p",{children:[" written by..",n.author]}),Object(l.jsx)("div",{children:n.body}),Object(l.jsx)("button",{onClick:function(){fetch("http://localhost:8000/blogs/"+n.id,{method:"DELETE"}).then((function(){o.push("/")}))},children:" Delete Blog"})]})]})});n(33);var f=function(){var e=Object(i.f)();return Object(l.jsxs)("div",{className:"not-found",children:[Object(l.jsx)("h2",{children:"Oops.! Sorry"}),Object(l.jsx)("br",{}),Object(l.jsx)("p",{children:" That Page can not be found."}),Object(l.jsx)("br",{}),Object(l.jsx)("button",{onClick:function(){e.push("/")},children:" Back to Home "})]})},g=function(){return Object(l.jsxs)(a.a,{children:[Object(l.jsx)(j,{}),Object(l.jsx)("div",{style:{maxWidth:"1200px",margin:"40px auto",padding:"20px"},children:Object(l.jsxs)(i.c,{children:[Object(l.jsx)(i.a,{exact:!0,path:"/",children:Object(l.jsx)(u,{})}),Object(l.jsx)(i.a,{path:"/newblog",children:Object(l.jsx)(O,{})}),Object(l.jsx)(i.a,{path:"/blogs/:id",children:Object(l.jsx)(x,{})}),Object(l.jsx)(i.a,{path:"*",children:Object(l.jsx)(f,{})})]})})]})};s.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(g,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.4cbcc8bd.chunk.js.map