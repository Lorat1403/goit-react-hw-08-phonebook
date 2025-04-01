"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[263],{1263:(e,t,n)=>{n.r(t),n.d(t,{default:()=>oe});var r=n(537),a=n(6885),o=n(3892),s=n(6712),i=n(64),d=n.n(i),l=n(1036),c=n(2119);const m=c.Ay.form`
  width: 400px;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
`,h=c.Ay.label`
  font-size: 25px;
  margin-top: 10px;
  margin-bottom: 20px;
`,p=c.Ay.input`
  width: 100%;
  height: 35px;
  padding: 10px;
  outline: none;
  border: none;
  border-radius: 10px;
  background-color: pink;

  :focus {
    border: 1px solid blue;
  }
`;c.Ay.button`
  font-weight: 700;
  margin-top: 20px;
  margin-right: auto;
  margin-left: auto;

  height: 35px;
  width: 200px;

  border-radius: 8px;
  ${""}
  border: none;
  transition: all 250ms linear;

  :hover,
  :focus {
    background-color: violet;
    transform: scale(1.1);
  }
`;var u=n(9281),x=n(6267),g=n(3033);const b="^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",f="This field is required",j=(0,g.Ik)().shape({name:(0,g.Yj)().required(f).matches(b,"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"),number:(0,g.Yj)().required(f).matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +")});var y=n(1434),w=n(579);const v=()=>(0,w.jsx)(y.Rzo,{size:25,fill:"white"}),A=e=>{let{name:t}=e;return(0,w.jsx)(o.Kw,{name:t,render:e=>s.Notify.failure(e)})},$=()=>{const[e,{isLoading:t}]=(0,x.ev)(),{data:n}=(0,x.TE)();return(0,w.jsx)(o.l1,{initialValues:{name:"",number:""},validationSchema:j,children:(0,w.jsxs)(m,{onSubmit:async t=>{try{t.preventDefault();const r=t.target.name.value,a=t.target.number.value,o=n.find((e=>e.name===r)),s=n.find((e=>e.number===a)),i={name:r,number:a};if(o)return void d().fire({title:"Error!",text:`Sorry, ${r} is already in your contacts`,icon:"error",confirmButtonText:"Got it"});if(s)return void d().fire({title:"Error!",text:`Sorry, ${a} is already in your contacts`,icon:"error",confirmButtonText:"Got it"});await e(i),l.oR.success("Contact added successfully!"),t.target.reset()}catch(r){console.log(r),l.oR.error("Something went wrong. Please, try again.")}},children:[(0,w.jsx)(h,{htmlFor:"name",children:"Name"}),(0,w.jsx)(p,{id:"name",type:"text",name:"name",pattern:b,placeholder:"Name",required:!0}),(0,w.jsx)(A,{name:"name"}),(0,w.jsx)(h,{htmlFor:"number",children:"Number"}),(0,w.jsx)(p,{id:"number",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",placeholder:"Number",required:!0}),(0,w.jsx)(A,{name:"number"}),(0,w.jsx)(u.M3,{type:"submit",children:t?(0,w.jsx)(r.A,{}):(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(v,{}),(0,w.jsx)("p",{children:"Add Contact"})]})})]})})};var C=n(5137);const z=c.Ay.ul`
  display: grid;
  grid-template-columns: repeat(1, minmax(280px, 1fr));
  grid-template-rows: auto;
  gap: ${e=>e.theme.space[4]}px;
  margin: ${e=>e.theme.space[0]}px;
  padding: ${e=>e.theme.space[4]}px;
`,k=c.Ay.li`
  display: flex;
  gap: ${e=>e.theme.space[3]}px;
  justify-content: space-between;
`,S=c.Ay.p`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: ${e=>e.theme.space[3]}px;
`,E=c.Ay.div`
  display: flex;
  gap: ${e=>e.theme.space[3]}px;
`;var N=n(1486);const q=e=>e.modal.showModal,F=e=>e.modal.name,L=e=>e.modal.number,T=e=>e.modal.id;var P=n(5043),R=n(7950);const M=c.Ay.div`
  position: ${e=>e.theme.position.fixed};
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${e=>e.theme.colors.modalBg};
  z-index: 1200;
`,Z=c.Ay.div`
  position: ${e=>e.theme.position.relative};
  background-color: ${e=>e.theme.colors.white};
  border-radius: ${e=>e.theme.radii.sm};
  width: 600px;
  height: 300px;
`,B=document.querySelector("#modal-root"),I=e=>{let{onClose:t,children:n}=e;(0,P.useEffect)((()=>{const e=e=>{"Escape"===e.code&&t()};return window.addEventListener("keydown",e),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",e),document.body.style.overflow="unset"}}),[t]);return(0,R.createPortal)((0,w.jsx)(M,{onClick:e=>{e.currentTarget===e.target&&t()},children:(0,w.jsx)(Z,{children:n})}),B)},_=c.Ay.form`
  padding: ${e=>e.theme.space[4]}px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: ${e=>e.theme.space[9]};
  margin-right: ${e=>e.theme.space[9]};
`,H=c.Ay.label`
  font-size: ${e=>e.theme.fontSizes.m};
  margin-top: ${e=>e.theme.space[3]}px;
  margin-bottom: ${e=>e.theme.space[4]}px;
`,J=c.Ay.input`
  width: 100%;
  height: ${e=>e.theme.space[5]}px;
  padding: ${e=>e.theme.space[3]}px;
  outline: orange;
  border: ${e=>e.theme.borders.normal};
  border-radius: ${e=>e.theme.space[3]}px;
  :focus {
    border: ${e=>e.theme.borders.bold};
  }
