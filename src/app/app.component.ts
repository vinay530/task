import { Component } from '@angular/core';

interface Trip {
  start: string;
  end: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  trips: Trip[] = [];
  start = '';
  end = '';

  addTrip() {
    if (this.start && this.end) {
      this.trips.push({ start: this.start.toUpperCase(), end: this.end.toUpperCase() });
      this.start = '';
      this.end = '';
    }
  }

  isLevel2(index: number): boolean {
    if (index === 0) return false;
    return (
      this.trips[index].start === this.trips[index - 1].start &&
      this.trips[index].end === this.trips[index - 1].end
    );
  }

  isConnected(index: number): boolean {
    if (index === 0) return true;
    return this.trips[index - 1].end === this.trips[index].start;
  }

  getColor(index: number): string {
    const colors = ['#6C5CE7', '#00B894', '#FD79A8', '#E17055', '#0984E3'];
    return colors[index % colors.length];
  }
}