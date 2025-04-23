
import { Configuration, TransformsV2024Api, TransformsV2024ApiCreateTransformRequest, TransformsV2024ApiUpdateTransformRequest, TransformReadV2024 } from 'sailpoint-api-client';
import { AxiosResponse } from 'axios';

type ApiResponse<T> = {
  data: T;
  status: number;
  statusText: string;
  headers: Record<string, string>;
};

async function handleApiCall<T>(
  apiCall: () => Promise<AxiosResponse<T>>
): Promise<ApiResponse<T>> {
  try {
    const response = await apiCall();
    return {
      data: response.data,
      status: response.status,
      statusText: response.statusText,
      headers: response.headers as Record<string, string>,
    };
  } catch (error) {
    console.error('API call error:', error);
    return generateErrorResponse(error);
  }
}

function generateErrorResponse(error: unknown): ApiResponse<any> {
  if (error instanceof Error) {
    return {
      data: [],
      status: 500,
      statusText: error.message,
      headers: {},
    };
  }
  return {
    data: [],
    status: 500,
    statusText: 'Unknown error occurred',
    headers: {},
  };
}

export const getTransforms = (apiConfig: Configuration): Promise<ApiResponse<TransformReadV2024[]>> => {
  const transformsApi = new TransformsV2024Api(apiConfig);
  return handleApiCall(() => transformsApi.listTransforms());
};

export const createTransform = (apiConfig: Configuration, request: TransformsV2024ApiCreateTransformRequest): Promise<ApiResponse<TransformReadV2024>> => {
  const transformsApi = new TransformsV2024Api(apiConfig);
  return handleApiCall(() => transformsApi.createTransform(request));
};

export const updateTransform = (apiConfig: Configuration, request: TransformsV2024ApiUpdateTransformRequest): Promise<ApiResponse<TransformReadV2024>> => {
  const transformsApi = new TransformsV2024Api(apiConfig);
  return handleApiCall(() => transformsApi.updateTransform(request));
};