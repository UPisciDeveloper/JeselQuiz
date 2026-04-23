import{H as e,M as t,Mt as n,R as r,S as i,T as a,a as o,c as s,d as c,g as l,h as u,i as d,l as f,m as p,nt as m,s as h,tt as g,u as _,w as v,x as y,y as b}from"./pinia-DFVoHJfd.js";import{a as x,i as S,n as C,o as w,s as T,t as E}from"./store-Kf84gZ3x.js";import{r as D}from"./vue-router-CdKUoJ7h.js";var O=w(`circle-check-big`,[[`path`,{d:`M21.801 10A10 10 0 1 1 17 3.335`,key:`yps3ct`}],[`path`,{d:`m9 11 3 3L22 4`,key:`1pflzl`}]]),k=w(`circle-check`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`m9 12 2 2 4-4`,key:`dzmm74`}]]),A=w(`circle-x`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`m15 9-6 6`,key:`1uzhvr`}],[`path`,{d:`m9 9 6 6`,key:`z0biqf`}]]),j=w(`clock`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M12 6v6l4 2`,key:`mmk7yg`}]]),ee=w(`gallery-vertical-end`,[[`path`,{d:`M7 2h10`,key:`nczekb`}],[`path`,{d:`M5 6h14`,key:`u2x4p`}],[`rect`,{width:`18`,height:`12`,x:`3`,y:`10`,rx:`2`,key:`l0tzu3`}]]),te=w(`menu`,[[`path`,{d:`M4 5h16`,key:`1tepv9`}],[`path`,{d:`M4 12h16`,key:`1lakjw`}],[`path`,{d:`M4 19h16`,key:`1djgab`}]]),ne=w(`move-left`,[[`path`,{d:`M6 8L2 12L6 16`,key:`kyvwex`}],[`path`,{d:`M2 12H22`,key:`1m8cig`}]]),M=w(`move-right`,[[`path`,{d:`M18 8L22 12L18 16`,key:`1r0oui`}],[`path`,{d:`M2 12H22`,key:`1m8cig`}]]),N=w(`refresh-ccw`,[[`path`,{d:`M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8`,key:`14sxne`}],[`path`,{d:`M3 3v5h5`,key:`1xhq8a`}],[`path`,{d:`M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16`,key:`1hlbsb`}],[`path`,{d:`M16 16h5v5`,key:`ccwih5`}]]),P=w(`shuffle`,[[`path`,{d:`m18 14 4 4-4 4`,key:`10pe0f`}],[`path`,{d:`m18 2 4 4-4 4`,key:`pucp1d`}],[`path`,{d:`M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22`,key:`1ailkh`}],[`path`,{d:`M2 6h1.972a4 4 0 0 1 3.6 2.2`,key:`km57vx`}],[`path`,{d:`M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45`,key:`os18l9`}]]),F=w(`timer`,[[`line`,{x1:`10`,x2:`14`,y1:`2`,y2:`2`,key:`14vaq8`}],[`line`,{x1:`12`,x2:`15`,y1:`14`,y2:`11`,key:`17fdiu`}],[`circle`,{cx:`12`,cy:`14`,r:`8`,key:`1e1u0o`}]]),I={name:`BaseEditableHolder`,extends:S,emits:[`update:modelValue`,`value-change`],props:{modelValue:{type:null,default:void 0},defaultValue:{type:null,default:void 0},name:{type:String,default:void 0},invalid:{type:Boolean,default:void 0},disabled:{type:Boolean,default:!1},formControl:{type:Object,default:void 0}},inject:{$parentInstance:{default:void 0},$pcForm:{default:void 0},$pcFormField:{default:void 0}},data:function(){return{d_value:this.defaultValue===void 0?this.modelValue:this.defaultValue}},watch:{modelValue:{deep:!0,handler:function(e){this.d_value=e}},defaultValue:function(e){this.d_value=e},$formName:{immediate:!0,handler:function(e){var t,n;this.formField=((t=this.$pcForm)==null||(n=t.register)==null?void 0:n.call(t,e,this.$formControl))||{}}},$formControl:{immediate:!0,handler:function(e){var t,n;this.formField=((t=this.$pcForm)==null||(n=t.register)==null?void 0:n.call(t,this.$formName,e))||{}}},$formDefaultValue:{immediate:!0,handler:function(e){this.d_value!==e&&(this.d_value=e)}},$formValue:{immediate:!1,handler:function(e){var t;(t=this.$pcForm)!=null&&t.getFieldState(this.$formName)&&e!==this.d_value&&(this.d_value=e)}}},formField:{},methods:{writeValue:function(e,t){var n,r;this.controlled&&(this.d_value=e,this.$emit(`update:modelValue`,e)),this.$emit(`value-change`,e),(n=(r=this.formField).onChange)==null||n.call(r,{originalEvent:t,value:e})},findNonEmpty:function(){return[...arguments].find(n)}},computed:{$filled:function(){return n(this.d_value)},$invalid:function(){var e,t;return!this.$formNovalidate&&this.findNonEmpty(this.invalid,(e=this.$pcFormField)==null||(e=e.$field)==null?void 0:e.invalid,(t=this.$pcForm)==null||(t=t.getFieldState(this.$formName))==null?void 0:t.invalid)},$formName:function(){return this.$formNovalidate?void 0:this.name||this.$formControl?.name},$formControl:function(){return this.formControl||this.$pcFormField?.formControl},$formNovalidate:function(){return this.$formControl?.novalidate},$formDefaultValue:function(){var e;return this.findNonEmpty(this.d_value,this.$pcFormField?.initialValue,(e=this.$pcForm)==null||(e=e.initialValues)==null?void 0:e[this.$formName])},$formValue:function(){var e,t;return this.findNonEmpty((e=this.$pcFormField)==null||(e=e.$field)==null?void 0:e.value,(t=this.$pcForm)==null||(t=t.getFieldState(this.$formName))==null?void 0:t.value)},controlled:function(){return this.$inProps.hasOwnProperty(`modelValue`)||!this.$inProps.hasOwnProperty(`modelValue`)&&!this.$inProps.hasOwnProperty(`defaultValue`)},filled:function(){return this.$filled}}},L=d.extend({name:`progressbar`,style:`
    .p-progressbar {
        display: block;
        position: relative;
        overflow: hidden;
        height: dt('progressbar.height');
        background: dt('progressbar.background');
        border-radius: dt('progressbar.border.radius');
    }

    .p-progressbar-value {
        margin: 0;
        background: dt('progressbar.value.background');
    }

    .p-progressbar-label {
        color: dt('progressbar.label.color');
        font-size: dt('progressbar.label.font.size');
        font-weight: dt('progressbar.label.font.weight');
    }

    .p-progressbar-determinate .p-progressbar-value {
        height: 100%;
        width: 0%;
        position: absolute;
        display: none;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        transition: width 1s ease-in-out;
    }

    .p-progressbar-determinate .p-progressbar-label {
        display: inline-flex;
    }

    .p-progressbar-indeterminate .p-progressbar-value::before {
        content: '';
        position: absolute;
        background: inherit;
        inset-block-start: 0;
        inset-inline-start: 0;
        inset-block-end: 0;
        will-change: inset-inline-start, inset-inline-end;
        animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    }

    .p-progressbar-indeterminate .p-progressbar-value::after {
        content: '';
        position: absolute;
        background: inherit;
        inset-block-start: 0;
        inset-inline-start: 0;
        inset-block-end: 0;
        will-change: inset-inline-start, inset-inline-end;
        animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
        animation-delay: 1.15s;
    }

    @keyframes p-progressbar-indeterminate-anim {
        0% {
            inset-inline-start: -35%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
        100% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
    }
    @-webkit-keyframes p-progressbar-indeterminate-anim {
        0% {
            inset-inline-start: -35%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
        100% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
    }

    @keyframes p-progressbar-indeterminate-anim-short {
        0% {
            inset-inline-start: -200%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
        100% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
    }
    @-webkit-keyframes p-progressbar-indeterminate-anim-short {
        0% {
            inset-inline-start: -200%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
        100% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
    }
`,classes:{root:function(e){var t=e.instance;return[`p-progressbar p-component`,{"p-progressbar-determinate":t.determinate,"p-progressbar-indeterminate":t.indeterminate}]},value:`p-progressbar-value`,label:`p-progressbar-label`}}),R={name:`ProgressBar`,extends:{name:`BaseProgressBar`,extends:S,props:{value:{type:Number,default:null},mode:{type:String,default:`determinate`},showValue:{type:Boolean,default:!0}},style:L,provide:function(){return{$pcProgressBar:this,$parentInstance:this}}},inheritAttrs:!1,computed:{progressStyle:function(){return{width:this.value+`%`,display:`flex`}},indeterminate:function(){return this.mode===`indeterminate`},determinate:function(){return this.mode===`determinate`},dataP:function(){return T({determinate:this.determinate,indeterminate:this.indeterminate})}}},z=[`aria-valuenow`,`data-p`],B=[`data-p`],V=[`data-p`],H=[`data-p`];function U(e,t,n,r,o,s){return i(),c(`div`,b({role:`progressbar`,class:e.cx(`root`),"aria-valuemin":`0`,"aria-valuenow":e.value,"aria-valuemax":`100`,"data-p":s.dataP},e.ptmi(`root`)),[s.determinate?(i(),c(`div`,b({key:0,class:e.cx(`value`),style:s.progressStyle,"data-p":s.dataP},e.ptm(`value`)),[e.value!=null&&e.value!==0&&e.showValue?(i(),c(`div`,b({key:0,class:e.cx(`label`),"data-p":s.dataP},e.ptm(`label`)),[a(e.$slots,`default`,{},function(){return[p(m(e.value+`%`),1)]})],16,V)):_(``,!0)],16,B)):s.indeterminate?(i(),c(`div`,b({key:1,class:e.cx(`value`),"data-p":s.dataP},e.ptm(`value`)),null,16,H)):_(``,!0)],16,z)}R.render=U;var W=d.extend({name:`toggleswitch`,style:`
    .p-toggleswitch {
        display: inline-block;
        width: dt('toggleswitch.width');
        height: dt('toggleswitch.height');
    }

    .p-toggleswitch-input {
        cursor: pointer;
        appearance: none;
        position: absolute;
        top: 0;
        inset-inline-start: 0;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        opacity: 0;
        z-index: 1;
        outline: 0 none;
        border-radius: dt('toggleswitch.border.radius');
    }

    .p-toggleswitch-slider {
        cursor: pointer;
        width: 100%;
        height: 100%;
        border-width: dt('toggleswitch.border.width');
        border-style: solid;
        border-color: dt('toggleswitch.border.color');
        background: dt('toggleswitch.background');
        transition:
            background dt('toggleswitch.transition.duration'),
            color dt('toggleswitch.transition.duration'),
            border-color dt('toggleswitch.transition.duration'),
            outline-color dt('toggleswitch.transition.duration'),
            box-shadow dt('toggleswitch.transition.duration');
        border-radius: dt('toggleswitch.border.radius');
        outline-color: transparent;
        box-shadow: dt('toggleswitch.shadow');
    }

    .p-toggleswitch-handle {
        position: absolute;
        top: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: dt('toggleswitch.handle.background');
        color: dt('toggleswitch.handle.color');
        width: dt('toggleswitch.handle.size');
        height: dt('toggleswitch.handle.size');
        inset-inline-start: dt('toggleswitch.gap');
        margin-block-start: calc(-1 * calc(dt('toggleswitch.handle.size') / 2));
        border-radius: dt('toggleswitch.handle.border.radius');
        transition:
            background dt('toggleswitch.transition.duration'),
            color dt('toggleswitch.transition.duration'),
            inset-inline-start dt('toggleswitch.slide.duration'),
            box-shadow dt('toggleswitch.slide.duration');
    }

    .p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-slider {
        background: dt('toggleswitch.checked.background');
        border-color: dt('toggleswitch.checked.border.color');
    }

    .p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.checked.background');
        color: dt('toggleswitch.handle.checked.color');
        inset-inline-start: calc(dt('toggleswitch.width') - calc(dt('toggleswitch.handle.size') + dt('toggleswitch.gap')));
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-slider {
        background: dt('toggleswitch.hover.background');
        border-color: dt('toggleswitch.hover.border.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.hover.background');
        color: dt('toggleswitch.handle.hover.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-slider {
        background: dt('toggleswitch.checked.hover.background');
        border-color: dt('toggleswitch.checked.hover.border.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.checked.hover.background');
        color: dt('toggleswitch.handle.checked.hover.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:focus-visible) .p-toggleswitch-slider {
        box-shadow: dt('toggleswitch.focus.ring.shadow');
        outline: dt('toggleswitch.focus.ring.width') dt('toggleswitch.focus.ring.style') dt('toggleswitch.focus.ring.color');
        outline-offset: dt('toggleswitch.focus.ring.offset');
    }

    .p-toggleswitch.p-invalid > .p-toggleswitch-slider {
        border-color: dt('toggleswitch.invalid.border.color');
    }

    .p-toggleswitch.p-disabled {
        opacity: 1;
    }

    .p-toggleswitch.p-disabled .p-toggleswitch-slider {
        background: dt('toggleswitch.disabled.background');
    }

    .p-toggleswitch.p-disabled .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.disabled.background');
    }
`,classes:{root:function(e){var t=e.instance,n=e.props;return[`p-toggleswitch p-component`,{"p-toggleswitch-checked":t.checked,"p-disabled":n.disabled,"p-invalid":t.$invalid}]},input:`p-toggleswitch-input`,slider:`p-toggleswitch-slider`,handle:`p-toggleswitch-handle`},inlineStyles:{root:{position:`relative`}}}),G={name:`ToggleSwitch`,extends:{name:`BaseToggleSwitch`,extends:I,props:{trueValue:{type:null,default:!0},falseValue:{type:null,default:!1},readonly:{type:Boolean,default:!1},tabindex:{type:Number,default:null},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:W,provide:function(){return{$pcToggleSwitch:this,$parentInstance:this}}},inheritAttrs:!1,emits:[`change`,`focus`,`blur`],methods:{getPTOptions:function(e){return(e===`root`?this.ptmi:this.ptm)(e,{context:{checked:this.checked,disabled:this.disabled}})},onChange:function(e){if(!this.disabled&&!this.readonly){var t=this.checked?this.falseValue:this.trueValue;this.writeValue(t,e),this.$emit(`change`,e)}},onFocus:function(e){this.$emit(`focus`,e)},onBlur:function(e){var t,n;this.$emit(`blur`,e),(t=(n=this.formField).onBlur)==null||t.call(n,e)}},computed:{checked:function(){return this.d_value===this.trueValue},dataP:function(){return T({checked:this.checked,disabled:this.disabled,invalid:this.$invalid})}}},K=[`data-p-checked`,`data-p-disabled`,`data-p`],q=[`id`,`checked`,`tabindex`,`disabled`,`readonly`,`aria-checked`,`aria-labelledby`,`aria-label`,`aria-invalid`],J=[`data-p`],Y=[`data-p`];function X(e,t,n,r,o,l){return i(),c(`div`,b({class:e.cx(`root`),style:e.sx(`root`)},l.getPTOptions(`root`),{"data-p-checked":l.checked,"data-p-disabled":e.disabled,"data-p":l.dataP}),[s(`input`,b({id:e.inputId,type:`checkbox`,role:`switch`,class:[e.cx(`input`),e.inputClass],style:e.inputStyle,checked:l.checked,tabindex:e.tabindex,disabled:e.disabled,readonly:e.readonly,"aria-checked":l.checked,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,"aria-invalid":e.invalid||void 0,onFocus:t[0]||=function(){return l.onFocus&&l.onFocus.apply(l,arguments)},onBlur:t[1]||=function(){return l.onBlur&&l.onBlur.apply(l,arguments)},onChange:t[2]||=function(){return l.onChange&&l.onChange.apply(l,arguments)}},l.getPTOptions(`input`)),null,16,q),s(`div`,b({class:e.cx(`slider`)},l.getPTOptions(`slider`),{"data-p":l.dataP}),[s(`div`,b({class:e.cx(`handle`)},l.getPTOptions(`handle`),{"data-p":l.dataP}),[a(e.$slots,`handle`,{checked:l.checked})],16,Y)],16,J)],16,K)}G.render=X;function Z(){setTimeout(()=>{let e=document.getElementById(`scroll-div`);e&&e.scrollTo({top:0,behavior:`smooth`})},100)}function Q(e,t){let n=Math.floor(e/3600),r=Math.floor(e%3600/60),i=e%60;return n>0?t?`${n}:${r.toString().padStart(2,`0`)}:${i.toString().padStart(2,`0`)}`:`${n}h ${r.toString().padStart(2,`0`)}m ${i.toString().padStart(2,`0`)}s`:r>0?t?`${r}:${i.toString().padStart(2,`0`)}`:`${r}m ${i.toString().padStart(2,`0`)}s`:t?`${i}`:`${i}s`}var re={class:`flex flex-col gap-4 w-full h-full px-4 py-8 xl:py-8 xl:px-[15dvw]`},ie={class:`flex flex-col gap-8 mb-8 bg-white rounded-xl shadow-lg p-8`},ae={class:`flex flex-col gap-2`},oe={class:`xl:text-4xl font-bold`},se={class:`flex flex-col xl:flex-row items-stretch gap-8`},ce={class:`flex-1 flex flex-col gap-1 bg-accent-100/25 rounded-xl p-6`},le={class:`text-2xl font-semibold mt-2`},ue={class:`flex-1 flex flex-col gap-1 bg-accent-100/25 rounded-xl p-6`},de={class:`text-2xl font-semibold mt-2`},fe={class:`flex-1 flex flex-col gap-1 bg-accent-100/25 rounded-xl p-6`},pe={class:`flex flex-col xl:flex-row items-center justify-between`},me={class:`flex items-center gap-4`},he={class:`flex xl:items-center justify-between`},ge={class:`flex items-center gap-4`},_e=l({__name:`QuizIntro`,props:{quiz:{},file:{}},setup(n){let a=E(),o=n,l=r(!1),d=r(!1);y(()=>{Z()});function f(){a.startQuiz(l.value,d.value)}return(n,r)=>(i(),c(`div`,re,[s(`div`,ie,[s(`div`,ae,[r[5]||=s(`span`,{class:`text-accent`},`Nuovo Quiz`,-1),s(`span`,oe,m(o.file?.name??`QUIZ`),1)]),s(`div`,se,[s(`div`,ce,[u(e(ee),{class:`text-accent`}),s(`span`,le,m(o.quiz.length),1),r[6]||=s(`span`,{class:`text-brand`},`Domande totali`,-1)]),s(`div`,ue,[u(e(j),{class:`text-accent`}),s(`span`,de,m(e(Q)(o.quiz.length*45)),1),r[7]||=s(`span`,{class:`text-brand`},`Tempo totale stimato`,-1)]),s(`div`,fe,[u(e(F),{class:`text-accent`}),r[8]||=s(`span`,{class:`text-2xl font-semibold mt-2`},`45s`,-1),r[9]||=s(`span`,{class:`text-brand`},`Tempo per domanda`,-1)])]),r[13]||=s(`span`,{class:`text-2xl font-semibold`},`Impostazioni quiz`,-1),s(`div`,pe,[s(`div`,me,[u(e(G),{class:`xl:hidden! min-w-10`,modelValue:l.value,"onUpdate:modelValue":r[0]||=e=>l.value=e},null,8,[`modelValue`]),u(e(P),{class:`hidden xl:block text-accent bg-accent-100/25 p-2 rounded-md size-12`}),r[10]||=s(`div`,{class:`flex flex-col`},[s(`span`,{class:`font-bold`},`Domande casuali`),s(`span`,null,`L'ordine delle domande sarà casuale`)],-1)]),u(e(G),{class:`hidden! xl:block!`,modelValue:l.value,"onUpdate:modelValue":r[1]||=e=>l.value=e},null,8,[`modelValue`])]),s(`div`,he,[s(`div`,ge,[u(e(G),{class:`xl:hidden! min-w-10`,modelValue:d.value,"onUpdate:modelValue":r[2]||=e=>d.value=e},null,8,[`modelValue`]),u(e(te),{class:`hidden xl:block text-accent bg-accent-100/25 p-2 rounded-md size-12`}),r[11]||=s(`div`,{class:`flex flex-col`},[s(`span`,{class:`font-bold`},`Risposte casuali`),s(`span`,null,`La posizione delle risposte (A, B, C, D) sarà casuale`)],-1)]),u(e(G),{class:`hidden! xl:block!`,modelValue:d.value,"onUpdate:modelValue":r[3]||=e=>d.value=e},null,8,[`modelValue`])]),u(e(C),{onClick:r[4]||=e=>f(),size:`large`,class:`w-full rounded-2xl!`},{default:t(()=>[u(e(x),{class:`size-4`}),r[12]||=s(`span`,null,`Inizia il quiz`,-1)]),_:1})])]))}}),ve={class:`flex flex-col gap-8 w-full h-full px-4 py-8 xl:py-8 xl:px-[15dvw]`},ye={class:`flex-1 flex flex-col gap-8`},be={class:`flex flex-col gap-2`},xe={class:`flex items-center justify-between`},Se={class:`text-accent`},Ce={class:`flex items-center gap-1 text-brand`},we={class:`flex flex-col gap-8 bg-white rounded-xl shadow-lg p-8`},Te={class:`text-2xl font-semibold`},Ee={class:`grid grid-cols-1 xl:grid-cols-2 items-stretch gap-4`},De=[`onClick`],Oe={class:`h-full w-full flex items-center gap-6`},ke={class:`text-start`},Ae={class:`flex items-center justify-end pb-8`},je={class:`flex items-center gap-4`},Me=l({__name:`QuizQuestions`,props:{quiz:{}},setup(n){let a=E(),l=n,d=r(0);y(()=>{Z(),d.value=0,setInterval(()=>{d.value++},1e3)});let h=r(0),b=r([]),x=[`A`,`B`,`C`,`D`];function S(){Z(),h.value<l.quiz.length-1?h.value++:a.finishQuiz(b.value,d.value)}return(n,r)=>(i(),c(`div`,ve,[s(`div`,ye,[s(`div`,be,[s(`div`,xe,[s(`span`,Se,`Domanda `+m(h.value+1)+` di `+m(l.quiz.length),1),s(`span`,Ce,[u(e(F),{class:`size-4`}),p(` `+m(e(Q)(d.value,!0)),1)])]),u(e(R),{value:(h.value+1)*100/l.quiz.length,showValue:!1,class:`h-2!`},null,8,[`value`])]),s(`div`,we,[s(`span`,Te,m(l.quiz[h.value].question),1)]),s(`div`,Ee,[(i(!0),c(o,null,v(l.quiz[h.value].answers,(e,t)=>(i(),c(`button`,{onClick:e=>b.value[h.value]=t,key:t,class:g([{"border border-accent bg-accent-100/25!":b.value[h.value]===t},`flex flex-col gap-8 bg-white hover:bg-gray-100 cursor-pointer rounded-xl shadow-lg p-8`])},[s(`div`,Oe,[s(`span`,{class:g([{"bg-accent text-white":b.value[h.value]===t},`flex items-center justify-center size-8 min-w-8 rounded-full border`])},m(x[t]),3),s(`span`,ke,m(e.text),1)])],10,De))),128))])]),s(`div`,Ae,[s(`div`,je,[h.value>0?(i(),f(e(C),{key:0,onClick:r[0]||=t=>{e(Z)(),h.value--},severity:`secondary`,size:`large`,class:`bg-accent-100/50! hover:bg-accent-100! rounded-2xl!`},{default:t(()=>[u(e(ne),{class:`size-4`}),r[3]||=s(`span`,null,`Precedente`,-1)]),_:1})):_(``,!0),h.value===l.quiz.length-1?(i(),f(e(C),{key:1,disabled:b.value[h.value]==null,onClick:r[1]||=e=>S(),size:`large`,class:`rounded-2xl!`},{default:t(()=>[...r[4]||=[s(`span`,null,`Termina Quiz`,-1)]]),_:1},8,[`disabled`])):(i(),f(e(C),{key:2,disabled:b.value[h.value]==null,onClick:r[2]||=e=>S(),size:`large`,class:`rounded-2xl!`},{default:t(()=>[r[5]||=s(`span`,null,`Successiva`,-1),u(e(M),{class:`size-4`})]),_:1},8,[`disabled`]))])])]))}}),Ne={class:`flex flex-col items-center gap-8 w-full h-full px-4 py-8 xl:py-8 xl:px-[15dvw]`},Pe={class:`flex flex-col items-center justify-center bg-white shadow-lg size-[40dvw] xl:size-[10dvw] min-h-[40dvw] xl:min-h-[10dvw] rounded-full p-8`},Fe={key:0},Ie={key:1},Le={key:2},Re={key:3},ze={class:`flex flex-col xl:flex-row items-stretch gap-8 w-full`},Be={class:`flex-1 flex flex-col items-center gap-1 bg-white shadow-lg rounded-xl p-6`},Ve={class:`text-2xl font-semibold mt-2`},$={class:`flex-1 flex flex-col items-center gap-1 bg-white shadow-lg rounded-xl p-6`},He={class:`text-2xl font-semibold mt-2`},Ue={class:`flex-1 flex flex-col items-center gap-1 bg-white shadow-lg rounded-xl p-6`},We={class:`text-2xl font-semibold mt-2`},Ge={class:`flex flex-col gap-8 w-full pb-8`},Ke={class:`flex items-center justify-between gap-2`},qe={class:`text-lg text-brand-800 font-bold`},Je={class:`text-xs`},Ye={class:`text-xs`},Xe=l({__name:`QuizResults`,props:{results:{},quiz:{},timer:{}},setup(n){let r=E(),a=n;y(()=>{Z()});let l=h(()=>{if(a.results){let e=a.results.filter(e=>e&&e.correct).length;return{corrects:e,percentage:Number((e/a.quiz.length*100).toFixed(0))}}return{corrects:0,percentage:0}}),d=h(()=>a.quiz.map(e=>({...e,answerCorrect:e.answers.filter(e=>e&&e.correct)})));return(n,h)=>(i(),c(`div`,Ne,[s(`div`,Pe,[s(`span`,{class:g([{"text-green-600":l.value.percentage>75,"text-orange-500":l.value.percentage>50&&l.value.percentage<=75,"text-red-600":l.value.percentage<=50},`text-4xl font-bold`])},m(l.value.percentage)+`%`,3),l.value.percentage<=50?(i(),c(`span`,Fe,`Pessimo`)):_(``,!0),l.value.percentage>50&&l.value.percentage<=75?(i(),c(`span`,Ie,`Bravo`)):_(``,!0),l.value.percentage>75&&l.value.percentage<100?(i(),c(`span`,Le,`Ottimo`)):_(``,!0),l.value.percentage===100?(i(),c(`span`,Re,`Perfetto`)):_(``,!0)]),h[7]||=s(`span`,{class:`text-4xl font-bold`},`Quiz completato!`,-1),s(`div`,ze,[s(`div`,Be,[u(e(O),{class:`text-accent`}),s(`span`,Ve,m(l.value.corrects)+` / `+m(a.quiz.length),1),h[1]||=s(`span`,{class:`text-brand`},`Domande corrette`,-1)]),s(`div`,$,[u(e(j),{class:`text-accent`}),s(`span`,He,m(e(Q)(a.timer,!0)),1),h[2]||=s(`span`,{class:`text-brand`},`Tempo impiegato`,-1)]),s(`div`,Ue,[u(e(F),{class:`text-accent`}),s(`span`,We,m(e(Q)(Number((a.timer/a.results.length).toFixed(0)))),1),h[3]||=s(`span`,{class:`text-brand`},`Tempo per domanda`,-1)])]),e(r).file?(i(),f(e(C),{key:0,onClick:h[0]||=t=>e(r).setQuiz(e(r).file),size:`large`,class:`rounded-2xl! min-h-10`},{default:t(()=>[u(e(N),{class:`size-4`}),h[4]||=s(`span`,null,`Restart quiz`,-1)]),_:1})):_(``,!0),h[8]||=s(`span`,{class:`text-2xl font-bold w-full`},`Riassunto risposte`,-1),s(`div`,Ge,[(i(!0),c(o,null,v(a.results,(t,n)=>(i(),c(`div`,{key:n,class:g([{"border-green-600":t.correct,"border-red-600":!t.correct},`flex flex-col border-l-2 gap-2 bg-white shadow-lg rounded-xl p-4`])},[s(`div`,Ke,[s(`span`,null,`Domanda `+m(n+1),1),t.correct?(i(),f(e(k),{key:0,class:`size-6 text-green-600`})):_(``,!0),t.correct?_(``,!0):(i(),f(e(A),{key:1,class:`size-6 text-red-600`}))]),s(`span`,qe,m(d.value[n].question),1),s(`span`,Je,[h[5]||=p(` La tua risposta: `,-1),s(`span`,{class:g({"text-green-600":t.correct,"text-red-600":!t.correct})},m(t.text),3)]),s(`span`,Ye,[h[6]||=p(` La risposta corretta: `,-1),s(`span`,{class:g({"text-green-600":!t.correct})},m(d.value[n].answerCorrect[0].text),3)])],2))),128))])]))}}),Ze=l({__name:`Quiz`,setup(t){let n=E(),r=D();return y(()=>{(!n.quiz||!n.quiz.length)&&r.push(`/home`)}),(t,r)=>(i(),c(o,null,[e(n).quizStep===1?(i(),f(_e,{key:0,quiz:e(n).quiz,file:e(n).file},null,8,[`quiz`,`file`])):_(``,!0),e(n).quizStep===2?(i(),f(Me,{key:1,quiz:e(n).quiz},null,8,[`quiz`])):_(``,!0),e(n).quizStep===3?(i(),f(Xe,{key:2,timer:e(n).timer,quiz:e(n).quiz,results:e(n).results},null,8,[`timer`,`quiz`,`results`])):_(``,!0)],64))}});export{Ze as default};