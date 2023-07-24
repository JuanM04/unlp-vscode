# Contribuir con el proyecto

Antes que nada, ¡muchas gracias por tomarte el tiempo de contribuir con este proyecto! ❤️

Para contribuir, podés

- [reportar un error](#reportar-un-error),
- [sugerir una mejora](#sugerir-una-mejora), o
- [contribuir con código](#contribuir-con-código).

## Reportar un error

Si encontraste un problema y querés reportarlo, podés hacerlo desde GitHub, yendo a [Issues -> New Issue](https://github.com/JuanM04/unlp-vscode/issues/new?labels=bug). Necesitás tener una cuenta de GitHub para poder reportar un error.

Antes de reportar un error, por favor, asegurate de que no haya sido reportado ya. Si encontrás un error que ya fue reportado, podés agregar un comentario en el mismo issue.

Sé lo más específico posible al momento de reportar un error. Incluí qué sistema operativo estás usando, qué versión de VSCode, y cualquier otra información que pueda ser útil para entender el problema.

## Sugerir una mejora

Si estás cursando una materia y te gustaría que se agregue una funcionalidad, podés sugerirla desde GitHub, yendo a [Issues -> New Issue](https://github.com/JuanM04/unlp-vscode/issues/new?labels=enhancement). Necesitás tener una cuenta de GitHub para poder sugerir una mejora.

Antes de sugerir una mejora, por favor, asegurate de que no haya sido sugerida ya. Si encontrás una sugerencia que ya fue hecha, podés agregar un comentario en el mismo issue.

¡Toda mejora es bienvenida! Si tenés alguna idea, no dudes en sugerirla. Eso sí, por cuestiones prácticas y de tiempo, no todas las sugerencias pueden ser implementadas. Si tu sugerencia es aceptada, [podés programarla vos mismo](#contribuir-con-código).

## Contribuir con código

Para contribuir con código, se recomienda encarecidamente tengas conocimientos básicos de Git y GitHub. Podés empezar [leyendo la documentación oficial de GitHub](https://docs.github.com/es/get-started).

Si tu contribución agregará una nueva funcionalidad, por favor, [sugerila primero](#sugerir-una-mejora). De esta forma, se puede discutir la implementación antes de que empieces a programar.

### Configurar el entorno de desarrollo

Debés tener instalado en tu computadora el siguiente software:

- [Visual Studio Code](https://code.visualstudio.com) (última versión estable dispobile),
- [Node.js](https://nodejs.org/es) (versión 18.0.0 o superior),
- y [pnpm](https://pnpm.io/es/installation) (versión 8.0.0 o superior).

Con todo instalado, abrí el proyecto en VSCode y ejecutá el comando `pnpm install` en la terminal integrada. Esto instalará todas las dependencias del proyecto.

Para desarrollar, abrí el proyecto en VSCode y ejecutá el comando `pnpm dev` en la terminal integrada. Esto compilará el proyecto y lo mantendrá actualizado mientras trabajás. Podés abrir una instancia de VSCode con el proyecto compilado presionando <kbd>F5</kbd> para iniciar la extensión en modo de depuración.

Si estás agregando o modificando _grammars_, podés ejecutar el comando `pnpm build:grammars` para compilarlos. Esto es necesario para que los cambios se vean reflejados en la extensión. **Los _grammars_ siempre se escriben en formato YAML**.
