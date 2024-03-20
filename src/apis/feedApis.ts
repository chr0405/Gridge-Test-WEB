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
            console.log('comments api 연결 성공');
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.error("Error fetching comments:", error);
            console.log('comments api 연결 실패');
            throw error;
        }
    },

    writeComment: async (feedId: number, commentText: string) => {
        try {
          const response = await axiosConfig.post(`/feeds/${feedId}/comment`, {
            commentText,
          });
          console.log('writeComment api 연결 성공: ', response);
          return response.data;
        } catch (error) {
          console.error('writeComment api 연결 실패: ', error);
          throw error;
        }
    },

    writeFeed: async (feedText : string, contentUrls : string[]) => {
        try {
          const response = await axiosConfig.post("/feeds", {
            feedText,
            contentUrls
          });
          console.log('writeFeed api 연결 성공: ', response);
          return response.data;
        } catch (error) {
            console.error('writeFeed api 연결 실패: ', error);
          throw error;
        }
    },

    deleteFeed: async (feedId: number) => {
        try {
          const response = await axiosConfig.patch(`/feeds/${feedId}/inactive`);
          console.log('deleteFeed api 연결 성공: ', response);
          return response.data;
        } catch (error) {
            console.error('deleteFeed api 연결 실패: ', error);
          throw error;
        }
    },

    updateFeed: async (feedId: number, feedText: string) => {
        try {
          const response = await axiosConfig.patch(`/feeds/${feedId}`, {
            feedText,
          });
          console.log('updateFeed api 연결 성공: ', response);
          return response.data;
        } catch (error) {
            console.error('updateFeed api 연결 실패: ', error);
          throw error;
        }
    },
};

export default feed;