const fileConverter = require('./index')


//Convert PowerPoint to PDF
fileConverter.PowerPointToPdf('./Sample/Example.pptx','./output/').then(pdfile =>{
    console.log("PDF FILE IS ",pdfile);
})

//Convert PowerPoint to Images
fileConverter.powerpointToImages('./Sample/Example.pptx','./output/').then(imageAray =>{
    console.log("Images Data ",imageAray);
})

// //Convert PDF to Images
fileConverter.PdfToImages('./Sample/Example.pdf','./output/').then(imageAray =>{
    console.log("Images Data ",imageAray);
})

