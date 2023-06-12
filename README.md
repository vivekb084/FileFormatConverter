# FileFormatConverter
****Help me continue making free projects by provide some funding. UPI ID - vivekb084@okicici (Within India)****
This node package let you convert documents from PPT to pdf , PDF to Images and PPT to Images.


# Requirments 
FileFormatConverter requires following softwares to be installed

unoconv<br />
LibreOffice-dev<br />
ImageMagick<br />

# Installation
```npm i file-format-converter```

# Debian/Ubuntu:
```sudo apt-get install unoconv libreoffice-dev imagemagick```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

# Basic Usage
```
const fileConverter = require('./index')


//Convert PowerPoint to PDF

fileConverter.PowerPointToPdf('./Sample/Example.pptx','./output/').then(pdfile =>{
    console.log("PDF FILE IS ",pdfile);
})

//Convert PowerPoint to Images

fileConverter.powerpointToImages('./Sample/Example.pptx','./output/').then(imageAray =>{
    console.log("Images Data ",imageAray);
})

//Convert PDF to Images

fileConverter.PdfToImages('./Sample/Example.pdf','./output/').then(imageAray =>{
    console.log("Images Data ",imageAray);
})

```
