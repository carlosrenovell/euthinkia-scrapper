const pp = require("puppeteer");
const WEBSITE = "https://presupuestosabiertos.madrid.es/es/programas/15210/promocion-y-gesti%C3%B3n-de-vivienda#view=economic&year=2018";
( async()=>{
    console.time();
    const browser = await pp.launch({headless: false});
try{

    const page = await browser.newPage();
     let content = await page.goto(WEBSITE,{waitUntil:'networkidle2'});
     let lista =await page.$x('//*[@id="total"]/ul');
     lista.forEach((li)=>{
         console.log("el:",li);
         let p = li.querySelector("p");
         debugger;
         console.log(p.innerHTML);
         
         debugger;
     });
     debugger;
}catch(e){
    //console.error("Error:",e);
}finally{
    await browser.close();
}
    console.timeEnd();
})();
/*
//*[@id="total"]/ul/li[1]
*/