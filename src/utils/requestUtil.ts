type MethodType = 'GET' | 'PUT' | 'POST' | 'DELETE';

interface MakeRequestType {
    url: string;
    params?: {
        [key: string]: string
    };
    method?: MethodType;
}

interface OptionsType {
    method: MethodType;
    headers?: {
        [key: string]: string
    },
    body?: string;
}

type GenericObject = { [key: string]: any }

interface MakeRequestReturnData {
    error: string;
    data: GenericObject[] | null;
}

export const makeRequest = async ({
    url,
    params,
    method = 'GET'
}: MakeRequestType): Promise<MakeRequestReturnData> => {
    const returnObject = {
        error: '',
        data: null
    };
    const options: OptionsType = {
        method
    };
    if (method === 'PUT' || method === 'POST') {
        options.headers = {
            "Content-Type": "application/json"
        };
    }
    if (params) {
        options['body'] = JSON.stringify(params);
    }
    const response = await fetch(url, options);
    if (response) {
        const data = await response.json();
        returnObject.data = data;
        return returnObject;
    }
    returnObject.error = 'no response from the API';
    return returnObject;
};
