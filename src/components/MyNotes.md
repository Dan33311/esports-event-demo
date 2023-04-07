## This file is for add information learned while the app develepment

> ### Instalar fuentes externas
> * src/ crear carpeta fonts/
> * fonts/ en esa carpeta agragar las fuentes .ttf
> * main.jsx  -> import './fonts/ds_digital/DS-DIGI.ttf';
> * index.css
>> 
  ```css
    @font-face {
      font-family: "DSDigiBold";
      src: local("ds_digital"), url("./fonts/ds_digital/DS-DIGI.ttf") format("truetype");
      font-weight: bold;
    }
    
    .font-face-dg {
      font-family: "DSDigiBold";
    }
  ```
> 
  ```html
    <p className="font-face-dg"></p>
  ```
> * algunas configuraciones para convertir fuentes a monospace (en mi caso no se pudo por el diseño de la fuente)
```css
  font-variant-numeric: proportional-nums; <numeric-spacing-values>
  font-variant-numeric: tabular-nums; <numeric-spacing-values>
  font-variant-numeric: lining-nums;
```