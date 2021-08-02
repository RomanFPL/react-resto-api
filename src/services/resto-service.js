export default class RestoService {
    endPoint = 'http://localhost:3000/menu';
    
    getMenuItems = async () => {
        const response = await fetch(this.endPoint);
        
        if(!response.ok)  throw new Error("Server error");

        return await response.json()
    }
}