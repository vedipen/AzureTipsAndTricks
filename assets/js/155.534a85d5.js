(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{558:function(e,t,r){"use strict";r.r(t);var n=r(43),i=Object(n.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("div",{staticClass:"tip custom-block"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[e._v("🆓 Grab your FREE "),r("a",{attrs:{href:"https://get.printfection.com/mbcrump/3960040838",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Stickers"),r("OutboundLink")],1),e._v(" now! Limited to first 10 folks!")]),e._v(" "),r("p",[e._v("📺 Watch the video : "),r("a",{attrs:{href:"https://www.youtube.com/watch?v=d5omcL6z9dI&list=PLLasX02E8BPCNCK8Thcxu-Y-XcBUbhFWC&index=2?WT.mc_id=youtube-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to deploy your web app in Windows Containers on Azure App Service"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("💡 Learn more : "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/app-service/app-service-web-get-started-windows-container?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Run a custom Windows container in Azure "),r("OutboundLink")],1),e._v(".")])]),e._v(" "),r("h4",{attrs:{id:"running-applications-with-dependencies-on-azure-app-service"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#running-applications-with-dependencies-on-azure-app-service","aria-hidden":"true"}},[e._v("#")]),e._v(" Running applications with dependencies on Azure App Service")]),e._v(" "),r("p",[e._v("Sometimes you have a web application that runs on the full .NET Framework and has dependencies to libraries and capabilities that aren't available in a service like "),r("a",{attrs:{href:"https://azure.microsoft.com/services/app-service/web/?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure App Service Web App"),r("OutboundLink")],1),e._v(". Applications like this sometimes rely on things to be installed in the GAC (Global Assembly Cache). In the past, you could only run an application like that in Azure if you run it in IIS on a "),r("a",{attrs:{href:"https://azure.microsoft.com/services/virtual-machines/?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Virtual Machine"),r("OutboundLink")],1),e._v(" or in "),r("a",{attrs:{href:"https://azure.microsoft.com/services/cloud-services/?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Cloud Services"),r("OutboundLink")],1),e._v(". Now, you can run such an application in a "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/app-service/app-service-web-get-started-windows-container?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Windows Container in an Azure App Service Web App"),r("OutboundLink")],1),e._v(". This enables you to use features like "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/app-service/manage-scale-up?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("automatic scaling"),r("OutboundLink")],1),e._v(", "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/app-service/deploy-staging-slots?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("deployment slots"),r("OutboundLink")],1),e._v(", "),r("a",{attrs:{href:"https://www.youtube.com/watch?v=MP8fXgxq6xo",target:"_blank",rel:"noopener noreferrer"}},[e._v("testing in production"),r("OutboundLink")],1),e._v(" and "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/app-service/overview-authentication-authorization?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("easy authentication and authorization"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("In this post, we'll containerize an existing ASP.NET Forms application and run that in a Windows Container in an Azure App Service Web App.")]),e._v(" "),r("h4",{attrs:{id:"prerequisites"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites","aria-hidden":"true"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),r("p",[e._v("If you want to follow along, you'll need the following:")]),e._v(" "),r("ul",[r("li",[e._v("An Azure subscription (If you don't have an Azure subscription, create a "),r("a",{attrs:{href:"https://azure.microsoft.com/free/?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("free account"),r("OutboundLink")],1),e._v(" before you begin)")]),e._v(" "),r("li",[e._v("You'll need the "),r("a",{attrs:{href:"https://visualstudio.microsoft.com/downloads/?WT.mc_id=microsoft-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("latest version of Visual Studio 2019"),r("OutboundLink")],1),e._v(" with the Azure workload installed")]),e._v(" "),r("li",[e._v("You need Docker on your PC to develop container-based applications. Download it "),r("a",{attrs:{href:"https://store.docker.com/editions/community/docker-ce-desktop-windows",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),r("OutboundLink")],1),e._v(" "),r("ul",[r("li",[e._v("Your local Docker engine needs to be set to run "),r("strong",[e._v("Windows Containers")])])])]),e._v(" "),r("li",[e._v("You need an existing ASP.NET Forms application that runs on the .NET Framework 4.5 or higher")])]),e._v(" "),r("h4",{attrs:{id:"deploy-your-web-app-in-windows-containers-on-azure-app-service"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#deploy-your-web-app-in-windows-containers-on-azure-app-service","aria-hidden":"true"}},[e._v("#")]),e._v(" Deploy your web app in Windows Containers on Azure App Service")]),e._v(" "),r("p",[e._v("Let's start by containerizing our existing application. I have an existing ASP.NET Forms web application that runs on .NET Framework 4.7.\nThis is a very simple application and you crate your own by simply creating a new APS.NET Forms application in Visual Studio. Let's containerize it:")]),e._v(" "),r("ol",[r("li",[e._v("In Visual Studio, "),r("strong",[e._v("right-click the project file")]),e._v(" and click "),r("strong",[e._v("Add > Docker Support")]),e._v("\na. This adds a Docker file that describes the container image that the application will run in. If you want, you can customize the Docker file")])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/35adddockersupport.png")}}),e._v(" "),r("p",[e._v("(Adding Docker support in Visual Studio)")]),e._v(" "),r("ol",{attrs:{start:"2"}},[r("li",[e._v("Next, publish the container image with the application in it to a container registry. From there, the image can be used by Azure services. We'll use "),r("a",{attrs:{href:"https://azure.microsoft.com/services/container-registry/?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Container Registry"),r("OutboundLink")],1),e._v(" to store the image but you can also use something like "),r("a",{attrs:{href:"https://hub.docker.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker Hub"),r("OutboundLink")],1),e._v(". "),r("strong",[e._v("Right-click the project file")]),e._v(" and click "),r("strong",[e._v("Publish")]),e._v(". This will start the publish wizard")])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/35publishtoregistry1.png")}}),e._v(" "),r("p",[e._v("(Publish wizard in Visual Studio)")]),e._v(" "),r("ol",{attrs:{start:"3"}},[r("li",[e._v("Choose "),r("strong",[e._v('"Create a new Azure Container Registry"')]),e._v(" and click "),r("strong",[e._v("Publish")])]),e._v(" "),r("li",[e._v("The Create new Azure Container Registry screen opens:\na. Type the "),r("strong",[e._v("DNS Prefix")]),e._v(", which is the name for the registry and will be used for its URL\nb. Choose a "),r("strong",[e._v("Resource Group")]),e._v("\nc. Pick a "),r("strong",[e._v("Location")]),e._v("\nd. Click "),r("strong",[e._v("Create")]),e._v(" to create the Azure Container Registry and push the image to it. This will take a few minutes")])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/35publishtoregistry2.png")}}),e._v(" "),r("p",[e._v("(Create a new Azure Container Registry in Visual Studio)")]),e._v(" "),r("p",[e._v("Now that the container image is in an Azure Container Registry, we can use it to create a new App Service Web App and run the application in it.")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("Go to the "),r("a",{attrs:{href:"https://portal.azure.com/?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure portal"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[e._v("Click the "),r("strong",[e._v("Create a resource")]),e._v(" button (the plus-sign in the top left corner)")])]),e._v(" "),r("li",[r("p",[e._v("Click on "),r("strong",[e._v("Web App")]),e._v(". This opens the Create Web App blade\na. Under "),r("strong",[e._v("Resource Group")]),e._v(", click "),r("strong",[e._v("Create new")]),e._v(" and fill in a "),r("strong",[e._v("name")]),e._v(" for the new Resource Group\nb. Fill in a "),r("strong",[e._v("Name")]),e._v(" for the Web App\nc. For the "),r("strong",[e._v("Publish")]),e._v(" setting, select "),r("strong",[e._v("Docker Image")]),e._v("\nd. For the "),r("strong",[e._v("Operating System")]),e._v(", select "),r("strong",[e._v("Windows")]),e._v("\ne. Select a "),r("strong",[e._v("Region")]),e._v(" near the location of the Azure Container Registry. This will speed up the deployment process\nf. Click "),r("strong",[e._v("Next: Docker")])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/35createwebapp.png")}}),e._v(" "),r("p",[e._v("(Create Web App blade in the Azure portal)")]),e._v(" "),r("p",[e._v("g. Select "),r("strong",[e._v("Azure Container Registry")]),e._v(" for the "),r("strong",[e._v("Image Source")]),e._v("\nh. For "),r("strong",[e._v("Registry")]),e._v(", select the container registry that we've created before\ni. For "),r("strong",[e._v("Image")]),e._v(", select the image that we've pushed into the registry. This will be called something like "),r("strong",[e._v("mywebformsapp")]),e._v("\nj. For "),r("strong",[e._v("Tag")]),e._v(", select "),r("strong",[e._v("latest")]),e._v("\nk. Click "),r("strong",[e._v("Review and Create")]),e._v(" and click "),r("strong",[e._v("Create")]),e._v(" in the next screen. This will create the Web App")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/35createwebapp2.png")}}),e._v(" "),r("p",[e._v("(Docker configuration of the Web App in the Azure portal)")])])]),e._v(" "),r("p",[e._v("When the Web App is created, go to it in the Azure portal. In the "),r("strong",[e._v("Overview")]),e._v(" blade, you'll see the Web App URL. Click on it to open it in a browser. This will show you a screen that says that the container is starting up.")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/35resultwaiting.png")}}),e._v(" "),r("p",[e._v("(Web App's container is starting up)")]),e._v(" "),r("p",[e._v("It will take several minutes before the container starts. You can check what is going on in the background by going to the Web App in the Azure portal and looking at the "),r("strong",[e._v("Logs")]),e._v(" in the "),r("strong",[e._v("Container settings")]),e._v(".")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/35containerlogs.png")}}),e._v(" "),r("p",[e._v("(Container logs in the Azure portal)")]),e._v(" "),r("p",[e._v("After a couple of minutes, try the Web App URL again in a browser to see the application in action, running in Azure.")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/35result.png")}}),e._v(" "),r("p",[e._v("(Application running in Azure)")]),e._v(" "),r("h4",{attrs:{id:"conclusion"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#conclusion","aria-hidden":"true"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),r("p",[e._v("Sometimes, you need a lot of control over the environment that your app runs in. A container can give you that control, as it acts as a complete virtual environment in a sandbox. And now, you can run "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/app-service/app-service-web-get-started-windows-container?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Windows Containers on Azure App Service Web App"),r("OutboundLink")],1),e._v(". This give you control and a lot of cloud-only functionality, like "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/app-service/manage-scale-up?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("automatic scaling"),r("OutboundLink")],1),e._v(", "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/app-service/deploy-staging-slots?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("deployment slots"),r("OutboundLink")],1),e._v(", "),r("a",{attrs:{href:"https://www.youtube.com/watch?v=MP8fXgxq6xo",target:"_blank",rel:"noopener noreferrer"}},[e._v("testing in production"),r("OutboundLink")],1),e._v(" and "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/app-service/overview-authentication-authorization?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("easy authentication and authorization"),r("OutboundLink")],1),e._v(". Go check it out!")])])},[],!1,null,null,null);t.default=i.exports}}]);