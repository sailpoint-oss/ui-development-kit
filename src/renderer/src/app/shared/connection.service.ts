import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

export type Connection = {
  connected: boolean;
};

@Injectable({
  providedIn: "root",
})
export class ConnectionService {
  private connectedSubject = new BehaviorSubject<Connection>({
    connected: false,
  });
  isConnected$ = this.connectedSubject.asObservable();

  setConnectionState(isConnected: boolean): void {
    this.connectedSubject.next({ connected: isConnected });
  }

  getConnectionState(): Connection {
    return this.connectedSubject.getValue();
  }
}
