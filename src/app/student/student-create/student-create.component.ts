import { Component } from '@angular/core';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.scss'],
})
export class StudentCreateComponent {
  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      const fileContent: string = e.target.result;
      console.log('Contenido del archivo:', fileContent);

      // Buscar las etiquetas "extc" y "extt"
      /*
      const startIndex = fileContent.indexOf('EXTC');
      const endIndex = fileContent.indexOf('EXTT') + 95; // Se suma 4 para incluir "EXTT"
      */
      const startIndices: number[] = [];
      const endIndices: number[] = [];
      let startIndex = fileContent.indexOf('EXTC');
      let endIndex = fileContent.indexOf('EXTT');


      while (startIndex !== -1 && endIndex !== -1) {
        startIndices.push(startIndex);
        endIndices.push(endIndex + 95); // Se suma 4 para incluir "EXTT" en el contenido
        startIndex = fileContent.indexOf('EXTC', startIndex + 1);
        endIndex = fileContent.indexOf('EXTT', endIndex + 1);
      }



      // Extraer el contenido entre las etiquetas y guardar en archivos separados
    for (let i = 0; i < startIndices.length; i++) {
      const contentBetweenTags = fileContent.substring(startIndices[i], endIndices[i]);
      console.log('Contenido entre etiquetas:', contentBetweenTags);
      this.saveToFile(contentBetweenTags, i + 1); // Se pasa un índice para nombrar los archivos

    }
  };

  reader.readAsText(file);
}
      /*
      if (startIndex !== -1 && endIndex !== -1 && endIndex > startIndex) {
        // Extraer el contenido entre las etiquetas
        const contentBetweenTags = fileContent.substring(startIndex, endIndex);
        console.log('Contenido entre etiquetas:', contentBetweenTags);

        // Guardar el contenido en un nuevo archivo
        this.saveToFile(contentBetweenTags);
      } else {
        console.log(
          'No se encontraron las etiquetas o están en el orden incorrecto.'
        );
      }
    };

    reader.readAsText(file);
  }

  */

  /*
  saveToFile(content: string): void {
    const blob = new Blob([content], { type: 'text/plain' });
    const anchor = document.createElement('a');
    anchor.download = 'nuevo_archivo.txt';
    anchor.href = window.URL.createObjectURL(blob);
    anchor.click();
  }
*/

saveToFile(content: string, index: number): void {
  const blob = new Blob([content], { type: 'text/plain' });
  const anchor = document.createElement('a');
  anchor.download = `canal_${index}.txt`; // Se usa un nombre de archivo único
  anchor.href = window.URL.createObjectURL(blob);
  alert(`Se ha creado el archivo ${index }`);
  anchor.click();
}

}
