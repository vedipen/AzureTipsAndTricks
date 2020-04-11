(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{376:function(t,e,n){"use strict";n.r(e);var a=n(43),r=Object(a.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("div",{staticClass:"tip custom-block"},[n("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),n("p",[t._v("💡 Learn more : "),n("a",{attrs:{href:"https://docs.microsoft.com/azure/azure-portal/?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure portal documentation"),n("OutboundLink")],1),t._v(".")])]),t._v(" "),n("h4",{attrs:{id:"how-to-get-the-azure-account-tenant-id"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#how-to-get-the-azure-account-tenant-id","aria-hidden":"true"}},[t._v("#")]),t._v(" How to get the Azure Account Tenant Id?")]),t._v(" "),n("p",[t._v("Your Office 365 tenant ID is a globally unique identifier (GUID) that is different than your tenant name or domain. On rare occasion, you might need this identifier, such as when configuring Windows group policy for OneDrive for Business.")]),t._v(" "),n("p",[t._v("Knowing this, you'll find that there are times when you will want to grab the Tenant Id and while you can do this through PowerShell, sometimes it is just as easy to grab this through the Azure Portal.")]),t._v(" "),n("blockquote",[n("p",[t._v("The "),n("strong",[t._v("DirectoryId")]),t._v(" and "),n("strong",[t._v("TenantId")]),t._v(" both equate to the GUID representing the ActiveDirectory Tenant. Depending on context, either term may be used by Microsoft documentation and products, which can be confusing.")])]),t._v(" "),n("p",[t._v("Open the Azure Portal and navigate to "),n("strong",[t._v("Azure Active Directory")]),t._v(", then "),n("strong",[t._v("Properties")]),t._v(" and copy the "),n("strong",[t._v("Directory ID")])]),t._v(" "),n("img",{attrs:{src:t.$withBase("/files/aadazure1.png")}}),t._v(" "),n("blockquote",[n("p",[t._v('In other words, the "Tenant ID" IS the "Directory ID".')])]),t._v(" "),n("p",[t._v("You can also do this via Azure CLI or Azure Powershell:")]),t._v(" "),n("div",{staticClass:"language-text line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('az account show --subscription "MySubscriptionName" --query tenantId --output tsv\naz account list --query [].tenantId --output tsv\n')])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br")])]),n("div",{staticClass:"language-text line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("Get-AzTenant | Select-Object -ExpandProperty Id\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("p",[t._v("I hope it helps!")])])},[],!1,null,null,null);e.default=r.exports}}]);