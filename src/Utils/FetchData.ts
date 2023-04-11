// Get data from main process
interface FetchDataResponse {
    success: boolean,
    data: any,
}

export const fetchData = async (setter: React.Dispatch<any>): Promise<FetchDataResponse> => {
    return new Promise(async (resolve, reject) => {
        try {
            window.api.requestData("Renderer Requests Data");
            const response = await window.api.localData();
            setter(response);
            resolve({ success: true, data: response });
       } catch (error) {
           console.log(error);
           let response = await fetch('data.json');
           let json = await response.json();
           resolve({ success: false, data: json });
       }
    });
};