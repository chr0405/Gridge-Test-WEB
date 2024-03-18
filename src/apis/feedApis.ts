import axiosConfig from './axiosConfig';

const feed = {
    feeds: async (page: number) => {
        try {
            const response = await axiosConfig.get(`/feeds`, { 
                params: { 
                    size : 10,
                    page
                },
            });
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.error("Error fetching feeds:", error);
            console.log('feeds api 연결 실패');
            throw error; // 오류를 다시 던져서 호출자가 처리하도록 함
        }
    },

    liked: async (feedId : number) => {
        try {
            const response = await axiosConfig.get(`/feeds/${feedId}/like-users`, { 
                params: { 
                    feedId
                },
            });
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.error("Error fetching liked:", error);
            console.log('liked api 연결 실패');
            throw error; // 오류를 다시 던져서 호출자가 처리하도록 함
        }
    },

    comments: async (feedId : number, page : number) => {
        try {
            const response = await axiosConfig.get(`/feeds/${feedId}/comments`, { 
                params: { 
                    feedId,
                    size : 10,
                    page
                },
            });
            console.log('comments api 연결 실패');
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.error("Error fetching comments:", error);
            console.log('comments api 연결 실패');
            throw error;
        }
    }
};

export default feed;