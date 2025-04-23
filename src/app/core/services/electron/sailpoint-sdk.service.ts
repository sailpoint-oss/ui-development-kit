import { Injectable } from '@angular/core';
import { AxiosResponse } from 'axios';
import { TransformReadV2024, TransformsV2024ApiUpdateTransformRequest } from 'sailpoint-api-client';
declare const window: any;
@Injectable({
  providedIn: 'root'
})
export class SailPointSDKService {
  private electronAPI: any;

  constructor() {
    if (window.electronAPI) {
      this.electronAPI = window.electronAPI;
    } else {
      console.error('Electron API is not available');
    }
  }

  getTransforms(): Promise<AxiosResponse<TransformReadV2024[], any>> {
    return this.electronAPI.getTransforms();
  }

  createTransform(transform: TransformsV2024ApiUpdateTransformRequest): Promise<AxiosResponse<TransformReadV2024, any>> {
    return this.electronAPI.createTransform(transform);
  }

  updateTransform(transform: TransformsV2024ApiUpdateTransformRequest): Promise<AxiosResponse<TransformReadV2024, any>> {
    return this.electronAPI.updateTransform(transform);
  }

  harborPilotTransformChat(prompt: string): Promise<any> {
    return this.electronAPI.harborPilotTransformChat(prompt);
  }
}