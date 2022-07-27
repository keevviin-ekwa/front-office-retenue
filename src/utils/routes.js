const base_url = "https://localhost:5001/api";
//const base_url= window.env.BASE_URL


export const routes = {
    
    getApiByPhoneNumber: `${base_url}/User/getUserByPhoneNumber`,
    downloadMonthlyCertificate: `${base_url}/Certificate/generate/certificate`,
    downloadSemesterCertificate:`${base_url}/Certificate/generate/certificate`,
    getCommissionsByUser: `${base_url}/Commission/getCommissionByUser`,
    getCommissionsByUserBySemester: `${base_url}/Commission/getSemesterCommissionByUser`,
    getCommissionsByUserByMonth:`${base_url}/Commission/getMonthCommissionByUser`,
    
}