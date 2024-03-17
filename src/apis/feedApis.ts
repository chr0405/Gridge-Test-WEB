import axiosConfig from './axiosConfig';

const feed = {
    feeds: async (size: number, page: number) => {
        try {
            const response = await axiosConfig.get(`/feeds`, { params: { size, page } });
            console.log(response);
            return response;
        } catch (error) {
            console.error("Error fetching feeds:", error);
            console.log('feeds api 연결 실패');
            throw error; // 오류를 다시 던져서 호출자가 처리하도록 함
        }
    }
};

export default feed;