// Get data from main process

export const fetchData = async (setter: React.Dispatch<any>) => {
    try {
         let response: any;
         
         window.api.requestData('Renderer Requests Data');
         window.api.localData(function(_event:any, result:any) {
            response = result;
            setter(response);
         })
         
        return { success: true, data: response }; 
    } catch (error) {
        console.log(error);
        let response = await fetch('data.json');
        let json = await response.json();
        return { success: false, data: json };
    }
}