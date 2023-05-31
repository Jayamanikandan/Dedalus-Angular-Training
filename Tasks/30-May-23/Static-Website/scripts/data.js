data = {
    services:[
        {
            name: "Application Services",
            image: "images/application.png",
            features: ["Latest Technology", "Micro Service Architecture"
            ,"Cloud Native","Test Driven Development"]
        },
        {
            name: "Testing Services",
            image: "images/testing.png",
            features: ["End to End Testing", "Performance Analysis"
            ,"Quality Assurance","Powerful tools"]
        },
        {
            name: "Infrastructure Services",
            image: "images/infrastructure.png",
            features: ["Cloud Services", "Low Cost"
            ,"Premium Hardware","High Performance"]
        }
    ]
}

let code="";
for(let svc of data.services)
{
    code+="<div class='service-box'>";
    code+="<h3>"+svc.name+"</h3>";
    code+="<img src='"+svc.image+"'>";
    code+="<div class='features'><ul>";
    for(let feat of svc.features)
    {
        code+="<li class='feature' onclick='feature_onclick(\"" + feat + "\")'>"+feat+"</li>";
    }
    code+="</ul></div></div>";
}
document.getElementById("services-wrapper").innerHTML=code;

function feature_onclick(featureName)
{
    alert(featureName);
}