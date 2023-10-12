# UNLP

Paquete de utilidades para la UNLP (Facultad de Ingeniería e Informática)

<a href="https://marketplace.visualstudio.com/items?itemName=juanm04.unlp" target="__blank"><img src="https://img.shields.io/visual-studio-marketplace/v/juanm04.unlp.svg?color=eee&amp;label=VS%20Code%20Marketplace&logo=visual-studio-code" alt="Visual Studio Marketplace Version" /></a>

## Utilidades

- Soporte para Pascal (archivos `.pas` y `.pp`)
- Soporte para Qplanif (archivos `.def`)
- Soporte para R-Info (archivos `.ri` y `.rinfo`)
- Soporte para [VonSim](https://vonsim.github.io) y MSX88 (archivos `.vonsim` y `.asm`)
- Soporte para [WinMIPS64](http://indigo.ie/~mscott/) (archivos `.mips` y `.s`)
- Integración con Markdown (`pascal|pas|pp`, `qplanif`, `rinfo`, `vonsim` y `mips`)

[**¡Contribuí con el proyecto!**](https://github.com/JuanM04/unlp-vscode/blob/main/CONTRIBUTING.md)

### Nota sobre Pascal

Para ejecutar programas Pascal, se recomienda utilizar [Free Pascal](https://www.freepascal.org/). Se puede instalar fácilmente descargando el instalador desde su [sitio web](https://www.freepascal.org/download.html) (para ver un tutorial detallado en inglés, [consultar la documentación](https://wiki.freepascal.org/Installing_the_Free_Pascal_Compiler)).

Una vez instalado, se pueden compilar los programas corriendo `fpc mi_programa.pas` desde la terminal. Esto generará un archivo ejecutable llamado `mi_programa` (o `mi_programa.exe` en Windows). Para ejecutarlo, simplemente correr `./mi_programa` (o `mi_programa.exe` en Windows). También existe el atajo `instantfpc mi_programa.pas` que compila y ejecuta el programa en un solo paso.

## Licencia

Copyright © 2023 [Juan Martín Seery](https://github.com/JuanM04), bajo la licencia [MIT](https://github.com/JuanM04/unlp-vscode/blob/main/LICENSE).

_Syntax highlighting_ para Pascal basado en [`vscode-pascal-magic` (commit 65bcbdf)](https://github.com/ALANVF/vscode-pascal-magic/tree/65bcbdf003a84fe31a604b95bcab5a0ea3b802b6). Copyright (c) 2020 theangryepicbanana, bajo la licencia [MIT](https://github.com/ALANVF/vscode-pascal-magic/blob/65bcbdf003a84fe31a604b95bcab5a0ea3b802b6/LICENSE).
