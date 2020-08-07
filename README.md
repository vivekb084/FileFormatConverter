# FileFormatConverter
This node package let you convert documents from PPT to pdf , PDF to Images and PPT to Images.


# Requirments 
FileFormatConverter requires following softwares to be installed

unoconv
LibreOffice-dev
ImageMagick

# Installation
npm i file-format-converter

Debian/Ubunut:
sudo apt-get install unoconv libreoffice-dev imagemagick

# Basic Usage

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

