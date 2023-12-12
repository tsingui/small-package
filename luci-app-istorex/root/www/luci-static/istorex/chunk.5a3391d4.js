var A=(w,h,c)=>new Promise((l,t)=>{var F=i=>{try{d(c.next(i))}catch(D){t(D)}},o=i=>{try{d(c.throw(i))}catch(D){t(D)}},d=i=>i.done?l(i.value):Promise.resolve(i.value).then(F,o);d((c=c.apply(w,h)).next())});import{d as N,s as M,j as f,v as x,o as m,c as v,a,x as r,D as S,F as b,A as _,m as I,E as V,l as U,B as T,C as P,T as q}from"./index.js?v=fcd29cf3";const G=["onSubmit"],L=a("div",{class:"label-info"}," \u8BF7\u786E\u4FDD\u60A8\u5DF2\u5C06\u8DEF\u7531 WAN \u53E3\u8FDE\u63A5\u5230\u4E0A\u7EA7\u8DEF\u7531\u5C40\u57DF\u7F51\uFF08 LAN \uFF09\u63A5\u53E3 ",-1),W=a("div",{class:"label-name"},[a("span",null,"WAN \u63A5\u53E3\u914D\u7F6E\u65B9\u5F0F")],-1),H={class:"label-value"},j=a("option",{value:"dhcp"},"\u81EA\u52A8\u83B7\u53D6 IP \u5730\u5740\uFF08DHCP\uFF09",-1),O=a("option",{value:"static"},"\u9759\u6001 IP \u5730\u5740",-1),z=[j,O],J=a("div",{class:"label-name"},[a("span",null,"IP\u5730\u5740")],-1),K={class:"label-value"},Q=a("div",{class:"label-name"},[a("span",null,"\u5B50\u7F51\u63A9\u7801")],-1),R={class:"label-value"},X=a("div",{class:"label-name"},[a("span",null,"\u7F51\u5173\u5730\u5740")],-1),Y={class:"label-value"},Z=a("div",{class:"label-name"},[a("span",null,"DNS \u914D\u7F6E\u65B9\u5F0F")],-1),$={class:"label-value"},tt=a("option",{value:"auto"},"\u81EA\u52A8\u83B7\u53D6\uFF08DHCP\uFF09",-1),at=a("option",{value:"manual"},"\u624B\u52A8\u914D\u7F6E",-1),st=[tt,at],et=a("div",{class:"label-name"},[a("span",null,"DNS\u670D\u52A1\u5668")],-1),ut={class:"label-value"},nt=["onUpdate:modelValue"],lt=a("div",{class:"label-name"},[a("span",null,"DNS\u670D\u52A1\u5668")],-1),ot={class:"label-value"},dt=a("div",{class:"label-name"}," \u5907\u7528DNS\u670D\u52A1\u5668 ",-1),it={class:"label-value"},rt={class:"label-btns"},ct=["disabled"],pt={key:2,class:"label-msg"},_t=N({__name:"index",setup(w){return A(this,null,function*(){let h,c;const l=M(""),t=f({wanProto:"dhcp",dnsProto:"auto",staticIp:"",subnetMask:"",manualDnsIp:[],gateway:""}),F=f({staticIP:""}),o=f({dnsAddr1:"",dnsAddr2:""}),d=M(!1),i=()=>A(this,null,function*(){d.value=!0;try{const u=yield Promise.all([P.Guide.ClientModel.GET(),P.Network.Status.GET()]);if(u[0]){const e=u[0],{result:s,error:n}=e.data;if(s){const{wanProto:p,dnsProto:y,staticIp:k,subnetMask:E,gateway:g,manualDnsIp:B}=s;p&&(t.wanProto=p),y&&(t.dnsProto=y),k&&(t.staticIp=k),E&&(t.subnetMask=E),g&&(t.gateway=g),B&&(t.manualDnsIp=B||[])}n&&(l.value=n)}if(u[1]){const e=u[1],{result:s,error:n}=e.data;s&&s.ipv4addr&&(F.staticIP=s.ipv4addr),n&&(l.value=n)}}catch(u){l.value=u}d.value=!1});[h,c]=x(()=>i()),yield h,c();const D=u=>{u.target.value=="static"&&((t.staticIp==null||t.staticIp=="")&&(t.staticIp=F.staticIP),(t.subnetMask==null||t.subnetMask=="")&&(t.subnetMask="255.255.255.0"))},C=()=>A(this,null,function*(){const u={};switch(t.wanProto){case"dhcp":break;case"static":u.staticIp=t.staticIp,u.subnetMask=t.subnetMask,u.gateway=t.gateway;break}switch(t.dnsProto){case"auto":break;case"manual":u.manualDnsIp=[],t.manualDnsIp!=null&&t.manualDnsIp.length>0?u.manualDnsIp=t.manualDnsIp:(u.manualDnsIp.push(o.dnsAddr1),o.dnsAddr2&&u.manualDnsIp.push(o.dnsAddr2));break}u.dnsProto=t.dnsProto,u.wanProto=t.wanProto,d.value=!0;const e=q.Loading("\u4FDD\u5B58\u4E2D...");try{const s=yield P.Guide.ClientModel.POST(u);if(s!=null&&s.data){const{success:n,error:p}=s==null?void 0:s.data;p&&(l.value=p),(n==null||n==0)&&(l.value="\u914D\u7F6E\u5B8C\u6210")}}catch(s){l.value=s}d.value=!1,e.Close()});return(u,e)=>(m(),v("form",{class:"form-container",onSubmit:T(C,["prevent"])},[L,W,a("div",H,[r(a("select",{"onUpdate:modelValue":e[0]||(e[0]=s=>t.wanProto=s),onInput:D},z,544),[[S,t.wanProto]])]),t.wanProto=="static"?(m(),v(b,{key:0},[J,a("div",K,[r(a("input",{type:"text",placeholder:"ip\u5730\u5740","onUpdate:modelValue":e[1]||(e[1]=s=>t.staticIp=s),required:""},null,512),[[_,t.staticIp,void 0,{trim:!0}]])]),Q,a("div",R,[r(a("input",{type:"text",placeholder:"\u5B50\u7F51\u63A9\u7801\u5730\u5740","onUpdate:modelValue":e[2]||(e[2]=s=>t.subnetMask=s),required:""},null,512),[[_,t.subnetMask,void 0,{trim:!0}]])]),X,a("div",Y,[r(a("input",{type:"text",placeholder:"\u7F51\u5173\u5730\u5740","onUpdate:modelValue":e[3]||(e[3]=s=>t.gateway=s),required:""},null,512),[[_,t.gateway,void 0,{trim:!0}]])])],64)):I("",!0),Z,a("div",$,[r(a("select",{"onUpdate:modelValue":e[4]||(e[4]=s=>t.dnsProto=s)},st,512),[[S,t.dnsProto]])]),t.dnsProto=="manual"?(m(),v(b,{key:1},[t.manualDnsIp!=null&&t.manualDnsIp.length>0?(m(!0),v(b,{key:0},V(t.manualDnsIp,(s,n)=>(m(),v(b,null,[et,a("div",ut,[r(a("input",{type:"text",placeholder:"DNS\u670D\u52A1\u5668\u5730\u5740","onUpdate:modelValue":p=>t.manualDnsIp[n]=p},null,8,nt),[[_,t.manualDnsIp[n],void 0,{trim:!0}]])])],64))),256)):(m(),v(b,{key:1},[lt,a("div",ot,[r(a("input",{type:"text",placeholder:"\u4E3BDNS\u670D\u52A1\u5668\u5730\u5740","onUpdate:modelValue":e[5]||(e[5]=s=>o.dnsAddr1=s),required:""},null,512),[[_,o.dnsAddr1,void 0,{trim:!0}]])]),dt,a("div",it,[r(a("input",{type:"text",placeholder:"\u5907\u7528DNS\u670D\u52A1\u5668\u5730\u5740","onUpdate:modelValue":e[6]||(e[6]=s=>o.dnsAddr2=s)},null,512),[[_,o.dnsAddr2,void 0,{trim:!0}]])])],64))],64)):I("",!0),a("div",rt,[a("button",{class:"sumbit",disabled:d.value},"\u4FDD\u5B58",8,ct)]),l.value?(m(),v("div",pt,[a("span",null,U(l.value),1)])):I("",!0)],40,G))})}});export{_t as default};
