import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { map, startWith } from 'rxjs';
import { DefaultApiGenericGetRequest } from 'sailpoint-api-client';
import { SailPointSDKService } from '../sailpoint-sdk.service';

interface Pokemon {
  value: string;
  viewValue: string;
}

interface PokemonGroup {
  name: string;
  disabled?: boolean;
  pokemon: Pokemon[];
}

@Component({
  selector: 'app-auth-viewer',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatToolbarModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  ],
  templateUrl: './auth-viewer.component.html',
  styleUrl: './auth-viewer.component.scss',
})
export class AuthViewerComponent {
  title = 'Auth Viewer';

  pokemonGroups: PokemonGroup[] = [];
  userLevels: Pokemon[] = [];
  scopes: Pokemon[] = []
  constructor(private sdk: SailPointSDKService) {}

  ngOnInit() {
    this.loadAuthInfo();
    this.loadScopeInfo();
  }

  loadAuthInfo() {
    const request: DefaultApiGenericGetRequest = {
      path: '/v2025/authorization-capabilities',
      xSailPointExperimental: "true"
    }
    this.sdk.genericGet(request).then(response => {
      console.log('Auth Info:', response.data);

      response.data.forEach(element => {
        this.userLevels.push({value: element.id, viewValue: element.id + `(${element.legacyGroup})`})
      });
      this.pokemonGroups.push({name: 'User Levels', pokemon: this.userLevels})

    }).catch(error => {
      console.error('Error fetching auth info:', error);
    });
  }

  loadScopeInfo() {
  const request: DefaultApiGenericGetRequest = {
      path: '/v2025/authorization-scopes',
      xSailPointExperimental: "true"
    }
    this.sdk.genericGet(request).then(response => {
      console.log('Auth Info:', response.data);

      response.data.forEach(element => {
        this.scopes.push({value: element.id, viewValue: element.id})
      });
      this.pokemonGroups.push({name: 'Scopes', pokemon: this.scopes})

    }).catch(error => {
      console.error('Error fetching auth info:', error);
    });
  }

  pokemonControl = new FormControl();

  // Option 1: Initialize at declaration (recommended)
  filteredPokemonGroups$ = this.pokemonControl.valueChanges.pipe(
    startWith(''),
    map((value) => this._filterGroups(value || ''))
  );

  private _filterGroups(value: any): PokemonGroup[] {
    if (!value) {
      return this.pokemonGroups;
    } else if (value instanceof Object) {
      return this.pokemonGroups;
    }

    const filterValue = value.toLowerCase();

    return this.pokemonGroups
      .map((group) => ({
        ...group,
        pokemon: group.pokemon.filter((pokemon) =>
          typeof pokemon.viewValue === 'string' && pokemon.viewValue.toLowerCase().includes(filterValue)
        ),
      }))
      .filter((group) => group.pokemon.length > 0);
  }

  displayFn(pokemon: Pokemon): string {
    return pokemon ? pokemon.viewValue : '';
  }
}
