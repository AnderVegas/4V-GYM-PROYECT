import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntitiesService, Monitor } from '../utils/entities.service';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'primeng/carousel';  // Importa el módulo de PrimeNG

@Component({
  selector: 'app-monitors',
  standalone: true,
  imports: [CommonModule, FormsModule, CarouselModule],
  templateUrl: './monitors.component.html',
  styleUrls: ['./monitors.component.scss']
})
export class MonitorsComponent implements OnInit {
  monitors: Monitor[] = [];
  visibleMonitors: Monitor[] = [];
  isModalOpenMonitor = false;  // Estado para abrir/cerrar el modal
  newMonitor: Monitor = {     // Datos del nuevo monitor
    nombre: '',
    email: '',
    telefono: ''
  };
  isEditingMonitor = false; // Flag para saber si estamos en modo edición
  editingMonitor: Monitor = { // Monitor que estamos editando
    id: undefined,
    nombre: '',
    email: '',
    telefono: ''
  };

  // Parametros para el carrousel
  currentIndex: number = 0;
  currentTranslate: number = 0; // Controla el desplazamiento
  cardWidth: number = 330; // Ancho del card + margen (330px ancho)
  transitionDuration: string = '0.5s'; // Duración de la transición

  // Variables locales para manejar los valores de los campos
  monitorNombre: string = '';
  monitorEmail: string = '';
  monitorTelefono: string = '';

  // Variable locale para manejar el filtro de búsqueda
  searchQuery: string = '';

  constructor(private entitiesService: EntitiesService) {}


  ngOnInit(): void {
    this.monitors = this.entitiesService.getMonitors();
    this.updateVisibleMonitors();
  }

  updateVisibleMonitors(): void {
    this.visibleMonitors = this.monitors.slice(this.currentIndex, this.currentIndex + 3);
  }

  deleteMonitor(monitorId: number): void {
    if (monitorId === undefined) return;
    this.entitiesService.removeMonitors(monitorId);
    this.monitors = this.entitiesService.getMonitors();
  }
  

  previousMonitor(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.monitors.length - 3;
    }
    this.updateTranslate();
  }

  nextMonitor(): void {
    if (this.currentIndex < this.monitors.length - 3) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
    this.updateTranslate();
  }
  onPageChange(event: any): void {
    this.currentIndex = event.page;
    this.updateTranslate();
  }
  
  updateTranslate(): void {
    // Usamos currentTranslate para controlar el desplazamiento horizontal
    this.currentTranslate = this.currentIndex * this.cardWidth;
    // Actualizamos la transición para que sea suave y duradera
    this.transitionDuration = '0.5s';
  }

  openAddMonitorModal(): void {
    this.isModalOpenMonitor = true;
    this.isEditingMonitor = false; // Asegurarse de que no estamos en modo edición

    // Limpiar datos
    this.monitorNombre = "";
    this.monitorEmail = "";
    this.monitorTelefono = "";
    this.newMonitor = {           
      nombre: '',
      email: '',
      telefono: ''
    };
  }
  

  openEditMonitorModal(monitor: Monitor): void {
    this.isModalOpenMonitor = true; // Abrir el modal
    this.isEditingMonitor = true;   // Establecer el modo de edición
    this.editingMonitor = { ...monitor }; // Copiar los datos del monitor a editar
    
    // Cargar los valores del monitor seleccionado en las variables locales
    this.monitorNombre = monitor.nombre;
    this.monitorEmail = monitor.email;
    this.monitorTelefono = monitor.telefono;
  }
  
  // Cerrar el modal
  closeModal(): void {
    this.isModalOpenMonitor = false;
  }

   // Método para añadir monitor 
   addMonitor(): void {
    if (!this.monitorNombre || !this.monitorEmail || !this.monitorTelefono) {
      alert('Debe completar todos los campos');
      return;
    }

    const newMonitor: Monitor = {
      nombre: this.monitorNombre,
      email: this.monitorEmail,
      telefono: this.monitorTelefono,
    };

    this.entitiesService.addMonitor(newMonitor);
    this.closeModal();
    this.monitors = this.entitiesService.getMonitors();
  }

  // Método para editar un monitor
  editMonitor(): void {
    if (!this.monitorNombre || !this.monitorEmail || !this.monitorTelefono) {
      alert('Debe completar todos los campos');
      return;
    }
  
    const updatedMonitor: Monitor = {
      id: this.editingMonitor?.id,  // Mantener el ID si estamos editando
      nombre: this.monitorNombre,
      email: this.monitorEmail,
      telefono: this.monitorTelefono,
    };
  
    this.entitiesService.updateMonitor(updatedMonitor); // Actualizar el monitor en el servicio
    this.closeModal();
    this.monitors = this.entitiesService.getMonitors(); // Recargar la lista de monitores
  }
  
  
  filterMonitors(): void {
    // Filtrar los monitores si hay una consulta de búsqueda
    if (this.searchQuery.trim() === '') {
      // Si no hay texto en el campo de búsqueda, mostrar todos los monitores
      this.monitors = this.entitiesService.getMonitors();
    } else {
      // Filtrar los monitores que contienen la búsqueda en su nombre (sin importar mayúsculas o minúsculas)
      this.monitors = this.entitiesService.getMonitors().filter((monitor) =>
        monitor.nombre.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  
    // Restablecer el índice y actualizar los monitores visibles después de filtrar
    this.currentIndex = 0;  
    this.updateVisibleMonitors();  // Actualizar los monitores visibles
  }
  
  
}