`,Y=e=>{let{onSubmit:t,isUpdaiting:n}=e;const a=(0,C.d4)(F),s=(0,C.d4)(L),i=(0,C.d4)(T);return(0,w.jsx)(o.l1,{initialValues:{name:a,number:s},validationSchema:j,onSubmit:async(e,n)=>{let{name:r,number:a}=e;await t({name:r,number:a,id:i})},children:e=>{let{values:t}=e;return(0,w.jsxs)(_,{children:[(0,w.jsx)(H,{htmlFor:"contactName",children:"Name"}),(0,w.jsx)(J,{id:"contactName",type:"text",name:"name",pattern:b,autoComplete:"off",placeholder:"Name",required:!0}),(0,w.jsx)(A,{name:"name"}),(0,w.jsx)(H,{htmlFor:"phone",children:"Number"}),(0,w.jsx)(J,{id:"phone",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",placeholder:"Number",autoComplete:"off",required:!0}),(0,w.jsx)(A,{name:"number"}),(0,w.jsx)(u.lg,{type:"submit",disabled:t.name===a&&t.number===s,children:n?(0,w.jsx)(r.A,{}):"Edit"})]})}})},G=e=>{let{handleShowModal:t}=e;const[n,{isLoading:r}]=(0,x.El)(),a=(0,C.wA)();return(0,w.jsx)(w.Fragment,{children:(0,w.jsxs)(I,{onClose:t,children:[(0,w.jsx)(u.Jn,{onClick:t,children:(0,w.jsx)(y.XfH,{size:20})}),(0,w.jsx)(Y,{onSubmit:async e=>{try{await n(e),a((0,N.h)()),l.oR.success("Contact edited successfully!")}catch(t){l.oR.error("Something went wrong. Please, try again.")}},isUpdaiting:r})]})})};var K=n(9952);const U=()=>(0,w.jsx)(K.K8,{size:20}),V=()=>(0,w.jsx)(K.lt,{size:20}),D=e=>{let{name:t,number:n,id:a}=e;const[o,{isLoading:s}]=(0,x.ql)(),i=(0,C.d4)(q),d=(0,C.wA)(),c=()=>{d((0,N.h)({name:t,number:n,id:a}))};return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(S,{children:[t,": ",(0,w.jsx)("span",{children:n})]}),(0,w.jsxs)(E,{children:[(0,w.jsx)(u.xH,{onClick:c,children:(0,w.jsx)(V,{})}),(0,w.jsx)(u.xH,{onClick:async()=>{try{await o(a),l.oR.success("Contact deleted successfully!")}catch(e){l.oR.error("Something went wrong. Please, try again.")}},disabled:s,children:s?(0,w.jsx)(r.A,{size:8}):(0,w.jsx)(U,{})})]}),i&&(0,w.jsx)(G,{handleShowModal:c})]})};var O=n(8877);const X=()=>{const{data:e}=(0,x.TE)(),t=(0,C.d4)(O.I8),n=(()=>{const n=t.toLocaleLowerCase();if(e){return e.filter((e=>e.name.toLocaleLowerCase().includes(n)||e.number.toString().includes(n)))}})();if(n)return(0,w.jsx)(z,{children:n.sort(((e,t)=>e.name.localeCompare(t.name))).map((e=>{let{id:t,name:n,number:r}=e;return(0,w.jsx)(k,{name:n,children:(0,w.jsx)(D,{name:n,number:r,id:t})},t)}))})};var Q=n(280);const W=Q.A.input`
  width: 200px;
  height: 40px;
  border-radius: 8px;
  border: none;
  margin-left: 70px;
  padding: 10px;
  :focus {
    outline: 1px solid blue;
  }
`,ee=Q.A.label`
  font-size: 25px;
  margin-top: 10px;
  margin-bottom: 20px;
`,te=()=>{const e=(0,C.d4)(O.I8),t=(0,C.wA)();return(0,w.jsxs)(ee,{children:["Find contacts by name",(0,w.jsx)(W,{pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,type:"text",name:"filter",value:e,onChange:e=>{const n=e.currentTarget.value;t((0,O.Ox)(n))}})]})};var ne=n(2683);const re=()=>(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(ne.mc,{children:(0,w.jsxs)("div",{children:[(0,w.jsx)(a.hE,{children:"Phonebook"}),(0,w.jsx)($,{})]})}),(0,w.jsxs)(a.wn,{children:[(0,w.jsx)(a.qE,{children:"Contacts"}),(0,w.jsx)(te,{}),(0,w.jsx)(X,{})]})]});var ae=n(1970);const oe=()=>{const e=(0,C.d4)(ae.Pg.getIsLoggedIn),{data:t,refetch:n}=(0,x.TE)();return(0,P.useEffect)((()=>{e&&n()}),[e,n]),t?(0,w.jsx)(re,{}):(0,w.jsx)(r.A,{size:50})}},2683:(e,t,n)=>{n.d(t,{YH:()=>s,i3:()=>i,mc:()=>o});var r=n(2119),a=n(5475);const o=r.Ay.div`
  padding: ${e=>e.theme.space[0]}px ${e=>e.theme.space[4]}px;
`,s=r.Ay.h1`
  padding-top: ${e=>e.theme.space[6]}px;
  width: 100%;
  font-size: ${e=>e.theme.fontSizes.l};
  margin-left: ${e=>e.theme.space[9]};
  margin-right: ${e=>e.theme.space[9]};
  align-item: center;
`,i=(0,r.Ay)(a.N_)`
  color: ${e=>e.theme.colors.orangered};
  transition: ${e=>e.theme.transition.color};
  :hover,
  :focus {
    color: ${e=>e.theme.colors.white};
  }
`}}]);
//# sourceMappingURL=263.ae9d71ec.chunk.js.map