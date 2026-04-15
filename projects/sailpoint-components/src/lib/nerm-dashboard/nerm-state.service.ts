import { Injectable } from '@angular/core';
import { EnrichedAssignment, PersonInfo } from './nerm-dashboard.component';

@Injectable({ providedIn: 'root' })
export class NermStateService {
  private _assignments: EnrichedAssignment[] = [];
  private _people = new Map<string, PersonInfo>();

  setAssignments(assignments: EnrichedAssignment[]): void {
    this._assignments = assignments;
  }

  setPeople(people: Map<string, PersonInfo>): void {
    this._people = people;
  }

  getAssignment(id: string): EnrichedAssignment | undefined {
    return this._assignments.find((a) => a.id === id);
  }

  getPerson(personId: string): PersonInfo | undefined {
    return this._people.get(personId);
  }
}
